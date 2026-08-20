// components/Header.jsx
import  { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import Navigation from "./Navigation";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 flex items-center justify-between px-5 sm:px-8 lg:px-12 py-4 border-b border-slate-100 bg-white/95 backdrop-blur-sm shadow-sm">
      <Link to="/" className="flex items-center gap-3 shrink-0" onClick={() => setMenuOpen(false)}>
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-700 flex items-center justify-center text-white font-bold text-sm shadow-md shadow-blue-600/20">
          IP
        </div>
        <div className="leading-tight">
          <div className="font-bold text-slate-900 text-base tracking-tight">INFRAPLAN</div>
          <div className="text-[10px] text-slate-400 -mt-1 tracking-wider">Engineering the Future</div>
        </div>
      </Link>

      <Navigation mobileMenuOpen={menuOpen} setMobileMenuOpen={setMenuOpen} />

      <div className="hidden lg:flex items-center gap-4">
        <Link
          to="/contact"
          className="bg-gradient-to-r from-blue-700 to-indigo-700 hover:from-blue-800 hover:to-indigo-800 text-white text-sm font-semibold px-6 py-2.5 rounded-xl shadow-md shadow-blue-600/20 hover:shadow-blue-600/40 transition-all duration-300 hover:scale-105"
        >
          Contact Us
        </Link>
      </div>

      <button
        className="lg:hidden text-slate-700 p-2 hover:bg-slate-100 rounded-lg transition-colors"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        {menuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>
    </header>
  );
}