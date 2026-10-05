import { NavLink, Navigate, Outlet, useNavigate } from "react-router-dom";
import { FolderKanban, BookOpen, LogOut, ExternalLink } from "lucide-react";
import { auth } from "./lib/adminApi";

const links = [
  { to: "/admin/projects", label: "Projects", icon: FolderKanban },
  { to: "/admin/publications", label: "Publications", icon: BookOpen },
  { to: "/admin/masters", label: "Masters", icon: BookOpen },
];

export default function AdminLayout() {
  const navigate = useNavigate();
  // if (!auth.isLoggedIn()) return <Navigate to="/admin/login" replace />;

  const logout = () => {
    auth.logout();
    navigate("/admin/login");
  };

  return (
    <div className="flex min-h-screen flex-col bg-slate-50 md:flex-row">
      <aside className="border-b border-slate-200 bg-white md:w-60 md:border-b-0 md:border-r">
        <div className="px-5 py-4 text-base font-bold text-slate-900">Content Admin</div>
        <nav className="flex gap-1 px-3 pb-3 md:flex-col md:pb-0">
          {links.map(({ to, label, icon: Icon }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium ${
                  isActive ? "bg-blue-50 text-blue-700" : "text-slate-600 hover:bg-slate-100"
                }`
              }
            >
              <Icon size={16} /> {label}
            </NavLink>
          ))}
          <a href="/" target="_blank" rel="noreferrer" className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-slate-600 hover:bg-slate-100">
            <ExternalLink size={16} /> View site
          </a>
          <button onClick={logout} className="ml-auto flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-slate-600 hover:bg-slate-100 md:ml-0 md:mt-4">
            <LogOut size={16} /> Log out
          </button>
        </nav>
      </aside>
      <main className="flex-1 p-4 sm:p-8">
        <Outlet />
      </main>
    </div>
  );
}
