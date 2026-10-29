import {
  Building2,
  Target,
  Eye,
  Droplets,
  Microscope,
  MapPin,
  Award,
  Users,
  CheckCircle,
} from "lucide-react";

import aboutPage from "../assets/aboutPage.png";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans antialiased">
      {/* =========================================================
          HERO SECTION
      ========================================================= */}
<section className="relative flex min-h-[300px] items-center overflow-hidden px-5 py-12 sm:min-h-[360px] sm:px-8 lg:min-h-[400px] lg:px-12 lg:py-16">  {/* Background image */}
<div
  className="absolute inset-0 bg-cover bg-center bg-no-repeat"
  style={{
    backgroundImage:
      "url('https://res.cloudinary.com/ddpunpqre/image/upload/v1793172475/aboutPage_ykh1yl.jpg')",
  }}
/>

  {/* Multi-layer scrim for depth + readability */}
  <div className="absolute inset-0 z-[1] bg-gradient-to-b from-black/60 via-black/45 to-black/70" />
  <div className="absolute inset-0 z-[1] bg-gradient-to-t from-black/40 via-transparent to-transparent" />
  <div className="absolute inset-0 z-[1] bg-gradient-to-r from-black/40 via-transparent to-black/30" />

  {/* Content */}
  <div className="relative z-10 mx-auto w-full max-w-5xl text-center">
    <h1 className="text-4xl font-extrabold leading-[1.1] tracking-tight text-white drop-shadow-[0_4px_16px_rgba(0,0,0,0.6)] sm:text-5xl md:text-6xl lg:text-7xl">
      About Us
    </h1>
  </div>
