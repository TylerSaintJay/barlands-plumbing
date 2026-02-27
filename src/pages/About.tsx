import { motion } from "motion/react";
import { Users, History, Award, CheckCircle2, Phone, ArrowUpRight } from "lucide-react";
import config from "../config.json";

export default function About() {
    const stats = [
        { label: "Years Experience", value: "30+" },
        { label: "Certified Plumbers", value: "50+" },
        { label: "Completed Projects", value: "10k+" },
        { label: "Client Satisfaction", value: "99.8%" }
    ];

    return (
        <div className="pt-20">
            {/* Hero Section */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col lg:flex-row gap-16 items-center">
                        <div className="flex-1">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6 }}
                            >
                                <div className="flex items-center gap-2 mb-6 text-primary font-bold tracking-widest uppercase text-sm">
                                    <span className="w-8 h-[2px] bg-primary" />
                                    Founded on Integrity
                                </div>
                                <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-8 leading-tight">
                                    South Africa's <br /> <span className="text-primary italic">Plumbing Legacy.</span>
                                </h1>
                                <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                                    Burgess Plumbing has been at the forefront of the South African plumbing industry for over three decades.
                                    What started as a small family-run business in Gauteng has grown into a national leader, known for technical innovation, transparency, and elite craftsmanship.
                                </p>
                                <div className="flex flex-wrap gap-4">
                                    <a href={`tel:${config.contact.phone}`} className="bg-primary text-white px-8 py-4 rounded-xl font-bold text-lg hover:shadow-lg transition-all flex items-center gap-2">
                                        <Phone className="w-5 h-5" />
                                        {config.contact.phone}
                                    </a>
                                    <button className="bg-slate-50 text-slate-900 border border-slate-200 px-8 py-4 rounded-xl font-bold text-lg hover:bg-white transition-all">
                                        View Certifications
                                    </button>
                                </div>
                            </motion.div>
                        </div>
                        <div className="flex-1 grid grid-cols-2 gap-4 relative">
                            <div className="absolute inset-0 bg-orange-500/5 blur-[100px] -z-10" />
                            <img src="https://images.unsplash.com/photo-1595152772835-219674b2a8a6?auto=format&fit=crop&q=80&w=800" alt="Office" className="rounded-2xl shadow-xl mt-12" />
                            <img src="https://images.unsplash.com/photo-1542037104857-ffbb0b9155fb?auto=format&fit=crop&q=80&w=800" alt="Work" className="rounded-2xl shadow-xl" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-20 bg-slate-900">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
                        {stats.map((stat, i) => (
                            <div key={i} className="text-center">
                                <div className="text-4xl md:text-5xl font-bold text-white mb-2">{stat.value}</div>
                                <div className="text-slate-400 text-sm uppercase tracking-widest font-bold">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="py-24 bg-slate-50 relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-slate-900 mb-4 tracking-tight">Built on Core Values</h2>
                        <p className="text-slate-600 max-w-2xl mx-auto font-medium">Our commitment to integrity and quality is the foundation of every relationship we build.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { t: "Honesty", d: "Transparent pricing and honest assessments. No hidden costs or unnecessary work.", icon: <Award className="w-8 h-8 text-orange-500" /> },
                            { t: "Innovation", d: "Constantly investing in high-tech tools like thermal imaging and acoustic detection.", icon: <History className="w-8 h-8 text-orange-500" /> },
                            { t: "Reliability", d: "A 30-60 minute emergency response time that we actually stick to.", icon: <Users className="w-8 h-8 text-green-500" /> }
                        ].map((value, i) => (
                            <div key={i} className="bg-white p-12 rounded-[3.5rem] shadow-sm border border-slate-100 hover:shadow-2xl transition-all duration-500 flex flex-col items-center text-center">
                                <div className="mb-6">{value.icon}</div>
                                <h3 className="text-2xl font-bold text-slate-900 mb-4">{value.t}</h3>
                                <p className="text-slate-600 leading-relaxed">{value.d}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Team/Cert Section */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-primary rounded-[4rem] p-12 md:p-20 text-white flex flex-col md:flex-row items-center gap-12 overflow-hidden relative">
                        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-[80px] translate-x-1/2 -translate-y-1/2" />
                        <div className="flex-1 relative z-10">
                            <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">Every Technician is <br /> PIRB Registered.</h2>
                            <p className="text-orange-100 text-lg mb-10 leading-relaxed">
                                We don't compromised on safety. All our lead plumbers are registered with the Plumbing Industry Registration Board of South Africa, ensuring compliance with SANS 10252 and 10254 regulations.
                            </p>
                            <button className="bg-white text-primary px-10 py-5 rounded-2xl font-bold text-xl hover:bg-slate-50 transition-all flex items-center gap-2 group">
                                Check PIRB Status
                                <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                            </button>
                        </div>
                        <div className="flex-1 flex justify-center">
                            <div className="w-64 h-64 border-8 border-white/20 rounded-full flex items-center justify-center p-8">
                                <img src={config.brand.logo} alt="Logo" className="w-full h-auto brightness-0 invert" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Global CTA */}
            <section className="py-24 bg-slate-900 relative">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-12">
                        Ready to experience <br /> <span className="text-primary italic">elite plumbing?</span>
                    </h2>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <a href={`tel:${config.contact.phone}`} className="bg-primary text-white px-10 py-5 rounded-2xl font-bold text-xl hover:opacity-90 transition-all">
                            Contact Us
                        </a>
                        <button className="bg-white/10 text-white border border-white/20 px-10 py-5 rounded-2xl font-bold text-xl hover:bg-white/20 transition-all">
                            Join Our Team
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
}
