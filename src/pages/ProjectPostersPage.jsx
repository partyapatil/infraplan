import { useEffect, useState, useCallback } from "react";
import { createPortal } from "react-dom";
import { useNavigate, useParams } from "react-router-dom";
import { ArrowLeft, X, ChevronLeft, ChevronRight } from "lucide-react";

const API_BASE = "https://staging.infraplan.co.in:7052";

const fileUrl = (p) =>
  !p ? "" : /^(https?:|data:)/.test(p) ? p : `${API_BASE}${p}`;

/* ============================================================
   LIGHTBOX
============================================================ */
function PosterLightbox({ posters, title, index, onClose, onIndexChange }) {
  const current = posters[index];

  const prev = useCallback(
    () => onIndexChange((index - 1 + posters.length) % posters.length),
    [index, posters.length, onIndexChange]
  );
  const next = useCallback(
    () => onIndexChange((index + 1) % posters.length),
    [index, posters.length, onIndexChange]
  );

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    document.addEventListener("keydown", onKey);
    const scrollY = window.scrollY;
    const body = document.body;
    const prevStyle = {
      overflow: body.style.overflow,
      position: body.style.position,
      top: body.style.top,
      width: body.style.width,
    };
    body.style.overflow = "hidden";
    body.style.position = "fixed";
    body.style.top = `-${scrollY}px`;
    body.style.width = "100%";
    return () => {
      Object.assign(body.style, prevStyle);
      window.scrollTo(0, scrollY);
      document.removeEventListener("keydown", onKey);
    };
  }, [onClose, prev, next]);

  return createPortal(
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/95 p-4"
      onClick={onClose}
    >
      {/* Close */}
      <button
        type="button"
        onClick={onClose}
        aria-label="Close"
        className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur transition hover:bg-white/20"
      >
        <X size={20} />
      </button>

      {/* Counter */}
      <div className="absolute left-4 top-4 z-10 rounded-full border border-white/20 bg-black/50 px-3 py-1.5 text-xs font-medium text-white backdrop-blur">
        {index + 1} / {posters.length}
      </div>

      {/* Prev / Next */}
      {posters.length > 1 && (
        <>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
            aria-label="Previous"
            className="absolute left-3 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur transition hover:bg-white/25 sm:left-6"
          >
            <ChevronLeft size={22} />
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
            aria-label="Next"
            className="absolute right-3 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur transition hover:bg-white/25 sm:right-6"
          >
            <ChevronRight size={22} />
          </button>
        </>
      )}

      {/* Image */}
      <img
        src={current}
        alt={`${title} poster ${index + 1}`}
        onClick={(e) => e.stopPropagation()}
        className="max-h-[90vh] max-w-[95vw] rounded-lg object-contain shadow-2xl"
      />

      {/* Title bottom */}
      <div className="pointer-events-none absolute bottom-4 left-1/2 max-w-[90vw] -translate-x-1/2 rounded-full bg-black/60 px-4 py-2 text-center text-xs text-white/90 backdrop-blur">
        {title}
      </div>
    </div>,
    document.body
  );
}

/* ============================================================
   SKELETON
============================================================ */
function PosterSkeleton() {
  return (
    <div className="animate-pulse overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-200">
      <div className="aspect-[16/10] w-full bg-slate-200" />
    </div>
  );
}

/* ============================================================
   PAGE
============================================================ */
export default function ProjectPostersPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [lightboxIndex, setLightboxIndex] = useState(null);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const res = await fetch(`${API_BASE}/api/project`);
        if (!res.ok) throw new Error(`Request failed (${res.status})`);
        const json = await res.json();
        const list = Array.isArray(json) ? json : json?.result ?? json?.data ?? [];
        if (!cancelled)
          setProject(list.find((p) => String(p.id) === String(id)) ?? null);
      } catch (err) {
        if (!cancelled) setError(err.message);
      } finally {
        if (!cancelled) setLoading(false);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, [id]);

  const posters = (project?.posterImagePaths ?? []).map(fileUrl);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      {/* Sticky header bar */}
      <div className="sticky top-0 z-30 border-b border-slate-200 bg-white/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center gap-3 px-4 py-3 sm:px-6 lg:px-10">
          <button
            type="button"
            onClick={() => navigate(-1)}
            className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3.5 py-1.5 text-sm font-medium text-slate-600 transition hover:border-blue-300 hover:text-blue-600"
          >
            <ArrowLeft size={16} />
            <span className="hidden sm:inline">Back</span>
          </button>

          <div className="min-w-0 flex-1">
            <h1 className="truncate text-sm font-semibold text-slate-900 sm:text-base">
              {project?.title ?? "Project Posters"}
            </h1>
          </div>

          {posters.length > 0 && (
            <span className="rounded-full bg-blue-50 px-3 py-1 text-[11px] font-semibold text-blue-700">
              {posters.length} {posters.length === 1 ? "poster" : "posters"}
            </span>
          )}
        </div>
      </div>

      <main className="mx-auto max-w-7xl px-4 py-6 sm:px-6 sm:py-10 lg:px-10">
        {loading ? (
          <div className="flex flex-col gap-6">
            <PosterSkeleton />
            <PosterSkeleton />
          </div>
        ) : error ? (
          <p className="text-center text-sm text-red-600">
            Failed to load: {error}
          </p>
        ) : !project || posters.length === 0 ? (
          <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-slate-300 bg-white px-6 py-16 text-center">
            <p className="text-sm font-medium text-slate-700">
              No posters found
            </p>
            <p className="mt-1 text-xs text-slate-500">
              This project doesn't have any posters yet.
            </p>
          </div>
        ) : (
          <>
            {/* Intro block */}
            <div className="mb-8">
              <div className="mb-2 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-blue-600">
                <span className="h-1.5 w-1.5 rounded-full bg-blue-600" />
                Project Posters
              </div>
              <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl lg:text-4xl">
                {project.title}
              </h2>
              <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500">
                Click any poster to view it in full size. Use arrow keys to
                navigate between posters.
              </p>
            </div>

            {/* Posters: full-width, stacked */}
            <div className="flex flex-col gap-6 sm:gap-8 lg:gap-10">
              {posters.map((src, i) => (
                <figure
                  key={src + i}
                  className="group relative overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-200 transition-shadow hover:shadow-xl hover:shadow-slate-200/60"
                >
                  <button
                    type="button"
                    onClick={() => setLightboxIndex(i)}
                    className="block w-full cursor-zoom-in"
                    aria-label={`Open poster ${i + 1} full size`}
                  >
                    <img
                      src={src}
                      alt={`${project.title} poster ${i + 1}`}
                      loading={i === 0 ? "eager" : "lazy"}
                      decoding="async"
                      className="h-auto w-full object-cover"
                    />
                  </button>

                  {/* Index badge */}
                  <div className="pointer-events-none absolute left-4 top-4 rounded-full border border-white/20 bg-black/50 px-3 py-1.5 text-[11px] font-medium text-white backdrop-blur">
                    {i + 1} / {posters.length}
                  </div>
                </figure>
              ))}
            </div>

            {/* Bottom hint */}
            <p className="mt-10 text-center text-xs text-slate-400">
              End of posters · {posters.length}{" "}
              {posters.length === 1 ? "poster" : "posters"}
            </p>
          </>
        )}
      </main>

      {/* Lightbox */}
      {lightboxIndex !== null && posters.length > 0 && (
        <PosterLightbox
          posters={posters}
          title={project.title}
          index={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onIndexChange={setLightboxIndex}
        />
      )}
    </div>
  );
}