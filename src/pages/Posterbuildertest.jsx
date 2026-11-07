// import { useEffect, useLayoutEffect, useRef, useState } from "react";
// import { toPng } from "html-to-image";
// import { ImagePlus, Trash2, Plus, Download } from "lucide-react";

// /* ============================================================
//    POSTER BUILDER - TEST COMPONENT (standalone)

//    Two fixed formats (from the PDF):
//      Format 1  "Project & model studies"  (general layout, plan, L/C section,
//                 project pictures + scope, model pictures, salient features)
//      Format 2  "Model layout & flow"      (model layout, 4 flow pictures,
//                 1 picture, visitors picture, conclusion)

//    - Logo, lab name and website are FIXED (edit the constants below)
//    - Every image has its own named slot: you always know where it goes
//    - Photos: crop to fill (focus point + zoom) or show whole image
//    - Drawings: whole image by default (never cropped)
//    - Text auto-shrinks to fit its box; a warning shows if it still doesn't fit
//    - Empty slots show a placeholder in the preview and are removed in the PNG

//    Install once:  npm i html-to-image
//    Logo:          put the file at  public/infraplan-logo.png
//    Use:           <PosterBuilderTest />   inside the admin content area
//    ============================================================ */

// /* ---------- fixed content ---------- */
// const LOGO_SRC = "/infraplan-logo.png";
// const LAB = "INFRAPLAN HYDRAULIC LABORATORY, PUNE";
// const SITE = "www.infraplan.in";

// /* ---------- canvas (A-series landscape ratio) ---------- */
// const W = 1600;
// const H = 1131;

// /* ---------- colors ---------- */
// const BLUE = "#3a6ea5";
// const NAVY = "#14506b";
// const LINE = "#b8c4d6";

// /* ============================================================
//    SLOT DEFINITIONS
//    title: undefined -> no title field, "" or text -> editable title bar
//    fit:   default fit  (cover = crop to fill, contain = whole image)
//    ============================================================ */
// const MAP_SLOT = { id: "map", label: "Location of the project (map)", fit: "contain" };

// const PROJECT_SLOTS = [
//   { id: "p_ga", label: "General arrangement layout of project", title: "GENERAL ARRANGEMENT LAYOUT OF THE PROJECT", fit: "contain" },
//   { id: "p_plan", label: "Plan", title: "PLAN", fit: "contain" },
//   { id: "p_lsec", label: "L-Section / Important drawing", title: "L-SECTION", fit: "contain" },
//   { id: "p_csec", label: "C-Section (optional)", title: "C-SECTION", fit: "contain" },
//   { id: "p_proj1", label: "Project picture 1", fit: "cover", caption: true },
//   { id: "p_proj2", label: "Project picture 2", fit: "cover", caption: true },
//   { id: "p_model1", label: "Model picture 1", fit: "cover", caption: true },
//   { id: "p_model2", label: "Model picture 2", fit: "cover", caption: true },
//   { id: "p_model3", label: "Model picture 3", fit: "cover", caption: true },
// ];

// const MODEL_SLOTS = [
//   { id: "m_layout", label: "General arrangement layout of model", title: "MODEL LAYOUT", fit: "contain" },
//   { id: "m_pic1", label: "Model picture / flow conditions 1", title: "", fit: "cover", caption: true },
//   { id: "m_pic2", label: "Model picture / flow conditions 2", title: "", fit: "cover", caption: true },
//   { id: "m_pic3", label: "Model picture / flow conditions 3", title: "", fit: "cover", caption: true },
//   { id: "m_pic4", label: "Model picture / flow conditions 4", title: "", fit: "cover", caption: true },
//   { id: "m_pic5", label: "Model picture / flow condition (bottom left)", title: "", fit: "cover", caption: true },
//   { id: "m_visit", label: "Visitors on model / model picture", title: "MODEL VISIT BY ENGINEERING TEAM", fit: "cover", caption: true },
// ];

// const ALL_SLOTS = [MAP_SLOT, ...PROJECT_SLOTS, ...MODEL_SLOTS];
// const DEF = Object.fromEntries(ALL_SLOTS.map((d) => [d.id, d]));

// const makeSlots = () =>
//   Object.fromEntries(
//     ALL_SLOTS.map((d) => [
//       d.id,
//       { src: null, title: d.title ?? "", caption: "", fit: d.fit, x: 50, y: 50, zoom: 1 },
//     ])
//   );

// const initialData = {
//   template: "project", // "project" | "model"
//   name: "BORAS BARRAGE HEP, MADHYA PRADESH (25 MW)",
//   scale: "SCALE 1:60",
//   date: "APRIL 2026",
//   slots: makeSlots(),
//   planNotes:
//     "Full Reservoir Level = EL. 310.00 m\nMinimum Drawdown Level = EL. 309.00 m\nMaximum Water Level = EL. 315.00 m",
//   scope:
//     "This study evaluates the hydraulic performance of the power intake and tailrace channel as they join the river downstream of the barrage under combined operation of the barrage and powerhouse. Key parameters such as flow conditions, water surface elevations at different locations, pressure distribution near the intake and tailrace, and velocity patterns are analyzed to understand system behavior.",
//   salient: [
//     { k: "River", v: "Narmada River" },
//     { k: "Total no. of Spans (29 nos.)", v: "Reproduced 9 nos." },
//     { k: "Tail Race Channel", v: "Length 255.84 m" },
//     { k: "Concrete Barrage", v: "631.50 m (L)" },
//     { k: "Size of gates", v: "15.85 (W) x 8.80 (H) m" },
//     { k: "Design Discharge", v: "39,981 Cumec" },
//   ],
//   conclusion:
//     "The proposed additional guide wall between the dividing pier and Powerhouse Unit 1 is essential for improving flow conditions in the approach channel.\nA mismatch at the tailrace outfall invert level suggests the need for redesign to ensure smooth flow transition.\nSediment deposition remains a concern in low-velocity zones and can be managed through optimized gate operations and periodic flushing during monsoon.",
// };

// const lines = (t) =>
//   (t || "")
//     .split("\n")
//     .map((s) => s.trim())
//     .filter(Boolean);

// /* ============================================================
//    POSTER PIECES (everything inside the exported poster)
//    ============================================================ */

// /* Image that fits its block: cover = crop to fill, contain = whole image */
// function FitImage({ src, fit = "cover", x = 50, y = 50, zoom = 1 }) {
//   return (
//     <div style={{ position: "absolute", inset: 0, overflow: "hidden" }}>
//       <img
//         src={src}
//         alt=""
//         draggable={false}
//         crossOrigin="anonymous"
//         style={{
//           display: "block",
//           width: "100%",
//           height: "100%",
//           objectFit: fit,
//           objectPosition: `${x}% ${y}%`,
//           transform: fit === "cover" ? `scale(${zoom})` : undefined,
//           transformOrigin: `${x}% ${y}%`,
//         }}
//       />
//     </div>
//   );
// }

// /* Text box that shrinks its font until the content fits (down to min) */
// function FitBox({ name, max = 22, min = 11, style, children }) {
//   const ref = useRef(null);
//   const [size, setSize] = useState(max);

//   useLayoutEffect(() => {
//     const el = ref.current;
//     if (!el) return;
//     let s = max;
//     el.style.fontSize = `${s}px`;
//     while (el.scrollHeight > el.clientHeight + 1 && s > min) {
//       s -= 1;
//       el.style.fontSize = `${s}px`;
//     }
//     if (s !== size) setSize(s);
//   });

//   return (
//     <div
//       ref={ref}
//       data-fit={name}
//       style={{ overflow: "hidden", minHeight: 0, fontSize: size, ...style }}
//     >
//       {children}
//     </div>
//   );
// }

// function Bar({ title }) {
//   return (
//     <div
//       style={{
//         background: BLUE,
//         color: "#fff",
//         textAlign: "center",
//         fontSize: 19,
//         fontWeight: 600,
//         padding: "5px 8px",
//         flexShrink: 0,
//         textTransform: "uppercase",
//         letterSpacing: 0.3,
//       }}
//     >
//       {title}
//     </div>
//   );
// }

// function Box({ style, children }) {
//   return (
//     <div
//       style={{
//         minWidth: 0,
//         minHeight: 0,
//         display: "flex",
//         flexDirection: "column",
//         border: `1px solid ${LINE}`,
//         background: "#fff",
//         overflow: "hidden",
//         ...style,
//       }}
//     >
//       {children}
//     </div>
//   );
// }

// /* One image slot: optional title bar + image + optional caption */
// function SlotView({ id, data, exporting, bare }) {
//   const s = data.slots[id];
//   const def = DEF[id];
//   if (!s.src && exporting) return null;
//   const showTitle = !bare && s.title.trim();

