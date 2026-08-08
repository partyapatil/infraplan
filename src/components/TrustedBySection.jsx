import React from "react";
import { 
  Building2, 
  Droplets, 
  Globe2, 
  Cog, 
  FlaskConical,
  Award,
  Star,
  Shield
} from "lucide-react";

export default function TrustedBySection() {
  const partners = [
    {
      name: "AquaCorp",
      icon: Building2,
      description: "Water Utilities",
      gradient: "from-blue-600 to-blue-800",
      bgGradient: "from-blue-50 to-blue-100/50",
      textColor: "text-blue-700",
      iconColor: "text-blue-600",
      borderColor: "border-blue-200/50",
    },
    {
      name: "EcoFlow",
      icon: Droplets,
      description: "Sustainable Solutions",
      gradient: "from-cyan-600 to-teal-800",
      bgGradient: "from-cyan-50 to-teal-100/50",
      textColor: "text-cyan-700",
      iconColor: "text-cyan-600",
      borderColor: "border-cyan-200/50",
    },
    {
      name: "GlobalDam",
      icon: Globe2,
      description: "Infrastructure Development",
      gradient: "from-amber-600 to-orange-800",
      bgGradient: "from-amber-50 to-orange-100/50",
      textColor: "text-amber-700",
      iconColor: "text-amber-600",
      borderColor: "border-amber-200/50",
    },
    {
      name: "Structura",
      icon: Cog,
      description: "Engineering & Design",
      gradient: "from-indigo-600 to-purple-800",
      bgGradient: "from-indigo-50 to-purple-100/50",
      textColor: "text-indigo-700",
      iconColor: "text-indigo-600",
      borderColor: "border-indigo-200/50",
    },
    {
      name: "HydroLab",
      icon: FlaskConical,
      description: "Water Testing & Research",
      gradient: "from-sky-500 to-blue-700",
      bgGradient: "from-sky-50 to-blue-100/50",
      textColor: "text-sky-700",
      iconColor: "text-sky-600",
      borderColor: "border-sky-200/50",
    },
  ];

  // Enhanced with trust indicators
  const trustIndicators = [
    { icon: Award, label: "ISO Certified", color: "text-amber-600" },
    { icon: Shield, label: "100+ Projects", color: "text-emerald-600" },
    { icon: Star, label: "4.9/5 Rating", color: "text-yellow-600" },
  ];

  const marqueePartners = [...partners, ...partners, ...partners];

  return (
    <section className="w-full bg-gradient-to-br from-slate-50 via-white to-blue-50/30 py-16 border-y border-slate-200/60 overflow-hidden relative">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -right-24 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-cyan-500/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10">
        {/* Header with enhanced design */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-600/10 to-indigo-600/10 text-blue-700 text-xs font-semibold tracking-wider uppercase mb-4 border border-blue-200/30">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-600 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600" />
            </span>
            Our Partners
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            Trusted by Industry <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Leaders</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-500 mt-3 max-w-2xl mx-auto leading-relaxed">
            Partnering with world-class organizations to deliver sustainable water 
            infrastructure solutions across the globe.
          </p>

          {/* Trust Indicators */}
          {/* <div className="flex flex-wrap justify-center gap-6 mt-6">
            {trustIndicators.map(({ icon: Icon, label, color }) => (
              <div key={label} className="flex items-center gap-2 bg-white/70 backdrop-blur-sm px-4 py-2 rounded-full border border-slate-200/60 shadow-sm">
                <Icon size={16} className={color} />
                <span className="text-xs font-semibold text-slate-700">{label}</span>
              </div>
            ))}
          </div> */}
        </div>

        {/* Infinite Running Marquee */}
        <div className="relative w-full overflow-hidden">
          {/* Gradient Masks */}
          <div className="absolute left-0 top-0 bottom-0 w-20 sm:w-32 bg-gradient-to-r from-slate-50/90 via-slate-50/50 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 sm:w-32 bg-gradient-to-l from-slate-50/90 via-slate-50/50 to-transparent z-10 pointer-events-none" />
          
          <div className="flex min-w-full shrink-0 items-center justify-around gap-6 sm:gap-8 md:gap-12 animate-marquee hover:[animation-play-state:paused]">
            {marqueePartners.map((partner, index) => {
              const Icon = partner.icon;
              return (
                <div
                  key={`${partner.name}-${index}`}
                  className="group relative flex items-center gap-4 shrink-0 px-6 py-4 rounded-2xl bg-gradient-to-br from-white to-slate-50/80 border border-slate-200/60 hover:border-slate-300/80 hover:shadow-xl transition-all duration-500 hover:-translate-y-1 cursor-pointer min-w-[180px] md:min-w-[200px]"
                >
                  {/* Glow Effect */}
                  <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${partner.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                  
                  {/* Icon with Ring */}
                  <div className="relative">
                    <div className={`absolute inset-0 rounded-full ${partner.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-md scale-150`} />
                    <div className={`relative w-12 h-12 rounded-xl bg-gradient-to-br ${partner.bgGradient} border ${partner.borderColor} flex items-center justify-center group-hover:scale-110 transition-transform duration-500`}>
                      <Icon
                        size={22}
                        className={`${partner.iconColor} transition-transform duration-300 group-hover:rotate-6`}
                        strokeWidth={2}
                      />
                    </div>
                  </div>

                  {/* Partner Info */}
                  <div className="relative">
                    <span className={`block text-base md:text-lg font-bold tracking-tight ${partner.textColor} group-hover:scale-105 transition-transform duration-300 origin-left`}>
                      {partner.name}
                    </span>
                    <span className="text-[10px] text-slate-400 font-medium tracking-wider uppercase">
                      {partner.description}
                    </span>
                  </div>

                  {/* Decorative Corner */}
                  <div className={`absolute top-2 right-2 w-6 h-6 rounded-full bg-gradient-to-br ${partner.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-10">
          <p className="text-xs text-slate-400">
            Join our growing network of partners
          </p>
          <button className="mt-3 inline-flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-sm font-semibold rounded-lg shadow-lg shadow-blue-600/25 hover:shadow-blue-600/40 hover:scale-105 transition-all duration-300">
            Become a Partner
            <Building2 size={16} />
          </button>
        </div>
      </div>

      {/* Keyframe animation */}
      <style>{`
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }
        .animate-marquee {
          animation: marquee 5s linear infinite;
        }
        
        @media (prefers-reduced-motion: reduce) {
          .animate-marquee {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
}