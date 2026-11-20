
import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import {
  Plus,
  Pencil,
  Trash2,
  Search,
  Image as ImageIcon,
  CalendarDays,
  LayoutTemplate,
} from "lucide-react";

import { posterApi } from "../src/admin/admin/lib/posterApi";
import { Confirm, EmptyState, inputCls } from "././admin/admin/AdminUI";

export default function AdminPosters() {
  const [posters, setPosters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [q, setQ] = useState("");
  const [toDelete, setToDelete] = useState(null);
  const [deleting, setDeleting] = useState(false);

  const load = async () => {
    try {
      setPosters(await posterApi.list());
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    load();
  }, []);

  const filtered = useMemo(
    () =>
      posters.filter((p) =>
        (p.title || "").toLowerCase().includes(q.toLowerCase())
      ),
    [posters, q]
  );

  const confirmDelete = async () => {
    setDeleting(true);
    try {
      await posterApi.remove(toDelete.id);
      setToDelete(null);
      await load();
    } finally {
      setDeleting(false);
    }
  };

  return (
    <div className="flex h-full min-h-0 flex-1 flex-col">

      {/* Header */}
      <div className="mb-6 flex shrink-0 flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          {/* <div className="mb-1.5 flex items-center gap-2 text-xs font-medium text-slate-400">
            <LayoutTemplate size={14} />
            <span>Content Management</span>
            <span>/</span>
            <span className="text-blue-600">Posters</span>
          </div> */}

          <h1 className="text-2xl font-bold tracking-tight text-slate-900">
            Posters
          </h1>

          <p className="mt-1 text-sm text-slate-500">
            Manage and organize your poster designs.
          </p>
        </div>

        <Link
          to="/admin/posters/new"
          className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm shadow-blue-100 transition-all hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-md"
        >
          <Plus size={17} />
          New poster
        </Link>
      </div>

      {/* Summary */}
      {/* <div className="mb-5 grid shrink-0 grid-cols-2 gap-3">
        <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm sm:p-5">
          <div className="flex items-center justify-between gap-2">
            <div>
              <p className="text-xs font-medium text-slate-500 sm:text-sm">
                Total posters
              </p>
              <p className="mt-2 text-2xl font-bold text-slate-900">
                {posters.length}
              </p>
            </div>

            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600 sm:h-11 sm:w-11">
              <ImageIcon size={21} />
            </div>
          </div>
        </div>

        <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm sm:p-5">
          <div className="flex items-center justify-between gap-2">
            <div>
              <p className="text-xs font-medium text-slate-500 sm:text-sm">
                Search results
              </p>
              <p className="mt-2 text-2xl font-bold text-slate-900">
                {filtered.length}
              </p>
            </div>

            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-50 text-violet-600 sm:h-11 sm:w-11">
              <Search size={20} />
            </div>
          </div>
        </div>
      </div> */}

      {/* List Section */}
      <div className="flex min-h-0 flex-1 flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">

        {/* Search Header */}
        <div className="flex shrink-0 flex-col gap-3 border-b border-slate-100 p-4 sm:flex-row sm:items-center sm:justify-between sm:px-5">
          <div>
            <h2 className="text-sm font-bold text-slate-800">
              All Posters
            </h2>
            <p className="mt-1 text-xs text-slate-400">
              View, edit or remove your existing posters.
            </p>
          </div>

          <div className="relative w-full sm:max-w-xs">
            <Search
              size={16}
              className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"
            />

            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Search posters..."
              className={`${inputCls} w-full rounded-xl pl-10`}
            />
          </div>
        </div>

        {/* Scrollable List */}
        <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain p-3 sm:p-4">

          {loading ? (
            <div className="space-y-3">
              {[1, 2, 3].map((item) => (
                <div
                  key={item}
                  className="flex animate-pulse items-center gap-4 rounded-xl border border-slate-100 p-4"
                >
                  <div className="h-16 w-24 shrink-0 rounded-lg bg-slate-100" />
                  <div className="flex-1 space-y-2">
                    <div className="h-4 w-1/3 rounded bg-slate-100" />
                    <div className="h-3 w-1/4 rounded bg-slate-100" />
                    <div className="h-3 w-1/5 rounded bg-slate-100" />
                  </div>
                </div>
              ))}
            </div>
          ) : filtered.length === 0 ? (
            q ? (
              <div className="flex flex-col items-center justify-center rounded-xl border border-dashed border-slate-200 bg-slate-50/50 px-4 py-14 text-center">
                <div className="mb-3 flex h-14 w-14 items-center justify-center rounded-xl bg-slate-100 text-slate-400">
                  <Search size={24} />
                </div>
                <h3 className="text-sm font-semibold text-slate-800">
                  No matching posters
                </h3>
                <p className="mt-1 text-xs text-slate-500">
                  Try searching with a different title.
                </p>
              </div>
            ) : (
              <EmptyState text="No posters yet." />
            )
          ) : (
            <div className="space-y-3">
              {filtered.map((p) => (
                <div
                  key={p.id}
                  className="group flex flex-col gap-3 rounded-xl border border-slate-200/80 bg-white p-3 transition-all duration-200 hover:border-blue-200 hover:bg-blue-50/20 hover:shadow-sm sm:flex-row sm:items-center sm:gap-4 sm:p-4"
                >
                  {/* Thumbnail */}
                  <div className="relative h-36 w-full shrink-0 overflow-hidden rounded-lg bg-slate-100 sm:h-[76px] sm:w-28">
                    {p.thumbnail ? (
                      <img
                        src={p.thumbnail}
                        alt={p.title || "Poster"}
                        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    ) : (
                      <div className="flex h-full w-full items-center justify-center text-slate-300">
                        <ImageIcon size={28} strokeWidth={1.5} />
                      </div>
                    )}
                  </div>

                  {/* Poster Details */}
                  <div className="min-w-0 flex-1">
                    <h3 className="truncate text-sm font-bold text-slate-800 transition-colors group-hover:text-blue-700 sm:text-base">
                      {p.title || "Untitled"}
                    </h3>

                    <div className="mt-2">
                      <span
                        className={`inline-flex items-center gap-1.5 rounded-md px-2.5 py-1 text-[11px] font-semibold ${
                          p.template === "project"
                            ? "bg-blue-50 text-blue-700"
                            : "bg-violet-50 text-violet-700"
                        }`}
                      >
                        <LayoutTemplate size={12} />
                        {p.template === "project"
                          ? "Project & model studies"
                          : "Model layout & flow"}
                      </span>
                    </div>

                    <div className="mt-2.5 flex items-center gap-1.5 text-xs text-slate-400">
                      <CalendarDays size={13} />
                      <span>
                        Updated{" "}
                        {p.updatedAt
                          ? new Date(p.updatedAt).toLocaleString()
                          : "Recently"}
                      </span>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex shrink-0 items-center justify-end gap-2 border-t border-slate-100 pt-3 sm:border-0 sm:pt-0">
                    <Link
                      to={`/admin/posters/${p.id}/edit`}
                      title="Edit poster"
                      aria-label="Edit poster"
                      className="inline-flex h-9 items-center justify-center gap-2 rounded-lg border border-slate-200 bg-white px-3 text-xs font-semibold text-slate-600 transition-all hover:border-blue-200 hover:bg-blue-50 hover:text-blue-600 sm:h-10 sm:px-3.5 sm:text-sm"
                    >
                      <Pencil size={15} />
                      Edit
                    </Link>

                    <button
                      onClick={() => setToDelete(p)}
                      title="Delete poster"
                      aria-label="Delete poster"
                      className="inline-flex h-9 items-center justify-center gap-2 rounded-lg border border-slate-200 bg-white px-3 text-xs font-semibold text-slate-500 transition-all hover:border-red-200 hover:bg-red-50 hover:text-red-600 sm:h-10 sm:px-3.5 sm:text-sm"
                    >
                      <Trash2 size={15} />
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {!loading && filtered.length > 0 && (
          <div className="flex shrink-0 items-center justify-between border-t border-slate-100 bg-slate-50/60 px-4 py-3 sm:px-5">
            <p className="text-xs text-slate-500">
              Showing{" "}
              <span className="font-semibold text-slate-700">
                {filtered.length}
              </span>{" "}
              of{" "}
              <span className="font-semibold text-slate-700">
                {posters.length}
              </span>{" "}
              posters
            </p>

            <span className="text-xs font-medium text-slate-400">
              Poster Management
            </span>
          </div>
        )}
      </div>

      {/* Delete Confirmation */}
      {toDelete && (
        <Confirm
          message={`Delete "${toDelete.title || "Untitled"}"? This can't be undone.`}
          loading={deleting}
          onConfirm={confirmDelete}
          onCancel={() => setToDelete(null)}
        />
      )}
    </div>
  );
}
