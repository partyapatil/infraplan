import React, { useState } from "react";
import {
  Waves,
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  Droplets,
  Gauge,
  Layers,
} from "lucide-react";
// Real Trench Weir images
import trenchWeir1 from "../assets/physicalModelImages/trench-weir/admin-ajax.png";
// import trenchWeir1 from "../assets/physicalModelImages/trench-weir/admin-ajax.png";
import trenchWeir2 from "../assets/physicalModelImages/trench-weir/fifth.png";
import trenchWeir3 from "../assets/physicalModelImages/trench-weir/second.png";
import trenchWeir4 from "../assets/physicalModelImages/trench-weir/six.png";
import trenchWeir5 from "../assets/physicalModelImages/trench-weir/third.png";

// Boras Barrage
import borasBarrage1 from "../assets/physicalModelImages/boras-barrage/1.png";
import borasBarrage2 from "../assets/physicalModelImages/boras-barrage/2.png";
import borasBarrage3 from "../assets/physicalModelImages/boras-barrage/3.png";
import borasBarrage4 from "../assets/physicalModelImages/boras-barrage/4.png";
import borasBarrage5 from "../assets/physicalModelImages/boras-barrage/5.png";
import borasBarrage6 from "../assets/physicalModelImages/boras-barrage/6.png";
// Desender Bochin
import desenderBochin1 from "../assets/physicalModelImages/desender-bochin/1.png";
import desenderBochin2 from "../assets/physicalModelImages/desender-bochin/2.png";
import desenderBochin3 from "../assets/physicalModelImages/desender-bochin/3.png";
import desenderBochin4 from "../assets/physicalModelImages/desender-bochin/4.png";
import desenderBochin5 from "../assets/physicalModelImages/desender-bochin/5.png";

// Upper Intake Structure
import upperIntake1 from "../assets/physicalModelImages/upper-intake-structure/1.png";
import upperIntake2 from "../assets/physicalModelImages/upper-intake-structure/2.png";
import upperIntake3 from "../assets/physicalModelImages/upper-intake-structure/3.png";
import upperIntake4 from "../assets/physicalModelImages/upper-intake-structure/4.png";
import upperIntake5 from "../assets/physicalModelImages/upper-intake-structure/5.png";
import upperIntake6 from "../assets/physicalModelImages/upper-intake-structure/6.png";
import upperIntake7 from "../assets/physicalModelImages/upper-intake-structure/7.png";

// Allain-Duhangan
import allainDuhangan1 from "../assets/physicalModelImages/Allain-Duhangan/1.jpg";
import allainDuhangan2 from "../assets/physicalModelImages/Allain-Duhangan/2.png";
import allainDuhangan3 from "../assets/physicalModelImages/Allain-Duhangan/3.png";
import allainDuhangan4 from "../assets/physicalModelImages/Allain-Duhangan/4.png";

// Anaram
import anaram1 from "../assets/physicalModelImages/Anaram/1.png";
import anaram2 from "../assets/physicalModelImages/Anaram/2.png";
import anaram3 from "../assets/physicalModelImages/Anaram/3.png";
import anaram4 from "../assets/physicalModelImages/Anaram/4.png";
import anaram5 from "../assets/physicalModelImages/Anaram/5.png";
import anaram6 from "../assets/physicalModelImages/Anaram/6.png";
import anaram7 from "../assets/physicalModelImages/Anaram/7.png";

// Lower Intake Structure
import lowerIntake1 from "../assets/physicalModelImages/Lower-Intake-Structure/1.png";
import lowerIntake2 from "../assets/physicalModelImages/Lower-Intake-Structure/2.png";
import lowerIntake3 from "../assets/physicalModelImages/Lower-Intake-Structure/3.png";
import lowerIntake4 from "../assets/physicalModelImages/Lower-Intake-Structure/4.png";
import lowerIntake5 from "../assets/physicalModelImages/Lower-Intake-Structure/5.jpg";
import lowerIntake6 from "../assets/physicalModelImages/Lower-Intake-Structure/6.jpg";

