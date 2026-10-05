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
  ArrowRight,
  Award,
  Zap,
  Bell,
  BarChart3,
  Receipt,
  Gauge,
  Map,
  Database,
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
      "The water tax billing system with billing cycles, customizable tariffs, meter tracking, zone-based management, bill generation, online payments, email/SMS alerts and reports. Simplifies billing, reduces manual work and ensures accuracy.",

    highlightFeatures: [
      "Billing Cycles",
      "Customizable Tariffs",
      "Zone-Based Management",
      "Online Payments",
    ],

    panelFeatures: [
      {
        icon: Receipt,
        title: "Bill Generation",
        value: "Automated",
      },
      {
        icon: Gauge,
        title: "Meter Tracking",
        value: "Enabled",
      },
      {
        icon: BarChart3,
        title: "Reports",
        value: "Real-time",
      },
      {
        icon: Database,
        title: "Data Management",
        value: "Centralized",
      },
    ],

    status: "Live From 7 July",
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
      color: "from-cyan-600 to-teal-700",
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
      color: "from-emerald-600 to-teal-700",
      borderColor: "border-emerald-200",
      iconColor: "text-emerald-600",
    },
  ],
};

/* ============================================================
   BENEFITS
============================================================ */

const benefits = [
  {
    icon: Shield,
    title: "Simplifies Billing",
    description:
      "Streamlined billing processes reduce manual work and operational complexity.",
  },
  {
    icon: RefreshCw,
    title: "Reduces Manual Work",
    description:
      "Automation of routine tasks allows teams to focus on essential operations.",
  },
  {
    icon: CheckCircle,
    title: "Ensures Accuracy",
    description:
      "Precise calculations and verification help minimize billing errors.",
  },
  {
    icon: PieChart,
    title: "Better Insights",
    description:
      "Data-driven reports provide clearer visibility into billing operations.",
  },
  {
    icon: WifiOff,
    title: "Offline Support",
    description:
      "Continue essential operations even when internet connectivity is unavailable.",
  },
  {
    icon: FileBarChart,
    title: "Automated Reports",
    description:
      "Generate structured reports for monitoring, analysis and administration.",
  },
];

/* ============================================================
   STATS
============================================================ */

const stats = [
  {
    value: "4+",
    label: "Products",
    icon: Layers,
  },
  {
    value: "1",
    label: "Live Now",
    icon: Rocket,
  },
  {
    value: "3",
    label: "Launching Soon",
    icon: Clock,
  },
  {
    value: "100%",
    label: "Customer Focused",
    icon: Users,
  },
];

/* ============================================================
   HERO
============================================================ */

