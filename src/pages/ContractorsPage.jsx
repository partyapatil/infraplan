import React, { useState, useEffect } from "react";
import {
  Building2,
  Droplets,
  Sun,
  Zap,
  Gauge,
  Wrench,
  BarChart3,
  Activity,
  FileText,
  MapPin,
  Mail,
  Phone,
  ChevronDown,
  CheckCircle,
  ArrowRight,
  Award,
  Users,
  ChevronLeft,
  ChevronRight,
  Play,
  Pause,
  Shield,
  Rocket,
} from "lucide-react";

// Consistent navigation
const nav = [
  { label: "Home", active: false },
  { label: "About Us", active: false },
  { label: "Services", active: true, dropdown: true },
  { label: "Projects" },
  { label: "Sigma ToolBox" },
  { label: "Resources", dropdown: true },
  { label: "Careers" },
];

// Image data for the sliding carousel
const serviceImages = [
  {
    id: 1,
    title: "Water Treatment Plant",
    description: "State-of-the-art water treatment facilities",
    image: "https://images.unsplash.com/photo-1519046904884-53103b34b206?w=800&h=600&fit=crop",
  },
  {
    id: 2,
    title: "Pumping Station",
    description: "Advanced LT-HT pumping stations",
    image: "https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?w=800&h=600&fit=crop",
  },
  {
    id: 3,
    title: "SCADA Systems",
    description: "Real-time monitoring and control",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
  },
  {
    id: 4,
    title: "Pipeline Infrastructure",
    description: "Extensive pipe laying and distribution networks",
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&h=600&fit=crop",
  },
  {
    id: 5,
    title: "Solar Installations",
    description: "Renewable energy solutions",
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&h=600&fit=crop",
  },
];

