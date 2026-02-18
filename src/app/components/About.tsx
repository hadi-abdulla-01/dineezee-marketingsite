export default function About() {
    return (
        <section id="about" className="py-24 bg-[#0f0f0f] relative overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-[#F1B715]/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-blue-500/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="space-y-8">
                        <div className="inline-block">
                            <span className="text-[#F1B715] font-mono text-sm tracking-widest uppercase border-b border-[#F1B715] pb-1">
                                Wait Less, Eat More
                            </span>
                        </div>
                        <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight">
                            The Future of <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F1B715] to-[#fff]">Dining is Here.</span>
                        </h2>
                        <p className="text-gray-400 text-lg leading-relaxed max-w-2xl mx-auto">
                            Dineezee streamlines the restaurant experience by eliminating long wait times and confusing menus.
                            Simply scan, order, and pay directly from your table/device. We bridge the gap between hungry customers
                            and busy kitchens with seamless digital integration.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8 justify-center">
                            {[
                                { label: "Faster Service", value: "30%" },
                                { label: "Table Turnover", value: "2x" },
                                { label: "Customer Joy", value: "100%" }
                            ].map((stat, i) => (
                                <div key={i} className="border-t md:border-t-0 md:border-l border-[#F1B715]/30 pt-4 md:pt-0 md:pl-4">
                                    <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                                    <div className="text-xs text-gray-500 uppercase tracking-wider">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
