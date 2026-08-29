import { useState, useRef, useEffect } from "react";
import {
  ChevronRight,
  Play,
  Maximize2,
  Minimize2,
  X,
  Pause,
  Building2,
  Shield,
  Globe,
  Users,
  Volume2,
  VolumeX,
} from "lucide-react";

import blueprintBg from "../assets/engineering-blueprint-bg.png";
import heroVideo from "../assets/videos/hydrolicVideo.mp4";

export default function HeroSection() {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);

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
      value: "150+",
      label: "Projects Delivered",
    },
    {
      icon: Globe,
      value: "5+",
      label: "Countries Served",
    },
    {
      icon: Users,
      value: "15+",
      label: "States Covered",
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

      document.body.style.overflow = fullscreenElement ? "hidden" : "";
    };

    document.addEventListener("fullscreenchange", handleFullscreenChange);
    document.addEventListener(
      "webkitfullscreenchange",
      handleFullscreenChange
    );
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
     CLEANUP BODY OVERFLOW
  ============================================================ */

  useEffect(() => {
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  /* ============================================================
     TOGGLE FULLSCREEN
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
      console.error("Fullscreen error:", error);
    }
  };

  /* ============================================================
     TOGGLE PLAY / PAUSE
  ============================================================ */

  const togglePlay = async () => {
    const video = videoRef.current;

    if (!video) return;

    try {
      if (video.paused) {
        await video.play();
      } else {
        video.pause();
      }
    } catch (error) {
      console.error("PLAY ERROR:", error);
    }
  };

  /* ============================================================
     TOGGLE MUTE / UNMUTE
  ============================================================ */

  const toggleMute = async () => {
    const video = videoRef.current;

    if (!video) return;

    try {
      const newMutedState = !video.muted;

      video.muted = newMutedState;

      setIsMuted(newMutedState);

      /*
       * If the video was paused, play it after the user
       * interacts with the sound button.
       */
      if (video.paused) {
        await video.play();
      }
    } catch (error) {
      console.error("AUDIO ERROR:", error);
    }
  };

  return (
    <section
      ref={containerRef}
      className={`relative overflow-hidden px-5 pt-12 pb-10 sm:px-8 lg:px-12 lg:pt-20 lg:pb-16 transition-all duration-500 ${
        isFullscreen
          ? "fixed inset-0 z-[9999] h-screen w-screen max-w-none bg-black p-0"
          : ""
      }`}
    >
      {/* ============================================================
          BACKGROUND
      ============================================================ */}

      {!isFullscreen && (
        <>
          <div
            className="absolute inset-0 z-0 bg-white"
            style={{
              backgroundImage: `url(${blueprintBg})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          />

          <div className="absolute inset-0 z-[1] bg-gradient-to-r from-white/10 via-white/5 to-white/10" />
        </>
      )}

      {/* ============================================================
          MAIN CONTAINER
      ============================================================ */}

      <div
        className={`relative mx-auto w-full ${
          isFullscreen ? "h-full max-w-none" : "max-w-7xl"
        }`}
      >
        {/* ============================================================
            FULLSCREEN EXIT BUTTON
        ============================================================ */}

        {isFullscreen && (
          <button
            type="button"
            onClick={toggleFullscreen}
            aria-label="Exit fullscreen"
            className="fixed right-5 top-5 z-[10000] flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-black/40 text-white backdrop-blur-md transition-all duration-300 hover:scale-105 hover:bg-white/20"
          >
            <X size={19} />
          </button>
        )}

        {/* ============================================================
            CONTENT GRID
        ============================================================ */}

        <div
          className={
            isFullscreen
              ? "flex h-full w-full items-center justify-center"
              : "grid w-full grid-cols-1 items-center gap-12 lg:grid-cols-2"
          }
        >
          {/* ============================================================
              LEFT CONTENT
          ============================================================ */}

          {!isFullscreen && (
            <div className="max-w-3xl">
              {/* Badge */}

              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-200/30 bg-blue-600/10 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-blue-700">
                <span className="h-2 w-2 animate-pulse rounded-full bg-blue-600" />

                Building Tomorrow's Infrastructure
              </div>

              {/* Heading */}

              <h1 className="text-4xl font-bold leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-[3.5rem]">
                Engineering Today.
                <br />
                Sustaining{" "}
                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  Tomorrow.
                </span>
              </h1>

              {/* Description */}

              <p className="mt-4 max-w-xl text-sm leading-relaxed text-slate-500 sm:text-base">
                Delivering innovative engineering, digital solutions and
                sustainable infrastructure for a better future.
              </p>

              {/* CTA */}

              <div className="mt-8 flex flex-wrap gap-4">
                <button
                  type="button"
                  className="group flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-700 to-indigo-700 px-8 py-3.5 text-sm font-medium text-white shadow-lg shadow-blue-600/25 transition-all duration-300 hover:scale-105 hover:from-blue-800 hover:to-indigo-800 hover:shadow-blue-600/40"
                >
                  Explore Solutions

                  <ChevronRight
                    size={16}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </button>
              </div>
            </div>
          )}

          {/* ============================================================
              VIDEO CONTAINER
          ============================================================ */}

          <div
            className={
              isFullscreen
                ? "relative h-full w-full bg-black"
                : "relative aspect-video w-full overflow-hidden rounded-2xl border border-slate-200/60 bg-black shadow-2xl"
            }
          >
            {/* ============================================================
                VIDEO
            ============================================================ */}

            <video
              ref={videoRef}
              className={
                isFullscreen
                  ? "h-full w-full object-contain bg-black"
                  : "h-full w-full object-cover"
              }
              autoPlay
              muted={isMuted}
              loop
              playsInline
              preload="auto"
              controls={false}
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
              onEnded={() => setIsPlaying(false)}
            >
              <source src={heroVideo} type="video/mp4" />

              Your browser does not support the video tag.
            </video>

            {/* ============================================================
                VIDEO GRADIENT OVERLAY
            ============================================================ */}

            <div
              className={`pointer-events-none absolute inset-0 bg-gradient-to-t ${
                isFullscreen
                  ? "from-black/70 via-transparent to-black/20"
                  : "from-black/50 via-transparent to-transparent"
              }`}
            />

            {/* ============================================================
                TOP LABEL
            ============================================================ */}

            {!isFullscreen && (
              <div className="absolute left-4 top-4 z-20 flex items-center gap-2 rounded-full border border-white/10 bg-black/50 px-3 py-1.5 text-xs text-white/90 backdrop-blur-sm">
                <div className="h-2 w-2 animate-pulse rounded-full bg-red-500" />

                Infraplan Group
              </div>
            )}

            {/* ============================================================
                FULLSCREEN INFO OVERLAY
            ============================================================ */}

            {isFullscreen && (
              <div className="absolute bottom-24 left-6 right-6 z-20 text-white sm:left-10 sm:right-10">
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
            )}

            {/* ============================================================
                CENTER PLAY BUTTON
            ============================================================ */}

            {!isPlaying && (
              <button
                type="button"
                onClick={togglePlay}
                aria-label="Play video"
                className={`absolute left-1/2 top-1/2 z-30 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-white/20 text-white shadow-2xl backdrop-blur-md transition-all duration-300 hover:scale-110 hover:bg-white/30 ${
                  isFullscreen ? "h-20 w-20" : "h-16 w-16"
                }`}
              >
                <Play
                  size={isFullscreen ? 30 : 26}
                  className="ml-1"
                  fill="white"
                />
              </button>
            )}

            {/* ============================================================
                CUSTOM VIDEO CONTROLS
            ============================================================ */}

            <div
              className={
                isFullscreen
                  ? "absolute bottom-5 left-6 right-6 z-30 flex items-center justify-between sm:left-10 sm:right-10"
                  : "absolute bottom-3 left-3 right-3 z-30 flex items-center justify-between"
              }
            >
              {/* LEFT CONTROLS */}

              <div className="flex items-center gap-2">
                {/* PLAY / PAUSE */}

                <button
                  type="button"
                  onClick={togglePlay}
                  aria-label={isPlaying ? "Pause video" : "Play video"}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-black/35 text-white backdrop-blur-md transition-all duration-200 hover:scale-105 hover:bg-black/55 active:scale-95 sm:h-10 sm:w-10"
                >
                  {isPlaying ? (
                    <Pause size={16} strokeWidth={2.2} />
                  ) : (
                    <Play
                      size={16}
                      strokeWidth={2.2}
                      className="ml-0.5"
                      fill="currentColor"
                    />
                  )}
                </button>

                {/* MUTE / UNMUTE */}

                <button
                  type="button"
                  onClick={toggleMute}
                  aria-label={isMuted ? "Unmute video" : "Mute video"}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-black/35 text-white backdrop-blur-md transition-all duration-200 hover:scale-105 hover:bg-black/55 active:scale-95 sm:h-10 sm:w-10"
                >
                  {isMuted ? (
                    <VolumeX size={16} strokeWidth={2.2} />
                  ) : (
                    <Volume2 size={16} strokeWidth={2.2} />
                  )}
                </button>
              </div>

              {/* FULLSCREEN */}

              <button
                type="button"
                onClick={toggleFullscreen}
                aria-label={
                  isFullscreen ? "Exit fullscreen" : "Enter fullscreen"
                }
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-black/35 text-white backdrop-blur-md transition-all duration-200 hover:scale-105 hover:bg-black/55 active:scale-95 sm:h-10 sm:w-10"
              >
                {isFullscreen ? (
                  <Minimize2 size={16} strokeWidth={2.2} />
                ) : (
                  <Maximize2 size={16} strokeWidth={2.2} />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* ============================================================
            STATS GRID
        ============================================================ */}

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
  );
}