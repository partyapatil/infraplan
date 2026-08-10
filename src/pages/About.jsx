import React from "react";
import {
  Building2,
  Target,
  Eye,
  Droplets,
  Sun,
  Microscope,
  Laptop,
  MapPin,
  Award,
  Users,
  CheckCircle,
  ArrowRight,
  ChevronDown,
  Mail,
  Phone,
  Shield,
  Globe,
} from "lucide-react";

// Re-using the navigation from the main page
const nav = [
  { label: "Home", active: false },
  { label: "About Us", active: true },
  { label: "Services", dropdown: true },
  { label: "Projects" },
  { label: "Sigma ToolBox" },
  { label: "Resources", dropdown: true },
  { label: "Careers" },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans antialiased">
      {/* Header - IDENTICAL to home page */}
 

      {/* Hero Section - Matches home page hero style */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50/50 via-white to-cyan-50/30 px-5 sm:px-8 lg:px-12 pt-12 pb-10 lg:pt-20 lg:pb-16">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-600/10 text-blue-700 text-xs font-semibold tracking-wider uppercase mb-6 border border-blue-200/30">
            <Users size={14} />
            About Us
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-bold text-slate-900 leading-tight tracking-tight">
            Team <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">InfraPlan</span>
          </h1>
          <p className="mt-4 text-sm sm:text-base text-slate-500 max-w-2xl mx-auto leading-relaxed">
            Dedicated to plan, create and manage reliable and efficient water Infrastructure.
          </p>
        </div>
      </section>

      {/* Mission & Vision - Matches home page card styling */}
      <section className="px-5 sm:px-8 lg:px-12 py-16 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="group p-6 sm:p-8 rounded-2xl bg-white border border-slate-200/80 shadow-md hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-600 to-blue-700 text-white flex items-center justify-center mb-5 shadow-lg shadow-blue-600/20 group-hover:scale-110 transition-transform">
              <Target size={28} />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3">Our Mission</h3>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Providing technical services to build robust water infrastructure, by integrating best practices, technical know-how and social entrepreneurship.
            </p>
          </div>

          <div className="group p-6 sm:p-8 rounded-2xl bg-white border border-slate-200/80 shadow-md hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-cyan-600 to-blue-700 text-white flex items-center justify-center mb-5 shadow-lg shadow-cyan-600/20 group-hover:scale-110 transition-transform">
              <Eye size={28} />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3">Our Vision</h3>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Deploy a scientific approach towards Sustainable Infrastructure Growth.
            </p>
          </div>
        </div>
      </section>

      {/* Company Overview - Matches home page verticals styling */}
      <section className="px-5 sm:px-8 lg:px-12 py-16 bg-slate-50/50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-xs font-semibold tracking-widest text-blue-700 uppercase">Who We Are</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-2">
              Building Water Infrastructure <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Excellence</span>
            </h2>
            <p className="text-sm text-slate-500 mt-2 max-w-3xl mx-auto leading-relaxed">
              InfraPlan group offers a wide range of services in Water Supply, Hydro-Power, Development Planning, 
              GIS, Waste-water, Irrigation, and Software Development.
            </p>
          </div>

          {/* Company Cards - Matches home page featured projects styling */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* InfraPlan Engineering Services */}
            <div className="group rounded-2xl overflow-hidden border border-slate-200/80 bg-white shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
              <div className="h-1.5 bg-gradient-to-r from-blue-600 to-blue-800" />
              <div className="p-6 sm:p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Building2 size={24} />
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-slate-900">InfraPlan Engineering Services Pvt. Ltd.</h3>
                </div>
                <ul className="space-y-3">
                  {[
                    "Civil, Electrical, Instrumentation and Mechanical Contractors for Drinking Water Supply Projects.",
                    "New Schemes.",
                    "Reforms, Renovation and Rehabilitation.",
                    "NRW Reduction.",
                    "Renewable Energy - Solar Installations/Systems."
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-slate-600">
                      <CheckCircle size={18} className="text-blue-600 mt-0.5 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Sigma InfraPlan Engineering */}
            <div className="group rounded-2xl overflow-hidden border border-slate-200/80 bg-white shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
              <div className="h-1.5 bg-gradient-to-r from-cyan-600 to-blue-800" />
              <div className="p-6 sm:p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-cyan-100 text-cyan-700 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Microscope size={24} />
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-slate-900">Sigma InfraPlan Engineering Pvt. Ltd.</h3>
                </div>
                <ul className="space-y-3">
                  {[
                    "Hydraulic laboratory for physical and mathematical model studies and hydraulic designs – 'InfraPlan Hydraulic Laboratory' at Pune, Maharashtra.",
                    "Online Toolkit for design, operation and management of drinking water supply schemes."
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-slate-600">
                      <CheckCircle size={18} className="text-cyan-600 mt-0.5 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reach & Additional Activities - Matches home page stats styling */}
      <section className="px-5 sm:px-8 lg:px-12 py-16 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Reach */}
          <div className="group p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-emerald-50 to-teal-50/50 border border-emerald-100 hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center group-hover:scale-110 transition-transform">
                <MapPin size={24} />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900">Our Reach</h3>
            </div>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-6">
              InfraPlan has a wide coverage area, covering multiple towns and villages, and has completed projects in various states and countries.
            </p>
            <div className="flex flex-wrap gap-3">
              {["Multiple Towns", "Villages", "Various States", "International"].map((tag) => (
                <span key={tag} className="px-4 py-2 bg-white rounded-lg border border-emerald-200 text-xs sm:text-sm font-medium text-emerald-700 shadow-sm">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Other Activities */}
          <div className="group p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-amber-50 to-orange-50/50 border border-amber-100 hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Award size={24} />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900">Other Activities</h3>
            </div>
            <div className="space-y-3">
              <div className="flex items-start gap-3 bg-white p-4 rounded-xl border border-amber-200 shadow-sm">
                <div className="w-8 h-8 rounded-lg bg-amber-100 text-amber-700 flex items-center justify-center shrink-0">
                  <Users size={16} />
                </div>
                <div>
                  <p className="text-sm font-medium text-slate-800">Support for 'Baba Redikar Go Gita Sanstha'</p>
                  <p className="text-xs sm:text-sm text-slate-500">Kolhapur</p>
                </div>
              </div>
              <div className="flex items-start gap-3 bg-white p-4 rounded-xl border border-amber-200 shadow-sm">
                <div className="w-8 h-8 rounded-lg bg-amber-100 text-amber-700 flex items-center justify-center shrink-0">
                  <Building2 size={16} />
                </div>
                <div>
                  <p className="text-sm font-medium text-slate-800">Land / Property Development Works</p>
                </div>
              </div>
              <div className="flex items-start gap-3 bg-white p-4 rounded-xl border border-amber-200 shadow-sm">
                <div className="w-8 h-8 rounded-lg bg-amber-100 text-amber-700 flex items-center justify-center shrink-0">
                  <Droplets size={16} />
                </div>
                <div>
                  <p className="text-sm font-medium text-slate-800">Mango Orchard</p>
                  <p className="text-xs sm:text-sm text-slate-500">Specialisation in Alphonso Mango at Devgad, Maharashtra</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Matches home page CTA styling */}
{/* =========================================================
    CTA SECTION
========================================================= */}

<section className="relative overflow-hidden">

  {/* =======================================================
      TOP CURVED WAVE
  ======================================================= */}

  <div className="absolute top-0 left-0 right-0 z-20 pointer-events-none leading-none">
    <svg
      viewBox="0 0 1440 120"
      className="w-full h-16 sm:h-20 md:h-24"
      preserveAspectRatio="none"
    >
      <path
        d="
          M0,45
          C180,105 360,105 540,55
          C720,5 900,5 1080,55
          C1260,105 1350,105 1440,55
          L1440,0
          L0,0
          Z
        "
        fill="white"
      />
    </svg>
  </div>


  {/* =======================================================
      MAIN BACKGROUND
  ======================================================= */}

  <div className="relative bg-gradient-to-br from-blue-700 via-blue-800 to-indigo-900 pt-28 sm:pt-32 pb-16 sm:pb-20">

    {/* =====================================================
        BACKGROUND GLOW / MESH
    ===================================================== */}

    <div className="absolute inset-0 overflow-hidden pointer-events-none">

      {/* Blue glow */}
      <div className="absolute -top-32 -left-32 w-[420px] h-[420px] rounded-full bg-blue-400/20 blur-3xl" />

      {/* Indigo glow */}
      <div className="absolute top-1/3 -right-32 w-[420px] h-[420px] rounded-full bg-indigo-400/20 blur-3xl" />

      {/* Cyan glow */}
      <div className="absolute -bottom-40 left-1/3 w-[400px] h-[400px] rounded-full bg-cyan-400/10 blur-3xl" />

      {/* Small glow */}
      <div className="absolute top-1/2 left-1/2 w-[250px] h-[250px] rounded-full bg-blue-300/10 blur-3xl" />

    </div>


    {/* =====================================================
        ENGINEERING GRID
    ===================================================== */}

    <div
      className="absolute inset-0 opacity-[0.06] pointer-events-none"
      style={{
        backgroundImage: `
          linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)
        `,
        backgroundSize: "45px 45px",
      }}
    />


    {/* =====================================================
        FLOATING PARTICLES
    ===================================================== */}

    <div className="absolute inset-0 pointer-events-none">

      {[...Array(8)].map((_, i) => (
        <div
          key={i}
          className="absolute w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white/20 rounded-full animate-float"
          style={{
            top: `${8 + (i * 13) % 82}%`,
            left: `${5 + (i * 17) % 90}%`,
            animationDelay: `${i * 0.6}s`,
            animationDuration: `${4 + (i % 4)}s`,
          }}
        />
      ))}

    </div>


    {/* =====================================================
        DECORATIVE CIRCLES
    ===================================================== */}

    <div className="absolute top-1/3 right-8 sm:right-16 w-32 h-32 sm:w-44 sm:h-44 rounded-full border border-white/10 pointer-events-none" />

    <div className="absolute top-1/3 right-16 sm:right-24 w-20 h-20 sm:w-28 sm:h-28 rounded-full border border-white/10 pointer-events-none" />

    <div className="absolute bottom-10 left-8 sm:left-16 w-20 h-20 rounded-full border border-white/10 pointer-events-none" />


    {/* =====================================================
        CONTENT
    ===================================================== */}

    <div className="relative z-10 max-w-5xl mx-auto px-5 sm:px-8 text-center">

      {/* Badge */}

      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-blue-100 text-[10px] sm:text-xs font-semibold uppercase tracking-[0.15em] mb-5">

        <span className="relative flex w-2 h-2">
          <span className="absolute inline-flex w-full h-full rounded-full bg-cyan-300 opacity-75 animate-ping" />
          <span className="relative inline-flex w-2 h-2 rounded-full bg-cyan-300" />
        </span>

        Let's Build Together

      </div>


      {/* Heading */}

      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">

        Ready to Build{" "}

        <span className="bg-gradient-to-r from-cyan-200 via-blue-100 to-white bg-clip-text text-transparent">
          Together?
        </span>

      </h2>


      {/* Description */}

      <p className="text-sm sm:text-base md:text-lg text-blue-100/90 max-w-2xl mx-auto leading-relaxed mb-8">

        Let's create sustainable water infrastructure solutions
        that make a difference.

      </p>


      {/* ===================================================
          CTA BUTTON
      =================================================== */}

      <button
        className="
          group
          inline-flex
          items-center
          gap-2
          px-7
          sm:px-8
          py-3
          sm:py-3.5
          bg-white
          text-blue-700
          font-semibold
          rounded-xl
          shadow-xl
          shadow-blue-950/20
          hover:shadow-2xl
          hover:shadow-white/10
          hover:scale-105
          transition-all
          duration-300
          text-sm
          sm:text-base
        "
      >

        Get in Touch

        <ArrowRight
          size={18}
          className="group-hover:translate-x-1 transition-transform duration-300"
        />

      </button>


      {/* ===================================================
          TRUST INDICATORS
      =================================================== */}

      <div className="flex flex-wrap justify-center gap-x-6 gap-y-4 mt-9 pt-7 border-t border-white/15">

        {/* ISO */}

        <div className="flex items-center gap-2 text-xs sm:text-sm text-blue-100">

          <div className="w-7 h-7 rounded-lg bg-white/10 border border-white/10 flex items-center justify-center">

            <Shield size={15} />

          </div>

          <span>ISO Certified</span>

        </div>


        {/* Experience */}

        <div className="flex items-center gap-2 text-xs sm:text-sm text-blue-100">

          <div className="w-7 h-7 rounded-lg bg-white/10 border border-white/10 flex items-center justify-center">

            <Award size={15} />

          </div>

          <span>15+ Years Experience</span>

        </div>


        {/* Global */}

        <div className="flex items-center gap-2 text-xs sm:text-sm text-blue-100">

          <div className="w-7 h-7 rounded-lg bg-white/10 border border-white/10 flex items-center justify-center">

            <Globe size={15} />

          </div>

          <span>Global Reach</span>

        </div>

      </div>

    </div>

  </div>


  {/* =======================================================
      ANIMATION
  ======================================================= */}

  <style>{`

    @keyframes float {

      0%, 100% {
        transform: translateY(0) translateX(0);
        opacity: 0.25;
      }

      25% {
        transform: translateY(-15px) translateX(8px);
        opacity: 0.6;
      }

      50% {
        transform: translateY(-5px) translateX(-5px);
        opacity: 0.35;
      }

      75% {
        transform: translateY(12px) translateX(5px);
        opacity: 0.55;
      }

    }

    .animate-float {
      animation: float 5s ease-in-out infinite;
    }

    @media (prefers-reduced-motion: reduce) {

      .animate-float {
        animation: none;
      }

    }

  `}</style>

</section>

      {/* Footer - IDENTICAL to home page footer */}
      {/* <footer className="bg-slate-900 text-slate-300">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-700 flex items-center justify-center text-white font-bold text-sm shadow-lg shadow-blue-600/20">
                IP
              </div>
              <div className="leading-tight">
                <div className="font-bold text-white text-base tracking-tight">INFRAPLAN</div>
                <div className="text-[10px] text-slate-400 -mt-1 tracking-wider">Engineering the Future</div>
              </div>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed max-w-xs">
              Delivering innovative engineering, digital solutions and sustainable infrastructure for a better future.
            </p>
          </div>

          {Object.entries({
            Company: ["About Us", "Careers", "Newsroom", "Contact Us"],
            Services: ["Hydraulic Laboratory", "Engineering & Construction", "SigmaToolBox"],
            Resources: ["Case Studies", "Whitepapers", "Blog", "FAQs"],
          }).map(([heading, links]) => (
            <div key={heading}>
              <div className="text-xs font-semibold text-white uppercase tracking-wide mb-4">
                {heading}
              </div>
              <ul className="flex flex-col gap-2.5">
                {links.map((l) => (
                  <li key={l}>
                    <a href="#" className="text-sm text-slate-400 hover:text-blue-400 transition-colors">
                      {l}
                    </a>
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
            <a href="#" className="hover:text-blue-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-blue-400 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-blue-400 transition-colors">Sitemap</a>
          </div>
        </div>
      </footer> */}
    </div>
  );
}