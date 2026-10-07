import { useState, useEffect } from "react";
import { NavLink, Navigate, Outlet, useNavigate, useLocation } from "react-router-dom";
import {
  FolderKanban,
  BookOpen,
  GraduationCap,
  LogOut,
  ExternalLink,
  LayoutDashboard,
  Menu,
  X,
} from "lucide-react";
import { auth } from "./lib/adminApi";

const links = [
  { to: "/admin/projects", label: "Projects", icon: FolderKanban },
  { to: "/admin/publications", label: "Publications", icon: BookOpen },
  { to: "/admin/masters", label: "Masters", icon: GraduationCap },
];

function NavItems({ onNavigate }) {
  return (
    <>
      {links.map(({ to, label, icon: Icon }) => (
        <NavLink
          key={to}
          to={to}
          onClick={onNavigate}
          className={({ isActive }) =>
            `flex items-center gap-2.5 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${
              isActive
                ? "bg-blue-50 text-blue-700"
                : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
            }`
          }
        >
          <Icon size={18} className="shrink-0" />
          <span>{label}</span>
        </NavLink>
      ))}

      <a
        href="/"
        target="_blank"
        rel="noreferrer"
        onClick={onNavigate}
        className="flex items-center gap-2.5 rounded-lg px-3 py-2.5 text-sm font-medium text-slate-600 transition-colors hover:bg-slate-100 hover:text-slate-900"
      >
        <ExternalLink size={18} className="shrink-0" />
        <span>View site</span>
      </a>
    </>
  );
}

export default function AdminLayout() {
  const navigate = useNavigate();
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  if (!auth.isLoggedIn()) return <Navigate to="/admin/login" replace />;

  const logout = async () => {
    await auth.logout();
    navigate("/admin/login");
  };

  const closeDrawer = () => setMobileOpen(false);

  return (
    <div className="flex min-h-screen flex-col bg-slate-50 md:flex-row">
      {/* Mobile top bar */}
      <header className="sticky top-0 z-30 flex items-center justify-between border-b border-slate-200 bg-white px-4 py-3 md:hidden">
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600 text-white">
            <LayoutDashboard size={18} />
          </div>
          <span className="text-base font-bold text-slate-900">Content Admin</span>
        </div>
        <button
          onClick={() => setMobileOpen(true)}
          aria-label="Open menu"
          className="rounded-lg p-2 text-slate-600 hover:bg-slate-100"
        >
          <Menu size={22} />
        </button>
      </header>

      {/* Mobile drawer backdrop */}
      {mobileOpen && (
        <div
          onClick={closeDrawer}
          className="fixed inset-0 z-40 bg-slate-900/50 backdrop-blur-sm md:hidden"
          aria-hidden="true"
        />
      )}

      {/* Sidebar / Drawer */}
      <aside
        className={`
          fixed inset-y-0 left-0 z-50 flex w-72 max-w-[85vw] flex-col
          border-r border-slate-200 bg-white
          transition-transform duration-300 ease-in-out
          md:static md:z-auto md:w-64 md:max-w-none md:translate-x-0
          ${mobileOpen ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        {/* Brand + close (mobile) */}
        <div className="flex items-center justify-between border-b border-slate-200 px-5 py-4">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600 text-white">
              <LayoutDashboard size={18} />
            </div>
            <span className="text-base font-bold text-slate-900">Content Admin</span>
          </div>
          <button
            onClick={closeDrawer}
            aria-label="Close menu"
            className="rounded-lg p-2 text-slate-600 hover:bg-slate-100 md:hidden"
          >
            <X size={20} />
          </button>
        </div>

        {/* Nav — scrollable */}
        <nav className="flex flex-1 flex-col gap-1 overflow-y-auto p-3">
          <NavItems onNavigate={closeDrawer} />
        </nav>

        {/* Logout footer — always visible */}
        <div className="border-t border-slate-200 p-3">
          <button
            onClick={logout}
            className="flex w-full items-center gap-2.5 rounded-lg border border-red-200 bg-red-50 px-3 py-2.5 text-sm font-semibold text-red-600 transition-colors hover:bg-red-100 hover:text-red-700"
          >
            <LogOut size={18} className="shrink-0" />
            <span>Log out</span>
          </button>
        </div>
      </aside>

      {/* Main content */}
      <main className="flex-1 p-4 sm:p-6 lg:p-8">
        <div className="mx-auto max-w-6xl">
          <Outlet />
        </div>
      </main>
    </div>
  );
}