//   return (
//     <div style={{ flex: 1, minWidth: 0, minHeight: 0, display: "flex", flexDirection: "column" }}>
//       {showTitle && <Bar title={s.title} />}
//       <div
//         style={{
//           flex: 1,
//           minHeight: 0,
//           position: "relative",
//           background: s.fit === "cover" ? "#eef1f5" : "#fff",
//         }}
//       >
//         {s.src ? (
//           <>
//             <FitImage src={s.src} fit={s.fit} x={s.x} y={s.y} zoom={s.zoom} />
//             {s.caption.trim() && (
//               <div
//                 style={{
//                   position: "absolute",
//                   left: 0,
//                   right: 0,
//                   bottom: 0,
//                   background: "rgba(255,255,255,0.88)",
//                   color: NAVY,
//                   fontSize: 17,
//                   fontWeight: 700,
//                   textAlign: "center",
//                   padding: "3px 6px",
//                 }}
//               >
//                 {s.caption}
//               </div>
//             )}
//           </>
//         ) : (
//           <div
//             style={{
//               position: "absolute",
//               inset: 6,
//               border: "2px dashed #b6c2d3",
//               color: "#8a99ad",
//               fontSize: 16,
//               display: "flex",
//               alignItems: "center",
//               justifyContent: "center",
//               textAlign: "center",
//               padding: 8,
//             }}
//           >
//             {def.label}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// function Header({ data, exporting }) {
//   const hasMap = !!data.slots.map.src;
//   return (
//     <div style={{ height: 150, display: "flex", alignItems: "center", gap: 24, flexShrink: 0 }}>
//       <img
//         src={LOGO_SRC}
//         alt=""
//         crossOrigin="anonymous"
//         style={{ width: 150, height: 150, objectFit: "contain", flexShrink: 0 }}
//         onError={(e) => {
//           e.currentTarget.style.visibility = "hidden";
//         }}
//       />

//       <FitBox
//         name="Title block"
//         max={36}
//         min={20}
//         style={{
//           flex: 1,
//           height: 150,
//           display: "flex",
//           flexDirection: "column",
//           textAlign: "center",
//           lineHeight: 1.15,
//         }}
//       >
//         <div style={{ marginTop: "auto", fontWeight: 800, color: NAVY }}>{data.name}</div>
//         <div style={{ fontWeight: 800, color: NAVY, fontSize: "0.95em" }}>{data.scale}</div>
//         <div style={{ fontWeight: 700, fontSize: "0.68em", marginTop: 4 }}>{LAB}</div>
//         <div
//           style={{
//             marginBottom: "auto",
//             fontWeight: 700,
//             fontSize: "0.68em",
//             color: "#1f5fa8",
//             textDecoration: "underline",
//           }}
//         >
//           {SITE}
//         </div>
//       </FitBox>

//       <div
//         style={{
//           width: 260,
//           height: 150,
//           flexShrink: 0,
//           display: "flex",
//           border: hasMap || !exporting ? `1px solid ${LINE}` : "none",
//         }}
//       >
//         <SlotView id="map" data={data} exporting={exporting} bare />
//       </div>
//     </div>
//   );
// }

// /* ---------------- FORMAT 1 ---------------- */
// function ProjectTemplate({ data, exporting }) {
//   const any = (...ids) => !exporting || ids.some((id) => data.slots[id].src);
//   const sv = (id) => <SlotView id={id} data={data} exporting={exporting} />;
//   const notes = lines(data.planNotes);
//   const scope = lines(data.scope);
//   const salient = data.salient.filter((r) => r.k.trim() || r.v.trim());
//   const salientRows = Math.max(1, Math.ceil(salient.length / 2));

//   return (
//     <div style={{ flex: 1, minHeight: 0, display: "flex", flexDirection: "column", gap: 14 }}>
//       {/* ROW 1: general layout | plan | L + C section */}
//       <div style={{ flex: 48, minHeight: 0, display: "flex", gap: 14 }}>
//         {any("p_ga") && <Box style={{ flex: 1 }}>{sv("p_ga")}</Box>}

//         {any("p_plan") && (
//           <Box style={{ flex: 1 }}>
//             {sv("p_plan")}
//             {notes.length > 0 && (
//               <FitBox
//                 name="Plan notes"
//                 max={22}
//                 min={11}
//                 style={{
//                   height: 96,
//                   flexShrink: 0,
//                   padding: "6px 12px",
//                   lineHeight: 1.3,
//                   borderTop: `1px solid ${LINE}`,
//                 }}
//               >
//                 {notes.map((n, i) => (
//                   <div key={i}>{n}</div>
//                 ))}
//               </FitBox>
//             )}
//           </Box>
//         )}

//         {any("p_lsec", "p_csec") && (
//           <div style={{ flex: 0.7, minWidth: 0, display: "flex", flexDirection: "column", gap: 12 }}>
//             {any("p_lsec") && <Box style={{ flex: 1 }}>{sv("p_lsec")}</Box>}
//             {any("p_csec") && <Box style={{ flex: 1 }}>{sv("p_csec")}</Box>}
//           </div>
//         )}
//       </div>

//       {/* ROW 2 */}
//       <div style={{ flex: 52, minHeight: 0, display: "flex", gap: 14 }}>
//         {/* Project pictures + scope */}
//         <Box style={{ flex: 43 }}>
//           <Bar title="The project and scope of model studies" />
//           {any("p_proj1", "p_proj2") && (
//             <div style={{ flex: 55, minHeight: 0, display: "flex", gap: 6, padding: 6 }}>
//               {sv("p_proj1")}
//               {sv("p_proj2")}
//             </div>
//           )}
//           {scope.length > 0 && (
//             <FitBox
//               name="Scope text"
//               max={22}
//               min={11}
//               style={{ flex: 45, padding: "8px 12px", lineHeight: 1.35 }}
//             >
//               {scope.map((p, i) => (
//                 <p key={i} style={{ margin: "0 0 0.4em" }}>
//                   {p}
//                 </p>
//               ))}
//             </FitBox>
//           )}
//         </Box>

//         {/* Model pictures + salient features */}
//         <div style={{ flex: 57, minWidth: 0, display: "flex", flexDirection: "column", gap: 14 }}>
//           <Box style={{ flex: 56 }}>
//             <Bar title="The physical model" />
//             <div style={{ flex: 1, minHeight: 0, display: "flex", gap: 6, padding: 6 }}>
//               {sv("p_model1")}
//               {sv("p_model2")}
//               {sv("p_model3")}
//             </div>
//           </Box>

//           <Box style={{ flex: 44 }}>
//             <Bar title="Salient features" />
//             <FitBox
//               name="Salient features"
//               max={22}
//               min={11}
//               style={{
//                 flex: 1,
//                 padding: "10px 16px",
//                 display: "grid",
//                 gridAutoFlow: "column",
//                 gridTemplateRows: `repeat(${salientRows}, auto)`,
//                 gridTemplateColumns: "1fr 1fr",
//                 columnGap: 28,
//                 rowGap: "0.5em",
//                 alignContent: "start",
//               }}
//             >
//               {salient.map((r, i) => (
//                 <div key={i} style={{ display: "flex", lineHeight: 1.25 }}>
//                   <span style={{ width: "48%", flexShrink: 0 }}>{r.k}</span>
//                   <span>= {r.v}</span>
//                 </div>
//               ))}
//             </FitBox>
//           </Box>
//         </div>
//       </div>
//     </div>
//   );
// }

// /* ---------------- FORMAT 2 ---------------- */
// function ModelTemplate({ data, exporting }) {
//   const any = (...ids) => !exporting || ids.some((id) => data.slots[id].src);
//   const sv = (id) => <SlotView id={id} data={data} exporting={exporting} />;
//   const cell = (id, flex = 1) =>
//     any(id) ? (
//       <Box key={id} style={{ flex }}>
//         {sv(id)}
//       </Box>
//     ) : null;
//   const pair = (a, b) =>
//     any(a, b) ? (
//       <div style={{ flex: 1, minHeight: 0, display: "flex", gap: 14 }}>
//         {cell(a)}
//         {cell(b)}
//       </div>
//     ) : null;
//   const concl = lines(data.conclusion);

//   return (
//     <div style={{ flex: 1, minHeight: 0, display: "flex", flexDirection: "column", gap: 14 }}>
//       {/* TOP: model layout | 2x2 pictures */}
//       <div style={{ flex: 70, minHeight: 0, display: "flex", gap: 14 }}>
//         {cell("m_layout", 52)}
//         {any("m_pic1", "m_pic2", "m_pic3", "m_pic4") && (
//           <div style={{ flex: 48, minWidth: 0, display: "flex", flexDirection: "column", gap: 14 }}>
//             {pair("m_pic1", "m_pic2")}
//             {pair("m_pic3", "m_pic4")}
//           </div>
//         )}
//       </div>

//       {/* BOTTOM: picture | visitors | conclusion */}
//       <div style={{ flex: 30, minHeight: 0, display: "flex", gap: 14 }}>
//         {cell("m_pic5", 0.9)}
//         {cell("m_visit", 0.7)}
//         {(concl.length > 0 || !exporting) && (
//           <Box style={{ flex: 1.5 }}>
//             <Bar title="Conclusion and recommendation" />
//             <FitBox
//               name="Conclusion"
//               max={22}
//               min={11}
//               style={{ flex: 1, padding: "8px 14px", lineHeight: 1.3 }}
//             >
//               {concl.map((l, i) => (
//                 <div key={i} style={{ display: "flex", gap: "0.5em", marginBottom: "0.3em" }}>
//                   <span>•</span>
//                   <span>{l}</span>
//                 </div>
//               ))}
//             </FitBox>
//           </Box>
//         )}
//       </div>
//     </div>
//   );
// }

