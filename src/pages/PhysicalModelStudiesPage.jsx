// import React, { useState } from "react";
// import {
//   Waves,
//   ChevronLeft,
//   ChevronRight,
//   ArrowRight,
//   Droplets,
//   Gauge,
//   Layers,
// } from "lucide-react";
// // Real Trench Weir images
// import trenchWeir1 from "../assets/physicalModelImages/trench-weir/admin-ajax.png";
// // import trenchWeir1 from "../assets/physicalModelImages/trench-weir/admin-ajax.png";
// import trenchWeir2 from "../assets/physicalModelImages/trench-weir/fifth.png";
import trenchWeir3 from "../assets/physicalModelImages/trench-weir/second.png";
import namBeng1 from "../assets/mathematicalModel/Nam-Beng-Dam/1.png";

// import trenchWeir4 from "../assets/physicalModelImages/trench-weir/six.png";
// import trenchWeir5 from "../assets/physicalModelImages/trench-weir/third.png";

// // Boras Barrage
// import borasBarrage1 from "../assets/physicalModelImages/boras-barrage/1.png";
// import borasBarrage2 from "../assets/physicalModelImages/boras-barrage/2.png";
// import borasBarrage3 from "../assets/physicalModelImages/boras-barrage/3.png";
// import borasBarrage4 from "../assets/physicalModelImages/boras-barrage/4.png";
// import borasBarrage5 from "../assets/physicalModelImages/boras-barrage/5.png";
// import borasBarrage6 from "../assets/physicalModelImages/boras-barrage/6.png";
// // Desender Bochin
// import desenderBochin1 from "../assets/physicalModelImages/desender-bochin/1.png";
// import desenderBochin2 from "../assets/physicalModelImages/desender-bochin/2.png";
// import desenderBochin3 from "../assets/physicalModelImages/desender-bochin/3.png";
// import desenderBochin4 from "../assets/physicalModelImages/desender-bochin/4.png";
// import desenderBochin5 from "../assets/physicalModelImages/desender-bochin/5.png";

// // Upper Intake Structure
import upperIntake1 from "../assets/physicalModelImages/upper-intake-structure/1.png";
// import upperIntake2 from "../assets/physicalModelImages/upper-intake-structure/2.png";
// import upperIntake3 from "../assets/physicalModelImages/upper-intake-structure/3.png";
// import upperIntake4 from "../assets/physicalModelImages/upper-intake-structure/4.png";
// import upperIntake5 from "../assets/physicalModelImages/upper-intake-structure/5.png";
// import upperIntake6 from "../assets/physicalModelImages/upper-intake-structure/6.png";
// import upperIntake7 from "../assets/physicalModelImages/upper-intake-structure/7.png";

// // Allain-Duhangan
// import allainDuhangan1 from "../assets/physicalModelImages/Allain-Duhangan/1.jpg";
// import allainDuhangan2 from "../assets/physicalModelImages/Allain-Duhangan/2.png";
// import allainDuhangan3 from "../assets/physicalModelImages/Allain-Duhangan/3.png";
// import allainDuhangan4 from "../assets/physicalModelImages/Allain-Duhangan/4.png";

// // Anaram
// import anaram1 from "../assets/physicalModelImages/Anaram/1.png";
// import anaram2 from "../assets/physicalModelImages/Anaram/2.png";
// import anaram3 from "../assets/physicalModelImages/Anaram/3.png";
// import anaram4 from "../assets/physicalModelImages/Anaram/4.png";
// import anaram5 from "../assets/physicalModelImages/Anaram/5.png";
// import anaram6 from "../assets/physicalModelImages/Anaram/6.png";
// import anaram7 from "../assets/physicalModelImages/Anaram/7.png";

// // Lower Intake Structure
// import lowerIntake1 from "../assets/physicalModelImages/Lower-Intake-Structure/1.png";
// import lowerIntake2 from "../assets/physicalModelImages/Lower-Intake-Structure/2.png";
// import lowerIntake3 from "../assets/physicalModelImages/Lower-Intake-Structure/3.png";
// import lowerIntake4 from "../assets/physicalModelImages/Lower-Intake-Structure/4.png";
// import lowerIntake5 from "../assets/physicalModelImages/Lower-Intake-Structure/5.jpg";
// import lowerIntake6 from "../assets/physicalModelImages/Lower-Intake-Structure/6.jpg";

// // MP30
// import mp30_1 from "../assets/physicalModelImages/mp30/1.png";
// import mp30_2 from "../assets/physicalModelImages/mp30/2.png";
// import mp30_3 from "../assets/physicalModelImages/mp30/3.png";
// import mp30_4 from "../assets/physicalModelImages/mp30/4.png";
// import mp30_5 from "../assets/physicalModelImages/mp30/5.png";
// import mp30_6 from "../assets/physicalModelImages/mp30/6.png";
// import mp30_7 from "../assets/physicalModelImages/mp30/7.png";



// // Pakal-Dul
// import pakalDul1 from "../assets/physicalModelImages/Pakal-Dul/1.png";
// import pakalDul2 from "../assets/physicalModelImages/Pakal-Dul/2.png";
// import pakalDul3 from "../assets/physicalModelImages/Pakal-Dul/3.png";
// import pakalDul4 from "../assets/physicalModelImages/Pakal-Dul/4.png";
// import pakalDul5 from "../assets/physicalModelImages/Pakal-Dul/5.png";
// import pakalDul6 from "../assets/physicalModelImages/Pakal-Dul/6.png";

// // Phata
import phata1 from "../assets/physicalModelImages/Phata/1.jpg";
// import phata2 from "../assets/physicalModelImages/Phata/2.jpg";
// import phata3 from "../assets/physicalModelImages/Phata/3.png";
// import phata4 from "../assets/physicalModelImages/Phata/4.png";
// import phata5 from "../assets/physicalModelImages/Phata/5.png";
// import phata6 from "../assets/physicalModelImages/Phata/6.png";
// import phata7 from "../assets/physicalModelImages/Phata/7.jpg";

// // Pinnapuram
// import pinnapuram1 from "../assets/physicalModelImages/Pinnapuram/1.png";
// import pinnapuram2 from "../assets/physicalModelImages/Pinnapuram/2.png";
// import pinnapuram3 from "../assets/physicalModelImages/Pinnapuram/3.png";
// import pinnapuram4 from "../assets/physicalModelImages/Pinnapuram/4.png";
// import pinnapuram5 from "../assets/physicalModelImages/Pinnapuram/5.jpg";

// // Shongtong
// import shongtong1 from "../assets/physicalModelImages/Shongtong/1.png";
// import shongtong2 from "../assets/physicalModelImages/Shongtong/2.png";
// import shongtong4 from "../assets/physicalModelImages/Shongtong/4.png";
// import shongtong5 from "../assets/physicalModelImages/Shongtong/5.png";
// import shongtong6 from "../assets/physicalModelImages/Shongtong/6.png";
// import shongtong7 from "../assets/physicalModelImages/Shongtong/7.png";

// // Vijayanagar
// import vijayanagar1 from "../assets/physicalModelImages/Vijayanagar/1.png";
// import vijayanagar2 from "../assets/physicalModelImages/Vijayanagar/2.png";
// import vijayanagar3 from "../assets/physicalModelImages/Vijayanagar/3.png";

// // NAGALWADI LIFT
// // =========================
// import nagalwadiLift1 from "../assets/physicalModelImages/Nagalwadi-Lift/1.jpg";
// import nagalwadiLift2 from "../assets/physicalModelImages/Nagalwadi-Lift/2.jpg";
// import nagalwadiLift3 from "../assets/physicalModelImages/Nagalwadi-Lift/3.png";
// // NAM-E-MOUN
// // =========================
// import namEMoun1 from "../assets/physicalModelImages/Nam-E-Moun/1.png";
// import namEMoun2 from "../assets/physicalModelImages/Nam-E-Moun/2.png";
// import namEMoun4 from "../assets/physicalModelImages/Nam-E-Moun/4.png";

