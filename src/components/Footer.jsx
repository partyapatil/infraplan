// components/Footer.jsx
import React from "react";
import { Link } from "react-router-dom";
import {
  MapPin,
  Mail,
  Phone,
  ArrowRight,
  Building2,
} from "lucide-react";

import {
  FaLinkedinIn,
  FaInstagram,
  FaFacebookF,
  FaTwitter,
} from "react-icons/fa";

/* =============================================================
   FOOTER LINKS
============================================================= */

const footerLinks = {
  Company: [
    { label: "About Us", path: "/about" },
    { label: "Careers", path: "/careers" },
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
    // { label: "Blog", path: "/blog" },
    // { label: "FAQs", path: "/faqs" },
  ],
};

/* =============================================================
   SOCIAL LINKS
============================================================= */

const socialLinks = [
  {
    icon: FaLinkedinIn,
    label: "LinkedIn",
    href: "#",
  },
  {
    icon: FaInstagram,
    label: "Instagram",
    href: "#",
  },
  {
    icon: FaFacebookF,
    label: "Facebook",
    href: "#",
  },
  {
    icon: FaTwitter,
    label: "Twitter",
    href: "#",
  },
];

/* =============================================================
   COMPANY ENTITIES
============================================================= */

const companyEntities = [
  "Infraplan Hydraulic Laboratory, Pune",
  "Infraplan Engineering Services Pvt. Ltd.",
  "Sigma Infraplan Engineering Pvt. Ltd.",
];

/* =============================================================
   OFFICE LOCATIONS
============================================================= */

const offices = [
  {
    title: "Kolhapur Office",
    address: (
      <>
        109, Rajaji Complex, 1st Lane,
        <br />
        Shahupuri, Kolhapur – 416001,
        <br />
        Maharashtra, India.
      </>
    ),
  },

  {
    title: "Pune Office",
    address: (
      <>
        Office No. 215, 2nd Floor,
        <br />
        Kohinoor Majestic, Behind Kundan Hyundai,
        <br />
        Thermax Chowk, M.I.D.C. Chinchwad,
        <br />
        Pune – 411019.
      </>
    ),
  },

  {
    title: "Hydraulic Laboratory",
    address: (
      <>
        Chandkhed Village,
        <br />
        Tal–Maval, Dist. Pune,
        <br />
        Maharashtra, India.
      </>
    ),
  },
];

