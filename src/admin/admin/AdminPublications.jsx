import { useEffect, useMemo, useState } from "react";
import { Plus, Pencil, Trash2, Search, FileText } from "lucide-react";
import { publicationsApi, imageUrl } from "./lib/adminApi";
import { Button, Confirm, EmptyState, Modal, inputCls } from "./AdminUI";
import PublicationForm from "./PublicationForm";

export default function AdminPublications() {
  const [items, setItems] = useState(null);
  const [q, setQ] = useState("");
  const [editing, setEditing] = useState(null);
  const [deleting, setDeleting] = useState(null);
  const [deleteError, setDeleteError] = useState("");
  const [loadError, setLoadError] = useState("");
  const [busy, setBusy] = useState(false);

  const load = async () => {
    try {
      setLoadError("");
      const list = await publicationsApi.list();
      setItems([...list].sort((a, b) => Number(b.year) - Number(a.year)));
    } catch (err) {
      setLoadError(err.message);
      setItems([]);
    }
  };
  useEffect(() => { load(); }, []);

  const filtered = useMemo(() => {
    const s = q.toLowerCase();
    return (items ?? []).filter(
      (p) =>
        (p.title ?? "").toLowerCase().includes(s) ||
        (p.conferenceOrJournal ?? "").toLowerCase().includes(s) ||
        (p.authors ?? []).some((a) => a.toLowerCase().includes(s))
    );
  }, [items, q]);

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

  return (
    <div className="mx-auto max-w-5xl">
      <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
        <h1 className="text-2xl font-bold text-slate-900">Publications</h1>
        <Button onClick={() => setEditing({})}><Plus size={16} /> Add publication</Button>
      </div>

      {loadError && (
        <p className="mb-4 rounded-lg bg-red-50 p-3 text-sm text-red-600">
          Failed to load publications: {loadError}
        </p>
      )}

      <div className="relative mb-4">
        <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
        <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search by title, conference or author..." className={`${inputCls} pl-9`} />
      </div>

      {items === null ? (
        <p className="text-sm text-slate-500">Loading...</p>
      ) : filtered.length === 0 ? (
        <EmptyState text={items.length ? "No publications match your search." : "No publications yet. Click “Add publication” to create one."} />
      ) : (
        <div className="divide-y divide-slate-100 rounded-xl border border-slate-200 bg-white">
          {filtered.map((p) => (
            <div key={p.id} className="flex items-center gap-4 p-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-sm font-bold text-blue-700">{p.year}</div>
              <div className="min-w-0 flex-1">
                <p className="text-sm font-semibold text-slate-900">{p.title}</p>
                <p className="mt-1 truncate text-xs text-slate-500">{p.conferenceOrJournal}</p>
                <p className="mt-0.5 truncate text-xs text-slate-400">{(p.authors ?? []).join(", ")}</p>
              </div>
              {p.pdfPath && (
                <a
                  href={imageUrl(p.pdfPath)}
                  target="_blank"
                  rel="noreferrer"
                  className="shrink-0 rounded-lg p-2 text-slate-400 hover:bg-slate-100 hover:text-blue-600"
                  aria-label="Open PDF"
                  title="Open PDF"
                >
                  <FileText size={16} />
                </a>
              )}
              <button onClick={() => setEditing(p)} className="rounded-lg p-2 text-slate-500 hover:bg-slate-100" aria-label="Edit"><Pencil size={16} /></button>
              <button onClick={() => { setDeleteError(""); setDeleting(p); }} className="rounded-lg p-2 text-red-500 hover:bg-red-50" aria-label="Delete"><Trash2 size={16} /></button>
            </div>
          ))}
        </div>
      )}

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