"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function ScrollyTelling() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const [loadingProgress, setLoadingProgress] = useState(0);
    const [isLoading, setIsLoading] = useState(true);
    const imagesRef = useRef<HTMLImageElement[]>([]);

    const FRAME_COUNT = 431;
    const FRAME_PATH = "/frames/edited_apo8_";

    // Configuration for Text Scenes based on Frame Numbers
    const TEXT_SCENES = [
        {
            type: "intro",
            text: "",
            subText: "Restaurant Experience, Reinvented.",
            startFrame: 0,
            endFrame: 60
        },
        {
            text: "Frustrated with waiting?",
            subText: "The old way is slow.",
            startFrame: 70,
            endFrame: 110
        },
        {
            text: "Dineezee Solves It.",
            subText: "",
            startFrame: 120,
            endFrame: 170
        },
        {
            text: "Scanning our QR...",
            subText: "Instant access.",
            startFrame: 190,
            endFrame: 250
        },
        {
            text: "Browsing & Placing Order",
            subText: "Digital & Seamless.",
            startFrame: 270,
            endFrame: 360
        },
        {
            text: "Food Getting Delivered",
            subText: "Served fast.",
            startFrame: 380,
            endFrame: 430
        }
    ];

    useEffect(() => {
        // Register GSAP plugin safely
        gsap.registerPlugin(ScrollTrigger);

        const loadImages = async () => {
            const promises: Promise<void>[] = [];
            const imageObjects: HTMLImageElement[] = new Array(FRAME_COUNT);
            let loadedCount = 0;

            for (let i = 0; i < FRAME_COUNT; i++) {
                const promise = new Promise<void>((resolve) => {
                    const img = new Image();
                    // Frame names start from 1000
                    const currentFrameIndex = 1000 + i;
                    const src = `${FRAME_PATH}${currentFrameIndex}.png`;

                    img.src = src;
                    // Store in correct index (0-based)
                    imageObjects[i] = img;

                    img.onload = () => {
                        loadedCount++;
                        if (loadedCount % 10 === 0 || loadedCount === FRAME_COUNT) {
                            setLoadingProgress(Math.round((loadedCount / FRAME_COUNT) * 100));
                        }
                        resolve();
                    };
                    img.onerror = () => {
                        // console.error(`Failed to load image: ${src}`); // Suppress excessive logs
                        loadedCount++;
                        resolve();
                    };
                });
                promises.push(promise);
            }

            imagesRef.current = imageObjects;
            await Promise.all(promises);
            setIsLoading(false);
        };

        loadImages();

        return () => {
            ScrollTrigger.getAll().forEach(t => t.kill());
        };
    }, []);

    useEffect(() => {
        if (isLoading) return;
        if (!canvasRef.current || !containerRef.current) return;

        const canvas = canvasRef.current;
        const context = canvas.getContext("2d", { alpha: false });
        if (!context) return;

        const render = (index: number) => {
            if (index < 0) index = 0;
            if (index >= FRAME_COUNT) index = FRAME_COUNT - 1;

            const img = imagesRef.current[index];
            if (!img || !img.complete || img.naturalWidth === 0) return;

            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;

            // Maintain aspect ratio (cover)
            const targetRatio = canvas.width / canvas.height;
            const imgRatio = img.naturalWidth / img.naturalHeight;

            let sx, sy, sw, sh;
            if (imgRatio > targetRatio) {
                sh = img.naturalHeight;
                sw = img.naturalHeight * targetRatio;
                sx = (img.naturalWidth - sw) / 2;
                sy = 0;
            } else {
                sw = img.naturalWidth;
                sh = img.naturalWidth / targetRatio;
                sx = 0;
                sy = (img.naturalHeight - sh) / 2;
            }

            context.clearRect(0, 0, canvas.width, canvas.height);
            context.drawImage(img, sx, sy, sw, sh, 0, 0, canvas.width, canvas.height);
        };

        render(0);

        const playhead = { frame: 0 };

        // Re-do timeline with explicit duration for easy mapping
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top top",
                    end: "bottom bottom",
                    scrub: 0.5,
                }
            });

            // 1. The Video Track - Duration = FRAME_COUNT
            tl.to(playhead, {
                frame: FRAME_COUNT - 1,
                ease: "none",
                duration: FRAME_COUNT, // Make duration match frames exactly
                onUpdate: () => render(Math.round(playhead.frame)),
            });

            // Intro Splash Fade Out
            tl.to(".intro-splash", { opacity: 0, pointerEvents: "none", duration: 60, ease: "power2.in" }, 0);

            // 2. The Text Tracks - Inserted at specific Frame times
            const items = gsap.utils.toArray<HTMLElement>(".scene-text");

            TEXT_SCENES.forEach((scene, index) => {
                if (scene.type === "intro") return;

                const element = items[index];
                if (!element) return;

                const fadeInDur = 10; // Frames to fade in
                const fadeOutDur = 10; // Frames to fade out

                // Fade In
                tl.fromTo(element,
                    { opacity: 0, y: 50, scale: 0.9 },
                    { opacity: 1, y: 0, scale: 1, duration: fadeInDur, ease: "power2.out" },
                    scene.startFrame // Insert exactly at startFrame
                );

                // Fade Out
                tl.to(element,
                    { opacity: 0, y: -50, blur: 10, duration: fadeOutDur, ease: "power2.in" },
                    scene.endFrame - fadeOutDur // Start fading out before endFrame
                );
            });

            // Scroll Hint Animation (Fade out as we scroll)
            tl.to(".scroll-hint", { opacity: 0, duration: 30 }, 0);

        }, containerRef);


        const onResize = () => requestAnimationFrame(() => render(Math.round(playhead.frame)));
        window.addEventListener("resize", onResize);

        return () => {
            window.removeEventListener("resize", onResize);
            ctx.revert();
        };
    }, [isLoading]);

    if (isLoading) {
        return (
            <div className="h-screen w-full flex flex-col items-center justify-center bg-[#0f0f0f] text-white">
                <div className="w-16 h-16 border-4 border-[#F1B715] border-t-transparent rounded-full animate-spin mb-4" />
                <p className="font-sans text-xl font-medium tracking-wide">Loading Experience</p>
                <div className="w-64 h-1 bg-gray-800 mt-4 rounded-full overflow-hidden">
                    <div
                        className="h-full bg-[#F1B715] transition-all duration-300 ease-out"
                        style={{ width: `${loadingProgress}%` }}
                    />
                </div>
                <p className="mt-2 text-sm text-gray-500 font-mono">{loadingProgress}%</p>
            </div>
        );
    }

    return (
        <div className="relative bg-[#0f0f0f]">
            {/* Height controls scroll sensitivity - Reduced to 1200vh for very fast scroll */}
            <div ref={containerRef} className="relative" style={{ height: "1200vh" }}>
                <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
                    <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

                    {/* Intro Splash Screen (Yellow Background) */}
                    <div className="intro-splash absolute inset-0 z-30 flex flex-col items-center justify-center bg-[#F1B715]">
                        <img src="/DineEzee.svg" alt="Dineezee Logo" className="h-32 md:h-48 w-auto mb-6 drop-shadow-2xl"
                            onError={(e) => { e.currentTarget.style.display = 'none'; document.getElementById('alt-title')!.style.display = 'block'; }} />
                        <h1 id="alt-title" className="hidden text-black text-5xl font-bold tracking-tighter drop-shadow-md">Dineezee</h1>
                        <h2 className="text-black text-2xl md:text-3xl font-bold tracking-tight mt-4">Restaurant Experience, Reinvented.</h2>

                        {/* Scroll Hint inside intro */}
                        <div className="scroll-hint absolute bottom-12 flex flex-col items-center animate-bounce">
                            <p className="text-black text-sm uppercase tracking-[0.2em] font-bold mb-2">Scroll to Explore</p>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                            </svg>
                        </div>
                    </div>

                    {/* Text Scenes (Transparent, No Box) */}
                    {TEXT_SCENES.map((scene, index) => {
                        // Keep a placeholder for intro to maintain index alignment for GSAP
                        if (scene.type === "intro") return <div key={index} className="scene-text hidden"></div>;

                        return (
                            <div key={index} className="scene-text absolute inset-0 z-20 flex flex-col items-center justify-center pointer-events-none opacity-0 px-4">
                                <div className="max-w-5xl text-center">
                                    <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tighter drop-shadow-[0_4px_4px_rgba(0,0,0,1)] mb-4"
                                        style={{ textShadow: '0px 0px 20px rgba(0,0,0,0.9)' }}>
                                        {scene.text.split(" ").map((word, i) => {
                                            const highlight = ["Solves", "Order", "Delivered"].includes(word.replace(/[^a-zA-Z]/g, ""));
                                            return (
                                                <span key={i} className={highlight ? "text-[#F1B715]" : ""}>
                                                    {word}{" "}
                                                </span>
                                            );
                                        })}
                                    </h2>
                                    {scene.subText && (
                                        <p className="text-xl md:text-3xl text-gray-100 font-semibold tracking-wide drop-shadow-[0_2px_2px_rgba(0,0,0,1)]"
                                            style={{ textShadow: '0px 0px 10px rgba(0,0,0,0.9)' }}>
                                            {scene.subText}
                                        </p>
                                    )}
                                </div>
                            </div>
                        );
                    })}

                    {/* Fixed 'Get Started' CTA is handled outside wrapper */}
                </div>
            </div>


        </div>
    );
}
