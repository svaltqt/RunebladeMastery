import { Link, useParams } from 'react-router-dom';
import waIcon from '../assets/WA.png';
import bloodIcon from '../assets/death-knight-blood.avif';
import frostIcon from '../assets/death-knight-frost.avif';
import unholyIcon from '../assets/death-knight-unholy.avif';
import afflictionIcon from '../assets/warlock-affliction.avif';
import demonologyIcon from '../assets/warlock-demonology.avif';
import destructionIcon from '../assets/warlock-destruction.avif';
import RightSidebar from '../components/RightSidebar';

export default function Home() {
    const { className, spec } = useParams<{ className: string; spec?: string }>();

    // Spec configurations
    const classSpecs: Record<string, Array<{ name: string, slug: string, icon: string, color: string }>> = {
        'death-knight': [
            { name: 'Blood', slug: 'blood', icon: bloodIcon, color: 'from-red-600 to-red-800' },
            { name: 'Frost', slug: 'frost', icon: frostIcon, color: 'from-cyan-500 to-blue-600' },
            { name: 'Unholy', slug: 'unholy', icon: unholyIcon, color: 'from-green-500 to-emerald-700' }
        ],
        'warlock': [
            { name: 'Affliction', slug: 'affliction', icon: afflictionIcon, color: 'from-purple-600 to-purple-800' },
            { name: 'Demonology', slug: 'demonology', icon: demonologyIcon, color: 'from-violet-500 to-fuchsia-700' },
            { name: 'Destruction', slug: 'destruction', icon: destructionIcon, color: 'from-orange-500 to-red-600' }
        ]
    };

    const specs = classSpecs[className || 'death-knight'] || classSpecs['death-knight'];

    // If no spec selected, show spec selection page
    if (!spec) {
        return (
            <div className="flex flex-col min-h-[80vh] justify-center">
                {/* Welcome Section */}
                <div id="welcome" className="mb-8 text-center">
                    <h1 className="mb-4 text-4xl">Choose Your Path</h1>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                        Select your {className === 'death-knight' ? 'Death Knight' : 'Warlock'} specialization
                    </p>
                </div>

                {/* Spec Selection - Banner Style */}
                <div className="flex justify-center gap-8 max-w-7xl mx-auto w-full px-4 items-center">
                    {specs.map((specItem) => (
                        <Link
                            key={specItem.slug}
                            to={`/class/${className}/${specItem.slug}/home`}
                            className="group relative w-full max-w-[280px] h-[480px] transition-all duration-300 cursor-pointer hover:-translate-y-2"
                        >
                            {/* Flag Shape Container with clip-path */}
                            <div
                                className="absolute inset-0 bg-[#151515] border-x-2 border-t-2 border-b-0 border-gray-800 group-hover:border-gray-600 transition-colors duration-500 overflow-hidden"
                                style={{
                                    clipPath: 'polygon(0% 0%, 100% 0%, 100% 85%, 50% 100%, 0% 85%)',
                                    borderRadius: '4px 4px 0 0'
                                }}
                            >
                                {/* Background gradient - More subtle and deep */}
                                <div className={`absolute inset-0 bg-gradient-to-b ${specItem.color} opacity-20 group-hover:opacity-40 transition-opacity duration-500`}></div>

                                {/* Large Watermark Icon - Blends into background */}
                                <div
                                    className="absolute -bottom-12 -right-12 w-64 h-64 opacity-10 group-hover:opacity-20 transition-all duration-500 transform rotate-12 group-hover:rotate-0 group-hover:scale-110 grayscale group-hover:grayscale-0 mix-blend-overlay pointer-events-none"
                                    style={{ maskImage: 'radial-gradient(circle, black 40%, transparent 70%)', WebkitMaskImage: 'radial-gradient(circle, black 40%, transparent 70%)' }}
                                >
                                    {typeof specItem.icon === 'string' && specItem.icon.length > 5 ? (
                                        <img src={specItem.icon} alt="" className="w-full h-full object-contain" />
                                    ) : (
                                        <div className="text-[10rem]">{specItem.icon}</div>
                                    )}
                                </div>

                                {/* Dark overlay pattern/texture effect */}
                                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/dark-matter.png')] opacity-30 mix-blend-overlay"></div>

                                {/* Inner Border for depth */}
                                <div className="absolute inset-[6px] border border-white/5 group-hover:border-white/10 transition-colors duration-500" style={{ clipPath: 'polygon(0% 0%, 100% 0%, 100% 85%, 50% 99%, 0% 85%)' }}></div>

                                {/* Content */}
                                <div className="relative h-full flex flex-col items-center pt-20 pb-24 px-4 z-10">
                                    {/* Icon Container with Spotlight */}
                                    <div className="relative mb-10 group-hover:scale-110 transition-transform duration-500">
                                        {/* Spotlight/Glow behind icon */}
                                        <div className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-56 h-56 bg-gradient-to-tr ${specItem.color} opacity-0 group-hover:opacity-40 blur-[50px] rounded-full transition-opacity duration-500`}></div>

                                        {/* Square Icon Frame */}
                                        <div className="relative z-10 w-40 h-40 bg-[#111] p-1 border-2 border-gray-600 group-hover:border-[#d4af37] rounded-lg shadow-[0_0_20px_rgba(0,0,0,0.8)] transition-colors duration-500">
                                            {/* Inner Bevel/Border */}
                                            <div className="w-full h-full border border-white/10 rounded overflow-hidden relative">
                                                {/* Icon Image */}
                                                {specItem.icon.startsWith('/') || specItem.icon.includes('data:') || specItem.icon.length > 5 ? (
                                                    <img
                                                        src={specItem.icon}
                                                        alt={`${specItem.name} icon`}
                                                        className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                                                    />
                                                ) : (
                                                    <div className="w-full h-full flex items-center justify-center bg-[#222]">
                                                        <div className="text-6xl drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]">
                                                            {specItem.icon}
                                                        </div>
                                                    </div>
                                                )}

                                                {/* Gloss/Shine Overlay on the icon itself */}
                                                <div className="absolute inset-0 bg-gradient-to-tr from-black/40 via-transparent to-white/10 pointer-events-none"></div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Spec Name */}
                                    <h2 className="text-3xl font-black text-white mb-2 tracking-[0.15em] uppercase drop-shadow-lg text-center group-hover:text-white transition-colors">
                                        {specItem.name}
                                    </h2>

                                    {/* Colored Line under title */}
                                    <div className={`w-12 h-1 bg-gradient-to-r ${specItem.color} opacity-70 group-hover:w-24 group-hover:opacity-100 transition-all duration-500 mb-4 rounded-full`}></div>

                                    {/* Description/Role Tag */}
                                    <span className="text-[10px] font-bold tracking-[0.3em] text-gray-500 uppercase group-hover:text-gray-300 transition-colors duration-300">
                                        Select Spec
                                    </span>
                                </div>

                                {/* Shine effect */}
                                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                                    <div className="absolute inset-0 bg-gradient-to-b from-white/0 via-white/5 to-white/0 transform translate-y-[-100%] group-hover:translate-y-[100%] transition-transform duration-1000 ease-in-out"></div>
                                </div>
                            </div>

                            {/* "Hanging" visual effect at top (optional, mimics hanging from a rod) */}
                            <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-[120%] h-4 bg-gradient-to-r from-gray-800 via-gray-600 to-gray-800 rounded-full shadow-lg z-10 flex items-center justify-center">
                                {/* Rod decor */}
                                <div className="w-[98%] h-[2px] bg-gray-400/20"></div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        );
    }
    // If spec is selected, show content selection (WeakAuras, Addons, etc.)
    return (
        <div className="flex gap-8">
            {/* Main Content Area */}
            <div className="flex-1 min-w-0">
                {/* Welcome Section */}
                <div id="welcome" className="mb-12">
                    <h1 className="mb-4">Bienvenido a RuneBlade Mastery</h1>
                    <p className="text-xl text-gray-400 max-w-3xl">
                        Tu guía completa para dominar la clase <span className="text-gray-200 font-semibold">Death Knight</span> en World of Warcraft
                    </p>
                </div>

                {/* Quick Links */}
                <div id="quick-links" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mb-12">
                    <Link to={`/class/${className}/${spec}/weakauras`} className="bg-[#1f2937] border border-gray-700/30 rounded-lg px-4 py-3 flex items-center gap-3 hover:border-gray-600/50 hover:bg-[#2d3748] transition-all duration-200 cursor-pointer">
                        <div className="w-10 h-10 bg-transparent rounded-lg flex items-center justify-center shrink-0 overflow-hidden">
                            <img src={waIcon} alt="WeakAuras" className="w-full h-full object-contain" />
                        </div>
                        <h3 className="text-base font-semibold text-gray-200">WeakAuras</h3>
                    </Link>

                    <Link to={`/class/${className}/${spec}/addons`} className="bg-[#1f2937] border border-gray-700/30 rounded-lg px-4 py-3 flex items-center gap-3 hover:border-gray-600/50 hover:bg-[#2d3748] transition-all duration-200 cursor-pointer">
                        <div className="w-10 h-10 bg-gradient-to-br from-gray-600 to-gray-500 rounded-lg flex items-center justify-center shrink-0">
                            <span className="text-2xl">🔧</span>
                        </div>
                        <h3 className="text-base font-semibold text-gray-200">Addons</h3>
                    </Link>

                    <Link to={`/class/${className}/${spec}/macros`} className="bg-[#1f2937] border border-gray-700/30 rounded-lg px-4 py-3 flex items-center gap-3 hover:border-gray-600/50 hover:bg-[#2d3748] transition-all duration-200 cursor-pointer">
                        <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg flex items-center justify-center shrink-0">
                            <span className="text-2xl">📜</span>
                        </div>
                        <h3 className="text-base font-semibold text-gray-200">Macros</h3>
                    </Link>

                    <Link to={`/class/${className}/${spec}/talentos`} className="bg-[#1f2937] border border-gray-700/30 rounded-lg px-4 py-3 flex items-center gap-3 hover:border-gray-600/50 hover:bg-[#2d3748] transition-all duration-200 cursor-pointer">
                        <div className="w-10 h-10 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-lg flex items-center justify-center shrink-0">
                            <span className="text-2xl">🌟</span>
                        </div>
                        <h3 className="text-base font-semibold text-gray-200">Talentos</h3>
                    </Link>

                    <Link to={`/class/${className}/${spec}/gear`} className="bg-[#1f2937] border border-gray-700/30 rounded-lg px-4 py-3 flex items-center gap-3 hover:border-gray-600/50 hover:bg-[#2d3748] transition-all duration-200 cursor-pointer">
                        <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-pink-600 rounded-lg flex items-center justify-center shrink-0">
                            <span className="text-2xl">⚔️</span>
                        </div>
                        <h3 className="text-base font-semibold text-gray-200">Gear</h3>
                    </Link>

                    <Link to={`/class/${className}/${spec}/ui`} className="bg-[#1f2937] border border-gray-700/30 rounded-lg px-4 py-3 flex items-center gap-3 hover:border-gray-600/50 hover:bg-[#2d3748] transition-all duration-200 cursor-pointer">
                        <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center shrink-0">
                            <span className="text-2xl">🎨</span>
                        </div>
                        <h3 className="text-base font-semibold text-gray-200">UI</h3>
                    </Link>
                </div>

                {/* About Section */}
                <div id="about" className="card">
                    <h2 className="mb-4">Sobre esta Guía</h2>
                    <p className="text-gray-300 mb-4">
                        RuneBlade Mastery es una guía completa dedicada a la clase Death Knight en World of Warcraft. Aquí encontrarás todo lo necesario para dominar las tres especializaciones: Blood, Frost y Unholy.
                    </p>
                    <p className="text-gray-300">
                        Explora las secciones del menú lateral para acceder a información detallada sobre addons, WeakAuras, macros, talentos, equipamiento y configuración de UI.
                    </p>
                </div>
            </div>

            {/* Internal Sidebar - Moved to Right */}
            <RightSidebar
                navigationItems={[
                    { label: 'Welcome', href: '#welcome' },
                    { label: 'Quick Links', href: '#quick-links' },
                    { label: 'About', href: '#about' }
                ]}
            >
                <div>
                    <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-3">Resources</h3>
                    <ul className="space-y-2 text-sm">
                        <li><a href="#" className="text-gray-400 hover:text-gray-200">Class Discord</a></li>
                        <li><a href="#" className="text-gray-400 hover:text-gray-200">SimCraft</a></li>
                        <li><a href="#" className="text-gray-400 hover:text-gray-200">Warcraft Logs</a></li>
                    </ul>
                </div>
            </RightSidebar>
        </div>
    );
}
