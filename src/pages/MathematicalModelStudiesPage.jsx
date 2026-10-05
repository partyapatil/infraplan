import { useState } from "react";
import {
  Calculator,
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  Waves,
  BarChart3,
  Activity,
} from "lucide-react";

import ProjectMapSection from "../components/ProjectMapSection";

// ============================================================
// BAGGI HEP
// ============================================================
import baggi1 from "../assets/mathematicalModel/Baggi-HEP/1.png";
import baggi2 from "../assets/mathematicalModel/Baggi-HEP/2.png";
import baggi3 from "../assets/mathematicalModel/Baggi-HEP/3.png";
import baggi4 from "../assets/mathematicalModel/Baggi-HEP/4.png";
import baggi5 from "../assets/mathematicalModel/Baggi-HEP/5.png";
import baggi6 from "../assets/mathematicalModel/Baggi-HEP/6.png";

// ============================================================
// CHOROKHI RIVER
// ============================================================
import chorokhi1 from "../assets/mathematicalModel/Chorokhi-River/1.jpg";
import chorokhi2 from "../assets/mathematicalModel/Chorokhi-River/2.jpg";
import chorokhi3 from "../assets/mathematicalModel/Chorokhi-River/3.jpg";
import chorokhi4 from "../assets/mathematicalModel/Chorokhi-River/4.png";

// ============================================================
// DAM BREAK
// ============================================================
import damBreak1 from "../assets/mathematicalModel/DamBreakF/1.png";
import damBreak2 from "../assets/mathematicalModel/DamBreakF/2.png";
import damBreak3 from "../assets/mathematicalModel/DamBreakF/3.png";

// ============================================================
// DAM BREAK 2
// ============================================================
import damBreak21 from "../assets/mathematicalModel/DamBreak/1.jpg";
import damBreak22 from "../assets/mathematicalModel/DamBreak/2.jpg";
import damBreak23 from "../assets/mathematicalModel/DamBreak/3.png";
import damBreak24 from "../assets/mathematicalModel/DamBreak/4.png";
import damBreak25 from "../assets/mathematicalModel/DamBreak/5.png";
import damBreak26 from "../assets/mathematicalModel/DamBreak/5.png";
import damBreak27 from "../assets/mathematicalModel/DamBreak/7.png";

// ============================================================
// DIVERSION CANAL XEKONG
// ============================================================
import diversion1 from "../assets/mathematicalModel/Diversion-Canal-Xekong/1.png";
import diversion2 from "../assets/mathematicalModel/Diversion-Canal-Xekong/2.png";
import diversion3 from "../assets/mathematicalModel/Diversion-Canal-Xekong/3.png";
import diversion4 from "../assets/mathematicalModel/Diversion-Canal-Xekong/4.png";
import diversion6 from "../assets/mathematicalModel/Diversion-Canal-Xekong/6.png";
import diversion8 from "../assets/mathematicalModel/Diversion-Canal-Xekong/8.png";

// ============================================================
// NAGALWADI LIFT
// ============================================================
import nagalwadi1 from "../assets/mathematicalModel/Nagalwadi-Lift/1.png";
import nagalwadi2 from "../assets/mathematicalModel/Nagalwadi-Lift/2.png";
import nagalwadi3 from "../assets/mathematicalModel/Nagalwadi-Lift/3.png";
import nagalwadi4 from "../assets/mathematicalModel/Nagalwadi-Lift/4.png";
import nagalwadi5 from "../assets/mathematicalModel/Nagalwadi-Lift/5.png";

// ============================================================
// NAM BENG DAM
// ============================================================
import namBeng1 from "../assets/mathematicalModel/Nam-Beng-Dam/1.png";
import namBeng2 from "../assets/mathematicalModel/Nam-Beng-Dam/2.png";
import namBeng3 from "../assets/mathematicalModel/Nam-Beng-Dam/3.png";
import namBeng4 from "../assets/mathematicalModel/Nam-Beng-Dam/4.png";
import namBeng5 from "../assets/mathematicalModel/Nam-Beng-Dam/5.png";
import namBeng6 from "../assets/mathematicalModel/Nam-Beng-Dam/6.png";
import namBeng7 from "../assets/mathematicalModel/Nam-Beng-Dam/7.png";

