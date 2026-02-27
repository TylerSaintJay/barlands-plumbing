import { Phone } from "lucide-react";
import { Link } from "react-router-dom";
import config from "../config.json";

export default function Navbar() {
    return (
        <nav className="fixed top-0 w-full z-50 glass border-b border-slate-200/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    <Link to="/" className="flex items-center gap-2">
                        <img src={config.brand.logo} alt={config.brand.name} className="h-10 w-auto object-contain" />
                        <span className="text-2xl font-bold tracking-tight text-slate-900 ml-2">
                            {config.brand.name.split(' ')[0]}<span className="text-primary">{config.brand.name.split(' ').slice(1).join(' ')}</span>
                        </span>
                    </Link>

                    <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
                        <Link to="/services" className="hover:text-primary transition-colors">Services</Link>
                        <Link to="/about" className="hover:text-primary transition-colors">About Us</Link>
                        <Link to="/#reviews" className="hover:text-primary transition-colors">Reviews</Link>
                        <a href={`tel:${config.contact.phone}`} className="bg-primary text-white px-6 py-2.5 rounded-full hover:opacity-90 transition-all shadow-lg shadow-orange-200 flex items-center gap-2">
                            <Phone className="w-4 h-4" />
                            {config.contact.phone}
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
}
