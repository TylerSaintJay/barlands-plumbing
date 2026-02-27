import { motion } from "motion/react";
import {
    Droplets,
    Flame,
    Search,
    Clock,
    ShieldCheck,
    Star,
    CheckCircle2,
    Wrench,
    Phone,
    ArrowRight
} from "lucide-react";
import { Link } from "react-router-dom";
import config from "../config.json";
import { AnimatedTestimonials } from "../components/ui/testimonials-columns";
import { LogoCloud } from "../components/ui/logo-cloud";

const iconMap = {
    Search: <Search className="w-8 h-8 text-orange-500" />,
    Flame: <Flame className="w-8 h-8 text-orange-500" />,
    Droplets: <Droplets className="w-8 h-8 text-orange-500" />,
    Clock: <Clock className="w-8 h-8 text-red-500" />,
    Wrench: <Wrench className="w-8 h-8 text-orange-500" />
};

const services = config.services.map((service, index) => ({
    ...service,
    icon: iconMap[service.icon as keyof typeof iconMap] || <Wrench className="w-8 h-8 text-orange-500" />,
    className: service.highlight
        ? "md:col-span-2 md:row-span-1 bg-white"
        : service.dark
            ? "md:col-span-1 md:row-span-2 bg-slate-900 text-white"
            : service.accent
                ? "md:col-span-2 md:row-span-1 bg-orange-50"
                : "md:col-span-1 md:row-span-1 bg-white"
}));

