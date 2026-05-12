'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LayoutDashboard, Users, Settings } from 'lucide-react';

export default function SidebarMenu() {
    const pathname = usePathname();

    const getActiveLink = (path) => {
        const baseClass = "flex items-center gap-3 px-4 py-3 rounded-lg transition font-medium";
        const activeClass = "bg-white/10 text-white shadow-sm border-l-4 border-green-400";
        const inactiveClass = "text-gray-400 hover:bg-gray-800 hover:text-white";

        return `${baseClass} ${pathname === path ? activeClass : inactiveClass}`;
    };

    const menuItems = [
        { name: 'Dashboard', path: '/', icon: LayoutDashboard },
        { name: 'Users', path: '/dashboard/users', icon: Users },
        { name: 'Settings', path: '/dashboard/settings', icon: Settings },
    ];

    return (
        <div className="w-64 bg-[#1e1f1f] text-white min-h-screen flex flex-col sticky top-0">
            <div className="w-full px-6 py-6">
                <h2 className="text-2xl font-light tracking-tight">HR Management</h2>
            </div>
            
            <div className="border-b border-gray-700/50"></div>
            
            <nav className="space-y-2 mt-6 px-4">
                {menuItems.map((item) => {
                    const Icon = item.icon;
                    
                    return (
                        <Link 
                            key={item.path} 
                            href={item.path} 
                            className={getActiveLink(item.path)}
                        >
                            <Icon className="w-5 h-5" /> 
                            {item.name}
                        </Link>
                    );
                })}
            </nav>

            
            
            <footer className="mt-auto py-6">
                <a href="mailto:amarmsd1212@gmail.com" className="block">
                    <div className="px-4">
                        <div className="rounded-md border border-gray-300 shadow-sm w-full py-4 bg-white text-sm font-medium text-gray-700 cursor-pointer hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 text-center mb-4">
                            <h3>Need Help?</h3>
                        </div>
                    </div>
                </a>

                <div className="border-t border-gray-700/50"></div>
                
                <div className="px-4 py-4 text-sm text-gray-500">
                    &copy; 2026 HR Management. All rights reserved.
                </div>
            </footer>
        </div>
    );
}