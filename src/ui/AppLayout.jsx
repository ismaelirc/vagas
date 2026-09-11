import { Outlet } from "react-router";
import Menu from "./Menu";

export default function AppLayout() {
  return (
    <div className="flex min-h-screen">
      {/* Menu lateral */}
      <aside className="w-64 bg-gray-900 text-white p-6">
        <h1 className="text-xl font-bold mb-8">Meu App</h1>
        <Menu />
      </aside>
      <main className="flex-1 p-8 bg-gray-100">
        <Outlet />
      </main>
      ;
    </div>
  );
}
