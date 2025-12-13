export default function ClassGuide() {
    const specs = [
        {
            name: 'Blood',
            icon: '🩸',
            color: 'from-red-600 to-rose-700',
            role: 'Tank',
            description: 'Master of self-healing and damage mitigation through blood magic.',
            highlights: ['Self-Healing', 'Death Strike Mastery', 'Bone Shield', 'Vampiric Blood'],
        },
        {
            name: 'Frost',
            icon: '❄️',
            color: 'from-blue-500 to-cyan-500',
            role: 'DPS',
            description: 'Unleash devastating frost attacks with dual-wielding precision.',
            highlights: ['Dual Wield', 'Obliterate', 'Frost Strike', 'Pillar of Frost'],
        },
        {
            name: 'Unholy',
            icon: '☠️',
            color: 'from-green-600 to-emerald-700',
            role: 'DPS',
            description: 'Command disease and undead minions to strike down your foes.',
            highlights: ['Pet Management', 'Festering Wounds', 'Army of the Dead', 'Unholy Blight'],
        },
    ];

    return (
        <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16 fade-in">
                    <h1 className="mb-4">Death Knight Class Guide</h1>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                        Master the art of death and destruction with comprehensive guides for all three specializations
                    </p>
                </div>

                {/* Overview */}
                <div className="card mb-12 fade-in">
                    <h2 className="mb-6">Class Overview</h2>
                    <p className="text-gray-300 leading-relaxed mb-4">
                        Death Knights are masters of necromantic magic and runeblade combat. They harness the power of frost, blood, and unholy magic to vanquish their enemies and bolster themselves.
                    </p>
                    <p className="text-gray-300 leading-relaxed mb-6">
                        Originally created by the Lich King to serve as commanders of the Scourge, Death Knights have broken free and now use their dark powers for their own purposes.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
                        <div className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-4">
                            <h3 className="text-lg font-semibold text-cyan-300 mb-2">Resource System</h3>
                            <p className="text-gray-400 text-sm">Runes & Runic Power</p>
                        </div>
                        <div className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-4">
                            <h3 className="text-lg font-semibold text-cyan-300 mb-2">Armor Type</h3>
                            <p className="text-gray-400 text-sm">Plate</p>
                        </div>
                        <div className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-4">
                            <h3 className="text-lg font-semibold text-cyan-300 mb-2">Available Roles</h3>
                            <p className="text-gray-400 text-sm">Tank, Melee DPS</p>
                        </div>
                    </div>
                </div>

                {/* Specializations */}
                <div className="mb-12">
                    <h2 className="text-center mb-10 fade-in">Specializations</h2>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                        {specs.map((spec, index) => (
                            <div
                                key={spec.name}
                                className="card fade-in"
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                <div className={`w-16 h-16 bg-gradient-to-br ${spec.color} rounded-xl flex items-center justify-center mb-4 glow`}>
                                    <span className="text-3xl">{spec.icon}</span>
                                </div>
                                <h3 className="text-2xl font-bold mb-2 text-cyan-300">{spec.name}</h3>
                                <p className="text-sm text-gray-400 mb-4 font-semibold uppercase tracking-wide">{spec.role}</p>
                                <p className="text-gray-300 mb-6 leading-relaxed">{spec.description}</p>

                                <div>
                                    <h4 className="text-sm font-semibold text-cyan-400 mb-3">Key Abilities</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {spec.highlights.map((ability) => (
                                            <span
                                                key={ability}
                                                className="px-3 py-1 bg-blue-900/30 border border-blue-500/40 rounded-full text-xs text-gray-300"
                                            >
                                                {ability}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Rotation Guide */}
                <div className="card mb-12 fade-in">
                    <h2 className="mb-6">Basic Rotation Principles</h2>
                    <div className="space-y-6">
                        <div>
                            <h3 className="text-xl font-semibold text-cyan-300 mb-3">Resource Management</h3>
                            <p className="text-gray-300 leading-relaxed">
                                Death Knights use a dual resource system: <span className="text-cyan-400 font-semibold">Runes</span> and <span className="text-cyan-400 font-semibold">Runic Power</span>. Spend runes to generate runic power, then use that power for devastating finishing moves.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold text-cyan-300 mb-3">Priority System</h3>
                            <ul className="list-disc list-inside space-y-2 text-gray-300">
                                <li>Keep your diseases/debuffs active on targets</li>
                                <li>Use major cooldowns during burst windows</li>
                                <li>Spend runes efficiently to avoid capping</li>
                                <li>Use runic power before it caps at 100</li>
                                <li>Maintain key buffs and manage defensive cooldowns (for Blood)</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Stats */}
                <div className="card fade-in">
                    <h2 className="mb-6">Stat Priority</h2>
                    <p className="text-gray-300 mb-6">
                        Stat priorities vary by specialization and content type. Here's a general guideline:
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div>
                            <h3 className="text-lg font-semibold text-red-400 mb-3">Blood (Tank)</h3>
                            <ol className="list-decimal list-inside space-y-1 text-gray-300 text-sm">
                                <li>Versatility</li>
                                <li>Mastery</li>
                                <li>Haste</li>
                                <li>Critical Strike</li>
                            </ol>
                        </div>

                        <div>
                            <h3 className="text-lg font-semibold text-cyan-400 mb-3">Frost (DPS)</h3>
                            <ol className="list-decimal list-inside space-y-1 text-gray-300 text-sm">
                                <li>Mastery</li>
                                <li>Critical Strike</li>
                                <li>Versatility</li>
                                <li>Haste</li>
                            </ol>
                        </div>

                        <div>
                            <h3 className="text-lg font-semibold text-green-400 mb-3">Unholy (DPS)</h3>
                            <ol className="list-decimal list-inside space-y-1 text-gray-300 text-sm">
                                <li>Mastery</li>
                                <li>Haste</li>
                                <li>Critical Strike</li>
                                <li>Versatility</li>
                            </ol>
                        </div>
                    </div>

                    <p className="text-sm text-gray-400 mt-6 italic">
                        Note: Always sim your character for accurate stat weights based on your current gear and content.
                    </p>
                </div>
            </div>
        </div>
    );
}
