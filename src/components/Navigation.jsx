// components/Navigation.jsx

import React, { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronDown, FlaskConical, Sigma, Waves } from "lucide-react";

const navItems = [
  {
    label: "Home",
    path: "/",
  },
  {
    label: "About",
    path: "/about",
  },
  {
    label: "Engineering Contractors",
    path: "/contract",
  },
  {
    label: "Hydraulic Laboratory",
    path: "/hydrolic",
    dropdown: true,
    subItems: [
      {
        label: "Physical Models",
        path: "/hydrolic#physical-models",
        icon: FlaskConical,
      },
      {
        label: "Mathematical Models",
        path: "/hydrolic#mathematical-models",
        icon: Sigma,
      },
      {
        label: "Publications",
        path: "/hydrolicLabpublications",
        icon: Waves,
      },
    ],
  },
  {
    label: "Sigma ToolBox",
    path: "/toolbox",
  },
];

export default function Navigation({ mobileMenuOpen, setMobileMenuOpen }) {
  const location = useLocation();
  const [openDropdown, setOpenDropdown] = useState(null);
  const closeTimer = useRef(null);

  const isActive = (path) => {
    if (path === "/") {
      return location.pathname === "/";
    }
    return location.pathname.startsWith(path);
  };

  const isSubItemActive = (path) => {
    return location.pathname + location.hash === path;
  };

  const toggleDropdown = (label) => {
    setOpenDropdown((current) => (current === label ? null : label));
  };

  const handleMouseEnter = (label) => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
    }
    setOpenDropdown(label);
  };

  const handleMouseLeave = () => {
    closeTimer.current = setTimeout(() => {
      setOpenDropdown(null);
    }, 180);
  };

  useEffect(() => {
    return () => {
      if (closeTimer.current) {
        clearTimeout(closeTimer.current);
      }
    };
  }, []);

  useEffect(() => {
    setOpenDropdown(null);
  }, [location.pathname, location.hash]);

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="hidden lg:flex items-center gap-7 text-sm">
        {navItems.map((item) => {
          const active = isActive(item.path);

          if (item.dropdown) {
            return (
              <div
                key={item.label}
                className="relative flex items-center"
                onMouseEnter={() => handleMouseEnter(item.label)}
                onMouseLeave={handleMouseLeave}
              >
                <Link
                  to={item.path}
                  onClick={() => setOpenDropdown(null)}
                  className={`relative flex items-center py-2 pr-0.5 whitespace-nowrap transition-colors duration-200 ${
                    active
                      ? "text-blue-700 font-semibold"
                      : "text-slate-600 font-medium hover:text-blue-700"
                  }`}
                >
                  {item.label}
                  <span
                    className={`absolute -bottom-0.5 left-0 right-0 h-0.5 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 origin-left transition-transform duration-200 ${
                      active ? "scale-x-100" : "scale-x-0"
                    }`}
                  />
                </Link>

                <button
                  type="button"
                  onClick={(event) => {
                    event.preventDefault();
                    event.stopPropagation();
                    toggleDropdown(item.label);
                  }}
                  className={`ml-0.5 p-1 rounded-md transition-all duration-200 ${
                    openDropdown === item.label
                      ? "text-blue-700 bg-blue-50"
                      : "text-slate-500 hover:text-blue-700 hover:bg-blue-50"
                  }`}
                  aria-label={`Toggle ${item.label} submenu`}
                  aria-expanded={openDropdown === item.label}
                >
                  <ChevronDown
                    size={14}
                    className={`transition-transform duration-200 ${
                      openDropdown === item.label ? "rotate-180" : "rotate-0"
                    }`}
                  />
                </button>

                {/* Dropdown Menu */}
                <div
                  className={`absolute top-full left-1/2 -translate-x-1/2 pt-3 w-72 transition-all duration-200 origin-top z-50 ${
                    openDropdown === item.label
                      ? "opacity-100 scale-100 visible translate-y-0"
                      : "opacity-0 scale-95 invisible -translate-y-1 pointer-events-none"
                  }`}
                >
                  <div className="bg-white rounded-2xl border border-slate-200/80 shadow-xl shadow-slate-900/10 overflow-hidden p-2">
                    <div className="px-3 pt-2 pb-2">
                      <div className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider">
                        Explore
                      </div>
                    </div>

                    <div className="space-y-1">
                      {item.subItems.map((subItem) => {
                        const Icon = subItem.icon;
                        const activeSub = isSubItemActive(subItem.path);

                        return (
                          <Link
                            key={subItem.label}
                            to={subItem.path}
                            onClick={() => setOpenDropdown(null)}
                            className={`group flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm transition-all duration-200 ${
                              activeSub
                                ? "text-blue-700 font-semibold bg-blue-50"
                                : "text-slate-600 hover:bg-slate-50 hover:text-blue-700"
                            }`}
                          >
                            <span
                              className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 transition-all duration-200 ${
                                activeSub
                                  ? "bg-blue-600 text-white"
                                  : "bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white"
                              }`}
                            >
                              <Icon size={15} />
                            </span>
                            <span className="flex-1">{subItem.label}</span>
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            );
          }

          return (
            <Link
              key={item.label}
              to={item.path}
              className={`relative flex items-center py-2 whitespace-nowrap transition-colors duration-200 ${
                active
                  ? "text-blue-700 font-semibold"
                  : "text-slate-600 font-medium hover:text-blue-700"
              }`}
            >
              {item.label}
              <span
                className={`absolute -bottom-0.5 left-0 right-0 h-0.5 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 origin-left transition-transform duration-200 ${
                  active ? "scale-x-100" : "scale-x-0"
                }`}
              />
            </Link>
          );
        })}
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[73px] z-40 bg-white/98 backdrop-blur-lg border-b border-slate-100 px-5 py-6 shadow-lg animate-slide-down max-h-[80vh] overflow-y-auto">
          <div className="flex flex-col gap-1.5 text-sm text-slate-600">
            {navItems.map((item) => {
              const active = isActive(item.path);

              if (item.dropdown) {
                return (
                  <div key={item.label}>
                    <div
                      className={`flex items-center w-full rounded-xl transition-colors ${
                        active ? "bg-blue-50 text-blue-700" : "hover:bg-slate-50"
                      }`}
                    >
                      <Link
                        to={item.path}
                        onClick={() => {
                          setMobileMenuOpen(false);
                          setOpenDropdown(null);
                        }}
                        className={`flex-1 py-3 px-3.5 font-medium ${
                          active ? "font-semibold" : ""
                        }`}
                      >
                        {item.label}
                      </Link>

                      <button
                        type="button"
                        onClick={(event) => {
                          event.preventDefault();
                          event.stopPropagation();
                          toggleDropdown(item.label);
                        }}
                        className="p-3 mr-1 rounded-lg hover:bg-blue-100 transition-colors"
                        aria-label={`Toggle ${item.label} submenu`}
                        aria-expanded={openDropdown === item.label}
                      >
                        <ChevronDown
                          size={16}
                          className={`transition-transform duration-200 ${
                            openDropdown === item.label ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                    </div>

                    {openDropdown === item.label && (
                      <div className="ml-3.5 mt-1 mb-2 pl-3.5 border-l-2 border-blue-100 space-y-1">
                        {item.subItems.map((subItem) => {
                          const Icon = subItem.icon;
                          const activeSub = isSubItemActive(subItem.path);

                          return (
                            <Link
                              key={subItem.label}
                              to={subItem.path}
                              onClick={() => {
                                setOpenDropdown(null);
                                setMobileMenuOpen(false);
                              }}
                              className={`flex items-center gap-2.5 py-2.5 px-3 rounded-lg transition-colors text-sm ${
                                activeSub
                                  ? "text-blue-700 font-semibold bg-blue-50"
                                  : "text-slate-600 hover:bg-blue-50/60 hover:text-blue-700"
                              }`}
                            >
                              <Icon
                                size={14}
                                className={activeSub ? "text-blue-600" : "text-blue-500"}
                              />
                              <span>{subItem.label}</span>
                            </Link>
                          );
                        })}
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={item.label}
                  to={item.path}
                  onClick={() => {
                    setMobileMenuOpen(false);
                    setOpenDropdown(null);
                  }}
                  className={`flex items-center justify-between py-3 px-3.5 rounded-xl transition-colors ${
                    active
                      ? "text-blue-700 font-semibold bg-blue-50"
                      : "font-medium hover:bg-slate-50"
                  }`}
                >
                  <span>{item.label}</span>
                </Link>
              );
            })}

            {/* Mobile Contact Button */}
            <div className="mt-3 pt-4 border-t border-slate-100">
              <Link
                to="/contact"
                onClick={() => {
                  setMobileMenuOpen(false);
                  setOpenDropdown(null);
                }}
                className="block bg-gradient-to-r from-blue-700 to-indigo-700 text-white text-sm font-semibold px-5 py-3.5 rounded-xl shadow-md shadow-blue-600/20 text-center hover:from-blue-800 hover:to-indigo-800 transition-all duration-200"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* Mobile Menu Animation */}
      <style>{`
        @keyframes slide-down {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-slide-down {
          animation: slide-down 0.25s ease-out;
        }
      `}</style>
    </>
  );
}