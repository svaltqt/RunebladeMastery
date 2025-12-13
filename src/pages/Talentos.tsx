export default function Talentos() {
    const specs = [
        {
            name: 'Blood',
            icon: '🩸',
            color: 'from-red-600 to-rose-700',
            description: 'Tank specialization focused on self-healing and survival',
        },
        {
            name: 'Frost',
            icon: '❄️',
            color: 'from-blue-500 to-cyan-500',
            description: 'Dual-wield DPS with burst damage potential',
        },
        {
            name: 'Unholy',
            icon: '☠️',
            color: 'from-green-600 to-emerald-700',
            description: 'Pet-based DPS with disease and DoT management',
        },
    ];

    return (
        <div className="max-w-6xl">
            <div className="mb-8 fade-in">
                <h1 className="mb-3">Talentos - Death Knight</h1>
                <p className="text-gray-400 text-lg">
                    Builds de talentos recomendados para cada especialización
                </p>
            </div>

            {/* Specs */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
                {specs.map((spec, index) => (
                    <div
                        key={spec.name}
                        className="card fade-in"
                        style={{ animationDelay: `${index * 0.1}s` }}
                    >
                        <div className={`w-16 h-16 bg-gradient-to-br ${spec.color} rounded-xl flex items-center justify-center mb-4 glow`}>
                            <span className="text-3xl">{spec.icon}</span>
                        </div>
                        <h2 className="text-2xl font-bold mb-2 text-cyan-300">{spec.name}</h2>
                        <p className="text-gray-400 mb-4">{spec.description}</p>
                        <button className="btn btn-secondary w-full">
                            Ver Build Completo
                        </button>
                    </div>
                ))}
            </div>

            {/* General Info */}
            <div className="card fade-in">
                <h2 className="mb-4">Información General de Talentos</h2>
                <div className="space-y-4 text-gray-300">
                    <p>
                        Los talentos de Death Knight se dividen en tres especializaciones: Blood (Tank), Frost (DPS) y Unholy (DPS). Cada especialización tiene su propio árbol de talentos con habilidades únicas.
                    </p>

                    <h3 className="text-xl font-semibold text-cyan-300 mt-6 mb-3">Recomendaciones Generales</h3>
                    <ul className="space-y-2 list-disc list-inside">
                        <li>Para PvE (Raids/Dungeons), sigue los builds optimizados por simulaciones</li>
                        <li>Para PvP, prioriza talentos que aumenten tu supervivencia y control</li>
                        <li>Experimenta con diferentes combinaciones en el target dummy</li>
                        <li>Consulta guías de clase actualizadas para el patch actual</li>
                    </ul>

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
    );
}
