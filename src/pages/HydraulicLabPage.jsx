import React, { useState, useRef } from "react";
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
  ChevronUp,
  FlaskConical,
  ExternalLink,
  Wind,
} from "lucide-react";

import HydraulicCTA from "../components/CTA/HydraulicCTA";

import physical1 from "../assets/phy1.png";
import physical2 from "../assets/phy2.png";
import physical3 from "../assets/phy3.png";
import math1 from "../assets/math1.png";

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
const projectShowcase = [
  {
    title: "Physical Model Studies",
    description:
      "Laboratory-based physical modelling for hydraulic structures, spillways, energy dissipation and flow behaviour.",
    icon: FlaskConical,
    gradient: "from-blue-600 to-cyan-600",
    images: [
      physical1,
      physical2,
      physical3,
    ],
  },
  {
    title: "Mathematical Model Studies",
    description:
      "Advanced mathematical and numerical modelling for hydraulic systems, river behaviour and water infrastructure.",
    icon: Cpu,
    gradient: "from-indigo-600 to-blue-700",
    images: [
      math1,
      math1,
      math1,
    ],
  },
];

const modelStudies = {
  physicalModels: [
    {
      id: 1,
      title: "Two-Dimensional Scaled Physical Model for Spillway",
      purpose:
        "To investigate flow behaviour, pressure distribution, energy dissipation and hydraulic performance of spillway systems.",
      application:
        "Used for spillway design validation, flow optimisation and energy dissipation analysis.",
      features: [
        "Spillway flow analysis",
        "Energy dissipation",
        "Pressure distribution",
        "Flow optimisation",
      ],
      detailedDescription:
        "Physical scale models allow engineers to observe complex hydraulic behaviour and validate the performance of hydraulic structures before construction.",
      methodology:
        "A geometrically scaled physical model is constructed and tested under controlled laboratory conditions. Flow conditions and hydraulic parameters are measured and compared with design requirements.",
    },

    {
      id: 2,
      title:
        "Three-Dimensional Comprehensive Model for Spillway / Barrage and Intake",
      purpose:
        "To study complex three-dimensional flow interactions around spillways, barrages and intake structures.",
      application:
        "Used to analyse approach flow, flow concentration, hydraulic interactions and downstream conditions.",
      features: [
        "3D flow analysis",
        "Approach flow studies",
        "Intake hydraulics",
        "Barrage interaction",
      ],
      detailedDescription:
        "Three-dimensional physical models provide detailed understanding of complex flow patterns around major hydraulic structures.",
      methodology:
        "A scaled model is constructed based on prototype geometry and tested under different discharge and operating conditions.",
    },

    {
      id: 3,
      title: "Physical Model for Aeration Studies",
      purpose:
        "To evaluate air entrainment and aeration performance in high-velocity hydraulic structures.",
      application:
        "Used for spillway aerators, chute systems and energy dissipation structures.",
      features: [
        "Air entrainment",
        "Cavitation protection",
        "Aerator performance",
        "High velocity flow",
      ],
      detailedDescription:
        "Physical modelling helps determine suitable aerator geometry and operating conditions to reduce cavitation risk.",
      methodology:
        "Scaled hydraulic models are tested under representative flow conditions and aeration behaviour is measured.",
    },

    {
      id: 4,
      title: "Physical Model for Evaluating Hydro-Dynamic Forces on Gates",
      purpose:
        "To evaluate hydraulic forces acting on gates under different operating conditions.",
      application:
        "Used for gate design, structural assessment and safe operating conditions.",
      features: [
        "Hydrodynamic forces",
        "Gate operation",
        "Pressure distribution",
        "Structural assessment",
      ],
      detailedDescription:
        "Physical model testing provides realistic information about hydraulic forces acting on gates and related structures.",
      methodology:
        "Pressure measurements and flow observations are performed on a scaled model under multiple operating scenarios.",
    },

    {
      id: 5,
      title:
        "Physical Model Combined With Mathematical Model for Sediment Flushing",
      purpose:
        "To study sediment deposition and optimise reservoir flushing operations.",
      application:
        "Used for reservoir sediment management and flushing strategy development.",
      features: [
        "Sediment transport",
        "Reservoir flushing",
        "Hybrid modelling",
        "Operational optimisation",
      ],
      detailedDescription:
        "This combined approach uses mathematical modelling for prediction and physical modelling for visualisation and validation.",
      methodology:
        "Mathematical models are calibrated using field data and physical models are used to validate and optimise flushing operations.",
    },
  ],

  mathematicalModels: [
    {
      id: 101,
      title: "Mathematical Model for Sediment Studies (2D)",
      purpose:
        "To perform advanced two-dimensional hydraulic and sediment transport simulations.",
      application:
        "Used for flood propagation, sediment transport, river morphology and deposition studies.",
      features: [
        "2D sediment modelling",
        "River morphology",
        "Erosion analysis",
        "Deposition studies",
      ],
      detailedDescription:
        "2D mathematical models provide detailed predictions of sediment transport and long-term morphological changes.",
      methodology:
        "The model is developed using specialised hydraulic modelling software, calibrated with field measurements and validated against observed conditions.",
    },

    {
      id: 102,
      title: "HEC-RAS Models for Specific Hydraulic Analysis",
      purpose:
        "To analyse river hydraulics, water surface profiles and complex hydraulic structures.",
      application:
        "Used for flood studies, bridge hydraulics, spillway analysis and river modelling.",
      features: [
        "Flood simulation",
        "River hydraulics",
        "Bridge analysis",
        "Water surface profiles",
      ],
      detailedDescription:
        "HEC-RAS modelling provides reliable predictions of water levels, flow behaviour and hydraulic performance.",
      methodology:
        "The model is developed using cross-sectional and field data, calibrated using observed water levels and validated against historical events.",
    },

    {
      id: 103,
      title: "Transient Studies",
      purpose:
        "To evaluate hydraulic transients caused by rapid changes in operating conditions.",
      application:
        "Used for surge tanks, tunnels, intakes, pumping systems and hydropower systems.",
      features: [
        "Pressure transients",
        "Water hammer",
        "Surge analysis",
        "System protection",
      ],
      detailedDescription:
        "Transient studies ensure pressure fluctuations and water level oscillations remain within safe design limits.",
      methodology:
        "Mathematical simulations are performed for different operating scenarios including start-up, shutdown and emergency conditions.",
    },
  ],

  cfdStudies: [
    {
      id: 201,
      title: "CFD Studies for Spillway, Aerator, Energy Dissipator, etc.",
      purpose:
        "To investigate detailed three-dimensional flow behaviour using Computational Fluid Dynamics.",
      application:
        "Used for spillways, aerators, energy dissipators and other complex hydraulic structures.",
      features: [
        "3D flow simulation",
        "Velocity analysis",
        "Pressure distribution",
        "Turbulence modelling",
      ],
      detailedDescription:
        "CFD simulations provide detailed insight into velocity fields, pressure zones, turbulence and complex flow interactions.",
      methodology:
        "A computational mesh is generated and appropriate turbulence and multiphase models are applied to simulate hydraulic conditions.",
    },

    {
      id: 202,
      title:
        "CFD Studies for Vibration Analysis of Gates Coupled With Finite Element Analysis (FEA)",
      purpose:
        "To analyse flow-induced vibration and structural response of hydraulic gates.",
      application:
        "Used for gate systems subjected to complex hydraulic loading conditions.",
      features: [
        "Flow-induced vibration",
        "Structural response",
        "CFD analysis",
        "FEA coupling",
      ],
      detailedDescription:
        "Coupled CFD and FEA analysis helps assess the interaction between hydraulic forces and structural behaviour.",
      methodology:
        "Hydraulic loads generated through CFD simulations are transferred to structural models for vibration and stress analysis.",
    },
  ],
};
const modelStudyCategories = [
  {
    title: "Physical Models",
    icon: Waves,
    items: modelStudies.physicalModels,
  },
  {
    title: "Mathematical Models",
    icon: Calculator,
    items: modelStudies.mathematicalModels,
  },
  {
    title: "CFD Studies",
    icon: Cpu,
    items: modelStudies.cfdStudies,
  },
];

