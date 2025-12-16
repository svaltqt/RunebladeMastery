import RightSidebar from '../components/RightSidebar';

export default function Addons() {
    const addons = [
        {
            name: 'WeakAuras 2',
            category: 'Essential',
            description: 'Create custom displays to track abilities, cooldowns, buffs, and debuffs. Absolutely essential for optimizing your Death Knight gameplay.',
            features: ['Custom Alerts', 'CD Tracking', 'Resource Monitoring', 'Highly Customizable'],
            link: 'https://www.curseforge.com/wow/addons/weakauras-2',
        },
        {
            name: 'Details! Damage Meter',
            category: 'Essential',
            description: 'Advanced damage meter that provides detailed combat analytics. Track your DPS, analyze your rotations, and identify areas for improvement.',
            features: ['Real-time DPS', 'Death Recap', 'Ability Breakdown', 'Compare w/ Others'],
            link: 'https://www.curseforge.com/wow/addons/details',
        },
        {
            name: 'Deadly Boss Mods (DBM)',
            category: 'Essential',
            description: 'Boss encounter alerts and timers. Essential for raiding to know when boss abilities are coming and how to respond.',
            features: ['Boss Timers', 'Raid Warnings', 'Voice Alerts', 'Auto-Updated'],
            link: 'https://www.curseforge.com/wow/addons/deadly-boss-mods',
        },
        {
            name: 'Hekili',
            category: 'Rotation Helper',
            description: 'Provides rotation recommendations based on SimulationCraft APL. Great for learning optimal rotations for your spec.',
            features: ['Rotation Suggestions', 'Cooldown Management', 'Multi-spec Support', 'Simc Integration'],
            link: 'https://www.curseforge.com/wow/addons/hekili',
        },
        {
            name: 'Plater Nameplates',
            category: 'UI Enhancement',
            description: 'Advanced nameplate addon with extensive customization. See enemy cast bars, track dots, and customize colors.',
            features: ['Custom Nameplates', 'Cast Bar Emphasis', 'Threat Colors', 'Scripts & Mods'],
            link: 'https://www.curseforge.com/wow/addons/plater-nameplates',
        },
        {
            name: 'OmniCD',
            category: 'PvP/M+',
            description: 'Track party and enemy cooldowns. Essential for Mythic+ and PvP to coordinate interrupts and defensive cooldowns.',
            features: ['Party CDs', 'Enemy CDs', 'Interrupt Tracker', 'Customizable Display'],
            link: 'https://www.curseforge.com/wow/addons/omnicd',
        },
    ];

    const getCategoryColor = (category: string) => {
        switch (category) {
            case 'Essential':
                return 'bg-red-900/30 border-red-500/50 text-red-400';
            case 'Rotation Helper':
                return 'bg-blue-900/30 border-blue-500/50 text-blue-400';
            case 'UI Enhancement':
                return 'bg-purple-900/30 border-purple-500/50 text-purple-400';
            case 'PvP/M+':
                return 'bg-green-900/30 border-green-500/50 text-green-400';
            default:
                return 'bg-gray-900/30 border-gray-500/50 text-gray-400';
        }
    };

    return (
        <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto flex gap-8">
                {/* Main Content */}
                <div className="flex-1 min-w-0">
                    {/* Header */}
                    <div id="header" className="text-center mb-16 fade-in">
                        <h1 className="mb-4">Essential Addons</h1>
                        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                            Enhance your Death Knight experience with these must-have addons
                        </p>
                    </div>

                    {/* Addons List */}
                    <div id="list" className="space-y-6">
                        {addons.map((addon, index) => (
                            <div
                                key={addon.name}
                                className="card fade-in"
                                style={{ animationDelay: `${index * 0.05}s` }}
                            >
                                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                                    <div className="flex-1">
                                        <div className="flex items-center gap-3 mb-3">
                                            <h3 className="text-2xl font-bold text-cyan-300">{addon.name}</h3>
                                            <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${getCategoryColor(addon.category)}`}>
                                                {addon.category}
                                            </span>
                                        </div>
                                        <p className="text-gray-300 mb-4 leading-relaxed">
                                            {addon.description}
                                        </p>
                                        <div>
                                            <h4 className="text-sm font-semibold text-cyan-400 mb-2">Key Features</h4>
                                            <div className="flex flex-wrap gap-2">
                                                {addon.features.map((feature) => (
                                                    <span
                                                        key={feature}
                                                        className="px-3 py-1 bg-blue-900/30 border border-blue-500/40 rounded-full text-xs text-gray-300"
                                                    >
                                                        {feature}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="lg:ml-6">
                                        <a
                                            href={addon.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="btn btn-primary whitespace-nowrap"
                                        >
                                            Download →
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Tips */}
                    <div id="tips" className="card mt-12 fade-in">
                        <h2 className="mb-4">Configuration Tips</h2>
                        <ul className="space-y-3 text-gray-300">
                            <li className="flex items-start">
                                <span className="text-cyan-400 mr-3">•</span>
                                <span>Start with default settings and customize gradually as you learn each addon</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-cyan-400 mr-3">•</span>
                                <span>Keep addons updated for optimal performance and bug fixes</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-cyan-400 mr-3">•</span>
                                <span>Disable addons you're not using to reduce memory usage</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-cyan-400 mr-3">•</span>
                                <span>Check addon compatibility after major WoW patches</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <RightSidebar
                    navigationItems={[
                        { label: 'Recommended Addons', href: '#header' },
                        { label: 'Addons List', href: '#list' },
                        { label: 'Configuration Tips', href: '#tips' }
                    ]}
                />
            </div>
        </div>
    );
}
