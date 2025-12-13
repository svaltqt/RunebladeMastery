import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';

export default function Layout() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-dk-black via-dk-dark-blue to-dk-black">
            <Sidebar />
            {/* Container with left padding to avoid sidebar */}
            <div className="lg:pl-64 min-h-screen flex items-center justify-center p-4 lg:p-8 pt-16 lg:pt-20">
                {/* Content column - centered and constrained */}
                <main className="w-full max-w-5xl">
                    <div className="card min-h-[calc(100vh-8rem)]">
                        <Outlet />
                    </div>
                </main>
            </div>
        </div>
    );
}
