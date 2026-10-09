import { useState, useRef, useEffect } from "react";
import {

  MapPin,
  Mail,
  Phone,
  ChevronDown,
  CheckCircle,
  ArrowRight,
  Microscope,
  Calculator,
  Waves,

  ChevronRight,
  Play,
  Pause,
  Maximize2,
    Volume2,
  VolumeX,
  Layers,
  Database,
  Cpu,

  FlaskConical,
  ExternalLink,
  Minimize2,
} from "lucide-react";
// import heroVideo from "../assets/videos/hydrolicVideo.mp4";

import HydraulicCTA from "../components/CTA/HydraulicCTA";
import hydraulicLabHeroBg3 from "../assets/hydrolic-3.png";
import hydrolicBG from "../assets/hydrolicBG.png";
import hydrolicTop from "../assets/hydrolicTop.png"; 
import hydroLast from "../assets/hydroLast.png"; 
import last4 from "../assets/last4.png"; 
import newCropped from "../assets/newCropped.png"; 
import physical1 from "../assets/phy1.png";
import physical2 from "../assets/phy2.png";
import physical3 from "../assets/phy3.png";
import math1 from "../assets/math1.png";
import ProjectMapSection from "../components/ProjectMapSection";
// remove this line:
// import heroVideo from "../assets/videos/hydrolicVideo.mp4";

// add this instead:
const heroVideo = "https://res.cloudinary.com/ddpunpqre/video/upload/v1791533589/COMP150MB_1_e2utgv.mp4";

const projectShowcase = [
  {
    title: "Physical Model Studies",
    description:
      "Laboratory-based physical modelling for hydraulic structures, spillways, energy dissipation and flow behaviour.",
    icon: FlaskConical,
    gradient: "from-blue-600 to-cyan-600",
    images: [physical1, physical2, physical3],
  },
  {
    title: "Mathematical Model Studies",
    description:
      "Advanced mathematical and numerical modelling for hydraulic systems, river behaviour and water infrastructure.",
    icon: Cpu,
    gradient: "from-indigo-600 to-blue-700",
    images: [math1, math1, math1],
  },
];

