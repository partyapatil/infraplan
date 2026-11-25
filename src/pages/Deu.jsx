import { useCallback, useEffect, useRef, useState } from "react";

/* ------------------------------------------------------------------
   FILE LOCATIONS (this file lives in src/components/DeuPortfolio.jsx)
     • Gallery art : src/assets/deu/*      → every image shows up automatically
     • Portrait    : src/assets/deu-portrait.jpg  (kept OUTSIDE the gallery folder)
   If this file is in src/ instead, change "../assets" to "./assets".
------------------------------------------------------------------ */
import deuPhoto from "../assets/deu.jpeg";

const imageModules = import.meta.glob(
  "../assets/deu/*.{jpg,jpeg,JPG,JPEG,png,PNG,webp,avif,gif}",
  { eager: true, import: "default" }
);

/* Optional titles. Key = filename without extension. */
const meta = {
  "mountain-morning": { title: "Mountain Morning", medium: "Graphite on paper", year: 2024 },
  "old-street-corner": { title: "Old Street Corner", medium: "Pencil and ink", year: 2024 },
  "portrait-study": { title: "Portrait Study", medium: "Charcoal", year: 2024 },
};

const artworks = Object.entries(imageModules)
  .sort(([a], [b]) => a.localeCompare(b, undefined, { numeric: true }))
  .map(([path, src], i) => {
    const filename = path.split("/").pop().replace(/\.[^.]+$/, "");
    const o = meta[filename] || {};
    return {
      id: i + 1,
      title:
        o.title ?? filename.replace(/[-_]+/g, " ").replace(/\b\w/g, (c) => c.toUpperCase()),
      medium: o.medium ?? "Pencil on paper",
      year: o.year ?? new Date().getFullYear(),
      src,
    };
  });

/* ---------------- content you can edit ---------------- */
const AGE = 8;
const EMAIL = "deu@example.com"; // use a parent-managed address for a public page

const facts = [
  { label: "Favourite tools", value: "2B to 6B pencils, fineliners, a blending stump", tilt: "-rotate-1" },
  { label: "Loves drawing", value: "Mountains, old buildings, animals and faces", tilt: "rotate-1" },
  { label: "Right now", value: "Filling sketchbook number 7", tilt: "-rotate-[0.5deg]" },
  { label: "Best model", value: "A cat that will not sit still", tilt: "rotate-[1.5deg]" },
];

const nav = [
  ["#meet", "Meet Deu"],
  ["#work", "Sketches"],
  ["#about", "About"],
  ["#contact", "Say hello"],
];

/* ---------------- shared classes ---------------- */
const focusRing =
  "focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-[#20242a] focus-visible:ring-offset-2 focus-visible:ring-offset-[#f5f6f3]";

const btnPrimary = `inline-block rounded-full bg-[#20242a] px-7 py-3.5 text-center text-[0.95rem] font-bold text-[#f5f6f3] shadow-[4px_4px_0_#f7c325] transition duration-200 hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[6px_6px_0_#f7c325] active:translate-x-0.5 active:translate-y-0.5 active:shadow-[2px_2px_0_#f7c325] ${focusRing}`;

const btnGhost = `inline-block rounded-full border-2 border-[#20242a] bg-transparent px-7 py-3 text-center text-[0.95rem] font-bold text-[#20242a] transition duration-200 hover:bg-[#20242a] hover:text-[#f5f6f3] ${focusRing}`;

const lbNav =
  "grid h-[52px] w-[52px] shrink-0 place-items-center rounded-full border border-white/25 bg-white/10 pb-1.5 text-3xl leading-none text-white transition hover:scale-105 hover:bg-white/25 focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-[#f7c325] max-sm:hidden";

/* notebook graph paper */
const gridPaper = {
  backgroundColor: "#f5f6f3",
  backgroundImage:
    "linear-gradient(rgba(58,110,165,0.09) 1px, transparent 1px), linear-gradient(90deg, rgba(58,110,165,0.09) 1px, transparent 1px)",
  backgroundSize: "28px 28px",
};

