import { motion } from "motion/react";
import {
    Droplets,
    Flame,
    Search,
    Wrench,
    ArrowRight,
    Sun,
    Battery,
    Factory,
    ShieldCheck,
    Phone
} from "lucide-react";
import { Link } from "react-router-dom";
import config from "../config.json";

export default function Services() {
    const sections = [
        {
            title: "Core Plumbing",
            items: [
                { name: "Burst Pipes", path: "/services/burst-pipes", icon: <ShieldCheck className="w-5 h-5" /> },
                { name: "Leak Detection", path: "/services/leak-detection", icon: <Search className="w-5 h-5" /> },
                { name: "Blocked Drains", path: "/services/blocked-drains", icon: <Wrench className="w-5 h-5" /> },
                { name: "Geyser Services", path: "/services/geyser-services", icon: <Flame className="w-5 h-5" /> }
            ]
        },
        {
            title: "Water Solutions",
            items: [
                { name: "Water Delivery & Infrastructure", path: "/services/water-delivery", icon: <Droplets className="w-5 h-5" /> },
                { name: "Rain Water Harvesting", path: "#", icon: <Droplets className="w-5 h-5" /> },
                { name: "Grey Water Systems", path: "#", icon: <Droplets className="w-5 h-5" /> },
                { name: "Water Purification", path: "#", icon: <ShieldCheck className="w-5 h-5" /> }
            ]
        },
        {
            title: "Energy Solutions",
            items: [
                { name: "Solar Geysers", path: "#", icon: <Sun className="w-5 h-5" /> },
                { name: "Heat Pumps", path: "#", icon: <Flame className="w-5 h-5" /> },
                { name: "Inverters & Backup", path: "#", icon: <Battery className="w-5 h-5" /> }
            ]
        },
        {
            title: "Industrial & Specialised",
            items: [
                { name: "Grease Trap Cleaning", path: "#", icon: <Factory className="w-5 h-5" /> },
                { name: "HP Water Jetting", path: "/services/hp-jetting", icon: <Wrench className="w-5 h-5" /> },
                { name: "CCTV Drain Ops", path: "#", icon: <Search className="w-5 h-5" /> }
            ]
        }
    ];

    return (
        <div className="pt-20">
            <section className="py-24 bg-white relative overflow-hidden">
                {/* Decorative background glows */}
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-50 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 -z-10" />
                <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-primary/5 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2 -z-10" />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="mb-24">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <h1 className="text-5xl md:text-7xl font-bold text-slate-900 mb-8 tracking-tight">
                                Our <span className="text-primary italic">Services Hub.</span>
                            </h1>
                            <div className="w-20 h-1.5 bg-primary rounded-full mb-8" />
                            <p className="text-slate-500 text-xl max-w-2xl leading-relaxed font-medium">
                                From residential emergencies to large-scale industrial water solutions, we provide elite engineering and guaranteed workmanship.
                            </p>
                        </motion.div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {sections.map((section, idx) => (
                            <div key={idx} className="space-y-6">
                                <h3 className="text-xl font-bold text-slate-400 uppercase tracking-widest pl-2">{section.title}</h3>
                                <div className="grid grid-cols-1 gap-4">
                                    {section.items.map((item, i) => (
                                        <motion.div
                                            key={i}
                                            whileHover={{ scale: 1.02, y: -5 }}
                                            className="group relative p-6 rounded-3xl border border-slate-200 bg-white/70 backdrop-blur-xl shadow-sm hover:shadow-2xl hover:bg-primary hover:border-primary transition-all duration-500 cursor-pointer overflow-hidden"
                                        >
                                            {/* Decorative background glow on hover */}
                                            <div className="absolute inset-0 bg-gradient-to-br from-orange-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                            <Link to={item.path} className="flex items-center justify-between relative z-10">
                                                <div className="flex items-center gap-4">
                                                    <div className="w-12 h-12 bg-orange-50 text-orange-600 rounded-2xl flex items-center justify-center group-hover:bg-white/10 group-hover:text-white transition-all duration-300">
                                                        {item.icon}
                                                    </div>
                                                    <div>
                                                        <h4 className="font-bold text-lg text-slate-900 group-hover:text-white transition-colors duration-300">{item.name}</h4>
                                                        <p className="text-sm text-slate-500 group-hover:text-orange-100 transition-colors duration-300">Premium {section.title} Service</p>
                                                    </div>
                                                </div>
                                                <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center group-hover:bg-white/10 group-hover:text-white transition-all duration-300">
                                                    <ArrowRight className="w-5 h-5 transform -rotate-45 group-hover:rotate-0 transition-transform duration-300" />
                                                </div>
                                            </Link>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Hero-like CTA */}
            <section className="py-24 bg-slate-900 relative rounded-t-[4rem]">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">
                        Need a custom solution?
                    </h2>
                    <p className="text-slate-400 text-lg mb-12">
                        Our engineers can design bespoke water and energy systems for commercial properties and industrial sites.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <a href={`tel:${config.contact.phone}`} className="bg-primary text-white px-10 py-5 rounded-2xl font-bold text-xl flex items-center justify-center gap-3">
                            <Phone className="w-6 h-6" />
                            Call Specialist
                        </a>
                        <button className="bg-white/10 text-white border border-white/20 px-10 py-5 rounded-2xl font-bold text-xl hover:bg-white/20 transition-all">
                            Request Site Visit
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
}
