import Link from "next/link"; // Changed import format to match strict requirements if any, but regular is fine.

export default function Footer() {
    return (
        <footer className="bg-[#0f0f0f] border-t border-white/5 py-12">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    <div className="col-span-1 md:col-span-1">
                        <Link href="/" className="text-2xl font-bold text-white tracking-tighter mb-4 block">
                            Dine<span className="text-[#F1B715]">ezee</span>
                        </Link>
                        <p className="text-gray-500 text-sm leading-relaxed">
                            Revolutionizing the dining experience, one scan at a time.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-4">Product</h4>
                        <ul className="space-y-2 text-sm text-gray-500">
                            <li><a href="#" className="hover:text-[#F1B715] transition-colors">Features</a></li>
                            <li><a href="#" className="hover:text-[#F1B715] transition-colors">Pricing</a></li>
                            <li><a href="#" className="hover:text-[#F1B715] transition-colors">Integrations</a></li>
                            <li><a href="#" className="hover:text-[#F1B715] transition-colors">Changelog</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-4">Company</h4>
                        <ul className="space-y-2 text-sm text-gray-500">
                            <li><a href="#" className="hover:text-[#F1B715] transition-colors">About</a></li>
                            <li><a href="#" className="hover:text-[#F1B715] transition-colors">Careers</a></li>
                            <li><a href="#" className="hover:text-[#F1B715] transition-colors">Blog</a></li>
                            <li><a href="#" className="hover:text-[#F1B715] transition-colors">Contact</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-4">Legal</h4>
                        <ul className="space-y-2 text-sm text-gray-500">
                            <li><a href="#" className="hover:text-[#F1B715] transition-colors">Privacy Policy</a></li>
                            <li><a href="#" className="hover:text-[#F1B715] transition-colors">Terms of Service</a></li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center bg-[#0f0f0f]">
                    <p className="text-gray-600 text-xs">© {new Date().getFullYear()} Dineezee Inc. All rights reserved.</p>
                    <div className="flex gap-4 mt-4 md:mt-0">
                        {/* Social icons placeholders */}
                        <div className="w-8 h-8 bg-white/5 rounded-full hover:bg-[#F1B715] transition-colors cursor-pointer" />
                        <div className="w-8 h-8 bg-white/5 rounded-full hover:bg-[#F1B715] transition-colors cursor-pointer" />
                        <div className="w-8 h-8 bg-white/5 rounded-full hover:bg-[#F1B715] transition-colors cursor-pointer" />
                    </div>
                </div>
            </div>
        </footer>
    );
}
