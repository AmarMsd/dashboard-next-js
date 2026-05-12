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
        <div className="w-64 bg-[#1e1f1f] text-white h-screen">
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
        </div>
    );
}