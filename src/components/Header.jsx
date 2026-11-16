// components/Header.jsx
import  { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import Navigation from "./Navigation";
import se from "../assets/infraplan-logo.png";
export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
<header className="sticky top-0 z-[1000] flex h-24 lg:h-28 items-center justify-between px-5 sm:px-8 lg:px-12 border-b border-slate-100 bg-white/95 backdrop-blur-sm shadow-sm">

  <Link
    to="/"
    className="flex items-center shrink-0"
    onClick={() => setMenuOpen(false)}
  >
    <img
      src={se}
      alt="Infraplan Engineering Services Pvt. Ltd."
      className="h-20 w-auto max-w-[240px] object-contain"
    />
  </Link>

  <Navigation
    mobileMenuOpen={menuOpen}
    setMobileMenuOpen={setMenuOpen}
  />

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