/* =============================================================
   FOOTER
============================================================= */

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#071a35] text-white">

      {/* =========================================================
          BACKGROUND DECORATION
      ========================================================= */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">

        {/* Blue glow */}
        <div className="absolute -left-40 -top-40 h-[500px] w-[500px] rounded-full bg-blue-600/10 blur-3xl" />

        {/* Indigo glow */}
        <div className="absolute -right-40 top-1/3 h-[450px] w-[450px] rounded-full bg-indigo-500/10 blur-3xl" />

        {/* Cyan glow */}
        <div className="absolute -bottom-40 left-1/3 h-[400px] w-[400px] rounded-full bg-cyan-500/5 blur-3xl" />

      </div>

      {/* =========================================================
          ENGINEERING GRID
      ========================================================= */}

      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)
          `,
          backgroundSize: "45px 45px",
        }}
      />

      {/* =========================================================
          DECORATIVE CIRCLES
      ========================================================= */}

      <div className="pointer-events-none absolute right-8 top-20 h-28 w-28 rounded-full border border-blue-400/10 sm:right-16" />

      <div className="pointer-events-none absolute right-14 top-24 h-20 w-20 rounded-full border border-blue-400/10 sm:right-22" />

      <div className="pointer-events-none absolute bottom-20 left-8 h-20 w-20 rounded-full border border-cyan-400/10 sm:left-16" />

      {/* =========================================================
          MAIN CONTENT
      ========================================================= */}

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">

        {/* =====================================================
            TOP CTA
        ===================================================== */}

        <div className="pt-12 sm:pt-16">

          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-r from-blue-600/15 via-indigo-600/15 to-blue-500/10 backdrop-blur-sm sm:rounded-3xl">

            {/* CTA glow */}
            <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-blue-500/10 blur-3xl" />

            <div className="pointer-events-none absolute -bottom-20 -left-20 h-56 w-56 rounded-full bg-indigo-500/10 blur-3xl" />

            <div className="relative flex flex-col gap-6 px-6 py-7 sm:px-8 sm:py-8 md:flex-row md:items-center md:justify-between lg:px-10">

              {/* CTA TEXT */}

              <div>

                <div className="mb-2 flex items-center gap-2">

                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-blue-400" />

                  <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-blue-300 sm:text-xs">
                    Let's Build Together
                  </span>

                </div>

                <h3 className="text-xl font-bold text-white sm:text-2xl">
                  Have an infrastructure{" "}
                  <span className="text-blue-400">
                    challenge?
                  </span>
                </h3>

                <p className="mt-1.5 max-w-xl text-xs text-slate-400 sm:text-sm">
                  Let's transform your ideas into reliable, sustainable and
                  future-ready infrastructure solutions.
                </p>

              </div>

              {/* CTA BUTTON */}

              <Link
                to="/contact"
                className="group inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 text-xs font-semibold text-blue-800 shadow-lg shadow-black/10 transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-50 hover:shadow-xl sm:px-6 sm:text-sm"
              >
                Start a Conversation

                <ArrowRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>

            </div>

          </div>

        </div>

        {/* =====================================================
            MAIN FOOTER GRID
        ===================================================== */}

        <div className="grid grid-cols-1 gap-10 py-12 sm:grid-cols-2 sm:gap-10 sm:py-14 lg:grid-cols-12 lg:gap-12">

          {/* =================================================
              BRAND
          ================================================== */}

          <div className="lg:col-span-4">

            {/* LOGO */}

            <Link
              to="/"
              className="group inline-flex items-center gap-3"
            >

              <div className="relative flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 shadow-lg shadow-blue-900/30 transition-transform duration-300 group-hover:scale-105">

                <span className="text-lg font-black tracking-tight text-white">
                  IP
                </span>

                <span className="absolute -right-1 -top-1 h-2.5 w-2.5 rounded-full border-2 border-[#071a35] bg-cyan-300" />

              </div>

              <div>

                <div className="text-lg font-extrabold tracking-wide text-white">
                  INFRAPLAN
                </div>

                <div className="text-[8px] uppercase tracking-[0.18em] text-blue-300">
                  Engineering the Future
                </div>

              </div>

            </Link>

            {/* DESCRIPTION */}

            <p className="mt-5 max-w-sm text-sm leading-relaxed text-slate-400">
              Delivering innovative engineering, digital solutions and
              sustainable infrastructure for a better future.
            </p>

            {/* COMPANY ENTITIES */}

            <div className="mt-6 space-y-2.5">

              {companyEntities.map((company) => (
                <div
                  key={company}
                  className="flex items-start gap-2 text-xs leading-relaxed text-slate-400"
                >

                  <Building2
                    size={13}
                    className="mt-0.5 shrink-0 text-blue-400"
                  />

                  <span>{company}</span>

                </div>
              ))}

            </div>

            {/* SOCIAL */}

            <div className="mt-6 flex items-center gap-2.5">

              {socialLinks.map(
                ({ icon: Icon, label, href }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/[0.04] text-slate-400 transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-500 hover:bg-blue-600 hover:text-white"
                  >
                    <Icon size={15} />
                  </a>
                )
              )}

            </div>

          </div>

          {/* =================================================
              COMPANY
          ================================================== */}

          <div className="lg:col-span-2">

            <FooterColumn
              heading="Company"
              links={footerLinks.Company}
            />

          </div>

          {/* =================================================
              SERVICES
          ================================================== */}

          <div className="lg:col-span-2">

            <FooterColumn
              heading="Services"
              links={footerLinks.Services}
            />

          </div>

          {/* =================================================
              RESOURCES
          ================================================== */}

          <div className="lg:col-span-2">

            <FooterColumn
              heading="Resources"
              links={footerLinks.Resources}
            />

          </div>

          {/* =================================================
              CONTACT
          ================================================== */}

          <div className="lg:col-span-2">

            <div className="mb-5 text-[11px] font-semibold uppercase tracking-[0.16em] text-white">
              Get in Touch
            </div>

            <div className="space-y-3">

              {/* PHONE */}

              <ContactItem
                icon={Phone}
                label="Phone"
              >
                <a
                  href="tel:+912312655151"
                  className="transition-colors hover:text-white"
                >
                  +91-231-2655151
                </a>

                <br />

                <a
                  href="tel:+919404265151"
                  className="transition-colors hover:text-white"
                >
                  +91-9404265151
                </a>

                <br />

                <a
                  href="tel:+918379809080"
                  className="transition-colors hover:text-white"
                >
                  +91-8379809080
                </a>
              </ContactItem>

              {/* EMAIL */}

              <ContactItem
                icon={Mail}
                label="Email"
              >
                <a
                  href="mailto:contactus@infraplan.in"
                  className="break-all transition-colors hover:text-white"
                >
                  contactus@infraplan.in
                </a>
              </ContactItem>

            </div>

          </div>

        </div>

        {/* =====================================================
            OUR OFFICES
        ===================================================== */}

        <div className="pb-12 sm:pb-14">

          <div className="mb-5 flex items-center gap-3">

            <span className="h-px flex-1 bg-white/10" />

            <div className="flex items-center gap-2">

              <MapPin
                size={14}
                className="text-blue-400"
              />

              <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-blue-300">
                Our Offices
              </span>

            </div>

            <span className="h-px flex-1 bg-white/10" />

          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">

            {offices.map((office) => (
              <OfficeCard
                key={office.title}
                title={office.title}
              >
                {office.address}
              </OfficeCard>
            ))}

          </div>

        </div>

        {/* =====================================================
            DIVIDER
        ===================================================== */}

        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        {/* =====================================================
            BOTTOM BAR
        ===================================================== */}

        <div className="flex flex-col items-center justify-between gap-4 py-5 sm:flex-row">

          <p className="text-center text-[11px] text-slate-500 sm:text-left sm:text-xs">
            © {new Date().getFullYear()} Infraplan Engineering Pvt. Ltd.
            All rights reserved.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">

            <Link
              to="/privacy"
              className="text-[11px] text-slate-500 transition-colors hover:text-blue-400 sm:text-xs"
            >
              Privacy Policy
            </Link>

            <Link
              to="/terms"
              className="text-[11px] text-slate-500 transition-colors hover:text-blue-400 sm:text-xs"
            >
              Terms of Service
            </Link>

            <Link
              to="/sitemap"
              className="text-[11px] text-slate-500 transition-colors hover:text-blue-400 sm:text-xs"
            >
              Sitemap
            </Link>

          </div>

        </div>

      </div>

      {/* =========================================================
          BOTTOM ACCENT
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

      <div className="mb-5 text-[11px] font-semibold uppercase tracking-[0.16em] text-white">
        {heading}
      </div>

      <ul className="space-y-3">

        {links.map((link) => (
          <li key={link.label}>

            <Link
              to={link.path}
              className="group inline-flex items-center gap-1.5 text-xs text-slate-400 transition-colors duration-200 hover:text-white sm:text-sm"
            >

              <span className="h-px w-0 bg-blue-400 transition-all duration-200 group-hover:w-2" />

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
    <div className="group flex items-start gap-2.5 rounded-xl border border-white/[0.06] bg-white/[0.025] p-2.5 transition-all duration-300 hover:border-blue-500/20 hover:bg-white/[0.06]">

      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-blue-400/10 bg-blue-500/10 transition-colors group-hover:bg-blue-500/20">

        <Icon
          size={14}
          className="text-blue-400"
        />

      </div>

      <div className="min-w-0">

        <p className="mb-0.5 text-[9px] font-semibold uppercase tracking-wider text-slate-500">
          {label}
        </p>

        <p className="text-[11px] leading-relaxed text-slate-300">
          {children}
        </p>

      </div>

    </div>
  );
}


/* =============================================================
   OFFICE CARD
============================================================= */

function OfficeCard({ title, children }) {
  return (
    <div className="group relative overflow-hidden rounded-xl border border-white/[0.08] bg-white/[0.025] p-4 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/30 hover:bg-white/[0.05]">

      {/* Hover glow */}

      <div className="pointer-events-none absolute -right-10 -top-10 h-20 w-20 rounded-full bg-blue-500/10 opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-100" />

      <div className="relative">

        <div className="mb-3 flex items-center gap-2">

          <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-blue-400/10 bg-blue-500/10">

            <MapPin
              size={14}
              className="text-blue-400"
            />

          </div>

          <h4 className="text-sm font-semibold text-white">
            {title}
          </h4>

        </div>

        <p className="pl-10 text-[11px] leading-5 text-slate-400">
          {children}
        </p>

      </div>

    </div>
  );
}