// function Poster({ data, exporting, posterRef }) {
//   return (
//     <div
//       ref={posterRef}
//       style={{
//         width: W,
//         height: H,
//         boxSizing: "border-box",
//         padding: 28,
//         background: "#fff",
//         color: "#111",
//         fontFamily: "Arial, Helvetica, sans-serif",
//         display: "flex",
//         flexDirection: "column",
//         gap: 10,
//       }}
//     >
//       <Header data={data} exporting={exporting} />
//       <div style={{ height: 26, fontSize: 21, fontWeight: 600, flexShrink: 0 }}>{data.date}</div>
//       {data.template === "project" ? (
//         <ProjectTemplate data={data} exporting={exporting} />
//       ) : (
//         <ModelTemplate data={data} exporting={exporting} />
//       )}
//     </div>
//   );
// }

// /* ============================================================
//    FORM PIECES
//    ============================================================ */
// const inputCls =
//   "w-full rounded-md border border-slate-300 bg-white px-2.5 py-1.5 text-sm outline-none focus:border-blue-500";

// function Card({ title, hint, children }) {
//   return (
//     <div className="rounded-xl border border-slate-200 bg-white p-4">
//       <h3 className="text-sm font-semibold text-slate-900">{title}</h3>
//       {hint ? <p className="mb-3 mt-0.5 text-xs text-slate-500">{hint}</p> : <div className="mb-3" />}
//       {children}
//     </div>
//   );
// }

// function RowsEditor({ rows, onChange }) {
//   const update = (i, key, val) =>
//     onChange(rows.map((r, idx) => (idx === i ? { ...r, [key]: val } : r)));
//   return (
//     <div className="space-y-2">
//       {rows.map((r, i) => (
//         <div key={i} className="flex gap-2">
//           <input
//             className={inputCls}
//             placeholder="Label"
//             value={r.k}
//             onChange={(e) => update(i, "k", e.target.value)}
//           />
//           <input
//             className={inputCls}
//             placeholder="Value"
//             value={r.v}
//             onChange={(e) => update(i, "v", e.target.value)}
//           />
//           <button
//             type="button"
//             onClick={() => onChange(rows.filter((_, idx) => idx !== i))}
//             className="rounded-md p-2 text-red-500 hover:bg-red-50"
//           >
//             <Trash2 size={14} />
//           </button>
//         </div>
//       ))}
//       <button
//         type="button"
//         onClick={() => onChange([...rows, { k: "", v: "" }])}
//         className="inline-flex items-center gap-1 text-sm text-blue-600 hover:underline"
//       >
//         <Plus size={14} /> Add row
//       </button>
//     </div>
//   );
// }

// /* Click / drag on the image to choose which part stays visible */
// function FocusPicker({ slot, onChange }) {
//   const ref = useRef(null);
//   const setFromEvent = (e) => {
//     const r = ref.current.getBoundingClientRect();
//     const x = Math.min(100, Math.max(0, ((e.clientX - r.left) / r.width) * 100));
//     const y = Math.min(100, Math.max(0, ((e.clientY - r.top) / r.height) * 100));
//     onChange({ x: Math.round(x), y: Math.round(y) });
//   };
//   return (
//     <div
//       ref={ref}
//       className="relative inline-block max-w-full cursor-crosshair touch-none select-none"
//       onPointerDown={(e) => {
//         e.currentTarget.setPointerCapture(e.pointerId);
//         setFromEvent(e);
//       }}
//       onPointerMove={(e) => e.buttons === 1 && setFromEvent(e)}
//     >
//       <img src={slot.src} alt="" draggable={false} className="block max-h-36 max-w-full rounded" />
//       <span
//         className="pointer-events-none absolute h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-white bg-blue-600 shadow"
//         style={{ left: `${slot.x}%`, top: `${slot.y}%` }}
//       />
//     </div>
//   );
// }

// function SlotEditor({ def, slot, onChange }) {
//   const pick = (e) => {
//     const f = e.target.files?.[0];
//     e.target.value = "";
//     if (f) onChange({ src: URL.createObjectURL(f), x: 50, y: 50, zoom: 1 });
//   };

//   return (
//     <div className="rounded-lg border border-slate-200 p-3">
//       <div className="mb-2 flex items-center justify-between gap-2">
//         <span className="text-xs font-semibold text-slate-700">{def.label}</span>
//         {slot.src && (
//           <button
//             type="button"
//             onClick={() => onChange({ src: null })}
//             className="inline-flex items-center gap-1 text-xs text-red-500 hover:underline"
//           >
//             <Trash2 size={12} /> Remove image
//           </button>
//         )}
//       </div>

//       <div className="space-y-2">
//         {def.title !== undefined && (
//           <input
//             className={inputCls}
//             placeholder="Title bar text (leave empty for none)"
//             value={slot.title}
//             onChange={(e) => onChange({ title: e.target.value })}
//           />
//         )}

//         {!slot.src ? (
//           <label className="flex cursor-pointer items-center justify-center gap-2 rounded-lg border-2 border-dashed border-slate-300 bg-slate-50 py-4 text-sm text-slate-500 hover:border-blue-400 hover:text-blue-600">
//             <ImagePlus size={16} /> Add image
//             <input type="file" accept="image/jpeg,image/png,image/webp" hidden onChange={pick} />
//           </label>
//         ) : (
//           <>
//             {slot.fit === "cover" ? (
//               <FocusPicker slot={slot} onChange={onChange} />
//             ) : (
//               <img
//                 src={slot.src}
//                 alt=""
//                 className="max-h-28 max-w-full rounded border bg-white object-contain"
//               />
//             )}

//             <div className="flex flex-wrap items-center gap-3 text-xs text-slate-600">
//               <label className="flex items-center gap-2">
//                 Fit
//                 <select
//                   className="rounded-md border border-slate-300 px-2 py-1 text-xs"
//                   value={slot.fit}
//                   onChange={(e) => onChange({ fit: e.target.value })}
//                 >
//                   <option value="cover">Crop to fill</option>
//                   <option value="contain">Show whole image</option>
//                 </select>
//               </label>

//               {slot.fit === "cover" && (
//                 <label className="flex flex-1 items-center gap-2">
//                   Zoom
//                   <input
//                     type="range"
//                     min="1"
//                     max="3"
//                     step="0.05"
//                     value={slot.zoom}
//                     onChange={(e) => onChange({ zoom: Number(e.target.value) })}
//                     className="min-w-[80px] flex-1"
//                   />
//                   <span className="w-9 text-right">{slot.zoom.toFixed(1)}x</span>
//                 </label>
//               )}
//             </div>

//             {slot.fit === "cover" && (
//               <p className="text-xs text-slate-400">Click or drag on the image to choose what stays visible.</p>
//             )}

//             {def.caption && (
//               <input
//                 className={inputCls}
//                 placeholder="Caption (optional)"
//                 value={slot.caption}
//                 onChange={(e) => onChange({ caption: e.target.value })}
//               />
//             )}
//           </>
//         )}
//       </div>
//     </div>
//   );
// }

// /* ============================================================
//    MAIN
//    ============================================================ */
// export default function PosterBuilderTest({ className = "h-full" }) {
//   const [data, setData] = useState(initialData);
//   const [scale, setScale] = useState(0.5);
//   const [warnings, setWarnings] = useState([]);
//   const [exporting, setExporting] = useState(false);

//   const posterRef = useRef(null);
//   const wrapRef = useRef(null);

//   const setField = (key, val) => setData((d) => ({ ...d, [key]: val }));
//   const text = (key) => (e) => setField(key, e.target.value);

//   const setSlot = (id, patch) => {
//     const old = data.slots[id];
//     if ("src" in patch && old.src && old.src !== patch.src && old.src.startsWith("blob:")) {
//       URL.revokeObjectURL(old.src);
//     }
//     setData((d) => ({
//       ...d,
//       slots: { ...d.slots, [id]: { ...d.slots[id], ...patch } },
//     }));
//   };

//   const editors = (ids) => (
//     <div className="space-y-3">
//       {ids.map((id) => (
//         <SlotEditor
//           key={id}
//           def={DEF[id]}
//           slot={data.slots[id]}
//           onChange={(patch) => setSlot(id, patch)}
//         />
//       ))}
//     </div>
//   );

//   /* scale the fixed poster to the preview width */
//   useEffect(() => {
//     const el = wrapRef.current;
//     if (!el) return;
//     const update = () => setScale(Math.min(1, el.clientWidth / W));
//     update();
//     const ro = new ResizeObserver(update);
//     ro.observe(el);
//     return () => ro.disconnect();
//   }, []);

//   /* warn about text that does not fit even at the smallest font size */
//   useLayoutEffect(() => {
//     const root = posterRef.current;
//     if (!root) return;
//     const names = [...root.querySelectorAll("[data-fit]")]
//       .filter((el) => el.scrollHeight > el.clientHeight + 1)
//       .map((el) => el.dataset.fit);
//     const uniq = [...new Set(names)];
//     setWarnings((prev) => (prev.join("|") === uniq.join("|") ? prev : uniq));
//   });

