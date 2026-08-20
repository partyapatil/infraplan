import { ArrowRight, Shield, Users, Orbit } from "lucide-react";
import { Link } from "react-router-dom";

export default function HydraulicCTA() {
  return (
    <section className="relative overflow-hidden">
      {/* ================================
          TOP CURVED WAVE
      ================================= */}
      <div className="absolute top-0 left-0 w-full z-20 leading-none">
        <svg
          viewBox="0 0 1440 100"
          className="w-full h-16 sm:h-20 md:h-24"
          preserveAspectRatio="none"
        >
          <path
            d="
              M0,0
              L0,30
              C180,95 360,95 540,45
              C720,-5 900,-5 1080,45
              C1260,95 1350,70 1440,35
              L1440,0
              Z
            "
            fill="white"
          />
        </svg>
      </div>

      {/* ================================
          MAIN GRADIENT BACKGROUND
      ================================= */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-950 via-blue-800 to-indigo-900" />

      {/* ================================
          GRADIENT GLOW / MESH
      ================================= */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Top-left glow */}
        <div className="absolute -top-32 -left-32 w-[450px] h-[450px] rounded-full bg-blue-500/25 blur-3xl animate-float-slow" />

        {/* Right glow */}
        <div className="absolute top-1/4 -right-32 w-[420px] h-[420px] rounded-full bg-indigo-500/25 blur-3xl animate-float-slow delay-1000" />

        {/* Bottom center glow */}
        <div className="absolute -bottom-40 left-1/3 w-[500px] h-[400px] rounded-full bg-cyan-400/10 blur-3xl animate-float-slow delay-2000" />

        {/* Small center glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] rounded-full bg-blue-400/10 blur-3xl" />
      </div>

      {/* ================================
          SUBTLE GRID
      ================================= */}
      <div
        className="absolute inset-0 opacity-[0.06] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)",
          backgroundSize: "45px 45px",
        }}
      />

      {/* ================================
          DECORATIVE CURVED LINES
      ================================= */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
        <svg
          className="absolute top-16 left-0 w-full h-48"
          viewBox="0 0 1440 250"
          preserveAspectRatio="none"
        >
          <path
            d="M0 130 C280 20 500 210 760 100 C1000 0 1210 70 1440 150"
            fill="none"
            stroke="white"
            strokeWidth="1"
          />

          <path
            d="M0 175 C300 70 520 245 800 125 C1030 30 1240 105 1440 180"
            fill="none"
            stroke="white"
            strokeWidth="1"
            opacity="0.5"
          />
        </svg>
      </div>

      {/* ================================
          FLOATING PARTICLES
      ================================= */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white/20 animate-float"
            style={{
              width: i % 2 === 0 ? "7px" : "4px",
              height: i % 2 === 0 ? "7px" : "4px",
              top: `${12 + (i * 13) % 75}%`,
              left: `${5 + (i * 17) % 90}%`,
              animationDelay: `${i * 0.6}s`,
              animationDuration: `${4 + (i % 4)}s`,
            }}
          />
        ))}
      </div>

      {/* ================================
          DECORATIVE CIRCLES
      ================================= */}
      <div className="absolute -right-20 top-1/2 -translate-y-1/2 w-72 h-72 rounded-full border border-white/10 pointer-events-none" />
      <div className="absolute -right-10 top-1/2 -translate-y-1/2 w-52 h-52 rounded-full border border-white/10 pointer-events-none" />
      <div className="absolute -left-24 bottom-10 w-52 h-52 rounded-full border border-white/5 pointer-events-none" />

      {/* ================================
          CONTENT
      ================================= */}
      <div className="relative z-10 max-w-5xl mx-auto px-5 sm:px-8 lg:px-12 pt-28 sm:pt-32 pb-16 sm:pb-20">
        <div className="text-center">

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-blue-100 text-xs font-semibold tracking-wider uppercase mb-5 shadow-lg">
            <span className="w-2 h-2 rounded-full bg-cyan-300 animate-pulse" />
            Hydraulic Laboratory
          </div>

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight">
            Need Hydraulic{" "}
            <span className="text-blue-200">
              Model Studies?
            </span>
          </h2>

          {/* Underline */}
          <div className="flex justify-center mt-5">
            <div className="w-20 h-1 rounded-full bg-gradient-to-r from-cyan-300 to-blue-300" />
          </div>

          {/* Description */}
          <p className="text-sm sm:text-base md:text-lg text-blue-100/90 max-w-2xl mx-auto mt-5 leading-relaxed">
            Get in touch with our expert team for comprehensive physical,
            mathematical, and CFD modelling services.
          </p>

          {/* ================================
              BUTTONS
          ================================= */}
          <div className="flex flex-wrap justify-center gap-4 mt-8">

            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-7 sm:px-8 py-3.5 bg-white text-blue-700 font-semibold rounded-xl shadow-xl shadow-blue-950/20 hover:shadow-2xl hover:scale-105 transition-all duration-300 text-sm sm:text-base group"
            >
              Contact Laboratory

              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Link>

            <Link
              to="/case-studies"
              className="inline-flex items-center gap-2 px-7 sm:px-8 py-3.5 bg-white/10 backdrop-blur-md text-white font-semibold rounded-xl border border-white/25 hover:bg-white/20 hover:border-white/40 hover:scale-105 transition-all duration-300 text-sm sm:text-base"
            >
              View Case Studies
            </Link>

          </div>

          {/* ================================
              TRUST INDICATORS
          ================================= */}
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 mt-10 pt-7 border-t border-white/15 max-w-2xl mx-auto">

            <div className="flex items-center gap-2 text-sm text-blue-100">
              <span className="w-8 h-8 rounded-lg bg-white/10 backdrop-blur-md border border-white/10 flex items-center justify-center">
                <Shield size={16} />
              </span>
              <span>ISO Certified</span>
            </div>

            <div className="flex items-center gap-2 text-sm text-blue-100">
              <span className="w-8 h-8 rounded-lg bg-white/10 backdrop-blur-md border border-white/10 flex items-center justify-center">
                <Users size={16} />
              </span>
              <span>50+ Projects</span>
            </div>

            <div className="flex items-center gap-2 text-sm text-blue-100">
              <span className="w-8 h-8 rounded-lg bg-white/10 backdrop-blur-md border border-white/10 flex items-center justify-center">
                <Orbit size={16} />
              </span>
              <span>Global Expertise</span>
            </div>

          </div>
        </div>
      </div>

      {/* ================================
          ANIMATIONS
      ================================= */}
      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0) translateX(0);
            opacity: 0.4;
          }

          50% {
            transform: translateY(-20px) translateX(10px);
            opacity: 0.9;
          }
        }

        @keyframes float-slow {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }

          33% {
            transform: translate(20px, -20px) scale(1.05);
          }

          66% {
            transform: translate(-15px, 15px) scale(0.95);
          }
        }

        .animate-float {
          animation: float 5s ease-in-out infinite;
        }

        .animate-float-slow {
          animation: float-slow 9s ease-in-out infinite;
        }

        .delay-1000 {
          animation-delay: 1000ms;
        }

        .delay-2000 {
          animation-delay: 2000ms;
        }

        @media (prefers-reduced-motion: reduce) {
          .animate-float,
          .animate-float-slow {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
}