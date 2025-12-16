import React from 'react';

interface NavigationItem {
    label: string;
    href: string;
}

interface RightSidebarProps {
    navigationItems: NavigationItem[];
    title?: string;
    children?: React.ReactNode;
}

export default function RightSidebar({ navigationItems, title = 'On this page', children }: RightSidebarProps) {
    return (
        <aside className="w-48 hidden md:block shrink-0 sticky top-4 self-start">
            <div className="space-y-6 border-l border-gray-700/50 pl-6">
                {/* Navigation Section */}
                <div>
                    <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-3">{title}</h3>
                    <ul className="space-y-2 text-sm">
                        {navigationItems.map((item, index) => (
                            <li key={index}>
                                <a href={item.href} className="text-gray-200 hover:text-gray-300 transition-colors">
                                    {item.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Custom Content Section */}
                {children && (
                    <div className="space-y-6">
                        {children}
                    </div>
                )}
            </div>
        </aside>
    );
}
