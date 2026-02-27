import { motion } from "motion/react";
import { Flame, Droplets, ShieldCheck, Sun, CheckCircle2, Phone, Zap } from "lucide-react";
import config from "../config.json";

export default function GeyserServices() {
    const offerings = [
        { title: "Electric Geysers", description: "Installation and repair of all major brands (Kwikot, Heat Tech).", icon: <Zap className="w-8 h-8" /> },
        { title: "Solar Geysers", description: "Eco-friendly solutions to slash your electricity bill.", icon: <Sun className="w-8 h-8" /> },
        { title: "Heat Pumps", description: "High-efficiency heating systems for massive energy savings.", icon: <Flame className="w-8 h-8" /> }
    ];

    return (
        <div className="pt-20">
            {/* Hero Section */}
            <section className="relative h-[60vh] min-h-[500px] flex items-center overflow-hidden bg-slate-900 text-center">
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80&w=2000"
                        alt="Geyser Tech"
                        className="w-full h-full object-cover opacity-40 grayscale"
                    />
                    <div className="absolute inset-0 bg-orange-600/20 mix-blend-overlay" />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                    <motion.div
                        initial={{ opacity: 0, scale: 1.1 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1 }}
                    >
                        <h1 className="text-5xl md:text-8xl font-bold text-white mb-6 tracking-tighter">
                            Hot Water. <span className="text-primary italic">Guaranteed.</span>
                        </h1>
                        <p className="text-slate-200 text-xl max-w-2xl mx-auto mb-10 font-medium">
                            Elite geyser installations and repairs. PIRB certified professionals available 24/7.
                        </p>
                        <div className="flex justify-center flex-wrap gap-4">
                            <a href={`tel:${config.contact.phone}`} className="bg-primary text-white px-10 py-5 rounded-3xl font-bold text-xl hover:scale-105 transition-all shadow-2xl shadow-orange-500/40 flex items-center gap-3">
                                <Phone className="w-6 h-6" />
                                Emergency Repair
                            </a>
                            <button className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-10 py-5 rounded-3xl font-bold text-xl hover:bg-white/20 transition-all">
                                New Installation
                            </button>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Grid - Glassmorphism Offering */}
            <section className="py-24 bg-white relative">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 -mt-24 relative z-20">
                        {offerings.map((item, idx) => (
                            <div key={idx} className="glass group p-10 rounded-[3rem] border border-white shadow-2xl shadow-slate-200/50 hover:bg-primary transition-all duration-500">
                                <div className="w-16 h-16 bg-orange-50 text-orange-600 rounded-3xl flex items-center justify-center mb-8 group-hover:bg-white/10 group-hover:text-white transition-all">
                                    {item.icon}
                                </div>
                                <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-white transition-all">{item.title}</h3>
                                <p className="text-slate-600 leading-relaxed group-hover:text-white/80 transition-all">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Trust Section */}
            <section className="py-24 bg-slate-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                        <div>
                            <div className="flex items-center gap-3 mb-6">
                                <ShieldCheck className="w-10 h-10 text-primary" />
                                <h2 className="text-4xl font-bold text-slate-900 tracking-tight">PIRB Certified Excellence</h2>
                            </div>
                            <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                                A geyser installation is a serious matter. Incorrect installation can lead to structural damage or even explosion.
                                At Burgess Plumbing, we ensure every unit is fitted with the correct drip trays, vacuum breakers, and pressure valves.
                            </p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                {['SABS Approved Components', '1-Year Workmanship Guarantee', 'Insurance Co-payment Help', 'Compliance Certificates (COC)'].map((text, i) => (
                                    <div key={i} className="flex items-center gap-3 bg-white p-4 rounded-2xl border border-slate-100 shadow-sm">
                                        <CheckCircle2 className="w-5 h-5 text-green-500" />
                                        <span className="text-sm font-bold text-slate-700">{text}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="relative">
                            <div className="absolute inset-0 bg-primary/10 rounded-[4rem] rotate-3 scale-105" />
                            <div className="relative aspect-[4/5] rounded-[3.5rem] overflow-hidden shadow-2xl">
                                <img src="https://images.unsplash.com/photo-1581244277943-fe4a9c777189?auto=format&fit=crop&q=80&w=1200" alt="Plumbing Work" className="w-full h-full object-cover" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Global CTA */}
            <section className="py-24 bg-primary relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <Sun className="absolute -top-24 -right-24 w-96 h-96 text-white animate-pulse" />
                </div>
                <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">
                        Switch to Efficiency. <br /> <span className="text-orange-200">Save on Electricity.</span>
                    </h2>
                    <p className="text-orange-100 text-lg mb-12 max-w-xl mx-auto">
                        Contact us for a free solar geyser or heat pump feasibility study. Let's modernize your home.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <a href={`tel:${config.contact.phone}`} className="bg-slate-900 text-white px-10 py-5 rounded-2xl font-bold text-xl hover:bg-black transition-all flex items-center justify-center gap-3">
                            <Phone className="w-6 h-6" />
                            Call Specialist
                        </a>
                        <button className="bg-white text-primary px-10 py-5 rounded-2xl font-bold text-xl hover:bg-orange-50 transition-all shadow-xl">
                            Get Quote
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
}
