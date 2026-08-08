import React from "react";
import { Check, Sparkles, Zap, Shield, Clock, Heart } from "lucide-react";

const features = [
  { 
    icon: Sparkles, 
    label: "Sustainable Solutions",
    description: "Eco-friendly approaches for lasting impact"
  },
  { 
    icon: Zap, 
    label: "Innovative Technology",
    description: "Cutting-edge tools and methodologies"
  },
  { 
    icon: Shield, 
    label: "Quality Assurance",
    description: "Rigorous testing and premium standards"
  },
  { 
    icon: Clock, 
    label: "Timely Delivery",
    description: "On-time execution with precision"
  },
  { 
    icon: Heart, 
    label: "Client Centric",
    description: "Your success is our priority"
  },
];

export default function FeaturesStrip() {
  return (
    <section className="w-full px-5 sm:px-8 lg:px-12 py-16 bg-gradient-to-br from-slate-50 via-white to-blue-50/40 border-y border-slate-200/60">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 rounded-full bg-blue-600/10 text-blue-700 text-xs font-semibold tracking-wider uppercase mb-3 border border-blue-200/50">
            Why Choose Us
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
            Built on <span className="text-blue-600">Excellence</span>
          </h2>
          <p className="text-slate-500 text-sm mt-2 max-w-2xl mx-auto">
            Delivering value through innovation, quality, and unwavering commitment
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {features.map(({ icon: Icon, label, description }) => (
            <div
              key={label}
              className="group relative flex flex-col items-center text-center p-6 rounded-2xl bg-white border border-slate-200/60 shadow-sm hover:shadow-xl hover:border-blue-300/50 hover:-translate-y-1 transition-all duration-300 cursor-default"
            >
              {/* Glow Effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/0 via-blue-500/0 to-blue-500/0 group-hover:from-blue-500/5 group-hover:via-blue-500/10 group-hover:to-blue-500/5 transition-all duration-500" />
              
              {/* Icon Container */}
              <div className="relative mb-4">
                <div className="absolute inset-0 rounded-xl bg-blue-500/10 blur-xl group-hover:bg-blue-500/20 transition-all duration-300" />
                <div className="relative w-14 h-14 rounded-xl bg-gradient-to-br from-blue-50 to-blue-100/50 text-blue-600 flex items-center justify-center group-hover:scale-110 group-hover:bg-gradient-to-br group-hover:from-blue-600 group-hover:to-blue-700 group-hover:text-white transition-all duration-300 shadow-sm group-hover:shadow-lg">
                  <Icon size={24} strokeWidth={1.75} />
                </div>
              </div>

              {/* Content */}
              <div className="relative">
                <h3 className="text-sm font-semibold text-slate-800 group-hover:text-blue-700 transition-colors mb-1.5">
                  {label}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed group-hover:text-slate-500 transition-colors">
                  {description}
                </p>
              </div>

              {/* Decorative Line */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-12 h-0.5 rounded-full bg-blue-200/50 group-hover:bg-blue-500/70 group-hover:w-16 transition-all duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}