import { Link, useLocation, useParams } from 'react-router-dom';

export default function TopNavbar() {
    const location = useLocation();
    const { className, spec } = useParams<{ className: string; spec?: string }>();

    const menuItems = [
        { name: 'Home', section: 'home' },
        { name: 'WeakAuras', section: 'weakauras' },
        { name: 'Addons', section: 'addons' },
        { name: 'Macros', section: 'macros' },
        { name: 'Talentos', section: 'talentos' },
        { name: 'Gear', section: 'gear' },
        { name: 'UI', section: 'ui' },
    ];

    const isActive = (section: string) => {
        return location.pathname === `/class/${className}/${spec}/${section}`;
    };

    // Don't render TopNavbar if no spec is selected
    if (!spec) {
        return null;
    }

    return (
        <div className="bg-[#161e2e] border border-gray-700/30 rounded-xl px-6 py-2">
            <div className="flex items-center gap-1">
                {menuItems.map((item) => (
                    <Link
                        key={item.section}
                        to={`/class/${className}/${spec}/${item.section}`}
                        className={`
                            px-3 py-1.5 text-sm font-medium rounded-md transition-all duration-200
                            ${isActive(item.section)
                                ? 'text-white bg-gray-700/50'
                                : 'text-gray-300 hover:text-white hover:bg-gray-700/30'
                            }
                        `}
                    >
                        {item.name}
                    </Link>
                ))}
            </div>
        </div>
    );
}