export default function ContractorsPage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [activeServiceTab, setActiveServiceTab] = useState(0);
  
  const serviceTabs = [
    { 
      id: 0, 
      title: "New Water Supply Schemes", 
      icon: Building2,
      items: [
        "Civil works such as water treatment plant, Jack-well, Elevated/Ground service Reservoirs, Pipe laying, House Connection and Metering.",
        "Electrical and Mechanical works such as Pumping and Treatment Machinery, LT-HT Pumping Stations, Substations etc.",
        "Instrumentation (SCADA) works to measure, control and analyze all the parameters such as Levels, Pressure, Energy, Quality etc."
      ]
    },
    { 
      id: 1, 
      title: "Reforms & Renovation Projects", 
      icon: Gauge,
      subtitle: "With Focus On NRW Reduction",
      items: [
        "Projects aiming of reducing cost, saving water involved in various water supply scheme items",
        "Pumping stations and machineries improvement",
        "Pipe-arrangement improvement",
        "Water and Energy Audits",
        "Leak Detection",
        "Monitoring systems",
        "Water Billing optimization"
      ]
    },
    { 
      id: 2, 
      title: "Renewable Energy – Solar Installations", 
      icon: Sun,
      items: [
        "On Grid solar systems",
        "Off Grid solar systems",
        "Solar High Masts",
        "Solar Street Lights"
      ]
    }
  ];

  // Auto-slide functionality
  useEffect(() => {
    let interval;
    if (isAutoPlaying) {
      interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % serviceImages.length);
      }, 4000);
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % serviceImages.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + serviceImages.length) % serviceImages.length);
    setIsAutoPlaying(false);
  };

  const toggleAutoPlay = () => {
    setIsAutoPlaying(!isAutoPlaying);
  };

  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans antialiased">
      {/* Header - IDENTICAL to home and about pages */}
  

      {/* Hero Section - Consistent with other pages */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50/50 via-white to-cyan-50/30 px-5 sm:px-8 lg:px-12 pt-12 pb-10 lg:pt-20 lg:pb-16">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-600/10 text-blue-700 text-xs font-semibold tracking-wider uppercase mb-6 border border-blue-200/30">
            <Wrench size={14} />
            Our Services
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-bold text-slate-900 leading-tight tracking-tight">
            Engineering <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Contractors</span>
          </h1>
          <p className="mt-4 text-sm sm:text-base text-slate-500 max-w-2xl mx-auto leading-relaxed">
            Delivering comprehensive engineering solutions for water infrastructure projects with excellence and innovation.
          </p>
        </div>
      </section>

      {/* Main Services Section - Split Layout with Sliding Images */}
      <section className="px-5 sm:px-8 lg:px-12 py-16 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-xs font-semibold tracking-widest text-blue-700 uppercase">What We Do</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-2">
              Our Core <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Engineering Services</span>
            </h2>
          </div>

          {/* Service Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {serviceTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveServiceTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 ${
                  activeServiceTab === tab.id
                    ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-600/25"
                    : "bg-slate-50 text-slate-600 hover:bg-slate-100"
                }`}
              >
                <tab.icon size={16} />
                {tab.title}
              </button>
            ))}
          </div>

          {/* Split Layout: Image Slider Left | Content Right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left: Image Slider */}
            <div className="relative group rounded-2xl overflow-hidden bg-slate-100 shadow-lg h-[500px]">
              <div 
                className="w-full h-full bg-cover bg-center transition-all duration-700 ease-in-out"
                style={{ backgroundImage: `url(${serviceImages[currentSlide].image})` }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              </div>

              {/* Image Counter & Title */}
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-xl font-bold">{serviceImages[currentSlide].title}</h3>
                <p className="text-sm text-white/80">{serviceImages[currentSlide].description}</p>
                <div className="flex items-center gap-2 mt-2">
                  <span className="text-xs bg-white/20 px-3 py-1 rounded-full">
                    {currentSlide + 1} / {serviceImages.length}
                  </span>
                </div>
              </div>

              {/* Navigation Arrows */}
              <button
                onClick={prevSlide}
                className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-all opacity-0 group-hover:opacity-100"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-all opacity-0 group-hover:opacity-100"
              >
                <ChevronRight size={20} />
              </button>

              {/* Auto-Play Controls */}
              <button
                onClick={toggleAutoPlay}
                className="absolute top-3 right-3 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-all"
              >
                {isAutoPlaying ? <Pause size={16} /> : <Play size={16} />}
              </button>

              {/* Dot Indicators */}
              <div className="absolute bottom-20 left-1/2 -translate-x-1/2 flex gap-1.5">
                {serviceImages.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      setCurrentSlide(idx);
                      setIsAutoPlaying(false);
                    }}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      idx === currentSlide 
                        ? "w-6 bg-white" 
                        : "bg-white/50 hover:bg-white/80"
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Right: Service Content */}
            <div className="flex flex-col justify-center">
              <div className="bg-gradient-to-br from-slate-50 to-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-md">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-xl bg-blue-100 text-blue-700">
                    {React.createElement(serviceTabs[activeServiceTab].icon, { size: 24 })}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">
                      {serviceTabs[activeServiceTab].title}
                    </h3>
                    {serviceTabs[activeServiceTab].subtitle && (
                      <p className="text-sm text-slate-500">{serviceTabs[activeServiceTab].subtitle}</p>
                    )}
                  </div>
                </div>

                <div className="space-y-3 mt-4">
                  {serviceTabs[activeServiceTab].items.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3 p-3 rounded-xl bg-white border border-slate-100 hover:shadow-md transition-all">
                      <CheckCircle size={18} className="text-blue-600 mt-0.5 shrink-0" />
                      <p className="text-sm text-slate-700 leading-relaxed">{item}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-6 pt-4 border-t border-slate-200">
                  <button className="inline-flex items-center gap-2 text-sm font-semibold text-blue-700 hover:text-blue-800 transition-colors">
                    Learn More About This Service
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section - Consistent with home page */}
      <section className="px-5 sm:px-8 lg:px-12 py-16 bg-gradient-to-br from-slate-50 to-blue-50/30 border-y border-slate-100">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {[
              { value: "150+", label: "Projects Executed", icon: Building2 },
              { value: "50+", label: "Water Schemes", icon: Droplets },
              { value: "30+", label: "Solar Installations", icon: Sun },
              { value: "98%", label: "Client Satisfaction", icon: Users },
            ].map((stat) => {
              const Icon = stat.icon;
              return (
                <div key={stat.label} className="text-center group">
                  <div className="inline-flex p-3 rounded-xl bg-white shadow-md text-blue-600 mb-3 group-hover:scale-110 transition-transform">
                    <Icon size={24} />
                  </div>
                  <div className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">{stat.value}</div>
                  <div className="text-xs text-slate-500 mt-0.5">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Map Section */}
<section className="px-5 sm:px-8 lg:px-12 py-16 bg-white border-b border-slate-100">
  <div className="max-w-7xl mx-auto">
    <div className="text-center mb-10">
      <span className="text-xs font-semibold tracking-widest text-blue-700 uppercase">Our Presence</span>
      <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-2">
        Project <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Locations</span>
      </h2>
      <p className="text-sm text-slate-500 mt-2 max-w-2xl mx-auto leading-relaxed">
        Delivering engineering excellence across Maharashtra and beyond
      </p>
    </div>
    
    <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-lg">
      {/* Map Container */}
      <div className="relative w-full h-[400px] sm:h-[500px] bg-slate-100">
        {/* Google Maps Embed - India View with Markers */}
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15077668.411596345!2d72.83656430606691!3d22.862330864450733!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b745d5b7c4bd%3A0x816e0a5f1b0b3e9f!2sMaharashtra!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
          className="absolute inset-0 w-full h-full"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Project Locations Map"
        />
        
        {/* Overlay Gradient - for better visibility of text */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
        
        {/* Location Badge - Bottom Left */}
        <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-md rounded-xl px-4 py-2 shadow-lg border border-white/50 pointer-events-none">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-xs font-medium text-slate-700">Live Tracking</span>
          </div>
        </div>

        {/* Location Tags - Bottom Right */}
        <div className="absolute bottom-4 right-4 flex flex-wrap justify-end gap-1.5 max-w-[200px] pointer-events-none">
          {["Kolhapur", "Pune", "Mumbai", "Bengaluru", "Delhi", "Chennai"].map((city) => (
            <span key={city} className="px-2.5 py-1 bg-white/90 backdrop-blur-sm rounded-lg border border-slate-200/80 text-[10px] font-medium text-slate-700 shadow-sm">
              📍 {city}
            </span>
          ))}
        </div>
      </div>
    </div>
  </div>
</section>

      {/* CTA Section - Consistent with other pages */}
    <section className="relative overflow-hidden">
  {/* Wave Divider at Top */}
  <div className="absolute top-0 left-0 right-0 z-10 leading-none">
    <svg viewBox="0 0 1440 80" className="w-full h-16 sm:h-20" preserveAspectRatio="none">
      <path
        d="M0,32 C240,80 480,0 720,24 C960,48 1200,96 1440,40 L1440,0 L0,0 Z"
        fill="white"
      />
    </svg>
  </div>

  {/* Background Gradient */}
  <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-indigo-700 to-purple-800" />
  
  {/* Animated Background Elements */}
  <div className="absolute inset-0 overflow-hidden">
    <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full blur-3xl animate-pulse" />
    <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-400/20 rounded-full blur-3xl animate-pulse delay-1000" />
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-400/10 rounded-full blur-3xl animate-pulse delay-500" />
    
    {/* Floating Particles */}
    <div className="absolute inset-0">
      {[...Array(6)].map((_, i) => (
        <div
          key={i}
          className="absolute w-2 h-2 bg-white/20 rounded-full animate-float"
          style={{
            top: `${10 + i * 15}%`,
            left: `${5 + i * 15}%`,
            animationDelay: `${i * 0.5}s`,
            animationDuration: `${4 + i}s`,
          }}
        />
      ))}
    </div>
  </div>

  {/* Content */}
  <div className="relative px-5 sm:px-8 lg:px-12 py-20 lg:py-28 max-w-4xl mx-auto text-center text-white">
    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-white/90 text-xs font-semibold tracking-wider uppercase mb-6 border border-white/20">
      <Rocket size={14} />
      Let's Get Started
    </div>
    
    <h2 className="text-3xl sm:text-4xl font-bold mb-4">
      Ready to Start Your <span className="text-blue-200">Project?</span>
    </h2>
    
    <p className="text-lg text-blue-100 max-w-2xl mx-auto mb-8 leading-relaxed">
      Let's discuss your engineering contracting needs and create sustainable water infrastructure solutions.
    </p>
    
    <div className="flex flex-wrap justify-center gap-4">
      <button className="inline-flex items-center gap-2 px-8 py-3.5 bg-white text-blue-700 font-semibold rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 text-sm sm:text-base group">
        Get in Touch
        <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
      </button>
      <button className="inline-flex items-center gap-2 px-8 py-3.5 bg-white/20 backdrop-blur-sm text-white font-semibold rounded-xl border border-white/30 hover:bg-white/30 hover:scale-105 transition-all duration-300 text-sm sm:text-base">
        Learn More
      </button>
    </div>

    {/* Trust Indicators */}
    <div className="flex flex-wrap justify-center gap-6 mt-8 pt-8 border-t border-white/20">
      <div className="flex items-center gap-2 text-sm text-blue-100">
        <Shield size={16} />
        <span>ISO Certified</span>
      </div>
      <div className="flex items-center gap-2 text-sm text-blue-100">
        <Award size={16} />
        <span>15+ Years Experience</span>
      </div>
      <div className="flex items-center gap-2 text-sm text-blue-100">
        <Users size={16} />
        <span>300+ Projects</span>
      </div>
    </div>
  </div>

  {/* Animation Styles */}
  <style>{`
    @keyframes float {
      0%, 100% { transform: translateY(0px) rotate(0deg); }
      50% { transform: translateY(-20px) rotate(180deg); }
    }
    .animate-float {
      animation: float linear infinite;
    }
    .delay-1000 {
      animation-delay: 1000ms;
    }
    .delay-500 {
      animation-delay: 500ms;
    }
  `}</style>
</section>


    </div>
  );
}