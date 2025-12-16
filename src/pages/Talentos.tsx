import { useState } from 'react';
import { useParams } from 'react-router-dom';
import RightSidebar from '../components/RightSidebar';

type Build = {
    id: string;
    name: string;
    type: string;
    description: string;
    pros: string[];
    cons: string[];
    string: string;
};

const talentBuilds: Record<string, Build[]> = {
    blood: [
        {
            id: 'blood-raid',
            name: 'Raid Survival',
            type: 'Raid',
            description: 'Focuses on maximum survivability and consistent Runic Power generation for Death Strike usage.',
            pros: ['High Survivability', 'Consistent Healing', 'Cheat Death'],
            cons: ['Lower Damage', 'Less Mobility'],
            string: 'BoPAAAAAAAAAAAAAAAAAAAAAAACjkkJJi0SiehkIJiEAAAAAAAAAAgQSrk4AJRg0kkkEAA'
        },
        {
            id: 'blood-mplus',
            name: 'Mythic+ General',
            type: 'Mythic+',
            description: 'Balanced build for dungeon content, offering good AOE threat and control.',
            pros: ['Good AOE Threat', 'Crowd Control', 'Utility'],
            cons: ['Slightly lower ST defense'],
            string: 'BoPAAAAAAAAAAAAAAAAAAAAAAACjkkJJi0SiehkIJiEAAAAAAAAAAgQSrk4AJRg0kkkEAA' // Placeholder
        }
    ],
    frost: [
        {
            id: 'frost-oblit',
            name: 'Obliteration (2H)',
            type: 'Raid / M+',
            description: 'Focuses on big critical strikes with Obliterate during Pillar of Frost windows. Requires a 2H weapon.',
            pros: ['High Burst', 'Simple Rotation', 'Big Crits'],
            cons: ['Dependent on Cooldowns', 'Slow attack speed'],
            string: 'BsPAAAAAAAAAAAAAAAAAAAAAAQAikIJi0Sicg0SSiIhEAAAAAAAAAAgQSrk4AJRg0kkkEAA'
        },
        {
            id: 'frost-breath',
            name: 'Breath of Sindragosa (DW)',
            type: 'Raid',
            description: 'High sustained AOE damage build revolved around maintaining Breath of Sindragosa.',
            pros: ['Insane AOE Burst', 'Consistent Pressure'],
            cons: ['High Skill Cap', 'Punishing if interrupted'],
            string: 'BsPAAAAAAAAAAAAAAAAAAAAAAQAikIJi0Sicg0SSiIhEAAAAAAAAAAgQSrk4AJRg0kkkEAA'
        }
    ],
    unholy: [
        {
            id: 'unholy-plague',
            name: 'Plaguebringer',
            type: 'Mythic+',
            description: 'Spreads diseases and pops Festering Wounds on multiple targets for massive AOE.',
            pros: ['Massive AOE', 'Strong Cleave'],
            cons: ['Ramp up time'],
            string: 'BwPAAAAAAAAAAAAAAAAAAAAAAQAikIJi0Sicg0SSiIhEAAAAAAAAAAgQSrk4AJRg0kkkEAA'
        },
        {
            id: 'unholy-ST',
            name: 'Single Target Army',
            type: 'Raid',
            description: 'Maximizes single target damage with Army of the Dead and Gargoyle.',
            pros: ['Top Tier ST', 'Strong Execute'],
            cons: ['Cooldown dependent'],
            string: 'BwPAAAAAAAAAAAAAAAAAAAAAAQAikIJi0Sicg0SSiIhEAAAAAAAAAAgQSrk4AJRg0kkkEAA'
        }
    ]
};

