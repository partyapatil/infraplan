import React, { useState } from "react";
import {
  Building2,
  Droplets,
  Sun,
  MapPin,
  Mail,
  Phone,
  ChevronDown,
  CheckCircle,
  ArrowRight,
  Users,
  Microscope,
  Calculator,
  Waves,
  BarChart3,
  Activity,
  Gauge,
  ChevronRight,
  Play,
  Pause,
  Maximize2,
  Layers,
  Database,
  Cpu,
  Orbit,
  Shield,
  Zap,
  CreditCard,
  Bell,
  FileText,
  TrendingUp,
  Clock,
  Smartphone,
  Globe,
  Lock,
  RefreshCw,
  PieChart,
  AlertCircle,
  Sparkles,
  Rocket,
  Award,
  BookOpen,
  LayoutDashboard,
  FileBarChart,
  WifiOff,
  Timer,
  Landmark,
  Waves as WavesIcon,
  Mountain,
  TreePine,
} from "lucide-react";

// Consistent navigation
const nav = [
  { label: "Home", active: false },
  { label: "About Us", active: false },
  { label: "Services", active: true, dropdown: true },
  { label: "Projects" },
  { label: "Sigma ToolBox", active: true },
  { label: "Resources", dropdown: true },
  { label: "Careers" },
];

// Product data
const products = {
  live: {
    name: "Aquabill",
    icon: CreditCard,
    description: "The water tax billing system with billing cycles, customizable tariffs, meter tracking, zone-based management, bill generation, online payments, email/SMS alerts & reports. Simplifies billing, reduces manual work & ensures accuracy.",
    features: [
      "Billing Cycles with Customizable Tariffs",
      "Zone-Based Management",
      "Automated Bill Generation",
      "Online Payments Integration",
      "Email & SMS Alerts",
      "Reports & Analytics",
      "Meter Tracking",
      "Offline Mode Support",
      "Auto Reports",
    ],
    status: "Live From 7 July",
    color: "from-blue-600 to-indigo-700",
    gradient: "from-blue-50 to-indigo-50/30",
    borderColor: "border-blue-200",
    iconColor: "text-blue-600",
  },
  upcoming: [
    {
      name: "WaterLod",
      icon: Droplets,
      description: "Advanced water quality monitoring and management system for utilities and municipalities.",
      features: ["Real-time water quality monitoring", "Automated alerts", "Compliance reporting", "Data visualization"],
      status: "Launching Soon",
      color: "from-cyan-600 to-teal-700",
      gradient: "from-cyan-50 to-teal-50/30",
      borderColor: "border-cyan-200",
      iconColor: "text-cyan-600",
    },
    {
      name: "River",
      icon: WavesIcon,
      description: "Comprehensive river basin management platform for sustainable water resource planning.",
      features: ["Basin mapping", "Flow prediction", "Erosion monitoring", "Ecosystem management"],
      status: "Launching Soon",
      color: "from-emerald-600 to-teal-700",
      gradient: "from-emerald-50 to-teal-50/30",
      borderColor: "border-emerald-200",
      iconColor: "text-emerald-600",
    },
    // {
    //   name: "Landmark",
    //   icon: Landmark,
    //   description: "Infrastructure asset management system for long-term planning and maintenance.",
    //   features: ["Asset tracking", "Maintenance scheduling", "Budget planning", "Performance monitoring"],
    //   status: "Launching Soon",
    //   color: "from-amber-600 to-orange-700",
    //   gradient: "from-amber-50 to-orange-50/30",
    //   borderColor: "border-amber-200",
    //   iconColor: "text-amber-600",
    // },
  ],
};

