'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';


export default function SidebarMenu() {
    const pathname = usePathname();

    const getActiveLink = (path) => {
        return pathname === path ? 'active:bg-gray-700' : 'hover:bg-gray-700';
    };

    return (
        <div className="w-64 bg-[linear-gradient(135deg,#0f172a_0%,#1d4ed8_55%,#22c55e_140%)] text-white h-screen">
            <div className="w-full px-4 py-6">
                <h2 className="text-2xl font-bold">HR Management</h2>
            </div>
            <div className="h-2 border-b border-gray-600"></div>
            <nav className="space-y-4 mt-6">
                <Link href="/" className={`block px-4 py-2 rounded transition ${getActiveLink('/')}`}>
                    Dashboard
                </Link>
                <Link href="/dashboard/users" className={`block px-4 py-2 rounded transition ${getActiveLink('/dashboard/users')}`}>
                    Users
                </Link>
                <Link href="/dashboard/settings" className={`block px-4 py-2 rounded transition ${getActiveLink('/dashboard/settings')}`}>
                    Settings
                </Link>
            </nav>
        </div>
    )
}