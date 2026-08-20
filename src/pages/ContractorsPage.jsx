import React, { useState, useEffect } from "react";
import {
  Building2,
  Droplets,
  Sun,
  Zap,
  Gauge,
  Wrench,
  Activity,
  CheckCircle,
  ArrowRight,
  Award,
  Users,
  ChevronLeft,
  ChevronRight,
  Play,
  Pause,
  Shield,
} from "lucide-react";

import newcontractorshero from "../assets/new-contractors-hero.png";
import ProjectMapSection from "../components/ProjectMapSection";

const contractorImages = import.meta.glob(
  "../assets/contractorsPage/**/*.{png,jpg,jpeg,webp}",
  {
    eager: true,
    query: "?url",
    import: "default",
  }
);

const getFolderImages = (folderName) => {
  return Object.entries(contractorImages)
    .filter(([path]) => path.toLowerCase().includes(folderName.toLowerCase()))
    .sort(([a], [b]) =>
      a.localeCompare(b, undefined, { numeric: true, sensitivity: "base" })
    )
    .map(([, image]) => image);
};

const serviceTabs = [
  {
    id: 0,
    title: "New Water Supply Schemes",
    icon: Building2,
    folder: "water supply",
    items: [
      "Civil works such as water treatment plant, Jack-well, Elevated/Ground service Reservoirs, Pipe laying, House Connection and Metering.",
      "Electrical and Mechanical works such as Pumping and Treatment Machinery, LT-HT Pumping Stations, Substations etc.",
      "Instrumentation (SCADA) works to measure, control and analyze all the parameters such as Levels, Pressure, Energy, Quality etc.",
    ],
  },
  {
    id: 1,
    title: "Reforms & Renovation Projects",
    icon: Gauge,
    folder: "reforms",
    subtitle: "With Focus On NRW Reduction",
    items: [
      "Projects aiming of reducing cost, saving water involved in various water supply scheme items",
      "Pumping stations and machineries improvement",
      "Pipe-arrangement improvement",
      "Water and Energy Audits",
      "Leak Detection",
      "Monitoring systems",
      "Water Billing optimization",
    ],
  },
  {
    id: 2,
    title: "Renewable Energy – Solar Installations",
    icon: Sun,
    folder: "renewable energy",
    items: [
      "On Grid solar systems",
      "Off Grid solar systems",
      "Solar High Masts",
      "Solar Street Lights",
    ],
  },
];

