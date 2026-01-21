import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Menu, X } from 'lucide-react';

const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

    const handleBookCall = () => {
        const currentUrl = encodeURIComponent(window.location.href);
        window.location.href = `https://calendly.com/placeholder?referrer=${currentUrl}`;
    };

    const navItems = [
        { label: 'Intelligence', path: '/personal-injury/motor-vehicle-accident-intelligence' },
        { label: 'Compliance', path: '/personal-injury/dppa-compliance-motor-vehicle-accident-data' },
        { label: 'Reports', path: '/personal-injury/inside-motor-vehicle-accident-reports' },
        { label: 'Investigative', path: '/personal-injury/investigative-mva-intelligence-for-law-firms' },
    ];

    return (
        <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-sm border-b border-border">
            <div className="container mx-auto px-4 h-16 flex items-center justify-between">
                <Link to="/" className="text-xl md:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
                    Cause72
                </Link>
                <nav className="hidden md:flex items-center gap-6">
                    {navItems.map((item) => (
                        <Link
                            key={item.path}
                            to={item.path}
                            className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                        >
                            {item.label}
                        </Link>
                    ))}
                    <button
                        onClick={handleBookCall}
                        className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-md text-sm font-medium hover:bg-primary/90 transition-colors"
                    >
                        <Phone size={16} />
                        Book a Call
                    </button>
                </nav>
                <button
                    className="md:hidden p-2"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X /> : <Menu />}
                </button>
            </div>

            {isMobileMenuOpen && (
                <div className="md:hidden absolute top-16 left-0 w-full bg-background border-b border-border p-4">
                    <nav className="flex flex-col gap-4">
                        {navItems.map((item) => (
                            <Link
                                key={item.path}
                                to={item.path}
                                className="text-sm font-medium"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {item.label}
                            </Link>
                        ))}
                        <button
                            onClick={() => {
                                setIsMobileMenuOpen(false);
                                handleBookCall();
                            }}
                            className="flex items-center justify-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-md text-sm font-medium"
                        >
                            <Phone size={16} />
                            Book a Call
                        </button>
                    </nav>
                </div>
            )}
        </header>
    );
};

export default Header;
