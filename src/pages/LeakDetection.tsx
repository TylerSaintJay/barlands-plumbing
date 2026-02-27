import { motion } from "motion/react";
import { Search, Thermometer, Radio, Zap, CheckCircle2, Phone, BarChart3 } from "lucide-react";
import config from "../config.json";

export default function LeakDetection() {
    const technologies = [
        { title: "Acoustic Detection", description: "Ultra-sensitive microphones to hear leaks through concrete and soil.", icon: <Radio className="w-6 h-6" /> },
        { title: "Thermal Imaging", description: "Infrared cameras to spot temperature variations caused by hidden water.", icon: <Thermometer className="w-6 h-6" /> },
        { title: "Gas Trace Detection", description: "Non-toxic gas injection used to find pinpoint leaks in complex systems.", icon: <Zap className="w-6 h-6" /> },
        { title: "CCTV Inspections", description: "High-definition cameras to visually inspect the internal state of pipes.", icon: <Search className="w-6 h-6" /> }
    ];

    return (
        <div className="pt-20">
            {/* Hero Section */}
            <section className="relative h-[60vh] min-h-[500px] flex items-center overflow-hidden bg-slate-900">
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=2000"
                        alt="Leak Detection Tech"
                        className="w-full h-full object-cover opacity-40"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-3xl"
                    >
                        <span className="inline-block px-4 py-1.5 rounded-full bg-orange-500/20 text-orange-400 text-sm font-semibold tracking-wide uppercase mb-6 backdrop-blur-sm border border-orange-500/30">
                            Advanced Non-Invasive Technology
                        </span>
                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                            Precision <span className="text-orange-400">Leak Detection</span>
                        </h1>
                        <p className="text-slate-300 text-lg mb-10">
                            Stop guessing and start saving. Our high-tech detection methods find leaks without breaking your walls or floors, saving you thousands in unnecessary repairs.
                        </p>
                        <div className="flex gap-4">
                            <button className="bg-primary text-white px-8 py-4 rounded-xl font-bold text-lg hover:opacity-90 transition-all shadow-xl shadow-orange-500/20">
                                Book a Detection Test
                            </button>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-slate-900 rounded-[3rem] p-12 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2" />
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10 items-center">
                            <div className="text-center md:text-left">
                                <BarChart3 className="w-12 h-12 text-primary mb-6 mx-auto md:mx-0" />
                                <h2 className="text-3xl font-bold text-white mb-4">The Silent Cost</h2>
                                <p className="text-slate-400 text-sm leading-relaxed">A tiny 0.5mm hole can waste up to <span className="text-white font-bold">475 liters</span> of water in just 24 hours.</p>
                            </div>
                            <div className="md:col-span-2 grid grid-cols-2 gap-8">
                                <div className="border-l border-white/10 pl-8">
                                    <div className="text-4xl font-bold text-white mb-2">99%</div>
                                    <p className="text-slate-400 text-xs uppercase tracking-widest font-bold">Accuracy Rate</p>
                                </div>
                                <div className="border-l border-white/10 pl-8">
                                    <div className="text-4xl font-bold text-white mb-2">R0</div>
                                    <p className="text-slate-400 text-xs uppercase tracking-widest font-bold">Invasive Damage</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Tech Stack - Bento Style */}
            <section className="py-24 bg-slate-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
                    <h2 className="text-4xl font-bold text-slate-900 mb-4">Our Technology Stack</h2>
                    <p className="text-slate-600 max-w-2xl mx-auto">We invest in the world's most advanced plumbing technology to provide you with surgical precision.</p>
                </div>
                <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {technologies.map((tech, idx) => (
                        <motion.div
                            key={idx}
                            whileHover={{ y: -5 }}
                            className="bg-white p-8 rounded-3xl shadow-sm border border-slate-200/50 flex flex-col items-center text-center"
                        >
                            <div className="w-16 h-16 bg-orange-50 text-orange-600 rounded-2xl flex items-center justify-center mb-6">
                                {tech.icon}
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-4">{tech.title}</h3>
                            <p className="text-slate-600 text-sm leading-relaxed">{tech.description}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Benefits Section */}
            <section className="py-24 bg-white overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col lg:flex-row gap-16 items-center">
                        <div className="flex-1">
                            <h2 className="text-4xl font-bold text-slate-900 mb-8">Why Use Professional Detection?</h2>
                            <div className="space-y-6">
                                {[
                                    { t: "Major Cost Savings", d: "Identify the exact leak point, preventing massive excavation costs." },
                                    { t: "Preserve Property", d: "No more 'hit and miss' digging. We keep your floors and walls intact." },
                                    { t: "Lower Water Bills", d: "Immediate detection stops the astronomical costs of hidden leaks." },
                                    { t: "Insurance-Ready Reports", d: "We provide detailed technical reports for insurance claims." }
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-4">
                                        <div className="shrink-0 w-6 h-6 rounded-full bg-green-100 flex items-center justify-center">
                                            <CheckCircle2 className="w-4 h-4 text-green-600" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-slate-900 mb-1">{item.t}</h4>
                                            <p className="text-slate-600 text-sm leading-relaxed">{item.d}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="flex-1 relative">
                            <div className="absolute -inset-4 bg-primary/5 rounded-[2rem] blur-2xl" />
                            <div className="relative glass p-4 rounded-[2rem] border border-white">
                                <img
                                    src="https://images.unsplash.com/photo-1517646287270-a5a90d0bb0fc?auto=format&fit=crop&q=80&w=1200"
                                    alt="Technician at work"
                                    className="w-full h-auto rounded-[1.5rem] shadow-xl"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Global CTA */}
            <section className="py-24 bg-primary relative">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">
                        Think you have a leak? <br /> <span className="opacity-90">Let's find it today.</span>
                    </h2>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <a href={`tel:${config.contact.phone}`} className="bg-white text-primary px-10 py-5 rounded-2xl font-bold text-xl hover:bg-slate-50 transition-all flex items-center justify-center gap-3">
                            <Phone className="w-6 h-6" />
                            Call {config.contact.phone}
                        </a>
                        <button className="bg-orange-700 text-white px-10 py-5 rounded-2xl font-bold text-xl hover:bg-orange-800 transition-all border border-orange-500/30">
                            Request Detection Test
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
}