// Platform benefits
const benefits = [
  {
    icon: Shield,
    title: "Simplifies Billing",
    description: "Streamlined billing process reduces manual work and errors",
  },
  {
    icon: RefreshCw,
    title: "Reduces Manual Work",
    description: "Automation of routine tasks frees up staff for other activities",
  },
  {
    icon: CheckCircle,
    title: "Ensures Accuracy",
    description: "Precise calculations and verification minimize billing errors",
  },
  {
    icon: PieChart,
    title: "Better Insights",
    description: "Data-driven insights for improved operational efficiency",
  },
  {
    icon: WifiOff,
    title: "Offline Mode Support",
    description: "Continue operations even without internet connectivity",
  },
  {
    icon: FileBarChart,
    title: "Auto Reports",
    description: "Automated report generation for compliance and analysis",
  },
];

// Quick stats
const stats = [
  { value: "4+", label: "Products", icon: Layers },
  { value: "1", label: "Live Now", icon: Rocket },
  { value: "3", label: "Launching Soon", icon: Clock },
  { value: "100%", label: "Customer Focused", icon: Users },
];

export default function SigmaToolboxPage() {
  const [activeProduct, setActiveProduct] = useState("Aquabill");

  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans antialiased">
      {/* Header - Consistent with other pages */}
      {/* <header className="sticky top-0 z-50 flex items-center justify-between px-5 sm:px-8 lg:px-12 py-4 border-b border-slate-100 bg-white/95 backdrop-blur-sm shadow-sm">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-700 flex items-center justify-center text-white font-bold text-sm shadow-md shadow-blue-600/20">
            IP
          </div>
          <div className="leading-tight">
            <div className="font-bold text-slate-900 text-base tracking-tight">INFRAPLAN</div>
            <div className="text-[10px] text-slate-400 -mt-1 tracking-wider">Engineering the Future</div>
          </div>
        </div>

        <nav className="hidden lg:flex items-center gap-8 text-sm text-slate-600">
          {nav.map((item) => (
            <a
              key={item.label}
              href="#"
              className={`relative flex items-center gap-1 hover:text-blue-700 transition-all duration-300 ${
                item.active ? "text-blue-700 font-semibold" : ""
              }`}
            >
              {item.label}
              {item.dropdown && <ChevronDown size={14} className="opacity-60" />}
              {item.active && (
                <span className="absolute -bottom-4 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full" />
              )}
            </a>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          <button className="bg-gradient-to-r from-blue-700 to-indigo-700 hover:from-blue-800 hover:to-indigo-800 text-white text-sm font-medium px-6 py-2.5 rounded-xl shadow-md shadow-blue-600/20 hover:shadow-blue-600/40 transition-all duration-300 hover:scale-105">
            Contact Us
          </button>
        </div>
      </header> */}

      {/* Hero Section */}
      <section className="relative overflow-hidden px-5 sm:px-8 lg:px-12 pt-12 pb-10 lg:pt-20 lg:pb-16">
        {/* Background photo - real infrastructure/water plant imagery */}
        <div
          className="absolute inset-0 bg-cover bg-center scale-105"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1519046904884-53103b34b206?w=1600&h=900&fit=crop)",
          }}
        />
        {/* Dark brand-tinted overlay so white text stays readable */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-950/95 via-indigo-950/92 to-slate-900/95" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />

        {/* Soft glow accents on top */}
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-400 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-400 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto text-center text-white">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-white/90 text-xs font-semibold tracking-wider uppercase mb-6 border border-white/20">
            <Cpu size={14} />
            Sigma ToolBox
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-bold leading-tight tracking-tight mb-4">
            Planning, Modelling, <span className="text-blue-200">Managing</span> Infrastructure
          </h1>
          <p className="text-lg text-blue-100 max-w-2xl mx-auto leading-relaxed">
            Comprehensive digital solutions for water utilities and infrastructure management
          </p>
          
          {/* Quick Stats */}
          <div className="flex flex-wrap justify-center gap-6 mt-8">
            {stats.map((stat) => {
              const Icon = stat.icon;
              return (
                <div key={stat.label} className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 flex items-center gap-2">
                  <Icon size={16} className="text-blue-200" />
                  <span className="font-bold">{stat.value}</span>
                  <span className="text-sm text-blue-200">{stat.label}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Product Navigation */}
      <section className="px-5 sm:px-8 lg:px-12 py-6 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-3">
          <button
            onClick={() => setActiveProduct("Aquabill")}
            className={`px-6 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 flex items-center gap-2 ${
              activeProduct === "Aquabill"
                ? "bg-gradient-to-r from-blue-600 to-indigo-700 text-white shadow-lg shadow-blue-600/25"
                : "bg-slate-50 text-slate-600 hover:bg-slate-100"
            }`}
          >
            <CreditCard size={16} />
            Aquabill
            <span className="text-[10px] bg-emerald-500/20 px-2 py-0.5 rounded-full">Live</span>
          </button>
          <button
            onClick={() => setActiveProduct("Upcoming")}
            className={`px-6 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 flex items-center gap-2 ${
              activeProduct === "Upcoming"
                ? "bg-gradient-to-r from-blue-600 to-indigo-700 text-white shadow-lg shadow-blue-600/25"
                : "bg-slate-50 text-slate-600 hover:bg-slate-100"
            }`}
          >
            <Rocket size={16} />
            Upcoming Products
            <span className="text-[10px] bg-amber-500/20 px-2 py-0.5 rounded-full">Soon</span>
          </button>
        </div>
      </section>

      {/* Aquabill - Active Product */}
      {activeProduct === "Aquabill" && (
        <>
          {/* Product Hero */}
          <section className={`px-5 sm:px-8 lg:px-12 py-16 bg-gradient-to-br ${products.live.gradient} border-b border-slate-100`}>
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-100 text-emerald-700 text-xs font-semibold mb-4 border border-emerald-200">
                    <Sparkles size={12} />
                    {products.live.status}
                  </div>
                  <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                    <CreditCard size={32} className="text-blue-600" />
                    {products.live.name}
                  </h2>
                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                    {products.live.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-4 mt-6">
                    {products.live.features.slice(0, 4).map((feature, idx) => (
                      <span key={idx} className="flex items-center gap-1.5 text-xs font-medium text-slate-700 bg-white px-3 py-1.5 rounded-full border border-slate-200">
                        <CheckCircle size={12} className="text-blue-600" />
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  {products.live.features.slice(4).map((feature, idx) => (
                    <div key={idx} className="p-4 bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-all">
                      <div className="w-8 h-8 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center mb-2">
                        <CheckCircle size={16} />
                      </div>
                      <p className="text-xs font-medium text-slate-700">{feature}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Benefits Grid */}
          <section className="px-5 sm:px-8 lg:px-12 py-16 bg-white border-b border-slate-100">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-12">
                <span className="inline-block px-4 py-2 rounded-full bg-blue-600/10 text-blue-700 text-xs font-semibold tracking-wider uppercase mb-3 border border-blue-200/30">
                  Why Aquabill
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-2">
                  Smart Billing <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Solutions</span>
                </h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {benefits.map((benefit, idx) => {
                  const Icon = benefit.icon;
                  return (
                    <div key={idx} className="group p-6 rounded-2xl bg-gradient-to-br from-slate-50 to-white border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                      <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center mb-4 group-hover:bg-blue-600 group-hover:text-white group-hover:scale-110 transition-all duration-300">
                        <Icon size={24} />
                      </div>
                      <h3 className="font-bold text-slate-900 text-sm mb-2">{benefit.title}</h3>
                      <p className="text-sm text-slate-500 leading-relaxed">{benefit.description}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
        </>
      )}

      {/* Upcoming Products */}
      {activeProduct === "Upcoming" && (
        <section className="px-5 sm:px-8 lg:px-12 py-16 bg-gradient-to-br from-slate-50 to-blue-50/30 border-y border-slate-100">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-2 rounded-full bg-amber-600/10 text-amber-700 text-xs font-semibold tracking-wider uppercase mb-3 border border-amber-200/30">
                Coming Soon
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-2">
                Upcoming <span className="bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">Products</span>
              </h2>
              <p className="text-sm text-slate-500 mt-2 max-w-2xl mx-auto leading-relaxed">
                Innovative solutions to address your infrastructure challenges
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {products.upcoming.map((product, idx) => {
                const Icon = product.icon;
                return (
                  <div key={idx} className={`group relative p-8 rounded-2xl bg-gradient-to-br ${product.gradient} border ${product.borderColor} shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 overflow-hidden`}>
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br opacity-10 rounded-full blur-2xl group-hover:opacity-20 transition-opacity" />
                    
                    <div className="relative">
                      <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${product.color} text-white flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform`}>
                        <Icon size={24} />
                      </div>
                      
                      <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-amber-100 text-amber-700 text-[10px] font-semibold mb-3">
                        <Clock size={12} />
                        {product.status}
                      </div>
                      
                      <h3 className="text-xl font-bold text-slate-900 mb-2">{product.name}</h3>
                      <p className="text-sm text-slate-600 leading-relaxed mb-4">{product.description}</p>
                      
                      <div className="flex flex-wrap gap-1.5">
                        {product.features.map((feature, fIdx) => (
                          <span key={fIdx} className="text-[10px] bg-white/70 px-2 py-1 rounded-full border border-slate-200 text-slate-600">
                            {feature}
                          </span>
                        ))}
                      </div>
                      
                      <div className="mt-4 pt-4 border-t border-slate-200/50">
                        <button className="text-sm font-medium text-slate-500 hover:text-slate-700 transition-colors flex items-center gap-1">
                          Notify Me
                          <Bell size={14} />
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="relative overflow-hidden">
        {/* Wave divider at the top of this section */}
        <div className="absolute top-0 left-0 right-0 z-10 leading-none">
          <svg viewBox="0 0 1440 80" className="w-full h-16 sm:h-20" preserveAspectRatio="none">
            <path
              d="M0,32 C240,80 480,0 720,24 C960,48 1200,96 1440,40 L1440,0 L0,0 Z"
              fill="white"
            />
          </svg>
        </div>

        {/* Background photo - different scene from the hero for variety */}
        <div
          className="absolute inset-0 bg-cover bg-center scale-105"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?w=1600&h=900&fit=crop)",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-950/95 via-indigo-950/93 to-purple-950/90" />

        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-400/20 rounded-full blur-3xl animate-pulse delay-1000" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-400/10 rounded-full blur-3xl animate-pulse delay-500" />
        </div>

        <div className="relative px-5 sm:px-8 lg:px-12 py-20 lg:py-28 max-w-4xl mx-auto text-center text-white">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-white/90 text-xs font-semibold tracking-wider uppercase mb-6 border border-white/20">
            <Rocket size={14} />
            Get Started
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Ready to Transform Your <span className="text-blue-200">Operations?</span>
          </h2>
          
          <p className="text-lg text-blue-100 max-w-2xl mx-auto mb-8 leading-relaxed">
            Explore our suite of products designed to streamline infrastructure management and billing.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <button className="inline-flex items-center gap-2 px-8 py-3.5 bg-white text-blue-700 font-semibold rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 text-sm sm:text-base group">
              Request Demo
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="inline-flex items-center gap-2 px-8 py-3.5 bg-white/20 backdrop-blur-sm text-white font-semibold rounded-xl border border-white/30 hover:bg-white/30 hover:scale-105 transition-all duration-300 text-sm sm:text-base">
              View All Products
            </button>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center gap-6 mt-8 pt-8 border-t border-white/20">
            <div className="flex items-center gap-2 text-sm text-blue-100">
              <Shield size={16} />
              <span>Secure Platform</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-blue-100">
              <Users size={16} />
              <span>50+ Utilities</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-blue-100">
              <Award size={16} />
              <span>ISO Certified</span>
            </div>
          </div>
        </div>
      </section>

  
    </div>
  );
}