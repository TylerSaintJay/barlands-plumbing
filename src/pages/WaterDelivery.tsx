import { motion } from "motion/react";
import {
    Droplets,
    Truck,
    ShieldCheck,
    Waves,
    CheckCircle2,
    Phone,
    ArrowRight,
    GlassWater,
    Factory
} from "lucide-react";
import config from "../config.json";

export default function WaterDelivery() {
    return (
        <div className="pt-20">
            {/* Hero Section */}
            <section className="relative py-32 overflow-hidden bg-slate-950">
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.unsplash.com/photo-1548932813-91286c072120?auto=format&fit=crop&q=80&w=2000"
                        alt="Water Delivery"
                        className="w-full h-full object-cover opacity-30"
                        referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-950/80 to-slate-900" />
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/20 px-4 py-2 rounded-full mb-8">
                            <Droplets className="w-4 h-4 text-orange-400" />
                            <span className="text-orange-400 text-xs font-bold uppercase tracking-widest">Premium Water Solutions</span>
                        </div>
                        <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tight">
                            Reliable <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-200">Bulk Water</span> <br />
                            Delivery & Infrastructure
                        </h1>
                        <p className="text-slate-400 text-lg md:text-xl max-w-3xl mx-auto mb-12 leading-relaxed">
                            Ensuring your business and home never run dry. From municipal backup systems to potable tank delivery, Burgess Plumbing provides the fluid foundation for Edenvale's growth.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center gap-6">
                            <a href={`tel:${config.contact.phone}`} className="bg-orange-600 text-white px-10 py-5 rounded-2xl font-bold text-lg hover:bg-orange-700 transition-all flex items-center justify-center gap-3">
                                <Phone className="w-5 h-5" />
                                Urgent Delivery Request
                            </a>
                            <button className="bg-white/5 backdrop-blur-md text-white border border-white/10 px-10 py-5 rounded-2xl font-bold text-lg hover:bg-white/10 transition-all">
                                Custom Infrastructure Quote
                            </button>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Core Capabilities */}
            <section className="py-32 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="bg-slate-50 p-10 rounded-[2.5rem] border border-slate-100"
                        >
                            <div className="w-16 h-16 bg-orange-600 rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-orange-200">
                                <Truck className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="text-2xl font-bold text-slate-900 mb-4">Bulk Tanker Supply</h3>
                            <p className="text-slate-600 leading-relaxed mb-6">
                                Potable and non-potable water delivery on-demand. Ideal for filling pools, construction sites, and emergency domestic supply.
                            </p>
                            <ul className="space-y-3">
                                <li className="flex items-center gap-3 text-sm text-slate-500">
                                    <CheckCircle2 className="w-4 h-4 text-orange-500" /> SABS Approved Water Quality
                                </li>
                                <li className="flex items-center gap-3 text-sm text-slate-500">
                                    <CheckCircle2 className="w-4 h-4 text-orange-500" /> Same-day delivery available
                                </li>
                            </ul>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="bg-slate-900 p-10 rounded-[2.5rem] text-white"
                        >
                            <div className="w-16 h-16 bg-orange-500 rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-orange-900">
                                <GlassWater className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="text-2xl font-bold mb-4">Backup Water Systems</h3>
                            <p className="text-slate-400 leading-relaxed mb-6">
                                Never be at the mercy of municipal outages. We design and install automated JoJo tank systems with silent booster pumps.
                            </p>
                            <ul className="space-y-3 text-slate-300">
                                <li className="flex items-center gap-3 text-sm">
                                    <CheckCircle2 className="w-4 h-4 text-orange-400" /> Seamless automatic switchover
                                </li>
                                <li className="flex items-center gap-3 text-sm">
                                    <CheckCircle2 className="w-4 h-4 text-orange-400" /> Integrated UV filtration
                                </li>
                            </ul>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="bg-slate-50 p-10 rounded-[2.5rem] border border-slate-100"
                        >
                            <div className="w-16 h-16 bg-orange-600 rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-orange-200">
                                <Factory className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="text-2xl font-bold text-slate-900 mb-4">Industrial Filtration</h3>
                            <p className="text-slate-600 leading-relaxed mb-6">
                                Advanced water purification for sensitive equipment or pure drinking water. Reverse Osmosis and carbon block solutions.
                            </p>
                            <ul className="space-y-3">
                                <li className="flex items-center gap-3 text-sm text-slate-500">
                                    <CheckCircle2 className="w-4 h-4 text-orange-500" /> 99.9% Contaminant removal
                                </li>
                                <li className="flex items-center gap-3 text-sm text-slate-500">
                                    <CheckCircle2 className="w-4 h-4 text-orange-500" /> Remote system monitoring
                                </li>
                            </ul>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Technical Process Section */}
            <section className="py-32 bg-slate-50 relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row gap-20 items-center">
                        <div className="flex-1">
                            <h2 className="text-4xl font-bold text-slate-950 mb-8 tracking-tight">The Fluid Security <br />Infrastructure Protocol</h2>
                            <div className="space-y-8">
                                {[
                                    { title: "Site Assessment", desc: "Detailed analysis of your water consumption and storage viability." },
                                    { title: "System Engineering", desc: "Custom CAD drawings for pump sizing and pipe routing." },
                                    { title: "Precision Installation", desc: "Clean, professional implementation by certified master plumbers." },
                                    { title: "Testing & Quality Control", desc: "Pressure testing and water quality verification." }
                                ].map((step, idx) => (
                                    <div key={idx} className="flex gap-6">
                                        <div className="text-orange-600 font-bold text-xl opacity-20">0{idx + 1}</div>
                                        <div>
                                            <h4 className="font-bold text-slate-900 mb-1">{step.title}</h4>
                                            <p className="text-slate-500 text-sm">{step.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="flex-1 relative">
                            <div className="aspect-square bg-orange-600 rounded-[3rem] overflow-hidden shadow-3xl shadow-orange-200">
                                <img
                                    src="https://images.unsplash.com/photo-1542367592-8849eb950fd8?auto=format&fit=crop&q=80&w=1000"
                                    alt="Technical Installation"
                                    className="w-full h-full object-cover"
                                    referrerPolicy="no-referrer"
                                />
                            </div>
                            <div className="absolute -bottom-10 -left-10 bg-white p-8 rounded-3xl shadow-2xl border border-slate-100 max-w-xs md:block hidden">
                                <div className="flex items-center gap-4 mb-4">
                                    <ShieldCheck className="w-10 h-10 text-orange-600" />
                                    <h5 className="font-bold text-slate-950 leading-tight">Guaranteed <br />Continuity</h5>
                                </div>
                                <p className="text-slate-500 text-xs leading-relaxed">
                                    We provide maintenance contracts to ensure your backup systems are always ready when the taps go dry.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-32 bg-orange-600 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <Waves className="w-[1000px] h-[1000px] -translate-x-1/2 -translate-y-1/2" />
                </div>
                <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">Ready to secure your water future?</h2>
                    <p className="text-orange-100 text-lg mb-12">
                        Contact our team for a comprehensive audit of your home or business water needs.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <a href={`tel:${config.contact.phone}`} className="bg-slate-950 text-white px-10 py-5 rounded-2xl font-bold text-xl hover:bg-black transition-all">
                            Call {config.contact.phone}
                        </a>
                        <button className="bg-white text-orange-600 px-10 py-5 rounded-2xl font-bold text-xl hover:bg-slate-50 transition-all">
                            Request Assessment
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
}
