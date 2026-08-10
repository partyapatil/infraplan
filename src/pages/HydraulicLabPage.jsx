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
} from "lucide-react";
import HydraulicCTA from "../components/CTA/HydraulicCTA";

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

// Model studies data with expanded details
const modelStudies = {
  physicalModels: [
    {
      id: 1,
      title: "Two-Dimensional Sectional Physical Model for Spillway",
      purpose: "To evaluate the hydraulic performance of a single, representative spillway block, bay or section under various flow conditions.",
      application: "Used for verifying discharge capacity, rating curves, pressure distribution along the chute, identifying cavitation potential, and testing the efficiency of energy dissipators (e.g., Flip / ski jump bucket, stilling basins, baffle blocks, end sills).",
      features: [
        "Scale physical model",
        "Flow visualization",
        "Pressure measurements",
        "Discharge verification",
      ],
      detailedDescription: "This model is constructed at a reduced scale to replicate the hydraulic behavior of a specific spillway section. It allows engineers to observe flow patterns, measure pressures, and verify design parameters before construction. The model can be used to test various operational scenarios and optimize the spillway design for maximum efficiency and safety.",
      methodology: "The model is built using transparent materials to allow flow visualization. Measurements are taken using pressure transducers, flow meters, and velocity probes. Dye injection techniques may be used to study flow patterns and turbulence.",
    },
    {
      id: 2,
      title: "Three-Dimensional Comprehensive Model for Spillway / Barrage & Intake",
      purpose: "To evaluate three-dimensional flow interactions for a complete spillway / barrage and intake structure.",
      application: "Assessing discharging capacity, essential for assessing complex flow patterns such as flow concentration, asymmetric approach conditions, interactions between intake structures and spillways during combined operations, and downstream river morphology/plunge pool formation.",
      features: [
        "Complete hydraulic system",
        "Energy dissipation",
        "Flow optimization",
        "Performance validation",
      ],
      detailedDescription: "A comprehensive 3D model that represents the entire hydraulic structure including approach channels, spillway bays, gates, and downstream stilling basins. This model is crucial for understanding complex flow interactions that cannot be captured in 2D models.",
      methodology: "The model is built at a suitable scale to represent the entire structure. It includes all major components and allows for testing of various operational scenarios. Advanced measurement techniques are used to capture 3D flow patterns and pressures.",
    },
    {
      id: 3,
      title: "Physical Model for Aeration Studies",
      purpose: "To study air entrainment and the prevention of cavitation damage on spillway surfaces.",
      application: "Used to design and optimize aeration ramps or offsets to introduce air into the flow, thereby protecting concrete surfaces from cavitation at high velocities.",
      features: [
        "Aerator optimization",
        "Air entrainment",
        "Cavitation control",
        "High velocity flow",
      ],
      detailedDescription: "This model focuses on studying the air entrainment process and its effectiveness in reducing cavitation damage. Aeration devices are designed and tested to ensure adequate air supply to the flow, creating a protective air layer that prevents cavitation on concrete surfaces.",
      methodology: "The model is equipped with air injection systems and measurement devices to quantify air entrainment. High-speed cameras are used to visualize the air-water interface. Pressure sensors monitor cavitation potential.",
    },
    {
      id: 4,
      title: "Physical Model for Evaluating Hydro-Dynamic Forces on Gates (Uplift & Downpull)",
      purpose: "To measure the hydro-dynamic forces acting on gates during operation.",
      application: "Used to assess hydrodynamic uplift and downpull forces to verify corresponding hoist capacities, and flow conditions within gate wells. It may also be used in some cases to assess suitability of aeration provisions.",
      features: [
        "Uplift forces",
        "Downpull forces",
        "Gate stability",
        "Structural validation",
      ],
      detailedDescription: "This model evaluates the dynamic forces that act on hydraulic gates during operation. Understanding these forces is critical for designing gate hoist systems that can safely operate the gates under all conditions.",
      methodology: "Force measurement devices are installed on the gate model to measure uplift and downpull forces. Flow conditions are varied to simulate different operational scenarios. Results are used to validate hoist capacity and structural design.",
    },
    {
      id: 5,
      title: "Physical Model Combined with Mathematical Model for Sediment Flushing",
      purpose: "To utilize the strengths of both methods—numerical models for long-term sediment deposition predictions and physical models for visualization and operational optimization.",
      application: "Mathematical models establish the timing and frequency of flushing based on deposition rates; physical models are then used to optimize flushing methodology (e.g., drawdown flushing), flushing discharge, and the efficacy of flushing tunnels or sediment outlets.",
      features: [
        "Sediment transport",
        "Reservoir flushing",
        "Hybrid modelling",
        "Operational optimization",
      ],
      detailedDescription: "This combined approach leverages the predictive power of mathematical models with the visual realism of physical models. The mathematical model predicts long-term sediment deposition patterns, while the physical model allows engineers to visualize and optimize the flushing process in real-time.",
      methodology: "Mathematical models are calibrated using field data. Physical models are constructed at appropriate scales to represent the reservoir and flushing system. Both models are iteratively refined to achieve optimal flushing efficiency.",
    },
  ],
  mathematicalModels: [
    {
      id: 1,
      title: "Mathematical Model for Sediment Studies (2D)",
      purpose: "To perform one-dimensional or advanced 2D hydraulic simulations, such as water surface profile computation and transient analysis.",
      application: "Used for flood propagation studies, dam breach analysis, and transient analysis for load rejection/acceptance scenarios to predict water levels and Manning's n values across river reaches.",
      features: [
        "2D sediment modelling",
        "River morphology",
        "Erosion analysis",
        "Deposition studies",
      ],
      detailedDescription: "2D mathematical models are powerful tools for simulating sediment transport and deposition patterns in rivers and reservoirs. They provide insights into long-term morphological changes and help in planning sediment management strategies.",
      methodology: "The model is developed using specialized software that solves the sediment transport equations. It is calibrated using field measurements and validated against observed data. Sensitivity analysis is performed to understand the impact of various parameters.",
    },
    {
      id: 2,
      title: "HEC-RAS Models for Specific Hydraulic Analysis",
      purpose: "To evaluate three-dimensional flow interactions for a complete spillway / barrage.",
      application: "Assessing discharging capacity, essential for assessing complex flow patterns such as flow concentration, asymmetric approach conditions, interactions between intake structures and spillways during combined operations, and downstream river morphology/plunge pool formation.",
      features: [
        "Flood simulation",
        "River hydraulics",
        "Bridge analysis",
        "Water profiles",
      ],
      detailedDescription: "HEC-RAS models are industry-standard tools for analyzing river hydraulics, flood propagation, and bridge hydraulics. They provide reliable predictions of water surface profiles and can be used for flood risk assessment and infrastructure design.",
      methodology: "The model is built using HEC-RAS software with accurate cross-sectional data. Boundary conditions are specified based on flow measurements. The model is calibrated using observed water levels and validated against historical flood events.",
    },
    {
      id: 3,
      title: "Transient Studies",
      purpose: "Transient studies are conducted to evaluate the hydraulic performance of the water conductor system—including the surge tank, headrace/tailrace tunnels and intake structures—during abrupt changes in operating conditions. The primary goal is to ensure that pressure fluctuations, water level oscillations, and mass surges remain within safe design limits during transitions between different operational modes (generations, pumping, and load changes).",
      application: "These studies confirm the design adequacy of the surge tank and water conductor tunnels, ensuring that neither high-pressure transients nor deep vacuum conditions threaten the structural integrity of the project during routine or emergency operations.",
      features: [
        "Water hammer",
        "Pressure surge",
        "Surge tank analysis",
        "Pipeline safety",
      ],
      detailedDescription: "Transient studies analyze the dynamic behavior of water conveyance systems during rapid changes in flow conditions. These studies are crucial for ensuring the safety and reliability of hydropower and water supply systems.",
      methodology: "The study involves solving the water hammer equations using specialized software. The model includes all major components of the water conductor system, including tunnels, surge tanks, and valves. Various operational scenarios are simulated to evaluate worst-case conditions.",
    },
  ],
  cfdStudies: [
    {
      id: 1,
      title: "CFD Studies for Spillway, Aerator & Energy Dissipator",
      purpose: "To provide high-resolution visualization of flow fields, pressure distribution, and velocity vectors.",
      application: "Used for preliminary hydraulic optimization, cavitation risk assessment, and detailed analysis of flow behavior over spillway piers, gate bays, and within energy dissipation basins without the immediate need for physical model construction.",
      features: [
        "3D flow simulation",
        "Velocity contours",
        "Pressure distribution",
        "Flow optimization",
      ],
      detailedDescription: "CFD (Computational Fluid Dynamics) studies provide detailed insights into flow behavior that cannot be captured by traditional methods. They allow engineers to visualize flow patterns, identify potential issues, and optimize designs before physical model testing.",
      methodology: "The CFD model is developed using specialized software that solves the Navier-Stokes equations. The model includes detailed geometry of the structure and uses appropriate boundary conditions. Results are validated against physical model data or field measurements.",
    },
    {
      id: 2,
      title: "CFD Studies for Vibration Analysis of Gates Coupled with Finite Element Analysis (FEA)",
      purpose: "To perform fluid-structure interaction (FSI) analysis by combining fluid dynamic results (CFD) with structural response simulations (FEA).",
      application: "Used to determine the structural integrity of gates under operational loads, assessing fatigue, stress, and vibration responses caused by hydrodynamic pressure fluctuations.",
      features: [
        "Fluid-structure interaction",
        "Gate vibration",
        "Finite Element Analysis",
        "Structural safety",
      ],
      detailedDescription: "This combined approach (CFD+FEA) provides a comprehensive understanding of gate behavior under hydrodynamic loads. It helps in identifying potential vibration issues and designing gates that are structurally sound and reliable.",
      methodology: "The CFD analysis provides pressure distributions on the gate surface, which are then used as boundary conditions for the FEA. The FEA calculates stresses, deformations, and vibration characteristics. The results are validated against field measurements.",
    },
  ],
};

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
    physical: true,
    mathematical: true,
    cfd: true,
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
              LIVE DEMO
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