const modelStudies = {
  physicalModels: [
    {
      id: 1,
      title: "Two-Dimensional Sectional Physical Model For Spillway",
      purpose:
        "To evaluate the hydraulic performance of a single, representative spillway block, bay or section.",
      application:
        "Used for verifying discharge capacity, rating curves, pressure distribution along the chute, identifying cavitation potential, and testing the efficiency of energy dissipators (e.g., Flip / ski jump bucket, stilling basins, baffle blocks, end sills).",
    },
    {
      id: 2,
      title:
        "Three-Dimensional Comprehensive Model For Spillway / Barrage And Intake",
      purpose:
        "To evaluate three-dimensional flow interactions for a complete spillway / barrage.",
      application:
        "Assessing discharging capacity, Essential for assessing complex flow patterns such as flow concentration, asymmetric approach conditions, interactions between intake structures and spillways during combined operations, and downstream river morphology/plunge pool formation.\n\nA part comprehensive model may also be modelled to reproduce representative few bays out of multiple bays, in case of large barrages.",
    },
    {
      id: 3,
      title: "Physical Model For Aeration Studies",
      purpose:
        "To study air entrainment and the prevention of cavitation damage on spillway surfaces.",
      application:
        "Used to design and optimize aeration ramps or offsets to introduce air into the flow, thereby protecting concrete surfaces from cavitation at high velocities.",
    },
    {
      id: 4,
      title:
        "Physical Model For Evaluating Hydro-Dynamic Forces On Gates (Uplift And Downpull)",
      purpose:
        "To measure the hydro-dynamic forces acting on gates during operation.",
      application:
        "Used to assess hydrodynamic uplift and downpull forces to verify corresponding hoist capacities, and flow conditions within gate wells. It may also be used in some cases to assess suitability of aeration provisions.",
    },
    {
      id: 5,
      title:
        "Physical Model Combined With Mathematical Model For Sediment Flushing",
      purpose:
        "To utilize the strengths of both methods—numerical models for long-term sediment deposition predictions and physical models for visualization and operational optimization.",
      application:
        "Mathematical models establish the timing and frequency of flushing based on deposition rates; physical models are then used to optimize flushing methodology (e.g., drawdown flushing), flushing discharge, and the efficacy of flushing tunnels or sediment outlets. The parameters such as, optimum flushing discharge, time required for flushing, quantity of sediments getting flushed are recommended based on studies.",
    },
  ],

  mathematicalModels: [
    {
      id: 101,
      title: "Mathematical Model For Sediment Studies (2D)",
      purpose:
        "To perform one-dimensional or advanced 2D hydraulic simulations, such as water surface profile computation and transient analysis.",
      application:
        "Used for flood propagation studies, dam breach analysis, and transient analysis for load rejection/acceptance scenarios to predict water levels and Manning's n values across river reaches.",
    },
    {
      id: 102,
      title: "HEC-RAS Models For Specific Hydraulic Analysis",
      purpose:
        "To evaluate three-dimensional flow interactions for a complete spillway / barrage.",
      application:
        "Assessing discharging capacity, Essential for assessing complex flow patterns such as flow concentration, asymmetric approach conditions, interactions between intake structures and spillways during combined operations, and downstream river morphology/plunge pool formation.\n\nA part comprehensive model may also be modelled to reproduce representative few bays out of multiple bays, in case of large barrages.",
    },
    {
      id: 103,
      title: "Transient Studies",
      purpose:
        "Transient studies are conducted to evaluate the hydraulic performance of the water conductor system- including the surge tank, headrace/tailrace tunnels and intake structures- during abrupt changes in operating conditions. The primary goal is to ensure that pressure fluctuations, water level oscillations, and mass surges remain within safe design limits during transitions between different operational modes (generations, pumping, and load changes).",
      application:
        "These studies confirm the design adequacy of the surge tank and water conductor tunnels, ensuring that neither high-pressure transients nor deep vaccum conditions threaten the structural integrity of the project during routine or emergency operations.",
    },
    {
      id: 104,
      title: "CFD Studies For Spillway, Aerator, Energy Dissipator, Etc.",
      purpose:
        "To provide high-resolution visualization of flow fields, pressure distribution, and velocity vectors.",
      application:
        "Used for preliminary hydraulic optimization, cavitation risk assessment, and detailed analysis of flow behavior over spillway piers, gate bays, and within energy dissipation basins without the immediate need for physical model construction.\n\nIHL is now adopting a complementary approach that integrates CFD studies with physical modelling: CFD analyses are utilized to optimize spillway and structure geometry by evaluating various modifications. Once the geometry is finalized through CFD, it is validated on a physical model, ensuring accuracy while significantly reducing project time and cost.",
    },
    {
      id: 105,
      title:
        "CFD Studies For Vibration Analysis Of Gates Coupled With Finite Element Analysis (FEA)",
      purpose:
        "To perform fluid-structure interaction (FSI) analysis by combining fluid dynamic results (CFD) with structural response simulations (FEA).",
      application:
        "Used to determine the structural integrity of gates under operational loads, assessing fatigue, stress, and vibration responses caused by hydrodynamic pressure fluctuations.",
    },
  ],
};


// Hydraulic structures data
const structures = [
  {
    name: "Spillways",
    image:
      "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?w=600&q=80",
  },
  {
    name: "Energy Dissipator",
    image:
      "https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=600&q=80",
  },
  {
    name: "Power Intakes",
    image:
      "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?w=600&q=80",
  },
  {
    name: "De-silting Basins",
    image:
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600&q=80",
  },
  {
    name: "Head Race Tunnels",
    image:
      "https://images.unsplash.com/photo-1465447142348-e9952c393450?w=600&q=80",
  },
  {
    name: "Gates",
    image:
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=600&q=80",
  },
  {
    name: "Canals",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=600&q=80",
  },
  {
    name: "Bridges",
    image:
      "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=600&q=80",
  },
];

const designStudies = [
  {
    name: "River Training",
    image:
      "https://images.unsplash.com/photo-1439066615861-d1af74d74000?w=600&q=80",
  },
  {
    name: "Safe Grade Elevation",
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=600&q=80",
  },
  {
    name: "Flood Modelling",
    image:
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=600&q=80",
  },
  {
    name: "Watershed Evaluation",
    image:
      "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=600&q=80",
  },
  {
    name: "Integrated Reservoir Operation",
    image:
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600&q=80",
  },
  {
    name: "Dam Break Analysis",
    image:
      "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?w=600&q=80",
  },
  {
    name: "Sedimentation Studies",
    image:
      "https://images.unsplash.com/photo-1500534623283-312aade485b7?w=600&q=80",
  },
  {
    name: "Coastal Engineering",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&q=80",
  },
];

