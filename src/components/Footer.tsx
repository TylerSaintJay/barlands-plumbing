import { MapPin, Phone, Mail, Facebook, Instagram, Twitter } from "lucide-react";
import { Link } from "react-router-dom";
import config from "../config.json";

export default function Footer() {
    return (
        <footer className="bg-slate-900 text-slate-400 py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    <div className="col-span-1 md:col-span-1">
                        <div className="flex items-center gap-2 mb-6">
                            <img src={config.brand.logo} alt={config.brand.name} className="h-8 w-auto grayscale brightness-200" />
                            <span className="text-xl font-bold tracking-tight text-white ml-2">
                                {config.brand.name.split(' ')[0]}<span className="text-primary">{config.brand.name.split(' ').slice(1).join(' ')}</span>
                            </span>
                        </div>
                        <p className="text-sm leading-relaxed mb-6">
                            {config.brand.name}: South Africa's most trusted plumbing service. PIRB certified, 24/7 emergency response, and guaranteed workmanship.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="hover:text-white transition-colors"><Facebook className="w-5 h-5" /></a>
                            <a href="#" className="hover:text-white transition-colors"><Instagram className="w-5 h-5" /></a>
                            <a href="#" className="hover:text-white transition-colors"><Twitter className="w-5 h-5" /></a>
                        </div>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-6">Quick Links</h4>
                        <ul className="space-y-4 text-sm">
                            <li><Link to="/services/emergency" className="hover:text-orange-400 transition-colors">Emergency Call-out</Link></li>
                            <li><Link to="/services/geyser-services" className="hover:text-orange-400 transition-colors">Geyser Repairs</Link></li>
                            <li><Link to="/services/leak-detection" className="hover:text-orange-400 transition-colors">Leak Detection</Link></li>
                            <li><Link to="/services/solar-geysers" className="hover:text-orange-400 transition-colors">Solar Geysers</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-6">Service Areas</h4>
                        <ul className="space-y-4 text-sm">
                            <li><Link to="/plumber-in/edenvale" className="hover:text-orange-400 transition-colors">Edenvale</Link></li>
                            <li><Link to="/plumber-in/sandton" className="hover:text-orange-400 transition-colors">Sandton</Link></li>
                            <li><Link to="/plumber-in/bedfordview" className="hover:text-orange-400 transition-colors">Bedfordview</Link></li>
                            <li><Link to="/plumber-in/germiston" className="hover:text-orange-400 transition-colors">Germiston</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-6">Contact Us</h4>
                        <ul className="space-y-4 text-sm">
                            <li className="flex items-start gap-3">
                                <MapPin className="w-5 h-5 text-orange-500 shrink-0" />
                                <span>{config.contact.address}</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone className="w-5 h-5 text-orange-500 shrink-0" />
                                <span>{config.contact.phone}</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail className="w-5 h-5 text-orange-500 shrink-0" />
                                <span>{config.contact.email}</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
                    <p>© 2026 {config.brand.name}. All rights reserved.</p>
                    <div className="flex gap-8">
                        <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
                        <a href="#" className="hover:text-white transition-colors">PIRB Verification</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
