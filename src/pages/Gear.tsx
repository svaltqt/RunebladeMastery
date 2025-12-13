export default function Gear() {
    const gearSlots = [
        { slot: 'Head', icon: '🪖', bis: 'Example Helm of Death', source: 'Raid Boss' },
        { slot: 'Neck', icon: '📿', bis: 'Icy Necklace', source: 'Vault' },
        { slot: 'Shoulders', icon: '🛡️', bis: 'Pauldrons of Frost', source: 'M+ Dungeon' },
        { slot: 'Chest', icon: '👕', bis: 'Chestplate of the Scourge', source: 'Raid Boss' },
        { slot: 'Weapons', icon: '⚔️', bis: 'Frostmourne (2H) / Dual Runeblades', source: 'Raid/Vault' },
    ];

    const statPriorities = [
        { spec: 'Blood (Tank)', stats: ['Versatility', 'Mastery', 'Haste', 'Critical Strike'] },
        { spec: 'Frost (DPS)', stats: ['Mastery', 'Critical Strike', 'Versatility', 'Haste'] },
        { spec: 'Unholy (DPS)', stats: ['Mastery', 'Haste', 'Critical Strike', 'Versatility'] },
    ];

    return (
        <div className="max-w-6xl">
            <div className="mb-8 fade-in">
                <h1 className="mb-3">Gear - Equipamiento</h1>
                <p className="text-gray-400 text-lg">
                    Guía de equipamiento, Best in Slot (BiS) y prioridades de stats
                </p>
            </div>

            {/* Stat Priorities */}
            <div className="card mb-8 fade-in">
                <h2 className="mb-6">Prioridades de Stats</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {statPriorities.map((item) => (
                        <div key={item.spec} className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-4">
                            <h3 className="text-cyan-400 font-semibold mb-3">{item.spec}</h3>
                            <ol className="space-y-2">
                                {item.stats.map((stat, i) => (
                                    <li key={stat} className="text-gray-300 text-sm">
                                        <span className="text-cyan-500 font-bold">{i + 1}.</span> {stat}
                                    </li>
                                ))}
                            </ol>
                        </div>
                    ))}
                </div>
                <p className="text-sm text-gray-400 mt-4 italic">
                    ⚠️ Estas son prioridades generales. Siempre simula tu personaje para obtener pesos de stats precisos.
                </p>
            </div>

            {/* Best in Slot */}
            <div className="card mb-8 fade-in">
                <h2 className="mb-6">Best in Slot (BiS) - Ejemplo</h2>
                <div className="space-y-3">
                    {gearSlots.map((item) => (
                        <div
                            key={item.slot}
                            className="flex items-center justify-between p-4 bg-blue-900/10 border border-blue-500/20 rounded-lg hover:border-cyan-500/40 transition-colors"
                        >
                            <div className="flex items-center gap-4">
                                <span className="text-3xl">{item.icon}</span>
                                <div>
                                    <h3 className="text-cyan-300 font-semibold">{item.slot}</h3>
                                    <p className="text-gray-400 text-sm">{item.bis}</p>
                                </div>
                            </div>
                            <span className="text-xs text-gray-500 bg-gray-800/50 px-3 py-1 rounded-full">
                                {item.source}
                            </span>
                        </div>
                    ))}
                </div>
                <p className="text-sm text-gray-400 mt-6 italic">
                    💡 Esta es una lista de ejemplo. El equipamiento BiS cambia cada temporada y patch.
                </p>
            </div>

            {/* Enchants & Gems */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="card fade-in">
                    <h2 className="mb-4">Encantamientos Recomendados</h2>
                    <ul className="space-y-2 text-gray-300">
                        <li className="flex items-start">
                            <span className="text-cyan-400 mr-3">•</span>
                            <span><strong>Arma:</strong> Authority of Stats (+stats principales)</span>
                        </li>
                        <li className="flex items-start">
                            <span className="text-cyan-400 mr-3">•</span>
                            <span><strong>Pecho:</strong> Waking Stats (+stats principales)</span>
                        </li>
                        <li className="flex items-start">
                            <span className="text-cyan-400 mr-3">•</span>
                            <span><strong>Botas:</strong> Watcher's Loam (velocidad de movimiento)</span>
                        </li>
                        <li className="flex items-start">
                            <span className="text-cyan-400 mr-3">•</span>
                            <span><strong>Anillos:</strong> Radiant Mastery/Haste (según spec)</span>
                        </li>
                    </ul>
                </div>

                <div className="card fade-in">
                    <h2 className="mb-4">Gemas (Gems)</h2>
                    <ul className="space-y-2 text-gray-300">
                        <li className="flex items-start">
                            <span className="text-cyan-400 mr-3">•</span>
                            <span><strong>Meta:</strong> Según stat priority de tu spec</span>
                        </li>
                        <li className="flex items-start">
                            <span className="text-cyan-400 mr-3">•</span>
                            <span><strong>Normales:</strong> Priorizar stat principal (Mastery/Haste)</span>
                        </li>
                        <li className="flex items-start">
                            <span className="text-cyan-400 mr-3">•</span>
                            <span><strong>Tip:</strong> Usa gemas de calidad según tu presupuesto</span>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Resources */}
            <div className="card mt-8 fade-in">
                <h2 className="mb-4">Recursos para Equipamiento</h2>
                <ul className="space-y-2 text-gray-300">
                    <li className="flex items-start">
                        <span className="text-cyan-400 mr-3">•</span>
                        <span><a href="https://www.raidbots.com" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300">Raidbots</a> - Simula tu personaje para encontrar mejoras</span>
                    </li>
                    <li className="flex items-start">
                        <span className="text-cyan-400 mr-3">•</span>
                        <span><a href="https://www.wowhead.com/" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300">Wowhead</a> - Base de datos de items y guías BiS</span>
                    </li>
                    <li className="flex items-start">
                        <span className="text-cyan-400 mr-3">•</span>
                        <span><a href="https://www.icy-veins.com/wow/death-knight-gear-guide" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300">Icy Veins</a> - Guías de equipamiento actualizadas</span>
                    </li>
                </ul>
            </div>
        </div>
    );
}