function Hero() {
  return (
    <section className="relative isolate overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${sigmaToolboxHeroBg})`,
        }}
      />

      {/* Clean overlay */}
      <div className="absolute inset-0 bg-white/70" />

      <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/75 to-blue-50/50" />

      {/* Subtle glow */}
      <div className="pointer-events-none absolute -right-40 top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-blue-400/10 blur-3xl" />

      <div className="relative mx-auto flex min-h-[500px] max-w-[1440px] items-center px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="w-full">
          <div className="mx-auto max-w-4xl text-center">
            {/* Badge */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/90 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.18em] text-blue-700 shadow-sm backdrop-blur-md sm:text-xs">
              <Cpu size={14} className="text-blue-600" />
              Sigma ToolBox
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
            </div>

            {/* Heading */}
            <h1 className="text-4xl font-bold leading-[1.08] tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
              Planning, Modelling,{" "}
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 bg-clip-text text-transparent">
                Managing
              </span>{" "}
              Infrastructure
            </h1>

            {/* Description */}
            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base lg:text-lg">
              Comprehensive digital solutions for water utilities and
              infrastructure management — built by engineers who understand
              the field.
            </p>
          </div>

          {/* Stats */}
          <div className="mx-auto mt-10 grid max-w-4xl grid-cols-2 overflow-hidden rounded-2xl border border-slate-200 bg-white/90 shadow-xl shadow-slate-900/5 backdrop-blur-md sm:grid-cols-4">
            {stats.map((stat, index) => {
              const Icon = stat.icon;

              return (
                <div
                  key={stat.label}
                  className={`flex items-center justify-center gap-3 px-4 py-4 sm:py-5 ${
                    index !== 0
                      ? "border-t border-slate-100 sm:border-l sm:border-t-0"
                      : ""
                  } ${
                    index === 2
                      ? "border-l border-slate-100"
                      : ""
                  }`}
                >
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                    <Icon size={16} />
                  </div>

                  <div className="text-left leading-tight">
                    <div className="text-lg font-bold text-slate-900">
                      {stat.value}
                    </div>

                    <div className="text-[10px] font-medium uppercase tracking-wide text-slate-400">
                      {stat.label}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   PRODUCT NAVIGATION
============================================================ */

function ProductNavigation({ activeProduct, setActiveProduct }) {
  return (
    <section className="sticky top-0 z-30 border-b border-slate-200/80 bg-white/95 px-4 py-3 backdrop-blur-xl sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-[1440px] justify-center">
        <div className="inline-flex rounded-xl border border-slate-200 bg-slate-100/80 p-1">
          {/* Aquabill */}
          <button
            type="button"
            onClick={() => setActiveProduct("Aquabill")}
            className={`flex items-center gap-2 rounded-lg px-4 py-2.5 text-xs font-semibold transition-all duration-300 sm:px-6 sm:text-sm ${
              activeProduct === "Aquabill"
                ? "bg-white text-blue-700 shadow-sm"
                : "text-slate-500 hover:text-slate-800"
            }`}
          >
            <CreditCard size={15} />

            Aquabill

            <span
              className={`rounded-full px-2 py-0.5 text-[9px] font-bold uppercase tracking-wide ${
                activeProduct === "Aquabill"
                  ? "bg-emerald-100 text-emerald-700"
                  : "bg-white text-slate-400"
              }`}
            >
              Live
            </span>
          </button>

          {/* Upcoming */}
          <button
            type="button"
            onClick={() => setActiveProduct("Upcoming")}
            className={`flex items-center gap-2 rounded-lg px-4 py-2.5 text-xs font-semibold transition-all duration-300 sm:px-6 sm:text-sm ${
              activeProduct === "Upcoming"
                ? "bg-white text-blue-700 shadow-sm"
                : "text-slate-500 hover:text-slate-800"
            }`}
          >
            <Rocket size={15} />

            Upcoming

            <span
              className={`rounded-full px-2 py-0.5 text-[9px] font-bold uppercase tracking-wide ${
                activeProduct === "Upcoming"
                  ? "bg-amber-100 text-amber-700"
                  : "bg-white text-slate-400"
              }`}
            >
              Soon
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   AQUABILL DASHBOARD PREVIEW
============================================================ */

function AquabillDashboard() {
  const dashboardCards = [
    {
      icon: Receipt,
      label: "Bills Generated",
      value: "2,480",
      change: "+12.5%",
    },
    {
      icon: CreditCard,
      label: "Collections",
      value: "₹12.4L",
      change: "+8.2%",
    },
    {
      icon: Users,
      label: "Connections",
      value: "8,642",
      change: "+4.8%",
    },
    {
      icon: BarChart3,
      label: "Collection Rate",
      value: "91.6%",
      change: "+3.1%",
    },
  ];

  return (
    <div className="relative">
      {/* Background glow */}
      <div className="pointer-events-none absolute -inset-5 rounded-[32px] bg-blue-200/30 blur-3xl" />

      <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-2xl shadow-slate-900/10">
        {/* Browser header */}
        <div className="flex items-center justify-between border-b border-slate-100 bg-slate-50 px-4 py-3">
          <div className="flex items-center gap-2">
            <div className="flex gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />
              <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />
              <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />
            </div>

            <span className="ml-2 text-[10px] font-medium text-slate-400">
              app.aquabill
            </span>
          </div>

          <div className="flex items-center gap-1.5 text-[10px] font-semibold text-emerald-600">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
            Online
          </div>
        </div>

        {/* App header */}
        <div className="flex items-center justify-between bg-gradient-to-r from-blue-600 to-indigo-700 px-5 py-4 text-white">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/15">
              <CreditCard size={18} />
            </div>

            <div>
              <div className="text-sm font-bold">
                Aquabill
              </div>

              <div className="text-[10px] text-blue-100">
                Water Tax Billing
              </div>
            </div>
          </div>

          <div className="hidden rounded-lg bg-white/10 px-3 py-1.5 text-[10px] font-medium sm:block">
            Dashboard
          </div>
        </div>

        {/* Dashboard body */}
        <div className="bg-slate-50/70 p-4 sm:p-5">
          {/* Greeting */}
          <div className="mb-4">
            <div className="text-xs font-semibold text-slate-400">
              OVERVIEW
            </div>

            <div className="mt-1 text-base font-bold text-slate-900">
              Billing Dashboard
            </div>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-2 gap-3">
            {dashboardCards.map((card) => {
              const Icon = card.icon;

              return (
                <div
                  key={card.label}
                  className="rounded-xl border border-slate-200 bg-white p-3.5"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                      <Icon size={14} />
                    </div>

                    <span className="text-[9px] font-bold text-emerald-600">
                      {card.change}
                    </span>
                  </div>

                  <div className="mt-3 text-lg font-bold text-slate-900">
                    {card.value}
                  </div>

                  <div className="mt-0.5 text-[10px] text-slate-400">
                    {card.label}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Chart */}
          <div className="mt-3 rounded-xl border border-slate-200 bg-white p-4">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-xs font-bold text-slate-800">
                  Collection Overview
                </div>
                <div className="mt-0.5 text-[10px] text-slate-400">
                  Monthly performance
                </div>
              </div>

              <BarChart3 size={16} className="text-blue-500" />
            </div>

            {/* Fake chart */}
            <div className="mt-5 flex h-20 items-end gap-2">
              {[35, 48, 42, 65, 55, 78, 70, 88, 76, 94].map(
                (height, index) => (
                  <div
                    key={index}
                    className="flex-1 rounded-t-md bg-gradient-to-t from-blue-600 to-cyan-400 opacity-80"
                    style={{
                      height: `${height}%`,
                    }}
                  />
                )
              )}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between border-t border-slate-100 bg-white px-5 py-3">
          <div className="flex items-center gap-2 text-[10px] text-slate-400">
            <Zap size={12} className="text-amber-500" />
            Real-time sync enabled
          </div>

          <span className="text-[10px] font-semibold text-slate-400">
            Updated just now
          </span>
        </div>
      </div>
    </div>
  );
}

/* ============================================================
   AQUABILL PRODUCT SECTION
============================================================ */

function AquabillSection() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-slate-200 bg-gradient-to-br from-blue-50/80 via-white to-indigo-50/40 px-4 py-14 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        {/* Subtle background elements */}
        <div className="pointer-events-none absolute -right-32 top-0 h-80 w-80 rounded-full bg-blue-200/20 blur-3xl" />

        <div className="relative mx-auto max-w-[1440px]">
          <div className="grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16 xl:gap-20">
            {/* LEFT */}
            <div className="max-w-2xl">
              {/* Status */}
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1.5 text-xs font-bold text-emerald-700">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                {products.live.status}
              </div>

              {/* Product heading */}
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-700 text-white shadow-lg shadow-blue-600/20">
                  <CreditCard size={26} />
                </div>

                <div>
                  <h2 className="text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                    {products.live.name}
                  </h2>

                  <p className="mt-1 text-xs font-bold uppercase tracking-[0.15em] text-blue-600 sm:text-sm">
                    {products.live.tagline}
                  </p>
                </div>
              </div>

              {/* Description */}
              <p className="mt-6 text-sm leading-7 text-slate-600 sm:text-base">
                {products.live.description}
              </p>

              {/* Feature pills */}
              <div className="mt-7 flex flex-wrap gap-2">
                {products.live.highlightFeatures.map(
                  (feature) => (
                    <span
                      key={feature}
                      className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-3.5 py-2 text-xs font-semibold text-slate-700 shadow-sm"
                    >
                      <CheckCircle
                        size={13}
                        className="text-blue-600"
                      />

                      {feature}
                    </span>
                  )
                )}
              </div>

              {/* CTA */}
              {/* <div className="mt-8 flex flex-wrap items-center gap-4">
                <button
                  type="button"
                  className="group inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition-all duration-300 hover:bg-blue-700 hover:shadow-xl hover:shadow-blue-600/25"
                >
                  Explore Aquabill
                  <ArrowRight
                    size={16}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </button>

                <span className="text-xs font-medium text-slate-400">
                  Built for water utilities
                </span>
              </div> */}
            </div>

            {/* RIGHT */}
            <AquabillDashboard />
          </div>
        </div>
      </section>

      {/* ========================================================
          BENEFITS
      ======================================================== */}

      <section className="border-b border-slate-200 bg-white px-4 py-14 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-[1440px]">
          {/* Section heading */}
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-blue-50 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.16em] text-blue-700">
              <Shield size={13} />
              Why Aquabill
            </div>

            <h2 className="text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl">
              Everything You Need for{" "}
              <span className="text-blue-600">
                Smarter Billing
              </span>
            </h2>

            <p className="mt-3 text-sm leading-6 text-slate-500">
              Designed to simplify day-to-day billing operations while
              providing better visibility and control.
            </p>
          </div>

          {/* Benefits */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map((benefit) => {
              const Icon = benefit.icon;

              return (
                <div
                  key={benefit.title}
                  className="group rounded-2xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:border-blue-200 hover:shadow-lg hover:shadow-slate-200/60"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600 transition-colors duration-300 group-hover:bg-blue-600 group-hover:text-white">
                      <Icon size={20} />
                    </div>

                    <div>
                      <h3 className="text-sm font-bold text-slate-900">
                        {benefit.title}
                      </h3>

                      <p className="mt-1.5 text-sm leading-6 text-slate-500">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

/* ============================================================
   UPCOMING PRODUCTS
============================================================ */

function UpcomingProducts() {
  return (
    <section className="border-b border-slate-200 bg-slate-50 px-4 py-14 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-[1440px]">
        {/* Heading */}
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-amber-50 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.16em] text-amber-700">
            <Clock size={13} />
            Coming Soon
          </div>

          <h2 className="text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl">
            Upcoming{" "}
            <span className="text-blue-600">
              Products
            </span>
          </h2>

          <p className="mt-3 text-sm leading-6 text-slate-500">
            New digital solutions currently being developed for water
            and infrastructure management.
          </p>
        </div>

        {/* Product cards */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {products.upcoming.map((product) => {
            const Icon = product.icon;

            return (
              <article
                key={product.name}
                className={`group relative overflow-hidden rounded-3xl border ${product.borderColor} bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-8`}
              >
                {/* Decorative corner */}
                <div
                  className={`pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-gradient-to-br ${product.color} opacity-[0.06] blur-2xl transition-opacity duration-300 group-hover:opacity-[0.12]`}
                />

                <div className="relative">
                  {/* Top */}
                  <div className="flex items-start justify-between gap-4">
                    <div
                      className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${product.color} text-white shadow-lg`}
                    >
                      <Icon size={24} />
                    </div>

                    <div className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-amber-50 px-3 py-1.5 text-[10px] font-bold text-amber-700">
                      <Clock size={12} />
                      {product.status}
                    </div>
                  </div>

                  {/* Name */}
                  <h3 className="mt-6 text-xl font-bold tracking-tight text-slate-900">
                    {product.name}
                  </h3>

                  {/* Description */}
                  <p className="mt-2 max-w-xl text-sm leading-6 text-slate-500">
                    {product.description}
                  </p>

                  {/* Features */}
                  <div className="mt-6 grid grid-cols-1 gap-2 sm:grid-cols-2">
                    {product.features.map((feature) => (
                      <div
                        key={feature}
                        className="flex items-center gap-2 rounded-xl border border-slate-100 bg-slate-50 px-3 py-2.5"
                      >
                        <CheckCircle
                          size={14}
                          className={product.iconColor}
                        />

                        <span className="text-xs font-medium text-slate-600">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Bottom */}
                  <div className="mt-7 flex items-center justify-between border-t border-slate-100 pt-5">
                    <span className="text-xs font-medium text-slate-400">
                      More details coming soon
                    </span>

                    <button
                      type="button"
                      className={`inline-flex items-center gap-1.5 text-xs font-bold ${product.iconColor} transition-opacity hover:opacity-70`}
                    >
                      <Bell size={14} />
                      Notify Me
                    </button>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   CTA
============================================================ */

function CTA() {
  return (
    <section className="relative overflow-hidden bg-slate-950 px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
      {/* Background grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      {/* Glow */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-[400px] w-[700px] -translate-x-1/2 rounded-full bg-blue-600/20 blur-3xl" />

      <div className="relative mx-auto max-w-4xl text-center">
        {/* Badge */}
        <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.16em] text-blue-200 backdrop-blur-sm">
          <Rocket size={13} />
          Get Started
        </div>

        {/* Heading */}
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
          Build Better Infrastructure
          <span className="block text-blue-300">
            with Sigma ToolBox
          </span>
        </h2>

        {/* Description */}
        <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">
          Explore digital solutions designed to simplify infrastructure
          management, improve operational visibility and support smarter
          decision-making.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <button
            type="button"
            className="group inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-bold text-slate-900 shadow-xl transition-all duration-300 hover:bg-blue-50"
          >
            Request Demo

            <ArrowRight
              size={17}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </button>

          <button
            type="button"
            className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-white/10"
          >
            View Products
          </button>
        </div>

        {/* Trust points */}
        <div className="mt-10 flex flex-wrap justify-center gap-x-7 gap-y-3 border-t border-white/10 pt-7">
          <div className="flex items-center gap-2 text-xs text-slate-400">
            <Shield size={14} className="text-blue-300" />
            Secure Platform
          </div>

          <div className="flex items-center gap-2 text-xs text-slate-400">
            <Users size={14} className="text-blue-300" />
            Utility Focused
          </div>

          <div className="flex items-center gap-2 text-xs text-slate-400">
            <Award size={14} className="text-blue-300" />
            Engineering Driven
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   PAGE
============================================================ */

export default function SigmaToolboxPage() {
  const [activeProduct, setActiveProduct] = useState("Aquabill");

  return (
    <div className="min-h-screen bg-white font-sans text-slate-800 antialiased">
      {/* HERO */}
      <Hero />

      {/* PRODUCT NAVIGATION */}
      <ProductNavigation
        activeProduct={activeProduct}
        setActiveProduct={setActiveProduct}
      />

      {/* AQUABILL */}
      {activeProduct === "Aquabill" && <AquabillSection />}

      {/* UPCOMING */}
      {activeProduct === "Upcoming" && <UpcomingProducts />}

      {/* CTA */}
      <CTA />
    </div>
  );
}