import SidebarMenu from "../../components/SidebarMenu/SidebarMenu";

export default function DashboardLayout({ children }) {
  return (
    <section className="flex min-h-screen">
      <aside className="w-64 bg-gray-800 text-white">
        <SidebarMenu />
      </aside>

      
      <main className="flex-1 p-8 w-full">
        {children} {}
      </main>
    </section>
  );
}