</section>

      {/* =========================================================
          MISSION & VISION
      ========================================================= */}
      <section className="border-b border-slate-100 bg-white px-5 py-16 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 md:grid-cols-3">
          <div className="group rounded-2xl border border-slate-200/80 bg-white p-6 shadow-md transition-all duration-500 hover:-translate-y-2 hover:shadow-xl sm:p-8">
            <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-blue-700 text-white shadow-lg shadow-blue-600/20 transition-transform group-hover:scale-110">
              <Droplets size={28} />
            </div>
            <h3 className="mb-3 text-xl font-bold text-slate-900 sm:text-2xl">
              Team InfraPlan
            </h3>
            <p className="text-sm leading-relaxed text-slate-600 sm:text-base">
              Dedicated to plan, create and manage reliable and efficient
              water infrastructure.
            </p>
          </div>

          <div className="group rounded-2xl border border-slate-200/80 bg-white p-6 shadow-md transition-all duration-500 hover:-translate-y-2 hover:shadow-xl sm:p-8">
            <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-blue-700 text-white shadow-lg shadow-blue-600/20 transition-transform group-hover:scale-110">
              <Target size={28} />
            </div>
            <h3 className="mb-3 text-xl font-bold text-slate-900 sm:text-2xl">
              Our Mission
            </h3>
            <p className="text-sm leading-relaxed text-slate-600 sm:text-base">
              Providing technical services to build robust water
              infrastructure, by integrating best practices, technical
              know-how and social entrepreneurship.
            </p>
          </div>

          <div className="group rounded-2xl border border-slate-200/80 bg-white p-6 shadow-md transition-all duration-500 hover:-translate-y-2 hover:shadow-xl sm:p-8">
            <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-600 to-blue-700 text-white shadow-lg shadow-cyan-600/20 transition-transform group-hover:scale-110">
              <Eye size={28} />
            </div>
            <h3 className="mb-3 text-xl font-bold text-slate-900 sm:text-2xl">
              Our Vision
            </h3>
            <p className="text-sm leading-relaxed text-slate-600 sm:text-base">
              Deploy a scientific approach towards Sustainable
              Infrastructure Growth.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================
          COMPANY OVERVIEW
      ========================================================= */}
      <section className="border-y border-slate-100 bg-slate-50/50 px-5 py-16 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <span className="text-xs font-semibold uppercase tracking-widest text-blue-700">
              Who We Are
            </span>
            <h2 className="mt-2 text-2xl font-bold text-slate-900 sm:text-3xl">
              Building Water Infrastructure{" "}
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Excellence
              </span>
            </h2>
            <p className="mx-auto mt-2 max-w-3xl text-sm leading-relaxed text-slate-500">
              InfraPlan group offers a wide range of services in Water
              Supply, Hydro-Power, Development Planning, GIS, Waste-water,
              Irrigation, and Software Development.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {/* InfraPlan Engineering Services */}
            <div className="group overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-md transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
              <div className="h-1.5 bg-gradient-to-r from-blue-600 to-blue-800" />
              <div className="p-6 sm:p-8">
                <div className="mb-6 flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-blue-700 transition-transform group-hover:scale-110">
                    <Building2 size={24} />
                  </div>
                  <h3 className="text-base font-bold text-slate-900 sm:text-lg">
                    InfraPlan Engineering Services Pvt. Ltd.
                  </h3>
                </div>
                <ul className="space-y-3">
                  {[
                    "Civil, Electrical, Instrumentation and Mechanical Contractors for Drinking Water Supply Projects.",
                    "New Schemes.",
                    "Reforms, Renovation and Rehabilitation.",
                    "NRW Reduction.",
                    "Renewable Energy - Solar Installations/Systems.",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-sm text-slate-600"
                    >
                      <CheckCircle
                        size={18}
                        className="mt-0.5 shrink-0 text-blue-600"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Sigma InfraPlan Engineering */}
            <div className="group overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-md transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
              <div className="h-1.5 bg-gradient-to-r from-cyan-600 to-blue-800" />
              <div className="p-6 sm:p-8">
                <div className="mb-6 flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-100 text-cyan-700 transition-transform group-hover:scale-110">
                    <Microscope size={24} />
                  </div>
                  <h3 className="text-base font-bold text-slate-900 sm:text-lg">
                    Sigma InfraPlan Engineering Pvt. Ltd.
                  </h3>
                </div>
                <ul className="space-y-3">
                  {[
                    "Hydraulic laboratory for physical and mathematical model studies and hydraulic designs – 'InfraPlan Hydraulic Laboratory' at Pune, Maharashtra.",
                    "Online Toolkit for design, operation and management of drinking water supply schemes.",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-sm text-slate-600"
                    >
                      <CheckCircle
                        size={18}
                        className="mt-0.5 shrink-0 text-cyan-600"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          REACH & OTHER ACTIVITIES
      ========================================================= */}
      <section className="bg-white px-5 py-16 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 lg:grid-cols-2">
          {/* Reach */}
          <div className="group rounded-2xl border border-emerald-100 bg-gradient-to-br from-emerald-50 to-teal-50/50 p-6 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl sm:p-8">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700 transition-transform group-hover:scale-110">
                <MapPin size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 sm:text-2xl">
                Our Reach
              </h3>
            </div>
            <p className="mb-6 text-sm leading-relaxed text-slate-600 sm:text-base">
              InfraPlan has a wide coverage area, covering multiple towns
              and villages, and has completed projects in various states
              and countries.
            </p>
            <div className="flex flex-wrap gap-3">
              {[
                "Multiple Towns",
                "Villages",
                "Various States",
                "International",
              ].map((tag) => (
                <span
                  key={tag}
                  className="rounded-lg border border-emerald-200 bg-white px-4 py-2 text-xs font-medium text-emerald-700 shadow-sm sm:text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Other Activities */}
          <div className="group rounded-2xl border border-amber-100 bg-gradient-to-br from-amber-50 to-orange-50/50 p-6 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl sm:p-8">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-100 text-amber-700 transition-transform group-hover:scale-110">
                <Award size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 sm:text-2xl">
                Other Activities
              </h3>
            </div>
            <div className="space-y-3">
              <div className="flex items-start gap-3 rounded-xl border border-amber-200 bg-white p-4 shadow-sm">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-amber-100 text-amber-700">
                  <Users size={16} />
                </div>
                <div>
                  <p className="text-sm font-medium text-slate-800">
                    Support for 'Baba Redikar Go Gita Sanstha'
                  </p>
                  <p className="text-xs text-slate-500 sm:text-sm">
                    Kolhapur
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 rounded-xl border border-amber-200 bg-white p-4 shadow-sm">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-amber-100 text-amber-700">
                  <Building2 size={16} />
                </div>
                <div>
                  <p className="text-sm font-medium text-slate-800">
                    Land / Property Development Works
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 rounded-xl border border-amber-200 bg-white p-4 shadow-sm">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-amber-100 text-amber-700">
                  <Droplets size={16} />
                </div>
                <div>
                  <p className="text-sm font-medium text-slate-800">
                    Mango Orchard
                  </p>
                  <p className="text-xs text-slate-500 sm:text-sm">
                    Specialisation in Alphonso Mango at Devgad, Maharashtra
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}