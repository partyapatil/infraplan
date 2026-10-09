"use client";

import { useState } from "react";
import { MapPin, ExternalLink, Hand } from "lucide-react";

const MAP_URL = "https://sigmainfraplan77.github.io/infraplan-webmap/";

export default function ProjectMapSection() {
  // On touch screens the iframe traps page scrolling, so require a tap first
  const [interactive, setInteractive] = useState(false);

  return (
    <section className="w-full bg-gradient-to-b from-slate-50 to-white py-10 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-6 flex flex-col items-start justify-between gap-4 sm:mb-10 sm:flex-row sm:items-end">
          <div className="max-w-2xl">
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-blue-700">
              <MapPin size={14} />
              Interactive Map
            </div>

            <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl lg:text-4xl">
              Project Locations
            </h2>

            <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">
              Explore our infrastructure projects across the region. Pan, zoom,
              and click markers to learn more about each site.
            </p>
          </div>

          <a
            href={MAP_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex w-full shrink-0 items-center justify-center gap-2 rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 shadow-sm transition hover:border-blue-300 hover:bg-blue-50 hover:text-blue-700 sm:w-auto"
          >
            Open in new tab
            <ExternalLink size={15} />
          </a>
        </div>

        {/* Map frame: full-bleed on mobile, rounded card from sm up */}
        <div className="relative -mx-4 overflow-hidden border-y border-slate-200 bg-slate-100 shadow-xl ring-1 ring-slate-900/5 sm:mx-0 sm:rounded-2xl sm:border">
          <div className="h-[80svh] min-h-[520px] w-full sm:h-[600px] lg:h-[calc(100vh-14rem)] lg:min-h-[560px] lg:max-h-[720px]">
            <iframe
              src={MAP_URL}
              title="InfraPlan Project Locations"
              className="h-full w-full border-0"
              loading="lazy"
              allowFullScreen
            />
          </div>

          {/* Tap-to-interact overlay (mobile/tablet only) */}
          {!interactive && (
            <button
              type="button"
              onClick={() => setInteractive(true)}
              aria-label="Tap to interact with the map"
              className="absolute inset-0 z-10 flex items-end justify-center bg-slate-900/10 pb-6 lg:hidden"
            >
              <span className="inline-flex items-center gap-2 rounded-full bg-slate-900/85 px-4 py-2 text-xs font-semibold text-white shadow-lg backdrop-blur">
                <Hand size={14} />
                Tap to interact with map
              </span>
            </button>
          )}
        </div>

        {/* Footer hint */}
        <p className="mt-4 hidden text-center text-xs text-slate-500 sm:block sm:text-sm">
          Tip: use the scroll wheel to zoom and drag to pan across the map.
        </p>
        <p className="mt-4 text-center text-xs text-slate-500 sm:hidden">
          Tip: pinch to zoom and drag to pan. Scroll the page past the map to continue.
        </p>
      </div>
    </section>
  );
}