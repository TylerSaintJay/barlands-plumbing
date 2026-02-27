import { motion } from "motion/react";
import { Wrench, Zap, ShieldAlert, Droplets, CheckCircle2, Phone, Sparkles } from "lucide-react";
import config from "../config.json";

export default function BlockedDrains() {
    return (
        <div className="pt-20">
            {/* Hero Section */}
            <section className="relative h-[60vh] min-h-[500px] flex items-center overflow-hidden bg-slate-900">
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.unsplash.com/photo-1542037104857-ffbb0b9155fb?auto=format&fit=crop&q=80&w=2000"
                        alt="Drain Cleaning"
                        className="w-full h-full object-cover opacity-30"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/40 to-transparent" />
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-2xl"
                    >
                        <div className="flex items-center gap-2 mb-6">
                            <span className="w-12 h-1 bg-primary rounded-full" />
                            <span className="text-primary font-bold tracking-widest uppercase text-sm">Industrial Strength Solutions</span>
                        </div>
                        <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 border-l-4 border-primary pl-8">
                            Blocked Drains <br /> <span className="text-orange-400">Solved.</span>
                        </h1>
                        <p className="text-slate-300 text-lg mb-10 leading-relaxed">
                            From residential sinks to municipal main lines, we use Electro-Roto technology and High-Pressure Jetting to clear the toughest blockages.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <button className="bg-primary text-white px-8 py-4 rounded-xl font-bold text-lg hover:shadow-lg shadow-orange-500/20 transition-all">
                                Book a Drain Tech
                            </button>
                            <button className="glass-dark text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition-all border border-white/20">
                                View Pricing
                            </button>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Solutions Grid */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-slate-900 mb-4">The Scale of Solutions</h2>
                        <p className="text-slate-600 max-w-2xl mx-auto">No job is too small or too complex. We handle it all with precision.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            { t: "Residential Waste", d: "Kitchen sinks, showers, and bathrooms cleared in minutes.", icon: <Sparkles className="w-8 h-8 text-yellow-500" /> },
                            { t: "Main Sewer Lines", d: "Eliminating root ingress and heavy sludge from main waste lines.", icon: <Wrench className="w-8 h-8 text-orange-500" /> },
                            { t: "Storm Water Drains", d: "Clearing debris and blockages to prevent property flooding.", icon: <Droplets className="w-8 h-8 text-orange-400" /> }
                        ].map((item, i) => (
                            <div key={i} className="p-10 rounded-[2.5rem] bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-2xl transition-all duration-500 group">
                                <div className="mb-6 transform transition-transform group-hover:scale-110 duration-500">{item.icon}</div>
                                <h3 className="text-2xl font-bold text-slate-900 mb-4">{item.t}</h3>
                                <p className="text-slate-600 leading-relaxed">{item.d}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Content Section - Health Risks */}
            <section className="py-24 bg-slate-50 overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div className="order-2 lg:order-1 relative">
                            <div className="absolute -top-12 -left-12 w-64 h-64 bg-red-500/5 rounded-full blur-3xl" />
                            <div className="relative p-8 rounded-[3rem] bg-white border border-red-100 shadow-xl">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="bg-red-50 p-3 rounded-2xl">
                                        <ShieldAlert className="w-8 h-8 text-red-500" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-slate-900">Health Warning</h3>
                                        <p className="text-red-500 text-sm font-medium">Critical Risk Level</p>
                                    </div>
                                </div>
                                <p className="text-slate-600 mb-8 leading-relaxed">
                                    Stagnant sewage and blocked waste lines are major health hazards. Unattended blocks can lead to:
                                </p>
                                <div className="space-y-4">
                                    {['Toxic gas buildup', 'Bacterial contamination', 'Severe property flooding', 'Permanent pipe damage'].map((text, i) => (
                                        <div key={i} className="flex items-center gap-3 text-slate-700 font-semibold text-sm">
                                            <div className="w-2 h-2 rounded-full bg-red-500" />
                                            {text}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="order-1 lg:order-2">
                            <h2 className="text-4xl font-bold text-slate-900 mb-8">Why Burgess Plumbing?</h2>
                            <div className="space-y-8">
                                <div className="flex gap-6">
                                    <div className="shrink-0 w-14 h-14 bg-orange-100 rounded-2xl flex items-center justify-center">
                                        <Zap className="w-6 h-6 text-orange-600" />
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-bold text-slate-900 mb-2">Electro-Roto Technology</h4>
                                        <p className="text-slate-600 leading-relaxed">High-torque mechanical clearing that reaches where others can't.</p>
                                    </div>
                                </div>
                                <div className="flex gap-6">
                                    <div className="shrink-0 w-14 h-14 bg-orange-100 rounded-2xl flex items-center justify-center">
                                        <Droplets className="w-6 h-6 text-orange-600" />
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-bold text-slate-900 mb-2">High-Pressure Jetting</h4>
                                        <p className="text-slate-600 leading-relaxed">Surgical water pressure that scrubs pipe walls clean of sludge and grease.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Global CTA */}
            <section className="py-24 bg-slate-900 relative">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 border-b-2 border-primary pb-8 inline-block">
                        Clear Roads Ahead.
                    </h2>
                    <p className="text-slate-400 text-lg mb-12 max-w-xl mx-auto">
                        Schedule a professional drain cleaning and prevent a mess before it starts.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <a href={`tel:${config.contact.phone}`} className="bg-primary text-white px-10 py-5 rounded-2xl font-bold text-xl hover:shadow-2xl transition-all flex items-center justify-center gap-3">
                            <Phone className="w-6 h-6" />
                            Call Emergency
                        </a>
                        <button className="bg-white text-slate-900 px-10 py-5 rounded-2xl font-bold text-xl hover:bg-slate-50 transition-all shadow-xl">
                            Get a Quote
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
}
