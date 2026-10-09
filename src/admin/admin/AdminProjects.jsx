import { useEffect, useMemo, useState } from "react";
import { Plus, Pencil, Trash2, Search } from "lucide-react";
import { projectsApi, categoriesApi, imageUrl } from "./lib/adminApi";
import { Button, Confirm, EmptyState, Modal, inputCls } from "./AdminUI";
import ProjectForm from "./ProjectForm";

export default function AdminProjects() {
  const [items, setItems] = useState(null);
  const [categories, setCategories] = useState([]);
  const [q, setQ] = useState("");
  const [cat, setCat] = useState("all");
  const [editing, setEditing] = useState(null); // null | {} (new) | project
  const [deleting, setDeleting] = useState(null);
  const [deleteError, setDeleteError] = useState("");
  const [loadError, setLoadError] = useState("");
  const [busy, setBusy] = useState(false);

  const load = async () => {
    try {
      setLoadError("");
      setItems(await projectsApi.list());
    } catch (err) {
      setLoadError(err.message);
      setItems([]);
    }
  };

  useEffect(() => {
    load();
    categoriesApi.options().then(setCategories).catch(() => {});
  }, []);

  const filtered = useMemo(
    () =>
      (items ?? []).filter(
        (p) =>
          (cat === "all" || p.categoryId === cat) &&
          (p.title ?? "").toLowerCase().includes(q.toLowerCase())
      ),
    [items, q, cat]
  );

  const save = async (project) => {
    await projectsApi.save(project); // errors bubble up to the form
    setEditing(null);
    load();
  };

  const remove = async () => {
    setBusy(true);
    setDeleteError("");
    try {
      await projectsApi.remove(deleting.id);
      setDeleting(null);
      load();
    } catch (err) {
      setDeleteError(err.message);
    } finally {
      setBusy(false);
    }
  };

  return (
    <div className="mx-auto flex h-full min-h-0 max-w-5xl flex-col">
      {/* ================= HEADER ================= */}
      <div className="mb-6 flex shrink-0 flex-wrap items-center justify-between gap-3">
        <h1 className="text-2xl font-bold text-slate-900">Projects</h1>
        <Button onClick={() => setEditing({})}>
          <Plus size={16} /> Add project
        </Button>
      </div>

      {loadError && (
        <p className="mb-4 shrink-0 rounded-lg bg-red-50 p-3 text-sm text-red-600">
          Failed to load projects: {loadError}
        </p>
      )}

      {/* ================= FILTERS ================= */}
      <div className="mb-4 flex shrink-0 flex-col gap-3 sm:flex-row">
        <div className="relative flex-1">
          <Search
            size={15}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
          />
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search projects..."
            className={`${inputCls} pl-9`}
          />
        </div>
        <select
          value={cat}
          onChange={(e) => setCat(e.target.value)}
          className={`${inputCls} sm:w-56`}
        >
          <option value="all">All categories</option>
          {categories.map((c) => (
            <option key={c.id} value={c.id}>
              {c.name}
            </option>
          ))}
        </select>
      </div>

      {/* ================= SCROLLABLE LIST ================= */}
      <div className="min-h-0 flex-1 overflow-y-auto pb-4">
        {items === null ? (
          <p className="text-sm text-slate-500">Loading...</p>
        ) : filtered.length === 0 ? (
          <EmptyState
            text={
              items.length
                ? "No projects match your search."
                : "No projects yet. Click “Add project” to create one."
            }
          />
        ) : (
          <div className="divide-y divide-slate-100 rounded-xl border border-slate-200 bg-white">
            {filtered.map((p) => (
              <div key={p.id} className="flex items-center gap-4 p-4">
                {p.imagePaths?.[0] ? (
                  <img
                    src={imageUrl(p.imagePaths[0])}
                    alt=""
                    className="h-14 w-20 shrink-0 rounded-md object-cover"
                  />
                ) : (
                  <div className="h-14 w-20 shrink-0 rounded-md bg-slate-100" />
                )}
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-semibold text-slate-900">
                    {p.title}
                  </p>
                  <p className="mt-1 text-xs text-slate-500">
                    {p.categoryName && (
                      <span className="rounded-full bg-blue-50 px-2 py-0.5 font-medium text-blue-700">
                        {p.categoryName}
                      </span>
                    )}
                    {p.subCategoryName && (
                      <span className="ml-2 rounded-full bg-indigo-50 px-2 py-0.5 font-medium text-indigo-700">
                        {p.subCategoryName}
                      </span>
                    )}
                    <span className="ml-2">
                      {p.imagePaths?.length ?? 0} image(s)
                    </span>
                  </p>
                </div>
                <button
                  onClick={() => setEditing(p)}
                  className="rounded-lg p-2 text-slate-500 hover:bg-slate-100"
                  aria-label="Edit"
                >
                  <Pencil size={16} />
                </button>
                <button
                  onClick={() => {
                    setDeleteError("");
                    setDeleting(p);
                  }}
                  className="rounded-lg p-2 text-red-500 hover:bg-red-50"
                  aria-label="Delete"
                >
                  <Trash2 size={16} />
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* ================= MODALS ================= */}
      {editing && (
        <Modal
          title={editing.id ? "Edit project" : "Add project"}
          onClose={() => setEditing(null)}
        >
          <ProjectForm
            initial={editing.id ? editing : null}
            onSave={save}
            onCancel={() => setEditing(null)}
          />
        </Modal>
      )}

      {deleting && (
        <Confirm
          message={`Delete “${deleting.title}”? This cannot be undone.${
            deleteError ? `\n\nError: ${deleteError}` : ""
          }`}
          loading={busy}
          onConfirm={remove}
          onCancel={() => setDeleting(null)}
        />
      )}
    </div>
  );
}