import { useState, useEffect, useRef } from "react";
import {
  Building2,
  FlaskConical,
  Boxes,
  Globe2,
  TrendingUp,
  Calendar,
  MapPin,
  ChevronRight,
  X,
  BatteryCharging,
  Waves,
  Zap,
  BriefcaseBusiness,
  Droplets,
} from "lucide-react";

/* ============================================================
   JOURNEY DATA
   NOTE: shadowColor added as a STATIC class string because
   Tailwind JIT cannot resolve dynamically-built class names
   like `shadow-${item.color.split(' ')[1]}/30`. That pattern
   was silently producing an empty/invalid class before.
============================================================ */

const journey = [
  {
    year: "2010",
    label: "Water Sector Focus",
    desc: "InfraPlan was incepted to cater for the water sector in India.",
    icon: Building2,
    color: "from-blue-600 to-blue-800",
    bgColor: "bg-blue-50",
    borderColor: "border-blue-200",
    textColor: "text-blue-700",
    shadowColor: "shadow-blue-600/30",
  },
  {
    year: "2011",
    label: "Infrastructure Planning Services",
    desc: "Started providing infrastructure planning services for city development planning as well as city sanitation planning.",
    icon: Building2,
    color: "from-cyan-600 to-teal-800",
    bgColor: "bg-cyan-50",
    borderColor: "border-cyan-200",
    textColor: "text-cyan-700",
    shadowColor: "shadow-cyan-600/30",
  },
  {
    year: "2012",
    label: "Drinking Water Sector",
    desc: "Started multiple activities including planning, construction, and operational services for the drinking water sector.",
    icon: Droplets,
    color: "from-sky-600 to-cyan-800",
    bgColor: "bg-sky-50",
    borderColor: "border-sky-200",
    textColor: "text-sky-700",
    shadowColor: "shadow-sky-600/30",
  },
  {
    year: "2014",
    label: "International Expansion",
    desc: "InfraPlan's reach extended outside India. Executed model studies for a Hydro-Power project in Bhutan.",
    icon: Globe2,
    color: "from-indigo-600 to-purple-800",
    bgColor: "bg-indigo-50",
    borderColor: "border-indigo-200",
    textColor: "text-indigo-700",
    shadowColor: "shadow-indigo-600/30",
  },
  {
    year: "2017",
    label: "Jalswarajya-II Project",
    desc: "Appointed as a consultant for Ratnagiri district under Jalswarajya-II, a World Bank funded project.",
    icon: BriefcaseBusiness,
    color: "from-emerald-600 to-teal-800",
    bgColor: "bg-emerald-50",
    borderColor: "border-emerald-200",
    textColor: "text-emerald-700",
    shadowColor: "shadow-emerald-600/30",
  },
  {
    year: "2018",
    label: "Hydropower Projects in Laos",
    desc: "Executed model studies for multiple dam projects in Laos.",
    icon: Waves,
    color: "from-blue-600 to-cyan-800",
    bgColor: "bg-blue-50",
    borderColor: "border-blue-200",
    textColor: "text-blue-700",
    shadowColor: "shadow-blue-600/30",
  },
  {
    year: "2019",
    label: "Hydropower Project in Nepal",
    desc: "Services extended for a Hydropower project in Nepal for a 100 MW project.",
    icon: Zap,
    color: "from-amber-600 to-orange-800",
    bgColor: "bg-amber-50",
    borderColor: "border-amber-200",
    textColor: "text-amber-700",
    shadowColor: "shadow-amber-600/30",
  },
  {
    year: "2020",
    label: "River Estuary Model Studies",
    desc: "Model studies completed for a River Estuary in Georgia for a client in the Netherlands.",
    icon: FlaskConical,
    color: "from-teal-600 to-emerald-800",
    bgColor: "bg-teal-50",
    borderColor: "border-teal-200",
    textColor: "text-teal-700",
    shadowColor: "shadow-teal-600/30",
  },
  {
    year: "2022",
    label: "Sigma ToolBox Development",
    desc: "Started development of SaaS software tools to assist water supply authorities — Sigma ToolBox.",
    icon: Boxes,
    color: "from-violet-600 to-purple-800",
    bgColor: "bg-violet-50",
    borderColor: "border-violet-200",
    textColor: "text-violet-700",
    shadowColor: "shadow-violet-600/30",
  },
  {
    year: "2023",
    label: "Pakal Dul Hydrodynamic Studies",
    desc: "Studies for estimation of hydrodynamic forces on gates for a 165 m high dam (Pakal Dul HEP, 1000 MW) in India.",
    icon: Waves,
    color: "from-orange-600 to-red-800",
    bgColor: "bg-orange-50",
    borderColor: "border-orange-200",
    textColor: "text-orange-700",
    shadowColor: "shadow-orange-600/30",
  },
  {
    year: "2024",
    label: "Pumped Hydro Storage",
    desc: "Model studies conducted for the biggest Pumped Hydro Storage projects in India (1680 MW).",
    icon: BatteryCharging,
    color: "from-green-600 to-emerald-800",
    bgColor: "bg-green-50",
    borderColor: "border-green-200",
    textColor: "text-green-700",
    shadowColor: "shadow-green-600/30",
  },
  {
    year: "2025",
    label: "Continued Growth",
    desc: "Growth story continues with multiple projects in solar installations, model studies, and water supply rehabilitations.",
    icon: TrendingUp,
    color: "from-rose-600 to-pink-800",
    bgColor: "bg-rose-50",
    borderColor: "border-rose-200",
    textColor: "text-rose-700",
    shadowColor: "shadow-rose-600/30",
  },
];

