import { useMemo, useState, useEffect } from "react"; // Added useEffect
import {
  FileText,
  Award,
  Calendar,
  Users,
  BookOpen,
  Search,
  ChevronDown,
  ChevronUp,
  ExternalLink,
  Sparkles,
  Copy,
  Check,
  Loader2, // Added Loader2 for the loading state
} from "lucide-react";

import publicationsHero from "../assets/darker.png";

// API Base URL for assets (PDFs)
const API_BASE_URL = "https://staging.infraplan.co.in:7052";

export default function PublicationsPage() {
  // --- API STATE ---
  const [publications, setPublications] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // --- UI STATE ---
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedYear, setSelectedYear] = useState("all");
  const [selectedConference, setSelectedConference] = useState("all");
  const [expandedId, setExpandedId] = useState(null);
  const [copiedId, setCopiedId] = useState(null);

  /* =========================================================
     FETCH DATA FROM API
  ========================================================= */
  useEffect(() => {
    const fetchPublications = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(
          "https://staging.infraplan.co.in:7052/api/publication"
        );

        if (!response.ok) {
          throw new Error("Failed to fetch publications");
        }

        const data = await response.json();

        // Map API data to match the structure your UI expects
        const formattedData = data.map((item, index) => ({
          srNo: index + 1, // API doesn't provide Sr No, so we generate it
          title: item.title,
          conference: item.conferenceOrJournal, // Map conferenceOrJournal to conference
          year: item.year.toString(), // Ensure year is a string for your filters
          authors: item.authors || [],
          // Prepend the base URL to the pdfPath if it exists
          pdf: item.pdfPath ? `${API_BASE_URL}${item.pdfPath}` : null,
        }));

        setPublications(formattedData);
      } catch (err) {
        console.error("Error fetching publications:", err);
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPublications();
  }, []);

  /* =========================================================
     DERIVED DATA
  ========================================================= */

  const years = useMemo(
    () =>
      [...new Set(publications.map((pub) => pub.year))].sort(
        (a, b) => Number(b) - Number(a)
      ),
    [publications]
  );

  const conferences = useMemo(
    () => [...new Set(publications.map((pub) => pub.conference))],
    [publications]
  );

  const uniqueAuthors = useMemo(
    () => new Set(publications.flatMap((pub) => pub.authors)).size,
    [publications]
  );

  /* =========================================================
     FILTER PUBLICATIONS
  ========================================================= */

  const filteredPublications = useMemo(() => {
    const search = searchTerm.toLowerCase().trim();

    return publications.filter((pub) => {
      const matchesSearch =
        !search ||
        pub.title.toLowerCase().includes(search) ||
        pub.conference.toLowerCase().includes(search) ||
        pub.authors.some((author) =>
          author.toLowerCase().includes(search)
        );

      const matchesYear =
        selectedYear === "all" || pub.year === selectedYear;

      const matchesConference =
        selectedConference === "all" ||
        pub.conference === selectedConference;

      return matchesSearch && matchesYear && matchesConference;
    });
  }, [publications, searchTerm, selectedYear, selectedConference]);

  /* =========================================================
     HANDLERS
  ========================================================= */

  const toggleExpand = (id) => {
    setExpandedId((current) => (current === id ? null : id));
  };

  const clearFilters = () => {
    setSearchTerm("");
    setSelectedYear("all");
    setSelectedConference("all");
  };

  const copyCitation = async (pub) => {
    const citation = `${pub.authors.join(
      ", "
    )}. (${pub.year}). ${pub.title}. ${pub.conference}.`;

    try {
      await navigator.clipboard.writeText(citation);
      setCopiedId(pub.srNo);
      setTimeout(() => {
        setCopiedId(null);
      }, 2000);
    } catch (error) {
      console.error("Failed to copy citation:", error);
    }
  };

  const hasActiveFilters =
    Boolean(searchTerm) ||
    selectedYear !== "all" ||
    selectedConference !== "all";

  return (
    <div className="min-h-screen bg-white font-sans text-slate-800 antialiased">
      {/* Hero Section */}
      <section className="relative overflow-hidden px-4 py-14 sm:px-8 sm:py-20 lg:px-12">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-slate-900"
          style={{
            backgroundImage: `url(${publicationsHero})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/70 via-slate-900/60 to-slate-900/75" />

        {/* Hero Content */}
        <div className="relative z-10 mx-auto max-w-7xl text-center">
          {/* Badge */}
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-wider text-blue-100 shadow-sm backdrop-blur-md sm:mb-6 sm:px-4 sm:py-2 sm:text-xs">
            <BookOpen size={13} className="sm:h-[14px] sm:w-[14px]" />
            Research & Publications
          </div>

          {/* Heading */}
          <h1 className="text-3xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-[3.5rem]">
            Publications of{" "}
            <span className="bg-gradient-to-r from-cyan-200 via-blue-100 to-white bg-clip-text text-transparent">
              Infraplan Hydraulic Laboratory
            </span>
          </h1>

          {/* Description */}
          <p className="mx-auto mt-3 max-w-2xl px-2 text-xs leading-relaxed text-blue-100/90 sm:mt-4 sm:text-base">
            Peer-reviewed papers and conference presentations from our physical
            and mathematical model studies, shared with the global hydraulic
            engineering community.
          </p>

          {/* Hero Stats */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-2 sm:mt-8 sm:gap-3">
            <div className="flex items-center gap-1.5 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-[10px] font-medium text-blue-50 backdrop-blur-md sm:gap-2 sm:px-4 sm:py-2 sm:text-xs">
              <FileText
                size={13}
                className="shrink-0 text-cyan-200 sm:h-[15px] sm:w-[15px]"
              />
              {publications.length} Publications
            </div>

            {years.length > 0 && (
              <div className="flex items-center gap-1.5 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-[10px] font-medium text-blue-50 backdrop-blur-md sm:gap-2 sm:px-4 sm:py-2 sm:text-xs">
                <Calendar
                  size={13}
                  className="shrink-0 text-cyan-200 sm:h-[15px] sm:w-[15px]"
                />
                {Math.min(...years.map(Number))}–
                {Math.max(...years.map(Number))}
              </div>
            )}

            <div className="flex items-center gap-1.5 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-[10px] font-medium text-blue-50 backdrop-blur-md sm:gap-2 sm:px-4 sm:py-2 sm:text-xs">
              <Award
                size={13}
                className="shrink-0 text-cyan-200 sm:h-[15px] sm:w-[15px]"
              />
              {conferences.length} Conferences
            </div>

            <div className="flex items-center gap-1.5 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-[10px] font-medium text-blue-50 backdrop-blur-md sm:gap-2 sm:px-4 sm:py-2 sm:text-xs">
              <Users
                size={13}
                className="shrink-0 text-cyan-200 sm:h-[15px] sm:w-[15px]"
              />
              {uniqueAuthors} Expert Authors
            </div>
          </div>
        </div>
      </section>

      {/* Publications Section */}
      <section className="border-b border-slate-100 bg-white px-4 py-12 sm:px-8 sm:py-16 lg:px-12">
        <div className="mx-auto max-w-7xl">
          {/* Section Header */}
          <div className="mb-8 text-center sm:mb-10">
            <span className="text-[10px] font-semibold uppercase tracking-widest text-blue-700 sm:text-xs">
              Publication Record
            </span>
            <h2 className="mt-2 text-xl font-bold text-slate-900 sm:text-3xl">
              Papers &{" "}
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Presentations
              </span>
            </h2>
            <p className="mx-auto mt-2 max-w-2xl text-xs leading-relaxed text-slate-500 sm:text-sm">
              Explore our research papers and technical presentations published
              through national and international conferences.
            </p>
          </div>

          {/* Filters */}
          <div className="mb-8 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:p-5">
            <div className="flex flex-col gap-3 lg:flex-row">
              {/* Search */}
              <div className="relative flex-1">
                <Search
                  size={17}
                  className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"
                />
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Search by title, author, or conference..."
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 py-2.5 pl-10 pr-4 text-xs text-slate-800 outline-none transition-all placeholder:text-slate-400 focus:border-blue-400 focus:bg-white focus:ring-2 focus:ring-blue-400/20 sm:text-sm"
                />
              </div>

              {/* Year Filter */}
              <div className="relative lg:w-44">
                <select
                  value={selectedYear}
                  onChange={(e) => setSelectedYear(e.target.value)}
                  className="w-full appearance-none rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 pr-10 text-xs text-slate-700 outline-none transition-all focus:border-blue-400 focus:bg-white focus:ring-2 focus:ring-blue-400/20 sm:text-sm"
                >
                  <option value="all">All Years</option>
                  {years.map((year) => (
                    <option key={year} value={year}>
                      {year}
                    </option>
                  ))}
                </select>
                <ChevronDown
                  size={15}
                  className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-slate-400"
                />
              </div>

              {/* Conference Filter */}
              <div className="relative lg:w-64">
                <select
                  value={selectedConference}
                  onChange={(e) => setSelectedConference(e.target.value)}
                  className="w-full appearance-none rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 pr-10 text-xs text-slate-700 outline-none transition-all focus:border-blue-400 focus:bg-white focus:ring-2 focus:ring-blue-400/20 sm:text-sm"
                >
                  <option value="all">All Conferences</option>
                  {conferences.map((conference) => (
                    <option key={conference} value={conference}>
                      {conference.length > 45
                        ? `${conference.substring(0, 45)}...`
                        : conference}
                    </option>
                  ))}
                </select>
                <ChevronDown
                  size={15}
                  className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-slate-400"
                />
              </div>
            </div>

            {/* Filter Result Summary */}
            <div className="mt-3 flex flex-wrap items-center justify-between gap-2 border-t border-slate-100 pt-3">
              <p className="text-xs text-slate-500">
                Showing{" "}
                <span className="font-semibold text-slate-700">
                  {filteredPublications.length}
                </span>{" "}
                of{" "}
                <span className="font-semibold text-slate-700">
                  {publications.length}
                </span>{" "}
                publications
              </p>

              {hasActiveFilters && (
                <button
                  type="button"
                  onClick={clearFilters}
                  className="text-xs font-semibold text-blue-600 transition-colors hover:text-blue-800"
                >
                  Clear Filters
                </button>
              )}
            </div>
          </div>

          {/* LOADING & ERROR STATES */}
          {isLoading ? (
            <div className="flex flex-col items-center justify-center py-20">
              <Loader2 className="h-10 w-10 animate-spin text-blue-600" />
              <p className="mt-4 text-sm font-medium text-slate-500">
                Loading publications...
              </p>
            </div>
          ) : error ? (
            <div className="rounded-2xl border border-red-200 bg-red-50 px-6 py-16 text-center">
              <FileText size={44} className="mx-auto mb-3 text-red-300" />
              <h3 className="text-sm font-semibold text-red-700">
                Failed to load publications
              </h3>
              <p className="mt-1 text-xs text-red-500">{error}</p>
            </div>
          ) : (
            <>
              {/* Desktop / Tablet Table */}
              <div className="hidden overflow-hidden rounded-2xl border border-slate-200 shadow-sm md:block">
                {filteredPublications.length === 0 ? (
                  <div className="px-6 py-16 text-center">
                    <FileText size={44} className="mx-auto mb-3 text-slate-300" />
                    <h3 className="text-sm font-semibold text-slate-700">
                      No publications found
                    </h3>
                    <p className="mt-1 text-xs text-slate-500">
                      Try changing your search or filters.
                    </p>
                  </div>
                ) : (
                  <div className="overflow-x-auto">
                    <table className="w-full min-w-[900px] border-collapse text-left">
                      <thead>
                        <tr className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
                          <th className="w-14 px-4 py-4 text-xs font-semibold uppercase tracking-wider">
                            Sr. No
                          </th>
                          <th className="w-56 px-4 py-4 text-xs font-semibold uppercase tracking-wider">
                            Conference
                          </th>
                          <th className="w-24 px-4 py-4 text-xs font-semibold uppercase tracking-wider">
                            Year
                          </th>
                          <th className="px-4 py-4 text-xs font-semibold uppercase tracking-wider">
                            Publication
                          </th>
                          <th className="w-64 px-4 py-4 text-xs font-semibold uppercase tracking-wider">
                            Authors / Speakers
                          </th>
                          <th className="w-24 px-4 py-4 text-xs font-semibold uppercase tracking-wider">
                            Citation
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {filteredPublications.map((pub, idx) => (
                          <tr
                            key={pub.srNo}
                            className={`border-t border-slate-100 transition-colors hover:bg-blue-50/40 ${
                              idx % 2 === 0 ? "bg-white" : "bg-slate-50/50"
                            }`}
                          >
                            <td className="px-4 py-4 align-top text-sm font-semibold text-slate-500">
                              {pub.srNo}
                            </td>
                            <td className="px-4 py-4 align-top text-sm font-medium leading-relaxed text-blue-700">
                              {pub.conference}
                            </td>
                            <td className="px-4 py-4 align-top">
                              <span className="inline-flex items-center rounded-full bg-indigo-50 px-2.5 py-1 text-xs font-semibold text-indigo-700">
                                {pub.year}
                              </span>
                            </td>
                            <td className="px-4 py-4 align-top text-sm leading-relaxed">
                              {pub.pdf ? (
                                <a
                                  href={pub.pdf}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="font-medium text-slate-800 transition-colors hover:text-blue-600 hover:underline"
                                >
                                  {pub.title}
                                </a>
                              ) : (
                                <span className="text-slate-800">
                                  {pub.title}
                                </span>
                              )}
                            </td>
                            <td className="px-4 py-4 align-top text-xs leading-relaxed text-slate-600">
                              {pub.authors.join(", ")}
                            </td>
                            <td className="px-4 py-4 align-top">
                              <button
                                type="button"
                                onClick={() => copyCitation(pub)}
                                title="Copy citation"
                                className="inline-flex items-center justify-center rounded-lg border border-slate-200 bg-white p-2 text-slate-500 transition-all hover:border-blue-200 hover:bg-blue-50 hover:text-blue-600"
                              >
                                {copiedId === pub.srNo ? (
                                  <Check size={15} className="text-emerald-500" />
                                ) : (
                                  <Copy size={15} />
                                )}
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>

              {/* Mobile — Expandable Cards */}
              <div className="space-y-4 md:hidden">
                {filteredPublications.length === 0 ? (
                  <div className="rounded-2xl border border-slate-200 bg-white px-5 py-12 text-center shadow-sm">
                    <FileText size={42} className="mx-auto mb-3 text-slate-300" />
                    <h3 className="text-sm font-semibold text-slate-700">
                      No publications found
                    </h3>
                    <p className="mt-1 text-xs text-slate-500">
                      Try changing your search or filters.
                    </p>
                  </div>
                ) : (
                  filteredPublications.map((pub) => {
                    const isExpanded = expandedId === pub.srNo;

                    return (
                      <div
                        key={pub.srNo}
                        className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all hover:shadow-md"
                      >
                        <div className="absolute bottom-0 left-0 top-0 w-1 rounded-l-2xl bg-gradient-to-b from-blue-600 to-indigo-600" />

                        {/* Card Header */}
                        <button
                          type="button"
                          aria-label={
                            isExpanded
                              ? "Collapse publication details"
                              : "Expand publication details"
                          }
                          aria-expanded={isExpanded}
                          onClick={() => toggleExpand(pub.srNo)}
                          className="w-full py-4 pl-5 pr-4 text-left transition-colors hover:bg-slate-50 sm:py-5 sm:pl-6 sm:pr-5"
                        >
                          <div className="flex items-start gap-3">
                            <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-blue-600 text-xs font-bold text-white">
                              {pub.srNo}
                            </div>

                            <div className="min-w-0 flex-1">
                              <div className="mb-2 flex flex-wrap items-center gap-2">
                                <span className="inline-flex items-center rounded-full bg-indigo-50 px-2.5 py-1 text-[10px] font-semibold text-indigo-700">
                                  {pub.year}
                                </span>
                                <span className="text-[10px] text-slate-300">
                                  •
                                </span>
                                <span className="text-[10px] font-medium text-blue-700">
                                  {pub.conference.length > 30
                                    ? `${pub.conference.substring(0, 30)}...`
                                    : pub.conference}
                                </span>
                              </div>

                              <h3 className="text-sm font-bold leading-snug text-slate-900">
                                {pub.title}
                              </h3>

                              <div className="mt-2 flex items-start gap-2">
                                <Users
                                  size={13}
                                  className="mt-0.5 shrink-0 text-slate-400"
                                />
                                <p className="text-[11px] leading-relaxed text-slate-500">
                                  {pub.authors.join(", ")}
                                </p>
                              </div>
                            </div>

                            <div className="shrink-0 pt-1">
                              {isExpanded ? (
                                <ChevronUp size={18} className="text-slate-400" />
                              ) : (
                                <ChevronDown
                                  size={18}
                                  className="text-slate-400"
                                />
                              )}
                            </div>
                          </div>
                        </button>

                        {/* Expanded Details */}
                        {isExpanded && (
                          <div className="animate-expand border-t border-slate-100 bg-slate-50/60 px-5 pb-5 pt-4 sm:px-6">
                            <div className="space-y-4">
                              <div>
                                <p className="text-[10px] font-semibold uppercase tracking-wider text-slate-400">
                                  Conference
                                </p>
                                <p className="mt-1 text-xs leading-relaxed text-slate-700">
                                  {pub.conference}
                                </p>
                              </div>

                              <div>
                                <p className="text-[10px] font-semibold uppercase tracking-wider text-slate-400">
                                  Year
                                </p>
                                <p className="mt-1 text-xs text-slate-700">
                                  {pub.year}
                                </p>
                              </div>

                              <div>
                                <p className="text-[10px] font-semibold uppercase tracking-wider text-slate-400">
                                  Publication
                                </p>
                                <p className="mt-1 text-xs leading-relaxed text-slate-700">
                                  {pub.title}
                                </p>
                              </div>

                              <div>
                                <p className="text-[10px] font-semibold uppercase tracking-wider text-slate-400">
                                  Authors / Speakers
                                </p>
                                <div className="mt-2 flex flex-wrap gap-1.5">
                                  {pub.authors.map((author, index) => (
                                    <span
                                      key={index}
                                      className="rounded-full border border-slate-200 bg-white px-2.5 py-1 text-[10px] text-slate-700"
                                    >
                                      {author}
                                    </span>
                                  ))}
                                </div>
                              </div>

                              <div className="border-t border-slate-200 pt-3">
                                <button
                                  type="button"
                                  onClick={() => copyCitation(pub)}
                                  className="inline-flex items-center gap-1.5 text-[10px] font-medium text-blue-600 transition-colors hover:text-blue-800"
                                >
                                  {copiedId === pub.srNo ? (
                                    <>
                                      <Check
                                        size={14}
                                        className="text-emerald-500"
                                      />
                                      Copied!
                                    </>
                                  ) : (
                                    <>
                                      <Copy size={14} />
                                      Copy Citation
                                    </>
                                  )}
                                </button>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    );
                  })
                )}
              </div>
            </>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-700 via-blue-800 to-indigo-900 px-4 py-14 sm:px-8 sm:py-16 lg:px-12">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -left-32 -top-32 h-[300px] w-[300px] rounded-full bg-blue-400/20 blur-3xl sm:h-[430px] sm:w-[430px]" />
          <div className="absolute -right-40 top-1/4 h-[300px] w-[300px] rounded-full bg-indigo-400/20 blur-3xl sm:h-[450px] sm:w-[450px]" />
          <div className="absolute bottom-0 left-1/3 h-[200px] w-[200px] rounded-full bg-cyan-400/10 blur-3xl sm:h-[300px] sm:w-[300px]" />
        </div>

        <div className="relative z-10 mx-auto max-w-3xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-blue-100 backdrop-blur-md">
            <Sparkles size={14} />
            Get In Touch
          </div>

          <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
            Interested in Our Research?
          </h2>

          <p className="mx-auto mt-3 max-w-xl px-2 text-xs leading-relaxed text-blue-100/90 sm:text-sm">
            Reach out to discuss our hydraulic model studies, collaborate on
            research, or request copies of our published papers.
          </p>

          <button
            type="button"
            className="group mt-6 inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 text-xs font-semibold text-blue-700 shadow-xl shadow-blue-950/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl sm:px-8 sm:py-3.5 sm:text-sm"
          >
            Get In Touch
            <ExternalLink
              size={15}
              className="transition-transform duration-300 group-hover:translate-x-0.5"
            />
          </button>
        </div>
      </section>

      {/* Custom Animation Styles */}
      <style>{`
        @keyframes expand {
          from {
            opacity: 0;
            transform: translateY(-8px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-expand {
          animation: expand 0.25s ease-out;
        }

        @media (prefers-reduced-motion: reduce) {
          .animate-expand {
            animation: none;
          }
        }
      `}</style>
    </div>
  );
}