'use client';
import { useAuth } from '@/hooks/useAuth';
import SidebarMenu from "../../components/SidebarMenu/SidebarMenu";

export default function DashboardLayout({ children }) {
  useAuth(); 
  
  return (
    <section className="flex flex-col min-h-screen">      
      <div className="flex flex-1">
        <aside className="w-64 bg-gray-800 text-white">
          <SidebarMenu />
        </aside>

        
        <main className="flex-1 p-8 w-full bg-gray-50 overflow-auto">
          {children} {}
        </main>
      </div>
    </section>
  );
}