//   const exportPng = async () => {
//     if (!posterRef.current) return;
//     setExporting(true); // hides empty slots so the layout reflows
//     await new Promise((r) => requestAnimationFrame(() => requestAnimationFrame(r)));
//     try {
//       const url = await toPng(posterRef.current, {
//         width: W,
//         height: H,
//         pixelRatio: 1,
//         cacheBust: true,
//       });
//       const a = document.createElement("a");
//       a.href = url;
//       a.download = `${(data.name || "poster").replace(/[^\w\-]+/g, "_")}.png`;
//       a.click();
//     } catch (err) {
//       alert("Export failed: " + (err?.message || err));
//     } finally {
//       setExporting(false);
//     }
//   };

//   const tabCls = (active) =>
//     `rounded-md px-3 py-1.5 text-sm font-medium transition ${
//       active ? "bg-blue-600 text-white" : "bg-slate-100 text-slate-700 hover:bg-slate-200"
//     }`;

//   return (
//     <div className={`flex min-h-0 flex-col bg-slate-100 ${className}`}>
//       {/* TOP BAR */}
//       <div className="flex shrink-0 flex-wrap items-center justify-between gap-3 border-b border-slate-200 bg-white px-4 py-2.5">
//         <div className="flex flex-wrap items-center gap-2">
//           <span className="text-sm text-slate-500">Format:</span>
//           <button
//             type="button"
//             className={tabCls(data.template === "project")}
//             onClick={() => setField("template", "project")}
//           >
//             1 - Project &amp; model studies
//           </button>
//           <button
//             type="button"
//             className={tabCls(data.template === "model")}
//             onClick={() => setField("template", "model")}
//           >
//             2 - Model layout &amp; flow
//           </button>
//         </div>

//         <button
//           type="button"
//           onClick={exportPng}
//           disabled={exporting}
//           className="inline-flex items-center gap-2 rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 disabled:opacity-60"
//         >
//           <Download size={16} /> {exporting ? "Generating..." : "Download PNG"}
//         </button>
//       </div>

//       {/* CONTENT: two independently scrolling panes */}
//       <div className="grid min-h-0 flex-1 grid-cols-1 gap-4 overflow-y-auto p-4 xl:grid-cols-[460px_1fr] xl:overflow-hidden">
//         {/* FORM */}
//         <div className="min-h-0 space-y-4 xl:overflow-y-auto xl:pr-1">
//           <Card title="Poster details" hint="Logo, lab name and website are fixed.">
//             <div className="space-y-2">
//               <input
//                 className={inputCls}
//                 placeholder="Project name"
//                 value={data.name}
//                 onChange={text("name")}
//               />
//               <input
//                 className={inputCls}
//                 placeholder="Model scale (e.g. SCALE 1:60)"
//                 value={data.scale}
//                 onChange={text("scale")}
//               />
//               <input
//                 className={inputCls}
//                 placeholder="Month Year (e.g. APRIL 2026)"
//                 value={data.date}
//                 onChange={text("date")}
//               />
//             </div>
//           </Card>

//           <Card title="Location of the project">{editors(["map"])}</Card>

//           {data.template === "project" ? (
//             <>
//               <Card title="General arrangement layout of project">{editors(["p_ga"])}</Card>

//               <Card title="Plan" hint="Levels text appears under the plan, one line each.">
//                 {editors(["p_plan"])}
//                 <textarea
//                   rows={4}
//                   className={`${inputCls} mt-3`}
//                   placeholder="Top level, FRL, MDDL, crest level, MWL ..."
//                   value={data.planNotes}
//                   onChange={text("planNotes")}
//                 />
//               </Card>

//               <Card title="L-Section and C-Section" hint="C-Section is optional; L-Section then uses the full height.">
//                 {editors(["p_lsec", "p_csec"])}
//               </Card>

//               <Card title="Project pictures and scope of studies">
//                 {editors(["p_proj1", "p_proj2"])}
//                 <textarea
//                   rows={5}
//                   className={`${inputCls} mt-3`}
//                   placeholder="Scope of the studies"
//                   value={data.scope}
//                   onChange={text("scope")}
//                 />
//               </Card>

//               <Card title="Model pictures" hint="Use 1 to 3. Unused slots are removed from the PNG.">
//                 {editors(["p_model1", "p_model2", "p_model3"])}
//               </Card>

//               <Card title="Salient features" hint="Shown in two columns.">
//                 <RowsEditor rows={data.salient} onChange={(v) => setField("salient", v)} />
//               </Card>
//             </>
//           ) : (
//             <>
//               <Card title="General arrangement layout of model">{editors(["m_layout"])}</Card>

//               <Card title="Model pictures / flow conditions (top right)" hint="2 x 2 grid.">
//                 {editors(["m_pic1", "m_pic2", "m_pic3", "m_pic4"])}
//               </Card>

//               <Card title="Bottom row pictures">{editors(["m_pic5", "m_visit"])}</Card>

//               <Card title="Conclusion and recommendation" hint="One bullet per line.">
//                 <textarea
//                   rows={8}
//                   className={inputCls}
//                   value={data.conclusion}
//                   onChange={text("conclusion")}
//                 />
//               </Card>
//             </>
//           )}
//         </div>

//         {/* PREVIEW */}
//         <div className="min-h-0 min-w-0 space-y-3 xl:overflow-y-auto">
//           {warnings.length > 0 && (
//             <div className="rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-800">
//               Text is too long even at the smallest size in: <b>{warnings.join(", ")}</b>. Please
//               shorten it.
//             </div>
//           )}

//           <div ref={wrapRef} className="w-full">
//             <div
//               className="overflow-hidden rounded-xl border border-slate-300 bg-white shadow"
//               style={{ height: H * scale }}
//             >
//               <div
//                 style={{
//                   width: W,
//                   height: H,
//                   transform: `scale(${scale})`,
//                   transformOrigin: "top left",
//                 }}
//               >
//                 <Poster data={data} exporting={exporting} posterRef={posterRef} />
//               </div>
//             </div>
//           </div>

//           <p className="text-xs text-slate-500">
//             Preview of the {W} x {H} poster. Dashed boxes show where each image goes; empty ones
//             are removed in the downloaded PNG.
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }





import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { toPng } from "html-to-image";
import {
  ImagePlus,
  Trash2,
  Plus,
  Download,
  ArrowUp,
  ArrowDown,
  RotateCcw,
  RotateCw,
} from "lucide-react";

/* ============================================================
   POSTER BUILDER - TEST COMPONENT (standalone)

   Two fixed formats (from the PDF). The layout is fixed, but:
   - every SECTION can hold any number of images (add / delete / reorder)
   - every SECTION can be removed; the others then take its space
   - every IMAGE can be adjusted: drag to pan, zoom, fill or fit whole,
     rotate, flip, background colour
   - text boxes shrink to fit; a warning shows if they still don't
   - empty sections are removed from the downloaded PNG

   Install once:  npm i html-to-image
   Logo:          public/infraplan-logo.png   (or change LOGO_SRC)
   Use:           <PosterBuilderTest />  inside the admin content area
   ============================================================ */

const LOGO_SRC = "/infraplan-logo.png";
const LAB = "INFRAPLAN HYDRAULIC LABORATORY, PUNE";
const SITE = "www.infraplan.in";

const W = 1600;
const H = 1131;

const BLUE = "#3a6ea5";
const NAVY = "#14506b";
const LINE = "#b8c4d6";

/* ============================================================
   SECTION (BLOCK) DEFINITIONS
   kind     images (default) | salient | conclusion
   fit      default fit for new images: cover (fill) | contain (whole)
   mode     default arrangement of several images: row | col | grid
   pad      small padding around the images
   max      max number of images
   noTitle  no title bar
   hidden   starts removed
   ============================================================ */
const BLOCK_DEFS = {
  map: { label: "Location of the project (map)", fit: "contain", mode: "row", max: 1, noTitle: true },

  /* Format 1 */
  p_ga: { label: "General arrangement layout of project", title: "GENERAL ARRANGEMENT LAYOUT OF THE PROJECT", fit: "contain", mode: "col" },
  p_plan: { label: "Plan", title: "PLAN", fit: "contain", mode: "col" },
  p_lsec: { label: "L-Section / Important drawing", title: "L-SECTION", fit: "contain", mode: "col" },
  p_csec: { label: "C-Section (optional)", title: "C-SECTION", fit: "contain", mode: "col", hidden: true },
  p_proj: { label: "Project pictures and scope of studies", title: "THE PROJECT AND SCOPE OF MODEL STUDIES", fit: "cover", mode: "row", pad: true },
  p_model: { label: "Model pictures", title: "THE PHYSICAL MODEL", fit: "cover", mode: "row", pad: true },
  p_salient: { label: "Salient features", kind: "salient", title: "SALIENT FEATURES" },

  /* Format 2 */
  m_layout: { label: "General arrangement layout of model", title: "MODEL LAYOUT", fit: "contain", mode: "col" },
  m_flow: { label: "Model pictures / flow conditions", title: "", fit: "cover", mode: "grid", pad: true },
  m_pic: { label: "Model picture / flow condition (bottom left)", title: "", fit: "cover", mode: "col", pad: true },
  m_visit: { label: "Visitors on model / model picture", title: "MODEL VISIT BY ENGINEERING TEAM", fit: "cover", mode: "col", pad: true },
  m_concl: { label: "Conclusion and recommendation", kind: "conclusion", title: "CONCLUSION AND RECOMMENDATION" },
};

