// components/Footer.jsx
import {
  Building2,
  Mail,
  Phone,
} from "lucide-react";

/* =============================================================
   COMPANY ENTITIES
============================================================= */

const companyEntities = [
  "InfraPlan Hydraulic Laboratory, Pune",
  "InfraPlan Engineering Services Pvt. Ltd.",
  "Sigma InfraPlan Engineering Pvt. Ltd.",
];

/* =============================================================
   OFFICE LOCATIONS
============================================================= */

const offices = [
  {
    title: "Kolhapur Office",
    address: (
      <>
        109, Rajaji Complex, 1st Lane, Shahupuri,
        <br />
        Kolhapur – 416001, Maharashtra, India.
      </>
    ),
  },
  {
    title: "Pune Office",
    address: (
      <>
        Office No. 215, 2nd Floor, Kohinoor Majestic,
        <br />
        Behind Kundan Hyundai, Thermax Chowk,
        <br />
        M.I.D.C. Chinchwad, Pune – 411019.
      </>
    ),
  },
  {
    title: "Hydraulic Laboratory",
    address: (
      <>
        Chandkhed Village, Tal–Maval, Dist. Pune,
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
        <div className="absolute -left-40 -top-40 h-[500px] w-[500px] rounded-full bg-blue-600/10 blur-3xl" />
        <div className="absolute -right-40 top-1/3 h-[450px] w-[450px] rounded-full bg-indigo-500/10 blur-3xl" />
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

      <div className="relative z-10 mx-auto max-w-7xl px-5 pt-12 sm:px-8 sm:pt-16 lg:px-12">

        {/* =====================================================
            COMPANIES + GET IN TOUCH
        ===================================================== */}

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">

          {/* COMPANY ENTITIES */}
          <div className="lg:col-span-6">
            <div className="space-y-3">
              {companyEntities.map((company) => (
                <div
                  key={company}
                  className="flex items-start gap-3 text-sm leading-relaxed text-slate-300"
                >
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-blue-400/15 bg-blue-500/10">
                    <Building2 size={14} className="text-blue-400" />
                  </div>
                  <span className="pt-1">{company}</span>
                </div>
              ))}
            </div>
          </div>

          {/* GET IN TOUCH */}
          <div className="lg:col-span-6">
            <h3 className="mb-5 text-xl font-bold text-white sm:text-2xl">
              Get In Touch
            </h3>

            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-3 text-slate-300">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-blue-400/15 bg-blue-500/10">
                  <Phone size={14} className="text-blue-400" />
                </div>
                <a
                  href="tel:+912312655151"
                  className="transition-colors hover:text-white"
                >
                  +91-231-2655151,
                </a>
              </div>

              <div className="flex items-center gap-3 text-slate-300">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-blue-400/15 bg-blue-500/10">
                  <Phone size={14} className="text-blue-400" />
                </div>
                <a
                  href="tel:+919404265151"
                  className="transition-colors hover:text-white"
                >
                  +91-9404265151, +91-9421034452
                </a>
              </div>

              <div className="flex items-center gap-3 text-slate-300">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-blue-400/15 bg-blue-500/10">
                  <Mail size={14} className="text-blue-400" />
                </div>
                <a
                  href="mailto:contactus@infraplan.in"
                  className="break-all transition-colors hover:text-white"
                >
                  contactus@infraplan.in
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* =====================================================
            OFFICE CARDS
        ===================================================== */}

        <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-3">
          {offices.map((office) => (
            <OfficeCard key={office.title} title={office.title}>
              {office.address}
            </OfficeCard>
          ))}
        </div>

        {/* =====================================================
            DIVIDER
        ===================================================== */}

        <div className="mt-12 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        {/* =====================================================
            BOTTOM BAR
        ===================================================== */}

        <div className="py-5 text-center text-xs text-slate-500">
          Copyright © 2025 InfraPlan | Powered by InfraPlan
        </div>

      </div>

      {/* =========================================================
          BOTTOM ACCENT
      ========================================================= */}

      <div className="relative h-1 bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500" />

    </footer>
  );
}

/* =============================================================
   OFFICE CARD
============================================================= */

function OfficeCard({ title, children }) {
  return (
    <div className="group relative overflow-hidden rounded-xl border border-white/[0.08] bg-white/[0.025] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/30 hover:bg-white/[0.05]">

      {/* Hover glow */}
      <div className="pointer-events-none absolute -right-10 -top-10 h-20 w-20 rounded-full bg-blue-500/10 opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-100" />

      <div className="relative">
        <div className="mb-3 flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-blue-400/15 bg-blue-500/10">
            <Building2 size={14} className="text-blue-400" />
          </div>
          <h4 className="text-base font-semibold text-white">
            {title}
          </h4>
        </div>

        <p className="pl-10 text-xs leading-6 text-slate-400">
          {children}
        </p>
      </div>

    </div>
  );
}