/* ============================================================
   FULL HISTORY CARD (modal) — fixed min-height + line-clamp
   so cards line up regardless of description length
============================================================ */

function HistoryCard({ item, align = "left" }) {
  const Icon = item.icon;

  return (
    <div
      className={`
        group flex w-full max-w-md min-h-[190px] flex-col
        rounded-2xl border ${item.borderColor} bg-white p-5 shadow-sm
        transition-all duration-300 hover:-translate-y-1 hover:shadow-xl
      `}
    >
      <div
        className={`flex items-start gap-4 ${
          align === "right" ? "flex-row-reverse text-right" : ""
        }`}
      >
        <div
          className={`
            flex h-11 w-11 shrink-0 items-center justify-center rounded-xl
            bg-gradient-to-r ${item.color} text-white shadow-md
            transition-transform duration-300 group-hover:scale-110
          `}
        >
          <Icon size={19} />
        </div>

        <div className="flex min-w-0 flex-1 flex-col">
          <div
            className={`mb-1 flex items-center gap-2 ${
              align === "right" ? "justify-end" : ""
            }`}
          >
            <span className="text-xs font-bold text-slate-400">{item.year}</span>
          </div>

          <h3 className={`text-base font-bold leading-snug ${item.textColor}`}>
            {item.label}
          </h3>

          <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-slate-500">
            {item.desc}
          </p>

          <div
            className={`mt-auto flex items-center gap-1 pt-3 text-[11px] text-slate-400 ${
              align === "right" ? "justify-end" : ""
            }`}
          >
            <MapPin size={12} />
            <span>Global Impact</span>
            <ChevronRight size={12} />
          </div>
        </div>
      </div>
    </div>
  );
}

/* ============================================================
   MARQUEE NODE — extracted so each of the 3 duplicated sets
   renders identically; fixed card height via flex + line-clamp
============================================================ */