// MP30
import mp30_1 from "../assets/physicalModelImages/mp30/1.png";
import mp30_2 from "../assets/physicalModelImages/mp30/2.png";
import mp30_3 from "../assets/physicalModelImages/mp30/3.png";
import mp30_4 from "../assets/physicalModelImages/mp30/4.png";
import mp30_5 from "../assets/physicalModelImages/mp30/5.png";
import mp30_6 from "../assets/physicalModelImages/mp30/6.png";
import mp30_7 from "../assets/physicalModelImages/mp30/7.png";



// Pakal-Dul
import pakalDul1 from "../assets/physicalModelImages/Pakal-Dul/1.png";
import pakalDul2 from "../assets/physicalModelImages/Pakal-Dul/2.png";
import pakalDul3 from "../assets/physicalModelImages/Pakal-Dul/3.png";
import pakalDul4 from "../assets/physicalModelImages/Pakal-Dul/4.png";
import pakalDul5 from "../assets/physicalModelImages/Pakal-Dul/5.png";
import pakalDul6 from "../assets/physicalModelImages/Pakal-Dul/6.png";

// Phata
import phata1 from "../assets/physicalModelImages/Phata/1.jpg";
import phata2 from "../assets/physicalModelImages/Phata/2.jpg";
import phata3 from "../assets/physicalModelImages/Phata/3.png";
import phata4 from "../assets/physicalModelImages/Phata/4.png";
import phata5 from "../assets/physicalModelImages/Phata/5.png";
import phata6 from "../assets/physicalModelImages/Phata/6.png";
import phata7 from "../assets/physicalModelImages/Phata/7.jpg";

// Pinnapuram
import pinnapuram1 from "../assets/physicalModelImages/Pinnapuram/1.png";
import pinnapuram2 from "../assets/physicalModelImages/Pinnapuram/2.png";
import pinnapuram3 from "../assets/physicalModelImages/Pinnapuram/3.png";
import pinnapuram4 from "../assets/physicalModelImages/Pinnapuram/4.png";
import pinnapuram5 from "../assets/physicalModelImages/Pinnapuram/5.jpg";

// Shongtong
import shongtong1 from "../assets/physicalModelImages/Shongtong/1.png";
import shongtong2 from "../assets/physicalModelImages/Shongtong/2.png";
import shongtong4 from "../assets/physicalModelImages/Shongtong/4.png";
import shongtong5 from "../assets/physicalModelImages/Shongtong/5.png";
import shongtong6 from "../assets/physicalModelImages/Shongtong/6.png";
import shongtong7 from "../assets/physicalModelImages/Shongtong/7.png";

// Vijayanagar
import vijayanagar1 from "../assets/physicalModelImages/Vijayanagar/1.png";
import vijayanagar2 from "../assets/physicalModelImages/Vijayanagar/2.png";
import vijayanagar3 from "../assets/physicalModelImages/Vijayanagar/3.png";

// NAGALWADI LIFT
// =========================
import nagalwadiLift1 from "../assets/physicalModelImages/Nagalwadi-Lift/1.jpg";
import nagalwadiLift2 from "../assets/physicalModelImages/Nagalwadi-Lift/2.jpg";
import nagalwadiLift3 from "../assets/physicalModelImages/Nagalwadi-Lift/3.png";
// NAM-E-MOUN
// =========================
import namEMoun1 from "../assets/physicalModelImages/Nam-E-Moun/1.png";
import namEMoun2 from "../assets/physicalModelImages/Nam-E-Moun/2.png";
import namEMoun4 from "../assets/physicalModelImages/Nam-E-Moun/4.png";

// =========================
// NAM-E-MOUN LAOS
// =========================
import namEMounLaos1 from "../assets/physicalModelImages/Nam-E-Moun-Laos/1.jpg";
import namEMounLaos2 from "../assets/physicalModelImages/Nam-E-Moun-Laos/2.jpg";
import namEMounLaos3 from "../assets/physicalModelImages/Nam-E-Moun-Laos/3.jpg";
import namEMounLaos4 from "../assets/physicalModelImages/Nam-E-Moun-Laos/4.jpg";
import namEMounLaos5 from "../assets/physicalModelImages/Nam-E-Moun-Laos/5.jpg";
import namEMounLaos6 from "../assets/physicalModelImages/Nam-E-Moun-Laos/6.jpg";
import namEMounLaos7 from "../assets/physicalModelImages/Nam-E-Moun-Laos/7.jpg";
import namEMounLaos8 from "../assets/physicalModelImages/Nam-E-Moun-Laos/8.png";