// ============================================================
// SHONGTONG
// ============================================================
import shongtong1 from "../assets/mathematicalModel/Shongtong/1.png";
import shongtong2 from "../assets/mathematicalModel/Shongtong/2.png";
import shongtong4 from "../assets/mathematicalModel/Shongtong/4.png";
import shongtong5 from "../assets/mathematicalModel/Shongtong/5.png";
import shongtong6 from "../assets/mathematicalModel/Shongtong/6.png";
import shongtong7 from "../assets/mathematicalModel/Shongtong/7.png";
import shongtong8 from "../assets/mathematicalModel/Shongtong/8.png";
import shongtong9 from "../assets/mathematicalModel/Shongtong/9.png";

// ============================================================
// SURGE ANALYSIS
// ============================================================
import surge1 from "../assets/mathematicalModel/Surge-Analysis/1.jpg";
import surge2 from "../assets/mathematicalModel/Surge-Analysis/2.jpg";

// ============================================================
// TAILRACE
// ============================================================
import tailrace1 from "../assets/mathematicalModel/Tailrace/1.png";
import tailrace2 from "../assets/mathematicalModel/Tailrace/2.png";
import tailrace3 from "../assets/mathematicalModel/Tailrace/3.png";
import tailrace4 from "../assets/mathematicalModel/Tailrace/4.png";
import tailrace5 from "../assets/mathematicalModel/Tailrace/5.png";
const collageImages = [
  tailrace1,
  namBeng1,
  nagalwadi5
];

