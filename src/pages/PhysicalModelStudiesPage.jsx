




import React, { memo, useEffect, useState } from "react";
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
  Images,
    Play,
  X,
} from "lucide-react";
import { Link } from "react-router-dom";

import trenchWeir3 from "../assets/physicalModelImages/trench-weir/second.png";
import namBeng1 from "../assets/mathematicalModel/Nam-Beng-Dam/1.png";
import upperIntake1 from "../assets/physicalModelImages/upper-intake-structure/1.png";

const collageImages = [
upperIntake1,
namBeng1,
trenchWeir3
];

const parseDescription = (description = "") => {
  const text = description.replace(/\\n/g, "\n");

  const purposeMatch = text.match(
    /Purpose:\s*([\s\S]*?)(?=•\s*Application:|Application:|$)/i
  );

  const applicationMatch = text.match(
    /Application:\s*([\s\S]*)/i
  );

  return {
    purpose: purposeMatch?.[1]?.trim().replace(/^[•\t\s]+/, "") || "",
    application: applicationMatch?.[1]?.trim().replace(/^[•\t\s]+/, "") || "",
  };
};
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
        posters: (p.posterImagePaths ?? []).map(fileUrl),  // NEW
  video: p.videoPath ? fileUrl(p.videoPath) : "",  
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
import { createPortal } from "react-dom";

function VideoModal({ src, title, onClose }) {
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [onClose]);

  return createPortal(
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 p-4"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-5xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close video"
          className="absolute -top-11 right-0 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20"
        >
          <X size={20} />
        </button>

        <video
          src={src}
          controls
          autoPlay
          playsInline
          preload="metadata"
          className="max-h-[80vh] w-full rounded-xl bg-black"
        />
        {title && (
          <p className="mt-3 text-center text-sm text-white/80">{title}</p>
        )}
      </div>
    </div>,
    document.body
  );
}
const ProjectRow = memo(function ProjectRow({ project }) {
  const [videoOpen, setVideoOpen] = useState(false);

  const hasPosters = project.posters?.length > 0;
  const hasVideo = !!project.video;
  const hasActions = hasVideo || hasPosters;

  return (
    <>
      <article className="group relative rounded-2xl border border-slate-200 bg-white transition-colors duration-200 hover:border-blue-200 hover:shadow-lg hover:shadow-slate-200/50">
        <div className="flex flex-col lg:flex-row">
          {/* Left: carousel */}
          <ProjectCarousel images={project.images} title={project.title} />

          {/* Right: content */}
          <div className="flex flex-1 flex-col justify-center p-5 sm:p-7 lg:p-8">
            {/* Label */}
            <div className="mb-3 flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-blue-600" />
              <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-blue-600">
                Project Study
              </span>
            </div>

            {/* Title */}
            <h3 className="text-lg font-bold leading-snug tracking-tight text-slate-900 sm:text-xl lg:text-2xl">
              {project.title}
            </h3>

            {/* Description */}
            <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-600 sm:text-[15px]">
              {project.description}
            </p>

            {/* Actions */}
            {hasActions && (
              <div className="mt-6 flex flex-wrap items-center gap-2.5">
                {hasVideo && (
                  <button
                    type="button"
                    onClick={() => setVideoOpen(true)}
                    className="group/btn inline-flex items-center gap-2 rounded-full bg-blue-600 px-4 py-2 text-xs font-semibold text-white shadow-sm shadow-blue-600/20 transition-all hover:bg-blue-700 hover:shadow-md hover:shadow-blue-600/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2"
                  >
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white/20 transition group-hover/btn:bg-white/30">
                      <Play size={10} className="fill-white" />
                    </span>
                    Watch Video
                  </button>
                )}

             {hasPosters && (
  <Link
    to={`/project-posters/${project.id}`}
    className="group/btn inline-flex items-center gap-2 rounded-full bg-slate-900 px-4 py-2 text-xs font-semibold text-white shadow-sm shadow-slate-900/10 transition-all duration-200 hover:-translate-y-0.5 hover:bg-slate-800 hover:shadow-md hover:shadow-slate-900/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 focus-visible:ring-offset-2"
  >
    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white/15">
      <Images size={12} />
    </span>
    View Details
    <span className="rounded-full bg-white/15 px-1.5 py-0.5 text-[10px] font-bold text-white">
      {project.posters.length}
    </span>
  </Link>
)}
              </div>
            )}

            {/* Footer meta */}
            <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2 text-[11px] font-semibold uppercase tracking-wider text-slate-400">
              <span className="inline-flex items-center gap-1.5">
                <Layers3 size={13} />
                Hydraulic Model Study
              </span>
            </div>
          </div>
        </div>

        {/* Left accent bar on hover */}
        <span className="pointer-events-none absolute inset-y-4 left-0 w-0.5 rounded-full bg-blue-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      </article>

      {/* Modal — portal, so it's not constrained by row layout */}
      {videoOpen && (
        <VideoModal
          src={project.video}
          title={project.title}
          onClose={() => setVideoOpen(false)}
        />
      )}
    </>
  );
});


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
    {sub.description && (() => {
      const { purpose, application } = parseDescription(sub.description);
      const hasBoth = purpose && application;

      return (
        <div
          className={`mb-6 grid grid-cols-1 gap-4 ${
            hasBoth ? "md:grid-cols-2" : ""
          }`}
        >
          {purpose && (
            <div className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-blue-50 to-indigo-50/60 p-5 ring-1 ring-blue-100 transition-shadow hover:shadow-md hover:shadow-blue-100/50">
              <div className="absolute -right-6 -top-6 h-20 w-20 rounded-full bg-blue-100/40 blur-2xl transition-opacity group-hover:opacity-80" />
              <div className="relative">
                <div className="mb-3 flex items-center gap-2.5">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600/10 ring-1 ring-blue-600/20">
                    <svg
                      className="h-4 w-4 text-blue-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </div>
                  <h4 className="text-sm font-semibold tracking-wide text-slate-900">
                    Purpose
                  </h4>
                </div>
                <p className="whitespace-pre-line text-sm leading-relaxed text-slate-600">
                  {purpose}
                </p>
              </div>
            </div>
          )}

          {application && (
            <div className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-emerald-50 to-teal-50/60 p-5 ring-1 ring-emerald-100 transition-shadow hover:shadow-md hover:shadow-emerald-100/50">
              <div className="absolute -right-6 -top-6 h-20 w-20 rounded-full bg-emerald-100/40 blur-2xl transition-opacity group-hover:opacity-80" />
              <div className="relative">
                <div className="mb-3 flex items-center gap-2.5">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-600/10 ring-1 ring-emerald-600/20">
                    <svg
                      className="h-4 w-4 text-emerald-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <h4 className="text-sm font-semibold tracking-wide text-slate-900">
                    Application
                  </h4>
                </div>
                <p className="whitespace-pre-line text-sm leading-relaxed text-slate-600">
                  {application}
                </p>
              </div>
            </div>
          )}
        </div>
      );
    })()}

    <div className="flex flex-col gap-5">
      {sub.projects.map((project) => (
        <ProjectRow key={project.id} project={project} />
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