// // =========================
// // NAM-E-MOUN LAOS
// // =========================
// import namEMounLaos1 from "../assets/physicalModelImages/Nam-E-Moun-Laos/1.jpg";
// import namEMounLaos2 from "../assets/physicalModelImages/Nam-E-Moun-Laos/2.jpg";
// import namEMounLaos3 from "../assets/physicalModelImages/Nam-E-Moun-Laos/3.jpg";
// import namEMounLaos4 from "../assets/physicalModelImages/Nam-E-Moun-Laos/4.jpg";
// import namEMounLaos5 from "../assets/physicalModelImages/Nam-E-Moun-Laos/5.jpg";
// import namEMounLaos6 from "../assets/physicalModelImages/Nam-E-Moun-Laos/6.jpg";
// import namEMounLaos7 from "../assets/physicalModelImages/Nam-E-Moun-Laos/7.jpg";
// import namEMounLaos8 from "../assets/physicalModelImages/Nam-E-Moun-Laos/8.png";

// import chorokhi1 from "../assets/physicalModelImages/Chorokhi/1.jpg";
// import chorokhi2 from "../assets/physicalModelImages/Chorokhi/2.jpg";
// import chorokhi3 from "../assets/physicalModelImages/Chorokhi/3.jpg";
// import chorokhi4 from "../assets/physicalModelImages/Chorokhi/4.png";
// import chorokhi5 from "../assets/physicalModelImages/Chorokhi/5.png";

// // =========================
// // DAGACHHU
// // =========================
// import dagachhu1 from "../assets/physicalModelImages/Dagachhu/1.jpg";
// import dagachhu2 from "../assets/physicalModelImages/Dagachhu/2.jpg";
// import dagachhu3 from "../assets/physicalModelImages/Dagachhu/3.jpg";


// /* ============================================================
//    PLACEHOLDER IMAGES — swap these arrays for real project
//    photos later.
// ============================================================ */

const collageImages = [
upperIntake1,
namBeng1,
trenchWeir3
];

// const physicalModelStudies = [
//   {
//     id: 1,
//     title:
//       "Trench Weir (Model II) of Lapchi Khola Hydro Electric Project (200 MW), Nepal",
//     description:
//       "Physical hydraulic model study of the standalone trench weir model was carried out using a geometrically similar scale of 1:10. The model included the Lapchi Khola river reach, trench weir, conveyance duct, shingle flushing duct, feeder ducts, and side spillway. Hydraulic studies were performed for discharges ranging from 5 m³/s to 90 m³/s to assess the intake capacity and feasibility. Sediment studies were carried out to evaluate the trench weir performance under sediment-laden flow conditions. Modifications such as upstream profile wall addition, side channel removal, and upstream dredging were recommended for improved flow distribution. The trench weir showed excellent performance, diverting nearly 100% flow up to 40 m³/s with stable approach flow conditions.",
// images: [
//   trenchWeir1,
//   trenchWeir2,
//   trenchWeir3,
//   trenchWeir4,
//   trenchWeir5,
// ],
//   },

//   {
//     id: 2,
//     title:
//       "Desander Basin (Model III) of Lapchi Khola Hydro Electric Project (200 MW), Nepal",
//     description:
//       "Physical hydraulic model studies of a (3-D) standalone model for the Desanding Basin was carried out using a geometrically similar scale of 1:12. The physical model comprises a conveyance duct, branch feeder ducts I and II, a spill duct, a shingle flushing tunnel, one desander unit, a collection channel, and sediment flushing ducts. Flow Distribution Performance: Uniform flow distribution and stable FSL were achieved during dual-unit operation. Raising the spill duct crest to EL 3219.00 m eliminated overflow during single-unit operation while maintaining overflow safety. Flushing System Performance: The SFT and shingle flushing duct showed higher discharge capacities than design values; required design discharges were achieved through controlled partial gate operation.",
//      images: [
//     borasBarrage1,
//     borasBarrage2,
//     borasBarrage3,
//     borasBarrage4,
//     borasBarrage5,
//     borasBarrage6,
//   ],
//   },

//   {
//     id: 3,
//     title:
//       "Boras Barrage Hydro Electric Project (25 MW) Madhya Pradesh, India",
//     description:
//       "A 1:60 Scale Physical Hydraulic Model Studies for Boras Barrage (25 MW) including barrage, powerhouse, intake, and tailrace system. Hydraulic Optimization of Intake System through guide wall and channel modifications for stable and uniform flow conditions. Enhanced Powerhouse Performance ensuring efficient operation at design discharge conditions. Tailrace & Flow Behavior Assessment with recommendations for hydraulic improvements. Sediment Management Strategy developed through flushing and operational studies for sustainable performance.",
//    images: [
//     desenderBochin1,
//     desenderBochin2,
//     desenderBochin3,
//     desenderBochin4,
//     desenderBochin5,
//   ],
//   },

//   {
//     id: 4,
//     title:
//       "Upper Intake Structure of Saundatti Pumped Storage Project (1600 MW), Karnataka, India",
//     description:
//       "A 1:40 scale 3-D physical hydraulic model based on Froude similitude was developed for the Saundatti PSP Upper Intake structure, covering the upper reservoir, inlet pool, intake structure, gate shafts, and 75 m long penstocks. Flow conditions were acceptable in both modes, with no significant vortices observed and intake velocities ranging from 0.55 – 0.79 m/s. The upper intake structure exhibited satisfactory hydraulic performance with smooth flow conditions and acceptable pressure losses (1.5–1.6 m in generation mode; 0.6–0.7 m in pumping mode). The overall intake design was hydraulically sound; however, improving transition near the gate shaft is recommended for better pumping flow conditions.",
//   images: [
//     upperIntake1,
//     upperIntake2,
//     upperIntake3,
//     upperIntake4,
//     upperIntake5,
//     upperIntake6,
//   ],
//   },
//   {
//     id: 5,
//     title:
//       "Lower Intake Structure of Saundatti Pumped Storage Project (1600 MW), Karnataka, India",
//     description:
//       "A 1:40 scale geometrically similar Froude model was developed for the Saundatti PSP Lower Intake structure to assess hydraulic performance, flow conditions, pressure profiles, and velocities, covering the lower reservoir, tail pool, intake structure, gate shafts, and tail race tunnel up to the powerhouse. Pressure losses remained within acceptable limits (0.0–0.3 m in generation mode and 0.6–0.9 m in pumping mode), while intake velocities ranged 0.50–0.90 m/s. No significant vortex formation or hydraulic short-circuiting was observed; however, minor flow non-uniformity during generation mode indicates scope for intake modifications.",
//     images: [
//       lowerIntake1,
//       lowerIntake2,
//       lowerIntake3,
//       lowerIntake4,
//       lowerIntake5,
//       lowerIntake6,
//     ],
//   },

//   // =========================================================
//   // 6. MP30
//   // =========================================================
//   {
//     id: 6,
//     title: "MP30 Gandhisagar PSP (1920MW), MP, India",
//     description:
//       "The physical hydraulic model of lower intake structure including tailrace channel and part of lower reservoir is being constructed geometrically similar at a scale of 1:50. The model studies will be carried out for both modes i.e Generation Mode and Pumping Mode of turbine operation. The model studies will be conducted for assessment of flow conditions, velocities, etc. for both generation and pumping mode. The physical model includes a part of lower reservoir, complete tailrace channel for a length of 2350 m including tail pool, lower intake structure including gate shaft, tailrace tunnels upto length of 50 m. Initially the studies were conducted on basic design as provided by project authorities. Then the divide walls were introduced in the for better flow separation and the similar studies were carried out to assess the performance of the lower intake structure.",
//     images: [
//       mp30_1,
//       mp30_2,
//       mp30_3,
//       mp30_4,
//       mp30_5,
//       mp30_6,
//       mp30_7,
//     ],
//   },

//   // =========================================================
//   // 7. SHONGTONG
//   // =========================================================
//   {
//     id: 7,
//     title: "Shongtong Karcham HEP, 450 MW, HP, India",
//     description:
//       "The physical hydraulic model for silt flushing tunnel (SFT) including flushing conduits (BFC) is being constructed geometrically similar at a scale of 1:25 for a length of 1174.40 m to study the revised geometry of SFT. The model studies were carried out for different sediment concentration (ppm) i.e. 3000 to 5500 ppm using coconut shell powder as a sediment, having specific gravity of 1.2. Overall flow conditions along the SFT were uniform and no return flow were observed. Higher velocities of around 10 m/s to 13 m/s were observed from the studies. All the sediment, those were injected at inlet of BFCs were completely flushed away with these high velocities. The current revised design of the SFT including its transitions and alignment is hydraulically efficient for sediment flushing.",
//     images: [
//       shongtong1,
//       shongtong2,
//       shongtong4,
//       shongtong5,
//       shongtong6,
//       shongtong7,
//     ],
//   },

