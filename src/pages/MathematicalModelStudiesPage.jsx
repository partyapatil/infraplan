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

/* ============================================================
   PLACEHOLDER IMAGES — swap these arrays for real project
   photos later. Keeping 2–3 per project so the carousel UI
   has something to demonstrate.
============================================================ */

const collageImages = [
  "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=1200&q=80",
  "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1200&q=80",
  "https://images.unsplash.com/photo-1580500550469-9b7d9f2a3d24?w=1200&q=80",
];

const mathematicalModelStudies = [
  {
    id: 1,
    title:
      "Tailrace / Approach Channel (TRC) for MP 30 Gandhi Sagar PSP (1920 MW), MP, India",
    description:
      "The MP 30 Gandhi Sagar Pumped Storage Project (1920 MW) is under construction at Madhya Pradesh, India. Existing Gandhi Sagar reservoir acts as lower intake, comprising nine units of reversible turbines, includes a critical Tailrace/Approach Channel (TRC) that regulates water flow during both pumping and generation modes. The hydraulic design of the tailrace/approach channel was analysed using HEC-RAS 2D modelling to optimize flow conditions during both pumping and generation modes. The study evaluated flow velocities, water levels, and return flows to ensure efficient operation.",
    images: [
      "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=1200&q=80",
      "https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=1200&q=80",
      "https://images.unsplash.com/photo-1500534623283-312aade485b7?w=1200&q=80",
    ],
  },
  {
    id: 2,
    title: "Shongtong Karcham HEP, Himachal Pradesh, India",
    description:
      "Shongtong Karcham Hydro electric Project is on the Satluj River. A computational fluid dynamics (CFD) model is being carried out for headrace tunnel, Surge tank and Pressure shafts. CFD models provided very good insight. Analysis for the Water Conductor System of the Hydroelectric Project to optimize flow efficiency and assess hydraulic performance under varying operational conditions.",
    images: [
      "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1200&q=80",
      "https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?w=1200&q=80",
      "https://images.unsplash.com/photo-1470770903676-69b98201ea1c?w=1200&q=80",
    ],
  },
  {
    id: 3,
    title: "Dam Break Simulation of Nam Houng 1 HPP (15MW), Laos",
    description:
      "A 15 MW Hydro Power Project located in the south-eastern area of Xayaboury Province, Lao PDR, and 6 km upstream of the confluence of Nam Houng and Mekong rivers which is a concrete gravity dam with 5 radial gates having a height of 35m. The dam breach simulation was carried out in HEC-RAS 2D, with various scenarios. Initially, a Dam breach at FRL with fair-weather conditions was simulated, secondly, a breach was done when the project design flood was impinging on the reservoir and the flood was passing through the gates and the third case was similar to case 2 but with the Mekong itself flowing at high flood levels.",
    images: [
      "https://images.unsplash.com/photo-1439405326854-014607f694d7?w=1200&q=80",
      "https://images.unsplash.com/photo-1444492417251-9c84a5fa18e0?w=1200&q=80",
      "https://images.unsplash.com/photo-1500534623283-312aade485b7?w=1200&q=80",
    ],
  },
  {
    id: 4,
    title: "Dam Break Simulation for Nam Ngiep 2C HPP, Laos",
    description:
      "Nam Ngiep 2C Hydropower project is located in northern Lao PDR. Multiple power projects are located on Nam Ngiep River having a NN1 HPP at downstream end and various hydro power projects namely, 2A, 2B, 2C and 3A located along the river. The dam breach simulation was carried out simulating various scenarios of flooding. The river reach of about 58 km was simulated along with all the hydraulic structures in-between. The breach flood wave was seen traveling at more than 15 to 20 m/s velocities along the steep sloping river. Two dams and 4 powerhouses observed to be affected adversely along with six bridges found to be prone to damages due to very high velocities anticipated. Safe places and evacuation routes were suggested along with critical inputs to prepare the emergency action plan.",
    images: [
      "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1200&q=80",
      "https://images.unsplash.com/photo-1470770903676-69b98201ea1c?w=1200&q=80",
      "https://images.unsplash.com/photo-1439405326854-014607f694d7?w=1200&q=80",
    ],
  },
  {
    id: 5,
    title: "Diversion Canal-Xekong River, Laos",
    description:
      "The Xekong Thermal Power Plant is located in Xekong Province of Lao PDR. A critical part of the project involved diverting a 13 km section of the Xekong River. This required the construction of a 5.2 km diversion canal and the installation of dams both upstream and downstream. Hydraulic model studies were conducted at IHL to evaluate the impact of the Xekong Diversion Canal on the water levels for the 4B and 4A hydroelectric power plants (HPPs), as well as to mitigate the risk of coal mine pit flooding over a 30 year period. These studies helped determine the optimal canal alignment, assessed the required elevations for the access road and bridge to Xekong 4B. Based on these findings, it was recommended to relocate the proposed bridge near the canal's upstream inlet to ensure safety and reliability.",
    images: [
      "https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=1200&q=80",
      "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=1200&q=80",
      "https://images.unsplash.com/photo-1444492417251-9c84a5fa18e0?w=1200&q=80",
    ],
  },
  {
    id: 6,
    title: "Surge Analysis of Ganj em Water Supply Scheme (25MLD) Ganjem Usgao, Goa.",
    description:
      "A surge analysis of the clear water rising main for the Ganjem Water Supply Scheme in Goa, conducted by InfraPlan Hydraulic Laboratory using Bentley Open Flows Hammer Software. The study evaluated transient pressures and water hammer effects under current demand (25 MLD) and future increased demand (37.5 MLD). The existing pipeline is a 700 mm diameter Ductile Iron (DI) pipe, and a new 711 mm diameter Mild Steel (MS) pipe is proposed. The analysis included scenarios of sequential pump shut-off and sudden pump power failure, both with and without protection devices like Surge Anticipator Valve (SAV) and Hydro-pneumatic Tank (HT). The study was supported by Laxmi Civil Engineering Services Pvt. Ltd. The study concluded that both DI and MS pipes are designed to withstand static and surge pressures, and protection devices like SAV and HT are essential for managing transient pressures effectively. Recommendations include increasing pump and motor inertia, modifying terrain slope, and installing SAV and HT.",
    images: [
      "https://images.unsplash.com/photo-1580500550469-9b7d9f2a3d24?w=1200&q=80",
      "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1200&q=80",
      "https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?w=1200&q=80",
    ],
  },
  {
    id: 7,
    title: "Nam Beng Dam break analysis, Laos",
    description:
      "Nam Beng Hydro Power Project is located 17 km upstream of Pak Beng Town. The studies were conducted for prediction of flood propagation from Nam Beng Dam up to the confluence of Mekong River. A two-dimensional mathematical model was set up in HEC-RAS latest version of software. The maximum velocity observed through dam breach width was more than 9 m/s for piping failure mode whereas it was more than 5 m/s for overtopping failure mode. It is observed that during the breach simulation, very high velocity flow passes through the river. The simulation has been carried out with the downstream boundary condition considering the normal depth flow condition at the confluence.",
    images: [
      "https://images.unsplash.com/photo-1439405326854-014607f694d7?w=1200&q=80",
      "https://images.unsplash.com/photo-1500534623283-312aade485b7?w=1200&q=80",
      "https://images.unsplash.com/photo-1470770903676-69b98201ea1c?w=1200&q=80",
    ],
  },
  {
    id: 8,
    title: "Baggi HEP, 42 MW, Himachal Pradesh, India",
    description:
      "Beas-Sutlej link project is considered as one of the achievements of modern India. The Beas project was undertaken to harness the water and power resources of the Beas River by storage and diversion works. The proposed Baggi Power Plant (42 MW) is located on National Highway No. 21 about 12 KM upstream of Sundernagar Town in District Mandi of Himachal Pradesh. The mathematical model studies were conducted for transient analysis in Bentley Open Flows Hammer licensed software. The studies were conducted for load rejection case as well as load acceptance case.",
    images: [
      "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=1200&q=80",
      "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1200&q=80",
      "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1200&q=80",
    ],
  },
  {
    id: 9,
    title: "Chorokhi River, Batumi, Georgia",
    description:
      "Perhaps one of the biggest model ever constructed in laboratory spread over 70 m x 30 m. River length of 2.5 km was reproduced along with some part of seabed. Part of the coast near the mouth of Chorokhi river is eroding for last few decades. The geometrically similar rigid bed physical hydraulic model on the scale of 1:50 conforming to Froudean similitude was constructed to assess the hydraulic performance and sediment movement near Chorokhi river mouth. Mathematical model in Hec-RAS was prepared for the reach of 3 km from river mouth. The mathematical model was used to arrive and compare the water surface profiles and Manning's n values in various sections of river reach.",
    images: [
      "https://images.unsplash.com/photo-1444492417251-9c84a5fa18e0?w=1200&q=80",
      "https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=1200&q=80",
      "https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?w=1200&q=80",
    ],
  },
  {
    id: 10,
    title: "Nagalwadi Lift Irrigation Intake, MP, India",
    description:
      "Lift irrigation scheme is under construction on the Narmada River at Nagalwadi. The entire scheme envisages seven stage pumping. A computational fluid dynamics (CFD) models were carried out for various pumping stations. The physical and mathematical CFD model for Pumping station no. 1 showed very good correlation. CFD models provided very good insight. The predicted flow conditions helped in optimizing and finalizing the designs of pump sumps.",
    images: [
      "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1200&q=80",
      "https://images.unsplash.com/photo-1580500550469-9b7d9f2a3d24?w=1200&q=80",
      "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=1200&q=80",
    ],
  },
];

