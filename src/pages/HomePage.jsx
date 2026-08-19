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
  Globe,
  Shield,
  Award,
  Users,
  Droplets,
  Wind,
  Sun,
  Maximize2,
  Play,
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
    quote: "Infraplan's expertise in water infrastructure has been instrumental in our city's development. Their innovative solutions and commitment to quality are unmatched.",
    author: "Dr. Rajesh Kumar",
    role: "Municipal Commissioner, Balrampur",
    rating: 5,
  },
  {
    quote: "The SigmaToolBox platform has revolutionized how we manage our water utilities. Exceptional product with outstanding support.",
    author: "Priya Patel",
    role: "CEO, AquaTech Solutions",
    rating: 5,
  },
];

export default function InfraplanPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // Scroll to top button visibility
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans antialiased">
      {/* Header */}
    

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[73px] z-40 bg-white/98 backdrop-blur-lg border-b border-slate-100 px-5 py-6 flex flex-col gap-4 text-sm text-slate-600 shadow-lg animate-slide-down">
          {nav.map((item) => (
            <a
              key={item.label}
              href="#"
              className={`flex items-center justify-between py-2 px-3 rounded-lg hover:bg-slate-50 transition-colors ${
                item.active ? "text-blue-700 font-semibold bg-blue-50" : ""
              }`}
            >
              <span>{item.label}</span>
              {item.dropdown && <ChevronDown size={16} className="opacity-60" />}
            </a>
          ))}
          <button className="mt-2 bg-gradient-to-r from-blue-700 to-indigo-700 text-white text-sm font-medium px-5 py-3 rounded-xl shadow-md shadow-blue-600/20">
            Contact Us
          </button>
        </div>
      )}

      {/* Hero Section */}
<HeroSection />

    

      {/* Business Verticals */}
      <section className="px-5 sm:px-8 lg:px-12 py-16 bg-gradient-to-b from-white to-slate-50/50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-xs font-semibold tracking-widest text-blue-700 uppercase">Our Expertise</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-2">
              Business <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Verticals</span>
            </h2>
            <p className="text-sm text-slate-500 mt-2 max-w-2xl mx-auto">
              Delivering excellence across three key pillars of water infrastructure
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {verticals.map((v) => {
              const Icon = v.icon;
              return (
                <div 
                  key={v.title} 
                  className="group relative rounded-2xl overflow-hidden border border-slate-200/80 bg-white shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
                >
                  <div className="relative h-48 overflow-hidden">
                    <div 
                      className="h-full w-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110" 
                      style={{ backgroundImage: `url(${v.img})` }} 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                    <div className="absolute bottom-4 left-4 flex items-center gap-2">
                      <div className={`p-2 rounded-xl bg-gradient-to-r ${v.color} text-white shadow-lg`}>
                        <Icon size={18} />
                      </div>
                      <span className="text-white font-semibold text-sm">{v.title}</span>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-sm text-slate-600 leading-relaxed">{v.desc}</p>
                    <a href="#" className="inline-flex items-center gap-1 mt-4 text-sm font-medium text-blue-700 group-hover:text-blue-800 transition-colors">
                      Learn More 
                      <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
        <JourneySection />
      <TrustedBySection />

      {/* Featured Projects */}
      <section className="px-5 sm:px-8 lg:px-12 py-16 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row items-center justify-between mb-10">
            <div>
              <span className="text-xs font-semibold tracking-widest text-blue-700 uppercase">Our Work</span>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-1">
                Featured <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Projects</span>
              </h2>
            </div>
            {/* <a href="#" className="group inline-flex items-center gap-1 text-sm font-medium text-blue-700 hover:text-blue-800 transition-colors mt-2 sm:mt-0">
              View All Projects 
              <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a> */}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {projects.map((p) => (
              <div 
                key={p.title} 
                className="group rounded-2xl overflow-hidden border border-slate-200/80 bg-white shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              >
                <div className="relative h-48 overflow-hidden">
                  <div 
                    className="h-full w-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110" 
                    style={{ backgroundImage: `url(${p.img})` }} 
                  />
                  <div className="absolute top-3 right-3">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-sm ${
                      p.status === "Completed" ? "bg-emerald-500/90 text-white" :
                      p.status === "In Progress" ? "bg-amber-500/90 text-white" :
                      "bg-blue-500/90 text-white"
                    }`}>
                      {p.status}
                    </span>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-semibold text-slate-900 text-sm mb-1">{p.title}</h3>
                  <p className="text-xs text-slate-400 mb-3">{p.location}</p>
                  <a href="#" className="inline-flex items-center gap-1 text-xs font-medium text-blue-700 group-hover:text-blue-800 transition-colors">
                    Read More
                    <ChevronRight size={12} className="group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="px-5 sm:px-8 lg:px-12 py-16 bg-gradient-to-br from-slate-50 to-blue-50/30 border-y border-slate-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-xs font-semibold tracking-widest text-blue-700 uppercase">Testimonials</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-2">
              What Our <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Clients Say</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {testimonials.map((t, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl border border-slate-200/80 shadow-md hover:shadow-xl transition-all duration-300">
                <div className="flex gap-1 mb-4">
                  {[...Array(t.rating)].map((_, i) => (
                    <span key={i} className="text-amber-400">★</span>
                  ))}
                </div>
                <p className="text-sm text-slate-600 leading-relaxed italic">"{t.quote}"</p>
                <div className="mt-4 pt-4 border-t border-slate-100">
                  <p className="font-semibold text-slate-900 text-sm">{t.author}</p>
                  <p className="text-xs text-slate-400">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FeaturesStrip />
      <ContactSection />

      

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 p-3 bg-gradient-to-r from-blue-700 to-indigo-700 text-white rounded-xl shadow-lg shadow-blue-600/30 hover:shadow-blue-600/50 hover:scale-110 transition-all duration-300 animate-fade-in"
          aria-label="Scroll to top"
        >
          <ArrowUp size={20} />
        </button>
      )}

      {/* Animations */}
      <style>{`
        @keyframes slide-down {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
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