// Hydraulic structures data
const structures = [
  {
    name: "Spillways",
    image: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?w=600&q=80",
  },
  {
    name: "Energy Dissipator",
    image: "https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=600&q=80",
  },
  {
    name: "Power Intakes",
    image: "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?w=600&q=80",
  },
  {
    name: "De-silting Basins",
    image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600&q=80",
  },
  {
    name: "Head Race Tunnels",
    image: "https://images.unsplash.com/photo-1465447142348-e9952c393450?w=600&q=80",
  },
  {
    name: "Gates",
    image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=600&q=80",
  },
  {
    name: "Canals",
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=600&q=80",
  },
  {
    name: "Bridges",
    image: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=600&q=80",
  },
];


const designStudies = [
  {
    name: "River Training",
    image: "https://images.unsplash.com/photo-1439066615861-d1af74d74000?w=600&q=80",
  },
  {
    name: "Safe Grade Elevation",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=600&q=80",
  },
  {
    name: "Flood Modelling",
    image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=600&q=80",
  },
  {
    name: "Watershed Evaluation",
    image: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=600&q=80",
  },
  {
    name: "Integrated Reservoir Operation",
    image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600&q=80",
  },
  {
    name: "Dam Break Analysis",
    image: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?w=600&q=80",
  },
  {
    name: "Sedimentation Studies",
    image: "https://images.unsplash.com/photo-1500534623283-312aade485b7?w=600&q=80",
  },
  {
    name: "Coastal Engineering",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&q=80",
  },
];