export default function ContractorsPage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [activeServiceTab, setActiveServiceTab] = useState(0);

  const activeImages = getFolderImages(serviceTabs[activeServiceTab].folder);

  useEffect(() => {
    setCurrentSlide(0);
    setIsAutoPlaying(true);
  }, [activeServiceTab]);

  useEffect(() => {
    if (!isAutoPlaying || activeImages.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % activeImages.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, activeImages.length]);

  const nextSlide = () => {
    if (!activeImages.length) return;
    setCurrentSlide((prev) => (prev + 1) % activeImages.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    if (!activeImages.length) return;
    setCurrentSlide((prev) => (prev - 1 + activeImages.length) % activeImages.length);
    setIsAutoPlaying(false);
  };

  const toggleAutoPlay = () => setIsAutoPlaying((prev) => !prev);

  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans antialiased">
      {/* =========================================================
          HERO
      ========================================================= */}
      <section className="relative overflow-hidden px-4 py-14 sm:px-8 sm:py-20 lg:px-12">
        <div
          className="absolute inset-0 bg-white"
          style={{
            backgroundImage: `url(${newcontractorshero})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        />
        <div className="absolute inset-0 bg-white/5" />

        <div className="relative z-10 mx-auto max-w-7xl text-center">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-200/50 bg-white/75 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-wider text-blue-700 shadow-sm backdrop-blur-md sm:mb-6 sm:px-4 sm:py-2 sm:text-xs">
            <Wrench size={13} className="sm:h-[14px] sm:w-[14px]" />
            Our Services
          </div>

          <h1 className="text-3xl font-bold leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-[3.5rem]">
            Engineering{" "}
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Contractors
            </span>
          </h1>

          <p className="mx-auto mt-3 max-w-2xl px-2 text-xs leading-relaxed text-slate-600 sm:mt-4 sm:text-base">
            Delivering comprehensive engineering solutions for water infrastructure
            projects with excellence and innovation.
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-2 sm:mt-8 sm:gap-3">
            <div className="flex items-center gap-1.5 rounded-full border border-blue-100 bg-white/80 px-3 py-1.5 text-[10px] font-medium text-slate-600 shadow-sm backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md sm:gap-2 sm:px-4 sm:py-2 sm:text-xs">
              <Droplets size={13} className="shrink-0 text-blue-600 sm:h-[15px] sm:w-[15px]" />
              Water Infrastructure
            </div>

            <div className="flex items-center gap-1.5 rounded-full border border-blue-100 bg-white/80 px-3 py-1.5 text-[10px] font-medium text-slate-600 shadow-sm backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md sm:gap-2 sm:px-4 sm:py-2 sm:text-xs">
              <Zap size={13} className="shrink-0 text-blue-600 sm:h-[15px] sm:w-[15px]" />
              Electrical & Mechanical
            </div>

            <div className="flex items-center gap-1.5 rounded-full border border-blue-100 bg-white/80 px-3 py-1.5 text-[10px] font-medium text-slate-600 shadow-sm backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md sm:gap-2 sm:px-4 sm:py-2 sm:text-xs">
              <Activity size={13} className="shrink-0 text-blue-600 sm:h-[15px] sm:w-[15px]" />
              SCADA & Automation
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          MAIN SERVICES — SLIDER + CONTENT
      ========================================================= */}
      <section className="border-b border-slate-100 bg-white px-4 py-12 sm:px-8 sm:py-16 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 text-center sm:mb-12">
            <span className="text-[10px] font-semibold tracking-widest text-blue-700 uppercase sm:text-xs">
              What We Do
            </span>
            <h2 className="mt-2 text-xl font-bold text-slate-900 sm:text-3xl">
              Our Core{" "}
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Engineering Services
              </span>
            </h2>
          </div>

          {/* Service Tabs — horizontally scrollable on mobile instead of
              wrapping into a cramped multi-line block */}
          <div className="mb-8 -mx-4 flex gap-2 overflow-x-auto px-4 pb-2 sm:mb-10 sm:mx-0 sm:flex-wrap sm:justify-center sm:overflow-visible sm:px-0 sm:pb-0 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {serviceTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveServiceTab(tab.id)}
                className={`flex shrink-0 items-center gap-1.5 whitespace-nowrap rounded-xl px-3.5 py-2 text-xs font-medium transition-all duration-300 sm:gap-2 sm:px-4 sm:py-2.5 sm:text-sm ${
                  activeServiceTab === tab.id
                    ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-600/25"
                    : "bg-slate-50 text-slate-600 hover:bg-slate-100"
                }`}
              >
                <tab.icon size={15} className="shrink-0 sm:h-4 sm:w-4" />
                {tab.title}
              </button>
            ))}
          </div>

          {/* Split Layout: Image Slider | Content */}
<div className="grid grid-cols-1 items-stretch gap-6 lg:grid-cols-2 lg:gap-8">            {/* -----------------------------------------------
           
            ------------------------------------------------ */}
<div className="group relative h-[220px] overflow-hidden rounded-2xl bg-slate-100 shadow-lg sm:h-[300px] lg:h-[380px]">
        {activeImages.length > 0 ? (
                <img
                  src={activeImages[currentSlide]}
                  alt={`${serviceTabs[activeServiceTab].title} ${currentSlide + 1}`}
                  className="h-full w-full object-cover transition-all duration-700"
                />
              ) : (
                <div className="flex h-full items-center justify-center text-sm text-slate-400">
                  No images available
                </div>
              )}

              {/* Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />

              {/* Info */}
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white sm:p-6">
                <p className="text-[10px] font-medium uppercase tracking-wider text-white/70 sm:text-xs">
                  {serviceTabs[activeServiceTab].title}
                </p>
                <h3 className="mt-1 text-base font-bold sm:text-xl">Project Gallery</h3>
                {activeImages.length > 0 && (
                  <div className="mt-1.5 inline-flex rounded-full bg-white/20 px-2.5 py-0.5 text-[9px] font-medium backdrop-blur-sm sm:mt-2 sm:px-3 sm:py-1 sm:text-[10px]">
                    {currentSlide + 1} / {activeImages.length}
                  </div>
                )}
              </div>

              {activeImages.length > 1 && (
                <>
                  {/* Prev / Next — always visible on touch devices (no hover),
                      fade in on hover for desktop */}
                  <button
                    type="button"
                    onClick={prevSlide}
                    aria-label="Previous image"
                    className="absolute left-2 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-black/45 text-white opacity-100 shadow-lg backdrop-blur-sm transition-all duration-300 hover:bg-black/65 sm:left-3 sm:h-9 sm:w-9 lg:opacity-0 lg:group-hover:opacity-100"
                  >
                    <ChevronLeft size={16} className="sm:h-[18px] sm:w-[18px]" />
                  </button>

                  <button
                    type="button"
                    onClick={nextSlide}
                    aria-label="Next image"
                    className="absolute right-2 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-black/45 text-white opacity-100 shadow-lg backdrop-blur-sm transition-all duration-300 hover:bg-black/65 sm:right-3 sm:h-9 sm:w-9 lg:opacity-0 lg:group-hover:opacity-100"
                  >
                    <ChevronRight size={16} className="sm:h-[18px] sm:w-[18px]" />
                  </button>

                  {/* Auto-play toggle */}
                  <button
                    type="button"
                    onClick={toggleAutoPlay}
                    aria-label={isAutoPlaying ? "Pause slideshow" : "Play slideshow"}
                    className="absolute right-2 top-2 flex h-7 w-7 items-center justify-center rounded-full bg-black/45 text-white shadow-lg backdrop-blur-sm transition-all duration-300 hover:bg-black/65 sm:right-3 sm:top-3 sm:h-8 sm:w-8"
                  >
                    {isAutoPlaying ? <Pause size={12} className="sm:h-[14px] sm:w-[14px]" /> : <Play size={12} className="sm:h-[14px] sm:w-[14px]" />}
                  </button>

                  {/* Dots */}
                  <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-1.5 sm:bottom-6">
                    {activeImages.map((_, index) => (
                      <button
                        key={index}
                        type="button"
                        onClick={() => {
                          setCurrentSlide(index);
                          setIsAutoPlaying(false);
                        }}
                        aria-label={`Show image ${index + 1}`}
                        className={`h-1.5 rounded-full transition-all duration-300 ${
                          index === currentSlide
                            ? "w-5 bg-white sm:w-6"
                            : "w-1.5 bg-white/50 hover:bg-white/80"
                        }`}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>

            {/* -----------------------------------------------
                SERVICE CONTENT
            ------------------------------------------------ */}
            <div className="flex flex-col justify-center">
              <div className="rounded-2xl border border-slate-200 bg-gradient-to-br from-slate-50 to-white p-5 shadow-md sm:p-8">
                <div className="mb-4 flex items-center gap-3">
                  <div className="shrink-0 rounded-xl bg-blue-100 p-2 text-blue-700">
                    {React.createElement(serviceTabs[activeServiceTab].icon, { size: 22 })}
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-slate-900 sm:text-xl">
                      {serviceTabs[activeServiceTab].title}
                    </h3>
                    {serviceTabs[activeServiceTab].subtitle && (
                      <p className="text-xs text-slate-500 sm:text-sm">
                        {serviceTabs[activeServiceTab].subtitle}
                      </p>
                    )}
                  </div>
                </div>

                <div className="mt-4 space-y-2.5 sm:space-y-3">
                  {serviceTabs[activeServiceTab].items.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-2.5 rounded-xl border border-slate-100 bg-white p-3 transition-all hover:shadow-md sm:gap-3"
                    >
                      <CheckCircle size={17} className="mt-0.5 shrink-0 text-blue-600 sm:h-[18px] sm:w-[18px]" />
                      <p className="text-xs leading-relaxed text-slate-700 sm:text-sm">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          STATS
      ========================================================= */}
      <section className="border-y border-slate-100 bg-gradient-to-br from-slate-50 to-blue-50/30 px-4 py-12 sm:px-8 sm:py-16 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-6">
            {[
              { value: "150+", label: "Projects Executed", icon: Building2 },
              { value: "50+", label: "Water Schemes", icon: Droplets },
              { value: "30+", label: "Solar Installations", icon: Sun },
              { value: "98%", label: "Client Satisfaction", icon: Users },
            ].map((stat) => {
              const Icon = stat.icon;
              return (
                <div key={stat.label} className="group text-center">
                  <div className="mb-2 inline-flex rounded-xl bg-white p-2.5 text-blue-600 shadow-md transition-transform group-hover:scale-110 sm:mb-3 sm:p-3">
                    <Icon size={20} className="sm:h-6 sm:w-6" />
                  </div>
                  <div className="text-xl font-bold tracking-tight text-slate-900 sm:text-3xl">
                    {stat.value}
                  </div>
                  <div className="mt-0.5 text-[10px] text-slate-500 sm:text-xs">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================
          MAP
      ========================================================= */}
<ProjectMapSection/>

      {/* =========================================================
          CTA
      ========================================================= */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute top-0 left-0 right-0 z-20 leading-none">
          <svg viewBox="0 0 1440 120" className="h-12 w-full sm:h-16 md:h-20 lg:h-24" preserveAspectRatio="none">
            <path
              d="M0,45 C180,105 360,105 540,55 C720,5 900,5 1080,55 C1260,105 1350,105 1440,55 L1440,0 L0,0 Z"
              fill="white"
            />
          </svg>
        </div>

        <div className="relative bg-gradient-to-br from-blue-700 via-blue-800 to-indigo-900 pt-20 pb-14 sm:pt-28 sm:pb-16 lg:pt-32 lg:pb-20">
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <div className="absolute -left-32 -top-32 h-[300px] w-[300px] rounded-full bg-blue-400/20 blur-3xl sm:h-[430px] sm:w-[430px]" />
            <div className="absolute -right-40 top-1/4 h-[300px] w-[300px] rounded-full bg-indigo-400/20 blur-3xl sm:h-[450px] sm:w-[450px]" />
            <div className="absolute -bottom-40 left-1/3 h-[280px] w-[280px] rounded-full bg-cyan-400/10 blur-3xl sm:h-[420px] sm:w-[420px]" />
            <div className="absolute left-1/2 top-1/2 h-[200px] w-[200px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-400/10 blur-3xl sm:h-[300px] sm:w-[300px]" />
          </div>

          <div
            className="pointer-events-none absolute inset-0 opacity-[0.055]"
            style={{
              backgroundImage: `
                linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)
              `,
              backgroundSize: "45px 45px",
            }}
          />

          <div className="pointer-events-none absolute inset-0 hidden sm:block">
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="absolute h-1.5 w-1.5 animate-float rounded-full bg-white/20 sm:h-2 sm:w-2"
                style={{
                  top: `${10 + i * 11}%`,
                  left: `${5 + i * 12}%`,
                  animationDelay: `${i * 0.5}s`,
                  animationDuration: `${4 + i}s`,
                }}
              />
            ))}
          </div>

          <div className="pointer-events-none absolute top-1/3 right-4 hidden h-28 w-28 rounded-full border border-white/10 sm:right-14 sm:block sm:h-40 sm:w-40" />
          <div className="pointer-events-none absolute top-[38%] right-10 hidden h-16 w-16 rounded-full border border-white/10 sm:right-24 sm:block sm:h-24 sm:w-24" />
          <div className="pointer-events-none absolute bottom-8 left-6 hidden h-20 w-20 rounded-full border border-white/10 sm:left-20 sm:block" />

          <div className="relative z-10 mx-auto max-w-5xl px-4 text-center sm:px-8">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-[9px] font-semibold uppercase tracking-[0.15em] text-blue-100 backdrop-blur-md sm:mb-5 sm:px-4 sm:py-2 sm:text-xs">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-300 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-300" />
              </span>
              Engineering Excellence
            </div>

            <h2 className="mb-4 text-2xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
              Ready to Start Your{" "}
              <span className="bg-gradient-to-r from-cyan-200 via-blue-100 to-white bg-clip-text text-transparent">
                Project?
              </span>
            </h2>

            <p className="mx-auto mb-7 max-w-2xl px-2 text-xs leading-relaxed text-blue-100/90 sm:mb-8 sm:text-base md:text-lg">
              Let's discuss your engineering contracting needs and create sustainable
              water infrastructure solutions.
            </p>

            <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
              <button className="group inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 text-xs font-semibold text-blue-700 shadow-xl shadow-blue-950/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl sm:px-8 sm:py-3.5 sm:text-base">
                Get in Touch
                <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1 sm:h-[18px] sm:w-[18px]" />
              </button>

              <button className="group inline-flex items-center gap-2 rounded-xl border border-white/25 bg-white/10 px-6 py-3 text-xs font-semibold text-white backdrop-blur-md transition-all duration-300 hover:scale-105 hover:border-white/40 hover:bg-white/20 sm:px-8 sm:py-3.5 sm:text-base">
                Learn More
                <ArrowRight size={15} className="opacity-70 transition-transform group-hover:translate-x-1 sm:h-[17px] sm:w-[17px]" />
              </button>
            </div>

            <div className="mt-8 flex flex-wrap justify-center gap-x-5 gap-y-3 border-t border-white/15 pt-6 sm:mt-9 sm:gap-x-7 sm:gap-y-4 sm:pt-7">
              <div className="flex items-center gap-2 text-[11px] text-blue-100 sm:text-sm">
                <div className="flex h-7 w-7 items-center justify-center rounded-lg border border-white/10 bg-white/10 sm:h-8 sm:w-8">
                  <Shield size={14} className="text-blue-100 sm:h-[15px] sm:w-[15px]" />
                </div>
                <span>ISO Certified</span>
              </div>

              <div className="flex items-center gap-2 text-[11px] text-blue-100 sm:text-sm">
                <div className="flex h-7 w-7 items-center justify-center rounded-lg border border-white/10 bg-white/10 sm:h-8 sm:w-8">
                  <Award size={14} className="text-blue-100 sm:h-[15px] sm:w-[15px]" />
                </div>
                <span>15+ Years Experience</span>
              </div>

              <div className="flex items-center gap-2 text-[11px] text-blue-100 sm:text-sm">
                <div className="flex h-7 w-7 items-center justify-center rounded-lg border border-white/10 bg-white/10 sm:h-8 sm:w-8">
                  <Users size={14} className="text-blue-100 sm:h-[15px] sm:w-[15px]" />
                </div>
                <span>300+ Projects</span>
              </div>
            </div>
          </div>
        </div>

        <style>{`
          @keyframes float {
            0%, 100% { transform: translateY(0) translateX(0); opacity: 0.2; }
            25% { transform: translateY(-15px) translateX(8px); opacity: 0.55; }
            50% { transform: translateY(-5px) translateX(-5px); opacity: 0.3; }
            75% { transform: translateY(12px) translateX(5px); opacity: 0.5; }
          }
          .animate-float {
            animation: float 5s ease-in-out infinite;
          }
          @media (prefers-reduced-motion: reduce) {
            .animate-float { animation: none; }
          }
        `}</style>
      </section>
    </div>
  );
}