import { useEffect, useMemo, useState } from "react";
import { Plus, Pencil, Trash2, Search, FileText, X, Users, BookOpen, RotateCw } from "lucide-react";
import { publicationsApi, imageUrl } from "./lib/adminApi";
import { Button, Confirm, EmptyState, Modal, inputCls } from "./AdminUI";
import PublicationForm from "./PublicationForm";

const iconBtn =
  "rounded-lg p-2 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500";

export default function AdminPublications() {
  const [items, setItems] = useState(null);
  const [q, setQ] = useState("");
  const [year, setYear] = useState("all");
  const [editing, setEditing] = useState(null);
  const [deleting, setDeleting] = useState(null);
  const [deleteError, setDeleteError] = useState("");
  const [loadError, setLoadError] = useState("");
  const [busy, setBusy] = useState(false);

  const load = async () => {
    try {
      setLoadError("");
      const list = await publicationsApi.list();
      setItems([...list].sort((a, b) => (Number(b.year) || 0) - (Number(a.year) || 0)));
    } catch (err) {
      setLoadError(err.message);
      // keep any list already on screen if a refresh fails
      setItems((prev) => prev ?? []);
    }
  };
  useEffect(() => { load(); }, []);

  const years = useMemo(
    () => [...new Set((items ?? []).map((p) => String(p.year || "Undated")))],
    [items]
  );
  // fall back to "all" if the selected year no longer exists (e.g. after a delete)
  const activeYear = years.includes(year) ? year : "all";

  const filtered = useMemo(() => {
    const s = q.trim().toLowerCase();
    return (items ?? []).filter(
      (p) =>
        (activeYear === "all" || String(p.year || "Undated") === activeYear) &&
        ((p.title ?? "").toLowerCase().includes(s) ||
          (p.conferenceOrJournal ?? "").toLowerCase().includes(s) ||
          (p.authors ?? []).some((a) => a.toLowerCase().includes(s)))
    );
  }, [items, q, activeYear]);

  const grouped = useMemo(() => {
    const map = new Map();
    filtered.forEach((p) => {
      const key = String(p.year || "Undated");
      if (!map.has(key)) map.set(key, []);
      map.get(key).push(p);
    });
    return [...map];
  }, [filtered]);

  const save = async (pub) => {
    await publicationsApi.save(pub); // errors bubble up to the form
    setEditing(null);
    load();
  };

  const remove = async () => {
    setBusy(true);
    setDeleteError("");
    try {
      await publicationsApi.remove(deleting.id);
      setDeleting(null);
      load();
    } catch (err) {
      setDeleteError(err.message);
    } finally {
      setBusy(false);
    }
  };

  const clearFilters = () => {
    setQ("");
    setYear("all");
  };

  return (
    // Adjust 4rem to match your admin header + page padding
    <div className="mx-auto flex h-full max-h-[calc(100dvh-4rem)] min-h-0 w-full max-w-5xl flex-col">
      {/* Fixed top area */}
      <div className="shrink-0">
        <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
          <div>
            <h1 className="text-2xl font-bold tracking-tight text-slate-900">Publications</h1>
            <p className="mt-1 text-sm text-slate-500" aria-live="polite">
              {items === null
                ? "Fetching publications..."
                : `Showing ${filtered.length} of ${items.length}`}
            </p>
          </div>
          <Button onClick={() => setEditing({})}><Plus size={16} /> Add publication</Button>
        </div>

        {loadError && (
          <div role="alert" className="mb-4 flex items-center justify-between gap-3 rounded-lg border border-red-200 bg-red-50 p-3 text-sm text-red-700">
            <span>Failed to load publications: {loadError}</span>
            <button onClick={load} className="flex shrink-0 items-center gap-1 font-semibold hover:underline">
              <RotateCw size={14} /> Retry
            </button>
          </div>
        )}

        <div className="relative mb-3">
          <Search size={15} className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search by title, conference or author..."
            aria-label="Search publications"
            className={`${inputCls} pl-9 pr-10`}
          />
          {q && (
            <button
              onClick={() => setQ("")}
              className={`${iconBtn} absolute right-1 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-700`}
              aria-label="Clear search"
            >
              <X size={14} />
            </button>
          )}
        </div>

        {years.length > 1 && (
          <div className="mb-3 flex flex-wrap gap-2">
            {["all", ...years].map((y) => (
              <button
                key={y}
                onClick={() => setYear(y)}
                aria-pressed={activeYear === y}
                className={`rounded-full border px-3 py-1 text-xs font-medium transition-colors ${
                  activeYear === y
                    ? "border-blue-600 bg-blue-600 text-white"
                    : "border-slate-200 bg-white text-slate-600 hover:border-blue-300 hover:text-blue-700"
                }`}
              >
                {y === "all" ? "All years" : y}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Scrollable list */}
      <div className="min-h-0 flex-1 overflow-y-auto pb-4 pr-2 [scrollbar-color:#cbd5e1_transparent] [scrollbar-width:thin]">
        {items === null ? (
          <div className="space-y-3" aria-label="Loading">
            {[0, 1, 2, 3].map((i) => (
              <div key={i} className="h-24 animate-pulse rounded-xl bg-slate-100" />
            ))}
          </div>
        ) : filtered.length === 0 ? (
          items.length ? (
            <div className="space-y-3 text-center">
              <EmptyState text="No publications match your filters." />
              <button onClick={clearFilters} className="text-sm font-semibold text-blue-600 hover:underline">
                Clear filters
              </button>
            </div>
          ) : (
            !loadError && <EmptyState text="No publications yet. Click “Add publication” to create one." />
          )
        ) : (
          grouped.map(([groupYear, pubs]) => (
            <section key={groupYear} className="mb-5 last:mb-0">
              <h2 className="sticky top-0 z-10 flex items-center gap-3 bg-white/90 py-2 text-sm font-bold text-slate-700 backdrop-blur">
                {groupYear}
                <span className="rounded-full bg-slate-100 px-2 py-0.5 text-xs font-medium text-slate-500">{pubs.length}</span>
                <span className="h-px flex-1 bg-slate-200" />
              </h2>

              <ul className="mt-1 space-y-3">
                {pubs.map((p) => (
                  <li
                    key={p.id}
                    className="flex flex-col gap-3 rounded-xl border border-slate-200 bg-white p-4 transition hover:border-blue-300 hover:shadow-md sm:flex-row sm:items-start"
                  >
                    <div className="min-w-0 flex-1">
                      <p className="text-sm font-semibold leading-snug text-slate-900">{p.title}</p>
                      {p.conferenceOrJournal && (
                        <p className="mt-2 flex items-start gap-2 text-xs text-slate-600">
                          <BookOpen size={14} className="shrink-0 text-blue-600" />
                          <span className="line-clamp-2">{p.conferenceOrJournal}</span>
                        </p>
                      )}
                      {p.authors?.length > 0 && (
                        <p className="mt-1.5 flex items-start gap-2 text-xs text-slate-500">
                          <Users size={14} className="shrink-0 text-slate-400" />
                          <span className="line-clamp-2">{p.authors.join(", ")}</span>
                        </p>
                      )}
                    </div>

                    <div className="flex shrink-0 items-center justify-end gap-1">
                      {p.pdfPath && (
                        <a
                          href={imageUrl(p.pdfPath)}
                          target="_blank"
                          rel="noreferrer"
                          className="mr-1 flex items-center gap-1.5 rounded-lg bg-blue-50 px-3 py-2 text-xs font-semibold text-blue-700 hover:bg-blue-100"
                          title="Open PDF"
                        >
                          <FileText size={14} /> PDF
                        </a>
                      )}
                      <button
                        onClick={() => setEditing(p)}
                        className={`${iconBtn} text-slate-500 hover:bg-slate-100 hover:text-slate-900`}
                        aria-label={`Edit ${p.title}`}
                        title="Edit"
                      >
                        <Pencil size={16} />
                      </button>
                      <button
                        onClick={() => { setDeleteError(""); setDeleting(p); }}
                        className={`${iconBtn} text-slate-400 hover:bg-red-50 hover:text-red-600`}
                        aria-label={`Delete ${p.title}`}
                        title="Delete"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
            </section>
          ))
        )}
      </div>

      {editing && (
        <Modal title={editing.id ? "Edit publication" : "Add publication"} onClose={() => setEditing(null)}>
          <PublicationForm initial={editing.id ? editing : null} onSave={save} onCancel={() => setEditing(null)} />
        </Modal>
      )}
      {deleting && (
        <Confirm
          message={`Delete “${deleting.title}”? This cannot be undone.${deleteError ? `\n\nError: ${deleteError}` : ""}`}
          loading={busy}
          onConfirm={remove}
          onCancel={() => setDeleting(null)}
        />
      )}
    </div>
  );
}