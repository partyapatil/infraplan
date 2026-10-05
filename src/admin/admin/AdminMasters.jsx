import { useEffect, useMemo, useState } from "react";
import { Plus, Pencil, Trash2, Search } from "lucide-react";
import { categoriesApi, subCategoriesApi } from "./lib/adminApi";
import { Button, Confirm, EmptyState, Modal, Field, inputCls } from "./AdminUI";

// ---------- Generic form for Category / SubCategory ----------
function MasterForm({ initial, type, categories, onSave, onCancel }) {
  const isSub = type === "sub";
  const [form, setForm] = useState(
    initial ?? {
      name: "",
      description: "",
      ...(isSub ? { categoryId: "" } : {}),
    }
  );
  const [errors, setErrors] = useState({});
  const [saving, setSaving] = useState(false);

  const submit = async (e) => {
    e.preventDefault();
    const errs = {};
    if (!form.name?.trim()) errs.name = "Name is required";
    if (isSub && !form.categoryId) errs.categoryId = "Parent category is required";
    setErrors(errs);
    if (Object.keys(errs).length) return;

    setSaving(true);
    try {
      await onSave({
        ...form,
        name: form.name.trim(),
        description: (form.description ?? "").trim(),
        ...(isSub ? { categoryId: form.categoryId } : {}),
      });
    } catch (err) {
      setErrors({ api: err.message });
    } finally {
      setSaving(false);
    }
  };

  return (
    <form onSubmit={submit} className="space-y-5">
      {isSub && (
        <Field label="Parent Category" error={errors.categoryId}>
          <select
            value={form.categoryId ?? ""}
            onChange={(e) => setForm({ ...form, categoryId: e.target.value })}
            className={inputCls}
          >
            <option value="">— Select category —</option>
            {categories.map((c) => (
              <option key={c.id} value={c.id}>{c.name}</option>
            ))}
          </select>
        </Field>
      )}
      <Field label="Name" error={errors.name}>
        <input
          value={form.name ?? ""}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className={inputCls}
        />
      </Field>
      <Field label="Description (optional)">
        <textarea
          rows={3}
          value={form.description ?? ""}
          onChange={(e) => setForm({ ...form, description: e.target.value })}
          className={inputCls}
        />
      </Field>

      {errors.api && <p className="text-sm text-red-600">{errors.api}</p>}

      <div className="flex justify-end gap-3 border-t border-slate-100 pt-4">
        <Button type="button" variant="secondary" onClick={onCancel}>Cancel</Button>
        <Button type="submit" loading={saving}>
          Save {isSub ? "subcategory" : "category"}
        </Button>
      </div>
    </form>
  );
}

