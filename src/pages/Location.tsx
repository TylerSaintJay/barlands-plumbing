import { useParams, Link } from "react-router-dom";
import { motion } from "motion/react";
import {
    MapPin,
    Phone,
    Star,
    ShieldCheck,
    Clock,
    Wrench,
    ArrowRight,
    Navigation
} from "lucide-react";
import config from "../config.json";

const locations = {
    "edenvale": {
        name: "Edenvale",
        description: "Burgess Plumbing has been a cornerstone of the Edenvale community for decades. From Hurlyvale to Glendower, we provide rapid response emergency services and premium infrastructure maintenance.",
        stats: { arrivals: "15-30 mins", clients: "5,000+", rating: "4.9" }
    },
    "sandton": {
        name: "Sandton",
        description: "Serving the economic heart of Gauteng. We specialize in high-rise plumbing maintenance, commercial water solutions, and premium residential emergency repairs across Sandton, Bryanston, and Morningside.",
        stats: { arrivals: "30-45 mins", clients: "3,500+", rating: "4.8" }
    },
    "bedfordview": {
        name: "Bedfordview",
        description: "Elite plumbing services for the Bedfordview area. Our technicians are specialized in high-tech leak detection and luxury geyser installations for the most discerning homeowners.",
        stats: { arrivals: "20-40 mins", clients: "2,800+", rating: "4.9" }
    },
    "germiston": {
        name: "Germiston",
        description: "Industrial-strength plumbing solutions for Germiston's logistical and residential hubs. We focus on heavy-duty HP jetting and large-scale drainage restoration.",
        stats: { arrivals: "25-45 mins", clients: "4,200+", rating: "4.7" }
    }
};

export default function Location() {
    const { city } = useParams();
    const cityData = locations[city?.toLowerCase() as keyof typeof locations] || locations.edenvale;

    return (
        <div className="pt-20">
            {/* Hero Section */}
            <section className="relative py-24 bg-slate-950 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.unsplash.com/photo-1590059132669-917fa5f9dbcd?auto=format&fit=crop&q=80&w=2000"
                        alt={cityData.name}
                        className="w-full h-full object-cover opacity-20"
                        referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/60 to-transparent" />
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="flex items-center gap-2 mb-6 text-orange-400">
                            <MapPin className="w-5 h-5" />
                            <span className="font-bold uppercase tracking-widest text-xs">Serving Gauteng Metros</span>
                        </div>
                        <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tight">
                            Elite Plumber in <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600 italic">
                                {cityData.name}.
                            </span>
                        </h1>
                        <p className="text-slate-400 text-lg max-w-2xl mb-12 leading-relaxed">
                            {cityData.description}
                        </p>

                        <div className="flex flex-col sm:flex-row gap-6 mb-16">
                            <a href={`tel:${config.contact.phone}`} className="bg-primary text-white px-10 py-5 rounded-2xl font-bold text-lg flex items-center justify-center gap-3">
                                <Phone className="w-6 h-6" />
                                Call {cityData.name} Unit
                            </a>
                            <button className="bg-white/5 backdrop-blur-md text-white border border-white/10 px-10 py-5 rounded-2xl font-bold text-lg hover:bg-white/10 transition-all">
                                Request a Quote
                            </button>
                        </div>

                        {/* Local Stats */}
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl">
                            <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-6 rounded-3xl">
                                <div className="text-orange-400 mb-2 italic font-bold">Fastest Arrival</div>
                                <div className="text-3xl font-bold text-white">{cityData.stats.arrivals}</div>
                            </div>
                            <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-6 rounded-3xl">
                                <div className="text-orange-400 mb-2 italic font-bold">Local Clients</div>
                                <div className="text-3xl font-bold text-white">{cityData.stats.clients}</div>
                            </div>
                            <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-6 rounded-3xl">
                                <div className="text-orange-400 mb-2 italic font-bold">Area Rating</div>
                                <div className="text-3xl font-bold text-white">{cityData.stats.rating}/5</div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Local Trust Grid */}
            <section className="py-32 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
                        <div className="max-w-xl">
                            <h2 className="text-4xl font-bold text-slate-900 mb-6">Why {cityData.name} Trusts Burgess</h2>
                            <p className="text-slate-500 text-lg">
                                We've built our reputation one pipe at a time. In {cityData.name}, we are known for arriving on time, finishing of a high standard, and leaving no mess behind.
                            </p>
                        </div>
                        <div className="flex items-center gap-3 bg-slate-50 p-4 rounded-2xl border border-slate-100">
                            <Star className="w-6 h-6 text-orange-400 fill-current" />
                            <span className="font-bold text-slate-900">Top Rated {cityData.name} Service</span>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        <div className="space-y-6">
                            <div className="w-16 h-16 bg-orange-50 rounded-[1.5rem] flex items-center justify-center text-primary">
                                <Navigation className="w-8 h-8" />
                            </div>
                            <h4 className="text-2xl font-bold text-slate-900">Hyper-Local Experts</h4>
                            <p className="text-slate-500 leading-relaxed">
                                Our teams live and work in the {cityData.name} area. We know the local water pressure issues and common pipe layouts in your neighborhood.
                            </p>
                        </div>
                        <div className="space-y-6">
                            <div className="w-16 h-16 bg-orange-50 rounded-[1.5rem] flex items-center justify-center text-primary">
                                <ShieldCheck className="w-8 h-8" />
                            </div>
                            <h4 className="text-2xl font-bold text-slate-900">PIRB Certified</h4>
                            <p className="text-slate-500 leading-relaxed">
                                Every job in {cityData.name} is signed off by a PIRB registered master plumber, ensuring compliance with South African building standards.
                            </p>
                        </div>
                        <div className="space-y-6">
                            <div className="w-16 h-16 bg-orange-50 rounded-[1.5rem] flex items-center justify-center text-primary">
                                <Clock className="w-8 h-8" />
                            </div>
                            <h4 className="text-2xl font-bold text-slate-900">24/7 Response</h4>
                            <p className="text-slate-500 leading-relaxed">
                                Plumbing disasters don't wait for office hours. Neither do we. Our {cityData.name} rapid response unit is always on standby.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Local Services Bento */}
            <section className="py-32 bg-slate-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h3 className="text-3xl font-bold text-slate-900 mb-16 text-center">Specialized Local Offerings</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {config.services.slice(0, 4).map((service, idx) => (
                            <Link
                                key={idx}
                                to="/services"
                                className="bg-white p-8 rounded-3xl border border-slate-200 hover:shadow-2xl hover:-translate-y-2 transition-all group"
                            >
                                <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                                    <Wrench className="w-6 h-6" />
                                </div>
                                <h5 className="font-bold text-slate-900 mb-2">{service.title}</h5>
                                <p className="text-xs text-slate-500 mb-6">{service.description.slice(0, 60)}...</p>
                                <div className="flex items-center gap-2 text-primary font-bold text-xs">
                                    Book Now <ArrowRight className="w-3 h-3" />
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Local CTA */}
            <section className="py-24 bg-primary relative overflow-hidden">
                <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
                    <h2 className="text-4xl font-bold text-white mb-8">Best Plumber in {cityData.name}? <br /> The Search Ends Here.</h2>
                    <p className="text-orange-100 text-lg mb-12">
                        Join thousands of satisfied {cityData.name} residents. Reliable, professional, and always available.
                    </p>
                    <a href={`tel:${config.contact.phone}`} className="inline-flex bg-white text-primary px-12 py-6 rounded-2xl font-bold text-xl hover:bg-slate-50 transition-all">
                        Call Our {cityData.name} Unit
                    </a>
                </div>
            </section>
        </div>
    );
}
