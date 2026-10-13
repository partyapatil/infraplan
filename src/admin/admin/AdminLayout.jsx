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
    <div className="flex min-h-screen flex-col bg-slate-50 md:h-screen md:flex-row md:overflow-hidden">
      {/* Mobile top bar */}
      <header className="sticky top-0 z-30 flex shrink-0 items-center justify-between border-b border-slate-200 bg-white px-3 py-2.5 sm:px-4 sm:py-3 md:hidden">
        <div className="flex min-w-0 items-center gap-2">
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-blue-600 text-white">
            <LayoutDashboard size={18} />
          </div>
          <span className="truncate text-sm font-bold text-slate-900 sm:text-base">
            Content Admin
          </span>
        </div>
        <button
          onClick={() => setMobileOpen(true)}
          aria-label="Open menu"
          className="shrink-0 rounded-lg p-2 text-slate-600 hover:bg-slate-100 active:bg-slate-200"
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
          border-r border-slate-200 bg-white shadow-xl
          transition-transform duration-300 ease-in-out
          md:static md:z-auto md:h-screen md:w-64 md:max-w-none md:translate-x-0 md:shadow-none
          ${mobileOpen ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        {/* Brand + close (mobile) */}
        <div className="flex items-center justify-between border-b border-slate-200 px-4 py-3 sm:px-5 sm:py-4">
          <div className="flex min-w-0 items-center gap-2">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-blue-600 text-white">
              <LayoutDashboard size={18} />
            </div>
            <span className="truncate text-sm font-bold text-slate-900 sm:text-base">
              Content Admin
            </span>
          </div>
          <button
            onClick={closeDrawer}
            aria-label="Close menu"
            className="shrink-0 rounded-lg p-2 text-slate-600 hover:bg-slate-100 active:bg-slate-200 md:hidden"
          >
            <X size={20} />
          </button>
        </div>

        {/* Nav — scrollable */}
        <nav className="flex flex-1 flex-col gap-1 overflow-y-auto p-3">
          <NavItems onNavigate={closeDrawer} />
        </nav>

        {/* Logout footer */}
        <div className="border-t border-slate-200 p-3">
          <button
            onClick={logout}
            className="flex w-full items-center gap-2.5 rounded-lg border border-red-200 bg-red-50 px-3 py-2.5 text-sm font-semibold text-red-600 transition-colors hover:bg-red-100 hover:text-red-700 active:bg-red-200"
          >
            <LogOut size={18} className="shrink-0" />
            <span>Log out</span>
          </button>
        </div>
      </aside>

      {/* Main content */}
   {/* Main content */}
<main className="flex min-h-0 min-w-0 flex-1 flex-col overflow-hidden p-3 sm:p-4 md:p-6 lg:p-8">
  <div className="mx-auto flex h-full min-h-0 w-full max-w-6xl flex-col">
    <Outlet />
  </div>
</main>
    </div>
  );
}