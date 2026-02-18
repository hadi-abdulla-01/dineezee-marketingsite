export default function Contact() {
    return (
        <section id="contact" className="py-24 bg-[#0a0a0a]">
            <div className="max-w-4xl mx-auto px-6">
                <div className="bg-[#111] rounded-3xl p-8 md:p-12 border border-white/10 relative overflow-hidden">
                    {/* Decorative */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-[#F1B715]/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />

                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Get in Touch</h2>
                        <p className="text-gray-400">Have questions? We&apos;d love to hear from you.</p>
                    </div>

                    <form className="space-y-6 relative z-10">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-xs font-mono text-gray-500 uppercase tracking-widest pl-1">Name</label>
                                <input type="text" placeholder="John Doe" className="w-full bg-[#1a1a1a] border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-[#F1B715] transition-colors" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-mono text-gray-500 uppercase tracking-widest pl-1">Email</label>
                                <input type="email" placeholder="john@example.com" className="w-full bg-[#1a1a1a] border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-[#F1B715] transition-colors" />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-xs font-mono text-gray-500 uppercase tracking-widest pl-1">Message</label>
                            <textarea rows={5} placeholder="Tell us about your restaurant..." className="w-full bg-[#1a1a1a] border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-[#F1B715] transition-colors"></textarea>
                        </div>

                        <button className="w-full bg-[#F1B715] text-black font-bold text-lg py-5 rounded-xl hover:bg-white transition-colors shadow-lg">
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}

