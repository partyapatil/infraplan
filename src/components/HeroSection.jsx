import React, { useState, useRef, useEffect } from "react";
import {
  ChevronRight,
  Play,
  Maximize2,
  Minimize2,
  X,
  Pause,
} from "lucide-react";
import {
  Building2,
  Shield,
  Globe,
  Users,
} from "lucide-react";

export default function HeroSection() {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  const videoRef = useRef(null);
  const containerRef = useRef(null);

  const stats = [
    {
      icon: Building2,
      value: "15+",
      label: "Years of Excellence",
    },
    {
      icon: Shield,
      value: "300+",
      label: "Projects Delivered",
    },
    {
      icon: Globe,
      value: "20+",
      label: "Countries Served",
    },
    {
      icon: Users,
      value: "150+",
      label: "Happy Clients",
    },
  ];

  /* ============================================================
     FULLSCREEN CHANGE LISTENER
  ============================================================ */

  useEffect(() => {
    const handleFullscreenChange = () => {
      const fullscreenElement =
        document.fullscreenElement ||
        document.webkitFullscreenElement ||
        document.msFullscreenElement;

      setIsFullscreen(!!fullscreenElement);

      // Prevent background scrolling
      document.body.style.overflow = fullscreenElement
        ? "hidden"
        : "";
    };

    document.addEventListener(
      "fullscreenchange",
      handleFullscreenChange
    );

    // Safari
    document.addEventListener(
      "webkitfullscreenchange",
      handleFullscreenChange
    );

    // IE/old Edge
    document.addEventListener(
      "MSFullscreenChange",
      handleFullscreenChange
    );

    return () => {
      document.removeEventListener(
        "fullscreenchange",
        handleFullscreenChange
      );

      document.removeEventListener(
        "webkitfullscreenchange",
        handleFullscreenChange
      );

      document.removeEventListener(
        "MSFullscreenChange",
        handleFullscreenChange
      );

      document.body.style.overflow = "";
    };
  }, []);

  /* ============================================================
     ENTER / EXIT FULLSCREEN
  ============================================================ */

  const toggleFullscreen = async () => {
    try {
      if (!document.fullscreenElement) {
        const element = containerRef.current;

        if (!element) return;

        if (element.requestFullscreen) {
          await element.requestFullscreen();
        } else if (element.webkitRequestFullscreen) {
          element.webkitRequestFullscreen();
        } else if (element.msRequestFullscreen) {
          element.msRequestFullscreen();
        }
      } else {
        if (document.exitFullscreen) {
          await document.exitFullscreen();
        } else if (document.webkitExitFullscreen) {
          document.webkitExitFullscreen();
        } else if (document.msExitFullscreen) {
          document.msExitFullscreen();
        }
      }
    } catch (error) {
      console.error(
        "Fullscreen error:",
        error
      );
    }
  };

  /* ============================================================
     PLAY / PAUSE
  ============================================================ */

  const togglePlay = async () => {
    if (!videoRef.current) return;

    try {
      if (videoRef.current.paused) {
        await videoRef.current.play();
      } else {
        videoRef.current.pause();
      }
    } catch (error) {
      console.error(
        "Video playback error:",
        error
      );
    }
  };

  /* ============================================================
     CLEANUP BODY SCROLL
  ============================================================ */

  useEffect(() => {
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <>
      {/* ==========================================================
          HERO SECTION
      =========================================================== */}

      <section
        ref={containerRef}
        className={`
          relative overflow-hidden
          bg-gradient-to-br from-blue-50/50 via-white to-cyan-50/30
          px-5 sm:px-8 lg:px-12
          pt-12 pb-10
          lg:pt-20 lg:pb-16
          transition-all duration-500

          ${
            isFullscreen
              ? `
                fixed
                inset-0
                z-[9999]
                w-screen
                h-screen
                max-w-none
                p-0
                bg-black
                flex
                items-center
                justify-center
              `
              : ""
          }
        `}
      >

        {/* ========================================================
            NORMAL BACKGROUND DECORATION
        ========================================================= */}

        {!isFullscreen && (
          <div className="pointer-events-none absolute inset-0">

            <div className="absolute -right-40 -top-40 h-80 w-80 rounded-full bg-blue-500/10 blur-3xl" />

            <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-cyan-500/10 blur-3xl" />

            <div className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-500/5 blur-3xl" />

          </div>
        )}

        {/* ========================================================
            MAIN CONTAINER
        ========================================================= */}

        <div
          className={`
            relative mx-auto w-full

            ${
              isFullscreen
                ? "h-full max-w-none"
                : "max-w-7xl"
            }
          `}
        >

          {/* ======================================================
              CLOSE FULLSCREEN BUTTON
          ======================================================= */}

          {isFullscreen && (
            <button
              type="button"
              onClick={toggleFullscreen}
              aria-label="Exit fullscreen"
              className="
                fixed
                right-6
                top-6
                z-[10000]
                flex
                h-12
                w-12
                items-center
                justify-center
                rounded-full
                border
                border-white/20
                bg-black/40
                text-white
                backdrop-blur-md
                transition-all
                duration-300
                hover:scale-110
                hover:bg-white/20
              "
            >
              <X size={23} />
            </button>
          )}

          {/* ======================================================
              NORMAL HERO CONTENT
          ======================================================= */}

          {!isFullscreen && (
            <div className="grid w-full grid-cols-1 items-center gap-12 lg:grid-cols-2">

              {/* ==================================================
                  LEFT CONTENT
              =================================================== */}

              <div className="max-w-3xl">

                <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-200/30 bg-blue-600/10 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-blue-700">

                  <span className="h-2 w-2 animate-pulse rounded-full bg-blue-600" />

                  Building Tomorrow's Infrastructure

                </div>

                <h1 className="text-4xl font-bold leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-[3.5rem]">

                  Engineering Today.

                  <br />

                  Sustaining{" "}

                  <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                    Tomorrow.
                  </span>

                </h1>

                <p className="mt-4 max-w-xl text-sm leading-relaxed text-slate-500 sm:text-base">

                  Delivering innovative engineering, digital solutions
                  and sustainable infrastructure for a better future.

                </p>

                <div className="mt-8 flex flex-wrap gap-4">

                  <button
                    type="button"
                    className="
                      group
                      flex
                      items-center
                      gap-2
                      rounded-xl
                      bg-gradient-to-r
                      from-blue-700
                      to-indigo-700
                      px-8
                      py-3.5
                      text-sm
                      font-medium
                      text-white
                      shadow-lg
                      shadow-blue-600/25
                      transition-all
                      duration-300
                      hover:scale-105
                      hover:from-blue-800
                      hover:to-indigo-800
                      hover:shadow-blue-600/40
                    "
                  >
                    Explore Solutions

                    <ChevronRight
                      size={16}
                      className="transition-transform group-hover:translate-x-1"
                    />

                  </button>

                </div>

              </div>

              {/* ==================================================
                  VIDEO
              =================================================== */}

              <div
                className="
                  relative
                  aspect-video
                  w-full
                  overflow-hidden
                  rounded-2xl
                  border
                  border-slate-200/60
                  bg-black
                  shadow-2xl
                "
              >

                <video
                  ref={videoRef}
                  className="h-full w-full object-cover"
                  muted
                  playsInline
                  preload="metadata"
                  onPlay={() => setIsPlaying(true)}
                  onPause={() => setIsPlaying(false)}
                  onEnded={() => setIsPlaying(false)}
                >
                  <source
                    src="https://www.w3schools.com/html/mov_bbb.mp4"
                    type="video/mp4"
                  />

                  Your browser does not support the video tag.

                </video>

                {/* Gradient */}

                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

                {/* Featured Badge */}

                <div className="absolute left-4 top-4 flex items-center gap-2 rounded-full border border-white/10 bg-black/50 px-3 py-1.5 text-xs text-white/90 backdrop-blur-sm">

                  <div className="h-2 w-2 animate-pulse rounded-full bg-red-500" />

                  Featured Video

                </div>

                {/* Center Play */}

                {!isPlaying && (
                  <button
                    type="button"
                    onClick={togglePlay}
                    aria-label="Play video"
                    className="
                      absolute
                      left-1/2
                      top-1/2
                      flex
                      h-20
                      w-20
                      -translate-x-1/2
                      -translate-y-1/2
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-white/30
                      bg-white/20
                      text-white
                      shadow-2xl
                      backdrop-blur-md
                      transition-all
                      duration-300
                      hover:scale-110
                      hover:bg-white/30
                    "
                  >
                    <Play
                      size={32}
                      className="ml-1"
                      fill="white"
                    />
                  </button>
                )}

                {/* Controls */}

                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">

                  <button
                    type="button"
                    onClick={togglePlay}
                    aria-label={
                      isPlaying
                        ? "Pause video"
                        : "Play video"
                    }
                    className="
                      flex
                      h-11
                      w-11
                      items-center
                      justify-center
                      rounded-full
                      bg-white/20
                      text-white
                      backdrop-blur-md
                      transition-all
                      duration-300
                      hover:scale-110
                      hover:bg-white/30
                    "
                  >
                    {isPlaying ? (
                      <Pause size={19} />
                    ) : (
                      <Play
                        size={19}
                        className="ml-0.5"
                      />
                    )}
                  </button>

                  <button
                    type="button"
                    onClick={toggleFullscreen}
                    aria-label="Enter fullscreen"
                    className="
                      flex
                      h-11
                      w-11
                      items-center
                      justify-center
                      rounded-full
                      bg-white/20
                      text-white
                      backdrop-blur-md
                      transition-all
                      duration-300
                      hover:scale-110
                      hover:bg-white/30
                    "
                  >
                    <Maximize2 size={18} />
                  </button>

                </div>

              </div>

            </div>
          )}

          {/* ======================================================
              FULLSCREEN VIDEO
          ======================================================= */}

          {isFullscreen && (
            <div className="relative flex h-full w-full items-center justify-center bg-black">

              <video
                ref={videoRef}
                className="
                  h-full
                  w-full
                  object-contain
                  bg-black
                "
                muted
                playsInline
                controls={false}
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
                onEnded={() => setIsPlaying(false)}
              >
                <source
                  src="https://www.w3schools.com/html/mov_bbb.mp4"
                  type="video/mp4"
                />

                Your browser does not support the video tag.

              </video>

              {/* Fullscreen Gradient */}

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20" />

              {/* Fullscreen Title */}

              <div className="absolute bottom-28 left-8 right-8 z-10 text-white sm:left-12 sm:right-12">

                <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-blue-300">
                  Infraplan · Engineering & Infrastructure
                </p>

                <h2 className="mt-2 max-w-3xl text-2xl font-bold sm:text-4xl">
                  Engineering Tomorrow's Infrastructure
                </h2>

                <p className="mt-2 text-sm text-white/60">
                  Watch our latest project showcase
                </p>

              </div>

              {/* Fullscreen Controls */}

              <div className="absolute bottom-7 left-8 right-8 z-20 flex items-center justify-between sm:left-12 sm:right-12">

                <button
                  type="button"
                  onClick={togglePlay}
                  aria-label={
                    isPlaying
                      ? "Pause video"
                      : "Play video"
                  }
                  className="
                    flex
                    h-12
                    w-12
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-white/20
                    bg-white/10
                    text-white
                    backdrop-blur-md
                    transition-all
                    duration-300
                    hover:scale-110
                    hover:bg-white/20
                  "
                >
                  {isPlaying ? (
                    <Pause size={20} />
                  ) : (
                    <Play
                      size={20}
                      className="ml-0.5"
                    />
                  )}
                </button>

                <button
                  type="button"
                  onClick={toggleFullscreen}
                  aria-label="Exit fullscreen"
                  className="
                    flex
                    h-12
                    w-12
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-white/20
                    bg-white/10
                    text-white
                    backdrop-blur-md
                    transition-all
                    duration-300
                    hover:scale-110
                    hover:bg-white/20
                  "
                >
                  <Minimize2 size={19} />
                </button>

              </div>

            </div>
          )}

          {/* ======================================================
              STATS
          ======================================================= */}

          {!isFullscreen && (
            <div className="relative mx-auto mt-12 grid max-w-4xl grid-cols-2 gap-4 rounded-2xl border border-slate-200/60 bg-white/80 p-6 shadow-xl backdrop-blur-lg sm:grid-cols-4">

              {stats.map((s) => {
                const Icon = s.icon;

                return (
                  <div
                    key={s.label}
                    className="group text-center"
                  >

                    <div className="mb-2 inline-flex rounded-xl bg-blue-50 p-2 text-blue-600 transition-transform group-hover:scale-110">

                      <Icon size={20} />

                    </div>

                    <div className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
                      {s.value}
                    </div>

                    <div className="mt-0.5 text-xs text-slate-500">
                      {s.label}
                    </div>

                  </div>
                );
              })}

            </div>
          )}

        </div>

      </section>
    </>
  );
}
