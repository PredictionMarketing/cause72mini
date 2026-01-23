import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Menu, X } from 'lucide-react';

const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

    const handleBookCall = () => {
        const currentUrl = encodeURIComponent(window.location.href);
        window.location.href = `https://calendly.com/tommyandbrent-cause72?referrer=${currentUrl}`;
    };

    const navItems = [
        { label: 'Intelligence', path: '/personal-injury/motor-vehicle-accident-intelligence' },
        { label: 'Compliance', path: '/personal-injury/dppa-compliance-motor-vehicle-accident-data' },
        { label: 'Reports', path: '/personal-injury/inside-motor-vehicle-accident-reports' },
        { label: 'Investigative', path: '/personal-injury/investigative-mva-intelligence-for-law-firms' },
        { label: 'Case Value', path: '/personal-injury/mva-intelligence-case-intake-and-case-value' },
        { label: 'Data Reporting', path: '/personal-injury/motor-vehicle-accident-data-reporting' },
    ];

    return (
        <header className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-slate-200 shadow-sm transition-all duration-300">
            <div className="container mx-auto px-6 h-20 flex items-center justify-between">
                <Link to="/" className="flex items-center gap-2 transition-transform hover:scale-105 duration-200">
                    <img
                        src="/assets/images/cause72_logo.png"
                        alt="Cause72"
                        className="h-12 w-auto object-contain"
                    />
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden lg:flex items-center gap-1">
                    {navItems.map((item) => (
                        <Link
                            key={item.path}
                            to={item.path}
                            className="px-4 py-2 text-[15px] font-semibold text-slate-600 hover:text-blue-700 hover:bg-blue-50 rounded-lg transition-all duration-200"
                        >
                            {item.label}
                        </Link>
                    ))}
                    <div className="pl-4 ml-2 border-l border-slate-200">
                        <button
                            onClick={handleBookCall}
                            className="inline-flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-slate-900 to-slate-800 text-white rounded-full text-[15px] font-bold hover:shadow-lg hover:ring-2 hover:ring-offset-2 hover:ring-slate-900 transition-all transform hover:-translate-y-0.5"
                        >
                            <Phone size={16} className="text-blue-200" />
                            Book a Call
                        </button>
                    </div>
                </nav>

                {/* Mobile menu button */}
                <button
                    className="lg:hidden p-2 text-slate-600 hover:bg-blue-50 hover:text-blue-700 rounded-lg transition-colors"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="lg:hidden absolute top-20 left-0 w-full bg-white border-b border-gray-100 shadow-xl animate-in slide-in-from-top-2">
                    <nav className="flex flex-col p-6 gap-2">
                        {navItems.map((item) => (
                            <Link
                                key={item.path}
                                to={item.path}
                                className="flex items-center px-4 py-3 text-base font-medium text-slate-700 hover:bg-slate-50 hover:text-slate-900 rounded-lg transition-colors"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {item.label}
                            </Link>
                        ))}
                        <div className="pt-4 mt-2 border-t border-gray-100">
                            <button
                                onClick={() => {
                                    setIsMobileMenuOpen(false);
                                    handleBookCall();
                                }}
                                className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-slate-900 text-white rounded-lg text-base font-semibold active:bg-slate-800"
                            >
                                <Phone size={18} />
                                Book a Call
                            </button>
                        </div>
                    </nav>
                </div>
            )}
        </header>
    );
};

export default Header;
