import { useState, useEffect } from "react";
import {
  Menu,
  X,
  ChevronRight,
  ChevronDown,
  Mail,
  Phone,
  MapPin,
  ArrowUp,
  ArrowRight,
  Globe,
  Shield,
  Award,
  Users,
  Droplets,
  Wind,
  Sun,
  Maximize2,
  Play,
  Quote,
} from "lucide-react";
import TrustedBySection from "../components/TrustedBySection";
import ContactSection from "../components/ContactSection";
import JourneySection from "../components/JourneySection";
import FeaturesStrip from "../components/FeaturesStrip";
import HeroSection from "../components/HeroSection";
import contImage from "../assets/infraplanCont.png";
import laboImage from "../assets/labo.png";
import Tank from "../assets/tank.png";
import Lab from "../assets/lab.png";
import toolboxImage from "../assets/toolbox.png";

const nav = [
  { label: "Home", active: true },
  { label: "About Us" },
  { label: "Services", dropdown: true },
  { label: "Projects" },
  { label: "Sigma ToolBox" },
  { label: "Resources", dropdown: true },
  { label: "Careers" },
];

const stats = [
  { value: "15+", label: "Years of Excellence", icon: Award },
  { value: "300+", label: "Projects Delivered", icon: Shield },
  { value: "20+", label: "Countries Served", icon: Globe },
  { value: "150+", label: "Happy Clients", icon: Users },
];

const footerLinks = {
  Company: ["About Us", "Careers", "Newsroom", "Contact Us"],
  Services: ["Hydraulic Laboratory", "Engineering & Construction", "SigmaToolBox"],
  Resources: ["Case Studies", "Whitepapers", "Blog", "FAQs"],
};

const verticals = [
  {
    title: "Engineering Contractors",
    desc: "Construction and Rehabilitation of Water Supply Schemes.",
    img: contImage,
    icon: Sun,
    color: "from-amber-600 to-orange-700",
  },
  {
    title: "Hydraulic Laboratory",
    desc: "Physical and Mathematical model studies for hydraulic structures.",
    img: laboImage,
    icon: Wind,
    color: "from-cyan-600 to-teal-700",
  },
  {
    title: "SigmaToolBox",
    desc: "Online toolsets for managing drinking water supply pipe networks.",
    img: toolboxImage,
    icon: Droplets,
    color: "from-blue-600 to-blue-800",
  },
];

const projects = [
  {
    title: "24x7 Water Supply Project",
    location: "Balrampur, Karnataka",
    img: Tank,
    status: "Completed",
  },
  {
    title: "XONI MLD STP Project",
    location: "Pune, Maharashtra",
    img: Lab,
    status: "In Progress",
  },
  {
    title: "Smart Water Network",
    location: "Gujarat",
    img: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=600&h=400&fit=crop",
    status: "Completed",
  },
  {
    title: "Industrial Water System",
    location: "JSW Steel Plant, Vijayanagar",
    img: "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?w=600&h=400&fit=crop",
    status: "Planning",
  },
];

const testimonials = [
  {
    quote:
      "Infraplan's expertise in water infrastructure has been instrumental in our city's development. Their innovative solutions and commitment to quality are unmatched.",
    author: "Dr. Rajesh Kumar",
    role: "Municipal Commissioner, Balrampur",
    rating: 5,
  },
  {
    quote:
      "The SigmaToolBox platform has revolutionized how we manage our water utilities. Exceptional product with outstanding support.",
    author: "Priya Patel",
    role: "CEO, AquaTech Solutions",
    rating: 5,
  },
];

const statusStyles = {
  Completed: "bg-emerald-500/90 text-white",
  "In Progress": "bg-amber-500/90 text-white",
  Planning: "bg-blue-500/90 text-white",
};