export default function DeuPortfolio() {
  const [activeIndex, setActiveIndex] = useState(null);
  const [touchX, setTouchX] = useState(null);
  const lastFocused = useRef(null);
  const isOpen = activeIndex !== null;
  const count = artworks.length;

  const open = (i) => {
    lastFocused.current = document.activeElement;
    setActiveIndex(i);
  };
  const close = useCallback(() => {
    setActiveIndex(null);
    lastFocused.current?.focus?.();
  }, []);
  const next = useCallback(
    () => setActiveIndex((i) => (i === null ? i : (i + 1) % count)),
    [count]
  );
  const prev = useCallback(
    () => setActiveIndex((i) => (i === null ? i : (i - 1 + count) % count)),
    [count]
  );

  /* keyboard + scroll lock while the lightbox is open */
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [isOpen, close, next, prev]);

  const onTouchEnd = (e) => {
    if (touchX === null) return;
    const dx = e.changedTouches[0].clientX - touchX;
    if (Math.abs(dx) > 50) (dx < 0 ? next : prev)();
    setTouchX(null);
  };

  const current = isOpen ? artworks[activeIndex] : null;

  return (
    <div
      style={gridPaper}
      className="min-h-screen font-['Bricolage_Grotesque',system-ui,sans-serif] text-[#20242a] antialiased"
    >
      {/* fonts + keyframes, so no extra CSS or Tailwind config is needed */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,400;12..96,600;12..96,800&family=Caveat:wght@600;700&display=swap');
        html { scroll-behavior: smooth; }
        @keyframes deu-fade { from { opacity: 0 } to { opacity: 1 } }
        @keyframes deu-pop  { from { opacity: 0; transform: scale(.96) } to { opacity: 1; transform: scale(1) } }
        @keyframes deu-drop { from { opacity: 0; transform: translateY(-28px) rotate(-9deg) } to { opacity: 1; transform: translateY(0) rotate(-3deg) } }
        @keyframes deu-draw { to { stroke-dashoffset: 0 } }
        @media (prefers-reduced-motion: reduce) {
          html { scroll-behavior: auto; }
          *, *::before, *::after { animation: none !important; transition: none !important; }
          .deu-scribble { stroke-dashoffset: 0 !important; }
        }
      `}</style>

      {/* ---------------- NAV ---------------- */}
      <header className="sticky top-0 z-30 border-b-2 border-[#20242a] bg-[#f5f6f3]/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-[1100px] items-center justify-between gap-4 px-[clamp(1rem,5vw,2rem)] py-3">
          <a href="#top" className={`font-['Caveat'] text-[2rem] font-bold leading-none ${focusRing}`}>
            Deu
            <span className="ml-0.5 inline-block h-2.5 w-2.5 rounded-full bg-[#ee8b86]" aria-hidden="true" />
          </a>
          <nav aria-label="Main" className="flex gap-[clamp(0.7rem,2.6vw,1.75rem)]">
            {nav.map(([href, label]) => (
              <a
                key={href}
                href={href}
                className={`text-[0.92rem] font-semibold text-[#5d646e] underline decoration-[#f7c325] decoration-[3px] underline-offset-[6px] [text-decoration-color:transparent] transition hover:text-[#20242a] hover:[text-decoration-color:#f7c325] max-sm:last:hidden max-sm:[&:nth-child(3)]:hidden ${focusRing}`}
              >
                {label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      {/* ---------------- HERO + PHOTO ---------------- */}
      <section
        id="top"
        className="mx-auto grid max-w-[1100px] items-center gap-[clamp(2rem,6vw,4.5rem)] px-[clamp(1rem,5vw,2rem)] pb-[clamp(2.5rem,6vw,4.5rem)] pt-[clamp(2.5rem,7vw,5rem)] md:grid-cols-[1.15fr_minmax(0,400px)]"
      >
        <div className="order-2 md:order-1">
          <p className="mb-4 font-['Caveat'] text-[1.7rem] font-bold leading-none text-[#3a6ea5]">
            sketchbook open, pencil ready
          </p>
          <h1 className="mb-6 text-[clamp(2.6rem,7.5vw,5rem)] font-extrabold leading-[1.02] tracking-[-0.03em]">
            I&apos;m Deu.
            <br />
            I draw what
            <br />
            <span className="relative inline-block">
              I see.
              <svg
                viewBox="0 0 300 24"
                preserveAspectRatio="none"
                aria-hidden="true"
                className="absolute inset-x-0 -bottom-[0.12em] h-[0.26em] w-full overflow-visible"
              >
                <path
                  className="deu-scribble"
                  d="M4 16C50 4 90 20 140 10s90-10 156 4"
                  fill="none"
                  stroke="#f7c325"
                  strokeWidth="9"
                  strokeLinecap="round"
                  pathLength="1"
                  style={{
                    strokeDasharray: 1,
                    strokeDashoffset: 1,
                    animation: "deu-draw 0.9s 0.5s ease-out forwards",
                  }}
                />
              </svg>
            </span>
          </h1>

          <p className="mb-8 max-w-[44ch] text-[clamp(1.02rem,2.2vw,1.2rem)] leading-relaxed text-[#5d646e]">
            I&apos;m {AGE} years old and I fill sketchbooks one page at a time: mountains,
            streets, faces, and whatever else catches my eye. Come and have a look.
          </p>

          <div className="flex flex-wrap gap-4">
            <a className={btnPrimary} href="#work">
              See my sketches
            </a>
            <a className={btnGhost} href="#contact">
              Say hello
            </a>
          </div>
        </div>

        {/* Polaroid photo */}
        <div id="meet" className="order-1 scroll-mt-24 md:order-2">
          <figure
            style={{ animation: "deu-drop 0.8s cubic-bezier(.2,.9,.3,1.15) both" }}
            className="relative mx-auto w-full max-w-[360px] -rotate-3 rounded-sm bg-white p-3 pb-[4.5rem] shadow-[0_2px_3px_rgba(32,36,42,0.12),0_30px_50px_-26px_rgba(32,36,42,0.6)] transition-transform duration-500 hover:rotate-0"
          >
            {/* washi tape */}
            <span
              aria-hidden="true"
              className="absolute -top-3.5 left-1/2 h-7 w-28 -translate-x-1/2 rotate-2 bg-[#ee8b86]/60"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(135deg, rgba(255,255,255,0.35) 0 6px, transparent 6px 12px)",
              }}
            />
         <img
  src={deuPhoto}
  alt="Portrait of Deu"
  className="aspect-[4/5] w-full rounded-[2px] bg-[#e7e8e4] object-cover object-[center_20%]"
/>
            <figcaption className="absolute inset-x-0 bottom-3.5 text-center font-['Caveat'] text-[1.75rem] font-bold leading-none">
              Deu, age {AGE}
            </figcaption>

            {/* age sticker */}
            <span
              aria-hidden="true"
              className="absolute -right-5 -top-6 grid h-[4.75rem] w-[4.75rem] rotate-[14deg] place-items-center rounded-full border-2 border-[#20242a] bg-[#f7c325] text-center shadow-[3px_3px_0_#20242a]"
            >
              <span className="text-[2rem] font-extrabold leading-[0.9]">
                {AGE}
                <small className="block text-[0.6rem] font-bold tracking-wide">years old</small>
              </span>
            </span>
          </figure>
        </div>
      </section>

      {/* ---------------- GALLERY ---------------- */}
      <section
        id="work"
        className="mx-auto max-w-[1100px] scroll-mt-20 px-[clamp(1rem,5vw,2rem)] py-[clamp(2.5rem,6vw,4.5rem)]"
      >
        <div className="mb-10 flex flex-wrap items-end justify-between gap-x-6 gap-y-2">
          <h2 className="text-[clamp(1.9rem,4.5vw,3rem)] font-extrabold leading-none tracking-[-0.02em]">
            Selected sketches
          </h2>
          <p className="font-['Caveat'] text-[1.5rem] font-bold leading-none text-[#3a6ea5]">
            {count} {count === 1 ? "drawing" : "drawings"} so far. Tap one to zoom in.
          </p>
        </div>

        {count === 0 ? (
          <p className="rounded-xl border-2 border-dashed border-[#20242a]/30 bg-white/70 p-8 text-center text-[#5d646e]">
            No sketches yet. Add images to <code>src/assets/deu</code> and they will appear here.
          </p>
        ) : (
          <div className="columns-1 gap-x-6 sm:columns-2 lg:columns-3">
            {artworks.map((art, i) => (
              <figure
                key={art.id}
                role="button"
                tabIndex={0}
                aria-label={`Open ${art.title}`}
                onClick={() => open(i)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    open(i);
                  }
                }}
                className={`group relative mb-7 block w-full cursor-zoom-in break-inside-avoid bg-white p-2.5 pb-3 shadow-[0_2px_3px_rgba(32,36,42,0.1),0_18px_30px_-22px_rgba(32,36,42,0.6)] transition duration-300 hover:-translate-y-1.5 hover:rotate-0 ${
                  ["-rotate-1", "rotate-1", "rotate-[0.5deg]"][i % 3]
                } ${focusRing}`}
              >
                <div className="overflow-hidden bg-[#e7e8e4]">
                  <img
                    src={art.src}
                    alt={art.title}
                    loading="lazy"
                    className="block w-full transition-transform duration-500 ease-out group-hover:scale-[1.04]"
                  />
                </div>
                <figcaption className="px-1 pt-3">
                  <h3 className="font-['Caveat'] text-[1.45rem] font-bold leading-none">
                    {art.title}
                  </h3>
                  <p className="mt-1 text-[0.8rem] text-[#5d646e]">
                    {art.medium}, {art.year}
                  </p>
                </figcaption>
              </figure>
            ))}
          </div>
        )}
      </section>

      {/* ---------------- ABOUT ---------------- */}
      <section
        id="about"
        className="mx-auto grid max-w-[1100px] scroll-mt-20 items-start gap-[clamp(2rem,5vw,4rem)] px-[clamp(1rem,5vw,2rem)] py-[clamp(2.5rem,6vw,4.5rem)] md:grid-cols-[1.2fr_1fr]"
      >
        <div>
          <h2 className="mb-5 text-[clamp(1.9rem,4.5vw,3rem)] font-extrabold leading-none tracking-[-0.02em]">
            About me
          </h2>
          <p className="mb-4 max-w-[52ch] text-[1.05rem] leading-relaxed text-[#5d646e]">
            I&apos;ve been sketching for as long as I can remember. It started with doodles on
            the back of my notebooks and slowly turned into a proper sketchbook habit.
          </p>
          <p className="max-w-[52ch] text-[1.05rem] leading-relaxed text-[#5d646e]">
            I love drawing from life: a quiet street, a cup of chai, my cat refusing to sit
            still. Every drawing here started as a few rough pencil lines.
          </p>
        </div>

        <ul className="grid gap-4 sm:grid-cols-2 md:grid-cols-1">
          {facts.map((f) => (
            <li
              key={f.label}
              className={`${f.tilt} border-2 border-[#20242a] bg-[#fff8dc] px-5 py-4 shadow-[4px_4px_0_#20242a]`}
            >
              <strong className="block font-['Caveat'] text-[1.45rem] font-bold leading-none text-[#3a6ea5]">
                {f.label}
              </strong>
              <span className="mt-1 block text-[0.97rem]">{f.value}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* ---------------- CONTACT ---------------- */}
      <footer
        id="contact"
        className="mt-10 scroll-mt-20 bg-[#20242a] px-[clamp(1rem,5vw,2rem)] py-[clamp(3rem,8vw,5.5rem)] text-center text-[#f5f6f3]"
      >
        <h2 className="mx-auto mb-4 max-w-[18ch] text-[clamp(2rem,5.5vw,3.4rem)] font-extrabold leading-[1.05] tracking-[-0.02em]">
          Let&apos;s make something on paper.
        </h2>
        <p className="mx-auto mb-8 max-w-[44ch] text-[1.02rem] text-[#f5f6f3]/75">
          Want a sketch of your pet, your street or your favourite mountain? Send a message
          and I&apos;ll start drawing.
        </p>
        <a
          href={`mailto:${EMAIL}`}
          className="inline-block rounded-full bg-[#f7c325] px-8 py-3.5 font-bold text-[#20242a] shadow-[4px_4px_0_#ee8b86] transition duration-200 hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[6px_6px_0_#ee8b86] focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-white"
        >
          {EMAIL}
        </a>
        <p className="mx-auto mt-12 max-w-[44ch] text-xs text-[#f5f6f3]/55">
          © {new Date().getFullYear()} Deu. All artwork belongs to Deu.
        </p>
      </footer>

      {/* ---------------- LIGHTBOX ---------------- */}
      {isOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={current.title}
          onClick={close}
          onTouchStart={(e) => setTouchX(e.touches[0].clientX)}
          onTouchEnd={onTouchEnd}
          className="fixed inset-0 z-[100] flex animate-[deu-fade_0.22s_ease] items-center justify-center gap-[clamp(0.5rem,2vw,1.5rem)] bg-[rgba(20,22,26,0.92)] p-[clamp(1rem,4vw,3rem)] backdrop-blur-sm"
        >
          <button
            type="button"
            autoFocus
            onClick={close}
            aria-label="Close"
            className="absolute right-4 top-4 grid h-11 w-11 place-items-center rounded-full border border-white/25 bg-white/10 pb-1 text-2xl leading-none text-white transition hover:scale-105 hover:bg-white/25 focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-[#f7c325]"
          >
            ×
          </button>

          <button
            type="button"
            aria-label="Previous sketch"
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
            className={lbNav}
          >
            ‹
          </button>

          <figure
            onClick={(e) => e.stopPropagation()}
            className="m-0 flex max-w-[min(92vw,900px)] animate-[deu-pop_0.28s_cubic-bezier(0.2,0.8,0.3,1)] flex-col items-center gap-4"
          >
            <img
              src={current.src}
              alt={current.title}
              className="max-h-[74vh] w-auto max-w-full rounded-sm bg-white object-contain shadow-[0_40px_90px_-25px_rgba(0,0,0,0.85)]"
            />
            <figcaption className="text-center text-[#f5f6f3]">
              <strong className="block font-['Caveat'] text-[1.75rem] font-bold leading-none">
                {current.title}
              </strong>
              <span className="text-sm text-[#f5f6f3]/65">
                {current.medium}, {current.year}
              </span>
            </figcaption>
          </figure>

          <button
            type="button"
            aria-label="Next sketch"
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
            className={lbNav}
          >
            ›
          </button>

          <p className="absolute bottom-4 left-1/2 -translate-x-1/2 text-[0.85rem] tracking-widest text-white/70">
            {activeIndex + 1} / {count}
            <span className="sr-only">. Use the arrow keys or swipe to change sketch.</span>
          </p>
        </div>
      )}
    </div>
  );
}