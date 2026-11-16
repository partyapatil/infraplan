import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { Plus, Pencil, Trash2, Search } from "lucide-react";
import { posterApi } from "../src/admin/admin/lib/posterApi";
import { Confirm, EmptyState, inputCls } from "././admin/admin/AdminUI";

export default function AdminPosters() {
  const [posters, setPosters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [q, setQ] = useState("");
  const [toDelete, setToDelete] = useState(null);
  const [deleting, setDeleting] = useState(false);

  const load = async () => {
    setPosters(await posterApi.list());
    setLoading(false);
  };
  useEffect(() => {
    load();
  }, []);

  const filtered = useMemo(
    () => posters.filter((p) => (p.title || "").toLowerCase().includes(q.toLowerCase())),
    [posters, q]
  );

  const confirmDelete = async () => {
    setDeleting(true);
    await posterApi.remove(toDelete.id);
    setDeleting(false);
    setToDelete(null);
    load();
  };

  return (
    <div className="flex h-full min-h-0 flex-1 flex-col">
      <div className="mb-4 flex shrink-0 items-center justify-between gap-3">
        <h1 className="text-2xl font-bold text-slate-900">Posters</h1>
        <Link
          to="/admin/posters/new"
          className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-700"
        >
          <Plus size={16} /> New poster
        </Link>
      </div>

      <div className="relative mb-4 max-w-md shrink-0">
        <Search size={16} className="absolute left-3 top-2.5 text-slate-400" />
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Search posters..."
          className={`${inputCls} pl-9`}
        />
      </div>

      <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain pb-4">
        {loading ? (
          <p className="p-6 text-sm text-slate-500">Loading...</p>
        ) : filtered.length === 0 ? (
          <EmptyState text="No posters yet." />
        ) : (
          <div className="divide-y rounded-xl border border-slate-200 bg-white">
            {filtered.map((p) => (
              <div key={p.id} className="flex items-center gap-3 p-3 sm:gap-4 sm:p-4">
                {p.thumbnail ? (
                  <img src={p.thumbnail} alt="" className="h-14 w-20 shrink-0 rounded object-cover" />
                ) : (
                  <div className="h-14 w-20 shrink-0 rounded bg-slate-100" />
                )}
                <div className="min-w-0 flex-1">
                  <div className="truncate font-semibold text-slate-900">{p.title || "Untitled"}</div>
                  <span className="mt-1 inline-block rounded-full bg-blue-50 px-2 py-0.5 text-xs text-blue-700">
                    {p.template === "project" ? "Project & model studies" : "Model layout & flow"}
                  </span>
                  <div className="mt-1 text-xs text-slate-500">
                    Updated {new Date(p.updatedAt).toLocaleString()}
                  </div>
                </div>
                <Link
                  to={`/admin/posters/${p.id}/edit`}
                  className="rounded p-2 text-slate-500 hover:bg-slate-100"
                  aria-label="Edit"
                >
                  <Pencil size={16} />
                </Link>
                <button
                  onClick={() => setToDelete(p)}
                  className="rounded p-2 text-red-500 hover:bg-red-50"
                  aria-label="Delete"
                >
                  <Trash2 size={16} />
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

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