import chorokhi1 from "../assets/physicalModelImages/Chorokhi/1.jpg";
import chorokhi2 from "../assets/physicalModelImages/Chorokhi/2.jpg";
import chorokhi3 from "../assets/physicalModelImages/Chorokhi/3.jpg";
import chorokhi4 from "../assets/physicalModelImages/Chorokhi/4.png";
import chorokhi5 from "../assets/physicalModelImages/Chorokhi/5.png";

// =========================
// DAGACHHU
// =========================
import dagachhu1 from "../assets/physicalModelImages/Dagachhu/1.jpg";
import dagachhu2 from "../assets/physicalModelImages/Dagachhu/2.jpg";
import dagachhu3 from "../assets/physicalModelImages/Dagachhu/3.jpg";


/* ============================================================
   PLACEHOLDER IMAGES — swap these arrays for real project
   photos later.
============================================================ */

const collageImages = [
upperIntake1,
phata1,
trenchWeir3
];

const physicalModelStudies = [
  {
    id: 1,
    title:
      "Trench Weir (Model II) of Lapchi Khola Hydro Electric Project (200 MW), Nepal",
    description:
      "Physical hydraulic model study of the standalone trench weir model was carried out using a geometrically similar scale of 1:10. The model included the Lapchi Khola river reach, trench weir, conveyance duct, shingle flushing duct, feeder ducts, and side spillway. Hydraulic studies were performed for discharges ranging from 5 m³/s to 90 m³/s to assess the intake capacity and feasibility. Sediment studies were carried out to evaluate the trench weir performance under sediment-laden flow conditions. Modifications such as upstream profile wall addition, side channel removal, and upstream dredging were recommended for improved flow distribution. The trench weir showed excellent performance, diverting nearly 100% flow up to 40 m³/s with stable approach flow conditions.",
images: [
  trenchWeir1,
  trenchWeir2,
  trenchWeir3,
  trenchWeir4,
  trenchWeir5,
],
  },

  {
    id: 2,
    title:
      "Desander Basin (Model III) of Lapchi Khola Hydro Electric Project (200 MW), Nepal",
    description:
      "Physical hydraulic model studies of a (3-D) standalone model for the Desanding Basin was carried out using a geometrically similar scale of 1:12. The physical model comprises a conveyance duct, branch feeder ducts I and II, a spill duct, a shingle flushing tunnel, one desander unit, a collection channel, and sediment flushing ducts. Flow Distribution Performance: Uniform flow distribution and stable FSL were achieved during dual-unit operation. Raising the spill duct crest to EL 3219.00 m eliminated overflow during single-unit operation while maintaining overflow safety. Flushing System Performance: The SFT and shingle flushing duct showed higher discharge capacities than design values; required design discharges were achieved through controlled partial gate operation.",
     images: [
    borasBarrage1,
    borasBarrage2,
    borasBarrage3,
    borasBarrage4,
    borasBarrage5,
    borasBarrage6,
  ],
  },

  {
    id: 3,
    title:
      "Boras Barrage Hydro Electric Project (25 MW) Madhya Pradesh, India",
    description:
      "A 1:60 Scale Physical Hydraulic Model Studies for Boras Barrage (25 MW) including barrage, powerhouse, intake, and tailrace system. Hydraulic Optimization of Intake System through guide wall and channel modifications for stable and uniform flow conditions. Enhanced Powerhouse Performance ensuring efficient operation at design discharge conditions. Tailrace & Flow Behavior Assessment with recommendations for hydraulic improvements. Sediment Management Strategy developed through flushing and operational studies for sustainable performance.",
   images: [
    desenderBochin1,
    desenderBochin2,
    desenderBochin3,
    desenderBochin4,
    desenderBochin5,
  ],
  },

  {
    id: 4,
    title:
      "Upper Intake Structure of Saundatti Pumped Storage Project (1600 MW), Karnataka, India",
    description:
      "A 1:40 scale 3-D physical hydraulic model based on Froude similitude was developed for the Saundatti PSP Upper Intake structure, covering the upper reservoir, inlet pool, intake structure, gate shafts, and 75 m long penstocks. Flow conditions were acceptable in both modes, with no significant vortices observed and intake velocities ranging from 0.55 – 0.79 m/s. The upper intake structure exhibited satisfactory hydraulic performance with smooth flow conditions and acceptable pressure losses (1.5–1.6 m in generation mode; 0.6–0.7 m in pumping mode). The overall intake design was hydraulically sound; however, improving transition near the gate shaft is recommended for better pumping flow conditions.",
  images: [
    upperIntake1,
    upperIntake2,
    upperIntake3,
    upperIntake4,
    upperIntake5,
    upperIntake6,
  ],
  },
  {
    id: 5,
    title:
      "Lower Intake Structure of Saundatti Pumped Storage Project (1600 MW), Karnataka, India",
    description:
      "A 1:40 scale geometrically similar Froude model was developed for the Saundatti PSP Lower Intake structure to assess hydraulic performance, flow conditions, pressure profiles, and velocities, covering the lower reservoir, tail pool, intake structure, gate shafts, and tail race tunnel up to the powerhouse. Pressure losses remained within acceptable limits (0.0–0.3 m in generation mode and 0.6–0.9 m in pumping mode), while intake velocities ranged 0.50–0.90 m/s. No significant vortex formation or hydraulic short-circuiting was observed; however, minor flow non-uniformity during generation mode indicates scope for intake modifications.",
    images: [
      lowerIntake1,
      lowerIntake2,
      lowerIntake3,
      lowerIntake4,
      lowerIntake5,
      lowerIntake6,
    ],
  },

  // =========================================================
  // 6. MP30
  // =========================================================
  {
    id: 6,
    title: "MP30 Gandhisagar PSP (1920MW), MP, India",
    description:
      "The physical hydraulic model of lower intake structure including tailrace channel and part of lower reservoir is being constructed geometrically similar at a scale of 1:50. The model studies will be carried out for both modes i.e Generation Mode and Pumping Mode of turbine operation. The model studies will be conducted for assessment of flow conditions, velocities, etc. for both generation and pumping mode. The physical model includes a part of lower reservoir, complete tailrace channel for a length of 2350 m including tail pool, lower intake structure including gate shaft, tailrace tunnels upto length of 50 m. Initially the studies were conducted on basic design as provided by project authorities. Then the divide walls were introduced in the for better flow separation and the similar studies were carried out to assess the performance of the lower intake structure.",
    images: [
      mp30_1,
      mp30_2,
      mp30_3,
      mp30_4,
      mp30_5,
      mp30_6,
      mp30_7,
    ],
  },

  // =========================================================
  // 7. SHONGTONG
  // =========================================================
  {
    id: 7,
    title: "Shongtong Karcham HEP, 450 MW, HP, India",
    description:
      "The physical hydraulic model for silt flushing tunnel (SFT) including flushing conduits (BFC) is being constructed geometrically similar at a scale of 1:25 for a length of 1174.40 m to study the revised geometry of SFT. The model studies were carried out for different sediment concentration (ppm) i.e. 3000 to 5500 ppm using coconut shell powder as a sediment, having specific gravity of 1.2. Overall flow conditions along the SFT were uniform and no return flow were observed. Higher velocities of around 10 m/s to 13 m/s were observed from the studies. All the sediment, those were injected at inlet of BFCs were completely flushed away with these high velocities. The current revised design of the SFT including its transitions and alignment is hydraulically efficient for sediment flushing.",
    images: [
      shongtong1,
      shongtong2,
      shongtong4,
      shongtong5,
      shongtong6,
      shongtong7,
    ],
  },

    {
    id: 8,
    title: "Pinnapuram PSP, 1680 MW, Andhra Pradesh, India",
    description:
      "The Pinnapuram Integrated Renewable Energy Storage Project (IRESP) (1680 MW) is located Andhra Pradesh. The studies were carried out on a geometrically similar Froude model on a scale of 1:40 for assessing the flow conditions in the Upper Intake structure during the generation mode as well as pumping mode of operation. The part of upper reservoir, approach channel having length of 973 m and width of 190 m, inlet pool, intake structure including piers, anti-vortex beams, gate shaft and part of penstock were reproduced. According to the studies, the smart geometry-based flow distribution structure was operating as intended. Some modifications to the geometry of intermediate piers of intake structure were suggested.",
    images: [
      pinnapuram1,
      pinnapuram2,
      pinnapuram3,
      pinnapuram4,
      pinnapuram5,
    ],
  },

  // =========================================================
  // 9. VIJAYANAGAR
  // =========================================================
  {
    id: 9,
    title: "Vijayanagar PSP, 130 MW, Karnataka, India",
    description:
      "The Vijayanagar Pumped Storage Hydro Project (130MW) is located in Bellary district of Karnataka state of India. The physical hydraulic model studies were conducted on a geometrically similar 1:25 scale Froudean model for upper intake structure. The part of upper reservoir, approach channel/inlet pool, intake structure including piers, anti-vortex beams, gate shaft and part of penstock were reproduced. Flow distribution, flow conditions, velocities and pressure parameters were evaluated for the intake structure, approach channel and inlet pool. Sedimentation studies were also carried out. Model studies provided insight into the hydraulic behavior of the system and suggestions were provided regarding the overall operation of the system during generation mode of operation.",
    images: [
      vijayanagar1,
      vijayanagar2,
      vijayanagar3,
    ],
  },

  // =========================================================
  // 10. PHATA
  // =========================================================
  {
    id: 10,
    title: "Phata Byung HEP, Uttarakhand, India",
    description:
      "Mandakini River flowing through great Himalayas, had a devastating flood in July 2013. Phata Hydropower project is located just at the foothills of Kedarnath on Mandakini River. Phata dam was the first major structure, which got heavily damaged due to these unprecedented floods. Phata run-off-the-river spillway dam, a 76 MW Hydropower project, is now all set for the re-construction, after the physical model studies confirmed its suitability. Model is built on a physical scale of 1:35. The river is very steep at the location of dam having a slope in order of 1:8, vertical to horizontal. The hydraulic designs, discharging capacity, dam layout, as well as power intake operations were optimized in the model.",
    images: [
      phata1,
      phata2,
      phata3,
      phata4,
      phata5,
      phata6,
      phata7,
    ],
  },
 {
    id: 11,
    title:
      "Annaram (Saraswathi) Barrage, Kaleshwaram Lift Irrigation Scheme, Telangana, India",
    description:
      "Annaram Barrage is a part of Kaleshwaram project which is a prestigious & world’s biggest multi-stage Lift Irrigation Scheme situated in Telangana state of India. During the initial operations of the barrage, few damages were observed to the downstream protection works, post 2019 Godavari floods. IHL was involved in investigations to identify the causes and to suggest remedial measures. Site visit along with review of hydraulic designs suggested the inadequate tail-water levels affecting the performance of stilling basin. The sectional 2D model on a scale of 1:45 was constructed at IHL to assess potential alternatives for improving the energy dissipation. Extensive studies were carried out and introduction of extended/secondary stilling basin having lowered apron and raised end sill was suggested. The geometry and levels of extended stilling basin were optimised in the model. Further the gate operation schedule was also suggested for the barrage.",
    images: [
      anaram1,
      anaram2,
      anaram3,
      anaram4,
      anaram5,
      anaram6,
      anaram7,
    ],
  },

  // =========================================================
  // 12. PAKAL DUL
  // =========================================================
  {
    id: 12,
    title: "Pakal Dul HEP, 1000 MW, (J&K), India",
    description:
      "The Pakal Dul HEP envisages construction of a Concrete Faced Rockfill Dam of 167 m having the installed capacity of power 1000 MW, on the Marusudar River in Kishtwar District of Jammu and Kashmir, India. The hydraulic model studies were conducted on a geometrically similar 1:40 scale model for Tunnel Spillway and Power Intake Bulkhead and Service Gates. The model studies were conducted to assess the overall hydraulic performance of water conductor system for Tunnel Spillway as well as Power Intake and to estimate hydrodynamic forces and flow conditions in the gate wells including upstream and downstream transitions.",
    images: [
      pakalDul1,
      pakalDul2,
      pakalDul3,
      pakalDul4,
      pakalDul5,
      pakalDul6,
    ],
  },

  // =========================================================
  // 13. NAM-E-MOUN
  // =========================================================
  {
    id: 13,
    title: "Nam-E-Moun, Laos - Desander Models",
    description:
      "The desilting basins (Desanders) of Diversion dam and Main dam were modelled on a Froudeian scale of 1:16. Detailed model studies were carried out for evaluating the performance of desilting basins in trapping the suspended load. The coconut shell powder having low specific gravity, was used to simulate the suspended particles. Coconut shell powder proved to be good alternative in view of the shortage of walnut shell powder. Both desanders were found to be more than 90% efficient in trapping the suspended particle size of more than 0.2 mm. The flushing studies were carried out, to formulate the flushing methodology, and to optimize the quantity of water and time required for flushing.",
    images: [
      desenderBochin1,
      desenderBochin2,
      desenderBochin3,
      desenderBochin4,
      desenderBochin5,
    ],
  },

  {
    id: 14,
    title: "Super Trishuli 2D Model for Spillway, Nepal",
    description:
      "A 100 MW Hydro Power Project is planned on Trishuli River in central Nepal. The project is located along the Kathmandu Pokhara 'Prithvi' Highway, and it is a run-of-the-river type project with Dam Toe Powerhouse arrangement having a capacity of 100 MW of power generation. The project is planning to install very high radial gates. A two-dimensional physical model is built to evaluate the performance of energy dissipation arrangement provided in the form of stilling basin at downstream of spillway. The model is called two dimensional, as only one or two spans are reproduced in the model, out of total five spans of spillway. Model studies highlighted the need to lower the height of radial gates and addition of two or two spans of spillways, to improve the energy dissipation arrangement. The improvement in stilling basin is also suggested.",
    images: [
      allainDuhangan1,
      allainDuhangan2,
      allainDuhangan3,
      allainDuhangan4,
    ],
  },
{
  id: 15,
  title: "Dagachhu Head Race Tunnel, Bhutan",
  description:
    "Hydraulic model for Head race tunnel of Dagachhu Hydro-Power Project, Bhutan, was the first physical model built by IHL. The head race channel was transitioning into the pressurized tunnel. Due to the difference in the elevations during excavation stage, the transition was not as smooth as originally planned. Numerical analysis showed that water will form upstream of transition. To verify this, the transparent Perspex model was built, to observe the flow pattern inside the transition. The air entrainment vortex was observed at high flows. To eliminate this, an anti-vortex device in form of a beam was suggested. The location and sizing of beam was optimized in the model and implemented successfully on the site as well.",
  images: [
    dagachhu1,
    dagachhu2,
    dagachhu3,
  ],
},

{
  id: 16,
  title: "Nagalwadi Lift Irrigation Intake, Madhya Pradesh, India",
  description:
    "Lift irrigation scheme is under construction on the Narmada River at Nagalwadi. It is planned to irrigate 45,000 ha of agricultural land in Madhya Pradesh. The entire scheme envisages seven stage pumping. The main pump intake consists of 5 V.T. Pumps, each having a discharge of 3.75 cumec. The geometrically similar Froude model was constructed on a model scale of 1:12.5 to observe the flow conditions at the intake. The operational matrix was studied for various pump operating combinations and hydraulic designs were verified.",
  images: [
    nagalwadiLift1,
    nagalwadiLift2,
    nagalwadiLift3,
  ],
},

{
  id: 17,
  title: "Chorokhi River, Batumi, Georgia",
  description:
    "Perhaps one of the biggest model ever constructed in laboratory spread over 70 m × 30 m. River length of 2.5 km was reproduced along with some part of seabed. Part of the coast near the mouth of Chorokhi river is eroding for last few decades. The geometrically similar rigid bed physical hydraulic model on the scale of 1:50 conforming to Froudean similitude was constructed to assess the hydraulic performance and sediment movement near Chorokhi river mouth. Mathematical model in HEC-RAS was prepared for the reach of 3 km from river mouth. The mathematical model was used to arrive and compare the water surface profiles and Manning’s n values in various sections of river reach.",
  images: [
    chorokhi1,
    chorokhi2,
    chorokhi3,
    chorokhi4,
    chorokhi5,
  ],
},

{
  id: 18,
  title: "Nam-E-Moun, Laos - River Calibration Model",
  description:
    "Nam-E-Moun Hydro power project having an installed capacity of 128 MW, is being developed in Laos PDR, which envisages two spillways on two rivers, Nam-E-Moun and its tributary Huey-Het. Both spillways and power intakes were modelled. Rivers are reproduced for some upstream and downstream portion, on a Freudian model scale ratio of 1:40. Both rivers have a peculiarity that they are having very steep banks with high vegetation cover consisting of tall trees. Estimation of the water levels during high floods as well as prediction of the impact of spillway structure was a challenging task. Model trees and pebbles, grit were used to reproduce the high friction along the banks. Its effect on the river course was evaluated. Two levels in both the rivers were calibrated. After due calibration of the river models, spillway and intake structures were installed in the river.",
  images: [
    namEMoun1,
    namEMoun2,
    namEMoun4,
  ],
},

{
  id: 19,
  title: "Nam-E-Moun, Laos - Spillway Models",
  description:
    "Various model studies were carried out to evaluate the discharging capacity of the spillways, upstream flow conditions, energy dissipation on the downstream and adequacy of structures. Further, the detailed experiments were carried out for preparing the gate operation schedule to guide the authorities during the prototype operations. A very good insight was gained with respect to the overall flow conditions from model studies and some modifications were suggested with respect to downstream apron and gate operations.",
  images: [
    namEMounLaos1,
    namEMounLaos2,
    namEMounLaos3,
    namEMounLaos4,
    namEMounLaos5,
    namEMounLaos6,
    namEMounLaos7,
    namEMounLaos8,
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
  className="h-full w-full object-contain transition-all duration-700"
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
{/* 
        <button className="group mt-5 inline-flex w-fit items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-5 py-2.5 text-xs font-semibold uppercase tracking-wide text-white shadow-lg shadow-blue-600/25 transition-all duration-300 hover:scale-105 hover:shadow-blue-600/40">
          View Details
          <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
        </button> */}
      </div>
    </div>
  );
}

/* ============================================================
   PAGE
============================================================ */

export default function PhysicalModelStudiesPage() {
  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans antialiased">
      {/* =========================================================
          HERO — 3-image collage with overlay title
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
              <Waves size={13} className="sm:h-[14px] sm:w-[14px]" />
              Scaled Laboratory Testing
            </div>
            <h1 className="text-2xl font-bold tracking-tight text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)] sm:text-4xl lg:text-5xl">
              Hydraulic Model Studies
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
            Infraplan's Hydraulic Laboratory constructs geometrically scaled physical
            models of barrages, intakes, spillways, and desanding structures to
            validate hydraulic performance, flow behaviour, and sediment management
            strategies before full-scale construction.
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            <div className="flex items-center gap-1.5 rounded-full border border-blue-100 bg-white px-3 py-1.5 text-[10px] font-medium text-slate-600 shadow-sm sm:gap-2 sm:px-4 sm:py-2 sm:text-xs">
              <Droplets size={13} className="shrink-0 text-blue-600 sm:h-[15px] sm:w-[15px]" />
              Intake & Barrage Studies
            </div>
            <div className="flex items-center gap-1.5 rounded-full border border-blue-100 bg-white px-3 py-1.5 text-[10px] font-medium text-slate-600 shadow-sm sm:gap-2 sm:px-4 sm:py-2 sm:text-xs">
              <Gauge size={13} className="shrink-0 text-blue-600 sm:h-[15px] sm:w-[15px]" />
              Pumped Storage Hydraulics
            </div>
            <div className="flex items-center gap-1.5 rounded-full border border-blue-100 bg-white px-3 py-1.5 text-[10px] font-medium text-slate-600 shadow-sm sm:gap-2 sm:px-4 sm:py-2 sm:text-xs">
              <Layers size={13} className="shrink-0 text-blue-600 sm:h-[15px] sm:w-[15px]" />
              Sediment & Desanding
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          PROJECT LIST
      ========================================================= */}
      <section className="bg-white px-4 py-12 sm:px-8 sm:py-16 lg:px-12">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 sm:gap-8">
          {physicalModelStudies.map((project) => (
            <ProjectRow key={project.id} project={project} />
          ))}
        </div>
      </section>
    </div>
  );
}