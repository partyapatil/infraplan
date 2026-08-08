import React, { useState, useEffect, useRef } from "react";
import {
  Building2,
  FlaskConical,
  Boxes,
  Globe2,
  TrendingUp,
  Sparkles,
  Calendar,
  MapPin,
  ChevronRight,
  X,
} from "lucide-react";

/* ============================================================
   JOURNEY DATA
============================================================ */

const journey = [
  {
    year: "2010",
    label: "Company Founded",
    desc: "Started our journey in infrastructure engineering with a vision to transform water management.",
    icon: Building2,
    color: "from-blue-600 to-blue-800",
    bgColor: "bg-blue-50",
    borderColor: "border-blue-200",
    textColor: "text-blue-700",
  },
  {
    year: "2013",
    label: "Hydraulic Lab Established",
    desc: "State-of-the-art testing facility opened for advanced water research and development.",
    icon: FlaskConical,
    color: "from-cyan-600 to-teal-800",
    bgColor: "bg-cyan-50",
    borderColor: "border-cyan-200",
    textColor: "text-cyan-700",
  },
  {
    year: "2016",
    label: "SigmaToolBox Launched",
    desc: "Digital platform for water utilities released, revolutionizing operational efficiency.",
    icon: Boxes,
    color: "from-indigo-600 to-purple-800",
    bgColor: "bg-indigo-50",
    borderColor: "border-indigo-200",
    textColor: "text-indigo-700",
  },
  {
    year: "2019",
    label: "International Expansion",
    desc: "Began operations in over 20+ countries across Asia, Europe, and Africa.",
    icon: Globe2,
    color: "from-emerald-600 to-teal-800",
    bgColor: "bg-emerald-50",
    borderColor: "border-emerald-200",
    textColor: "text-emerald-700",
  },
  {
    year: "2022",
    label: "300+ Projects Milestone",
    desc: "Successfully delivered major water infrastructure projects worldwide.",
    icon: TrendingUp,
    color: "from-amber-600 to-orange-800",
    bgColor: "bg-amber-50",
    borderColor: "border-amber-200",
    textColor: "text-amber-700",
  },
  {
    year: "2025",
    label: "Shaping the Future",
    desc: "Pioneering sustainable digital water technology for tomorrow's challenges.",
    icon: Sparkles,
    color: "from-rose-600 to-pink-800",
    bgColor: "bg-rose-50",
    borderColor: "border-rose-200",
    textColor: "text-rose-700",
  },
];

/* ============================================================
   FULL HISTORY CARD
============================================================ */

