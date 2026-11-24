import { useEffect, useRef } from "react";

export default function TrustedBySection() {
  const partnerImages = import.meta.glob(
    "/src/assets/logos/*.{png,jpg,jpeg,webp,gif,svg}",
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
    image,
  }));

  const trackRef = useRef(null);
  const firstSetRef = useRef(null);
  const isPausedRef = useRef(false);

  // =========================================================
  // SHARP PIXEL-ROUNDED MARQUEE ANIMATION
  // =========================================================
  useEffect(() => {
    const track = trackRef.current;
    const firstSet = firstSetRef.current;

    if (!track || !firstSet) return;

    let offset = 0;
    let setWidth = 0;
    let previousTime = 0;
    let animationFrame;

    const speed = 150; // pixels per second

    const updateWidth = () => {
      setWidth = firstSet.offsetWidth;
    };

    updateWidth();

    const resizeObserver = new ResizeObserver(updateWidth);
    resizeObserver.observe(firstSet);

    const animate = (time) => {
      if (!previousTime) previousTime = time;

      const delta = Math.min((time - previousTime) / 1000, 0.05);
      previousTime = time;

      if (!isPausedRef.current && setWidth > 0) {
        offset += speed * delta;

        // Seamless loop
        if (offset >= setWidth) {
          offset %= setWidth;
        }

        // Round movement to whole pixels
        const roundedOffset = Math.round(offset);

        track.style.transform = `translateX(-${roundedOffset}px)`;
      }

      animationFrame = requestAnimationFrame(animate);
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrame);
      resizeObserver.disconnect();
    };
  }, []);

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
        </div>

        {/* =========================================================
            LOGO SHOWCASE
        ========================================================== */}
        <div className="relative">

          {/* Top border */}
          <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

          {/* Bottom border */}
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

          {/* =========================================================
              LOGO MARQUEE
          ========================================================== */}
          <div
            className="overflow-hidden py-5"
            onMouseEnter={() => {
              isPausedRef.current = true;
            }}
            onMouseLeave={() => {
              isPausedRef.current = false;
            }}
          >
            <div
              ref={trackRef}
              className="flex w-max items-center"
              style={{
                transform: "translateX(0px)",
                willChange: "transform",
              }}
            >

              {/* =====================================================
                  FIRST SET OF LOGOS
              ====================================================== */}
              <div
                ref={firstSetRef}
                className="flex w-max items-center"
              >
                {partners.map((partner, index) => (
                  <div
                    key={`${partner.name}-${index}`}
                    className="
                      group
                      relative
                      mr-6
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
                      transition-[border-color,box-shadow]
                      duration-300
                      hover:border-blue-200
                      hover:shadow-[0_8px_25px_rgba(37,99,235,0.10)]
                      sm:mr-8
                      sm:h-32
                      sm:w-56
                      md:mr-10
                    "
                  >
                    {/* Hover glow */}
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

                    {/* Logo */}
                    <img
                      src={partner.image}
                      alt={partner.name}
                      className="relative z-10 max-h-[120px] max-w-full object-contain"
                      loading="eager"
                      decoding="sync"
                      draggable={false}
                    />
                  </div>
                ))}
              </div>

              {/* =====================================================
                  DUPLICATE SET FOR INFINITE LOOP
              ====================================================== */}
              <div
                className="flex w-max items-center"
                aria-hidden="true"
              >
                {partners.map((partner, index) => (
                  <div
                    key={`${partner.name}-duplicate-${index}`}
                    className="
                      group
                      relative
                      mr-6
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
                      transition-[border-color,box-shadow]
                      duration-300
                      sm:mr-8
                      sm:h-32
                      sm:w-56
                      md:mr-10
                    "
                  >
                    <img
                      src={partner.image}
                      alt=""
                      className="relative z-10 max-h-[120px] max-w-full object-contain"
                      loading="eager"
                      decoding="sync"
                      draggable={false}
                    />
                  </div>
                ))}
              </div>

            </div>
          </div>
        </div>
      </div>

    </section>
  );
}