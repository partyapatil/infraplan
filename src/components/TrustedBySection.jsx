import React from "react";

export default function TrustedBySection() {
  /**
   * Automatically load all partner logos from:
   * src/assets/partners/
   *
   * Supports:
   * png, jpg, jpeg, webp, gif, svg
   */
  const partnerImages = import.meta.glob(
    "/src/assets/partners/*.{png,jpg,jpeg,webp,gif,svg}",
    {
      eager: true,
      query: "?url",
      import: "default",
    }
  );

  const partners = Object.entries(partnerImages).map(([path, image]) => ({
    name:
      path
        .split("/")
        .pop()
        ?.replace(/\.[^/.]+$/, "")
        .replace(/[-_]/g, " ") || "Partner",
    image: image,
  }));

  // Duplicate the logos to create a seamless infinite marquee
  const marqueePartners = [...partners, ...partners, ...partners];

 return (
    <section className="relative w-full overflow-hidden border-y border-slate-200/60 bg-white py-16">
      {/* =========================================================
          SUBTLE BACKGROUND
      ========================================================== */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-72 w-[700px] -translate-x-1/2 rounded-full bg-blue-500/[0.035] blur-3xl" />

        <div className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-cyan-500/[0.025] blur-3xl" />

        <div className="absolute right-0 top-1/3 h-64 w-64 rounded-full bg-indigo-500/[0.025] blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-8xl px-5 sm:px-8">

        {/* =========================================================
            HEADER
        ========================================================== */}
        <div className="mb-12 text-center">
          {/* Badge */}
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-200/40 bg-blue-50/70 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-blue-700">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-600 opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-600" />
            </span>

            Our Partners
          </div>

          {/* Heading */}
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Trusted by Industry{" "}
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Leaders
            </span>
          </h2>

          {/* Description */}
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-slate-500 sm:text-base">
            Partnering with leading organizations to deliver sustainable water
            infrastructure solutions across the globe.
          </p>
        </div>

        {/* =========================================================
            LOGO SHOWCASE
        ========================================================== */}
        <div className="relative">

          {/* Subtle top/bottom lines */}
          <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

          {/* Logo Marquee */}
          <div className="overflow-hidden py-5">

            <div className="flex w-max items-center gap-6 animate-marquee sm:gap-8 md:gap-10">
              {marqueePartners.map((partner, index) => (
                <div
                  key={`${partner.name}-${index}`}
                  className="
                    group
                    relative
                    flex
                    h-28
                    w-52
                    shrink-0
                    items-center
                    justify-center
                    rounded-2xl
                    border
                    border-slate-200/80
                    bg-white
                    px-6
                    py-5
                    shadow-[0_2px_12px_rgba(15,23,42,0.04)]
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:border-blue-200
                    hover:shadow-[0_8px_25px_rgba(37,99,235,0.10)]
                    sm:h-32
                    sm:w-56
                  "
                >
                  {/* Very subtle hover glow */}
                  <div
                    className="
                      pointer-events-none
                      absolute
                      inset-0
                      rounded-2xl
                      bg-blue-500/[0.02]
                      opacity-0
                      transition-opacity
                      duration-300
                      group-hover:opacity-100
                    "
                  />

                  <img
                    src={partner.image}
                    alt={partner.name}
                    className="
                      relative
                      z-10
                      max-h-20
                      max-w-full
                      object-contain
                      transition-transform
                      duration-300
                      group-hover:scale-105
                    "
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* =========================================================
            BOTTOM TEXT
        ========================================================== */}
        {/* <div className="mt-9 text-center">
          <div className="inline-flex items-center gap-2 text-xs font-medium text-slate-400">
            <span className="h-px w-8 bg-slate-200" />

            Trusted by organizations across India and around the world

            <span className="h-px w-8 bg-slate-200" />
          </div>
        </div> */}
      </div>

      {/* =========================================================
          MARQUEE ANIMATION
      ========================================================== */}
      <style>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }

          100% {
            transform: translateX(-33.333333%);
          }
        }

        .animate-marquee {
          animation: marquee 45s linear infinite;
          will-change: transform;
        }

        .animate-marquee:hover {
          animation-play-state: paused;
        }

        @media (prefers-reduced-motion: reduce) {
          .animate-marquee {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
}