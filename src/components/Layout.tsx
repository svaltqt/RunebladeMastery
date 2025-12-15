import { Outlet, useParams } from 'react-router-dom';
import Sidebar from './Sidebar';
import TopNavbar from './TopNavbar';
import dkWallpaper from '../assets/death-knight-wallpaper.jpg';

export default function Layout() {
    const { className, spec } = useParams<{ className: string; spec?: string }>();

    // Determine background style
    const getBackgroundStyle = () => {
        if (className === 'death-knight') {
            return {
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.8)), url(${dkWallpaper})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundAttachment: 'fixed'
            };
        }
        return {}; // Default fallbacks to class names
    };

    return (
        <div
            className={`min-h-screen lg:flex ${className === 'death-knight' ? '' : 'bg-[#161e2e]'}`}
            style={getBackgroundStyle()}
        >
            <Sidebar />

            <div className="flex-1 w-full min-w-0">
                {/* Main Content Area with TopNavbar */}
                <div className="flex flex-col items-center p-4 lg:p-8 min-h-screen" style={{ paddingTop: '6vh' }}>
                    {/* Top Navigation Bar */}
                    <div className="w-full max-w-[87%] mb-4">
                        <TopNavbar />
                    </div>

                    {/* Content column */}
                    <main className="w-full max-w-[87%]">
                        <div className={`${spec ? 'card' : ''} min-h-[calc(10vh-3rem)]`}>
                            <Outlet />
                        </div>
                    </main>
                </div>
            </div>
        </div>
    );
}