const FORMAT_1 = ["p_ga", "p_plan", "p_lsec", "p_csec", "p_proj", "p_model", "p_salient"];
const FORMAT_2 = ["m_layout", "m_flow", "m_pic", "m_visit", "m_concl"];

const makeBlocks = () =>
  Object.fromEntries(
    Object.entries(BLOCK_DEFS).map(([id, d]) => [
      id,
      { visible: !d.hidden, title: d.title ?? "", mode: d.mode ?? "row", items: [] },
    ])
  );

const initialData = {
  template: "project", // "project" | "model"
  name: "BORAS BARRAGE HEP, MADHYA PRADESH (25 MW)",
  scale: "SCALE 1:60",
  date: "APRIL 2026",
  blocks: makeBlocks(),
  planNotes:
    "Full Reservoir Level = EL. 310.00 m\nMinimum Drawdown Level = EL. 309.00 m\nMaximum Water Level = EL. 315.00 m",
  scope:
    "This study evaluates the hydraulic performance of the power intake and tailrace channel as they join the river downstream of the barrage under combined operation of the barrage and powerhouse. Key parameters such as flow conditions, water surface elevations at different locations, pressure distribution near the intake and tailrace, and velocity patterns are analyzed to understand system behavior.",
  salient: [
    { k: "River", v: "Narmada River" },
    { k: "Total no. of Spans (29 nos.)", v: "Reproduced 9 nos." },
    { k: "Tail Race Channel", v: "Length 255.84 m" },
    { k: "Concrete Barrage", v: "631.50 m (L)" },
    { k: "Size of gates", v: "15.85 (W) x 8.80 (H) m" },
    { k: "Design Discharge", v: "39,981 Cumec" },
  ],
  conclusion:
    "The proposed additional guide wall between the dividing pier and Powerhouse Unit 1 is essential for improving flow conditions in the approach channel.\nA mismatch at the tailrace outfall invert level suggests the need for redesign to ensure smooth flow transition.\nSediment deposition remains a concern in low-velocity zones and can be managed through optimized gate operations and periodic flushing during monsoon.",
};

/* ---------- helpers ---------- */
const uid = () => Math.random().toString(36).slice(2, 9);
const clamp = (v, lo, hi) => Math.min(hi, Math.max(lo, v));
const lines = (t) =>
  (t || "")
    .split("\n")
    .map((s) => s.trim())
    .filter(Boolean);
const chunk = (arr, n) => {
  const out = [];
  for (let i = 0; i < arr.length; i += n) out.push(arr.slice(i, i + n));
  return out;
};
const loadSize = (src) =>
  new Promise((res) => {
    const im = new Image();
    im.onload = () => res({ nw: im.naturalWidth, nh: im.naturalHeight });
    im.onerror = () => res({ nw: 0, nh: 0 });
    im.src = src;
  });

/* Is this section part of the poster right now? */
function shown(data, id, exporting) {
  const b = data.blocks[id];
  if (!b.visible) return false;
  if (!exporting) return true;
  if (b.items.length > 0) return true;
  if (id === "p_plan") return lines(data.planNotes).length > 0;
  if (id === "p_proj") return lines(data.scope).length > 0;
  if (id === "p_salient") return data.salient.some((r) => r.k.trim() || r.v.trim());
  if (id === "m_concl") return lines(data.conclusion).length > 0;
  return false;
}

/* ------------------------------------------------------------
   Image geometry. One function used by the poster AND the editor,
   so what you adjust is exactly what gets printed.
   fw / fh = frame size in px. ox / oy = pan as a fraction of frame.
   ------------------------------------------------------------ */
function layoutImage(item, fw, fh) {
  if (!fw || !fh) return null;
  const nw = item.nw || 4;
  const nh = item.nh || 3;
  const swap = item.rot % 180 !== 0;
  const ew = swap ? nh : nw; // size after rotation
  const eh = swap ? nw : nh;
  const base = item.fit === "cover" ? Math.max(fw / ew, fh / eh) : Math.min(fw / ew, fh / eh);
  const scale = base * item.zoom;
  const dw = ew * scale;
  const dh = eh * scale;
  const maxX = Math.max(0, (dw - fw) / 2);
  const maxY = Math.max(0, (dh - fh) / 2);
  return {
    w: nw * scale,
    h: nh * scale,
    tx: clamp(item.ox * fw, -maxX, maxX),
    ty: clamp(item.oy * fh, -maxY, maxY),
    maxX,
    maxY,
  };
}

/* ============================================================
   POSTER PIECES (everything inside the exported poster)
   ============================================================ */
function FitImage({ item }) {
  const ref = useRef(null);
  const [box, setBox] = useState({ w: 0, h: 0 });

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;
    const measure = () => setBox({ w: el.clientWidth, h: el.clientHeight });
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const L = layoutImage(item, box.w, box.h);

  return (
    <div ref={ref} style={{ position: "absolute", inset: 0, overflow: "hidden" }}>
      {L && (
        <img
          src={item.src}
          alt=""
          draggable={false}
          crossOrigin="anonymous"
          style={{
            position: "absolute",
            left: "50%",
            top: "50%",
            width: L.w,
            height: L.h,
            maxWidth: "none",
            transform: `translate(calc(-50% + ${L.tx}px), calc(-50% + ${L.ty}px)) scaleX(${
              item.flip ? -1 : 1
            }) rotate(${item.rot}deg)`,
          }}
        />
      )}
    </div>
  );
}

/* Text box that shrinks its font until the content fits (down to min) */
function FitBox({ name, max = 22, min = 11, style, children }) {
  const ref = useRef(null);
  const [size, setSize] = useState(max);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;
    let s = max;
    el.style.fontSize = `${s}px`;
    while (el.scrollHeight > el.clientHeight + 1 && s > min) {
      s -= 1;
      el.style.fontSize = `${s}px`;
    }
    if (s !== size) setSize(s);
  });

  return (
    <div ref={ref} data-fit={name} style={{ overflow: "hidden", minHeight: 0, fontSize: size, ...style }}>
      {children}
    </div>
  );
}

function Bar({ title }) {
  return (
    <div
      style={{
        background: BLUE,
        color: "#fff",
        textAlign: "center",
        fontSize: 19,
        fontWeight: 600,
        padding: "5px 8px",
        flexShrink: 0,
        textTransform: "uppercase",
        letterSpacing: 0.3,
      }}
    >
      {title}
    </div>
  );
}

function Box({ style, children }) {
  return (
    <div
      style={{
        minWidth: 0,
        minHeight: 0,
        display: "flex",
        flexDirection: "column",
        border: `1px solid ${LINE}`,
        background: "#fff",
        overflow: "hidden",
        ...style,
      }}
    >
      {children}
    </div>
  );
}

/* All images of one section, arranged automatically */
function ItemsArea({ block, def, flex = 1 }) {
  const items = block.items;
  const outer = {
    flex,
    minWidth: 0,
    minHeight: 0,
    display: "flex",
    padding: def.pad ? 6 : 0,
    gap: 6,
  };

  const cell = (it) => (
    <div
      key={it.id}
      data-item={it.id}
      style={{
        position: "relative",
        flex: 1,
        minWidth: 0,
        minHeight: 0,
        overflow: "hidden",
        background: it.bg,
      }}
    >
      <FitImage item={it} />
      {it.caption.trim() && (
        <div
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            bottom: 0,
            background: "rgba(255,255,255,0.88)",
            color: NAVY,
            fontSize: 17,
            fontWeight: 700,
            textAlign: "center",
            padding: "3px 6px",
          }}
        >
          {it.caption}
        </div>
      )}
    </div>
  );

  if (items.length === 0) {
    return (
      <div style={outer}>
        <div
          style={{
            flex: 1,
            minHeight: 0,
            border: "2px dashed #b6c2d3",
            color: "#8a99ad",
            fontSize: 16,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            padding: 8,
          }}
        >
          {def.label}
        </div>
      </div>
    );
  }

  if (block.mode === "grid") {
    const cols = items.length <= 1 ? 1 : items.length <= 4 ? 2 : 3;
    return (
      <div style={{ ...outer, flexDirection: "column" }}>
        {chunk(items, cols).map((row, i) => (
          <div key={i} style={{ flex: 1, minHeight: 0, display: "flex", gap: 6 }}>
            {row.map(cell)}
          </div>
        ))}
      </div>
    );
  }

  return (
    <div style={{ ...outer, flexDirection: block.mode === "col" ? "column" : "row" }}>
      {items.map(cell)}
    </div>
  );
}

/* A bordered section with optional title bar, its images, and extra content */
function ImageBlock({ id, data, exporting, style, itemsFlex = 1, children }) {
  if (!shown(data, id, exporting)) return null;
  const b = data.blocks[id];
  const def = BLOCK_DEFS[id];
  const showItems = b.items.length > 0 || !exporting;
  return (
    <Box style={style}>
      {b.title.trim() && <Bar title={b.title} />}
      {showItems && <ItemsArea block={b} def={def} flex={itemsFlex} />}
      {children}
    </Box>
  );
}

