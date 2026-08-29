import React, { useState } from "react";
import {
  CreditCard,
  Droplets,
  Waves as WavesIcon,
  Shield,
  RefreshCw,
  CheckCircle,
  PieChart,
  WifiOff,
  FileBarChart,
  Layers,
  Rocket,
  Clock,
  Users,
  Cpu,
  Sparkles,
  Bell,
  ArrowRight,
  Award,
  Zap,
} from "lucide-react";
import sigmaToolboxHeroBg from "../assets/sigmatoolbox-hero.png";

/* ============================================================
   PRODUCT DATA
============================================================ */

const products = {
  live: {
    name: "Aquabill",
    tagline: "Water Tax Billing, Simplified",
    icon: CreditCard,
    description:
      "The water tax billing system with billing cycles, customizable tariffs, meter tracking, zone-based management, bill generation, online payments, email/SMS alerts & reports. Simplifies billing, reduces manual work & ensures accuracy.",
    highlightFeatures: [
      "Billing Cycles with Customizable Tariffs",
      "Zone-Based Management",
      "Automated Bill Generation",
      "Online Payments Integration",
    ],
    panelFeatures: [
      "Email & SMS Alerts",
      "Reports & Analytics",
      "Meter Tracking",
      "Offline Mode Support",
    ],
    status: "Live From 7 July",
    color: "from-blue-600 to-indigo-700",
    gradient: "from-blue-50 to-indigo-50/30",
    borderColor: "border-blue-200",
    iconColor: "text-blue-600",
  },
  upcoming: [
    {
      name: "WaterLod",
      icon: Droplets,
      description:
        "Advanced water quality monitoring and management system for utilities and municipalities.",
      features: [
        "Real-time water quality monitoring",
        "Automated alerts",
        "Compliance reporting",
        "Data visualization",
      ],
      status: "Launching Soon",
      progress: 70,
      color: "from-cyan-600 to-teal-700",
      gradient: "from-cyan-50 to-teal-50/30",
      borderColor: "border-cyan-200",
      iconColor: "text-cyan-600",
    },
    {
      name: "River",
      icon: WavesIcon,
      description:
        "Comprehensive river basin management platform for sustainable water resource planning.",
      features: [
        "Basin mapping",
        "Flow prediction",
        "Erosion monitoring",
        "Ecosystem management",
      ],
      status: "Launching Soon",
      progress: 45,
      color: "from-emerald-600 to-teal-700",
      gradient: "from-emerald-50 to-teal-50/30",
      borderColor: "border-emerald-200",
      iconColor: "text-emerald-600",
    },
  ],
};

const benefits = [
  {
    icon: Shield,
    title: "Simplifies Billing",
    description: "Streamlined billing process reduces manual work and errors.",
  },
  {
    icon: RefreshCw,
    title: "Reduces Manual Work",
    description: "Automation of routine tasks frees up staff for other activities.",
  },
  {
    icon: CheckCircle,
    title: "Ensures Accuracy",
    description: "Precise calculations and verification minimize billing errors.",
  },
  {
    icon: PieChart,
    title: "Better Insights",
    description: "Data-driven insights for improved operational efficiency.",
  },
  {
    icon: WifiOff,
    title: "Offline Mode Support",
    description: "Continue operations even without internet connectivity.",
  },
  {
    icon: FileBarChart,
    title: "Auto Reports",
    description: "Automated report generation for compliance and analysis.",
  },
];

const stats = [
  { value: "4+", label: "Products", icon: Layers },
  { value: "1", label: "Live Now", icon: Rocket },
  { value: "3", label: "Launching Soon", icon: Clock },
  { value: "100%", label: "Customer Focused", icon: Users },
];

/* ============================================================
   PAGE
============================================================ */

