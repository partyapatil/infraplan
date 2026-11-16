import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { Pencil, Trash2, Plus, Search } from "lucide-react";
import { posterApi } from "../../lib/poster-api";

export default function PostersPage() {
  const [posters, setPosters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [q, setQ] = useState("");

  const load = async () => {
    setPosters(await posterApi.list());
    setLoading(false);
  };
  useEffect(() => { load(); }, []);

  const filtered = useMemo(
    () => posters.filter((p) => p.title.toLowerCase().includes(q.toLowerCase())),
    [posters, q]
  );

  const remove = async (id) => {
    if (!confirm("Delete this poster?")) return;
    await posterApi.remove(id);
    load();
  };

  return (
    <div className="p-6">
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-2xl font-bold">Posters</h1>
        <Link
          to="/posters/new"
          className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
        >
          <Plus size={16} /> New poster
        </Link>
      </div>

      <div className="relative mb-4 max-w-md">
        <Search size={16} className="absolute left-3 top-2.5 text-slate-400" />
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Search posters..."
          className="w-full rounded-lg border border-slate-200 py-2 pl-9 pr-3 text-sm outline-none focus:border-blue-500"
        />
      </div>

      <div className="divide-y rounded-xl border border-slate-200 bg-white">
        {loading && <p className="p-6 text-sm text-slate-500">Loading...</p>}
        {!loading && filtered.length === 0 && (
          <p className="p-6 text-sm text-slate-500">No posters yet.</p>
        )}
        {filtered.map((p) => (
          <div key={p.id} className="flex items-center gap-4 p-4">
            {p.thumbnail ? (
              <img src={p.thumbnail} alt="" className="h-14 w-20 rounded object-cover" />
            ) : (
              <div className="h-14 w-20 rounded bg-slate-100" />
            )}
            <div className="min-w-0 flex-1">
              <div className="truncate font-semibold">{p.title || "Untitled"}</div>
              <span className="mt-1 inline-block rounded-full bg-blue-50 px-2 py-0.5 text-xs text-blue-700">
                {p.template === "project" ? "Project & model studies" : "Model layout & flow"}
              </span>
              <div className="mt-1 text-xs text-slate-500">
                Updated {new Date(p.updatedAt).toLocaleString()}
              </div>
            </div>
            <Link to={`/posters/${p.id}/edit`} className="rounded p-2 text-slate-500 hover:bg-slate-100">
              <Pencil size={16} />
            </Link>
            <button onClick={() => remove(p.id)} className="rounded p-2 text-red-500 hover:bg-red-50">
              <Trash2 size={16} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}