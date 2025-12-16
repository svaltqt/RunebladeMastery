import { useState } from 'react';
import RightSidebar from '../components/RightSidebar';

export default function Macros() {
    const [copiedId, setCopiedId] = useState<string | null>(null);

    const macros = [
        {
            id: 'death-grip-focus',
            name: 'Death Grip Focus Target',
            category: 'Utility',
            description: 'Grips your focus target if you have one, otherwise grips your current target. Essential for PvP and interrupting casters.',
            code: `#showtooltip Death Grip
/cast [@focus,exists,harm][@target] Death Grip`,
            usage: 'Set a caster as focus, use this to grip them without changing targets.',
        },
        {
            id: 'asphyxiate-modifier',
            name: 'Asphyxiate with Modifier',
            category: 'PvP',
            description: 'Asphyxiate your focus target with Alt modifier, otherwise your current target.',
            code: `#showtooltip Asphyxiate
/cast [mod:alt,@focus,exists,harm][@target] Asphyxiate`,
            usage: 'Hold Alt to stun focus target, or press normally for current target.',
        },
        {
            id: 'death-strike-self',
            name: 'Emergency Death Strike',
            category: 'Defensive',
            description: 'Cast Death Strike even without a target. Useful for self-healing when needed.',
            code: `#showtooltip Death Strike
/cast [@target,harm,nodead][@player] Death Strike`,
            usage: 'Will heal you even when you have no valid offensive target.',
        },
        {
            id: 'raise-dead-petattack',
            name: 'Raise Dead + Attack',
            category: 'Unholy',
            description: 'Summons your pet and immediately commands it to attack your target.',
            code: `#showtooltip Raise Dead
/cast Raise Dead
/petattack`,
            usage: 'One button to summon and attack. Spam-safe.',
        },
        {
            id: 'all-defensives',
            name: 'All Major Defensives',
            category: 'Defensive',
            description: 'Pops all major defensive cooldowns at once for emergency situations.',
            code: `#showtooltip Icebound Fortitude
/cast Icebound Fortitude
/cast Anti-Magic Shell
/use 13
/use 14`,
            usage: 'Emergency panic button. Uses IBF, AMS, and trinkets.',
        },
        {
            id: 'mouseover-chains',
            name: 'Chains of Ice Mouseover',
            category: 'Utility',
            description: 'Cast Chains of Ice on your mouseover target without changing targets.',
            code: `#showtooltip Chains of Ice
/cast [@mouseover,harm,nodead][@target] Chains of Ice`,
            usage: 'Hover over target and press to slow without switching.',
        },
        {
            id: 'pillar-pot',
            name: 'Pillar + Potion',
            category: 'Frost',
            description: 'Uses Pillar of Frost and a DPS potion at the same time for maximum burst.',
            code: `#showtooltip Pillar of Frost
/cast Pillar of Frost
/use Elemental Potion of Ultimate Power`,
            usage: 'Burst window opener. Update potion name as needed.',
        },
        {
            id: 'apocalypse-pot',
            name: 'Apocalypse + Potion',
            category: 'Unholy',
            description: 'Uses Apocalypse and a DPS potion together for burst windows.',
            code: `#showtooltip Apocalypse
/cast Apocalypse
/use Elemental Potion of Ultimate Power`,
            usage: 'Unholy burst opener. Update potion name as needed.',
        },
    ];

    const copyToClipboard = (text: string, id: string) => {
        navigator.clipboard.writeText(text);
        setCopiedId(id);
        setTimeout(() => setCopiedId(null), 2000);
    };

    const getCategoryColor = (category: string) => {
        switch (category) {
            case 'Utility':
                return 'bg-blue-900/30 border-blue-500/50 text-blue-400';
            case 'PvP':
                return 'bg-red-900/30 border-red-500/50 text-red-400';
            case 'Defensive':
                return 'bg-purple-900/30 border-purple-500/50 text-purple-400';
            case 'Frost':
                return 'bg-cyan-900/30 border-cyan-500/50 text-cyan-400';
            case 'Unholy':
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
                        <h1 className="mb-4">Death Knight Macros</h1>
                        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                            Essential macros to enhance your Death Knight gameplay and efficiency
                        </p>
                    </div>

                    {/* Guide */}
                    <div id="guide" className="card mb-12 fade-in">
                        <h2 className="mb-4">How to Create Macros</h2>
                        <div className="space-y-4 text-gray-300">
                            <div className="flex items-start gap-3">
                                <div className="w-8 h-8 bg-cyan-500/20 border border-cyan-500/50 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                    <span className="text-cyan-400 font-bold text-sm">1</span>
                                </div>
                                <div>
                                    <p className="font-semibold text-cyan-300 mb-1">Open Macro Interface</p>
                                    <p className="text-sm text-gray-400">Type <code className="bg-blue-900/40 px-2 py-1 rounded">/macro</code> or press <code className="bg-blue-900/40 px-2 py-1 rounded">ESC</code> → Interface → Macros</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <div className="w-8 h-8 bg-cyan-500/20 border border-cyan-500/50 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                    <span className="text-cyan-400 font-bold text-sm">2</span>
                                </div>
                                <div>
                                    <p className="font-semibold text-cyan-300 mb-1">Create New Macro</p>
                                    <p className="text-sm text-gray-400">Click "New" and choose an icon and name</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <div className="w-8 h-8 bg-cyan-500/20 border border-cyan-500/50 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                    <span className="text-cyan-400 font-bold text-sm">3</span>
                                </div>
                                <div>
                                    <p className="font-semibold text-cyan-300 mb-1">Paste Code</p>
                                    <p className="text-sm text-gray-400">Copy the macro code below and paste it in the macro body</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <div className="w-8 h-8 bg-cyan-500/20 border border-cyan-500/50 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                    <span className="text-cyan-400 font-bold text-sm">4</span>
                                </div>
                                <div>
                                    <p className="font-semibold text-cyan-300 mb-1">Drag to Action Bar</p>
                                    <p className="text-sm text-gray-400">Drag the macro from the interface to your action bars</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Macros List */}
                    <div id="macros-list" className="space-y-6">
                        {macros.map((macro, index) => (
                            <div
                                key={macro.id}
                                className="card fade-in"
                                style={{ animationDelay: `${index * 0.05}s` }}
                            >
                                <div className="mb-4">
                                    <div className="flex flex-wrap items-center gap-3 mb-3">
                                        <h3 className="text-2xl font-bold text-cyan-300">{macro.name}</h3>
                                        <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${getCategoryColor(macro.category)}`}>
                                            {macro.category}
                                        </span>
                                    </div>
                                    <p className="text-gray-300 leading-relaxed">
                                        {macro.description}
                                    </p>
                                </div>

                                <div className="bg-gray-900/50 border border-blue-500/30 rounded-lg p-4 mb-4">
                                    <div className="flex items-center justify-between mb-2">
                                        <span className="text-sm font-semibold text-cyan-400">Macro Code</span>
                                        <button
                                            onClick={() => copyToClipboard(macro.code, macro.id)}
                                            className={`text-sm px-3 py-1 rounded transition-all ${copiedId === macro.id
                                                ? 'bg-green-600 text-white'
                                                : 'bg-blue-600/50 hover:bg-blue-600 text-white'
                                                }`}
                                        >
                                            {copiedId === macro.id ? '✓ Copied!' : 'Copy'}
                                        </button>
                                    </div>
                                    <pre className="text-sm text-gray-300 font-mono whitespace-pre-wrap break-all">
                                        {macro.code}
                                    </pre>
                                </div>

                                <div className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-4">
                                    <h4 className="text-sm font-semibold text-cyan-400 mb-2">Usage</h4>
                                    <p className="text-sm text-gray-300">{macro.usage}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Tips */}
                    <div id="tips" className="card mt-12 fade-in">
                        <h2 className="mb-4">Macro Tips & Best Practices</h2>
                        <ul className="space-y-3 text-gray-300">
                            <li className="flex items-start">
                                <span className="text-cyan-400 mr-3">•</span>
                                <span>255 character limit per macro - keep them concise</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-cyan-400 mr-3">•</span>
                                <span>Use <code className="bg-blue-900/40 px-2 py-1 rounded">#showtooltip</code> to display ability tooltips and cooldowns</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-cyan-400 mr-3">•</span>
                                <span>Test macros on target dummies before using in combat</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-cyan-400 mr-3">•</span>
                                <span>Macros are spam-safe - you can spam them without breaking functionality</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-cyan-400 mr-3">•</span>
                                <span>Update potion names when new seasons/expansions release</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <RightSidebar
                    navigationItems={[
                        { label: 'Introduction', href: '#header' },
                        { label: 'How to Create', href: '#guide' },
                        { label: 'Macros List', href: '#macros-list' },
                        { label: 'Tips & Tricks', href: '#tips' }
                    ]}
                >
                    <div className="bg-blue-900/10 border border-blue-500/20 rounded-lg p-4">
                        <h3 className="text-sm font-bold text-cyan-400 uppercase tracking-wider mb-2">Pro Tip</h3>
                        <p className="text-sm text-gray-400">
                            Use <code className="text-cyan-300">#showtooltip</code> in every macro to automatically see the icon and cooldown of the ability being used.
                        </p>
                    </div>
                </RightSidebar>
            </div>
        </div>
    );
}