//     {
//     id: 8,
//     title: "Pinnapuram PSP, 1680 MW, Andhra Pradesh, India",
//     description:
//       "The Pinnapuram Integrated Renewable Energy Storage Project (IRESP) (1680 MW) is located Andhra Pradesh. The studies were carried out on a geometrically similar Froude model on a scale of 1:40 for assessing the flow conditions in the Upper Intake structure during the generation mode as well as pumping mode of operation. The part of upper reservoir, approach channel having length of 973 m and width of 190 m, inlet pool, intake structure including piers, anti-vortex beams, gate shaft and part of penstock were reproduced. According to the studies, the smart geometry-based flow distribution structure was operating as intended. Some modifications to the geometry of intermediate piers of intake structure were suggested.",
//     images: [
//       pinnapuram1,
//       pinnapuram2,
//       pinnapuram3,
//       pinnapuram4,
//       pinnapuram5,
//     ],
//   },

//   // =========================================================
//   // 9. VIJAYANAGAR
//   // =========================================================
//   {
//     id: 9,
//     title: "Vijayanagar PSP, 130 MW, Karnataka, India",
//     description:
//       "The Vijayanagar Pumped Storage Hydro Project (130MW) is located in Bellary district of Karnataka state of India. The physical hydraulic model studies were conducted on a geometrically similar 1:25 scale Froudean model for upper intake structure. The part of upper reservoir, approach channel/inlet pool, intake structure including piers, anti-vortex beams, gate shaft and part of penstock were reproduced. Flow distribution, flow conditions, velocities and pressure parameters were evaluated for the intake structure, approach channel and inlet pool. Sedimentation studies were also carried out. Model studies provided insight into the hydraulic behavior of the system and suggestions were provided regarding the overall operation of the system during generation mode of operation.",
//     images: [
//       vijayanagar1,
//       vijayanagar2,
//       vijayanagar3,
//     ],
//   },

//   // =========================================================
//   // 10. PHATA
//   // =========================================================
//   {
//     id: 10,
//     title: "Phata Byung HEP, Uttarakhand, India",
//     description:
//       "Mandakini River flowing through great Himalayas, had a devastating flood in July 2013. Phata Hydropower project is located just at the foothills of Kedarnath on Mandakini River. Phata dam was the first major structure, which got heavily damaged due to these unprecedented floods. Phata run-off-the-river spillway dam, a 76 MW Hydropower project, is now all set for the re-construction, after the physical model studies confirmed its suitability. Model is built on a physical scale of 1:35. The river is very steep at the location of dam having a slope in order of 1:8, vertical to horizontal. The hydraulic designs, discharging capacity, dam layout, as well as power intake operations were optimized in the model.",
//     images: [
//       phata1,
//       phata2,
//       phata3,
//       phata4,
//       phata5,
//       phata6,
//       phata7,
//     ],
//   },
//  {
//     id: 11,
//     title:
//       "Annaram (Saraswathi) Barrage, Kaleshwaram Lift Irrigation Scheme, Telangana, India",
//     description:
//       "Annaram Barrage is a part of Kaleshwaram project which is a prestigious & world’s biggest multi-stage Lift Irrigation Scheme situated in Telangana state of India. During the initial operations of the barrage, few damages were observed to the downstream protection works, post 2019 Godavari floods. IHL was involved in investigations to identify the causes and to suggest remedial measures. Site visit along with review of hydraulic designs suggested the inadequate tail-water levels affecting the performance of stilling basin. The sectional 2D model on a scale of 1:45 was constructed at IHL to assess potential alternatives for improving the energy dissipation. Extensive studies were carried out and introduction of extended/secondary stilling basin having lowered apron and raised end sill was suggested. The geometry and levels of extended stilling basin were optimised in the model. Further the gate operation schedule was also suggested for the barrage.",
//     images: [
//       anaram1,
//       anaram2,
//       anaram3,
//       anaram4,
//       anaram5,
//       anaram6,
//       anaram7,
//     ],
//   },

//   // =========================================================
//   // 12. PAKAL DUL
//   // =========================================================
//   {
//     id: 12,
//     title: "Pakal Dul HEP, 1000 MW, (J&K), India",
//     description:
//       "The Pakal Dul HEP envisages construction of a Concrete Faced Rockfill Dam of 167 m having the installed capacity of power 1000 MW, on the Marusudar River in Kishtwar District of Jammu and Kashmir, India. The hydraulic model studies were conducted on a geometrically similar 1:40 scale model for Tunnel Spillway and Power Intake Bulkhead and Service Gates. The model studies were conducted to assess the overall hydraulic performance of water conductor system for Tunnel Spillway as well as Power Intake and to estimate hydrodynamic forces and flow conditions in the gate wells including upstream and downstream transitions.",
//     images: [
//       pakalDul1,
//       pakalDul2,
//       pakalDul3,
//       pakalDul4,
//       pakalDul5,
//       pakalDul6,
//     ],
//   },

//   // =========================================================
//   // 13. NAM-E-MOUN
//   // =========================================================
//   {
//     id: 13,
//     title: "Nam-E-Moun, Laos - Desander Models",
//     description:
//       "The desilting basins (Desanders) of Diversion dam and Main dam were modelled on a Froudeian scale of 1:16. Detailed model studies were carried out for evaluating the performance of desilting basins in trapping the suspended load. The coconut shell powder having low specific gravity, was used to simulate the suspended particles. Coconut shell powder proved to be good alternative in view of the shortage of walnut shell powder. Both desanders were found to be more than 90% efficient in trapping the suspended particle size of more than 0.2 mm. The flushing studies were carried out, to formulate the flushing methodology, and to optimize the quantity of water and time required for flushing.",
//     images: [
//       desenderBochin1,
//       desenderBochin2,
//       desenderBochin3,
//       desenderBochin4,
//       desenderBochin5,
//     ],
//   },

//   {
//     id: 14,
//     title: "Super Trishuli 2D Model for Spillway, Nepal",
//     description:
//       "A 100 MW Hydro Power Project is planned on Trishuli River in central Nepal. The project is located along the Kathmandu Pokhara 'Prithvi' Highway, and it is a run-of-the-river type project with Dam Toe Powerhouse arrangement having a capacity of 100 MW of power generation. The project is planning to install very high radial gates. A two-dimensional physical model is built to evaluate the performance of energy dissipation arrangement provided in the form of stilling basin at downstream of spillway. The model is called two dimensional, as only one or two spans are reproduced in the model, out of total five spans of spillway. Model studies highlighted the need to lower the height of radial gates and addition of two or two spans of spillways, to improve the energy dissipation arrangement. The improvement in stilling basin is also suggested.",
//     images: [
//       allainDuhangan1,
//       allainDuhangan2,
//       allainDuhangan3,
//       allainDuhangan4,
//     ],
//   },
// {
//   id: 15,
//   title: "Dagachhu Head Race Tunnel, Bhutan",
//   description:
//     "Hydraulic model for Head race tunnel of Dagachhu Hydro-Power Project, Bhutan, was the first physical model built by IHL. The head race channel was transitioning into the pressurized tunnel. Due to the difference in the elevations during excavation stage, the transition was not as smooth as originally planned. Numerical analysis showed that water will form upstream of transition. To verify this, the transparent Perspex model was built, to observe the flow pattern inside the transition. The air entrainment vortex was observed at high flows. To eliminate this, an anti-vortex device in form of a beam was suggested. The location and sizing of beam was optimized in the model and implemented successfully on the site as well.",
//   images: [
//     dagachhu1,
//     dagachhu2,
//     dagachhu3,
//   ],
// },

// {
//   id: 16,
//   title: "Nagalwadi Lift Irrigation Intake, Madhya Pradesh, India",
//   description:
//     "Lift irrigation scheme is under construction on the Narmada River at Nagalwadi. It is planned to irrigate 45,000 ha of agricultural land in Madhya Pradesh. The entire scheme envisages seven stage pumping. The main pump intake consists of 5 V.T. Pumps, each having a discharge of 3.75 cumec. The geometrically similar Froude model was constructed on a model scale of 1:12.5 to observe the flow conditions at the intake. The operational matrix was studied for various pump operating combinations and hydraulic designs were verified.",
//   images: [
//     nagalwadiLift1,
//     nagalwadiLift2,
//     nagalwadiLift3,
//   ],
// },

