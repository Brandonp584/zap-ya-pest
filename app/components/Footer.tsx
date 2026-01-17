import Link from "next/link";

export default function Footer() {
    return (
        <footer className= "bg-slate-900 text-slate-300">
            <div className="max-w-7xl mx-auto px-6 py-12 md:grid-cols-4 gap-10">

                {/* BRAND */}
                <div>
                    <h3 className="text-xl font-extrabold text-white">
                        ZAP YA PESTS!
                    </h3>
                    <p className="text-green-500 font-semibold tracking-widest mt-1">
                        PEST CONTROL 
                    </p>
                    <p className="mt-4 text-sm text-slate-400">
                        Professional, reliable pest control for home and businesses.
                    </p>
                </div>

                {/* SERVICES */}
                <div>
                    <h4 className="text-white font-semibold mb-4">Services</h4>
                    <ul className="space-y-2 text-sm">
                        <li>General Pest Control</li>
                        <li>Termite Treatments</li>
                        <li>Rodent Control</li>
                        <li>Commercial Pest Control</li>
                    </ul>
                </div>

                {/* QUICK LINKS */}
                <div>
                    <h4 className="text-white font-semibold mb-4">Quick Links</h4>
                    <ul className="space-y-2 text-sm">
                        <li><Link href="/services" className="hover:text-white">Services</Link></li>
                        <li><Link href="/about" className="hover:text-white">About</Link></li>
                        <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
                    </ul>
                </div>

                {/* CONTACT */}
                <div>
                    <h4 className="text-white font-semibold mb-4">Contact</h4>
                    <ul className="space-y-2 text-sm">
                        <li>📞 0400 000 000</li>
                        <li>📧 info@zapyapests.com</li>
                        <li>📍 Serving Local Areas</li>
                    </ul>
                </div>
            </div>

            {/* BOTTOM BAR */}
            <div className="border-t border-slate-800 py-4 text-center text-sm text-slate-500">
                © {new Date().getFullYear()} Zap Ya Pests! Pest Control. All rights reserved.
            </div>
        </footer>
    )
}