function HistoryCard({ item, align = "left" }) {
  const Icon = item.icon;

  return (
    <div
      className={`
        group
        w-full
        max-w-md
        rounded-2xl
        border
        ${item.borderColor}
        bg-white
        p-5
        shadow-sm
        transition-all
        duration-300
        hover:-translate-y-1
        hover:shadow-xl
      `}
    >
      <div
        className={`
          flex
          items-start
          gap-4
          ${align === "right" ? "flex-row-reverse text-right" : ""}
        `}
      >
        {/* Icon */}

        <div
          className={`
            flex
            h-11
            w-11
            shrink-0
            items-center
            justify-center
            rounded-xl
            bg-gradient-to-r
            ${item.color}
            text-white
            shadow-md
            transition-transform
            duration-300
            group-hover:scale-110
          `}
        >
          <Icon size={19} />
        </div>

        {/* Content */}

        <div className="min-w-0 flex-1">
          <div
            className={`
              mb-1
              flex
              items-center
              gap-2
              ${align === "right" ? "justify-end" : ""}
            `}
          >
            <span className="text-xs font-bold text-slate-400">
              {item.year}
            </span>
          </div>

          <h3 className={`text-base font-bold ${item.textColor}`}>
            {item.label}
          </h3>

          <p className="mt-2 text-sm leading-relaxed text-slate-500">
            {item.desc}
          </p>

          <div
            className={`
              mt-3
              flex
              items-center
              gap-1
              text-[11px]
              text-slate-400
              ${align === "right" ? "justify-end" : ""}
            `}
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
   JOURNEY SECTION
============================================================ */

export default function JourneySection() {
  const [isPaused, setIsPaused] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);
  const [showFullHistory, setShowFullHistory] = useState(false);

  const marqueeRef = useRef(null);

  /* ============================================================
     DUPLICATE JOURNEY FOR SEAMLESS MARQUEE
  ============================================================= */

  const marqueeJourney = [...journey, ...journey, ...journey];

  /* ============================================================
     VISIBILITY CHANGE
  ============================================================= */

  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden) {
        setIsPaused(true);
      } else {
        setIsPaused(false);
      }
    };

    document.addEventListener(
      "visibilitychange",
      handleVisibilityChange
    );

    return () => {
      document.removeEventListener(
        "visibilitychange",
        handleVisibilityChange
      );
    };
  }, []);

  /* ============================================================
     BODY SCROLL LOCK WHEN MODAL IS OPEN
  ============================================================= */

  useEffect(() => {
    if (showFullHistory) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [showFullHistory]);

  /* ============================================================
     ESCAPE KEY
  ============================================================= */

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setShowFullHistory(false);
      }
    };

    if (showFullHistory) {
      document.addEventListener("keydown", handleEscape);
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [showFullHistory]);

  return (
    <>
      {/* ========================================================
          JOURNEY SECTION
      ========================================================= */}

      <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50/30 py-14 sm:py-16 md:py-20">

        {/* ======================================================
            DECORATIVE BACKGROUND
        ======================================================= */}

        <div className="pointer-events-none absolute inset-0">

          <div className="absolute -left-40 top-10 h-80 w-80 rounded-full bg-blue-500/5 blur-3xl" />

          <div className="absolute -right-40 bottom-10 h-80 w-80 rounded-full bg-indigo-500/5 blur-3xl" />

          <div className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/5 blur-3xl" />

        </div>

        {/* ======================================================
            HEADER
        ======================================================= */}

        <div className="relative z-10 mx-auto mb-8 max-w-7xl px-4 sm:mb-10 sm:px-6 md:mb-12 lg:px-12">

          <div className="text-center">

            {/* Badge */}

            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-blue-200/30 bg-gradient-to-r from-blue-600/10 to-indigo-600/10 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-wider text-blue-700 sm:mb-4 sm:px-4 sm:py-2 sm:text-xs">

              <Calendar
                size={12}
                className="sm:h-4 sm:w-4"
              />

              Our Timeline

            </div>

            {/* Heading */}

            <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl md:text-4xl">

              Journey of{" "}

              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Excellence
              </span>

            </h2>

            {/* Description */}

            <p className="mx-auto mt-2 max-w-2xl px-4 text-xs leading-relaxed text-slate-500 sm:mt-3 sm:text-sm md:text-base">

              Fifteen years of building the infrastructure that keeps water
              flowing, with innovation at every step.

            </p>

            {/* ==================================================
                STATS
            =================================================== */}

            <div className="mt-4 flex flex-wrap justify-center gap-3 sm:mt-6 sm:gap-6">

              <div className="flex items-center gap-1.5 sm:gap-2">

                <span className="text-xl font-bold text-blue-600 sm:text-2xl">
                  15+
                </span>

                <span className="text-[10px] text-slate-500 sm:text-sm">
                  Years
                </span>

              </div>

              <div className="h-6 w-px bg-slate-200 sm:h-8" />

              <div className="flex items-center gap-1.5 sm:gap-2">

                <span className="text-xl font-bold text-blue-600 sm:text-2xl">
                  300+
                </span>

                <span className="text-[10px] text-slate-500 sm:text-sm">
                  Projects
                </span>

              </div>

              <div className="h-6 w-px bg-slate-200 sm:h-8" />

              <div className="flex items-center gap-1.5 sm:gap-2">

                <span className="text-xl font-bold text-blue-600 sm:text-2xl">
                  20+
                </span>

                <span className="text-[10px] text-slate-500 sm:text-sm">
                  Countries
                </span>

              </div>

            </div>

          </div>
        </div>

        {/* ======================================================
            TIMELINE MARQUEE
        ======================================================= */}

        <div className="relative z-10 w-full overflow-hidden">

          {/* Left Gradient Mask */}

          <div className="pointer-events-none absolute bottom-0 left-0 top-0 z-20 w-12 bg-gradient-to-r from-slate-50/90 via-slate-50/50 to-transparent sm:w-20 md:w-32" />

          {/* Right Gradient Mask */}

          <div className="pointer-events-none absolute bottom-0 right-0 top-0 z-20 w-12 bg-gradient-to-l from-slate-50/90 via-slate-50/50 to-transparent sm:w-20 md:w-32" />

          {/* ====================================================
              TRACK
          ===================================================== */}

          <div
            ref={marqueeRef}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onTouchStart={() => setIsPaused(true)}
            onTouchEnd={() => setIsPaused(false)}
            className={`
              flex
              w-max
              items-start
              gap-4
              py-4
              sm:gap-6
              sm:py-6
              md:gap-8
              animate-timeline-scroll

              ${
                isPaused
                  ? "[animation-play-state:paused]"
                  : ""
              }
            `}
          >

            {marqueeJourney.map((item, index) => {

              const Icon = item.icon;

              const isActive =
                activeIndex === index;

              return (
                <div
                  key={`${item.year}-${index}`}
                  className="group flex w-[180px] shrink-0 flex-col items-center sm:w-[240px] md:w-[280px] lg:w-[300px]"
                  onMouseEnter={() =>
                    setActiveIndex(index)
                  }
                  onMouseLeave={() =>
                    setActiveIndex(null)
                  }
                >

                  {/* ==================================================
                      TIMELINE NODE
                  =================================================== */}

                  <div className="relative">

                    {/* Glow */}

                    <div
                      className={`
                        absolute
                        inset-0
                        scale-150
                        rounded-full
                        bg-gradient-to-r
                        ${item.color}
                        opacity-0
                        blur-xl
                        transition-opacity
                        duration-500
                        group-hover:opacity-20
                      `}
                    />

                    {/* Icon */}

                    <div
                      className={`
                        relative
                        z-10
                        flex
                        h-12
                        w-12
                        items-center
                        justify-center
                        rounded-full
                        bg-gradient-to-r
                        ${item.color}
                        shadow-lg
                        transition-all
                        duration-500
                        group-hover:scale-110
                        group-hover:shadow-2xl
                        sm:h-14
                        sm:w-14
                        md:h-16
                        md:w-16
                      `}
                    >

                      <Icon
                        size={18}
                        className="text-white transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110 sm:h-5 sm:w-5 md:h-6 md:w-6"
                        strokeWidth={1.8}
                      />

                      {/* Pulse */}

                      <div className="absolute inset-0 animate-pulse rounded-full border-2 border-white/30 group-hover:animate-none" />

                    </div>

                    {/* Year */}

                    <div className="absolute -bottom-3 left-1/2 z-30 -translate-x-1/2 whitespace-nowrap rounded-full border border-slate-200 bg-white/95 px-2.5 py-0.5 text-[9px] font-extrabold text-slate-700 shadow-md backdrop-blur-sm sm:px-3 sm:text-[10px]">

                      {item.year}

                    </div>

                  </div>

                  {/* ==================================================
                      CONNECTING LINE
                  =================================================== */}

                  <div className="relative h-4 w-0.5 bg-gradient-to-b from-blue-400/50 to-blue-400/20 transition-all duration-500 group-hover:from-blue-600 group-hover:to-blue-400 sm:h-6 md:h-8">

                    <div
                      className={`
                        absolute
                        bottom-0
                        left-1/2
                        h-1.5
                        w-1.5
                        -translate-x-1/2
                        rounded-full
                        bg-blue-500
                        transition-all
                        duration-300
                        group-hover:bg-blue-600
                        sm:h-2
                        sm:w-2

                        ${
                          isActive
                            ? "scale-150"
                            : ""
                        }
                      `}
                    />

                  </div>

                  {/* ==================================================
                      CONTENT CARD
                  =================================================== */}

                  <div
                    className={`
                      w-full
                      rounded-xl
                      border
                      ${item.borderColor}
                      bg-white/90
                      p-3
                      shadow-sm
                      backdrop-blur-sm
                      transition-all
                      duration-500
                      group-hover:-translate-y-1
                      group-hover:shadow-xl
                      sm:rounded-2xl
                      sm:p-4
                      md:p-5

                      ${
                        isActive
                          ? "ring-2 ring-blue-500/20 shadow-xl"
                          : ""
                      }
                    `}
                  >

                    <div className="flex items-start gap-2 sm:gap-3">

                      {/* Color Line */}

                      <div
                        className={`
                          h-8
                          w-0.5
                          shrink-0
                          rounded-full
                          bg-gradient-to-b
                          ${item.color}
                          sm:h-10
                          sm:w-1
                        `}
                      />

                      <div className="min-w-0 flex-1">

                        <h3
                          className={`
                            origin-left
                            text-xs
                            font-bold
                            ${item.textColor}
                            transition-transform
                            duration-300
                            group-hover:scale-105
                            sm:text-sm
                            md:text-base
                          `}
                        >
                          {item.label}
                        </h3>

                        <p className="mt-0.5 text-[10px] leading-relaxed text-slate-500 sm:mt-1 sm:text-xs md:text-sm">

                          {item.desc}

                        </p>

                        <div className="mt-1 flex items-center gap-1 text-[8px] text-slate-400 sm:mt-2 sm:text-[10px]">

                          <MapPin
                            size={10}
                            className="sm:h-3 sm:w-3"
                          />

                          <span className="hidden xs:inline">
                            Global Impact
                          </span>

                          <ChevronRight
                            size={10}
                            className="transition-transform group-hover:translate-x-1 sm:h-3 sm:w-3"
                          />

                        </div>

                      </div>

                    </div>

                  </div>

                </div>
              );
            })}

          </div>
        </div>

        {/* ======================================================
            BOTTOM CTA
        ======================================================= */}

        <div className="relative z-10 mx-auto mt-8 max-w-7xl px-4 text-center sm:mt-10 sm:px-6 md:mt-12 lg:px-12">

          <button
            type="button"
            onClick={() => setShowFullHistory(true)}
            className="group inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-2.5 text-xs font-semibold text-white shadow-lg shadow-blue-600/25 transition-all duration-300 hover:scale-105 hover:shadow-blue-600/40 sm:rounded-xl sm:px-8 sm:py-3 sm:text-sm"
          >

            View Full History

            <ChevronRight
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-1 sm:h-[18px] sm:w-[18px]"
            />

          </button>

        </div>

      </section>


      {/* ========================================================
          FULL HISTORY MODAL
      ========================================================= */}

      {showFullHistory && (
        <div
          className="fixed inset-0 z-[9999] overflow-y-auto bg-slate-950/70 px-4 py-6 backdrop-blur-md sm:px-6 sm:py-8 lg:px-10"
          onClick={() =>
            setShowFullHistory(false)
          }
        >

          {/* ====================================================
              MODAL CONTAINER
          ===================================================== */}

          <div
            className="relative mx-auto min-h-full max-w-6xl overflow-hidden rounded-3xl bg-white shadow-2xl sm:min-h-0"
            onClick={(event) =>
              event.stopPropagation()
            }
          >

            {/* ==================================================
                MODAL HEADER
            =================================================== */}

            <div className="relative overflow-hidden border-b border-slate-100 bg-gradient-to-br from-blue-50 via-white to-indigo-50 px-6 py-8 sm:px-10 sm:py-10">

              {/* Decorative Circle */}

              <div className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-blue-500/10 blur-3xl" />

              <div className="absolute -bottom-20 -left-20 h-48 w-48 rounded-full bg-indigo-500/10 blur-3xl" />

              {/* Close Button */}

              <button
                type="button"
                onClick={() =>
                  setShowFullHistory(false)
                }
                className="absolute right-4 top-4 z-20 flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-500 shadow-sm transition-all duration-300 hover:scale-105 hover:bg-slate-50 hover:text-slate-900 sm:right-6 sm:top-6"
                aria-label="Close history"
              >

                <X size={20} />

              </button>

              {/* Header Content */}

              <div className="relative text-center">

                <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-200/40 bg-blue-600/10 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-blue-700">

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

                  From a vision in 2010 to delivering innovative water
                  infrastructure and digital solutions across the world.

                </p>

              </div>

            </div>


            {/* ==================================================
                FULL TIMELINE
            =================================================== */}

            <div className="px-6 py-10 sm:px-10 lg:px-16">

              <div className="relative">

                {/* Vertical Line */}

                <div className="absolute bottom-0 left-5 top-0 w-px bg-gradient-to-b from-blue-200 via-indigo-200 to-blue-100 sm:left-1/2 sm:-translate-x-1/2" />

                {journey.map((item, index) => {

                  const isLeft =
                    index % 2 === 0;

                  return (
                    <div
                      key={item.year}
                      className="relative mb-10 last:mb-0 sm:mb-14"
                    >

                      {/* ==================================================
                          DESKTOP
                      =================================================== */}

                      <div className="hidden sm:grid sm:grid-cols-2 sm:gap-12">

                        {/* LEFT */}

                        <div
                          className={
                            isLeft
                              ? "flex justify-end"
                              : "invisible"
                          }
                        >

                          {isLeft && (
                            <HistoryCard
                              item={item}
                              align="right"
                            />
                          )}

                        </div>

                        {/* RIGHT */}

                        <div
                          className={
                            !isLeft
                              ? "flex justify-start"
                              : "invisible"
                          }
                        >

                          {!isLeft && (
                            <HistoryCard
                              item={item}
                              align="left"
                            />
                          )}

                        </div>

                      </div>


                      {/* ==================================================
                          MOBILE
                      =================================================== */}

                      <div className="pl-12 sm:hidden">

                        <HistoryCard
                          item={item}
                          align="left"
                        />

                      </div>


                      {/* ==================================================
                          CENTER NODE
                      =================================================== */}

                      <div
                        className={`
                          absolute
                          left-5
                          top-5
                          z-20
                          flex
                          h-10
                          w-10
                          -translate-x-1/2
                          items-center
                          justify-center
                          rounded-full
                          bg-gradient-to-r
                          ${item.color}
                          text-white
                          shadow-lg
                          ring-4
                          ring-white
                          sm:left-1/2
                        `}
                      >

                        <item.icon size={18} />

                      </div>

                    </div>
                  );
                })}

              </div>

            </div>


            {/* ==================================================
                MODAL FOOTER
            =================================================== */}

            <div className="border-t border-slate-100 bg-slate-50/70 px-6 py-6 sm:px-10">

              <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">

                <div className="text-center sm:text-left">

                  <p className="text-sm font-semibold text-slate-900">

                    Building the future, one milestone at a time.

                  </p>

                  <p className="mt-1 text-xs text-slate-500">

                    15+ years · 300+ projects · 20+ countries

                  </p>

                </div>

                <button
                  type="button"
                  onClick={() =>
                    setShowFullHistory(false)
                  }
                  className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition-all duration-300 hover:scale-105 hover:shadow-blue-600/30"
                >

                  Close History

                  <X size={16} />

                </button>

              </div>

            </div>

          </div>

        </div>
      )}


      {/* ========================================================
          ANIMATIONS
      ========================================================= */}

      <style>{`

        @keyframes timelineScroll {

          0% {
            transform: translateX(0%);
          }

          100% {
            transform: translateX(-33.333%);
          }

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

        @media (min-width: 480px) {

          .xs\\:inline {
            display: inline;
          }

        }

      `}</style>

    </>
  );
}