const mathematicalModelStudies = [
  {
    id: 1,
    title:
      "Tailrace / Approach Channel (TRC) for MP 30 Gandhi Sagar PSP (1920 MW), MP, India",
    description:
      "The MP 30 Gandhi Sagar Pumped Storage Project (1920 MW) is under construction at Madhya Pradesh, India. Existing Gandhi Sagar reservoir acts as lower intake, comprising nine units of reversible turbines, includes a critical Tailrace/Approach Channel (TRC) that regulates water flow during both pumping and generation modes. The hydraulic design of the tailrace/approach channel was analysed using HEC-RAS 2D modelling to optimize flow conditions during both pumping and generation modes. The study evaluated flow velocities, water levels, and return flows to ensure efficient operation.",
    images: [
      tailrace1,
      tailrace2,
      tailrace3,
      tailrace4,
      tailrace5,
    ],
  },

  {
    id: 2,
    title: "Shongtong Karcham HEP, Himachal Pradesh, India",
    description:
      "Shongtong Karcham Hydro electric Project is on the Satluj River. A computational fluid dynamics (CFD) model is being carried out for headrace tunnel, Surge tank and Pressure shafts. CFD models provided very good insight. Analysis for the Water Conductor System of the Hydroelectric Project to optimize flow efficiency and assess hydraulic performance under varying operational conditions.",
    images: [
      shongtong1,
      shongtong2,
      shongtong4,
      shongtong5,
      shongtong6,
      shongtong7,
      shongtong8,
      shongtong9,
    ],
  },

  {
    id: 3,
    title: "Dam Break Simulation of Nam Houng 1 HPP (15MW), Laos",
    description:
      "A 15 MW Hydro Power Project located in the south-eastern area of Xayaboury Province, Lao PDR, and 6 km upstream of the confluence of Nam Houng and Mekong rivers which is a concrete gravity dam with 5 radial gates having a height of 35m. The dam breach simulation was carried out in HEC-RAS 2D, with various scenarios. Initially, a Dam breach at FRL with fair-weather conditions was simulated, secondly, a breach was done when the project design flood was impinging on the reservoir and the flood was passing through the gates and the third case was similar to case 2 but with the Mekong itself flowing at high flood levels.",
    images: [
      damBreak1,
      damBreak2,
      damBreak3,
    ],
  },

  {
    id: 4,
    title: "Dam Break Simulation for Nam Ngiep 2C HPP, Laos",
    description:
      "Nam Ngiep 2C Hydropower project is located in northern Lao PDR. Multiple power projects are located on Nam Ngiep River having a NN1 HPP at downstream end and various hydro power projects namely, 2A, 2B, 2C and 3A located along the river. The dam breach simulation was carried out simulating various scenarios of flooding. The river reach of about 58 km was simulated along with all the hydraulic structures in-between. The breach flood wave was seen traveling at more than 15 to 20 m/s velocities along the steep sloping river. Two dams and 4 powerhouses observed to be affected adversely along with six bridges found to be prone to damages due to very high velocities anticipated. Safe places and evacuation routes were suggested along with critical inputs to prepare the emergency action plan.",
    images: [
      damBreak21,
      damBreak22,
      damBreak23,
      damBreak24,
      damBreak25,
      damBreak26,
      damBreak27,
    ],
  },

  {
    id: 5,
    title: "Diversion Canal-Xekong River, Laos",
    description:
      "The Xekong Thermal Power Plant is located in Xekong Province of Lao PDR. A critical part of the project involved diverting a 13 km section of the Xekong River. This required the construction of a 5.2 km diversion canal and the installation of dams both upstream and downstream. Hydraulic model studies were conducted at IHL to evaluate the impact of the Xekong Diversion Canal on the water levels for the 4B and 4A hydroelectric power plants (HPPs), as well as to mitigate the risk of coal mine pit flooding over a 30 year period. These studies helped determine the optimal canal alignment, assessed the required elevations for the access road and bridge to Xekong 4B. Based on these findings, it was recommended to relocate the proposed bridge near the canal's upstream inlet to ensure safety and reliability.",
    images: [
      diversion1,
      diversion2,
      diversion3,
      diversion4,
      diversion6,
      diversion8,
    ],
  },

  {
    id: 6,
    title:
      "Surge Analysis of Ganjem Water Supply Scheme (25MLD), Ganjem Usgao, Goa",
    description:
      "A surge analysis of the clear water rising main for the Ganjem Water Supply Scheme in Goa, conducted by InfraPlan Hydraulic Laboratory using Bentley Open Flows Hammer Software. The study evaluated transient pressures and water hammer effects under current demand (25 MLD) and future increased demand (37.5 MLD). The existing pipeline is a 700 mm diameter Ductile Iron (DI) pipe, and a new 711 mm diameter Mild Steel (MS) pipe is proposed. The analysis included scenarios of sequential pump shut-off and sudden pump power failure, both with and without protection devices like Surge Anticipator Valve (SAV) and Hydro-pneumatic Tank (HT). The study was supported by Laxmi Civil Engineering Services Pvt. Ltd. The study concluded that both DI and MS pipes are designed to withstand static and surge pressures, and protection devices like SAV and HT are essential for managing transient pressures effectively. Recommendations include increasing pump and motor inertia, modifying terrain slope, and installing SAV and HT.",
    images: [
      surge1,
      surge2,
    ],
  },

  {
    id: 7,
    title: "Nam Beng Dam Break Analysis, Laos",
    description:
      "Nam Beng Hydro Power Project is located 17 km upstream of Pak Beng Town. The studies were conducted for prediction of flood propagation from Nam Beng Dam up to the confluence of Mekong River. A two-dimensional mathematical model was set up in HEC-RAS latest version of software. The maximum velocity observed through dam breach width was more than 9 m/s for piping failure mode whereas it was more than 5 m/s for overtopping failure mode. It is observed that during the breach simulation, very high velocity flow passes through the river. The simulation has been carried out with the downstream boundary condition considering the normal depth flow condition at the confluence.",
    images: [
      namBeng1,
      namBeng2,
      namBeng3,
      namBeng4,
      namBeng5,
      namBeng6,
      namBeng7,
    ],
  },

  {
    id: 8,
    title: "Baggi HEP, 42 MW, Himachal Pradesh, India",
    description:
      "Beas-Sutlej link project is considered as one of the achievements of modern India. The Beas project was undertaken to harness the water and power resources of the Beas River by storage and diversion works. The proposed Baggi Power Plant (42 MW) is located on National Highway No. 21 about 12 KM upstream of Sundernagar Town in District Mandi of Himachal Pradesh. The mathematical model studies were conducted for transient analysis in Bentley Open Flows Hammer licensed software. The studies were conducted for load rejection case as well as load acceptance case.",
    images: [
      baggi1,
      baggi2,
      baggi3,
      baggi4,
      baggi5,
      baggi6,
    ],
  },

  {
    id: 9,
    title: "Chorokhi River, Batumi, Georgia",
    description:
      "Perhaps one of the biggest model ever constructed in laboratory spread over 70 m x 30 m. River length of 2.5 km was reproduced along with some part of seabed. Part of the coast near the mouth of Chorokhi river is eroding for last few decades. The geometrically similar rigid bed physical hydraulic model on the scale of 1:50 conforming to Froudean similitude was constructed to assess the hydraulic performance and sediment movement near Chorokhi river mouth. Mathematical model in Hec-RAS was prepared for the reach of 3 km from river mouth. The mathematical model was used to arrive and compare the water surface profiles and Manning's n values in various sections of river reach.",
    images: [
      chorokhi1,
      chorokhi2,
      chorokhi3,
      chorokhi4,
    ],
  },

  {
    id: 10,
    title: "Nagalwadi Lift Irrigation Intake, MP, India",
    description:
      "Lift irrigation scheme is under construction on the Narmada River at Nagalwadi. The entire scheme envisages seven stage pumping. A computational fluid dynamics (CFD) models were carried out for various pumping stations. The physical and mathematical CFD model for Pumping station no. 1 showed very good correlation. CFD models provided very good insight. The predicted flow conditions helped in optimizing and finalizing the designs of pump sumps.",
    images: [
      nagalwadi1,
      nagalwadi2,
      nagalwadi3,
      nagalwadi4,
      nagalwadi5,
    ],
  },
];