/* ============================================================
   IMAGE CAROUSEL — per-card, self-contained state
============================================================ */

function ProjectCarousel({ images, title }) {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((prev) => (prev + 1) % images.length);
  const prev = () => setIndex((prev) => (prev - 1 + images.length) % images.length);

  return (
    <div className="group relative h-[240px] w-full shrink-0 overflow-hidden rounded-2xl bg-slate-100 shadow-lg sm:h-[300px] lg:h-[320px] lg:w-[420px]">
      <img
        src={images[index]}
        alt={`${title} ${index + 1}`}
        className="h-full w-full object-cover transition-all duration-700"
      />

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

      {images.length > 1 && (
        <>
          <button
            type="button"
            onClick={prev}
            aria-label="Previous image"
            className="absolute left-2 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-black/45 text-white shadow-lg backdrop-blur-sm transition-all duration-300 hover:bg-black/65 sm:h-9 sm:w-9 lg:opacity-0 lg:group-hover:opacity-100"
          >
            <ChevronLeft size={16} className="sm:h-[18px] sm:w-[18px]" />
          </button>

          <button
            type="button"
            onClick={next}
            aria-label="Next image"
            className="absolute right-2 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-black/45 text-white shadow-lg backdrop-blur-sm transition-all duration-300 hover:bg-black/65 sm:h-9 sm:w-9 lg:opacity-0 lg:group-hover:opacity-100"
          >
            <ChevronRight size={16} className="sm:h-[18px] sm:w-[18px]" />
          </button>

          <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-1.5">
            {images.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setIndex(i)}
                aria-label={`Show image ${i + 1}`}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === index ? "w-5 bg-white" : "w-1.5 bg-white/50 hover:bg-white/80"
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
    <div className="flex flex-col gap-6 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all hover:shadow-md sm:p-6 lg:flex-row lg:items-start lg:gap-8 lg:p-8">
      <ProjectCarousel images={project.images} title={project.title} />

      <div className="flex flex-1 flex-col">
        <h3 className="text-lg font-bold leading-snug text-slate-900 sm:text-xl">
          {project.title}
        </h3>

        <p className="mt-3 text-sm leading-relaxed text-slate-600">
          {project.description}
        </p>

        <button className="group mt-5 inline-flex w-fit items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-5 py-2.5 text-xs font-semibold uppercase tracking-wide text-white shadow-lg shadow-blue-600/25 transition-all duration-300 hover:scale-105 hover:shadow-blue-600/40">
          View Details
          <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
        </button>
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