// {
//   id: 17,
//   title: "Chorokhi River, Batumi, Georgia",
//   description:
//     "Perhaps one of the biggest model ever constructed in laboratory spread over 70 m × 30 m. River length of 2.5 km was reproduced along with some part of seabed. Part of the coast near the mouth of Chorokhi river is eroding for last few decades. The geometrically similar rigid bed physical hydraulic model on the scale of 1:50 conforming to Froudean similitude was constructed to assess the hydraulic performance and sediment movement near Chorokhi river mouth. Mathematical model in HEC-RAS was prepared for the reach of 3 km from river mouth. The mathematical model was used to arrive and compare the water surface profiles and Manning’s n values in various sections of river reach.",
//   images: [
//     chorokhi1,
//     chorokhi2,
//     chorokhi3,
//     chorokhi4,
//     chorokhi5,
//   ],
// },

// {
//   id: 18,
//   title: "Nam-E-Moun, Laos - River Calibration Model",
//   description:
//     "Nam-E-Moun Hydro power project having an installed capacity of 128 MW, is being developed in Laos PDR, which envisages two spillways on two rivers, Nam-E-Moun and its tributary Huey-Het. Both spillways and power intakes were modelled. Rivers are reproduced for some upstream and downstream portion, on a Freudian model scale ratio of 1:40. Both rivers have a peculiarity that they are having very steep banks with high vegetation cover consisting of tall trees. Estimation of the water levels during high floods as well as prediction of the impact of spillway structure was a challenging task. Model trees and pebbles, grit were used to reproduce the high friction along the banks. Its effect on the river course was evaluated. Two levels in both the rivers were calibrated. After due calibration of the river models, spillway and intake structures were installed in the river.",
//   images: [
//     namEMoun1,
//     namEMoun2,
//     namEMoun4,
//   ],
// },

// {
//   id: 19,
//   title: "Nam-E-Moun, Laos - Spillway Models",
//   description:
//     "Various model studies were carried out to evaluate the discharging capacity of the spillways, upstream flow conditions, energy dissipation on the downstream and adequacy of structures. Further, the detailed experiments were carried out for preparing the gate operation schedule to guide the authorities during the prototype operations. A very good insight was gained with respect to the overall flow conditions from model studies and some modifications were suggested with respect to downstream apron and gate operations.",
//   images: [
//     namEMounLaos1,
//     namEMounLaos2,
//     namEMounLaos3,
//     namEMounLaos4,
//     namEMounLaos5,
//     namEMounLaos6,
//     namEMounLaos7,
//     namEMounLaos8,
//   ],
// },
// ];

// /* ============================================================
//    IMAGE CAROUSEL — per-card, self-contained state
// ============================================================ */

// function ProjectCarousel({ images, title }) {
//   const [index, setIndex] = useState(0);

//   const next = () => setIndex((prev) => (prev + 1) % images.length);
//   const prev = () => setIndex((prev) => (prev - 1 + images.length) % images.length);

//   return (
//     <div className="group relative h-[240px] w-full shrink-0 overflow-hidden rounded-2xl bg-slate-100 shadow-lg sm:h-[300px] lg:h-[320px] lg:w-[420px]">
//     <img
//   src={images[index]}
//   alt={`${title} ${index + 1}`}
//   className="h-full w-full object-contain transition-all duration-700"
// />

//       <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

//       {images.length > 1 && (
//         <>
//           <button
//             type="button"
//             onClick={prev}
//             aria-label="Previous image"
//             className="absolute left-2 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-black/45 text-white shadow-lg backdrop-blur-sm transition-all duration-300 hover:bg-black/65 sm:h-9 sm:w-9 lg:opacity-0 lg:group-hover:opacity-100"
//           >
//             <ChevronLeft size={16} className="sm:h-[18px] sm:w-[18px]" />
//           </button>

//           <button
//             type="button"
//             onClick={next}
//             aria-label="Next image"
//             className="absolute right-2 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-black/45 text-white shadow-lg backdrop-blur-sm transition-all duration-300 hover:bg-black/65 sm:h-9 sm:w-9 lg:opacity-0 lg:group-hover:opacity-100"
//           >
//             <ChevronRight size={16} className="sm:h-[18px] sm:w-[18px]" />
//           </button>

//           <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-1.5">
//             {images.map((_, i) => (
//               <button
//                 key={i}
//                 type="button"
//                 onClick={() => setIndex(i)}
//                 aria-label={`Show image ${i + 1}`}
//                 className={`h-1.5 rounded-full transition-all duration-300 ${
//                   i === index ? "w-5 bg-white" : "w-1.5 bg-white/50 hover:bg-white/80"
//                 }`}
//               />
//             ))}
//           </div>
//         </>
//       )}
//     </div>
//   );
// }

// /* ============================================================
//    PROJECT ROW
// ============================================================ */

// function ProjectRow({ project }) {
//   return (
//     <div className="flex flex-col gap-6 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all hover:shadow-md sm:p-6 lg:flex-row lg:items-start lg:gap-8 lg:p-8">
//       <ProjectCarousel images={project.images} title={project.title} />

//       <div className="flex flex-1 flex-col">
//         <h3 className="text-lg font-bold leading-snug text-slate-900 sm:text-xl">
//           {project.title}
//         </h3>

//         <p className="mt-3 text-sm leading-relaxed text-slate-600">
//           {project.description}
//         </p>
// {/* 
//         <button className="group mt-5 inline-flex w-fit items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-5 py-2.5 text-xs font-semibold uppercase tracking-wide text-white shadow-lg shadow-blue-600/25 transition-all duration-300 hover:scale-105 hover:shadow-blue-600/40">
//           View Details
//           <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
//         </button> */}
//       </div>
//     </div>
//   );
// }

// /* ============================================================
//    PAGE
// ============================================================ */

// export default function PhysicalModelStudiesPage() {
//   return (
//     <div className="min-h-screen bg-white text-slate-800 font-sans antialiased">
//       {/* =========================================================
//           HERO — 3-image collage with overlay title
//       ========================================================= */}
//       <section className="relative overflow-hidden">
//         <div className="grid grid-cols-1 sm:grid-cols-3">
//           {collageImages.map((src, i) => (
//             <div key={i} className="relative h-[160px] sm:h-[220px] lg:h-[280px]">
//               <img src={src} alt="" className="h-full w-full object-cover" />
//               <div className="absolute inset-0 bg-slate-900/45" />
//             </div>
//           ))}
//         </div>

//         <div className="pointer-events-none absolute inset-0 flex items-center justify-center px-4 text-center">
//           <div>
//             <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-wider text-blue-100 backdrop-blur-md sm:mb-4 sm:px-4 sm:py-2 sm:text-xs">
//               <Waves size={13} className="sm:h-[14px] sm:w-[14px]" />
//               Scaled Laboratory Testing
//             </div>
//             <h1 className="text-2xl font-bold tracking-tight text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)] sm:text-4xl lg:text-5xl">
//               Hydraulic Model Studies
//             </h1>
//           </div>
//         </div>
//       </section>

//       {/* =========================================================
//           INTRO STRIP
//       ========================================================= */}
//       <section className="border-b border-slate-100 bg-gradient-to-br from-slate-50 to-blue-50/30 px-4 py-10 sm:px-8 sm:py-12 lg:px-12">
//         <div className="mx-auto max-w-4xl text-center">
//           <p className="text-sm leading-relaxed text-slate-600 sm:text-base">
//             Infraplan's Hydraulic Laboratory constructs geometrically scaled physical
//             models of barrages, intakes, spillways, and desanding structures to
//             validate hydraulic performance, flow behaviour, and sediment management
//             strategies before full-scale construction.
//           </p>

