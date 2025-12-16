import RightSidebar from '../components/RightSidebar';

export default function UI() {
    const uiAddons = [
        {
            name: 'ElvUI',
            description: 'The most popular complete UI replacement. Highly customizable with built-in raid frames, nameplates, and action bars.',
            pros: ['All-in-One Solution', 'Easy to Configure', 'Active Development', 'Large Community'],
            link: 'https://www.tukui.org/download.php?ui=elvui',
        },
        {
            name: 'GW2 UI',
            description: 'Guild Wars 2 inspired interface. Modern, sleek design with immersive elements and minimalist approach.',
            pros: ['Immersive Design', 'Clean Aesthetics', 'Built-in Features', 'Easy Setup'],
            link: 'https://www.curseforge.com/wow/addons/gw2-ui',
        },
    ];

    const uiElements = [
        {
            title: 'Action Bars',
            icon: '🎮',
            tips: [
                'Place Death Strike in an easily accessible keybind (middle mouse is popular for tanks)',
                'Keep major cooldowns on the same keys across all specs for muscle memory',
                'Use mouse button binds for frequently used abilities',
                'Hide unused action bars to reduce clutter',
            ],
        },
        {
            title: 'Nameplates',
            icon: '📛',
            tips: [
                'Increase nameplate scale to better track targets in crowded fights',
                'Color by threat (tank) or class (DPS)',
                'Show enemy cast bars prominently for interrupts',
                'Display your DoTs/debuffs on enemy nameplates (Unholy)',
            ],
        },
        {
            title: 'Raid Frames',
            icon: '👥',
            tips: [
                'For Blood DK: enable friendly nameplates to track nearby allies',
                'Show debuffs you can help with (dispels, immunities)',
                'Keep frames compact but readable',
                'Position where you can see them without blocking combat',
            ],
        },
        {
            title: 'Buffs & Debuffs',
            icon: '✨',
            tips: [
                'Track important buffs: Pillar of Frost, Icy Talons, Bone Shield',
                'Monitor Rune cooldowns prominently',
                'Display Runic Power bar clearly near your character',
                'Use WeakAuras for proc tracking instead of default buff icons',
            ],
        },
    ];

    return (
        <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto flex gap-8">
                {/* Main Content */}
                <div className="flex-1 min-w-0">
                    {/* Header */}
                    <div id="header" className="text-center mb-16 fade-in">
                        <h1 className="mb-4">UI Optimization</h1>
                        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                            Optimize your interface for maximum Death Knight performance
                        </p>
                    </div>

                    {/* UI Philosophy */}
                    <div id="philosophy" className="card mb-12 fade-in">
                        <h2 className="mb-4">UI Design Philosophy</h2>
                        <p className="text-gray-300 mb-4 leading-relaxed">
                            A good UI should provide all necessary information at a glance while minimizing clutter and distractions. For Death Knights, you need to track:
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-4">
                                <h3 className="text-cyan-400 font-semibold mb-2">❄️ Resources</h3>
                                <p className="text-gray-300 text-sm">Runes, Runic Power, important buffs/debuffs</p>
                            </div>
                            <div className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-4">
                                <h3 className="text-cyan-400 font-semibold mb-2">⏱️ Cooldowns</h3>
                                <p className="text-gray-300 text-sm">Major abilities, defensive CDs, trinkets</p>
                            </div>
                            <div className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-4">
                                <h3 className="text-cyan-400 font-semibold mb-2">🎯 Targets</h3>
                                <p className="text-gray-300 text-sm">Enemy cast bars, DoT tracking, nameplate visibility</p>
                            </div>
                            <div className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-4">
                                <h3 className="text-cyan-400 font-semibold mb-2">📊 Combat Info</h3>
                                <p className="text-gray-300 text-sm">DPS meters, raid warnings, proc alerts</p>
                            </div>
                        </div>
                    </div>

                    {/* UI Addon Recommendations */}
                    <div id="packages" className="mb-12">
                        <h2 className="text-center mb-10 fade-in">Complete UI Packages</h2>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                            {uiAddons.map((addon, index) => (
                                <div
                                    key={addon.name}
                                    className="card fade-in"
                                    style={{ animationDelay: `${index * 0.1}s` }}
                                >
                                    <h3 className="text-2xl font-bold mb-3 text-cyan-300">{addon.name}</h3>
                                    <p className="text-gray-300 mb-6 leading-relaxed">
                                        {addon.description}
                                    </p>
                                    <div className="mb-6">
                                        <h4 className="text-sm font-semibold text-cyan-400 mb-3">Advantages</h4>
                                        <div className="flex flex-wrap gap-2">
                                            {addon.pros.map((pro) => (
                                                <span
                                                    key={pro}
                                                    className="px-3 py-1 bg-blue-900/30 border border-blue-500/40 rounded-full text-xs text-gray-300"
                                                >
                                                    {pro}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                    <a
                                        href={addon.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="btn btn-primary w-full"
                                    >
                                        Download {addon.name}
                                    </a>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* UI Element Optimization */}
                    <div id="elements" className="mb-12">
                        <h2 className="text-center mb-10 fade-in">UI Element Optimization</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {uiElements.map((element, index) => (
                                <div
                                    key={element.title}
                                    className="card fade-in"
                                    style={{ animationDelay: `${index * 0.05}s` }}
                                >
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center text-2xl">
                                            {element.icon}
                                        </div>
                                        <h3 className="text-xl font-bold text-cyan-300">{element.title}</h3>
                                    </div>
                                    <ul className="space-y-2">
                                        {element.tips.map((tip, tipIndex) => (
                                            <li key={tipIndex} className="flex items-start text-sm text-gray-300">
                                                <span className="text-cyan-400 mr-2 mt-1">•</span>
                                                <span>{tip}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Keybinding Tips */}
                    <div id="keybindings" className="card mb-12 fade-in">
                        <h2 className="mb-4">Keybinding Recommendations</h2>
                        <p className="text-gray-300 mb-6">
                            Good keybinds are crucial for Death Knight performance. Here are some suggestions:
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <h3 className="text-cyan-400 font-semibold mb-3">Easy Access Keys</h3>
                                <ul className="space-y-2 text-gray-300 text-sm">
                                    <li><span className="text-cyan-400">1-5:</span> Main rotation abilities</li>
                                    <li><span className="text-cyan-400">Q, E, R, F, G:</span> Frequently used spells</li>
                                    <li><span className="text-cyan-400">Mouse buttons:</span> Death Strike, interrupts</li>
                                    <li><span className="text-cyan-400">Shift/Ctrl modifiers:</span> Less frequent abilities</li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="text-cyan-400 font-semibold mb-3">Example DK Binds</h3>
                                <ul className="space-y-2 text-gray-300 text-sm">
                                    <li><span className="text-cyan-400">M4/M5:</span> Death Strike / Anti-Magic Shell</li>
                                    <li><span className="text-cyan-400">Q:</span> Chains of Ice</li>
                                    <li><span className="text-cyan-400">E:</span> Death and Decay</li>
                                    <li><span className="text-cyan-400">R:</span> Death Grip</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Additional Tips */}
                    <div id="tips" className="card fade-in">
                        <h2 className="mb-4">General UI Tips</h2>
                        <ul className="space-y-3 text-gray-300">
                            <li className="flex items-start">
                                <span className="text-cyan-400 mr-3">•</span>
                                <span>Keep your character centered and visible - avoid obscuring with UI elements</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-cyan-400 mr-3">•</span>
                                <span>Use consistent positioning across all characters for muscle memory</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-cyan-400 mr-3">•</span>
                                <span>Scale down UI elements on larger monitors to reduce eye travel distance</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-cyan-400 mr-3">•</span>
                                <span>Export your UI profile periodically as a backup</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-cyan-400 mr-3">•</span>
                                <span>Test UI changes on target dummies before taking them into real content</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <RightSidebar
                navigationItems={[
                    { label: 'Introduction', href: '#header' },
                    { label: 'Philosophy', href: '#philosophy' },
                    { label: 'UI Packages', href: '#packages' },
                    { label: 'Optimization', href: '#elements' },
                    { label: 'Keybindings', href: '#keybindings' },
                    { label: 'General Tips', href: '#tips' }
                ]}
            />
        </div>

    );
}
