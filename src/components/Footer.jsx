// components/Footer.jsx
import React from "react";
import { Link } from "react-router-dom";
import {
  MapPin,
  Mail,
  Phone,
  ArrowRight,
  // Linkedin,
  // Instagram,
  // Facebook,
  // Twitter,
  ExternalLink,
} from "lucide-react";

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

const socialLinks = [
  {
    icon: Phone,
    label: "LinkedIn",
    href: "#",
  },
  {
    icon: Phone,
    label: "Instagram",
    href: "#",
  },
  {
    icon: Phone,
    label: "Facebook",
    href: "#",
  },
  {
    icon: Phone,
    label: "Twitter",
    href: "#",
  },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#071a35] text-white">

      {/* =========================================================
          BACKGROUND DECORATION
      ========================================================= */}

      {/* Soft radial glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full bg-blue-600/10 blur-3xl" />

        <div className="absolute top-1/3 -right-40 w-[450px] h-[450px] rounded-full bg-indigo-500/10 blur-3xl" />

        <div className="absolute -bottom-40 left-1/3 w-[400px] h-[400px] rounded-full bg-cyan-500/5 blur-3xl" />
      </div>

      {/* Engineering grid */}
      <div
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)
          `,
          backgroundSize: "45px 45px",
        }}
      />

      {/* Decorative circles */}
      <div className="absolute top-20 right-8 sm:right-16 w-28 h-28 rounded-full border border-blue-400/10 pointer-events-none" />

      <div className="absolute top-24 right-14 sm:right-22 w-20 h-20 rounded-full border border-blue-400/10 pointer-events-none" />

      <div className="absolute bottom-20 left-8 sm:left-16 w-20 h-20 rounded-full border border-cyan-400/10 pointer-events-none" />

      {/* =========================================================
          MAIN FOOTER CONTENT
      ========================================================= */}

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">

        {/* =====================================================
            TOP CTA
        ===================================================== */}

        <div className="pt-12 sm:pt-16">

          <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl border border-white/10 bg-gradient-to-r from-blue-600/15 via-indigo-600/15 to-blue-500/10 backdrop-blur-sm">

            {/* CTA glow */}
            <div className="absolute -top-20 -right-20 w-56 h-56 rounded-full bg-blue-500/10 blur-3xl" />

            <div className="absolute -bottom-20 -left-20 w-56 h-56 rounded-full bg-indigo-500/10 blur-3xl" />

            <div className="relative flex flex-col md:flex-row md:items-center md:justify-between gap-6 px-6 sm:px-8 lg:px-10 py-7 sm:py-8">

              {/* CTA Text */}
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />

                  <span className="text-[10px] sm:text-xs font-semibold tracking-[0.18em] uppercase text-blue-300">
                    Let's Build Together
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-white">
                  Have an infrastructure{" "}
                  <span className="text-blue-400">
                    challenge?
                  </span>
                </h3>

                <p className="text-xs sm:text-sm text-slate-400 mt-1.5 max-w-xl">
                  Let's transform your ideas into reliable, sustainable and
                  future-ready infrastructure solutions.
                </p>
              </div>

              {/* CTA Button */}
              <Link
                to="/contact"
                className="group inline-flex items-center justify-center gap-2 shrink-0 bg-white text-blue-800 hover:bg-blue-50 px-5 sm:px-6 py-3 rounded-xl text-xs sm:text-sm font-semibold shadow-lg shadow-black/10 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300"
              >
                Start a Conversation

                <ArrowRight
                  size={16}
                  className="group-hover:translate-x-1 transition-transform duration-300"
                />
              </Link>

            </div>
          </div>
        </div>

        {/* =====================================================
            FOOTER MAIN GRID
        ===================================================== */}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 py-12 sm:py-14">

          {/* =================================================
              BRAND
          ================================================= */}

          <div className="lg:col-span-4">

            {/* Logo */}
            <Link
              to="/"
              className="inline-flex items-center gap-3 group"
            >
              {/* Logo box */}
              <div className="relative w-11 h-11 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center shadow-lg shadow-blue-900/30 group-hover:scale-105 transition-transform duration-300">

                <span className="text-white text-lg font-black tracking-tight">
                  IP
                </span>

                <span className="absolute -right-1 -top-1 w-2.5 h-2.5 rounded-full bg-cyan-300 border-2 border-[#071a35]" />
              </div>

              <div>
                <div className="text-lg font-extrabold tracking-wide text-white">
                  INFRAPLAN
                </div>

                <div className="text-[8px] tracking-[0.18em] text-blue-300 uppercase">
                  Engineering the Future
                </div>
              </div>
            </Link>

            {/* Description */}
            <p className="text-sm text-slate-400 leading-relaxed mt-5 max-w-sm">
              Delivering innovative engineering, digital solutions and
              sustainable infrastructure for a better future.
            </p>

            {/* Social */}
            <div className="flex items-center gap-2.5 mt-6">

              {socialLinks.map(
                ({ icon: Icon, label, href }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    className="w-9 h-9 rounded-lg border border-white/10 bg-white/[0.04] flex items-center justify-center text-slate-400 hover:text-white hover:bg-blue-600 hover:border-blue-500 hover:-translate-y-0.5 transition-all duration-300"
                  >
                    <Icon size={15} />
                  </a>
                )
              )}

            </div>
          </div>

          {/* =================================================
              COMPANY
          ================================================= */}

          <div className="lg:col-span-2">
            <FooterColumn
              heading="Company"
              links={footerLinks.Company}
            />
          </div>

          {/* =================================================
              SERVICES
          ================================================= */}

          <div className="lg:col-span-2">
            <FooterColumn
              heading="Services"
              links={footerLinks.Services}
            />
          </div>

          {/* =================================================
              RESOURCES
          ================================================= */}

          <div className="lg:col-span-2">
            <FooterColumn
              heading="Resources"
              links={footerLinks.Resources}
            />
          </div>

          {/* =================================================
              CONTACT
          ================================================= */}

          <div className="lg:col-span-2">

            <div className="text-[11px] font-semibold text-white uppercase tracking-[0.16em] mb-5">
              Get in Touch
            </div>

            <div className="space-y-3">

              {/* Address */}
              <ContactItem
                icon={MapPin}
                label="Office"
              >
                Infraplan House,
                <br />
                MG Road, Bengaluru,
                <br />
                Karnataka 560001
              </ContactItem>

              {/* Phone */}
              <ContactItem
                icon={Phone}
                label="Phone"
              >
                +91 98765 43210
              </ContactItem>

              {/* Email */}
              <ContactItem
                icon={Mail}
                label="Email"
              >
                hello@infraplan.com
              </ContactItem>

            </div>
          </div>
        </div>

        {/* =====================================================
            BOTTOM DIVIDER
        ===================================================== */}

        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        {/* =====================================================
            BOTTOM BAR
        ===================================================== */}

        <div className="py-5 flex flex-col sm:flex-row items-center justify-between gap-4">

          <p className="text-[11px] sm:text-xs text-slate-500 text-center sm:text-left">
            © {new Date().getFullYear()} Infraplan Engineering Pvt. Ltd.
            All rights reserved.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">

            <Link
              to="/privacy"
              className="text-[11px] sm:text-xs text-slate-500 hover:text-blue-400 transition-colors"
            >
              Privacy Policy
            </Link>

            <Link
              to="/terms"
              className="text-[11px] sm:text-xs text-slate-500 hover:text-blue-400 transition-colors"
            >
              Terms of Service
            </Link>

            <Link
              to="/sitemap"
              className="text-[11px] sm:text-xs text-slate-500 hover:text-blue-400 transition-colors"
            >
              Sitemap
            </Link>

          </div>
        </div>

      </div>

      {/* =========================================================
          SMALL BOTTOM ACCENT
      ========================================================= */}

      <div className="relative h-1 bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500" />

      {/* =========================================================
          ANIMATION
      ========================================================= */}

      <style>{`
        @keyframes footerPulse {
          0%, 100% {
            opacity: 0.4;
            transform: scale(1);
          }

          50% {
            opacity: 0.8;
            transform: scale(1.15);
          }
        }

        .footer-pulse {
          animation: footerPulse 4s ease-in-out infinite;
        }
      `}</style>
    </footer>
  );
}


/* =============================================================
   FOOTER COLUMN
============================================================= */

function FooterColumn({ heading, links }) {
  return (
    <div>
      <div className="text-[11px] font-semibold text-white uppercase tracking-[0.16em] mb-5">
        {heading}
      </div>

      <ul className="space-y-3">

        {links.map((link) => (
          <li key={link.label}>

            <Link
              to={link.path}
              className="group inline-flex items-center gap-1.5 text-xs sm:text-sm text-slate-400 hover:text-white transition-colors duration-200"
            >

              <span className="w-0 group-hover:w-2 h-px bg-blue-400 transition-all duration-200" />

              <span>
                {link.label}
              </span>

            </Link>

          </li>
        ))}

      </ul>
    </div>
  );
}


/* =============================================================
   CONTACT ITEM
============================================================= */

function ContactItem({ icon: Icon, label, children }) {
  return (
    <div className="group flex items-start gap-2.5 p-2.5 rounded-xl border border-white/[0.06] bg-white/[0.025] hover:bg-white/[0.06] hover:border-blue-500/20 transition-all duration-300">

      <div className="w-8 h-8 rounded-lg bg-blue-500/10 border border-blue-400/10 flex items-center justify-center shrink-0 group-hover:bg-blue-500/20 transition-colors">

        <Icon
          size={14}
          className="text-blue-400"
        />

      </div>

      <div className="min-w-0">

        <p className="text-[9px] uppercase tracking-wider font-semibold text-slate-500 mb-0.5">
          {label}
        </p>

        <p className="text-[11px] leading-relaxed text-slate-300 break-words">
          {children}
        </p>

      </div>

    </div>
  );
}