//           <div className="mt-6 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
//             <div className="flex items-center gap-1.5 rounded-full border border-blue-100 bg-white px-3 py-1.5 text-[10px] font-medium text-slate-600 shadow-sm sm:gap-2 sm:px-4 sm:py-2 sm:text-xs">
//               <Droplets size={13} className="shrink-0 text-blue-600 sm:h-[15px] sm:w-[15px]" />
//               Intake & Barrage Studies
//             </div>
//             <div className="flex items-center gap-1.5 rounded-full border border-blue-100 bg-white px-3 py-1.5 text-[10px] font-medium text-slate-600 shadow-sm sm:gap-2 sm:px-4 sm:py-2 sm:text-xs">
//               <Gauge size={13} className="shrink-0 text-blue-600 sm:h-[15px] sm:w-[15px]" />
//               Pumped Storage Hydraulics
//             </div>
//             <div className="flex items-center gap-1.5 rounded-full border border-blue-100 bg-white px-3 py-1.5 text-[10px] font-medium text-slate-600 shadow-sm sm:gap-2 sm:px-4 sm:py-2 sm:text-xs">
//               <Layers size={13} className="shrink-0 text-blue-600 sm:h-[15px] sm:w-[15px]" />
//               Sediment & Desanding
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* =========================================================
//           PROJECT LIST
//       ========================================================= */}
//       <section className="bg-white px-4 py-12 sm:px-8 sm:py-16 lg:px-12">
//         <div className="mx-auto flex max-w-6xl flex-col gap-6 sm:gap-8">
//           {physicalModelStudies.map((project) => (
//             <ProjectRow key={project.id} project={project} />
//           ))}
//         </div>
//       </section>
//     </div>
//   );
// }






























// import React, { useState, useEffect } from "react";
// import {
//   Waves,
//   ChevronLeft,
//   ChevronRight,
//   ChevronRightCircle,
//   Home,
//   Box,
//   Calculator,
//   Activity,
//   Wind,
//   ArrowRight,
// } from "lucide-react";

// /* ============================================================
//    DUMMY DATA — replace with real data later.
//    Structure: Category -> subCategories (A, B, C...) -> projects
//    Project shape is SAME as your current one: { id, title, description, images }
//    Replace `img()` with your real imported images.
// ============================================================ */

// const img = (seed) => `https://picsum.photos/seed/${seed}/800/500`;

// const modelCategories = [
//   {
//     id: "physical",
//     title: "Physical Models",
//     icon: Box,
//     description:
//       "Scaled laboratory models to evaluate real flow behaviour of hydraulic structures.",
//     subCategories: [
//       {
//         id: "2d-spillway",
//         title: "Two-Dimensional Sectional Model for Spillway / Barrage",
//         description:
//           "Hydraulic performance of a single representative spillway block, bay or section.",
//         projects: [
//           {
//             id: 1,
//             title: "Annaram (Saraswathi) Barrage, Kaleshwaram LIS, Telangana",
//             description:
//               "Sectional 2D model on a scale of 1:45 was constructed to assess alternatives for improving energy dissipation. An extended stilling basin with lowered apron and raised end sill was suggested.",
//             images: [img("a1"), img("a2"), img("a3")],
//           },
//           {
//             id: 2,
//             title: "Super Trishuli 2D Model for Spillway, Nepal",
//             description:
//               "A two-dimensional physical model was built to evaluate the energy dissipation arrangement at the downstream of spillway.",
//             images: [img("b1"), img("b2")],
//           },
//         ],
//       },
//       {
//         id: "3d-comprehensive",
//         title: "Three-Dimensional Comprehensive Model for Spillway / Barrage and Intake",
//         description:
//           "3D flow interactions for a complete spillway / barrage and intake structures.",
//         projects: [
//           {
//             id: 3,
//             title: "MP30 Gandhisagar PSP (1920 MW), Madhya Pradesh",
//             description:
//               "Physical model of lower intake structure including tailrace channel constructed at a scale of 1:50 for generation and pumping modes.",
//             images: [img("c1"), img("c2"), img("c3"), img("c4")],
//           },
//           {
//             id: 4,
//             title: "Pinnapuram PSP (1680 MW), Andhra Pradesh",
//             description:
//               "Geometrically similar Froude model on a scale of 1:40 for assessing flow conditions in the Upper Intake structure.",
//             images: [img("d1"), img("d2")],
//           },
//           {
//             id: 5,
//             title: "Phata Byung HEP (76 MW), Uttarakhand",
//             description:
//               "Model built on a physical scale of 1:35. Hydraulic design, discharging capacity and power intake operations were optimized.",
//             images: [img("e1"), img("e2"), img("e3")],
//           },
//         ],
//       },
//       {
//         id: "aeration",
//         title: "Physical Model for Aeration Studies",
//         description:
//           "Air entrainment and prevention of cavitation damage on spillway surfaces.",
//         projects: [
//           {
//             id: 6,
//             title: "Demwe Lower Hydro Electric Project (1750 MW), Arunachal Pradesh",
//             description:
//               "Aeration ramps and offsets were designed and optimized to protect concrete surfaces from cavitation at high velocities.",
//             images: [img("f1"), img("f2")],
//           },
//         ],
//       },
//     ],
//   },
//   {
//     id: "mathematical",
//     title: "Mathematical Models",
//     icon: Calculator,
//     description:
//       "Numerical simulations for sediment transport, flood routing and dam break analysis.",
//     subCategories: [
//       {
//         id: "sediment-2d",
//         title: "Mathematical Model for Sediment Studies (2D)",
//         description: "Suspended sediment transport, deposition and erosion patterns.",
//         projects: [
//           {
//             id: 7,
//             title: "Chorokhi River, Batumi, Georgia",
//             description:
//               "Sediment-transport and morphodynamical modelling for the Chorokhi River.",
//             images: [img("g1"), img("g2")],
//           },
//         ],
//       },
//       {
//         id: "hec-ras",
//         title: "HEC-RAS Models for Specific Hydraulic Analysis",
//         description: "Flood propagation, dam break and transient analysis.",
//         projects: [
//           {
//             id: 8,
//             title: "Dam break analysis for Nam Beng Hydropower Project (36 MW), Laos",
//             description:
//               "Dam break simulation to predict water levels and flood propagation downstream.",
//             images: [img("h1"), img("h2")],
//           },
//         ],
//       },
//     ],
//   },
//   {
//     id: "transient",
//     title: "Transient Studies",
//     icon: Activity,
//     description:
//       "Pressure fluctuations and surges in water conductor systems during operating changes.",
//     subCategories: [
//       {
//         id: "transient-studies",
//         title: "Transient Studies",
//         description:
//           "Design adequacy of surge tank and water conductor tunnels.",
//         projects: [
//           {
//             id: 9,
//             title: "Vijayanagar Pumped Storage Project (130 MW), Karnataka",
//             description:
//               "Transient analysis to keep pressure and water-level oscillations within safe limits.",
//             images: [img("i1"), img("i2")],
//           },
//         ],
//       },
//     ],
//   },
//   {
//     id: "cfd",
//     title: "CFD Studies",
//     icon: Wind,
//     description:
//       "High-resolution numerical visualization of flow fields, pressures and velocities.",
//     subCategories: [
//       {
//         id: "cfd-spillway",
//         title: "CFD Studies for Spillway, Aerator, Energy Dissipator, etc.",
//         description: "Preliminary hydraulic optimization and cavitation risk assessment.",
//         projects: [
//           {
//             id: 10,
//             title: "Song Dam, Uttarakhand, India",
//             description:
//               "CFD analysis used to optimize spillway geometry before physical model validation.",
//             images: [img("j1"), img("j2")],
//           },
//         ],
//       },
//       {
//         id: "cfd-fea",
//         title: "CFD Studies for Vibration Analysis of Gates Coupled with FEA",
//         description: "Fluid-structure interaction analysis of gates.",
//         projects: [
//           {
//             id: 11,
//             title: "Ratle Hydro Electric Project (850 MW), Jammu & Kashmir",
//             description:
//               "Structural integrity of gates assessed under hydrodynamic pressure fluctuations.",
//             images: [img("k1")],
//           },
//         ],
//       },
//     ],
//   },
// ];

// const letter = (i) => String.fromCharCode(65 + i); // 0 -> A, 1 -> B ...

// /* ============================================================
//    BREADCRUMB
// ============================================================ */

// function Breadcrumb({ category, subCategory, subIndex, onHome, onCategory }) {
//   const crumb = "text-xs sm:text-sm font-medium transition-colors";
//   return (
//     <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-1.5 text-slate-500">
//       <button
//         onClick={onHome}
//         className={`${crumb} inline-flex items-center gap-1.5 hover:text-blue-600 ${
//           !category ? "text-slate-900" : ""
//         }`}
//       >
//         <Home size={14} />
//         Model Studies
//       </button>

