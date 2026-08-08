// components/Navigation.jsx
import React, { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronDown, ChevronRight, FlaskConical, Sigma, Waves } from "lucide-react";

const navItems = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Engineering Contractors", path: "/contract" },
  {
    label: "Hydraulic Laboratory",
    path: "/hydrolic",
    dropdown: true,
    subItems: [
      { label: "Physical Models", path: "/hydrolic#physical-models", icon: FlaskConical },
      { label: "Mathematical Models", path: "/hydrolic#mathematical-models", icon: Sigma },
      { label: "CFD Studies", path: "/hydrolic#cfd-studies", icon: Waves },
    ],
  },
  { label: "Sigma ToolBox", path: "/toolbox" },
  { label: "Contact", path: "/contact" },
];

export default function Navigation({ mobileMenuOpen, setMobileMenuOpen }) {
  const location = useLocation();
  const [openDropdown, setOpenDropdown] = useState(null);
  const closeTimer = useRef(null);

  const isActive = (path) => {
    if (path === "/" && location.pathname === "/") return true;
    if (path !== "/" && location.pathname.startsWith(path)) return true;
    return false;
  };

  const isSubItemActive = (path) => {
    return location.pathname + location.hash === path;
  };

  const toggleDropdown = (label) => {
    setOpenDropdown(openDropdown === label ? null : label);
  };

  const handleMouseEnter = (label) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpenDropdown(label);
  };

  const handleMouseLeave = () => {
    closeTimer.current = setTimeout(() => setOpenDropdown(null), 150);
  };

  useEffect(() => {
    return () => {
      if (closeTimer.current) clearTimeout(closeTimer.current);
    };
  }, []);

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="hidden lg:flex items-center gap-7 text-sm text-slate-600">
        {navItems.map((item) => (
          <div
            key={item.label}
            className="relative"
            onMouseEnter={item.dropdown ? () => handleMouseEnter(item.label) : undefined}
            onMouseLeave={item.dropdown ? handleMouseLeave : undefined}
          >
            {item.dropdown ? (
              <>
                <button
                  onClick={() => toggleDropdown(item.label)}
                  className={`relative flex items-center gap-1.5 py-2 hover:text-blue-700 transition-colors duration-200 whitespace-nowrap ${
                    isActive(item.path) || openDropdown === item.label
                      ? "text-blue-700 font-semibold"
                      : "font-medium"
                  }`}
                  aria-expanded={openDropdown === item.label}
                >
                  {item.label}
                  <ChevronDown
                    size={14}
                    className={`transition-transform duration-200 ${
                      openDropdown === item.label ? "rotate-180" : ""
                    }`}
                  />
                  <span
                    className={`absolute -bottom-0.5 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full transition-transform duration-200 origin-left ${
                      isActive(item.path) || openDropdown === item.label
                        ? "scale-x-100"
                        : "scale-x-0"
                    }`}
                  />
                </button>

                {/* Dropdown Menu */}
                <div
                  className={`absolute top-full left-1/2 -translate-x-1/2 pt-3 w-64 transition-all duration-200 origin-top ${
                    openDropdown === item.label
                      ? "opacity-100 scale-100 visible translate-y-0"
                      : "opacity-0 scale-95 invisible -translate-y-1"
                  }`}
                >
                  <div className="bg-white rounded-2xl border border-slate-200/80 shadow-xl shadow-slate-900/10 overflow-hidden p-2">
                    <div className="px-3 pt-2 pb-1.5 text-[10px] font-semibold text-slate-400 uppercase tracking-wider">
                      Explore
                    </div>
                    {item.subItems.map((subItem) => {
                      const Icon = subItem.icon;
                      const active = isSubItemActive(subItem.path);
                      return (
                        <Link
                          key={subItem.label}
                          to={subItem.path}
                          onClick={() => setOpenDropdown(null)}
                          className={`group flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm transition-colors ${
                            active
                              ? "text-blue-700 font-semibold bg-blue-50"
                              : "text-slate-600 hover:bg-slate-50 hover:text-blue-700"
                          }`}
                        >
                          <span
                            className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 transition-colors ${
                              active
                                ? "bg-blue-600 text-white"
                                : "bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white"
                            }`}
                          >
                            <Icon size={15} />
                          </span>
                          {subItem.label}
                        </Link>
                      );
                    })}
                  </div>
                </div>
              </>
            ) : (
              <Link
                to={item.path}
                className={`relative flex items-center gap-1 py-2 hover:text-blue-700 transition-colors duration-200 whitespace-nowrap ${
                  isActive(item.path) ? "text-blue-700 font-semibold" : "font-medium"
                }`}
              >
                {item.label}
                <span
                  className={`absolute -bottom-0.5 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full transition-transform duration-200 origin-left ${
                    isActive(item.path) ? "scale-x-100" : "scale-x-0"
                  }`}
                />
              </Link>
            )}
          </div>
        ))}
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[73px] z-40 bg-white/98 backdrop-blur-lg border-b border-slate-100 px-5 py-6 flex flex-col gap-1.5 text-sm text-slate-600 shadow-lg animate-slide-down max-h-[80vh] overflow-y-auto">
          {navItems.map((item) => (
            <div key={item.label}>
              {item.dropdown ? (
                <>
                  <button
                    onClick={() => toggleDropdown(item.label)}
                    className={`w-full flex items-center justify-between py-3 px-3.5 rounded-xl hover:bg-slate-50 transition-colors ${
                      isActive(item.path) ? "text-blue-700 font-semibold bg-blue-50" : "font-medium"
                    }`}
                  >
                    <span>{item.label}</span>
                    <ChevronDown
                      size={16}
                      className={`transition-transform duration-200 ${
                        openDropdown === item.label ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {/* Mobile Sub-items */}
                  {openDropdown === item.label && (
                    <div className="ml-3.5 mt-1 mb-1 pl-3.5 border-l-2 border-blue-100 space-y-1">
                      {item.subItems.map((subItem) => {
                        const Icon = subItem.icon;
                        const active = isSubItemActive(subItem.path);
                        return (
                          <Link
                            key={subItem.label}
                            to={subItem.path}
                            onClick={() => {
                              setOpenDropdown(null);
                              setMobileMenuOpen(false);
                            }}
                            className={`flex items-center gap-2.5 py-2.5 px-3 rounded-lg transition-colors text-sm ${
                              active
                                ? "text-blue-700 font-semibold bg-blue-50"
                                : "text-slate-600 hover:bg-blue-50/60"
                            }`}
                          >
                            <Icon size={14} className="text-blue-500 shrink-0" />
                            {subItem.label}
                          </Link>
                        );
                      })}
                    </div>
                  )}
                </>
              ) : (
                <Link
                  to={item.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center justify-between py-3 px-3.5 rounded-xl hover:bg-slate-50 transition-colors ${
                    isActive(item.path) ? "text-blue-700 font-semibold bg-blue-50" : "font-medium"
                  }`}
                >
                  <span>{item.label}</span>
                </Link>
              )}
            </div>
          ))}
          <div className="mt-3 pt-4 border-t border-slate-100">
            <Link
              to="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="block bg-gradient-to-r from-blue-700 to-indigo-700 text-white text-sm font-semibold px-5 py-3.5 rounded-xl shadow-md shadow-blue-600/20 text-center"
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </>
  );
}