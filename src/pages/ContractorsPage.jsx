import React, { useState, useEffect, useMemo } from "react";
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
const cloudinaryImages = [
  "https://res.cloudinary.com/ddpunpqre/image/upload/v1791624678/2_s2use8.jpg",
  "https://res.cloudinary.com/ddpunpqre/image/upload/v1791624677/1_nqbooc.jpg",
  "https://res.cloudinary.com/ddpunpqre/image/upload/v1791624679/5_gfnjg6.jpg",
  "https://res.cloudinary.com/ddpunpqre/image/upload/v1791624678/3_obnhmy.jpg",
  "https://res.cloudinary.com/ddpunpqre/image/upload/v1791624680/8_qaeyki.png",
  "https://res.cloudinary.com/ddpunpqre/image/upload/v1791624680/7_cbhzdi.png",
  "https://res.cloudinary.com/ddpunpqre/image/upload/v1791624680/5_qayuna.png",
  "https://res.cloudinary.com/ddpunpqre/image/upload/v1791624679/6_dpwwpy.png",
  "https://res.cloudinary.com/ddpunpqre/image/upload/v1791624679/5_gfnjg6.jpg",
];

const getFolderImages = (folderName) => {
  if (folderName.toLowerCase() === "renewable energy") {
    return cloudinaryImages;
  }

  return Object.entries(contractorImages)
    .filter(([path]) =>
      path.toLowerCase().includes(folderName.toLowerCase())
    )
    .sort(([a], [b]) =>
      a.localeCompare(b, undefined, {
        numeric: true,
        sensitivity: "base",
      })
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

/* =========================================================
   SERVICE CARD — each service owns its own slider state
========================================================= */
function ServiceCard({ service }) {
  const images = useMemo(() => getFolderImages(service.folder), [service.folder]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying || images.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, images.length]);

  const nextSlide = () => {
    if (!images.length) return;
    setCurrentSlide((prev) => (prev + 1) % images.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    if (!images.length) return;
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
    setIsAutoPlaying(false);
  };

  const toggleAutoPlay = () => setIsAutoPlaying((prev) => !prev);

  return (
    <div className="grid grid-cols-1 items-stretch gap-6 lg:h-[420px] lg:grid-cols-2 lg:gap-8">
      {/* -----------------------------------------------
          IMAGE SLIDER
      ------------------------------------------------ */}
      <div className="group relative h-[220px] overflow-hidden rounded-2xl bg-slate-100 shadow-lg sm:h-[300px] lg:h-full">
        {images.length > 0 ? (
          <img
            src={images[currentSlide]}
            alt={`${service.title} ${currentSlide + 1}`}
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
            {service.title}
          </p>
          <h3 className="mt-1 text-base font-bold sm:text-xl">Project Gallery</h3>
          {images.length > 0 && (
            <div className="mt-1.5 inline-flex rounded-full bg-white/20 px-2.5 py-0.5 text-[9px] font-medium backdrop-blur-sm sm:mt-2 sm:px-3 sm:py-1 sm:text-[10px]">
              {currentSlide + 1} / {images.length}
            </div>
          )}
        </div>

        {images.length > 1 && (
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
              {isAutoPlaying ? (
                <Pause size={12} className="sm:h-[14px] sm:w-[14px]" />
              ) : (
                <Play size={12} className="sm:h-[14px] sm:w-[14px]" />
              )}
            </button>

            {/* Dots */}
            <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-1.5 sm:bottom-6">
              {images.map((_, index) => (
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
      <div className="flex min-h-0 flex-col">
        <div className="flex min-h-0 flex-1 flex-col rounded-2xl border border-slate-200 bg-gradient-to-br from-slate-50 to-white p-5 shadow-md sm:p-8">
          {/* Header (stays pinned) */}
          <div className="mb-4 flex shrink-0 items-center gap-3">
            <div className="shrink-0 rounded-xl bg-blue-100 p-2 text-blue-700">
              {React.createElement(service.icon, { size: 22 })}
            </div>
            <div>
              <h3 className="text-base font-bold text-slate-900 sm:text-xl">
                {service.title}
              </h3>
              {service.subtitle && (
                <p className="text-xs text-slate-500 sm:text-sm">
                  {service.subtitle}
                </p>
              )}
            </div>
          </div>

          {/* Items (scrolls if content overflows) */}
          <div className="mt-4 min-h-0 flex-1 space-y-2.5 overflow-y-auto pr-1 [scrollbar-color:theme(colors.slate.300)_transparent] [scrollbar-width:thin] sm:space-y-3">
            {service.items.map((item, idx) => (
              <div
                key={idx}
                className="flex items-start gap-2.5 rounded-xl border border-slate-100 bg-white p-3 transition-all hover:shadow-md sm:gap-3"
              >
                <CheckCircle
                  size={17}
                  className="mt-0.5 shrink-0 text-blue-600 sm:h-[18px] sm:w-[18px]"
                />
                <p className="text-xs leading-relaxed text-slate-700 sm:text-sm">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ContractorsPage() {
  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans antialiased">
      {/* =========================================================
          HERO
      ========================================================= */}
<section className="relative flex min-h-[300px] items-center justify-center overflow-hidden px-4 py-12 sm:min-h-[360px] sm:px-8 sm:py-16 lg:min-h-[400px] lg:px-12">          <div
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
       

          <h1 className="text-3xl font-bold leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-[3.5rem]">
            Engineering{" "}
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Contractors
            </span>
          </h1>

     

         
        </div>
      </section>

      {/* =========================================================
          MAIN SERVICES — ALL STACKED, SLIDER + CONTENT PER SERVICE
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

          <div className="space-y-10 sm:space-y-14">
            {serviceTabs.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

   
      {/* =========================================================
          MAP
      ========================================================= */}
      <ProjectMapSection />

    </div>
  );
}