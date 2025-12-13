import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';

export default function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const location = useLocation();

    const navItems = [
        { name: 'Home', path: '/' },
        { name: 'Class Guide', path: '/class-guide' },
        { name: 'Addons', path: '/addons' },
        { name: 'WeakAuras', path: '/weakauras' },
        { name: 'Macros', path: '/macros' },
        { name: 'UI', path: '/ui' },
    ];

    const isActive = (path: string) => location.pathname === path;

    return (
        <nav className="glass sticky top-0 z-50 border-b border-blue-500/30">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <Link to="/" className="flex items-center space-x-3 group">
                        <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-lg flex items-center justify-center glow group-hover:scale-110 transition-transform">
                            <span className="text-2xl font-bold text-white">⚔️</span>
                        </div>
                        <span className="text-xl font-bold bg-gradient-to-r from-blue-300 to-cyan-400 bg-clip-text text-transparent hidden sm:block">
                            RuneBlade Mastery
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-1">
                        {navItems.map((item) => (
                            <Link
                                key={item.path}
                                to={item.path}
                                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${isActive(item.path)
                                        ? 'bg-blue-500/20 text-cyan-300 shadow-lg shadow-blue-500/20'
                                        : 'text-gray-300 hover:text-cyan-300 hover:bg-blue-500/10'
                                    }`}
                            >
                                {item.name}
                            </Link>
                        ))}
                    </div>

                    {/* Mobile menu button */}
                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="md:hidden p-2 rounded-lg text-gray-300 hover:text-cyan-300 hover:bg-blue-500/10 transition-colors"
                        aria-label="Toggle menu"
                    >
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            {mobileMenuOpen ? (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            ) : (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            )}
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile Navigation */}
            {mobileMenuOpen && (
                <div className="md:hidden border-t border-blue-500/30 fade-in">
                    <div className="px-2 pt-2 pb-3 space-y-1">
                        {navItems.map((item) => (
                            <Link
                                key={item.path}
                                to={item.path}
                                onClick={() => setMobileMenuOpen(false)}
                                className={`block px-3 py-2 rounded-lg text-base font-medium transition-all ${isActive(item.path)
                                        ? 'bg-blue-500/20 text-cyan-300'
                                        : 'text-gray-300 hover:text-cyan-300 hover:bg-blue-500/10'
                                    }`}
                            >
                                {item.name}
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
}
