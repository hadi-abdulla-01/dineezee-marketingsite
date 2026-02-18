import { Zap, Shield, Smartphone, Clock, PieChart, Smile } from "lucide-react"; // Assuming we can use lucide-react, if not I'll use SVG 

export default function Features() {
    const features = [
        {
            title: "Instant Ordering",
            description: "No more waiting for waiters. Scan and order immediately.",
            icon: <Clock className="w-6 h-6 text-[#F1B715]" />,
        },
        {
            title: "Contactless Payment",
            description: "Secure, fast, and hygienic payments directly from your phone.",
            icon: <Zap className="w-6 h-6 text-[#F1B715]" />,
        },
        {
            title: "Real-time Tracking",
            description: "Know exactly when your food is being prepared and served.",
            icon: <Smartphone className="w-6 h-6 text-[#F1B715]" />,
        },
        {
            title: "Smart Analytics",
            description: "Restaurants get detailed insights into customer preferences.",
            icon: <PieChart className="w-6 h-6 text-[#F1B715]" />,
        },
        {
            title: "Secure & Private",
            description: "Your data is encrypted and handled with industry standards.",
            icon: <Shield className="w-6 h-6 text-[#F1B715]" />,
        },
        {
            title: "Loyalty Rewards",
            description: "Earn points with every meal and unlock exclusive deals.",
            icon: <Smile className="w-6 h-6 text-[#F1B715]" />,
        },
    ];

    return (
        <section id="features" className="py-24 bg-[#0a0a0a]">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Features that <span className="text-[#F1B715]">Delight</span></h2>
                    <p className="text-gray-400">Everything you need to modernize your restaurant and keep customers coming back for more.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, idx) => (
                        <div key={idx} className="group p-8 rounded-3xl bg-[#111] border border-white/5 hover:border-[#F1B715]/30 transition-all duration-300 hover:bg-[#161616]">
                            <div className="w-12 h-12 bg-[#F1B715]/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#F1B715] transition-colors">{feature.title}</h3>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