// ---------- Main page ----------
export default function AdminMasters() {
  const [tab, setTab] = useState("categories");
  const [categories, setCategories] = useState(null);
  const [categoryOptions, setCategoryOptions] = useState([]); // from /Category/GetOptions
  const [subCategories, setSubCategories] = useState(null);
  const [q, setQ] = useState("");
  const [editing, setEditing] = useState(null); // { type, item }
  const [deleting, setDeleting] = useState(null); // { type, item }
  const [deleteError, setDeleteError] = useState("");
  const [loadError, setLoadError] = useState("");
  const [busy, setBusy] = useState(false);

  const loadAll = async () => {
    try {
      setLoadError("");
      const [c, o, s] = await Promise.all([
        categoriesApi.list(),
        categoriesApi.options(),
        subCategoriesApi.list(),
      ]);
      setCategories(c);
      setCategoryOptions(o);
      setSubCategories(s);
    } catch (err) {
      setLoadError(err.message);
      setCategories((prev) => prev ?? []);
      setSubCategories((prev) => prev ?? []);
    }
  };
  useEffect(() => { loadAll(); }, []);

  // Reset search when switching tabs
  useEffect(() => { setQ(""); }, [tab]);

  const currentList = tab === "categories" ? categories : subCategories;
  const filtered = useMemo(() => {
    if (!currentList) return [];
    const term = q.toLowerCase();
    return currentList.filter((x) => x.name?.toLowerCase().includes(term));
  }, [currentList, q]);

  const catName = (item) =>
    item.categoryName ??
    categoryOptions.find((c) => c.id === item.categoryId)?.name ??
    "—";

  const save = async (payload) => {
    const api = editing.type === "categories" ? categoriesApi : subCategoriesApi;
    await api.save(payload); // errors bubble up to MasterForm and show in the form
    setEditing(null);
    loadAll();
  };

  const remove = async () => {
    setBusy(true);
    setDeleteError("");
    try {
      // Delete children first so a foreign key doesn't block the category delete
      if (deleting.type === "categories") {
        const children = (subCategories ?? []).filter(
          (s) => s.categoryId === deleting.item.id
        );
        await Promise.all(children.map((c) => subCategoriesApi.remove(c.id)));
        await categoriesApi.remove(deleting.item.id);
      } else {
        await subCategoriesApi.remove(deleting.item.id);
      }
      setDeleting(null);
      loadAll();
    } catch (err) {
      setDeleteError(err.message);
    } finally {
      setBusy(false);
    }
  };

  const loading = categories === null || subCategories === null;

  return (
    <div className="mx-auto max-w-5xl">
      <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
        <h1 className="text-2xl font-bold text-slate-900">Master Data</h1>
        <Button onClick={() => setEditing({ type: tab, item: {} })}>
          <Plus size={16} /> Add {tab === "categories" ? "category" : "subcategory"}
        </Button>
      </div>

      {loadError && (
        <p className="mb-4 rounded-lg bg-red-50 p-3 text-sm text-red-600">
          Failed to load data: {loadError}
        </p>
      )}

      {/* Tabs */}
      <div className="mb-4 inline-flex rounded-lg border border-slate-200 bg-white p-1">
        {[
          { id: "categories", label: "Categories" },
          { id: "subcategories", label: "Sub Categories" },
        ].map((t) => (
          <button
            key={t.id}
            onClick={() => setTab(t.id)}
            className={`rounded-md px-4 py-1.5 text-sm font-semibold transition ${
              tab === t.id ? "bg-blue-600 text-white" : "text-slate-600 hover:bg-slate-100"
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>

      <div className="mb-4">
        <div className="relative">
          <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder={`Search ${tab}...`}
            className={`${inputCls} pl-9`}
          />
        </div>
      </div>

      {loading ? (
        <p className="text-sm text-slate-500">Loading...</p>
      ) : filtered.length === 0 ? (
        <EmptyState
          text={
            currentList.length
              ? "Nothing matches your search."
              : `No ${tab} yet. Click "Add" to create one.`
          }
        />
      ) : (
        <div className="divide-y divide-slate-100 rounded-xl border border-slate-200 bg-white">
          {filtered.map((item) => (
            <div key={item.id} className="flex items-center gap-4 p-4">
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-semibold text-slate-900">{item.name}</p>
                <p className="mt-1 text-xs text-slate-500">
                  {tab === "subcategories" && (
                    <span className="mr-2 rounded-full bg-indigo-50 px-2 py-0.5 font-medium text-indigo-700">
                      {catName(item)}
                    </span>
                  )}
                  {item.description || <span className="italic text-slate-400">No description</span>}
                </p>
              </div>
              <button
                onClick={() => setEditing({ type: tab, item })}
                className="rounded-lg p-2 text-slate-500 hover:bg-slate-100"
                aria-label="Edit"
              >
                <Pencil size={16} />
              </button>
              <button
                onClick={() => { setDeleteError(""); setDeleting({ type: tab, item }); }}
                className="rounded-lg p-2 text-red-500 hover:bg-red-50"
                aria-label="Delete"
              >
                <Trash2 size={16} />
              </button>
            </div>
          ))}
        </div>
      )}

      {editing && (
        <Modal
          title={
            (editing.item.id ? "Edit " : "Add ") +
            (editing.type === "categories" ? "category" : "subcategory")
          }
          onClose={() => setEditing(null)}
        >
          <MasterForm
            initial={editing.item.id ? editing.item : null}
            type={editing.type === "categories" ? "cat" : "sub"}
            categories={categoryOptions}
            onSave={save}
            onCancel={() => setEditing(null)}
          />
        </Modal>
      )}

      {deleting && (
        <Confirm
          message={
            (deleting.type === "categories"
              ? `Delete "${deleting.item.name}"? Its subcategories will also be removed.`
              : `Delete "${deleting.item.name}"? This cannot be undone.`) +
            (deleteError ? `\n\nError: ${deleteError}` : "")
          }
          loading={busy}
          onConfirm={remove}
          onCancel={() => setDeleting(null)}
        />
      )}
    </div>
  );
}