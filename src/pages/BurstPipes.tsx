import { motion } from "motion/react";
import { Droplets, Clock, ShieldAlert, ArrowRight, CheckCircle2, Phone, HelpCircle } from "lucide-react";
import config from "../config.json";

export default function BurstPipes() {
    const causes = [
        { title: "Old Age", description: "Corroded pipes naturally weaken over decades of use." },
        { title: "High Pressure", description: "Sudden surges in municipal water pressure can stress joints." },
        { title: "Corrosion", description: "Chemical reactions with soil or water can eat through metal." },
        { title: "Incorrect Installation", description: "Poorly fitted joints or wrong material choices lead to failure." }
    ];

    const steps = [
        { number: "01", title: "Locate", description: "Precision identification of the rupture point." },
        { number: "02", title: "Assess", description: "Determining if a repair or replacement is most cost-effective." },
        { number: "03", title: "Repair", description: "Immediate resolution using high-grade SABS fittings." }
    ];

    const faqs = [
        { q: "What should I do first if a pipe bursts?", a: "Turn off your main water valve immediately and call our emergency line." },
        { q: "How quickly can you arrive?", a: "We guarantee a 30-60 minute arrival time for emergencies in major metros." },
        { q: "Do you offer a guarantee on repairs?", a: "Yes, all our workmanship and SABS-approved materials are guaranteed." }
    ];

    return (
        <div className="pt-20">
            {/* Hero Section */}
            <section className="relative h-[60vh] min-h-[500px] flex items-center overflow-hidden bg-slate-900">
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.unsplash.com/photo-1542037104857-ffbb0b9155fb?auto=format&fit=crop&q=80&w=2000"
                        alt="Pipe Repair"
                        className="w-full h-full object-cover opacity-40"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="inline-block px-4 py-1.5 rounded-full bg-red-500/20 text-red-400 text-sm font-semibold tracking-wide uppercase mb-6 backdrop-blur-sm border border-red-500/30">
                            24/7 Emergency Service
                        </span>
                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                            Burst Pipe <span className="text-orange-400">Repair Specialists</span>
                        </h1>
                        <p className="text-slate-300 text-lg max-w-2xl mx-auto mb-10">
                            A burst pipe is a race against time. We provide rapid-response solutions to minimize damage and restore your water supply within hours.
                        </p>
                        <a href={`tel:${config.contact.phone}`} className="inline-flex items-center gap-3 bg-primary text-white px-8 py-4 rounded-xl font-bold text-lg hover:opacity-90 transition-all shadow-xl shadow-orange-500/20">
                            <Phone className="w-5 h-5" />
                            Emergency Call: {config.contact.phone}
                        </a>
                    </motion.div>
                </div>
            </section>

            {/* Info Cards - Glassmorphism */}
            <section className="py-24 bg-white relative">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 -mt-32 relative z-20">
                        {causes.map((item, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="glass p-8 rounded-3xl border border-white shadow-2xl shadow-slate-200/50"
                            >
                                <div className="w-12 h-12 bg-orange-50 rounded-2xl flex items-center justify-center mb-6">
                                    <ShieldAlert className="w-6 h-6 text-orange-600" />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                                <p className="text-slate-600 text-sm leading-relaxed">{item.description}</p>
                            </motion.div>
                        ))}
                    </div>

                    <div className="mt-24 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">Why Immediate Action Matters</h2>
                            <p className="text-slate-600 mb-8 leading-relaxed">
                                From a small pinhole leak to a major rupture, the consequential damage caused by a burst pipe can be devastating.
                                Water can compromise structural integrity, damage electronics, and lead to mold growth if not addressed within 24 hours.
                            </p>
                            <ul className="space-y-4">
                                {['Free Damage Assessment', 'Insurance Liaison Assistance', 'SABS Approved Materials', 'PIRB Certified Technicians'].map((text, i) => (
                                    <li key={i} className="flex items-center gap-3 text-slate-700 font-medium">
                                        <CheckCircle2 className="w-5 h-5 text-green-500" />
                                        {text}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                            <img src="https://images.unsplash.com/photo-1504148455328-497c5ae41530?auto=format&fit=crop&q=80&w=1200" alt="Professional Plumber" className="w-full h-full object-cover" />
                            <div className="absolute inset-0 bg-orange-600/10 mix-blend-multiply" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Process Section */}
            <section className="py-24 bg-slate-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
                    <h2 className="text-4xl font-bold text-slate-900 mb-4">Our Repair Process</h2>
                    <p className="text-slate-600 max-w-2xl mx-auto">Standardized excellence for every emergency.</p>
                </div>
                <div className="max-w-5xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-12 relative">
                    <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-slate-200 -z-0" />
                    {steps.map((step, idx) => (
                        <div key={idx} className="relative z-10 text-center">
                            <div className="w-16 h-16 bg-white border-2 border-primary text-primary rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6 shadow-xl">
                                {step.number}
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-2">{step.title}</h3>
                            <p className="text-slate-600 text-sm">{step.description}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-24 bg-white">
                <div className="max-w-3xl mx-auto px-4">
                    <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center flex items-center justify-center gap-3">
                        <HelpCircle className="w-8 h-8 text-orange-500" />
                        Frequently Asked Questions
                    </h2>
                    <div className="space-y-6">
                        {faqs.map((faq, idx) => (
                            <div key={idx} className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                                <h4 className="font-bold text-slate-900 mb-2">{faq.q}</h4>
                                <p className="text-slate-600 text-sm leading-relaxed">{faq.a}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Global CTA */}
            <section className="py-24 bg-slate-900 relative overflow-hidden">
                <div className="absolute inset-0 opacity-20">
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-500 rounded-full blur-[120px] translate-x-1/2 -translate-y-1/2" />
                </div>
                <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 leading-tight">
                        Don't let a burst pipe <br /> <span className="text-orange-400">damage your investment.</span>
                    </h2>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <a href={`tel:${config.contact.phone}`} className="bg-primary text-white px-10 py-5 rounded-2xl font-bold text-xl hover:opacity-90 transition-all flex items-center justify-center gap-3">
                            <Phone className="w-6 h-6" />
                            Call Now
                        </a>
                        <button className="bg-transparent border border-white/20 text-white px-10 py-5 rounded-2xl font-bold text-xl hover:bg-white/5 transition-all">
                            Request Quotation
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
}