function SalientBlock({ data, exporting, style }) {
  if (!shown(data, "p_salient", exporting)) return null;
  const b = data.blocks.p_salient;
  const rows = data.salient.filter((r) => r.k.trim() || r.v.trim());
  const nRows = Math.max(1, Math.ceil(rows.length / 2));
  return (
    <Box style={style}>
      {b.title.trim() && <Bar title={b.title} />}
      <FitBox
        name="Salient features"
        max={22}
        min={11}
        style={{
          flex: 1,
          padding: "10px 16px",
          display: "grid",
          gridAutoFlow: "column",
          gridTemplateRows: `repeat(${nRows}, auto)`,
          gridTemplateColumns: "1fr 1fr",
          columnGap: 28,
          rowGap: "0.5em",
          alignContent: "start",
        }}
      >
        {rows.map((r, i) => (
          <div key={i} style={{ display: "flex", lineHeight: 1.25 }}>
            <span style={{ width: "48%", flexShrink: 0 }}>{r.k}</span>
            <span>= {r.v}</span>
          </div>
        ))}
      </FitBox>
    </Box>
  );
}

function ConclusionBlock({ data, exporting, style }) {
  if (!shown(data, "m_concl", exporting)) return null;
  const b = data.blocks.m_concl;
  return (
    <Box style={style}>
      {b.title.trim() && <Bar title={b.title} />}
      <FitBox name="Conclusion" max={22} min={11} style={{ flex: 1, padding: "8px 14px", lineHeight: 1.3 }}>
        {lines(data.conclusion).map((l, i) => (
          <div key={i} style={{ display: "flex", gap: "0.5em", marginBottom: "0.3em" }}>
            <span>•</span>
            <span>{l}</span>
          </div>
        ))}
      </FitBox>
    </Box>
  );
}

function Header({ data, exporting }) {
  const mb = data.blocks.map;
  const showMap = mb.visible && (!exporting || mb.items.length > 0);
  return (
    <div style={{ height: 150, display: "flex", alignItems: "center", gap: 24, flexShrink: 0 }}>
      <img
        src={LOGO_SRC}
        alt=""
        crossOrigin="anonymous"
        style={{ width: 150, height: 150, objectFit: "contain", flexShrink: 0 }}
        onError={(e) => {
          e.currentTarget.style.visibility = "hidden";
        }}
      />

      <FitBox
        name="Title block"
        max={36}
        min={20}
        style={{
          flex: 1,
          height: 150,
          display: "flex",
          flexDirection: "column",
          textAlign: "center",
          lineHeight: 1.15,
        }}
      >
        <div style={{ marginTop: "auto", fontWeight: 800, color: NAVY }}>{data.name}</div>
        <div style={{ fontWeight: 800, color: NAVY, fontSize: "0.95em" }}>{data.scale}</div>
        <div style={{ fontWeight: 700, fontSize: "0.68em", marginTop: 4 }}>{LAB}</div>
        <div
          style={{
            marginBottom: "auto",
            fontWeight: 700,
            fontSize: "0.68em",
            color: "#1f5fa8",
            textDecoration: "underline",
          }}
        >
          {SITE}
        </div>
      </FitBox>

      <div
        style={{
          width: 260,
          height: 150,
          flexShrink: 0,
          display: "flex",
          border: showMap ? `1px solid ${LINE}` : "none",
        }}
      >
        {showMap && <ItemsArea block={mb} def={BLOCK_DEFS.map} />}
      </div>
    </div>
  );
}

/* ---------------- FORMAT 1 ---------------- */
function ProjectTemplate({ data, exporting }) {
  const S = (id) => shown(data, id, exporting);
  const IB = (id, style, props) => (
    <ImageBlock id={id} data={data} exporting={exporting} style={style} {...props} />
  );
  const notes = lines(data.planNotes);
  const scope = lines(data.scope);

  const row1 = S("p_ga") || S("p_plan") || S("p_lsec") || S("p_csec");
  const row2 = S("p_proj") || S("p_model") || S("p_salient");

  return (
    <div style={{ flex: 1, minHeight: 0, display: "flex", flexDirection: "column", gap: 14 }}>
      {row1 && (
        <div style={{ flex: 48, minHeight: 0, display: "flex", gap: 14 }}>
          {IB("p_ga", { flex: 1 })}

          {S("p_plan") && (
            <ImageBlock id="p_plan" data={data} exporting={exporting} style={{ flex: 1 }}>
              {notes.length > 0 && (
                <FitBox
                  name="Plan notes"
                  max={22}
                  min={11}
                  style={{
                    height: 96,
                    flexShrink: 0,
                    padding: "6px 12px",
                    lineHeight: 1.3,
                    borderTop: `1px solid ${LINE}`,
                  }}
                >
                  {notes.map((n, i) => (
                    <div key={i}>{n}</div>
                  ))}
                </FitBox>
              )}
            </ImageBlock>
          )}

          {(S("p_lsec") || S("p_csec")) && (
            <div style={{ flex: 0.7, minWidth: 0, display: "flex", flexDirection: "column", gap: 12 }}>
              {IB("p_lsec", { flex: 1 })}
              {IB("p_csec", { flex: 1 })}
            </div>
          )}
        </div>
      )}

      {row2 && (
        <div style={{ flex: 52, minHeight: 0, display: "flex", gap: 14 }}>
          {S("p_proj") && (
            <ImageBlock id="p_proj" data={data} exporting={exporting} style={{ flex: 43 }} itemsFlex={55}>
              {scope.length > 0 && (
                <FitBox
                  name="Scope text"
                  max={22}
                  min={11}
                  style={{ flex: 45, padding: "8px 12px", lineHeight: 1.35 }}
                >
                  {scope.map((p, i) => (
                    <p key={i} style={{ margin: "0 0 0.4em" }}>
                      {p}
                    </p>
                  ))}
                </FitBox>
              )}
            </ImageBlock>
          )}

          {(S("p_model") || S("p_salient")) && (
            <div style={{ flex: 57, minWidth: 0, display: "flex", flexDirection: "column", gap: 14 }}>
              {IB("p_model", { flex: 56 })}
              <SalientBlock data={data} exporting={exporting} style={{ flex: 44 }} />
            </div>
          )}
        </div>
      )}
    </div>
  );
}

/* ---------------- FORMAT 2 ---------------- */
function ModelTemplate({ data, exporting }) {
  const S = (id) => shown(data, id, exporting);
  const IB = (id, style) => <ImageBlock id={id} data={data} exporting={exporting} style={style} />;
  const top = S("m_layout") || S("m_flow");
  const bottom = S("m_pic") || S("m_visit") || S("m_concl");

  return (
    <div style={{ flex: 1, minHeight: 0, display: "flex", flexDirection: "column", gap: 14 }}>
      {top && (
        <div style={{ flex: 70, minHeight: 0, display: "flex", gap: 14 }}>
          {IB("m_layout", { flex: 52 })}
          {IB("m_flow", { flex: 48 })}
        </div>
      )}
      {bottom && (
        <div style={{ flex: 30, minHeight: 0, display: "flex", gap: 14 }}>
          {IB("m_pic", { flex: 0.9 })}
          {IB("m_visit", { flex: 0.7 })}
          <ConclusionBlock data={data} exporting={exporting} style={{ flex: 1.5 }} />
        </div>
      )}
    </div>
  );
}

function Poster({ data, exporting, posterRef }) {
  return (
    <div
      ref={posterRef}
      style={{
        width: W,
        height: H,
        boxSizing: "border-box",
        padding: 28,
        background: "#fff",
        color: "#111",
        fontFamily: "Arial, Helvetica, sans-serif",
        display: "flex",
        flexDirection: "column",
        gap: 10,
      }}
    >
      <Header data={data} exporting={exporting} />
      <div style={{ height: 26, fontSize: 21, fontWeight: 600, flexShrink: 0 }}>{data.date}</div>
      {data.template === "project" ? (
        <ProjectTemplate data={data} exporting={exporting} />
      ) : (
        <ModelTemplate data={data} exporting={exporting} />
      )}
    </div>
  );
}

/* ============================================================
   FORM PIECES
   ============================================================ */
const inputCls =
  "w-full rounded-md border border-slate-300 bg-white px-2.5 py-1.5 text-sm outline-none focus:border-blue-500";
const btnCls =
  "rounded-md border border-slate-300 bg-white px-2 py-1 text-xs text-slate-700 hover:bg-slate-50";
const btnOn = "rounded-md border border-blue-600 bg-blue-600 px-2 py-1 text-xs text-white";

function Card({ title, hint, action, children }) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-4">
      <div className="flex items-start justify-between gap-3">
        <div>
          <h3 className="text-sm font-semibold text-slate-900">{title}</h3>
          {hint && <p className="mt-0.5 text-xs text-slate-500">{hint}</p>}
        </div>
        {action}
      </div>
      <div className="mt-3">{children}</div>
    </div>
  );
}