//       {category && (
//         <>
//           <ChevronRight size={14} className="text-slate-300" />
//           <button
//             onClick={onCategory}
//             disabled={!subCategory}
//             className={`${crumb} ${
//               subCategory ? "hover:text-blue-600" : "cursor-default text-slate-900"
//             }`}
//           >
//             {category.title}
//           </button>
//         </>
//       )}

//       {subCategory && (
//         <>
//           <ChevronRight size={14} className="text-slate-300" />
//           <span className={`${crumb} max-w-[260px] truncate text-slate-900 sm:max-w-md`}>
//             {letter(subIndex)}. {subCategory.title}
//           </span>
//         </>
//       )}
//     </nav>
//   );
// }

// /* ============================================================
//    STEP 1 — MAIN CATEGORY CARDS
// ============================================================ */

// function CategoryCard({ category, onClick }) {
//   const Icon = category.icon;
//   return (
//     <button
//       onClick={onClick}
//       className="group flex flex-col items-start rounded-2xl border border-slate-200 bg-white p-6 text-left shadow-sm transition-all hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg"
//     >
//       <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600 transition-colors group-hover:bg-blue-600 group-hover:text-white">
//         <Icon size={24} />
//       </div>
//       <h3 className="mt-4 text-lg font-bold text-slate-900">{category.title}</h3>
//       <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">
//         {category.description}
//       </p>
//       <div className="mt-4 flex w-full items-center justify-between text-xs font-semibold uppercase tracking-wide text-blue-600">
//         <span>{category.subCategories.length} categories</span>
//         <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
//       </div>
//     </button>
//   );
// }

// /* ============================================================
//    STEP 2 — SUB CATEGORY CARDS (A, B, C ...)
// ============================================================ */

// function SubCategoryCard({ sub, index, onClick }) {
//   return (
//     <button
//       onClick={onClick}
//       className="group flex items-start gap-4 rounded-2xl border border-slate-200 bg-white p-5 text-left shadow-sm transition-all hover:border-blue-200 hover:shadow-md sm:p-6"
//     >
//       <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 text-lg font-bold text-white shadow-md shadow-blue-600/20">
//         {letter(index)}
//       </div>
//       <div className="flex-1">
//         <h3 className="text-base font-bold leading-snug text-slate-900 sm:text-lg">
//           {sub.title}
//         </h3>
//         <p className="mt-1.5 text-sm text-slate-600">{sub.description}</p>
//         <p className="mt-3 text-xs font-semibold uppercase tracking-wide text-blue-600">
//           {sub.projects.length} {sub.projects.length === 1 ? "project" : "projects"}
//         </p>
//       </div>
//       <ChevronRightCircle
//         size={22}
//         className="mt-1 shrink-0 text-slate-300 transition-all group-hover:translate-x-1 group-hover:text-blue-600"
//       />
//     </button>
//   );
// }

// /* ============================================================
//    STEP 3 — PROJECT ROW (same as your current design)
// ============================================================ */

// function ProjectCarousel({ images, title }) {
//   const [index, setIndex] = useState(0);
//   const next = () => setIndex((p) => (p + 1) % images.length);
//   const prev = () => setIndex((p) => (p - 1 + images.length) % images.length);

//   return (
//     <div className="group relative h-[240px] w-full shrink-0 overflow-hidden rounded-2xl bg-slate-100 shadow-lg sm:h-[300px] lg:h-[320px] lg:w-[420px]">
//       <img
//         src={images[index]}
//         alt={`${title} ${index + 1}`}
//         className="h-full w-full object-contain transition-all duration-700"
//       />
//       <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

//       {images.length > 1 && (
//         <>
//           <button
//             type="button"
//             onClick={prev}
//             aria-label="Previous image"
//             className="absolute left-2 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-black/45 text-white shadow-lg backdrop-blur-sm transition-all duration-300 hover:bg-black/65 sm:h-9 sm:w-9 lg:opacity-0 lg:group-hover:opacity-100"
//           >
//             <ChevronLeft size={16} />
//           </button>
//           <button
//             type="button"
//             onClick={next}
//             aria-label="Next image"
//             className="absolute right-2 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-black/45 text-white shadow-lg backdrop-blur-sm transition-all duration-300 hover:bg-black/65 sm:h-9 sm:w-9 lg:opacity-0 lg:group-hover:opacity-100"
//           >
//             <ChevronRight size={16} />
//           </button>
//           <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-1.5">
//             {images.map((_, i) => (
//               <button
//                 key={i}
//                 type="button"
//                 onClick={() => setIndex(i)}
//                 aria-label={`Show image ${i + 1}`}
//                 className={`h-1.5 rounded-full transition-all duration-300 ${
//                   i === index ? "w-5 bg-white" : "w-1.5 bg-white/50 hover:bg-white/80"
//                 }`}
//               />
//             ))}
//           </div>
//         </>
//       )}
//     </div>
//   );
// }

// function ProjectRow({ project }) {
//   return (
//     <div className="flex flex-col gap-6 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all hover:shadow-md sm:p-6 lg:flex-row lg:items-start lg:gap-8 lg:p-8">
//       <ProjectCarousel images={project.images} title={project.title} />
//       <div className="flex flex-1 flex-col">
//         <h3 className="text-lg font-bold leading-snug text-slate-900 sm:text-xl">
//           {project.title}
//         </h3>
//         <p className="mt-3 text-sm leading-relaxed text-slate-600">
//           {project.description}
//         </p>
//       </div>
//     </div>
//   );
// }

// /* ============================================================
//    PAGE
// ============================================================ */

// export default function ModelStudiesPage() {
//   const [categoryId, setCategoryId] = useState(null);
//   const [subId, setSubId] = useState(null);

//   const category = modelCategories.find((c) => c.id === categoryId) || null;
//   const subIndex = category ? category.subCategories.findIndex((s) => s.id === subId) : -1;
//   const subCategory = subIndex >= 0 ? category.subCategories[subIndex] : null;

//   // scroll to top whenever the step changes
//   useEffect(() => {
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   }, [categoryId, subId]);

//   const goHome = () => {
//     setCategoryId(null);
//     setSubId(null);
//   };
//   const goCategory = () => setSubId(null);

//   // heading text depends on the current step
//   const heading = subCategory
//     ? `${letter(subIndex)}. ${subCategory.title}`
//     : category
//     ? category.title
//     : "Hydraulic Model Studies";
//   const subheading = subCategory
//     ? subCategory.description
//     : category
//     ? category.description
//     : "Select a study type to explore our projects.";

//   return (
//     <div className="min-h-screen bg-white font-sans text-slate-800 antialiased">
//       {/* HERO */}
//       <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 px-4 py-14 text-center sm:py-20">
//         <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-2 text-[10px] font-semibold uppercase tracking-wider text-blue-100 backdrop-blur-md sm:text-xs">
//           <Waves size={14} />
//           Scaled Laboratory Testing
//         </div>
//         <h1 className="mx-auto max-w-4xl text-2xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
//           {heading}
//         </h1>
//         <p className="mx-auto mt-4 max-w-2xl text-sm text-blue-100/80 sm:text-base">
//           {subheading}
//         </p>
//       </section>

//       {/* BREADCRUMB BAR */}
//       <div className="border-b border-slate-100 bg-slate-50 px-4 py-3 sm:px-8 lg:px-12">
//         <div className="mx-auto max-w-6xl">
//           <Breadcrumb
//             category={category}
//             subCategory={subCategory}
//             subIndex={subIndex}
//             onHome={goHome}
//             onCategory={goCategory}
//           />
//         </div>
//       </div>

//       {/* CONTENT */}
//       <section className="px-4 py-12 sm:px-8 sm:py-16 lg:px-12">
//         <div className="mx-auto max-w-6xl">
//           {/* STEP 1 — 4 main categories */}
//           {!category && (
//             <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
//               {modelCategories.map((c) => (
//                 <CategoryCard key={c.id} category={c} onClick={() => setCategoryId(c.id)} />
//               ))}
//             </div>
//           )}

//           {/* STEP 2 — sub categories A, B, C ... */}
//           {category && !subCategory && (
//             <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
//               {category.subCategories.map((s, i) => (
//                 <SubCategoryCard key={s.id} sub={s} index={i} onClick={() => setSubId(s.id)} />
//               ))}
//             </div>
//           )}

//           {/* STEP 3 — projects of that sub category */}
//           {subCategory && (
//             <div className="flex flex-col gap-6 sm:gap-8">
//               {subCategory.projects.map((p) => (
//                 <ProjectRow key={p.id} project={p} />
//               ))}
//             </div>
//           )}
//         </div>
//       </section>
//     </div>
//   );
// }





















