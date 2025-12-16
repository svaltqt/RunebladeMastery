import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { weakauras } from '../data/weakauras';
import RightSidebar from '../components/RightSidebar';

export default function WeakAuras() {
    const { className, spec } = useParams<{ className: string; spec: string }>();
    const [copiedId, setCopiedId] = useState<string | null>(null);

    // Normalize inputs for comparison
    const currentClass = className?.toLowerCase() || 'death-knight';
    const currentSpec = spec?.toLowerCase() || 'blood';

    // Filter WeakAuras
    const filteredWeakAuras = weakauras.filter(wa => {
        // 1. Check Class: Must match current class or be 'All Classes'
        const waClass = wa.class.toLowerCase();
        if (waClass !== 'all classes' && waClass !== currentClass) {
            return false;
        }

        // 2. Check Spec: Must match current spec (case-insensitive) or be 'All Specs'
        const waSpec = wa.spec.toLowerCase();
        if (waSpec === 'all specs') return true;

        return waSpec === currentSpec;
    });

    const copyToClipboard = (text: string, id: string) => {
        navigator.clipboard.writeText(text);
        setCopiedId(id);
        setTimeout(() => setCopiedId(null), 2000);
    };

    const getSpecColor = (specName: string) => {
        const normalizedSpec = specName.toLowerCase();
        if (normalizedSpec.includes('blood')) return 'bg-red-900/30 border-red-500/50 text-red-400';
        if (normalizedSpec.includes('frost')) return 'bg-blue-900/30 border-blue-500/50 text-blue-400';
        if (normalizedSpec.includes('unholy')) return 'bg-green-900/30 border-green-500/50 text-green-400';
        if (normalizedSpec.includes('all')) return 'bg-purple-900/30 border-purple-500/50 text-purple-400';
        return 'bg-gray-900/30 border-gray-500/50 text-gray-400';
    };

    return (
        <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto flex gap-8">
                {/* Main Content */}
                <div className="flex-1 min-w-0">
                    {/* Header */}
                    <div id="header" className="text-center mb-16 fade-in">
                        <h1 className="mb-4">WeakAuras</h1>
                        <p className="text-xl text-gray-300 max-w-3xl mx-auto capitalize">
                            {spec} {className?.replace('-', ' ')} Collection
                        </p>
                    </div>


                    {/* WeakAuras List */}
                    <div id="weakauras-list" className="space-y-6">
                        {filteredWeakAuras.length > 0 ? (
                            filteredWeakAuras.map((wa, index) => (
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
                            ))
                        ) : (
                            <div className="text-center py-12 text-gray-400">
                                No WeakAuras found for <strong>{spec}</strong>. Check back soon!
                            </div>
                        )}
                    </div>

                    {/* Additional Resources */}
                    <div id="resources" className="card mt-12 fade-in">
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

                <RightSidebar
                    navigationItems={[
                        { label: 'Introduction', href: '#header' },
                        { label: 'WeakAuras List', href: '#weakauras-list' },
                        { label: 'Resources', href: '#resources' }
                    ]}
                >
                    <div className="bg-purple-900/10 border border-purple-500/20 rounded-lg p-4">
                        <h3 className="text-sm font-bold text-purple-400 uppercase tracking-wider mb-2">Note</h3>
                        <p className="text-sm text-gray-400">
                            Make sure to update your WeakAuras addon regularly to avoid errors with newer import strings.
                        </p>
                    </div>
                </RightSidebar>
            </div>
        </div>
    );
}