function RowsEditor({ rows, onChange }) {
  const update = (i, key, val) =>
    onChange(rows.map((r, idx) => (idx === i ? { ...r, [key]: val } : r)));
  return (
    <div className="space-y-2">
      {rows.map((r, i) => (
        <div key={i} className="flex gap-2">
          <input
            className={inputCls}
            placeholder="Label"
            value={r.k}
            onChange={(e) => update(i, "k", e.target.value)}
          />
          <input
            className={inputCls}
            placeholder="Value"
            value={r.v}
            onChange={(e) => update(i, "v", e.target.value)}
          />
          <button
            type="button"
            onClick={() => onChange(rows.filter((_, idx) => idx !== i))}
            className="rounded-md p-2 text-red-500 hover:bg-red-50"
          >
            <Trash2 size={14} />
          </button>
        </div>
      ))}
      <button
        type="button"
        onClick={() => onChange([...rows, { k: "", v: "" }])}
        className="inline-flex items-center gap-1 text-sm text-blue-600 hover:underline"
      >
        <Plus size={14} /> Add row
      </button>
    </div>
  );
}

/* Drag to pan, zoom, fill / fit, rotate, flip, background */
function Adjuster({ item, def, onChange, measure }) {
  const frameRef = useRef(null);
  const drag = useRef(null);
  const [ar, setAr] = useState(4 / 3); // aspect ratio of the real block on the poster

  useEffect(() => {
    const el = measure(item.id);
    if (!el) return;
    const update = () => {
      if (el.clientWidth && el.clientHeight) setAr(el.clientWidth / el.clientHeight);
    };
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, [item.id]); // eslint-disable-line react-hooks/exhaustive-deps

  const onDown = (e) => {
    e.currentTarget.setPointerCapture(e.pointerId);
    drag.current = { cx: e.clientX, cy: e.clientY, ox: item.ox, oy: item.oy };
  };
  const onMove = (e) => {
    if (!drag.current) return;
    const r = frameRef.current.getBoundingClientRect();
    const L = layoutImage(item, r.width, r.height);
    if (!L) return;
    const mx = L.maxX / r.width;
    const my = L.maxY / r.height;
    onChange({
      ox: clamp(drag.current.ox + (e.clientX - drag.current.cx) / r.width, -mx, mx),
      oy: clamp(drag.current.oy + (e.clientY - drag.current.cy) / r.height, -my, my),
    });
  };
  const onUp = () => {
    drag.current = null;
  };

  const swap = item.rot % 180 !== 0;
  const ew = swap ? item.nh : item.nw;
  const eh = swap ? item.nw : item.nh;
  const imgLandscape = ew >= eh;
  const frameLandscape = ar >= 1;
  const mismatch = ew && eh && Math.abs(Math.log(ew / eh / ar)) > 0.35 && imgLandscape !== frameLandscape;
  const shape = ar > 1.15 ? "landscape" : ar < 0.87 ? "portrait" : "square";

  const setFit = (fit) => onChange({ fit, zoom: 1, ox: 0, oy: 0 });
  const rotate = (d) => onChange({ rot: (item.rot + d + 360) % 360, ox: 0, oy: 0 });
  const reset = () =>
    onChange({ fit: def.fit, zoom: 1, ox: 0, oy: 0, rot: 0, flip: false, bg: "#ffffff" });

  return (
    <div className="space-y-2">
      <div
        ref={frameRef}
        className="relative cursor-grab touch-none select-none overflow-hidden rounded border border-slate-300 active:cursor-grabbing"
        style={{
          aspectRatio: ar,
          width: "100%",
          maxWidth: Math.round(210 * ar),
          background: item.bg,
        }}
        onPointerDown={onDown}
        onPointerMove={onMove}
        onPointerUp={onUp}
        onPointerCancel={onUp}
      >
        <FitImage item={item} />
      </div>

      <p className="text-xs text-slate-500">
        This block is {shape}. Drag the image to move it, use zoom to crop in.
      </p>
      {mismatch && (
        <p className="rounded-md bg-amber-50 px-2 py-1 text-xs text-amber-800">
          This image is {imgLandscape ? "landscape" : "portrait"} but the block is {shape}. Try "Fit
          whole", or zoom in and drag to choose the part you want.
        </p>
      )}

      <div className="flex flex-wrap items-center gap-2">
        <button type="button" className={item.fit === "cover" ? btnOn : btnCls} onClick={() => setFit("cover")}>
          Fill (crop)
        </button>
        <button type="button" className={item.fit === "contain" ? btnOn : btnCls} onClick={() => setFit("contain")}>
          Fit whole
        </button>
        <span className="mx-1 h-4 w-px bg-slate-200" />
        <button type="button" className={btnCls} onClick={() => rotate(-90)} title="Rotate left">
          <RotateCcw size={13} />
        </button>
        <button type="button" className={btnCls} onClick={() => rotate(90)} title="Rotate right">
          <RotateCw size={13} />
        </button>
        <button type="button" className={item.flip ? btnOn : btnCls} onClick={() => onChange({ flip: !item.flip })}>
          Flip
        </button>
        <button type="button" className={btnCls} onClick={reset}>
          Reset
        </button>
      </div>

      <label className="flex items-center gap-2 text-xs text-slate-600">
        Zoom
        <input
          type="range"
          min="1"
          max="4"
          step="0.05"
          value={item.zoom}
          onChange={(e) => onChange({ zoom: Number(e.target.value) })}
          className="min-w-[80px] flex-1"
        />
        <span className="w-9 text-right">{item.zoom.toFixed(1)}x</span>
      </label>

      <div className="flex items-center gap-2 text-xs text-slate-600">
        Background
        {[
          ["#ffffff", "White"],
          ["#f1f5f9", "Light gray"],
          ["#000000", "Black"],
        ].map(([c, label]) => (
          <button
            key={c}
            type="button"
            title={label}
            onClick={() => onChange({ bg: c })}
            className={`h-5 w-5 rounded border ${item.bg === c ? "ring-2 ring-blue-500" : "border-slate-300"}`}
            style={{ background: c }}
          />
        ))}
        <span className="text-slate-400">(visible around "Fit whole")</span>
      </div>
    </div>
  );
}

function ItemEditor({ item, index, total, def, bid, api, measure }) {
  return (
    <div className="rounded-lg border border-slate-200 p-3">
      <div className="mb-2 flex items-center justify-between">
        <span className="text-xs font-semibold text-slate-700">Image {index + 1}</span>
        <div className="flex gap-1">
          <button
            type="button"
            disabled={index === 0}
            onClick={() => api.moveItem(bid, index, -1)}
            className="rounded p-1.5 hover:bg-slate-100 disabled:opacity-30"
          >
            <ArrowUp size={14} />
          </button>
          <button
            type="button"
            disabled={index === total - 1}
            onClick={() => api.moveItem(bid, index, 1)}
            className="rounded p-1.5 hover:bg-slate-100 disabled:opacity-30"
          >
            <ArrowDown size={14} />
          </button>
          <button
            type="button"
            onClick={() => api.removeItem(bid, item.id)}
            className="rounded p-1.5 text-red-500 hover:bg-red-50"
            title="Delete image"
          >
            <Trash2 size={14} />
          </button>
        </div>
      </div>

      <Adjuster
        item={item}
        def={def}
        measure={measure}
        onChange={(patch) => api.patchItem(bid, item.id, patch)}
      />

      <input
        className={`${inputCls} mt-2`}
        placeholder="Caption (optional)"
        value={item.caption}
        onChange={(e) => api.patchItem(bid, item.id, { caption: e.target.value })}
      />
    </div>
  );
}

function BlockEditor({ id, data, api, measure, children }) {
  const def = BLOCK_DEFS[id];
  const b = data.blocks[id];
  const kind = def.kind ?? "images";

  if (!b.visible) {
    return (
      <div className="flex items-center justify-between gap-3 rounded-xl border border-dashed border-slate-300 bg-white/60 px-4 py-3">
        <div>
          <div className="text-sm font-medium text-slate-500">{def.label}</div>
          <div className="text-xs text-slate-400">Removed. The other sections use its space.</div>
        </div>
        <button
          type="button"
          onClick={() => api.setBlock(id, { visible: true })}
          className="inline-flex shrink-0 items-center gap-1 rounded-md border border-slate-300 bg-white px-2.5 py-1.5 text-xs text-slate-700 hover:bg-slate-50"
        >
          <Plus size={12} /> Add back
        </button>
      </div>
    );
  }

  const canAdd = kind === "images" && (!def.max || b.items.length < def.max);

  return (
    <Card
      title={def.label}
      action={
        <button
          type="button"
          onClick={() => api.setBlock(id, { visible: false })}
          className="inline-flex shrink-0 items-center gap-1 rounded-md px-2 py-1 text-xs text-red-500 hover:bg-red-50"
        >
          <Trash2 size={12} /> Remove section
        </button>
      }
    >
      <div className="space-y-3">
        {!def.noTitle && (
          <input
            className={inputCls}
            placeholder="Title bar text (leave empty for no bar)"
            value={b.title}
            onChange={(e) => api.setBlock(id, { title: e.target.value })}
          />
        )}

        {kind === "images" && b.items.length > 1 && (
          <label className="flex items-center gap-2 text-xs text-slate-600">
            Arrange images
            <select
              className="rounded-md border border-slate-300 px-2 py-1 text-xs"
              value={b.mode}
              onChange={(e) => api.setBlock(id, { mode: e.target.value })}
            >
              <option value="row">Side by side</option>
              <option value="col">Stacked</option>
              <option value="grid">Grid</option>
            </select>
          </label>
        )}

        {kind === "images" &&
          b.items.map((it, i) => (
            <ItemEditor
              key={it.id}
              item={it}
              index={i}
              total={b.items.length}
              def={def}
              bid={id}
              api={api}
              measure={measure}
            />
          ))}

        {canAdd && (
          <label className="flex cursor-pointer items-center justify-center gap-2 rounded-lg border-2 border-dashed border-slate-300 bg-slate-50 py-3 text-sm text-slate-500 hover:border-blue-400 hover:text-blue-600">
            <ImagePlus size={16} /> {b.items.length ? "Add more images" : "Add images"}
            <input
              type="file"
              accept="image/jpeg,image/png,image/webp"
              multiple={!def.max || def.max > 1}
              hidden
              onChange={(e) => {
                const files = Array.from(e.target.files || []);
                e.target.value = "";
                if (files.length) api.addItems(id, files);
              }}
            />
          </label>
        )}

        {children}
      </div>
    </Card>
  );
}

/* ============================================================
   MAIN
   ============================================================ */
export default function PosterBuilderTest({ className = "h-full" }) {
  const [data, setData] = useState(initialData);
  const [scale, setScale] = useState(0.5);
  const [warnings, setWarnings] = useState([]);
  const [exporting, setExporting] = useState(false);

  const posterRef = useRef(null);
  const wrapRef = useRef(null);

  const setField = (key, val) => setData((d) => ({ ...d, [key]: val }));
  const text = (key) => (e) => setField(key, e.target.value);

  const updateBlock = (id, fn) =>
    setData((d) => ({ ...d, blocks: { ...d.blocks, [id]: fn(d.blocks[id]) } }));

  const api = {
    setBlock: (id, patch) => updateBlock(id, (b) => ({ ...b, ...patch })),

    addItems: async (id, files) => {
      const def = BLOCK_DEFS[id];
      const room = def.max ? def.max - data.blocks[id].items.length : files.length;
      const picked = files.slice(0, Math.max(0, room));
      const made = await Promise.all(
        picked.map(async (f) => {
          const src = URL.createObjectURL(f);
          const { nw, nh } = await loadSize(src);
          return {
            id: uid(),
            src,
            nw,
            nh,
            caption: "",
            fit: def.fit,
            zoom: 1,
            ox: 0,
            oy: 0,
            rot: 0,
            flip: false,
            bg: "#ffffff",
          };
        })
      );
      updateBlock(id, (b) => ({ ...b, items: [...b.items, ...made] }));
    },

    patchItem: (id, itemId, patch) =>
      updateBlock(id, (b) => ({
        ...b,
        items: b.items.map((it) => (it.id === itemId ? { ...it, ...patch } : it)),
      })),

    removeItem: (id, itemId) => {
      const it = data.blocks[id].items.find((x) => x.id === itemId);
      if (it?.src.startsWith("blob:")) URL.revokeObjectURL(it.src);
      updateBlock(id, (b) => ({ ...b, items: b.items.filter((x) => x.id !== itemId) }));
    },

    moveItem: (id, index, dir) =>
      updateBlock(id, (b) => {
        const j = index + dir;
        if (j < 0 || j >= b.items.length) return b;
        const items = [...b.items];
        [items[index], items[j]] = [items[j], items[index]];
        return { ...b, items };
      }),
  };

  const measure = (itemId) =>
    posterRef.current ? posterRef.current.querySelector(`[data-item="${itemId}"]`) : null;

  const ed = (id, children) => (
    <BlockEditor key={id} id={id} data={data} api={api} measure={measure}>
      {children}
    </BlockEditor>
  );

  /* scale the fixed poster to the preview width */
  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    const update = () => setScale(Math.min(1, el.clientWidth / W));
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  /* warn about text that does not fit even at the smallest font size */
  useLayoutEffect(() => {
    const root = posterRef.current;
    if (!root) return;
    const names = [...root.querySelectorAll("[data-fit]")]
      .filter((el) => el.scrollHeight > el.clientHeight + 1)
      .map((el) => el.dataset.fit);
    const uniq = [...new Set(names)];
    setWarnings((prev) => (prev.join("|") === uniq.join("|") ? prev : uniq));
  });

  const exportPng = async () => {
    if (!posterRef.current) return;
    setExporting(true); // hides empty sections so the layout reflows
    await new Promise((r) => requestAnimationFrame(() => requestAnimationFrame(r)));
    await new Promise((r) => setTimeout(r, 250)); // let images re-measure
    try {
      const url = await toPng(posterRef.current, {
        width: W,
        height: H,
        pixelRatio: 1,
        cacheBust: true,
      });
      const a = document.createElement("a");
      a.href = url;
      a.download = `${(data.name || "poster").replace(/[^\w\-]+/g, "_")}.png`;
      a.click();
    } catch (err) {
      alert("Export failed: " + (err?.message || err));
    } finally {
      setExporting(false);
    }
  };

  const tabCls = (active) =>
    `rounded-md px-3 py-1.5 text-sm font-medium transition ${
      active ? "bg-blue-600 text-white" : "bg-slate-100 text-slate-700 hover:bg-slate-200"
    }`;

  return (
    <div className={`flex min-h-0 flex-col bg-slate-100 ${className}`}>
      {/* TOP BAR */}
      <div className="flex shrink-0 flex-wrap items-center justify-between gap-3 border-b border-slate-200 bg-white px-4 py-2.5">
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-sm text-slate-500">Format:</span>
          <button
            type="button"
            className={tabCls(data.template === "project")}
            onClick={() => setField("template", "project")}
          >
            1 - Project &amp; model studies
          </button>
          <button
            type="button"
            className={tabCls(data.template === "model")}
            onClick={() => setField("template", "model")}
          >
            2 - Model layout &amp; flow
          </button>
        </div>

        <button
          type="button"
          onClick={exportPng}
          disabled={exporting}
          className="inline-flex items-center gap-2 rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 disabled:opacity-60"
        >
          <Download size={16} /> {exporting ? "Generating..." : "Download PNG"}
        </button>
      </div>

      {/* CONTENT: two independently scrolling panes */}
      <div className="grid min-h-0 flex-1 grid-cols-1 gap-4 overflow-y-auto p-4 xl:grid-cols-[480px_1fr] xl:overflow-hidden">
        {/* FORM */}
        <div className="min-h-0 space-y-4 xl:overflow-y-auto xl:pr-1">
          <Card title="Poster details" hint="Logo, lab name and website are fixed.">
            <div className="space-y-2">
              <input className={inputCls} placeholder="Project name" value={data.name} onChange={text("name")} />
              <input
                className={inputCls}
                placeholder="Model scale (e.g. SCALE 1:60)"
                value={data.scale}
                onChange={text("scale")}
              />
              <input
                className={inputCls}
                placeholder="Month Year (e.g. APRIL 2026)"
                value={data.date}
                onChange={text("date")}
              />
            </div>
          </Card>

          {ed("map")}

          {data.template === "project" ? (
            <>
              {ed("p_ga")}

              {ed(
                "p_plan",
                <textarea
                  rows={4}
                  className={inputCls}
                  placeholder="Levels shown under the plan, one per line (FRL, MDDL, MWL ...)"
                  value={data.planNotes}
                  onChange={text("planNotes")}
                />
              )}

              {ed("p_lsec")}
              {ed("p_csec")}

              {ed(
                "p_proj",
                <textarea
                  rows={5}
                  className={inputCls}
                  placeholder="Scope of the studies"
                  value={data.scope}
                  onChange={text("scope")}
                />
              )}

              {ed("p_model")}

              {ed("p_salient", <RowsEditor rows={data.salient} onChange={(v) => setField("salient", v)} />)}
            </>
          ) : (
            <>
              {ed("m_layout")}
              {ed("m_flow")}
              {ed("m_pic")}
              {ed("m_visit")}
              {ed(
                "m_concl",
                <textarea
                  rows={8}
                  className={inputCls}
                  placeholder="One bullet per line"
                  value={data.conclusion}
                  onChange={text("conclusion")}
                />
              )}
            </>
          )}
        </div>

        {/* PREVIEW */}
        <div className="min-h-0 min-w-0 space-y-3 xl:overflow-y-auto">
          {warnings.length > 0 && (
            <div className="rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-800">
              Text is too long even at the smallest size in: <b>{warnings.join(", ")}</b>. Please
              shorten it.
            </div>
          )}

          <div ref={wrapRef} className="w-full">
            <div
              className="overflow-hidden rounded-xl border border-slate-300 bg-white shadow"
              style={{ height: H * scale }}
            >
              <div
                style={{
                  width: W,
                  height: H,
                  transform: `scale(${scale})`,
                  transformOrigin: "top left",
                }}
              >
                <Poster data={data} exporting={exporting} posterRef={posterRef} />
              </div>
            </div>
          </div>

          <p className="text-xs text-slate-500">
            Preview of the {W} x {H} poster. Dashed boxes show where images go. Empty sections are
            removed from the downloaded PNG and the others fill the space.
          </p>
        </div>
      </div>
    </div>
  );
}