import React, { useEffect, useState } from "react";
import {
  Waves,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  Box,
  Calculator,
  Activity,
  Wind,
  Layers3,
  ArrowUpRight,
} from "lucide-react";

/* ============================================================
   IMAGE HELPER
============================================================ */

const img = (seed) =>
  `https://picsum.photos/seed/${seed}/1000/650`;

/* Hero collage images */
// const collageImages = [
//   img("hydraulic-hero-1"),
//   img("hydraulic-hero-2"),
//   img("hydraulic-hero-3"),
// ];

/* ============================================================
   DUMMY DATA
============================================================ */



/* ============================================================
   HELPERS
============================================================ */

const letter = (i) => String.fromCharCode(65 + i);
/* ============================================================
   API
============================================================ */

const API_BASE = "https://staging.infraplan.co.in:7052";
const ICONS = [Box, Calculator, Activity, Wind];

const fileUrl = (p) =>
  !p ? "" : /^(https?:|data:)/.test(p) ? p : `${API_BASE}${p}`;

const getJson = async (path) => {
  const res = await fetch(`${API_BASE}/api${path}`);
  if (!res.ok) throw new Error(`Request failed (${res.status})`);
  const json = await res.json();
  return Array.isArray(json) ? json : json?.result ?? json?.data ?? [];
};

// Flat projects -> category -> subCategory -> projects
function buildModelCategories(projects, categories, subCategories) {
  const catInfo = new Map(categories.map((c) => [c.id, c]));
  const subInfo = new Map(subCategories.map((s) => [s.id, s]));
  const grouped = new Map();

  projects.forEach((p) => {
    if (!grouped.has(p.categoryId)) {
      grouped.set(p.categoryId, {
        id: p.categoryId,
        title: p.categoryName,
        description: catInfo.get(p.categoryId)?.description ?? "",
        icon: ICONS[grouped.size % ICONS.length],
        subs: new Map(),
      });
    }
    const cat = grouped.get(p.categoryId);

    if (!cat.subs.has(p.subCategoryId)) {
      cat.subs.set(p.subCategoryId, {
        id: p.subCategoryId,
        title: p.subCategoryName,
        description: subInfo.get(p.subCategoryId)?.description ?? "",
        projects: [],
      });
    }
    cat.subs.get(p.subCategoryId).projects.push({
      id: p.id,
      title: p.title,
      description: p.description,
      images: (p.imagePaths ?? []).map(fileUrl),
    });
  });

  return [...grouped.values()].map(({ subs, ...cat }) => ({
    ...cat,
    subCategories: [...subs.values()],
  }));
}
/* ============================================================
   PROJECT IMAGE CAROUSEL
============================================================ */

function ProjectCarousel({ images, title }) {
  const [index, setIndex] = useState(0);

  const next = () => {
    setIndex((prev) => (prev + 1) % images.length);
  };

  const prev = () => {
    setIndex((prev) => (prev - 1 + images.length) % images.length);
  };
  if (!images.length) {
  return (
    <div className="flex h-[240px] w-full items-center justify-center rounded-2xl bg-slate-100 text-slate-300 sm:h-[300px] lg:h-[320px] lg:w-[430px] lg:shrink-0">
      <Box size={40} strokeWidth={1.5} />
    </div>
  );
}

  return (
    <div className="group relative w-full overflow-hidden rounded-2xl bg-slate-100 shadow-sm lg:w-[430px] lg:shrink-0">
      {/* Image */}
      <div className="relative h-[240px] sm:h-[300px] lg:h-[320px]">
        <img
          src={images[index]}
          alt={`${title} ${index + 1}`}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
        />

        {/* Image overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/5 to-transparent" />

        {/* Image counter */}
        <div className="absolute left-4 top-4 rounded-full border border-white/20 bg-black/40 px-3 py-1.5 text-[11px] font-medium text-white backdrop-blur-md">
          {index + 1} / {images.length}
        </div>

        {/* Controls */}
        {images.length > 1 && (
          <>
            <button
              type="button"
              onClick={prev}
              aria-label="Previous image"
              className="absolute left-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/40 text-white opacity-100 shadow-lg backdrop-blur-md transition-all duration-300 hover:bg-black/65 sm:h-10 sm:w-10 lg:opacity-0 lg:group-hover:opacity-100"
            >
              <ChevronLeft size={18} />
            </button>

            <button
              type="button"
              onClick={next}
              aria-label="Next image"
              className="absolute right-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/40 text-white opacity-100 shadow-lg backdrop-blur-md transition-all duration-300 hover:bg-black/65 sm:h-10 sm:w-10 lg:opacity-0 lg:group-hover:opacity-100"
            >
              <ChevronRight size={18} />
            </button>

            {/* Dots */}
            <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-1.5">
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
    </div>
  );
}

/* ============================================================
   PROJECT ROW
============================================================ */

function ProjectRow({ project }) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-slate-200 bg-white transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-xl hover:shadow-slate-200/60">
      <div className="flex flex-col lg:flex-row">
        <ProjectCarousel
          images={project.images}
          title={project.title}
        />

        <div className="flex flex-1 flex-col justify-center p-5 sm:p-7 lg:p-8">
          {/* Project label */}
          <div className="mb-4 flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-600" />

            <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-blue-600">
              Project Study
            </span>
          </div>

          {/* Title */}
          <h3 className="text-xl font-bold leading-snug tracking-tight text-slate-900 sm:text-2xl">
            {project.title}
          </h3>

          {/* Description */}
          <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-600 sm:text-[15px]">
            {project.description}
          </p>

          {/* Bottom detail */}
          <div className="mt-7 flex items-center gap-2 text-xs font-semibold text-slate-400">
            <Layers3 size={14} />
            Hydraulic Model Study
          </div>
        </div>
      </div>
    </article>
  );
}

/* ============================================================
   COLLAPSE
============================================================ */

function Collapse({ open, children }) {
  return (
    <div
      className={`grid transition-all duration-500 ease-in-out ${
        open
          ? "grid-rows-[1fr] opacity-100"
          : "grid-rows-[0fr] opacity-0"
      }`}
    >
      <div className="overflow-hidden">{children}</div>
    </div>
  );
}

/* ============================================================
   SUB CATEGORY
============================================================ */

function SubCategoryAccordion({
  sub,
  index,
  open,
  onToggle,
}) {
  return (
    <div
      className={`overflow-hidden rounded-2xl border transition-all duration-300 ${
        open
          ? "border-blue-200 bg-blue-50/30 shadow-sm"
          : "border-slate-200 bg-white hover:border-slate-300"
      }`}
    >
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={open}
        className="flex w-full items-center gap-4 p-4 text-left sm:p-5"
      >
        {/* Letter */}
        <div
          className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-sm font-bold transition-all duration-300 ${
            open
              ? "bg-blue-600 text-white shadow-lg shadow-blue-600/20"
              : "bg-slate-100 text-slate-600"
          }`}
        >
          {letter(index)}
        </div>

        {/* Content */}
        <div className="min-w-0 flex-1">
          <h3 className="text-sm font-bold leading-snug text-slate-900 sm:text-base">
            {sub.title}
          </h3>

          <div className="mt-1.5 flex items-center gap-2">
            <span className="text-xs text-slate-500">
              {sub.projects.length}{" "}
              {sub.projects.length === 1 ? "project" : "projects"}
            </span>

            <span className="h-1 w-1 rounded-full bg-slate-300" />

            <span className="text-xs text-slate-400">
              View studies
            </span>
          </div>
        </div>

        {/* Chevron */}
        <div
          className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
            open
              ? "bg-blue-100 text-blue-600"
              : "bg-slate-100 text-slate-400"
          }`}
        >
          <ChevronDown
            size={17}
            className={`transition-transform duration-300 ${
              open ? "rotate-180" : ""
            }`}
          />
        </div>
      </button>

      <Collapse open={open}>
        <div className="border-t border-slate-200/80 p-4 sm:p-6">
          {sub.description && (
            <div className="mb-5 rounded-xl bg-white p-4 ring-1 ring-slate-100">
              <p className="text-sm leading-6 text-slate-600">
                {sub.description}
              </p>
            </div>
          )}

          <div className="flex flex-col gap-5">
            {sub.projects.map((project) => (
              <ProjectRow
                key={project.id}
                project={project}
              />
            ))}
          </div>
        </div>
      </Collapse>
    </div>
  );
}

