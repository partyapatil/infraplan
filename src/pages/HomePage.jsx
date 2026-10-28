import { useState, useEffect } from "react";
import { ChevronRight, ArrowUp, Droplets, Wind, Sun } from "lucide-react";
import { Link } from "react-router-dom";

import TrustedBySection from "../components/TrustedBySection";
import ContactSection from "../components/ContactSection";
import JourneySection from "../components/JourneySection";
import HeroSection from "../components/HeroSection";
import laboImage from "../assets/labo.png";
import toolboxImage from "../assets/toolbox.png";

const contImage =
  "https://res.cloudinary.com/ddpunpqre/image/upload/v1792995652/Infraplan_Engineering_Construction_Site_ljywhl.jpg";

const verticals = [
  {
    title: "Engineering Contractors",
    desc: "Construction and Rehabilitation of Water Supply Schemes.",
    img: contImage,
    icon: Sun,
    color: "from-amber-600 to-orange-700",
    href: "/contract",
  },
  {
    title: "Hydraulic Laboratory",
    desc: "Physical and Mathematical model studies for hydraulic structures.",
    img: laboImage,
    icon: Wind,
    color: "from-cyan-600 to-teal-700",
    href: "/hydrolic",
  },
  {
    title: "SigmaToolBox",
    desc: "Online toolsets for managing drinking water supply pipe networks.",
    img: toolboxImage,
    icon: Droplets,
    color: "from-blue-600 to-blue-800",
    href: "/toolbox",
  },
];

export default function InfraplanPage() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 400);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <div className="min-h-screen bg-white font-sans text-slate-800 antialiased">
      <HeroSection />

      {/* BUSINESS VERTICALS */}
      <section className="border-y border-slate-100 bg-gradient-to-b from-white to-slate-50/50 px-5 py-16 sm:px-8 sm:py-20 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center sm:mb-14">
            <span className="text-xs font-semibold uppercase tracking-widest text-blue-700">
              Our Expertise
            </span>
            <h2 className="mt-2 text-2xl font-bold text-slate-900 sm:text-3xl">
              Business{" "}
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Verticals
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {verticals.map((v) => {
              const Icon = v.icon;

              return (
                <Link
                  key={v.title}
                  to={v.href}
                  className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-md transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                >
                  {/* Image */}
                  <div className="relative h-48 shrink-0 overflow-hidden">
                    <div
                      className="h-full w-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                      style={{ backgroundImage: `url(${v.img})` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/20 to-transparent" />
                    <div
                      className={`pointer-events-none absolute -right-6 -top-6 h-28 w-28 rounded-full bg-gradient-to-br ${v.color} opacity-20 blur-2xl transition-opacity duration-500 group-hover:opacity-40`}
                    />
                    <div className="absolute bottom-4 left-4 flex items-center gap-2.5">
                      <div
                        className={`rounded-xl bg-gradient-to-r ${v.color} p-2.5 text-white shadow-lg transition-transform duration-300 group-hover:scale-110`}
                      >
                        <Icon size={18} />
                      </div>
                      <span className="text-sm font-semibold text-white drop-shadow-sm">
                        {v.title}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex flex-1 flex-col p-6">
                    <p className="text-sm leading-relaxed text-slate-600">
                      {v.desc}
                    </p>
                    <span className="mt-auto inline-flex items-center gap-1 pt-4 text-sm font-semibold text-blue-700 transition-colors group-hover:text-blue-800">
                      Learn More
                      <ChevronRight
                        size={16}
                        className="transition-transform duration-300 group-hover:translate-x-1"
                      />
                    </span>
                  </div>

                  {/* Bottom accent line */}
                  <div className="mt-auto h-0.5 w-0 shrink-0 bg-gradient-to-r from-blue-600 to-indigo-600 transition-all duration-500 group-hover:w-full" />
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <TrustedBySection />
      <JourneySection />
      <ContactSection />

      {/* SCROLL TO TOP */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="animate-fade-in fixed bottom-8 right-8 z-50 rounded-xl bg-gradient-to-r from-blue-700 to-indigo-700 p-3 text-white shadow-lg shadow-blue-600/30 transition-all duration-300 hover:scale-110 hover:shadow-blue-600/50"
          aria-label="Scroll to top"
        >
          <ArrowUp size={20} />
        </button>
      )}

      <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: scale(0.9); }
          to { opacity: 1; transform: scale(1); }
        }
        .animate-fade-in {
          animation: fade-in 0.3s ease-out;
        }
      `}</style>
    </div>
  );
}