export default function Home() {
    return (
        <div>
            {/* Hero Section */}
            <section className="relative h-screen min-h-[700px] flex items-center pt-20 overflow-hidden bg-slate-950">
                {/* Animated Background Bubbles */}
                <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                    <motion.div
                        animate={{
                            x: [0, 100, 0],
                            y: [0, -50, 0],
                            scale: [1, 1.2, 1]
                        }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-orange-600/20 rounded-full blur-[120px]"
                    />
                    <motion.div
                        animate={{
                            x: [0, -100, 0],
                            y: [0, 50, 0],
                            scale: [1, 1.1, 1]
                        }}
                        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                        className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-orange-400/10 rounded-full blur-[100px]"
                    />
                </div>

                <div className="absolute inset-0 z-0 opacity-60">
                    <img
                        src="https://images.unsplash.com/photo-1581244277943-fe4a9c777189?auto=format&fit=crop&q=80&w=2000"
                        alt="Professional Plumber at Work"
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/60 to-transparent" />
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                    <div className="max-w-3xl">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                        >
                            <div className="flex items-center gap-3 mb-8">
                                <span className="w-12 h-[2px] bg-primary" />
                                <span className="text-orange-400 font-bold tracking-[0.2em] uppercase text-xs">
                                    {config.brand.slogan}
                                </span>
                            </div>
                            <h1 className="text-6xl md:text-8xl font-bold text-white leading-[1] mb-10 tracking-tight">
                                {config.brand.name.split(' ')[0]} <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600 italic">
                                    Guaranteed Trust.
                                </span>
                            </h1>

                            <div className="flex flex-col sm:flex-row gap-5 mb-16">
                                <button className="bg-primary text-white px-10 py-5 rounded-2xl font-bold text-lg hover:shadow-[0_0_30px_rgba(5,36,99,0.4)] transition-all duration-300">
                                    Book a Plumber
                                </button>
                                <a href="#services" className="bg-white/5 backdrop-blur-md text-white border border-white/10 px-10 py-5 rounded-2xl font-bold text-lg hover:bg-white/10 transition-all duration-300 text-center">
                                    Explore Services
                                </a>
                            </div>
                        </motion.div>

                        {/* Emergency Card */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5, duration: 0.8 }}
                            className="bg-white/5 backdrop-blur-2xl p-8 rounded-[2.5rem] max-w-md border border-white/10 shadow-2xl relative overflow-hidden group"
                        >
                            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-primary/40 transition-colors duration-500" />
                            <div className="flex items-start gap-5 relative z-10">
                                <div className="bg-primary p-4 rounded-2xl shadow-lg ring-4 ring-primary/20">
                                    <Clock className="w-7 h-7 text-white animate-pulse" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-white mb-2 tracking-tight">Rapid Response Unit</h3>
                                    <p className="text-slate-400 text-sm leading-relaxed">
                                        Average arrival time: <span className="text-white font-bold bg-orange-600/30 px-2 py-0.5 rounded">30-45 mins</span> across Gauteng metros.
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Certifications Bar */}
            <div className="bg-white border-y border-slate-100 py-8">
                <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all">
                    <div className="flex items-center gap-2">
                        <ShieldCheck className="w-8 h-8 text-slate-800" />
                        <span className="font-bold text-slate-800 tracking-tighter text-xl">PIRB REGISTERED</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-8 h-8 text-slate-800" />
                        <span className="font-bold text-slate-800 tracking-tighter text-xl">SABS APPROVED</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Star className="w-8 h-8 text-slate-800" />
                        <span className="font-bold text-slate-800 tracking-tighter text-xl">5-STAR RATED</span>
                    </div>
                </div>
            </div>

            {/* Services Bento Grid */}
            <section id="services" className="py-32 bg-slate-50 relative overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-left mb-20 max-w-3xl">
                        <h2 className="text-5xl font-bold text-slate-950 mb-6 tracking-tight">Specialized Engineering Solutions</h2>
                        <p className="text-slate-500 text-lg leading-relaxed">
                            We combine traditional craftsmanship with multi-million rand investments in diagnostic technology to solve what others can't.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 auto-rows-[280px]">
                        {services.map((service, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                                className={`group p-10 rounded-[2.5rem] shadow-xl shadow-slate-200/40 border border-slate-100 flex flex-col justify-between transition-all duration-500 overflow-hidden relative ${service.className}`}
                            >
                                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-primary/10 transition-colors" />

                                <div className="relative z-10">
                                    <div className="mb-6 transform group-hover:scale-110 transition-transform duration-500">{service.icon}</div>
                                    <h3 className="text-2xl font-bold mb-3 tracking-tight">{service.title}</h3>
                                    <p className={`text-sm leading-relaxed ${service.className.includes('slate-900') ? 'text-slate-400' : 'text-slate-500'}`}>
                                        {service.description}
                                    </p>
                                </div>
                                <div className="flex justify-end relative z-10">
                                    <Link
                                        to={service.title.toLowerCase().includes('leak') ? '/services/leak-detection' :
                                            service.title.toLowerCase().includes('geyser') ? '/services/geyser-services' :
                                                service.title.toLowerCase().includes('pipe') ? '/services/burst-pipes' :
                                                    service.title.toLowerCase().includes('drain') ? '/services/blocked-drains' :
                                                        service.title.toLowerCase().includes('water') ? '/services/water-delivery' : '/services/burst-pipes'}
                                        className={`text-sm font-bold flex items-center gap-2 group-hover:gap-3 transition-all ${service.className.includes('slate-900') ? 'text-orange-400' : 'text-primary'}`}
                                    >
                                        Learn More
                                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                                    </Link>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Water Delivery Focal Point */}
            <section className="py-24 bg-white overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-slate-950 rounded-[3rem] overflow-hidden flex flex-col lg:flex-row shadow-2xl shadow-orange-900/20 border border-white/5">
                        <div className="flex-1 p-12 lg:p-20 flex flex-col justify-center">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                            >
                                <div className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/20 px-4 py-2 rounded-full mb-8">
                                    <Droplets className="w-4 h-4 text-orange-400" />
                                    <span className="text-orange-400 text-xs font-bold uppercase tracking-widest">Premium Service</span>
                                </div>
                                <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 tracking-tight leading-[1.1]">
                                    Uninterrupted <br />
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-200">Water Security</span>
                                </h2>
                                <p className="text-slate-400 text-lg mb-10 leading-relaxed font-medium">
                                    Don't let municipal outages stop your business. Our bulk water delivery and automated backup systems ensure your home or facility remains functional 24/7.
                                </p>
                                <Link
                                    to="/services/water-delivery"
                                    className="inline-flex items-center gap-4 bg-white text-slate-950 px-8 py-4 rounded-2xl font-bold hover:bg-orange-50 transition-all group"
                                >
                                    Explore Water Solutions
                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </motion.div>
                        </div>
                        <div className="flex-1 relative min-h-[400px]">
                            <img
                                src="https://images.unsplash.com/photo-1548932813-91286c072120?auto=format&fit=crop&q=80&w=1200"
                                alt="Water Delivery Tanker"
                                className="absolute inset-0 w-full h-full object-cover opacity-60"
                                referrerPolicy="no-referrer"
                            />
                            <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-transparent to-transparent lg:bg-gradient-to-t" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Reviews Section */}
            <section id="reviews" className="py-32 bg-slate-50 relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center mb-20">
                        <h2 className="text-4xl md:text-6xl font-bold text-slate-950 mb-6 tracking-tight">The Voice of Edenvale</h2>
                        <p className="text-slate-500 text-lg max-w-2xl mx-auto font-medium">
                            Real experiences from residents and business owners. Our 4.9/5 Google rating isn't just a number—it's a standard.
                        </p>
                    </div>

                    <AnimatedTestimonials testimonials={config.testimonials} />
                </div>
            </section>

            {/* Logo Cloud Section */}
            <section className="py-24 bg-white border-y border-slate-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h3 className="text-lg font-bold text-slate-400 uppercase tracking-[0.3em] mb-4">Official Infrastructure Partners</h3>
                        <p className="text-slate-500 font-medium">We work with the best in the industry to ensure elite standards.</p>
                    </div>
                    <LogoCloud />
                </div>
            </section>


            {/* CTA Section */}
            <section className="py-24 bg-primary relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
                    <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-400 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
                </div>

                <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
                        Plumbing Emergency? <br />
                        We're on Our Way.
                    </h2>
                    <p className="text-orange-100 text-lg mb-12 max-w-2xl mx-auto">
                        {config.brand.name} is here for you. Don't let a small leak turn into a major disaster. Our certified professionals are available 24/7.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <a href={`tel:${config.contact.phone}`} className="bg-white text-primary px-10 py-5 rounded-2xl font-bold text-xl hover:bg-slate-50 transition-all flex items-center justify-center gap-3">
                            <Phone className="w-6 h-6" />
                            Call {config.contact.phone}
                        </a>
                        <button className="bg-orange-700 text-white px-10 py-5 rounded-2xl font-bold text-xl hover:bg-orange-800 transition-all border border-orange-500/30">
                            Request a Quote
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
}
