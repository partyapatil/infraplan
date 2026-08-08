// components/Footer.jsx
import React from "react";
import { Link } from "react-router-dom";
import { MapPin, Mail, Phone } from "lucide-react";

const footerLinks = {
  Company: [
    { label: "About Us", path: "/about" },
    { label: "Careers", path: "/careers" },
    { label: "Newsroom", path: "/newsroom" },
    { label: "Contact Us", path: "/contact" },
  ],
  Services: [
    { label: "Hydraulic Laboratory", path: "/hydrolic" },
    { label: "Engineering & Construction", path: "/contract" },
    { label: "SigmaToolBox", path: "/toolbox" },
  ],
  Resources: [
    { label: "Case Studies", path: "/case-studies" },
    { label: "Whitepapers", path: "/whitepapers" },
    { label: "Blog", path: "/blog" },
    { label: "FAQs", path: "/faqs" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10">
        <div className="lg:col-span-2">
          <Link to="/" className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-700 flex items-center justify-center text-white font-bold text-sm shadow-lg shadow-blue-600/20">
              IP
            </div>
            <div className="leading-tight">
              <div className="font-bold text-white text-base tracking-tight">INFRAPLAN</div>
              <div className="text-[10px] text-slate-400 -mt-1 tracking-wider">Engineering the Future</div>
            </div>
          </Link>
          <p className="text-sm text-slate-400 leading-relaxed max-w-xs">
            Delivering innovative engineering, digital solutions and sustainable infrastructure for a better future.
          </p>
        </div>

        {Object.entries(footerLinks).map(([heading, links]) => (
          <div key={heading}>
            <div className="text-xs font-semibold text-white uppercase tracking-wide mb-4">
              {heading}
            </div>
            <ul className="flex flex-col gap-2.5">
              {links.map((link) => (
                <li key={link.label}>
                  <Link to={link.path} className="text-sm text-slate-400 hover:text-blue-400 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div>
          <div className="text-xs font-semibold text-white uppercase tracking-wide mb-4">
            Get in Touch
          </div>
          <ul className="flex flex-col gap-3.5 text-sm text-slate-400">
            <li className="flex items-start gap-2.5">
              <MapPin size={16} className="text-blue-400 mt-0.5 shrink-0" />
              <span>Infraplan House, MG Road, Bengaluru, Karnataka 560001</span>
            </li>
            <li className="flex items-center gap-2.5">
              <Phone size={16} className="text-blue-400 shrink-0" />
              <span>+91 98765 43210</span>
            </li>
            <li className="flex items-center gap-2.5">
              <Mail size={16} className="text-blue-400 shrink-0" />
              <span>hello@infraplan.com</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-slate-800 px-5 sm:px-8 lg:px-12 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
        <span>© {new Date().getFullYear()} Infraplan Engineering Pvt. Ltd. All rights reserved.</span>
        <div className="flex gap-6">
          <Link to="/privacy" className="hover:text-blue-400 transition-colors">Privacy Policy</Link>
          <Link to="/terms" className="hover:text-blue-400 transition-colors">Terms of Service</Link>
          <Link to="/sitemap" className="hover:text-blue-400 transition-colors">Sitemap</Link>
        </div>
      </div>
    </footer>
  );
}