export default function Talentos() {
    const { spec } = useParams<{ spec: string }>();
    const currentSpec = spec?.toLowerCase() || 'blood';
    const [expandedBuild, setExpandedBuild] = useState<string | null>(null);

    const builds = talentBuilds[currentSpec] || [];

    const toggleBuild = (id: string) => {
        if (expandedBuild === id) {
            setExpandedBuild(null);
        } else {
            setExpandedBuild(id);
        }
    };

    const copyToClipboard = (text: string) => {
        navigator.clipboard.writeText(text);
        // Could add toast notification here
    };

    return (
        <div className="max-w-7xl mx-auto flex gap-8">
            <div className="flex-1 min-w-0">
                <div id="header" className="mb-8 fade-in">
                    <h1 className="mb-3 capitalize">{currentSpec} Talent Builds</h1>
                    <p className="text-gray-400 text-lg">
                        Select a build below to view details and import string.
                    </p>
                </div>

                {/* Builds List */}
                <div id="builds" className="space-y-4 mb-12">
                    {builds.length > 0 ? (
                        builds.map((build, index) => (
                            <div
                                key={build.id}
                                className="card p-0 overflow-hidden fade-in"
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                {/* Header / Trigger */}
                                <button
                                    onClick={() => toggleBuild(build.id)}
                                    className="w-full flex items-center justify-between p-6 bg-blue-900/10 hover:bg-blue-900/20 transition-colors text-left"
                                >
                                    <div className="flex items-center gap-4">
                                        <div className={`w-2 h-12 rounded-full ${expandedBuild === build.id ? 'bg-cyan-500' : 'bg-gray-700'} transition-colors`} />
                                        <div>
                                            <h3 className="text-xl font-bold text-gray-100 flex items-center gap-3">
                                                {build.name}
                                                <span className="text-xs px-2 py-1 rounded bg-gray-800 text-cyan-400 border border-gray-700">
                                                    {build.type}
                                                </span>
                                            </h3>
                                            <p className="text-gray-400 text-sm mt-1">{build.description}</p>
                                        </div>
                                    </div>
                                    <span className={`transform transition-transform duration-300 ${expandedBuild === build.id ? 'rotate-180' : ''} text-gray-500`}>
                                        ▼
                                    </span>
                                </button>

                                {/* Expanded Content */}
                                <div
                                    className={`transition-all duration-300 ease-in-out overflow-hidden ${expandedBuild === build.id ? 'max-h-[800px] opacity-100' : 'max-h-0 opacity-0'
                                        }`}
                                >
                                    <div className="p-6 border-t border-gray-700/50 bg-gray-900/30">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                            <div>
                                                <h4 className="text-sm font-bold text-green-400 uppercase mb-3">Pros</h4>
                                                <ul className="space-y-1">
                                                    {build.pros.map(pro => (
                                                        <li key={pro} className="flex items-center text-gray-300 text-sm">
                                                            <span className="text-green-500 mr-2">✓</span> {pro}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                            <div>
                                                <h4 className="text-sm font-bold text-red-400 uppercase mb-3">Cons</h4>
                                                <ul className="space-y-1">
                                                    {build.cons.map(con => (
                                                        <li key={con} className="flex items-center text-gray-300 text-sm">
                                                            <span className="text-red-500 mr-2">✗</span> {con}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>

                                        <div className="bg-black/40 rounded-lg p-4 flex items-center justify-between border border-gray-800">
                                            <code className="text-xs text-gray-500 font-mono truncate max-w-[70%]">
                                                {build.string}
                                            </code>
                                            <button
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    copyToClipboard(build.string);
                                                }}
                                                className="btn btn-sm btn-primary"
                                            >
                                                Copy Import String
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="text-center py-12 text-gray-500">
                            No builds found for this specialization yet.
                        </div>
                    )}
                </div>

                {/* General Info */}
                <div id="info" className="card fade-in">
                    <h2 className="mb-4">Información General de Talentos</h2>
                    <div className="space-y-4 text-gray-300">
                        <p>
                            Los talentos de Death Knight se dividen en tres especializaciones. Asegúrate de elegir la build adecuada para el contenido que vas a realizar (Raid vs M+).
                        </p>

                        <div className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-4 mt-6">
                            <h4 className="text-cyan-400 font-semibold mb-2">💡 Herramientas Útiles</h4>
                            <ul className="text-sm space-y-1">
                                <li>• <a href="https://www.wowhead.com/death-knight-talent-calculator" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300">Wowhead Talent Calculator</a></li>
                                <li>• <a href="https://www.icy-veins.com/wow/death-knight-talent-guides" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300">Icy Veins Talent Guides</a></li>
                                <li>• Usa SimulationCraft para optimizar tus talentos personalmente</li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>

            <RightSidebar
                navigationItems={[
                    { label: 'Introducción', href: '#header' },
                    { label: 'Talent Builds', href: '#builds' },
                    { label: 'Información General', href: '#info' }
                ]}
            />
        </div>

    );
}