function MarqueeNode({ item, isActive, onEnter, onLeave }) {
  const Icon = item.icon;

  return (
    <div
      className="group flex w-[180px] shrink-0 flex-col items-center sm:w-[240px] md:w-[280px] lg:w-[300px]"
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
    >
      {/* NODE */}
      <div className="relative">
        <div
          className={`absolute inset-0 scale-150 rounded-full bg-gradient-to-r ${item.color} opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-20`}
        />
        <div
          className={`
            relative z-10 flex h-12 w-12 items-center justify-center rounded-full
            bg-gradient-to-r ${item.color} shadow-lg transition-all duration-500
            group-hover:scale-110 group-hover:shadow-2xl
            sm:h-14 sm:w-14 md:h-16 md:w-16
          `}
        >
          <Icon
            size={18}
            className="text-white transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110 sm:h-5 sm:w-5 md:h-6 md:w-6"
            strokeWidth={1.8}
          />
          <div className="absolute inset-0 animate-pulse rounded-full border-2 border-white/30 group-hover:animate-none" />
        </div>

        <div className="absolute -bottom-3 left-1/2 z-30 -translate-x-1/2 whitespace-nowrap rounded-full border border-slate-200 bg-white/95 px-2.5 py-0.5 text-[9px] font-extrabold text-slate-700 shadow-md backdrop-blur-sm sm:px-3 sm:text-[10px]">
          {item.year}
        </div>
      </div>

      {/* CONNECTOR */}
      <div className="relative h-4 w-0.5 bg-gradient-to-b from-blue-400/50 to-blue-400/20 transition-all duration-500 group-hover:from-blue-600 group-hover:to-blue-400 sm:h-6 md:h-8">
        <div
          className={`absolute bottom-0 left-1/2 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-blue-500 transition-all duration-300 group-hover:bg-blue-600 sm:h-2 sm:w-2 ${
            isActive ? "scale-150" : ""
          }`}
        />
      </div>

      {/* CARD — fixed height so every card matches regardless of text length */}
      <div
        className={`
          flex h-[130px] w-full flex-col rounded-xl border ${item.borderColor}
          bg-white/90 p-3 shadow-sm backdrop-blur-sm transition-all duration-500
          group-hover:-translate-y-1 group-hover:shadow-xl
          sm:h-[150px] sm:rounded-2xl sm:p-4
          md:h-[160px] md:p-5
          ${isActive ? "ring-2 ring-blue-500/20 shadow-xl" : ""}
        `}
      >
        <div className="flex h-full items-start gap-2 sm:gap-3">
          <div className={`h-8 w-0.5 shrink-0 rounded-full bg-gradient-to-b ${item.color} sm:h-10 sm:w-1`} />

          <div className="flex min-w-0 flex-1 flex-col">
            <h3
              className={`origin-left line-clamp-1 text-xs font-bold ${item.textColor} transition-transform duration-300 group-hover:scale-105 sm:text-sm md:text-base`}
            >
              {item.label}
            </h3>

            <p className="mt-0.5 line-clamp-3 text-[10px] leading-relaxed text-slate-500 sm:mt-1 sm:text-xs md:text-sm">
              {item.desc}
            </p>

            {/* <div className="mt-auto flex items-center gap-1 pt-1 text-[8px] text-slate-400 sm:pt-2 sm:text-[10px]">
              <MapPin size={10} className="sm:h-3 sm:w-3" />
              <span className="hidden xs:inline">Global Impact</span>
              <ChevronRight size={10} className="transition-transform group-hover:translate-x-1 sm:h-3 sm:w-3" />
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ============================================================
   JOURNEY SECTION
============================================================ */

export default function JourneySection() {
  const [isPaused, setIsPaused] = useState(false);
  const [activeKey, setActiveKey] = useState(null);
  const [showFullHistory, setShowFullHistory] = useState(false);

  const marqueeRef = useRef(null);

  useEffect(() => {
    const handleVisibilityChange = () => {
      setIsPaused(document.hidden);
    };
    document.addEventListener("visibilitychange", handleVisibilityChange);
    return () => document.removeEventListener("visibilitychange", handleVisibilityChange);
  }, []);

  useEffect(() => {
    document.body.style.overflow = showFullHistory ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [showFullHistory]);

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") setShowFullHistory(false);
    };
    if (showFullHistory) document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [showFullHistory]);

  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50/30 py-14 sm:py-16 md:py-20">
        {/* BACKGROUND */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-40 top-10 h-80 w-80 rounded-full bg-blue-500/5 blur-3xl" />
          <div className="absolute -right-40 bottom-10 h-80 w-80 rounded-full bg-indigo-500/5 blur-3xl" />
          <div className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/5 blur-3xl" />
        </div>

        {/* HEADER */}
        <div className="relative z-10 mx-auto mb-8 max-w-7xl px-4 sm:mb-10 sm:px-6 md:mb-12 lg:px-12">
          <div className="text-center">
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-blue-200/30 bg-gradient-to-r from-blue-600/10 to-indigo-600/10 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-wider text-blue-700 sm:mb-4 sm:px-4 sm:py-2 sm:text-xs">
              <Calendar size={12} className="sm:h-4 sm:w-4" />
              Our Timeline
            </div>

            <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl md:text-4xl">
              Journey of{" "}
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Excellence
              </span>
            </h2>

            <p className="mx-auto mt-2 max-w-2xl px-4 text-xs leading-relaxed text-slate-500 sm:mt-3 sm:text-sm md:text-base">
              Fifteen years of building the infrastructure that keeps water flowing, with innovation at every step.
            </p>

            <div className="mt-4 flex flex-wrap justify-center gap-3 sm:mt-6 sm:gap-6">
              <div className="flex items-center gap-1.5 sm:gap-2">
                <span className="text-xl font-bold text-blue-600 sm:text-2xl">15+</span>
                <span className="text-[10px] text-slate-500 sm:text-sm">Years</span>
              </div>
              <div className="h-6 w-px bg-slate-200 sm:h-8" />
              <div className="flex items-center gap-1.5 sm:gap-2">
                <span className="text-xl font-bold text-blue-600 sm:text-2xl">300+</span>
                <span className="text-[10px] text-slate-500 sm:text-sm">Projects</span>
              </div>
              <div className="h-6 w-px bg-slate-200 sm:h-8" />
              <div className="flex items-center gap-1.5 sm:gap-2">
                <span className="text-xl font-bold text-blue-600 sm:text-2xl">20+</span>
                <span className="text-[10px] text-slate-500 sm:text-sm">Countries</span>
              </div>
            </div>
          </div>
        </div>

        {/* MARQUEE — 3 explicit sets, each a fixed-width flex row.
            This makes `-33.333%` an exact match to one set's width,
            which is what removes the stutter/jump on loop. */}
        <div className="relative z-10 w-full overflow-hidden">
          <div className="pointer-events-none absolute bottom-0 left-0 top-0 z-20 w-12 bg-gradient-to-r from-slate-50/90 via-slate-50/50 to-transparent sm:w-20 md:w-32" />
          <div className="pointer-events-none absolute bottom-0 right-0 top-0 z-20 w-12 bg-gradient-to-l from-slate-50/90 via-slate-50/50 to-transparent sm:w-20 md:w-32" />

          <div
            ref={marqueeRef}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onTouchStart={() => setIsPaused(true)}
            onTouchEnd={() => setIsPaused(false)}
            className="flex w-max animate-timeline-scroll py-4 sm:py-6"
            style={{
              animationPlayState: isPaused ? "paused" : "running",
              willChange: "transform",
            }}
          >
            {[0, 1, 2].map((setIndex) => (
              <div
                key={setIndex}
                className="flex items-start gap-4 pr-4 sm:gap-6 sm:pr-6 md:gap-8 md:pr-8"
              >
                {journey.map((item, i) => {
                  const key = `${setIndex}-${i}`;
                  return (
                    <MarqueeNode
                      key={key}
                      item={item}
                      isActive={activeKey === key}
                      onEnter={() => setActiveKey(key)}
                      onLeave={() => setActiveKey(null)}
                    />
                  );
                })}
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="relative z-10 mx-auto mt-8 max-w-7xl px-4 text-center sm:mt-10 sm:px-6 md:mt-12 lg:px-12">
          <button
            type="button"
            onClick={() => setShowFullHistory(true)}
            className="group inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-2.5 text-xs font-semibold text-white shadow-lg shadow-blue-600/25 transition-all duration-300 hover:scale-105 hover:shadow-blue-600/40 sm:rounded-xl sm:px-8 sm:py-3 sm:text-sm"
          >
            View Full History
            <ChevronRight size={16} className="transition-transform duration-300 group-hover:translate-x-1 sm:h-[18px] sm:w-[18px]" />
          </button>
        </div>
      </section>

      {/* FULL HISTORY MODAL */}
      {showFullHistory && (
        <div
          className="fixed inset-0 z-[9999] overflow-y-auto bg-slate-900/60 px-4 py-6 backdrop-blur-md sm:px-6 sm:py-8 lg:px-10"
          onClick={() => setShowFullHistory(false)}
        >
          <div
            className="relative mx-auto min-h-full max-w-6xl overflow-hidden rounded-3xl bg-white shadow-2xl sm:min-h-0 animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative overflow-hidden border-b border-slate-100 bg-gradient-to-br from-blue-50 via-white to-indigo-50 px-6 py-8 sm:px-10 sm:py-10">
              <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-blue-500/10 blur-3xl" />
              <div className="absolute -bottom-20 -left-20 h-56 w-56 rounded-full bg-indigo-500/10 blur-3xl" />
              <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/5 blur-3xl" />

              <button
                type="button"
                onClick={() => setShowFullHistory(false)}
                className="absolute right-4 top-4 z-20 flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white/80 text-slate-500 shadow-sm backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:bg-white hover:text-slate-900 hover:shadow-md sm:right-6 sm:top-6"
                aria-label="Close history"
              >
                <X size={20} />
              </button>

              <div className="relative text-center">
                <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-200/40 bg-blue-600/10 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-blue-700 backdrop-blur-sm">
                  <Calendar size={14} />
                  Our Journey
                </div>

                <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
                  Fifteen Years of{" "}
                  <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                    Excellence
                  </span>
                </h2>

                <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-slate-500 sm:text-base">
                  From a vision in 2010 to delivering innovative water infrastructure and digital solutions across the world.
                </p>
              </div>
            </div>

            <div className="px-4 py-8 sm:px-8 lg:px-12 xl:px-16">
              <div className="relative">
                <div className="absolute bottom-0 left-5 top-0 w-0.5 bg-gradient-to-b from-blue-200 via-indigo-200 to-blue-100 sm:left-1/2 sm:-translate-x-1/2">
                  <div className="absolute left-1/2 top-0 h-3 w-3 -translate-x-1/2 rounded-full bg-blue-500 shadow-lg shadow-blue-500/50" />
                  <div className="absolute bottom-0 left-1/2 h-3 w-3 -translate-x-1/2 rounded-full bg-indigo-500 shadow-lg shadow-indigo-500/50" />
                </div>

                {journey.map((item, index) => {
                  const isLeft = index % 2 === 0;
                  const isLast = index === journey.length - 1;

                  return (
                    <div key={item.year} className={`relative mb-10 last:mb-0 sm:mb-14 ${isLast ? "pb-0" : ""}`}>
                      {/* DESKTOP */}
                      <div className="hidden sm:grid sm:grid-cols-2 sm:gap-8 lg:gap-12">
                        <div className={isLeft ? "flex justify-end pr-4 lg:pr-8" : "invisible"}>
                          {isLeft && <HistoryCard item={item} align="right" />}
                        </div>
                        <div className={!isLeft ? "flex justify-start pl-4 lg:pl-8" : "invisible"}>
                          {!isLeft && <HistoryCard item={item} align="left" />}
                        </div>
                      </div>

                      {/* MOBILE */}
                      <div className="pl-14 sm:hidden">
                        <HistoryCard item={item} align="left" />
                      </div>

                      {/* CENTER NODE — uses static shadowColor class now */}
                      <div
                        className={`
                          absolute left-5 top-5 z-20 flex h-11 w-11 -translate-x-1/2
                          items-center justify-center rounded-full bg-gradient-to-r ${item.color}
                          text-white shadow-lg ${item.shadowColor} ring-4 ring-white
                          transition-all duration-300 hover:scale-110 hover:shadow-xl
                          sm:left-1/2
                        `}
                      >
                        <item.icon size={18} />
                      </div>

                      <div className="absolute left-1/2 top-5 -mt-7 hidden -translate-x-1/2 sm:block">
                        <span className="text-[10px] font-bold tracking-wider text-slate-400">{item.year}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="border-t border-slate-100 bg-gradient-to-r from-slate-50/90 to-white px-6 py-6 sm:px-10">
              <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
                <div className="text-center sm:text-left">
                  <p className="text-sm font-semibold text-slate-900">Building the future, one milestone at a time.</p>
                  <div className="mt-1.5 flex flex-wrap items-center justify-center gap-3 sm:justify-start">
                    <span className="flex items-center gap-1 text-xs text-slate-500">
                      <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
                      15+ years
                    </span>
                    <span className="flex items-center gap-1 text-xs text-slate-500">
                      <span className="h-1.5 w-1.5 rounded-full bg-indigo-500" />
                      300+ projects
                    </span>
                    <span className="flex items-center gap-1 text-xs text-slate-500">
                      <span className="h-1.5 w-1.5 rounded-full bg-cyan-500" />
                      20+ countries
                    </span>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setShowFullHistory(false)}
                  className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition-all duration-300 hover:scale-105 hover:shadow-blue-600/30 active:scale-95"
                >
                  Close History
                  <X size={16} className="transition-transform duration-300 group-hover:rotate-90" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes timelineScroll {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-33.3333%); }
        }
        .animate-timeline-scroll {
          animation: timelineScroll 35s linear infinite;
        }
        @media (max-width: 640px) {
          .animate-timeline-scroll {
            animation: timelineScroll 25s linear infinite;
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .animate-timeline-scroll {
            animation: none;
          }
        }
        @keyframes scaleIn {
          from { opacity: 0; transform: scale(0.96); }
          to { opacity: 1; transform: scale(1); }
        }
        .animate-scale-in {
          animation: scaleIn 0.2s ease-out;
        }
        @media (min-width: 480px) {
          .xs\\:inline { display: inline; }
        }
      `}</style>
    </>
  );
}