/* ============================================================
   MAIN CATEGORY
============================================================ */

function CategoryAccordion({
  category,
  open,
  onToggle,
  openSubId,
  onToggleSub,
}) {
  const Icon = category.icon;

  return (
    <div
      className={`overflow-hidden rounded-3xl border bg-white transition-all duration-300 ${
        open
          ? "border-blue-200 shadow-xl shadow-slate-200/50"
          : "border-slate-200 shadow-sm hover:border-slate-300 hover:shadow-md"
      }`}
    >
      {/* Header */}
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={open}
        className="group flex w-full items-center gap-4 p-5 text-left sm:gap-5 sm:p-6 lg:p-7"
      >
        {/* Icon */}
        <div
          className={`relative flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl transition-all duration-300 sm:h-14 sm:w-14 ${
            open
              ? "bg-blue-600 text-white shadow-lg shadow-blue-600/20"
              : "bg-blue-50 text-blue-600 group-hover:bg-blue-100"
          }`}
        >
          <Icon size={25} strokeWidth={1.8} />

          {open && (
            <span className="absolute -right-1 -top-1 h-2.5 w-2.5 rounded-full border-2 border-white bg-emerald-400" />
          )}
        </div>

        {/* Text */}
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-3">
            <h2 className="text-lg font-bold tracking-tight text-slate-900 sm:text-xl">
              {category.title}
            </h2>

            <span
              className={`rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider ${
                open
                  ? "bg-blue-100 text-blue-700"
                  : "bg-slate-100 text-slate-500"
              }`}
            >
              {category.subCategories.length}{" "}
              {category.subCategories.length === 1
                ? "Category"
                : "Categories"}
            </span>
          </div>

          <p className="mt-1.5 max-w-3xl text-sm leading-6 text-slate-500">
            {category.description}
          </p>
        </div>

        {/* Chevron */}
        <div
          className={`hidden h-10 w-10 shrink-0 items-center justify-center rounded-full transition-all duration-300 sm:flex ${
            open
              ? "bg-blue-50 text-blue-600"
              : "bg-slate-50 text-slate-400 group-hover:bg-slate-100"
          }`}
        >
          <ChevronDown
            size={20}
            className={`transition-transform duration-300 ${
              open ? "rotate-180" : ""
            }`}
          />
        </div>

        <ChevronDown
          size={20}
          className={`shrink-0 text-slate-400 transition-transform duration-300 sm:hidden ${
            open ? "rotate-180 text-blue-600" : ""
          }`}
        />
      </button>

      {/* Content */}
      <Collapse open={open}>
        <div className="border-t border-slate-100 bg-slate-50/40 p-4 sm:p-6 lg:p-7">
          <div className="flex flex-col gap-3">
            {category.subCategories.map((sub, index) => (
              <SubCategoryAccordion
                key={sub.id}
                sub={sub}
                index={index}
                open={openSubId === sub.id}
                onToggle={() => onToggleSub(sub.id)}
              />
            ))}
          </div>
        </div>
      </Collapse>
    </div>
  );
}

/* ============================================================
   HERO
============================================================ */

function Hero() {
  return (
    <section className="relative overflow-hidden bg-slate-950">
      {/* Background collage */}
      <div className="grid grid-cols-1 sm:grid-cols-3">
        {collageImages.map((src, index) => (
          <div
            key={index}
            className="relative h-[180px] overflow-hidden sm:h-[260px] lg:h-[340px]"
          >
            <img
              src={src}
              alt=""
              className="h-full w-full object-cover transition-transform duration-1000 hover:scale-105"
            />

            <div className="absolute inset-0 bg-slate-950/55" />

            <div className="absolute inset-0 bg-gradient-to-b from-slate-950/30 via-transparent to-slate-950/80" />
          </div>
        ))}
      </div>

      {/* Center overlay */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center px-5 text-center">
        <div className="max-w-3xl">
          {/* Badge */}
          {/* <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.18em] text-blue-100 shadow-xl backdrop-blur-md sm:text-xs">
            <Waves size={14} />
            Scaled Laboratory Testing
          </div> */}

          {/* Heading */}
          <h1 className="text-3xl font-bold tracking-tight text-white drop-shadow-2xl sm:text-5xl lg:text-6xl">
            Project Showcase
          </h1>

          {/* Description */}
          {/* <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-slate-200/90 sm:text-base">
            Physical and numerical modelling studies for hydraulic
            structures, flow behaviour and engineering optimization.
          </p> */}
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-slate-950/30 to-transparent" />
    </section>
  );
}

/* ============================================================
   PAGE
============================================================ */

export default function ModelStudiesPage() {
  const [modelCategories, setModelCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [openCategoryId, setOpenCategoryId] = useState(null);
  const [openSubId, setOpenSubId] = useState(null);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const projects = await getJson("/project");
        // Used only for descriptions; the page still works if these fail
        const [cats, subs] = await Promise.all([
          getJson("/Category").catch(() => []),
          getJson("/SubCategory").catch(() => []),
        ]);
        if (!cancelled) setModelCategories(buildModelCategories(projects, cats, subs));
      } catch (err) {
        if (!cancelled) setError(err.message);
      } finally {
        if (!cancelled) setLoading(false);
      }
    })();
    return () => { cancelled = true; };
  }, []);

  const toggleCategory = (id) => {
    setOpenCategoryId((prev) => (prev === id ? null : id));
    setOpenSubId(null);
  };

  const toggleSub = (id) => {
    setOpenSubId((prev) => (prev === id ? null : id));
  };

  /* Stats */
  const totalProjects = modelCategories.reduce(
    (total, category) =>
      total +
      category.subCategories.reduce((subTotal, sub) => subTotal + sub.projects.length, 0),
    0
  );

  const totalStudies = modelCategories.reduce(
    (total, category) => total + category.subCategories.length,
    0
  );

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800 antialiased">
      {/* HERO */}
      <Hero />

      {/* INTRO */}
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-8 sm:px-8 sm:py-10 lg:px-12">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <div className="mb-2 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-blue-600">
                <span className="h-1.5 w-1.5 rounded-full bg-blue-600" />
                Our Studies
              </div>

              <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
                Explore Our Hydraulic Studies
              </h2>

              <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500">
                Browse physical models, mathematical simulations,
                transient analysis and CFD studies.
              </p>
            </div>

            {/* Stats */}
            <div className="flex shrink-0 items-center gap-2">
              <div className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-center">
                <div className="text-xl font-bold text-slate-900">
                  {modelCategories.length}
                </div>
                <div className="text-[10px] font-semibold uppercase tracking-wider text-slate-400">
                  Study Types
                </div>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-center">
                <div className="text-xl font-bold text-slate-900">
                  {totalStudies}
                </div>
                <div className="text-[10px] font-semibold uppercase tracking-wider text-slate-400">
                  Categories
                </div>
              </div>

              <div className="rounded-2xl border border-blue-100 bg-blue-50 px-4 py-3 text-center">
                <div className="text-xl font-bold text-blue-700">
                  {totalProjects}
                </div>
                <div className="text-[10px] font-semibold uppercase tracking-wider text-blue-500">
                  Projects
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ACCORDION */}
      <main className="px-4 py-10 sm:px-8 sm:py-14 lg:px-12 lg:py-16">
        <div className="mx-auto max-w-8xl">
      {loading ? (
  <p className="text-center text-sm text-slate-500">Loading projects...</p>
) : error ? (
  <p className="text-center text-sm text-red-600">Failed to load projects: {error}</p>
) : modelCategories.length === 0 ? (
  <p className="text-center text-sm text-slate-500">No projects available yet.</p>
) : (
  <div className="flex flex-col gap-5">
    {modelCategories.map((category) => (
      <CategoryAccordion
        key={category.id}
        category={category}
        open={openCategoryId === category.id}
        onToggle={() => toggleCategory(category.id)}
        openSubId={openSubId}
        onToggleSub={toggleSub}
      />
    ))}
  </div>
)}

          {/* Bottom note */}
          <div className="mt-8 flex items-center justify-center gap-2 text-xs text-slate-400">
            <ArrowUpRight size={14} />
            Select a study category to explore detailed projects
          </div>
        </div>
      </main>
    </div>
  );
}