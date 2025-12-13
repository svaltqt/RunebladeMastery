import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';

export default function Sidebar() {
    const [searchQuery, setSearchQuery] = useState('');
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation();

    const menuItems = [
        { name: 'Home', path: '/', icon: '🏠' },
        { name: 'WeakAuras', path: '/weakauras', icon: '✨' },
        { name: 'Addons', path: '/addons', icon: '🔧' },
        { name: 'Macros', path: '/macros', icon: '📜' },
        { name: 'Talentos', path: '/talentos', icon: '🌟' },
        { name: 'Gear', path: '/gear', icon: '⚔️' },
        { name: 'UI', path: '/ui', icon: '🎨' },
    ];

    const isActive = (path: string) => location.pathname === path;

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        // TODO: Implement search functionality
        console.log('Searching for:', searchQuery);
    };

    return (
        <>
            {/* Mobile Menu Button */}
            <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-blue-900/80 backdrop-blur-sm rounded-lg text-cyan-300 hover:text-cyan-200"
            >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    {isMobileMenuOpen ? (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    ) : (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    )}
                </svg>
            </button>

            {/* Sidebar */}
            <aside
                className={`
          fixed top-0 left-0 h-screen w-64 glass border-r border-blue-500/30
          transform transition-transform duration-300 ease-in-out z-40
          ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
          overflow-y-auto
        `}
            >
                <div className="flex flex-col h-full p-6">
                    {/* Logo */}
                    <Link to="/" className="flex items-center gap-3 mb-8 group">
                        <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-lg flex items-center justify-center glow">
                            <span className="text-2xl">⚔️</span>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-lg font-bold text-cyan-300 group-hover:text-cyan-200 transition-colors">
                                RuneBlade
                            </span>
                            <span className="text-xs text-gray-400">Mastery</span>
                        </div>
                    </Link>

                    {/* Search Bar */}
                    <form onSubmit={handleSearch} className="mb-6">
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Buscar..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full px-4 py-2 bg-blue-900/30 border border-blue-500/40 rounded-lg text-gray-300 placeholder-gray-500 focus:outline-none focus:border-cyan-500/60 transition-colors"
                            />
                            <button
                                type="submit"
                                className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 hover:text-cyan-400 transition-colors"
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                            </button>
                        </div>
                    </form>

                    {/* Navigation Menu */}
                    <nav className="flex-1">
                        <ul className="space-y-2">
                            {menuItems.map((item) => (
                                <li key={item.path}>
                                    <Link
                                        to={item.path}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        className={`
                      flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200
                      ${isActive(item.path)
                                                ? 'bg-blue-500/20 text-cyan-300 border border-blue-500/40'
                                                : 'text-gray-300 hover:text-cyan-300 hover:bg-blue-500/10'
                                            }
                    `}
                                    >
                                        <span className="text-xl">{item.icon}</span>
                                        <span className="font-medium">{item.name}</span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    {/* Footer */}
                    <div className="mt-auto pt-6 border-t border-blue-500/30">
                        <p className="text-xs text-gray-500 text-center">
                            Death Knight Guide
                        </p>
                        <p className="text-xs text-gray-600 text-center mt-1">
                            © 2025 RuneBlade Mastery
                        </p>
                    </div>
                </div>
            </aside>

            {/* Overlay for mobile */}
            {isMobileMenuOpen && (
                <div
                    className="fixed inset-0 bg-black/50 z-30 lg:hidden"
                    onClick={() => setIsMobileMenuOpen(false)}
                />
            )}
        </>
    );
}
