import { motion } from "motion/react";
import {
    Zap,
    Droplet,
    ShieldAlert,
    Target,
    HardHat,
    Settings,
    Clock,
    Phone,
    ArrowRight
} from "lucide-react";
import config from "../config.json";

export default function HPJetting() {
    return (
        <div className="pt-20">
            {/* Hero Section */}
            <section className="relative py-32 overflow-hidden bg-slate-950">
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.unsplash.com/photo-1542336391-ae2936d8ef0a?auto=format&fit=crop&q=80&w=2000"
                        alt="High Pressure Jetting"
                        className="w-full h-full object-cover opacity-30 brightness-50"
                        referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-950/80 to-slate-900" />
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="inline-flex items-center gap-2 bg-red-500/10 border border-red-500/20 px-4 py-2 rounded-full mb-8">
                            <Zap className="w-4 h-4 text-red-500 animate-pulse" />
                            <span className="text-red-500 text-xs font-bold uppercase tracking-widest">Industrial Strength Solutions</span>
                        </div>
                        <h1 className="text-5xl md:text-8xl font-bold text-white mb-8 tracking-tight">
                            Ultra-High <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-orange-200 to-white">Pressure Jetting</span>
                        </h1>
                        <p className="text-slate-400 text-lg md:text-2xl max-w-4xl mx-auto mb-12 leading-relaxed font-medium">
                            Beyond standard unblocking. We utilize 3000+ PSI specialized jetting technology to descale, degrease, and restore industrial and municipal drainage systems to as-new condition.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center gap-6">
                            <a href={`tel:${config.contact.phone}`} className="bg-primary text-white px-12 py-6 rounded-2xl font-bold text-xl hover:shadow-[0_0_40px_rgba(5,36,99,0.5)] transition-all flex items-center justify-center gap-3">
                                <Phone className="w-6 h-6" />
                                Urgent Site Visit
                            </a>
                            <button className="bg-white/5 backdrop-blur-md text-white border border-white/10 px-12 py-6 rounded-2xl font-bold text-xl hover:bg-white/10 transition-all">
                                Request Master Contract
                            </button>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Technical Advantage */}
            <section className="py-32 bg-white relative">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                        <div>
                            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8 tracking-tight">The 3000 PSI Advantage</h2>
                            <p className="text-slate-500 text-lg mb-12 leading-relaxed">
                                Traditional mechanical unblocking (rooter) often leaves debris and buildup behind. Our HP Jetting units scour the entire internal diameter of the pipe, removing mineral deposits, hardened fat, and concrete slurry.
                            </p>

                            <div className="space-y-8">
                                {[
                                    {
                                        icon: <Target className="w-6 h-6" />,
                                        title: "Total Restoration",
                                        desc: "Unlike cables that just punch a hole, our jetting heads scour 100% of the pipe wall."
                                    },
                                    {
                                        icon: <Settings className="w-6 h-6" />,
                                        title: "Precision Nozzles",
                                        desc: "Custom heads for root cutting, grease emulsification, and descaling."
                                    },
                                    {
                                        icon: <ShieldAlert className="w-6 h-6" />,
                                        title: "Safe for Assets",
                                        desc: "Carefully calibrated pressure levels to ensure pipe integrity while maximizing cleaning power."
                                    }
                                ].map((item, idx) => (
                                    <div key={idx} className="flex gap-6 group">
                                        <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center text-primary border border-slate-100 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                                            {item.icon}
                                        </div>
                                        <div>
                                            <h4 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h4>
                                            <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="relative">
                            <div className="aspect-[4/5] bg-slate-200 rounded-[3rem] overflow-hidden shadow-2xl relative">
                                <img
                                    src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=1000"
                                    alt="Industrial Equipment"
                                    className="w-full h-full object-cover grayscale brightness-75 transition-all duration-700 hover:grayscale-0 hover:scale-105"
                                    referrerPolicy="no-referrer"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent flex items-end p-12">
                                    <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-8 rounded-3xl w-full">
                                        <div className="flex items-center gap-4 mb-4">
                                            <HardHat className="w-10 h-10 text-orange-400" />
                                            <div>
                                                <h5 className="font-bold text-white text-lg">Safety First Protocols</h5>
                                                <p className="text-slate-300 text-xs tracking-wide">COMPLIANT WITH MHSA & OHSA</p>
                                            </div>
                                        </div>
                                        <p className="text-slate-300 text-sm italic">"Our technicians are rigorously trained in high-pressure safety procedures and confined space entry."</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Service Grid */}
            <section className="py-32 bg-slate-50 relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-24">
                        <h2 className="text-4xl font-bold text-slate-900 mb-6 tracking-tight">Specialized Jetting Applications</h2>
                        <p className="text-slate-500 text-lg max-w-2xl mx-auto">
                            From shopping malls to processing plants, we provide the specific technology required for complex drainage environments.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        {[
                            {
                                title: "FOG Management",
                                subtitle: "Fat, Oil & Grease",
                                desc: "High-temperature jetting for commercial kitchens and food processing facilities to eliminate hardened grease mountains.",
                                accent: "border-orange-200 bg-orange-50/30"
                            },
                            {
                                title: "Root Destruction",
                                subtitle: "Tree Root Intrusions",
                                desc: "Hydro-mechanical cutter heads that pulverize invasive roots without damaging the host pipe structure.",
                                accent: "border-green-200 bg-green-50/30"
                            },
                            {
                                title: "Slurry & Sediment",
                                subtitle: "Construction Debris",
                                desc: "Heavy-duty flushing for sand, silt, and construction slurry in new developments or industrial sites.",
                                accent: "border-orange-200 bg-orange-50/30"
                            }
                        ].map((card, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className={`p-10 rounded-[3rem] border ${card.accent} hover:shadow-2xl transition-all group`}
                            >
                                <div className="text-xs font-black text-primary/40 uppercase tracking-[0.2em] mb-4">{card.subtitle}</div>
                                <h3 className="text-2xl font-bold text-slate-900 mb-6 tracking-tight">{card.title}</h3>
                                <p className="text-slate-500 text-sm leading-relaxed mb-10">{card.desc}</p>
                                <Link to="/services/blocked-drains" className="inline-flex items-center gap-2 text-primary font-bold text-sm group-hover:gap-3 transition-all">
                                    Technical Specs <ArrowRight className="w-4 h-4" />
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-32 bg-slate-950 relative overflow-hidden">
                {/* Animated waves/lines background */}
                <div className="absolute inset-0 opacity-20 pointer-events-none">
                    <motion.div
                        animate={{ x: [-10, 10, -10], opacity: [0.1, 0.3, 0.1] }}
                        transition={{ duration: 5, repeat: Infinity }}
                        className="absolute top-0 w-full h-full bg-[radial-gradient(circle_at_center,_white_1px,_transparent_1px)] bg-[size:40px_40px]"
                    />
                </div>

                <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
                    <h2 className="text-4xl md:text-6xl font-bold text-white mb-10 tracking-tight leading-tight">
                        Restore Flow to <br />
                        <span className="text-primary italic">Absolute Baseline.</span>
                    </h2>
                    <p className="text-slate-400 text-xl mb-12 font-medium">
                        Schedule a CCTV inspection and HP Jetting session for your facility today. Guaranteed results or we don't leave the site.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-6">
                        <a href={`tel:${config.contact.phone}`} className="bg-white text-slate-950 px-12 py-6 rounded-2xl font-bold text-xl hover:bg-orange-50 transition-all">
                            Immediate Deployment
                        </a>
                        <button className="bg-primary text-white border border-primary/20 px-12 py-6 rounded-2xl font-bold text-xl hover:shadow-[0_0_30px_rgba(5,36,99,0.3)] transition-all">
                            Enterprise Pricing
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
}

import { Link } from "react-router-dom";
