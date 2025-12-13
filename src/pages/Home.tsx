export default function Home() {
    return (
        <div className="max-w-6xl">
            {/* Welcome Section */}
            <div className="mb-12 fade-in">
                <h1 className="mb-4">Bienvenido a RuneBlade Mastery</h1>
                <p className="text-xl text-gray-400 max-w-3xl">
                    Tu guía completa para dominar la clase <span className="text-cyan-400 font-semibold">Death Knight</span> en World of Warcraft
                </p>
            </div>

            {/* Quick Links */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                <div className="card fade-in hover:scale-105 transition-transform">
                    <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mb-4 glow">
                        <span className="text-3xl">✨</span>
                    </div>
                    <h3 className="text-xl font-bold text-cyan-300 mb-2">WeakAuras</h3>
                    <p className="text-gray-400 text-sm">
                        Paquetes personalizados para rastrear habilidades y cooldowns
                    </p>
                </div>

                <div className="card fade-in hover:scale-105 transition-transform" style={{ animationDelay: '0.1s' }}>
                    <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mb-4 glow">
                        <span className="text-3xl">🔧</span>
                    </div>
                    <h3 className="text-xl font-bold text-cyan-300 mb-2">Addons</h3>
                    <p className="text-gray-400 text-sm">
                        Addons esenciales para mejorar tu experiencia de juego
                    </p>
                </div>

                <div className="card fade-in hover:scale-105 transition-transform" style={{ animationDelay: '0.2s' }}>
                    <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mb-4 glow">
                        <span className="text-3xl">📜</span>
                    </div>
                    <h3 className="text-xl font-bold text-cyan-300 mb-2">Macros</h3>
                    <p className="text-gray-400 text-sm">
                        Macros útiles para optimizar tus rotaciones
                    </p>
                </div>

                <div className="card fade-in hover:scale-105 transition-transform" style={{ animationDelay: '0.3s' }}>
                    <div className="w-14 h-14 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-xl flex items-center justify-center mb-4 glow">
                        <span className="text-3xl">🌟</span>
                    </div>
                    <h3 className="text-xl font-bold text-cyan-300 mb-2">Talentos</h3>
                    <p className="text-gray-400 text-sm">
                        Builds recomendados para cada especialización
                    </p>
                </div>

                <div className="card fade-in hover:scale-105 transition-transform" style={{ animationDelay: '0.4s' }}>
                    <div className="w-14 h-14 bg-gradient-to-br from-red-500 to-pink-600 rounded-xl flex items-center justify-center mb-4 glow">
                        <span className="text-3xl">⚔️</span>
                    </div>
                    <h3 className="text-xl font-bold text-cyan-300 mb-2">Gear</h3>
                    <p className="text-gray-400 text-sm">
                        Equipamiento BiS, stats y prioridades
                    </p>
                </div>

                <div className="card fade-in hover:scale-105 transition-transform" style={{ animationDelay: '0.5s' }}>
                    <div className="w-14 h-14 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center mb-4 glow">
                        <span className="text-3xl">🎨</span>
                    </div>
                    <h3 className="text-xl font-bold text-cyan-300 mb-2">UI</h3>
                    <p className="text-gray-400 text-sm">
                        Configuración y optimización de interfaz
                    </p>
                </div>
            </div>

            {/* About Section */}
            <div className="card fade-in">
                <h2 className="mb-4">Sobre esta Guía</h2>
                <p className="text-gray-300 mb-4">
                    RuneBlade Mastery es una guía completa dedicada a la clase Death Knight en World of Warcraft. Aquí encontrarás todo lo necesario para dominar las tres especializaciones: Blood, Frost y Unholy.
                </p>
                <p className="text-gray-300">
                    Explora las secciones del menú lateral para acceder a información detallada sobre addons, WeakAuras, macros, talentos, equipamiento y configuración de UI.
                </p>
            </div>
        </div>
    );
}
