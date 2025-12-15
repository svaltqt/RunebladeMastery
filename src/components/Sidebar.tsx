import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import dkIcon from '../assets/death-knight.avif';
import warlockIcon from '../assets/warlock.avif';

export default function Sidebar() {
    const [searchQuery, setSearchQuery] = useState('');
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation();

    const menuItems = [
        { name: 'Death Knight', path: '/class/death-knight/home', icon: dkIcon },
        { name: 'Warlock', path: '/class/warlock/home', icon: warlockIcon },
    ];

    const isActive = (path: string) => location.pathname.startsWith(path.replace('/home', ''));

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Searching for:', searchQuery);
    };

    return (
        <>
            {/* Mobile Menu Button */}
            <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-gray-800 rounded-lg text-gray-300 hover:text-white"
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
                    fixed lg:sticky top-0 left-0 h-screen w-87 bg-[#161e2e] border-r border-[#1f2937]
                    transform transition-transform duration-300 ease-in-out z-40 flex-shrink-0
                    ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}
                    lg:translate-x-0
                    overflow-y-auto
                `}
            >
                <div className="flex flex-col h-full px-6 py-8">
                    {/* Logo Section */}
                    <Link to="/" className="flex flex-col items-center mb-10 group">
                        {/* Decorative top line */}
                        <div className="flex items-center gap-2 mb-2">
                            <div className="w-8 h-[2px] bg-gray-600"></div>
                            <span className="text-gray-500">⚔</span>
                            <div className="w-8 h-[2px] bg-gray-600"></div>
                        </div>

                        {/* Icon */}
                        <div className="w-20 h-20 mb-3 flex items-center justify-center">
                            <span className="text-5xl">⚔️</span>
                        </div>

                        {/* Title */}
                        <div className="flex flex-col items-center">
                            <span className="text-sm text-gray-200 tracking-widest uppercase font-medium">
                                RuneBlade
                            </span>
                            <span className="text-3xl font-bold text-white tracking-wide mt-1">
                                MASTERY
                            </span>
                        </div>

                        {/* Decorative bottom line */}
                        <div className="flex items-center gap-2 mt-3">
                            <div className="w-6 h-[2px] bg-gray-600"></div>
                            <span className="text-gray-500 text-xs">◆</span>
                            <div className="w-12 h-[2px] bg-gray-600"></div>
                            <span className="text-gray-500 text-xs">◆</span>
                            <div className="w-6 h-[2px] bg-gray-600"></div>
                        </div>
                    </Link>

                    {/* Search Bar */}
                    <form onSubmit={handleSearch} className="mb-8 mx-4">
                        <input
                            type="text"
                            placeholder="Search"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full px-6 py-3 bg-[#0d4a4a] border-none rounded text-gray-300 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500/50 transition-all"
                        />
                    </form>

                    {/* Navigation Menu */}
                    <nav className="flex-1 mx-4">
                        <ul className="space-y-4">
                            {menuItems.map((item) => (
                                <li key={item.path}>
                                    <Link
                                        to={item.path}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        className={`
                                        flex items-center gap-4 pl-4 pr-4 py-3 rounded-lg transition-all duration-200 group
                                        ${isActive(item.path)
                                                ? 'bg-gray-800 border-l-4 border-gray-500'
                                                : 'hover:bg-gray-800/50 hover:border-l-4 hover:border-gray-600 border-l-4 border-transparent'
                                            }
                                    `}
                                    >
                                        <img src={item.icon} alt={item.name} className="w-6 h-6 object-contain opacity-80 group-hover:opacity-100 transition-opacity" />
                                        <span className={`font-medium text-base ${isActive(item.path) ? 'text-white' : 'text-gray-400 group-hover:text-gray-200'}`}>
                                            {item.name}
                                        </span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    {/* Footer */}
                    <div className="mt-auto pt-6 border-t border-gray-700/50">
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