export default function SigmaToolboxPage() {
  const [activeProduct, setActiveProduct] = useState("Aquabill");

  return (
    <div className="min-h-screen bg-white font-sans text-slate-800 antialiased">
      {/* =========================================================
          HERO
      ========================================================= */}
      <section className="relative flex min-h-[460px] items-center overflow-hidden px-5 py-14 sm:min-h-[500px] sm:px-8 lg:px-12 lg:py-20">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${sigmaToolboxHeroBg})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white/25 via-white/50 to-blue-100/15" />
        <div className="absolute inset-0 bg-blue-600/5" />
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[420px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/25 blur-3xl" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white/60 to-transparent" />

        <div className="relative z-10 mx-auto w-full max-w-7xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-200/70 bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-blue-700 shadow-md backdrop-blur-md">
            <Cpu size={14} className="text-blue-600" />
            Sigma ToolBox
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-blue-500" />
          </div>

          <h1 className="mb-5 text-4xl font-bold leading-[1.1] tracking-tight text-slate-900 drop-shadow-sm sm:text-5xl lg:text-[3.6rem]">
            Planning, Modelling,{" "}
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 bg-clip-text text-transparent">
              Managing
            </span>{" "}
            Infrastructure
          </h1>

          <p className="mx-auto max-w-2xl text-base leading-relaxed text-slate-600 drop-shadow-sm sm:text-lg">
            Comprehensive digital solutions for water utilities and infrastructure
            management — built by engineers who understand the field.
          </p>

          <div className="mt-9 flex flex-wrap justify-center gap-3 sm:gap-4">
            {stats.map((stat) => {
              const Icon = stat.icon;
              return (
                <div
                  key={stat.label}
                  className="flex items-center gap-2.5 rounded-2xl border border-white/80 bg-white/80 px-4 py-3 text-slate-700 shadow-lg shadow-slate-900/5 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-xl"
                >
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                    <Icon size={15} />
                  </div>
                  <div className="text-left leading-tight">
                    <div className="text-base font-bold text-slate-900">{stat.value}</div>
                    <div className="text-[11px] text-slate-500">{stat.label}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================
          PRODUCT NAVIGATION
      ========================================================= */}
      <section className="sticky top-0 z-30 border-b border-slate-100 bg-white/90 px-5 py-4 backdrop-blur-md sm:px-8 lg:px-12">
        <div className="mx-auto flex max-w-7xl flex-wrap justify-center gap-2.5 sm:gap-3">
          <button
            type="button"
            onClick={() => setActiveProduct("Aquabill")}
            className={`flex items-center gap-2 rounded-xl px-5 py-2.5 text-xs font-semibold transition-all duration-300 sm:px-6 sm:text-sm ${
              activeProduct === "Aquabill"
                ? "bg-gradient-to-r from-blue-600 to-indigo-700 text-white shadow-lg shadow-blue-600/25"
                : "bg-slate-50 text-slate-600 hover:bg-slate-100"
            }`}
          >
            <CreditCard size={15} className="sm:h-4 sm:w-4" />
            Aquabill
            <span
              className={`rounded-full px-2 py-0.5 text-[9px] font-bold uppercase tracking-wide ${
                activeProduct === "Aquabill" ? "bg-white/20 text-white" : "bg-emerald-100 text-emerald-700"
              }`}
            >
              Live
            </span>
          </button>

          <button
            type="button"
            onClick={() => setActiveProduct("Upcoming")}
            className={`flex items-center gap-2 rounded-xl px-5 py-2.5 text-xs font-semibold transition-all duration-300 sm:px-6 sm:text-sm ${
              activeProduct === "Upcoming"
                ? "bg-gradient-to-r from-blue-600 to-indigo-700 text-white shadow-lg shadow-blue-600/25"
                : "bg-slate-50 text-slate-600 hover:bg-slate-100"
            }`}
          >
            <Rocket size={15} className="sm:h-4 sm:w-4" />
            Upcoming Products
            <span
              className={`rounded-full px-2 py-0.5 text-[9px] font-bold uppercase tracking-wide ${
                activeProduct === "Upcoming" ? "bg-white/20 text-white" : "bg-amber-100 text-amber-700"
              }`}
            >
              Soon
            </span>
          </button>
        </div>
      </section>

      {/* =========================================================
          AQUABILL — ACTIVE PRODUCT
      ========================================================= */}
      {activeProduct === "Aquabill" && (
        <>
          <section
            className={`relative overflow-hidden border-b border-slate-100 bg-gradient-to-br ${products.live.gradient} px-5 py-16 sm:px-8 sm:py-20 lg:px-12`}
          >
            {/* Decorative glow */}
            <div className="pointer-events-none absolute -right-24 top-0 h-72 w-72 rounded-full bg-blue-400/10 blur-3xl" />
            <div className="pointer-events-none absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-indigo-400/10 blur-3xl" />

            <div className="relative mx-auto max-w-7xl">
              <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[1.1fr_1fr] lg:gap-14">
                {/* LEFT — Copy */}
                <div>
                  <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-100 px-3 py-1.5 text-xs font-semibold text-emerald-700">
                    <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-500" />
                    {products.live.status}
                  </div>

                  <div className="mb-4 flex items-center gap-3">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-700 text-white shadow-lg shadow-blue-600/25">
                      <CreditCard size={26} />
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold leading-tight text-slate-900 sm:text-4xl">
                        {products.live.name}
                      </h2>
                      <p className="text-xs font-medium uppercase tracking-wider text-blue-600 sm:text-sm">
                        {products.live.tagline}
                      </p>
                    </div>
                  </div>

                  <p className="text-sm leading-relaxed text-slate-600 sm:text-base">
                    {products.live.description}
                  </p>

                  <div className="mt-7 flex flex-wrap gap-2.5">
                    {products.live.highlightFeatures.map((feature, idx) => (
                      <span
                        key={idx}
                        className="flex items-center gap-1.5 rounded-full border border-blue-100 bg-white px-3.5 py-2 text-xs font-medium text-slate-700 shadow-sm"
                      >
                        <CheckCircle size={13} className="text-blue-600" />
                        {feature}
                      </span>
                    ))}
                  </div>

                  <button
                    type="button"
                    className="group mt-8 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-700 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-600/25 transition-all duration-300 hover:scale-105 hover:shadow-blue-600/40"
                  >
                    Explore Aquabill
                    <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
                  </button>
                </div>

                {/* RIGHT — Product panel, mockup-style instead of a plain grid */}
                <div className="relative">
                  <div className="pointer-events-none absolute -inset-3 rounded-[28px] bg-gradient-to-br from-blue-200/40 to-indigo-200/40 blur-xl" />

                  <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-2xl shadow-blue-900/10">
                    {/* Panel header — mimics an app top bar */}
                    <div className="flex items-center justify-between border-b border-slate-100 bg-gradient-to-r from-blue-600 to-indigo-700 px-5 py-3.5">
                      <div className="flex items-center gap-2">
                        <div className="flex h-6 w-6 items-center justify-center rounded-md bg-white/15 text-white">
                          <CreditCard size={13} />
                        </div>
                        <span className="text-xs font-semibold text-white">Aquabill Dashboard</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <span className="h-2 w-2 rounded-full bg-white/30" />
                        <span className="h-2 w-2 rounded-full bg-white/30" />
                        <span className="h-2 w-2 rounded-full bg-white/60" />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3 p-5">
                      {products.live.panelFeatures.map((feature, idx) => (
                        <div
                          key={idx}
                          className="group rounded-xl border border-slate-100 bg-gradient-to-br from-slate-50 to-white p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-md"
                        >
                          <div className="mb-2.5 flex h-8 w-8 items-center justify-center rounded-lg bg-blue-100 text-blue-700 transition-colors group-hover:bg-blue-600 group-hover:text-white">
                            <CheckCircle size={15} />
                          </div>
                          <p className="text-xs font-semibold leading-snug text-slate-700">{feature}</p>
                        </div>
                      ))}
                    </div>

                    {/* Panel footer strip */}
                    <div className="flex items-center justify-between border-t border-slate-100 bg-slate-50/70 px-5 py-3">
                      <div className="flex items-center gap-1.5 text-[11px] font-medium text-slate-500">
                        <Zap size={12} className="text-amber-500" />
                        Real-time sync enabled
                      </div>
                      <span className="text-[11px] font-semibold text-emerald-600">● Online</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* =========================================================
              BENEFITS GRID
          ========================================================= */}
          <section className="border-b border-slate-100 bg-white px-5 py-16 sm:px-8 sm:py-20 lg:px-12">
            <div className="mx-auto max-w-7xl">
              <div className="mb-12 text-center sm:mb-14">
                <span className="mb-3 inline-block rounded-full border border-blue-200/30 bg-blue-600/10 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-blue-700">
                  Why Aquabill
                </span>
                <h2 className="mt-2 text-2xl font-bold text-slate-900 sm:text-3xl">
                  Smart Billing{" "}
                  <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                    Solutions
                  </span>
                </h2>
              </div>

              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
                {benefits.map((benefit, idx) => {
                  const Icon = benefit.icon;
                  return (
                    <div
                      key={idx}
                      className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-gradient-to-br from-slate-50 to-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-blue-200 hover:shadow-xl"
                    >
                      <div className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-blue-100/0 blur-2xl transition-colors duration-300 group-hover:bg-blue-200/40" />

                      <div className="relative mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-blue-700 shadow-sm transition-all duration-300 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white">
                        <Icon size={22} />
                      </div>
                      <h3 className="relative mb-1.5 text-sm font-bold text-slate-900">{benefit.title}</h3>
                      <p className="relative text-sm leading-relaxed text-slate-500">{benefit.description}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
        </>
      )}

      {/* =========================================================
          UPCOMING PRODUCTS
      ========================================================= */}
      {activeProduct === "Upcoming" && (
        <section className="border-y border-slate-100 bg-gradient-to-br from-slate-50 to-blue-50/30 px-5 py-16 sm:px-8 sm:py-20 lg:px-12">
          <div className="mx-auto max-w-7xl">
            <div className="mb-12 text-center sm:mb-14">
              <span className="mb-3 inline-block rounded-full border border-amber-200/30 bg-amber-600/10 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-amber-700">
                Coming Soon
              </span>
              <h2 className="mt-2 text-2xl font-bold text-slate-900 sm:text-3xl">
                Upcoming{" "}
                <span className="bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
                  Products
                </span>
              </h2>
              <p className="mx-auto mt-2 max-w-2xl text-sm leading-relaxed text-slate-500">
                Innovative solutions in active development to address your infrastructure challenges.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {products.upcoming.map((product, idx) => {
                const Icon = product.icon;
                return (
                  <div
                    key={idx}
                    className={`group relative overflow-hidden rounded-2xl border ${product.borderColor} bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl sm:p-8`}
                  >
                    <div
                      className={`pointer-events-none absolute right-0 top-0 h-40 w-40 rounded-full bg-gradient-to-br ${product.color} opacity-[0.08] blur-2xl transition-opacity duration-300 group-hover:opacity-[0.15]`}
                    />

                    <div className="relative">
                      <div className="mb-5 flex items-start justify-between">
                        <div
                          className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${product.color} text-white shadow-lg transition-transform duration-300 group-hover:scale-110`}
                        >
                          <Icon size={24} />
                        </div>

                        <div className="inline-flex items-center gap-1.5 rounded-full bg-amber-100 px-2.5 py-1 text-[10px] font-semibold text-amber-700">
                          <Clock size={12} />
                          {product.status}
                        </div>
                      </div>

                      <h3 className="mb-2 text-xl font-bold text-slate-900">{product.name}</h3>
                      <p className="mb-5 text-sm leading-relaxed text-slate-600">{product.description}</p>

                      {/* Progress indicator — gives "upcoming" some concreteness */}
                      <div className="mb-5">
                        <div className="mb-1.5 flex items-center justify-between text-[10px] font-semibold uppercase tracking-wide text-slate-400">
                          <span>Development Progress</span>
                          <span className={product.iconColor}>{product.progress}%</span>
                        </div>
                        <div className="h-1.5 w-full overflow-hidden rounded-full bg-slate-100">
                          <div
                            className={`h-full rounded-full bg-gradient-to-r ${product.color} transition-all duration-700`}
                            style={{ width: `${product.progress}%` }}
                          />
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-1.5">
                        {product.features.map((feature, fIdx) => (
                          <span
                            key={fIdx}
                            className="rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 text-[10px] font-medium text-slate-600"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>

                      <div className="mt-6 border-t border-slate-100 pt-5">
                        <button
                          type="button"
                          className={`flex items-center gap-1.5 text-sm font-semibold ${product.iconColor} transition-colors hover:opacity-75`}
                        >
                          <Bell size={14} />
                          Notify Me at Launch
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* =========================================================
          CTA
      ========================================================= */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute left-0 right-0 top-0 z-10 leading-none">
          <svg viewBox="0 0 1440 80" className="h-14 w-full sm:h-20" preserveAspectRatio="none">
            <path d="M0,32 C240,80 480,0 720,24 C960,48 1200,96 1440,40 L1440,0 L0,0 Z" fill="white" />
          </svg>
        </div>

        <div
          className="absolute inset-0 scale-105 bg-cover bg-center"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?w=1600&h=900&fit=crop)",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-950/95 via-indigo-950/93 to-purple-950/90" />

        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -right-40 -top-40 h-80 w-80 animate-pulse rounded-full bg-white/10 blur-3xl" />
          <div className="absolute -bottom-40 -left-40 h-80 w-80 animate-pulse rounded-full bg-blue-400/20 blur-3xl delay-1000" />
          <div className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 animate-pulse rounded-full bg-indigo-400/10 blur-3xl delay-500" />
        </div>

        <div className="relative mx-auto max-w-4xl px-5 py-20 text-center text-white sm:px-8 lg:px-12 lg:py-28">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white/90 backdrop-blur-sm">
            <Rocket size={14} />
            Get Started
          </div>

          <h2 className="mb-4 text-3xl font-bold sm:text-4xl">
            Ready to Transform Your <span className="text-blue-200">Operations?</span>
          </h2>

          <p className="mx-auto mb-9 max-w-2xl text-base leading-relaxed text-blue-100 sm:text-lg">
            Explore our suite of products designed to streamline infrastructure
            management and billing.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <button
              type="button"
              className="group inline-flex items-center gap-2 rounded-xl bg-white px-8 py-3.5 text-sm font-semibold text-blue-700 shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl sm:text-base"
            >
              Request Demo
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </button>
            <button
              type="button"
              className="inline-flex items-center gap-2 rounded-xl border border-white/30 bg-white/10 px-8 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:bg-white/20 sm:text-base"
            >
              View All Products
            </button>
          </div>

          <div className="mt-10 flex flex-wrap justify-center gap-x-8 gap-y-4 border-t border-white/15 pt-8">
            <div className="flex items-center gap-2 text-sm text-blue-100">
              <Shield size={16} />
              <span>Secure Platform</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-blue-100">
              <Users size={16} />
              <span>50+ Utilities</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-blue-100">
              <Award size={16} />
              <span>ISO Certified</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}