export default function HydraulicLabPage() {
  const [expandedSections, setExpandedSections] = useState({
    physical: false,
    mathematical: false,
    cfd: false,
  });
  const [expandedCards, setExpandedCards] = useState({});
  const [isVideoPlaying, setIsVideoPlaying] = useState(true);
  const videoRef = useRef(null);

  const toggleSection = (sectionKey) => {
    setExpandedSections(prev => ({
      ...prev,
      [sectionKey]: !prev[sectionKey]
    }));
  };

  const toggleCard = (id) => {
    setExpandedCards(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const toggleVideo = () => {
    if (videoRef.current) {
      if (isVideoPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsVideoPlaying(!isVideoPlaying);
    }
  };

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

      {/* Hero Section with Video - New Design */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 px-5 sm:px-8 lg:px-12 pt-12 pb-10 lg:pt-20 lg:pb-16 min-h-[600px] flex items-center">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl animate-pulse delay-500" />
          
          {/* Grid Pattern Overlay */}
          <div className="absolute inset-0 opacity-5" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
          }} />
        </div>

        <div className="relative max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="text-white">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-white/90 text-xs font-semibold tracking-wider uppercase mb-6 border border-white/20 hover:bg-white/20 transition-all">
              <Microscope size={14} />
              Hydraulic Laboratory
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-bold leading-tight tracking-tight mb-4">
              InfraPlan <span className="bg-gradient-to-r from-blue-300 to-cyan-300 bg-clip-text text-transparent">Hydraulic</span> Laboratory
            </h1>
            <p className="text-lg text-blue-200 max-w-xl leading-relaxed">
              State-of-the-art facility for physical and mathematical hydraulic model studies
            </p>
            <div className="flex flex-wrap gap-3 mt-6">
              <span className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm text-white/90 border border-white/20 flex items-center gap-2">
                <MapPin size={14} />
                Pune, Maharashtra
              </span>
              <span className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm text-white/90 border border-white/20 flex items-center gap-2">
                <Layers size={14} />
                5 Acres Facility
              </span>
            </div>
          </div>

          {/* Video Player with Modern Design */}
          <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-video bg-black/70 border border-white/10">
            <video
              ref={videoRef}
              className="w-full h-full object-cover"
              autoPlay
              muted
              loop
              playsInline
            >
              <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
            
            {/* Video Controls */}
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
              <button
                onClick={toggleVideo}
                className="p-3 rounded-full bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 hover:scale-110 transition-all"
              >
                {isVideoPlaying ? <Pause size={20} /> : <Play size={20} />}
              </button>
              <div className="flex items-center gap-2">
                <div className="w-20 h-1 bg-white/30 rounded-full overflow-hidden">
                  <div className="w-1/2 h-full bg-white rounded-full" />
                </div>
                <button className="p-3 rounded-full bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 hover:scale-110 transition-all">
                  <Maximize2 size={20} />
                </button>
              </div>
            </div>

            {/* Video Badge */}
            <div className="absolute top-4 left-4 px-3 py-1.5 bg-black/50 backdrop-blur-sm rounded-full text-xs text-white/80 border border-white/10 flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
              Infraplan Hydraulic Laboratory
            </div>
          </div>
        </div>
      </section>

      {/* Laboratory Overview - Modern Card Design */}
      <section className="px-5 sm:px-8 lg:px-12 py-16 bg-gradient-to-br from-slate-50 via-white to-blue-50/30 border-b border-slate-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 rounded-full bg-blue-600/10 text-blue-700 text-xs font-semibold tracking-wider uppercase mb-3 border border-blue-200/30">
              Facility Overview
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-2">
              World-Class <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Hydraulic Research</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="group relative p-6 sm:p-8 rounded-2xl bg-white border border-slate-200 shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full blur-2xl group-hover:bg-blue-500/10 transition-all" />
              <div className="relative">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-600 to-blue-800 text-white flex items-center justify-center shadow-lg shadow-blue-600/20 group-hover:scale-110 transition-transform">
                    <Waves size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">Physical Hydraulic Model Studies</h3>
                </div>
                <ul className="space-y-3">
                  {[
                    "Laboratory spread over 5 acres for physical model studies",
                    "Water re-circulation system: 350-700 lps discharge with 10m head",
                    "Equipped with instruments for velocity, level, pressure & discharge measurement"
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-slate-600">
                      <CheckCircle size={18} className="text-blue-600 mt-0.5 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="group relative p-6 sm:p-8 rounded-2xl bg-white border border-slate-200 shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/5 rounded-full blur-2xl group-hover:bg-indigo-500/10 transition-all" />
              <div className="relative">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-indigo-600 to-purple-800 text-white flex items-center justify-center shadow-lg shadow-indigo-600/20 group-hover:scale-110 transition-transform">
                    <Calculator size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">Mathematical Hydraulic Studies</h3>
                </div>
                <ul className="space-y-3">
                  {[
                    "1-D, 2-D and 3-D simulations for hydraulic phenomena",
                    "Hydro-dynamic, Morpho-dynamic & Sedimentation studies",
                    "Guided by retired CWPRS officers based in Pune"
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-slate-600">
                      <CheckCircle size={18} className="text-indigo-600 mt-0.5 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hydraulic Engineering Capabilities */}
      <section className="px-5 sm:px-8 lg:px-12 py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-14">
            <span className="inline-flex items-center rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
              Our Expertise
            </span>
            <h2 className="mt-5 text-4xl font-bold text-slate-900">
              Hydraulic Engineering Capabilities
            </h2>
            <p className="mt-4 max-w-3xl mx-auto text-slate-600">
              Advanced hydraulic modelling, simulation and engineering studies
              for dams, canals, spillways, reservoirs and river systems.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-10">
            {/* Left Card */}
            <div className="rounded-3xl bg-white border border-slate-200 p-8 shadow-sm">
              <h3 className="text-2xl font-bold text-slate-900 mb-8">
                Modelling Hydraulic Structures
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                {structures.map((item) => (
                  <div key={item.name} className="group text-center cursor-pointer">
                    <div className="overflow-hidden rounded-2xl border border-slate-300">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="h-28 w-full object-cover transition duration-500 group-hover:scale-110"
                      />
                    </div>
                    <h4 className="mt-3 text-sm font-semibold text-slate-800 group-hover:text-blue-700 transition">
                      {item.name}
                    </h4>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Card */}
            <div className="rounded-3xl bg-white border border-slate-200 p-8 shadow-sm">
              <h3 className="text-2xl font-bold text-slate-900 mb-8">
                Design & Simulation Studies
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                {designStudies.map((item) => (
                  <div key={item.name} className="group text-center cursor-pointer">
                    <div className="overflow-hidden rounded-2xl border border-slate-300">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="h-28 w-full object-cover transition duration-500 group-hover:scale-110"
                      />
                    </div>
                    <h4 className="mt-3 text-sm font-semibold text-slate-800 group-hover:text-blue-700 transition">
                      {item.name}
                    </h4>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Model Studies - Accordion Style with Expandable Cards */}
      <section className="px-5 sm:px-8 lg:px-12 py-16 bg-gradient-to-br from-slate-50 to-blue-50/30 border-y border-slate-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 rounded-full bg-blue-600/10 text-blue-700 text-xs font-semibold tracking-wider uppercase mb-3 border border-blue-200/30">
              Research Excellence
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-2">
              Model Studies <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Conducted</span>
            </h2>
          </div>

          {/* Physical Models */}
          <div className="mb-6 border border-slate-200 rounded-2xl overflow-hidden bg-white shadow-sm">
            <button
              onClick={() => toggleSection('physical')}
              className="w-full flex items-center justify-between p-5 bg-gradient-to-r from-blue-50 to-cyan-50 hover:from-blue-100 hover:to-cyan-100 transition-all"
            >
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-xl bg-blue-600 text-white">
                  <Waves size={20} />
                </div>
                <h3 className="text-lg font-bold text-slate-900">Physical Models</h3>
                <span className="text-xs bg-blue-600/10 text-blue-700 px-3 py-1 rounded-full font-semibold">
                  {modelStudies.physicalModels.length}
                </span>
              </div>
              <ChevronRight size={20} className={`transform transition-transform ${expandedSections.physical ? 'rotate-90' : ''}`} />
            </button>

            {expandedSections.physical && (
              <div className="p-6 grid grid-cols-1 lg:grid-cols-2 gap-6 bg-slate-50/50">
                {modelStudies.physicalModels.map((item) => (
                  <div 
                    key={item.id} 
                    className={`bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col ${
                      expandedCards[item.id] ? 'border-blue-300 shadow-lg' : ''
                    }`}
                  >
                    <div 
                      className="p-5 cursor-pointer flex justify-between items-start gap-4 hover:bg-slate-50 transition-colors"
                      onClick={() => toggleCard(item.id)}
                    >
                      <div className="flex-1">
                        <h4 className="text-slate-950 font-bold text-lg leading-snug">
                          {item.title}
                        </h4>
                      </div>
                      <button className="p-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 transition-colors shrink-0">
                        {expandedCards[item.id] ? (
                          <ChevronUp size={18} className="text-slate-600" />
                        ) : (
                          <ChevronDown size={18} className="text-slate-600" />
                        )}
                      </button>
                    </div>

                    <div className="px-5 pb-5 space-y-4">
                      <div className="space-y-3">
                        <div>
                          <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">Purpose</span>
                          <p className="text-sm text-slate-600 mt-0.5 leading-relaxed">{item.purpose}</p>
                        </div>
                        <div>
                          <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Application</span>
                          <p className="text-sm text-slate-600 mt-0.5 leading-relaxed">{item.application}</p>
                        </div>
                      </div>

                      <div className="pt-3 border-t border-slate-100 flex flex-wrap gap-1.5">
                        {item.features.map((feature, idx) => (
                          <span key={idx} className="inline-flex items-center gap-1 text-xs bg-blue-50 text-blue-700 px-2.5 py-1 rounded-md font-medium">
                            <CheckCircle size={12} className="text-blue-600" />
                            {feature}
                          </span>
                        ))}
                      </div>

                      {/* Expanded Content */}
                      {expandedCards[item.id] && item.detailedDescription && (
                        <div className="mt-4 pt-4 border-t border-blue-200 bg-blue-50/50 rounded-lg p-4 space-y-3 animate-fade-in">
                          <div>
                            <span className="text-xs font-bold text-blue-700 uppercase tracking-wider">Detailed Description</span>
                            <p className="text-sm text-slate-700 mt-1 leading-relaxed">{item.detailedDescription}</p>
                          </div>
                          {item.methodology && (
                            <div>
                              <span className="text-xs font-bold text-blue-700 uppercase tracking-wider">Methodology</span>
                              <p className="text-sm text-slate-700 mt-1 leading-relaxed">{item.methodology}</p>
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Mathematical Models */}
          <div className="mb-6 border border-slate-200 rounded-2xl overflow-hidden bg-white shadow-sm">
            <button
              onClick={() => toggleSection('mathematical')}
              className="w-full flex items-center justify-between p-5 bg-gradient-to-r from-indigo-50 to-purple-50 hover:from-indigo-100 hover:to-purple-100 transition-all"
            >
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-xl bg-indigo-600 text-white">
                  <Calculator size={20} />
                </div>
                <h3 className="text-lg font-bold text-slate-900">Mathematical Models</h3>
                <span className="text-xs bg-indigo-600/10 text-indigo-700 px-3 py-1 rounded-full font-semibold">
                  {modelStudies.mathematicalModels.length}
                </span>
              </div>
              <ChevronRight size={20} className={`transform transition-transform ${expandedSections.mathematical ? 'rotate-90' : ''}`} />
            </button>

            {expandedSections.mathematical && (
              <div className="p-6 grid grid-cols-1 lg:grid-cols-2 gap-6 bg-slate-50/50">
                {modelStudies.mathematicalModels.map((item) => (
                  <div 
                    key={item.id} 
                    className={`bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col ${
                      expandedCards[item.id] ? 'border-indigo-300 shadow-lg' : ''
                    }`}
                  >
                    <div 
                      className="p-5 cursor-pointer flex justify-between items-start gap-4 hover:bg-slate-50 transition-colors"
                      onClick={() => toggleCard(item.id)}
                    >
                      <div className="flex-1">
                        <h4 className="text-slate-950 font-bold text-lg leading-snug">
                          {item.title}
                        </h4>
                      </div>
                      <button className="p-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 transition-colors shrink-0">
                        {expandedCards[item.id] ? (
                          <ChevronUp size={18} className="text-slate-600" />
                        ) : (
                          <ChevronDown size={18} className="text-slate-600" />
                        )}
                      </button>
                    </div>

                    <div className="px-5 pb-5 space-y-4">
                      <div className="space-y-3">
                        <div>
                          <span className="text-xs font-bold text-indigo-600 uppercase tracking-wider">Purpose</span>
                          <p className="text-sm text-slate-600 mt-0.5 leading-relaxed">{item.purpose}</p>
                        </div>
                        <div>
                          <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Application</span>
                          <p className="text-sm text-slate-600 mt-0.5 leading-relaxed">{item.application}</p>
                        </div>
                      </div>

                      <div className="pt-3 border-t border-slate-100 flex flex-wrap gap-1.5">
                        {item.features.map((feature, idx) => (
                          <span key={idx} className="inline-flex items-center gap-1 text-xs bg-indigo-50 text-indigo-700 px-2.5 py-1 rounded-md font-medium">
                            <CheckCircle size={12} className="text-indigo-600" />
                            {feature}
                          </span>
                        ))}
                      </div>

                      {/* Expanded Content */}
                      {expandedCards[item.id] && item.detailedDescription && (
                        <div className="mt-4 pt-4 border-t border-indigo-200 bg-indigo-50/50 rounded-lg p-4 space-y-3 animate-fade-in">
                          <div>
                            <span className="text-xs font-bold text-indigo-700 uppercase tracking-wider">Detailed Description</span>
                            <p className="text-sm text-slate-700 mt-1 leading-relaxed">{item.detailedDescription}</p>
                          </div>
                          {item.methodology && (
                            <div>
                              <span className="text-xs font-bold text-indigo-700 uppercase tracking-wider">Methodology</span>
                              <p className="text-sm text-slate-700 mt-1 leading-relaxed">{item.methodology}</p>
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* CFD Studies */}
          <div className="border border-slate-200 rounded-2xl overflow-hidden bg-white shadow-sm">
            <button
              onClick={() => toggleSection('cfd')}
              className="w-full flex items-center justify-between p-5 bg-gradient-to-r from-cyan-50 to-teal-50 hover:from-cyan-100 hover:to-teal-100 transition-all"
            >
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-xl bg-cyan-600 text-white">
                  <Cpu size={20} />
                </div>
                <h3 className="text-lg font-bold text-slate-900">CFD Studies</h3>
                <span className="text-xs bg-cyan-600/10 text-cyan-700 px-3 py-1 rounded-full font-semibold">
                  {modelStudies.cfdStudies.length}
                </span>
              </div>
              <ChevronRight size={20} className={`transform transition-transform ${expandedSections.cfd ? 'rotate-90' : ''}`} />
            </button>

            {expandedSections.cfd && (
              <div className="p-6 grid grid-cols-1 lg:grid-cols-2 gap-6 bg-slate-50/50">
                {modelStudies.cfdStudies.map((item) => (
                  <div 
                    key={item.id} 
                    className={`bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col ${
                      expandedCards[item.id] ? 'border-cyan-300 shadow-lg' : ''
                    }`}
                  >
                    <div 
                      className="p-5 cursor-pointer flex justify-between items-start gap-4 hover:bg-slate-50 transition-colors"
                      onClick={() => toggleCard(item.id)}
                    >
                      <div className="flex-1">
                        <h4 className="text-slate-950 font-bold text-lg leading-snug">
                          {item.title}
                        </h4>
                      </div>
                      <button className="p-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 transition-colors shrink-0">
                        {expandedCards[item.id] ? (
                          <ChevronUp size={18} className="text-slate-600" />
                        ) : (
                          <ChevronDown size={18} className="text-slate-600" />
                        )}
                      </button>
                    </div>

                    <div className="px-5 pb-5 space-y-4">
                      <div className="space-y-3">
                        <div>
                          <span className="text-xs font-bold text-cyan-600 uppercase tracking-wider">Purpose</span>
                          <p className="text-sm text-slate-600 mt-0.5 leading-relaxed">{item.purpose}</p>
                        </div>
                        <div>
                          <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Application</span>
                          <p className="text-sm text-slate-600 mt-0.5 leading-relaxed">{item.application}</p>
                        </div>
                      </div>

                      <div className="pt-3 border-t border-slate-100 flex flex-wrap gap-1.5">
                        {item.features.map((feature, idx) => (
                          <span key={idx} className="inline-flex items-center gap-1 text-xs bg-cyan-50 text-cyan-700 px-2.5 py-1 rounded-md font-medium">
                            <CheckCircle size={12} className="text-cyan-600" />
                            {feature}
                          </span>
                        ))}
                      </div>

                      {/* Expanded Content */}
                      {expandedCards[item.id] && item.detailedDescription && (
                        <div className="mt-4 pt-4 border-t border-cyan-200 bg-cyan-50/50 rounded-lg p-4 space-y-3 animate-fade-in">
                          <div>
                            <span className="text-xs font-bold text-cyan-700 uppercase tracking-wider">Detailed Description</span>
                            <p className="text-sm text-slate-700 mt-1 leading-relaxed">{item.detailedDescription}</p>
                          </div>
                          {item.methodology && (
                            <div>
                              <span className="text-xs font-bold text-cyan-700 uppercase tracking-wider">Methodology</span>
                              <p className="text-sm text-slate-700 mt-1 leading-relaxed">{item.methodology}</p>
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>
      {/* =========================================================
    PROJECT SHOWCASE
========================================================= */}

<section className="relative overflow-hidden border-y border-slate-100 bg-white px-5 py-16 sm:px-8 lg:px-12 lg:py-20">

  {/* Background Decoration */}
  <div className="pointer-events-none absolute inset-0 overflow-hidden">

    <div className="absolute -left-40 top-20 h-80 w-80 rounded-full bg-blue-500/5 blur-3xl" />

    <div className="absolute -right-40 bottom-10 h-80 w-80 rounded-full bg-cyan-500/5 blur-3xl" />

    <div className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-500/[0.025] blur-3xl" />

  </div>

  <div className="relative mx-auto max-w-7xl">

    {/* =====================================================
        SECTION HEADER
    ====================================================== */}

    <div className="mx-auto mb-12 max-w-3xl text-center">

      <span className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-3.5 py-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-blue-700">

        <span className="h-1.5 w-1.5 rounded-full bg-blue-600" />

        Project Showcase

      </span>

      <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">

        Hydraulic{" "}

        <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
          Model Studies
        </span>

      </h2>

      <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-500 sm:text-base">
        Explore our physical, mathematical and computational modelling
        capabilities developed for complex hydraulic and water infrastructure
        projects.
      </p>

    </div>


    {/* =====================================================
        FEATURED PROJECT CARDS
    ====================================================== */}

    <div className="grid gap-6 md:grid-cols-2">

      {projectShowcase.map(
        ({
          title,
          description,
          icon: Icon,
          gradient,
          images,
        }) => (

          <div
            key={title}
            className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-4 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-900/10"
          >

            {/* Image Grid */}

            <div className="grid h-52 grid-cols-3 gap-2 overflow-hidden rounded-2xl bg-slate-100">

              {images.map((image, index) => (

                <div
                  key={image}
                  className="relative overflow-hidden"
                >

                  <img
                    src={image}
                    alt={`${title} ${index + 1}`}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 via-transparent to-transparent" />

                </div>

              ))}

            </div>


            {/* Card Content */}

            <div className="px-2 pb-2 pt-5">

              <div className="flex items-start justify-between gap-4">

                <div className="flex items-start gap-3">

                  <div
                    className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${gradient} text-white shadow-lg`}
                  >
                    <Icon size={20} />
                  </div>

                  <div>

                    <h3 className="text-lg font-bold text-slate-900">
                      {title}
                    </h3>

                    <p className="mt-1 text-xs leading-5 text-slate-500">
                      {description}
                    </p>

                  </div>

                </div>

              </div>


              {/* CTA */}

              <button
                type="button"
                className="group/btn mt-5 inline-flex items-center gap-2 rounded-xl bg-slate-900 px-4 py-2.5 text-xs font-semibold text-white transition-all duration-300 hover:bg-blue-700"
              >

                Explore Studies

                <ArrowRight
                  size={14}
                  className="transition-transform duration-300 group-hover/btn:translate-x-1"
                />

              </button>

            </div>

          </div>

        )
      )}

    </div>


    {/* =====================================================
        DIVIDER / INTRO
    ====================================================== */}

    <div className="mx-auto mt-14 max-w-3xl text-center">

      <div className="mx-auto mb-5 h-px w-16 bg-gradient-to-r from-transparent via-blue-500 to-transparent" />

      <p className="text-sm font-semibold leading-6 text-slate-700 sm:text-base">

        Model Studies Conducted at{" "}

        <span className="text-blue-700">
          Infraplan Hydraulic Laboratory, Pune, India
        </span>

        {" "}for Various Aspects of Design Parameters

      </p>

    </div>


    {/* =====================================================
        MODEL STUDY CATEGORIES
    ====================================================== */}

 


    {/* =====================================================
        LOCATION / LABORATORY CTA
    ====================================================== */}

    <div className="mx-auto mt-12 max-w-2xl">

      <div className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-700 via-blue-800 to-indigo-900 p-7 text-center shadow-xl shadow-blue-900/15 sm:p-9">

        {/* Glow */}

        <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-cyan-400/15 blur-3xl" />

        <div className="pointer-events-none absolute -bottom-20 -left-20 h-56 w-56 rounded-full bg-blue-400/15 blur-3xl" />


        <div className="relative z-10">

          {/* Icon */}

          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-blue-100 ring-1 ring-white/20 backdrop-blur-sm">

            <MapPin size={21} />

          </div>


          <p className="mt-4 text-[10px] font-semibold uppercase tracking-[0.2em] text-blue-200">
            Infraplan Hydraulic Laboratory
          </p>


          <h3 className="mt-2 text-xl font-bold text-white sm:text-2xl">
            Pune, Maharashtra
          </h3>


          <p className="mx-auto mt-2 max-w-md text-xs leading-5 text-blue-100/75">
            Chandkhed Village, Tal-Maval, Dist. Pune,
            Maharashtra, India.
          </p>


          <button
            type="button"
            className="group/map mt-5 inline-flex items-center gap-2 rounded-xl bg-white px-5 py-2.5 text-xs font-semibold text-blue-700 shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-50 hover:shadow-xl"
          >

            View Location

            <ExternalLink
              size={13}
              className="transition-transform group-hover/map:translate-x-0.5"
            />

          </button>

        </div>

      </div>

    </div>

  </div>

</section>

      {/* Location Map - Modern Design */}
      <section className="px-5 sm:px-8 lg:px-12 py-16 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <span className="inline-block px-4 py-2 rounded-full bg-blue-600/10 text-blue-700 text-xs font-semibold tracking-wider uppercase mb-3 border border-blue-200/30">
              Find Us
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-2">
              Laboratory <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Location</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-lg h-[400px] bg-gradient-to-br from-blue-50 to-cyan-50 relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-700 text-white flex items-center justify-center mx-auto mb-4 shadow-lg shadow-blue-600/20">
                    <MapPin size={32} />
                  </div>
                  <p className="text-slate-600 font-medium text-lg">Interactive Map</p>
                  <div className="mt-4 p-4 bg-white/90 backdrop-blur-sm rounded-xl border border-slate-200 shadow-sm max-w-xs mx-auto">
                    <p className="text-sm font-semibold text-slate-800">InfraPlan Hydraulic Laboratory</p>
                    <p className="text-sm text-slate-500">Chandkhed Village, Tal- Maval</p>
                    <p className="text-sm text-slate-500">Dist. Pune, Maharashtra, India</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-center space-y-4">
              <div className="p-6 bg-white rounded-xl border border-slate-200 shadow-md hover:shadow-lg transition-all">
                <h3 className="font-bold text-slate-900 mb-3 flex items-center gap-2">
                  <Phone size={18} className="text-blue-600" />
                  Contact Information
                </h3>
                <div className="space-y-2 text-sm text-slate-600">
                  <p className="flex items-center gap-2"><MapPin size={16} className="text-blue-600" /> Chandkhed Village, Tal- Maval, Dist. Pune</p>
                  <p className="flex items-center gap-2"><Phone size={16} className="text-blue-600" /> +91 98765 43210</p>
                  <p className="flex items-center gap-2"><Mail size={16} className="text-blue-600" /> lab@infraplan.in</p>
                </div>
              </div>

              <div className="p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border border-blue-200 shadow-md">
                <h4 className="font-semibold text-slate-900 text-sm mb-3 flex items-center gap-2">
                  <Database size={18} className="text-blue-600" />
                  Facility Details
                </h4>
                <div className="grid grid-cols-2 gap-2 text-sm text-slate-600">
                  <div className="p-2 bg-white/70 rounded-lg">🌐 Total Area: 5 Acres</div>
                  <div className="p-2 bg-white/70 rounded-lg">💧 Discharge: 350-700 lps</div>
                  <div className="p-2 bg-white/70 rounded-lg">📏 Available Head: 10 m</div>
                  <div className="p-2 bg-white/70 rounded-lg">👨‍🔬 CWPRS Expert Guidance</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>



<HydraulicCTA/>
      {/* Footer - Consistent with other pages */}
  

      {/* Animation Styles */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-float {
          animation: float linear infinite;
        }
        .animate-fade-in {
          animation: fade-in 0.3s ease-out;
        }
        .delay-1000 {
          animation-delay: 1000ms;
        }
        .delay-500 {
          animation-delay: 500ms;
        }
      `}</style>
    </div>
  );
}