export default function InfraplanPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 400);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans antialiased">
      {/* =========================================================
          MOBILE MENU
      ========================================================= */}
      {menuOpen && (
        <div className="animate-slide-down fixed inset-x-0 top-[73px] z-40 flex flex-col gap-4 border-b border-slate-100 bg-white/98 px-5 py-6 text-sm text-slate-600 shadow-lg backdrop-blur-lg lg:hidden">
          {nav.map((item) => (
            <a
              key={item.label}
              href="#"
              className={`flex items-center justify-between rounded-lg px-3 py-2 transition-colors hover:bg-slate-50 ${
                item.active ? "bg-blue-50 font-semibold text-blue-700" : ""
              }`}
            >
              <span>{item.label}</span>
              {item.dropdown && <ChevronDown size={16} className="opacity-60" />}
            </a>
          ))}
          <button className="mt-2 rounded-xl bg-gradient-to-r from-blue-700 to-indigo-700 px-5 py-3 text-sm font-medium text-white shadow-md shadow-blue-600/20">
            Contact Us
          </button>
        </div>
      )}

      <HeroSection />

      {/* =========================================================
          BUSINESS VERTICALS
      ========================================================= */}
      <section className="border-y border-slate-100 bg-gradient-to-b from-white to-slate-50/50 px-5 py-16 sm:px-8 sm:py-20 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center sm:mb-14">
            <span className="text-xs font-semibold tracking-widest text-blue-700 uppercase">
              Our Expertise
            </span>
            <h2 className="mt-2 text-2xl font-bold text-slate-900 sm:text-3xl">
              Business{" "}
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Verticals
              </span>
            </h2>
            <p className="mx-auto mt-2 max-w-2xl text-sm text-slate-500">
              Delivering excellence across three key pillars of water infrastructure
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {verticals.map((v) => {
              const Icon = v.icon;
              return (
                <div
                  key={v.title}
                  className="group relative overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-md transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
                >
                  <div className="relative h-48 overflow-hidden">
                    <div
                      className="h-full w-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                      style={{ backgroundImage: `url(${v.img})` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/20 to-transparent" />

                    {/* Corner accent glow */}
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

                  <div className="p-6">
                    <p className="text-sm leading-relaxed text-slate-600">{v.desc}</p>
                    <a
                      href="#"
                      className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-blue-700 transition-colors group-hover:text-blue-800"
                    >
                      Learn More
                      <ChevronRight size={16} className="transition-transform group-hover:translate-x-1" />
                    </a>
                  </div>

                  {/* Bottom accent line on hover */}
                  <div
                    className={`h-0.5 w-0 bg-gradient-to-r ${v.color} transition-all duration-500 group-hover:w-full`}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <JourneySection />
      <TrustedBySection />

      {/* =========================================================
          FEATURED PROJECTS
      ========================================================= */}
      <section className="bg-white px-5 py-16 sm:px-8 sm:py-20 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex flex-col items-center justify-between gap-3 sm:mb-12 sm:flex-row">
            <div className="text-center sm:text-left">
              <span className="text-xs font-semibold tracking-widest text-blue-700 uppercase">
                Our Work
              </span>
              <h2 className="mt-1 text-2xl font-bold text-slate-900 sm:text-3xl">
                Featured{" "}
                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  Projects
                </span>
              </h2>
            </div>

            <a
              href="#"
              className="group inline-flex items-center gap-1.5 rounded-xl border border-blue-100 bg-blue-50/60 px-4 py-2 text-sm font-semibold text-blue-700 transition-all hover:bg-blue-50 hover:shadow-sm"
            >
              View All Projects
              <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
            </a>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {projects.map((p) => (
              <div
                key={p.title}
                className="group overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
              >
                <div className="relative h-48 overflow-hidden">
                  <div
                    className="h-full w-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                    style={{ backgroundImage: `url(${p.img})` }}
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                  <div className="absolute right-3 top-3">
                    <span
                      className={`rounded-full px-3 py-1 text-xs font-semibold shadow-sm backdrop-blur-sm ${statusStyles[p.status]}`}
                    >
                      {p.status}
                    </span>
                  </div>
                </div>

                <div className="p-5">
                  <h3 className="mb-1 text-sm font-semibold text-slate-900">{p.title}</h3>
                  <p className="mb-3 flex items-center gap-1 text-xs text-slate-400">
                    <MapPin size={11} className="shrink-0" />
                    {p.location}
                  </p>
                  <a
                    href="#"
                    className="inline-flex items-center gap-1 text-xs font-semibold text-blue-700 transition-colors group-hover:text-blue-800"
                  >
                    Read More
                    <ChevronRight size={12} className="transition-transform group-hover:translate-x-1" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          TESTIMONIALS
      ========================================================= */}
      <section className="border-y border-slate-100 bg-gradient-to-br from-slate-50 to-blue-50/30 px-5 py-16 sm:px-8 sm:py-20 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center sm:mb-14">
            <span className="text-xs font-semibold tracking-widest text-blue-700 uppercase">
              Testimonials
            </span>
            <h2 className="mt-2 text-2xl font-bold text-slate-900 sm:text-3xl">
              What Our{" "}
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Clients Say
              </span>
            </h2>
          </div>
<div className="grid grid-cols-1 gap-6 md:grid-cols-2">
  {testimonials.map((t, index) => (
    <div
      key={index}
      className="group relative overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-8 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
    >
      {/* Subtler quote icon size and positioning */}
      <Quote
        size={36}
        strokeWidth={1.5}
        className="pointer-events-none absolute right-4 top-4 text-slate-200/70 transition-colors duration-300 group-hover:text-blue-200"
      />

      <div className="relative mb-4 flex gap-1">
        {[...Array(t.rating)].map((_, i) => (
          <span key={i} className="text-amber-400">
            ★
          </span>
        ))}
      </div>

      <p className="relative text-sm italic leading-relaxed text-slate-600">
        "{t.quote}"
      </p>

      <div className="relative mt-5 flex items-center gap-3 border-t border-slate-100 pt-5">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-indigo-700 text-sm font-bold text-white">
          {t.author.charAt(0)}
        </div>
        <div>
          <p className="text-sm font-semibold text-slate-900">{t.author}</p>
          <p className="text-xs text-slate-400">{t.role}</p>
        </div>
      </div>
    </div>
  ))}
</div>
        </div>
      </section>

      <FeaturesStrip />
      <ContactSection />

      {/* =========================================================
          SCROLL TO TOP
      ========================================================= */}
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
        @keyframes slide-down {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fade-in {
          from { opacity: 0; transform: scale(0.9); }
          to { opacity: 1; transform: scale(1); }
        }
        .animate-slide-down {
          animation: slide-down 0.3s ease-out;
        }
        .animate-fade-in {
          animation: fade-in 0.3s ease-out;
        }
      `}</style>
    </div>
  );
}