export default function HydraulicLabPage() {


const [expandedCards, setExpandedCards] = useState({});

const [isVideoPlaying, setIsVideoPlaying] = useState(true);
const [isVideoFullscreen, setIsVideoFullscreen] = useState(false);
const [isMuted, setIsMuted] = useState(true);
const videoRef = useRef(null);
const videoContainerRef = useRef(null);



const toggleCard = (id) => {
  setExpandedCards((prev) => ({
    ...prev,
    [id]: !prev[id],
  }));
};
const toggleMute = async () => {
  const video = videoRef.current;

  if (!video) return;

  try {
    const newMutedState = !video.muted;

    video.muted = newMutedState;
    setIsMuted(newMutedState);

    if (video.paused) {
      await video.play();
    }
  } catch (error) {
    console.error("Audio error:", error);
  }
};
const toggleVideo = async () => {
  const video = videoRef.current;

  if (!video) return;

  try {
    if (video.paused) {
      await video.play();
    } else {
      video.pause();
    }
  } catch (error) {
    console.error("Video playback error:", error);
  }
};

const toggleVideoFullscreen = async () => {
  const container = videoContainerRef.current;

  if (!container) return;

  try {
    if (!document.fullscreenElement) {
      await container.requestFullscreen();
    } else {
      await document.exitFullscreen();
    }
  } catch (error) {
    console.error("Fullscreen error:", error);
  }
};

useEffect(() => {
  const handleFullscreenChange = () => {
    setIsVideoFullscreen(!!document.fullscreenElement);
  };

  document.addEventListener(
    "fullscreenchange",
    handleFullscreenChange
  );

  return () => {
    document.removeEventListener(
      "fullscreenchange",
      handleFullscreenChange
    );
  };
}, []);
return (
  <div className="min-h-screen bg-white text-slate-800 font-sans antialiased">
  
    {/* Hero Section with Video - New Design */}
    {/* CHANGED: Added lg:pl-24 lg:pb-24 to push content right and up */}
    <section className="relative flex min-h-[550px] items-center overflow-hidden px-5 py-12 sm:px-8 lg:pl-24 lg:pr-12 lg:py-16 lg:pb-24">
      
        {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${last4})` }}
      />

      {/* 1. Light Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-white/70 via-white/30 to-transparent" />

      {/* 2. Bottom Fade */}
      <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-white/40 to-transparent" />

      {/* Main Content */}
      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col items-center gap-8 md:flex-row md:gap-8 lg:gap-12">

        {/* Left Content */}
        <div className="relative w-full min-w-0 md:w-[48%] md:flex-none lg:w-[46%]">
          {/* Soft glow behind text */}
          <div className="pointer-events-none absolute -inset-x-8 -inset-y-6 -z-10 rounded-[2.5rem] bg-white/50 blur-2xl" />

          {/* Badge */}
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-200/70 bg-blue-50/90 px-4 py-2 text-[11px] font-semibold uppercase tracking-wider text-blue-700 shadow-sm backdrop-blur-sm">
            <Microscope size={14} className="shrink-0 text-blue-600" />
            Hydraulic Laboratory
          </div>

          {/* Heading */}
          <h1 className="mb-4 max-w-xl text-4xl font-bold leading-[1.08] tracking-tight text-slate-950 sm:text-[2.75rem] md:text-[2.55rem] lg:text-[3.2rem] xl:text-[3.35rem]">
            InfraPlan{" "}
            <span className="bg-gradient-to-r from-blue-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Hydraulic
            </span>{" "}
            Laboratory
          </h1>

          {/* Description */}
          <p className="max-w-xl text-sm font-medium leading-6 text-slate-900 [text-shadow:0_0_10px_rgba(255,255,255,0.9)] sm:text-base md:max-w-md lg:max-w-lg">
            State-of-the-art facility for physical and mathematical hydraulic model studies
          </p>

          {/* Information Meta */}
          <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-3">
            <div className="flex items-center gap-2 text-sm font-medium text-slate-900 [text-shadow:0_0_10px_rgba(255,255,255,0.9)]">
              <MapPin size={16} className="shrink-0 text-blue-600" />
              <span>Pune, Maharashtra</span>
            </div>

            <div className="hidden h-5 w-px bg-slate-400 sm:block" />

            <div className="flex items-center gap-2 text-sm font-medium text-slate-900 [text-shadow:0_0_10px_rgba(255,255,255,0.9)]">
              <Layers size={16} className="shrink-0 text-blue-600" />
              <span>5 Acres Facility</span>
            </div>
          </div>
        </div>

        {/* Video Section */}
        <div className="w-full min-w-0 md:w-[52%] md:flex-1 lg:w-[54%] lg:flex-none">
          <div
            ref={videoContainerRef}
            className={`relative mx-auto w-full max-w-[620px] overflow-hidden bg-slate-100 shadow-xl shadow-slate-900/10 ${
              isVideoFullscreen
                ? "h-screen max-w-none rounded-none"
                : "aspect-video rounded-2xl border border-slate-200/70"
            }`}
          >
            <video
              ref={videoRef}
              className={`absolute inset-0 h-full w-full ${
                isVideoFullscreen ? "object-contain bg-black" : "object-cover"
              }`}
              autoPlay
              muted={isMuted}
              playsInline
              loop
              preload="auto"
              controls={false}
              onPlay={() => setIsVideoPlaying(true)}
              onPause={() => setIsVideoPlaying(false)}
              onEnded={() => setIsVideoPlaying(false)}
            >
              <source src={heroVideo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            {/* Video Gradient */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />

            {/* Video Badge */}
            {!isVideoFullscreen && (
              <div className="absolute left-3 top-3 z-20 flex max-w-[85%] items-center gap-2 rounded-full border border-white/70 bg-white/90 px-3 py-1.5 text-[10px] font-medium text-slate-700 shadow-sm backdrop-blur-md sm:left-4 sm:top-4">
                <div className="h-1.5 w-1.5 shrink-0 animate-pulse rounded-full bg-red-500" />
                <span className="truncate">Infraplan Hydraulic Laboratory</span>
              </div>
            )}

            {/* Fullscreen Overlay Text */}
            {isVideoFullscreen && (
              <div className="absolute bottom-24 left-6 right-6 z-20 text-white sm:left-10 sm:right-10">
                <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-blue-300">
                  Infraplan · Engineering & Infrastructure
                </p>
                <h2 className="mt-2 max-w-3xl text-2xl font-bold sm:text-4xl">
                  Engineering Tomorrow's Infrastructure
                </h2>
                <p className="mt-2 text-sm text-white/60">
                  Watch our latest project showcase
                </p>
              </div>
            )}

            {/* Center Play Button */}
            {!isVideoPlaying && (
              <button
                type="button"
                onClick={toggleVideo}
                aria-label="Play video"
                className="absolute left-1/2 top-1/2 z-30 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/60 bg-white/90 text-slate-700 shadow-xl backdrop-blur-md transition-all duration-300 hover:scale-110 hover:bg-white active:scale-95 sm:h-16 sm:w-16"
              >
                <Play size={25} className="ml-0.5" fill="currentColor" />
              </button>
            )}

            {/* Video Controls Bar */}
            <div className="absolute bottom-3 left-3 right-3 z-30 flex items-center justify-between sm:bottom-4 sm:left-4 sm:right-4">
              {/* LEFT CONTROLS */}
              <div className="flex items-center gap-2">
                {/* PLAY / PAUSE */}
                <button
                  type="button"
                  onClick={toggleVideo}
                  aria-label={isVideoPlaying ? "Pause video" : "Play video"}
                  className="flex h-8 w-8 items-center justify-center rounded-full border border-white/70 bg-white/90 text-slate-700 shadow-md backdrop-blur-sm transition-all duration-200 hover:scale-105 hover:bg-white active:scale-95 sm:h-9 sm:w-9"
                >
                  {isVideoPlaying ? (
                    <Pause size={15} strokeWidth={2.3} />
                  ) : (
                    <Play size={15} className="ml-0.5" fill="currentColor" />
                  )}
                </button>

                {/* MUTE / UNMUTE */}
                <button
                  type="button"
                  onClick={toggleMute}
                  aria-label={isMuted ? "Unmute video" : "Mute video"}
                  className="flex h-8 w-8 items-center justify-center rounded-full border border-white/70 bg-white/90 text-slate-700 shadow-md backdrop-blur-sm transition-all duration-200 hover:scale-105 hover:bg-white active:scale-95 sm:h-9 sm:w-9"
                >
                  {isMuted ? (
                    <VolumeX size={15} strokeWidth={2.3} />
                  ) : (
                    <Volume2 size={15} strokeWidth={2.3} />
                  )}
                </button>
              </div>

              {/* FULLSCREEN */}
              <button
                type="button"
                onClick={toggleVideoFullscreen}
                aria-label={isVideoFullscreen ? "Exit fullscreen" : "Enter fullscreen"}
                className="flex h-8 w-8 items-center justify-center rounded-full border border-white/70 bg-white/90 text-slate-700 shadow-md backdrop-blur-sm transition-all duration-200 hover:scale-105 hover:bg-white active:scale-95 sm:h-9 sm:w-9"
              >
                {isVideoFullscreen ? (
                  <Minimize2 size={15} />
                ) : (
                  <Maximize2 size={15} />
                )}
              </button>
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
                  <div
                    key={item.name}
                    className="group text-center cursor-pointer"
                  >
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
                  <div
                    key={item.name}
                    className="group text-center cursor-pointer"
                  >
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

    {/* Laboratory Overview - Modern Card Design */}
      <section className="px-5 sm:px-8 lg:px-12 py-16 bg-gradient-to-br from-slate-50 via-white to-blue-50/30 border-b border-slate-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 rounded-full bg-blue-600/10 text-blue-700 text-xs font-semibold tracking-wider uppercase mb-3 border border-blue-200/30">
              Facility Overview
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-2">
              World-Class{" "}
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Hydraulic Research
              </span>
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
                  <h3 className="text-xl font-bold text-slate-900">
                    Physical Hydraulic Model Studies
                  </h3>
                </div>
                <ul className="space-y-3">
                  {[
                    "Laboratory spread over 5 acres for physical model studies",
                    "Water re-circulation system: 350-700 lps discharge with 10m head",
                    "Equipped with instruments for velocity, level, pressure & discharge measurement",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-sm text-slate-600"
                    >
                      <CheckCircle
                        size={18}
                        className="text-blue-600 mt-0.5 shrink-0"
                      />
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
                  <h3 className="text-xl font-bold text-slate-900">
                    Mathematical Hydraulic Studies
                  </h3>
                </div>
                <ul className="space-y-3">
                  {[
                    "1-D, 2-D and 3-D simulations for hydraulic phenomena",
                    "Hydro-dynamic, Morpho-dynamic & Sedimentation studies",
                    "Guided by retired CWPRS officers based in Pune",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-sm text-slate-600"
                    >
                      <CheckCircle
                        size={18}
                        className="text-indigo-600 mt-0.5 shrink-0"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
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
        Model Studies{" "}
        <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
          Conducted
        </span>
      </h2>
    </div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">

    {/* Physical Models */}
    <div className="mb-6 rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden">
      <div className="flex items-center gap-3 border-b border-blue-100 bg-gradient-to-r from-blue-50 to-cyan-50 px-5 py-4">
        <div className="rounded-xl bg-blue-600 p-2 text-white">
          <Waves size={20} />
        </div>
        <h3 className="text-lg font-bold text-slate-900">Physical Models</h3>
        <span className="rounded-full bg-blue-600/10 px-3 py-1 text-xs font-semibold text-blue-700">
          {modelStudies.physicalModels.length}
        </span>
      </div>

      <div className="p-3">
        {modelStudies.physicalModels.map((item) => (
          <div
            key={item.id}
            className={`overflow-hidden rounded-xl border transition-all ${
              expandedCards[item.id] ? "border-blue-200 bg-blue-50/30" : "border-transparent"
            }`}
          >
            <button
              type="button"
              onClick={() => toggleCard(item.id)}
              className="flex w-full items-center gap-2 px-3 py-3 text-left transition-colors hover:bg-slate-50"
            >
              {expandedCards[item.id] ? (
                <ChevronDown size={17} className="shrink-0 text-blue-600" />
              ) : (
                <ChevronRight size={17} className="shrink-0 text-blue-600" />
              )}
              <span className="text-sm font-semibold leading-snug text-slate-900">
                {item.title}
              </span>
            </button>

            {expandedCards[item.id] && (
              <div className="mx-3 mb-3 rounded-xl border border-blue-100 bg-white p-4 space-y-4">
                <div>
                  <div className="mb-1 text-xs font-bold uppercase tracking-wider text-blue-600">
                    Purpose
                  </div>
                  <p className="text-sm leading-relaxed text-slate-600">
                    {item.purpose}
                  </p>
                </div>
                <div>
                  <div className="mb-1 text-xs font-bold uppercase tracking-wider text-slate-500">
                    Application
                  </div>
                  <p className="text-sm leading-relaxed text-slate-600">
                    {item.application}
                  </p>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>

    {/* Mathematical Models */}
    <div className="mb-6 rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden">
      <div className="flex items-center gap-3 border-b border-indigo-100 bg-gradient-to-r from-indigo-50 to-purple-50 px-5 py-4">
        <div className="rounded-xl bg-indigo-600 p-2 text-white">
          <Calculator size={20} />
        </div>
        <h3 className="text-lg font-bold text-slate-900">Mathematical Models</h3>
        <span className="rounded-full bg-indigo-600/10 px-3 py-1 text-xs font-semibold text-indigo-700">
          {modelStudies.mathematicalModels.length}
        </span>
      </div>

      <div className="p-3">
        {modelStudies.mathematicalModels.map((item) => (
          <div
            key={item.id}
            className={`overflow-hidden rounded-xl border transition-all ${
              expandedCards[item.id] ? "border-indigo-200 bg-indigo-50/30" : "border-transparent"
            }`}
          >
            <button
              type="button"
              onClick={() => toggleCard(item.id)}
              className="flex w-full items-center gap-2 px-3 py-3 text-left transition-colors hover:bg-slate-50"
            >
              {expandedCards[item.id] ? (
                <ChevronDown size={17} className="shrink-0 text-indigo-600" />
              ) : (
                <ChevronRight size={17} className="shrink-0 text-indigo-600" />
              )}
              <span className="text-sm font-semibold leading-snug text-slate-900">
                {item.title}
              </span>
            </button>

            {expandedCards[item.id] && (
              <div className="mx-3 mb-3 rounded-xl border border-indigo-100 bg-white p-4 space-y-4">
                <div>
                  <div className="mb-1 text-xs font-bold uppercase tracking-wider text-indigo-600">
                    Purpose
                  </div>
                  <p className="text-sm leading-relaxed text-slate-600">
                    {item.purpose}
                  </p>
                </div>
                <div>
                  <div className="mb-1 text-xs font-bold uppercase tracking-wider text-slate-500">
                    Application
                  </div>
                  <p className="text-sm leading-relaxed text-slate-600">
                    {item.application}
                  </p>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>

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
              capabilities developed for complex hydraulic and water
              infrastructure projects.
            </p>
          </div>

          {/* =====================================================
        FEATURED PROJECT CARDS
    ====================================================== */}

          <div className="grid gap-6 md:grid-cols-2">
            {projectShowcase.map(
              ({ title, description, icon: Icon, gradient, images }) => (
                <div
                  key={title}
                  className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-4 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-900/10"
                >
                  {/* Image Grid */}

                  <div className="grid h-52 grid-cols-3 gap-2 overflow-hidden rounded-2xl bg-slate-100">
                    {images.map((image, index) => (
                      <div key={image} className="relative overflow-hidden">
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
              ),
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
              </span>{" "}
              for Various Aspects of Design Parameters
            </p>
          </div>

        

<div className="mx-auto mt-12 w-full max-w-5xl">
  <div className="grid grid-cols-1 gap-5 md:grid-cols-2">

    {/* Location Map */}

    <div className="group relative overflow-hidden rounded-2xl border border-slate-200/70 bg-white p-7 shadow-lg shadow-slate-900/5 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-900/10 sm:p-8">
      <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-blue-500/5 blur-3xl transition-opacity duration-300 group-hover:bg-blue-500/10" />
      <div className="pointer-events-none absolute -bottom-20 -left-20 h-48 w-48 rounded-full bg-indigo-500/5 blur-3xl" />

      <div className="relative z-10">
        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600 ring-1 ring-blue-100 transition-all duration-300 group-hover:scale-105 group-hover:bg-blue-100">
          <MapPin size={20} strokeWidth={2} />
        </div>

        <p className="mt-5 text-[10px] font-semibold uppercase tracking-[0.2em] text-blue-600">
          Infraplan Hydraulic Laboratory
        </p>

        <h3 className="mt-1.5 text-xl font-bold tracking-tight text-slate-900 sm:text-2xl">
          Location Map
        </h3>

        <p className="mt-2 text-sm font-medium leading-6 text-slate-600">
          Chandkhed Village, Tal-Maval,
          <br />
          Dist. Pune, Maharashtra, India.
        </p>

        <button
          type="button"
          className="group/map mt-6 inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 px-4 py-2.5 text-xs font-semibold text-white shadow-md shadow-blue-600/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-blue-600/30"
        >
          View Location
          <ExternalLink
            size={13}
            className="transition-transform duration-300 group-hover/map:translate-x-0.5"
          />
        </button>
      </div>
    </div>

    {/* Publications */}

    <div className="group relative overflow-hidden rounded-2xl border border-slate-200/70 bg-white p-7 shadow-lg shadow-slate-900/5 transition-all duration-300 hover:-translate-y-1 hover:border-indigo-200 hover:shadow-xl hover:shadow-indigo-900/10 sm:p-8">
      <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-indigo-500/5 blur-3xl transition-opacity duration-300 group-hover:bg-indigo-500/10" />
      <div className="pointer-events-none absolute -bottom-20 -left-20 h-48 w-48 rounded-full bg-blue-500/5 blur-3xl" />

      <div className="relative z-10">
        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600 ring-1 ring-indigo-100 transition-all duration-300 group-hover:scale-105 group-hover:bg-indigo-100">
          <FlaskConical size={20} strokeWidth={2} />
        </div>

        <p className="mt-5 text-[10px] font-semibold uppercase tracking-[0.2em] text-indigo-600">
          Hydraulic Laboratory
        </p>

        <h3 className="mt-1.5 text-xl font-bold tracking-tight text-slate-900 sm:text-2xl">
          Publications
        </h3>

        <p className="mt-2 text-sm font-medium leading-6 text-slate-600">
          Explore research, technical studies
          <br />
          and hydraulic engineering publications.
        </p>

        <button
          type="button"
          className="group/pub mt-6 inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-indigo-600 to-blue-600 px-4 py-2.5 text-xs font-semibold text-white shadow-md shadow-indigo-600/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-indigo-600/30"
        >
          View Publications
          <ExternalLink
            size={13}
            className="transition-transform duration-300 group-hover/pub:translate-x-0.5"
          />
        </button>
      </div>
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
              Laboratory{" "}
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Location
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-lg h-[400px] bg-gradient-to-br from-blue-50 to-cyan-50 relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-700 text-white flex items-center justify-center mx-auto mb-4 shadow-lg shadow-blue-600/20">
                    <MapPin size={32} />
                  </div>
                  <p className="text-slate-600 font-medium text-lg">
                    Interactive Map
                  </p>
                  <div className="mt-4 p-4 bg-white/90 backdrop-blur-sm rounded-xl border border-slate-200 shadow-sm max-w-xs mx-auto">
                    <p className="text-sm font-semibold text-slate-800">
                      InfraPlan Hydraulic Laboratory
                    </p>
                    <p className="text-sm text-slate-500">
                      Chandkhed Village, Tal- Maval
                    </p>
                    <p className="text-sm text-slate-500">
                      Dist. Pune, Maharashtra, India
                    </p>
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
                  <p className="flex items-center gap-2">
                    <MapPin size={16} className="text-blue-600" /> Chandkhed
                    Village, Tal- Maval, Dist. Pune
                  </p>
                  <p className="flex items-center gap-2">
                    <Phone size={16} className="text-blue-600" /> +91 98765
                    43210
                  </p>
                  <p className="flex items-center gap-2">
                    <Mail size={16} className="text-blue-600" />{" "}
                    lab@infraplan.in
                  </p>
                </div>
              </div>

              <div className="p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border border-blue-200 shadow-md">
                <h4 className="font-semibold text-slate-900 text-sm mb-3 flex items-center gap-2">
                  <Database size={18} className="text-blue-600" />
                  Facility Details
                </h4>
                <div className="grid grid-cols-2 gap-2 text-sm text-slate-600">
                  <div className="p-2 bg-white/70 rounded-lg">
                    🌐 Total Area: 5 Acres
                  </div>
                  <div className="p-2 bg-white/70 rounded-lg">
                    💧 Discharge: 350-700 lps
                  </div>
                  <div className="p-2 bg-white/70 rounded-lg">
                    📏 Available Head: 10 m
                  </div>
                  <div className="p-2 bg-white/70 rounded-lg">
                    👨‍🔬 CWPRS Expert Guidance
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

<ProjectMapSection/>
      <HydraulicCTA />
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
