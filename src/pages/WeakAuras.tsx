import { useState } from 'react';

export default function WeakAuras() {
    const [copiedId, setCopiedId] = useState<string | null>(null);

    const weakauras = [
        {
            id: 'frost-rotation',
            name: 'Frost DK Rotation Helper',
            spec: 'Frost',
            author: 'Community',
            description: 'Complete rotation helper with cooldown tracking, buff monitoring, and proc alerts for Frost Death Knights.',
            features: ['Killing Machine Alerts', 'Rime Proc Tracking', 'Pillar of Frost CD', 'Rune & RP Display'],
            importString: '!WA:2!TRvzVTnss8Bp899S...',
        },
        {
            id: 'blood-defensives',
            name: 'Blood DK Defensive Tracker',
            spec: 'Blood',
            author: 'Community',
            description: 'Track all your defensive cooldowns, Bone Shield stacks, and self-healing abilities for better survivability.',
            features: ['Bone Shield Stacks', 'Vampiric Blood CD', 'Runetap Ready', 'Death Strike Tracker'],
            importString: '!WA:2!1RvAZTXos9Dr8z9...',
        },
        {
            id: 'unholy-rotation',
            name: 'Unholy DK Complete Package',
            spec: 'Unholy',
            author: 'Community',
            description: 'Full rotation helper with Festering Wound tracking, pet abilities, and burst window optimization.',
            features: ['Festering Wounds', 'Apocalypse Timer', 'Death Coil/Epidemic', 'Gargoyle Tracking'],
            importString: '!WA:2!TEvzZTPos8Cp799...',
        },
        {
            id: 'pvp-defensives',
            name: 'DK PvP Essentials',
            spec: 'All Specs',
            author: 'Community',
            description: 'PvP-focused WeakAura pack with enemy cooldown tracking, diminishing returns, and defensive alerts.',
            features: ['DR Tracker', 'Enemy CDs', 'Icebound Fortitude', 'Anti-Magic Zone'],
            importString: '!WA:2!9RvzVTnss8Bp899...',
        },
        {
            id: 'mythic-plus',
            name: 'M+ Affix Helper',
            spec: 'All Specs',
            author: 'Community',
            description: 'Mythic+ focused with affix-specific alerts, interrupt tracking, and priority target highlighting.',
            features: ['Affix Warnings', 'Interrupt Ready', 'Priority Adds', 'Death Grip CD'],
            importString: '!WA:2!7RvzVTnss8Bp899...',
        },
    ];

    const copyToClipboard = (text: string, id: string) => {
        navigator.clipboard.writeText(text);
        setCopiedId(id);
        setTimeout(() => setCopiedId(null), 2000);
    };

    const getSpecColor = (spec: string) => {
        switch (spec) {
            case 'Blood':
                return 'bg-red-900/30 border-red-500/50 text-red-400';
            case 'Frost':
                return 'bg-blue-900/30 border-blue-500/50 text-blue-400';
            case 'Unholy':
                return 'bg-green-900/30 border-green-500/50 text-green-400';
            case 'All Specs':
                return 'bg-purple-900/30 border-purple-500/50 text-purple-400';
            default:
                return 'bg-gray-900/30 border-gray-500/50 text-gray-400';
        }
    };

    return (
        <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16 fade-in">
                    <h1 className="mb-4">WeakAuras</h1>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                        Custom WeakAura packages optimized for Death Knight gameplay
                    </p>
                </div>

                {/* Installation Guide */}
                <div className="card mb-12 fade-in">
                    <h2 className="mb-4">How to Import WeakAuras</h2>
                    <div className="space-y-4 text-gray-300">
                        <div className="flex items-start gap-3">
                            <div className="w-8 h-8 bg-cyan-500/20 border border-cyan-500/50 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                <span className="text-cyan-400 font-bold text-sm">1</span>
                            </div>
                            <div>
                                <p className="font-semibold text-cyan-300 mb-1">Install WeakAuras 2</p>
                                <p className="text-sm text-gray-400">Download from CurseForge or through your addon manager</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-3">
                            <div className="w-8 h-8 bg-cyan-500/20 border border-cyan-500/50 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                <span className="text-cyan-400 font-bold text-sm">2</span>
                            </div>
                            <div>
                                <p className="font-semibold text-cyan-300 mb-1">Copy Import String</p>
                                <p className="text-sm text-gray-400">Click the "Copy String" button on any WeakAura below</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-3">
                            <div className="w-8 h-8 bg-cyan-500/20 border border-cyan-500/50 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                <span className="text-cyan-400 font-bold text-sm">3</span>
                            </div>
                            <div>
                                <p className="font-semibold text-cyan-300 mb-1">Import in-game</p>
                                <p className="text-sm text-gray-400">Type <code className="bg-blue-900/40 px-2 py-1 rounded">/wa</code> → New → Import → Paste the string</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-3">
                            <div className="w-8 h-8 bg-cyan-500/20 border border-cyan-500/50 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                <span className="text-cyan-400 font-bold text-sm">4</span>
                            </div>
                            <div>
                                <p className="font-semibold text-cyan-300 mb-1">Position & Customize</p>
                                <p className="text-sm text-gray-400">Drag to position and adjust settings to your preference</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* WeakAuras List */}
                <div className="space-y-6">
                    {weakauras.map((wa, index) => (
                        <div
                            key={wa.id}
                            className="card fade-in"
                            style={{ animationDelay: `${index * 0.05}s` }}
                        >
                            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                                <div className="flex-1">
                                    <div className="flex flex-wrap items-center gap-3 mb-3">
                                        <h3 className="text-2xl font-bold text-cyan-300">{wa.name}</h3>
                                        <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${getSpecColor(wa.spec)}`}>
                                            {wa.spec}
                                        </span>
                                    </div>
                                    <p className="text-sm text-gray-400 mb-4">By {wa.author}</p>
                                    <p className="text-gray-300 mb-4 leading-relaxed">
                                        {wa.description}
                                    </p>
                                    <div>
                                        <h4 className="text-sm font-semibold text-cyan-400 mb-2">Features</h4>
                                        <div className="flex flex-wrap gap-2">
                                            {wa.features.map((feature) => (
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
                                    <button
                                        onClick={() => copyToClipboard(wa.importString, wa.id)}
                                        className={`btn whitespace-nowrap transition-all ${copiedId === wa.id
                                                ? 'bg-green-600 text-white'
                                                : 'btn-primary'
                                            }`}
                                    >
                                        {copiedId === wa.id ? '✓ Copied!' : 'Copy String'}
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Additional Resources */}
                <div className="card mt-12 fade-in">
                    <h2 className="mb-4">Find More WeakAuras</h2>
                    <p className="text-gray-300 mb-6">
                        Looking for more custom WeakAuras? Check out these community resources:
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <a
                            href="https://wago.io/weakauras/classes/death-knight"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-6 hover:border-cyan-500/60 transition-colors group"
                        >
                            <h3 className="text-lg font-semibold text-cyan-300 mb-2 group-hover:text-cyan-200">Wago.io</h3>
                            <p className="text-gray-400 text-sm">
                                Largest WeakAuras library with thousands of community creations
                            </p>
                        </a>
                        <a
                            href="https://discord.gg/wa2"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-6 hover:border-cyan-500/60 transition-colors group"
                        >
                            <h3 className="text-lg font-semibold text-cyan-300 mb-2 group-hover:text-cyan-200">WeakAuras Discord</h3>
                            <p className="text-gray-400 text-sm">
                                Get help, share creations, and find spec-specific channels
                            </p>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
