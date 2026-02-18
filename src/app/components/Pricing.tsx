export default function Pricing() {
    return (
        <section id="pricing" className="py-24 bg-[#0f0f0f] relative overflow-hidden">
            {/* Decorative blur */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#F1B715]/5 rounded-full blur-[150px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Simple, Transparent Pricing</h2>
                    <p className="text-gray-400">Choose the plan that fits your restaurant&apos;s size.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Starter Plan */}
                    <div className="p-8 rounded-3xl bg-[#111] border border-white/5 flex flex-col hover:border-gray-700 transition-colors">
                        <div className="mb-8">
                            <h3 className="text-white text-xl font-bold mb-2">Starter</h3>
                            <p className="text-gray-500 text-sm">Perfect for small cafes.</p>
                        </div>
                        <div className="mb-8">
                            <span className="text-4xl font-bold text-white">$29</span>
                            <span className="text-gray-500">/mo</span>
                        </div>
                        <ul className="space-y-4 mb-8 flex-1 text-gray-400 text-sm">
                            <li className="flex items-center gap-3"><span className="text-[#F1B715]">✓</span> Digital Menu</li>
                            <li className="flex items-center gap-3"><span className="text-[#F1B715]">✓</span> 500 Orders/mo</li>
                            <li className="flex items-center gap-3"><span className="text-[#F1B715]">✓</span> Basic Analytics</li>
                        </ul>
                        <button className="w-full py-4 rounded-xl border border-white/10 text-white font-bold hover:bg-white hover:text-black transition-all">
                            Get Started
                        </button>
                    </div>

                    {/* Pro Plan */}
                    <div className="p-8 rounded-3xl bg-[#1a1a1a] border border-[#F1B715] flex flex-col relative transform md:-translate-y-4 shadow-[0_0_50px_rgba(241,183,21,0.1)]">
                        <div className="absolute top-0 right-0 bg-[#F1B715] text-black text-xs font-bold px-3 py-1 rounded-bl-xl rounded-tr-2xl">
                            POPULAR
                        </div>
                        <div className="mb-8">
                            <h3 className="text-white text-xl font-bold mb-2">Growth</h3>
                            <p className="text-gray-500 text-sm">For busy restaurants.</p>
                        </div>
                        <div className="mb-8">
                            <span className="text-5xl font-bold text-white">$79</span>
                            <span className="text-gray-500">/mo</span>
                        </div>
                        <ul className="space-y-4 mb-8 flex-1 text-gray-300 text-sm">
                            <li className="flex items-center gap-3"><span className="text-[#F1B715]">✓</span> Everything in Starter</li>
                            <li className="flex items-center gap-3"><span className="text-[#F1B715]">✓</span> Unlimited Orders</li>
                            <li className="flex items-center gap-3"><span className="text-[#F1B715]">✓</span> Advanced Analytics</li>
                            <li className="flex items-center gap-3"><span className="text-[#F1B715]">✓</span> Table Management</li>
                        </ul>
                        <button className="w-full py-4 rounded-xl bg-[#F1B715] text-black font-bold hover:scale-105 transition-transform shadow-[0_0_20px_rgba(241,183,21,0.3)]">
                            Try Free for 14 Days
                        </button>
                    </div>

                    {/* Enterprise Plan */}
                    <div className="p-8 rounded-3xl bg-[#111] border border-white/5 flex flex-col hover:border-gray-700 transition-colors">
                        <div className="mb-8">
                            <h3 className="text-white text-xl font-bold mb-2">Enterprise</h3>
                            <p className="text-gray-500 text-sm">For chains & franchises.</p>
                        </div>
                        <div className="mb-8">
                            <span className="text-4xl font-bold text-white">Custom</span>
                        </div>
                        <ul className="space-y-4 mb-8 flex-1 text-gray-400 text-sm">
                            <li className="flex items-center gap-3"><span className="text-[#F1B715]">✓</span> Multi-location Support</li>
                            <li className="flex items-center gap-3"><span className="text-[#F1B715]">✓</span> Dedicated Manager</li>
                            <li className="flex items-center gap-3"><span className="text-[#F1B715]">✓</span> Custom Integration</li>
                            <li className="flex items-center gap-3"><span className="text-[#F1B715]">✓</span> 24/7 Priority Support</li>
                        </ul>
                        <button className="w-full py-4 rounded-xl border border-white/10 text-white font-bold hover:bg-white hover:text-black transition-all">
                            Contact Sales
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}