/* ============================================================
   IMAGE CAROUSEL — per-card, self-contained state
============================================================ */

function ProjectCarousel({ images, title }) {
  const [index, setIndex] = useState(0);

  const next = () => {
    setIndex((prev) => (prev + 1) % images.length);
  };

  const prev = () => {
    setIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="group relative h-[240px] w-full shrink-0 overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 shadow-md transition-all duration-500 hover:shadow-xl sm:h-[300px] lg:h-[320px] lg:w-[440px]">
      {/* Image */}
      <img
        src={images[index]}
        alt={`${title} ${index + 1}`}
        className="h-full w-full object-cover "
      />

      {/* Soft overlay */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/50 via-transparent to-slate-950/10" />

      {/* Image counter */}
      {images.length > 1 && (
        <div className="absolute right-3 top-3 rounded-full border border-white/20 bg-black/35 px-3 py-1 text-[11px] font-medium text-white backdrop-blur-md">
          {index + 1} / {images.length}
        </div>
      )}

      {images.length > 1 && (
        <>
          {/* Previous */}
          <button
            type="button"
            onClick={prev}
            aria-label="Previous image"
            className="absolute left-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/35 text-white opacity-100 shadow-lg backdrop-blur-md transition-all duration-300 hover:scale-105 hover:bg-black/60 focus:outline-none focus:ring-2 focus:ring-white/70 lg:opacity-0 lg:group-hover:opacity-100"
          >
            <ChevronLeft size={18} />
          </button>

          {/* Next */}
          <button
            type="button"
            onClick={next}
            aria-label="Next image"
            className="absolute right-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/35 text-white opacity-100 shadow-lg backdrop-blur-md transition-all duration-300 hover:scale-105 hover:bg-black/60 focus:outline-none focus:ring-2 focus:ring-white/70 lg:opacity-0 lg:group-hover:opacity-100"
          >
            <ChevronRight size={18} />
          </button>

          {/* Dots */}
          <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 items-center gap-1.5 rounded-full border border-white/10 bg-black/25 px-2.5 py-2 backdrop-blur-md">
            {images.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setIndex(i)}
                aria-label={`Show image ${i + 1}`}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === index
                    ? "w-6 bg-white"
                    : "w-1.5 bg-white/50 hover:bg-white/80"
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

/* ============================================================
   PROJECT ROW
============================================================ */

function ProjectRow({ project }) {
  return (
    <div className="group flex flex-col overflow-hidden rounded-3xl border border-slate-200/80 bg-white p-4 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:border-slate-300 hover:shadow-xl sm:p-5 lg:flex-row lg:items-center lg:gap-8 lg:p-6">
      {/* Image */}
      <ProjectCarousel
        images={project.images}
        title={project.title}
      />

      {/* Content */}
      <div className="flex min-w-0 flex-1 flex-col px-1 pb-1 pt-5 sm:px-2 lg:px-0 lg:py-2">
        {/* Small label */}
        <div className="mb-3 flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-blue-600" />

          <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-blue-600">
            Project
          </span>
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold leading-tight tracking-tight text-slate-900 transition-colors duration-300 group-hover:text-blue-700 sm:text-2xl">
          {project.title}
        </h3>

        {/* Divider */}
        <div className="mt-4 h-px w-full bg-gradient-to-r from-slate-200 via-slate-100 to-transparent" />

        {/* Description */}
        <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-600 sm:text-[15px]">
          {project.description}
        </p>

     
      </div>
    </div>
  );
}
/* ============================================================
   PAGE
============================================================ */

export default function MathematicalModelStudiesPage() {
  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans antialiased">
      {/* =========================================================
          HERO — 3-image collage with overlay title, matching the
          old site's "Hydraulic Model Studies" banner treatment
      ========================================================= */}
      <section className="relative overflow-hidden">
        <div className="grid grid-cols-1 sm:grid-cols-3">
          {collageImages.map((src, i) => (
            <div key={i} className="relative h-[160px] sm:h-[220px] lg:h-[280px]">
              <img src={src} alt="" className="h-full w-full object-cover" />
              <div className="absolute inset-0 bg-slate-900/45" />
            </div>
          ))}
        </div>

        <div className="pointer-events-none absolute inset-0 flex items-center justify-center px-4 text-center">
          <div>
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-wider text-blue-100 backdrop-blur-md sm:mb-4 sm:px-4 sm:py-2 sm:text-xs">
              <Calculator size={13} className="sm:h-[14px] sm:w-[14px]" />
              Numerical & Simulation Studies
            </div>
            <h1 className="text-2xl font-bold tracking-tight text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)] sm:text-4xl lg:text-5xl">
              Mathematical Model Studies
            </h1>
          </div>
        </div>
      </section>

      {/* =========================================================
          INTRO STRIP
      ========================================================= */}
      <section className="border-b border-slate-100 bg-gradient-to-br from-slate-50 to-blue-50/30 px-4 py-10 sm:px-8 sm:py-12 lg:px-12">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm leading-relaxed text-slate-600 sm:text-base">
            Infraplan's Hydraulic Laboratory uses advanced mathematical and CFD-based
            modelling — including HEC-RAS, 2D sediment transport, and hydraulic
            transient simulations — to complement physical model testing and deliver
            reliable, data-driven design solutions for water infrastructure projects.
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            <div className="flex items-center gap-1.5 rounded-full border border-blue-100 bg-white px-3 py-1.5 text-[10px] font-medium text-slate-600 shadow-sm sm:gap-2 sm:px-4 sm:py-2 sm:text-xs">
              <Waves size={13} className="shrink-0 text-blue-600 sm:h-[15px] sm:w-[15px]" />
              Sediment Transport
            </div>
            <div className="flex items-center gap-1.5 rounded-full border border-blue-100 bg-white px-3 py-1.5 text-[10px] font-medium text-slate-600 shadow-sm sm:gap-2 sm:px-4 sm:py-2 sm:text-xs">
              <BarChart3 size={13} className="shrink-0 text-blue-600 sm:h-[15px] sm:w-[15px]" />
              River Hydraulics
            </div>
            <div className="flex items-center gap-1.5 rounded-full border border-blue-100 bg-white px-3 py-1.5 text-[10px] font-medium text-slate-600 shadow-sm sm:gap-2 sm:px-4 sm:py-2 sm:text-xs">
              <Activity size={13} className="shrink-0 text-blue-600 sm:h-[15px] sm:w-[15px]" />
              Transient Analysis
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          PROJECT LIST
      ========================================================= */}
      <section className="bg-white px-4 py-12 sm:px-8 sm:py-16 lg:px-12">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 sm:gap-8">
          {mathematicalModelStudies.map((project) => (
            <ProjectRow key={project.id} project={project} />
          ))}
        </div>
      </section>
     < ProjectMapSection/>
    </div>
  );
}