"use client";

import { useState, useEffect } from "react";
import Link from "next/link"; // Changed from 'next/link' to 'next/link' (standard import) - actually the import is correct, just adding comment for clarity
// import { Button } from "@/components/ui/button" // Assuming we might add shadcn later but for now custom CSS

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                ? "bg-[#0f0f0f]/80 backdrop-blur-md border-b border-white/10 py-4"
                : "bg-transparent py-6"
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
                <Link href="/" className="flex items-center gap-2 group">
                    <img
                        src="/DineEzee.svg"
                        alt="Dineezee Logo"
                        className={`w-auto object-contain hover:scale-105 transition-all duration-300 ${isScrolled ? "h-6 brightness-0 invert" : "h-8 brightness-0"
                            }`}
                    />
                </Link>

                <div className="hidden md:flex items-center gap-8">
                    {["About", "Features", "Pricing", "Contact"].map((item) => (
                        <a
                            key={item}
                            href={`#${item.toLowerCase()}`}
                            className="text-sm font-medium text-gray-300 hover:text-[#F1B715] transition-colors uppercase tracking-widest"
                        >
                            {item}
                        </a>
                    ))}
                </div>

                <div className="flex items-center gap-4">
                    <button className="hidden md:block px-6 py-2 rounded-full border border-[#F1B715] text-[#F1B715] hover:bg-[#F1B715] hover:text-black transition-all font-medium text-sm tracking-wide">
                        Login
                    </button>
                    <button className="px-6 py-2 rounded-full bg-[#F1B715] text-black hover:bg-white hover:text-black transition-all font-bold text-sm tracking-wide shadow-[0_0_20px_rgba(241,183,21,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)]">
                        Get Started
                    </button>
                </div>
            </div>
        </nav>
    );
}
