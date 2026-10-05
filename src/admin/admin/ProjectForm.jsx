import { useEffect, useState } from "react";
import { ArrowLeft, ArrowRight, Trash2, ImagePlus } from "lucide-react";
import { categoriesApi, subCategoriesApi, projectsApi, imageUrl } from "./lib/adminApi";
import { Button, Field, inputCls } from "./AdminUI";

function ImageUploader({ images, onChange }) {
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");

  const add = async (e) => {
    const files = [...e.target.files];
    e.target.value = "";
    if (!files.length) return;
    setBusy(true);
    setError("");
    try {
      const paths = await projectsApi.uploadImages(files); // upload first -> get paths
      onChange([...images, ...paths]);
    } catch (err) {
      setError(err.message);
    } finally {
      setBusy(false);
    }
  };

  const move = (i, dir) => {
    const next = [...images];
    [next[i], next[i + dir]] = [next[i + dir], next[i]];
    onChange(next);
  };

  return (
    <div>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
        {images.map((path, i) => (
          <div key={path} className="relative overflow-hidden rounded-lg border border-slate-200">
            <img src={imageUrl(path)} alt="" className="h-24 w-full object-cover" />
            {i === 0 && (
              <span className="absolute left-1 top-1 rounded bg-blue-600 px-1.5 py-0.5 text-[10px] font-semibold text-white">
                Cover
              </span>
            )}
            <div className="flex justify-between bg-white px-1 py-1">
              <button type="button" disabled={i === 0} onClick={() => move(i, -1)} className="rounded p-1 text-slate-500 hover:bg-slate-100 disabled:opacity-30">
                <ArrowLeft size={14} />
              </button>
              <button type="button" onClick={() => onChange(images.filter((_, j) => j !== i))} className="rounded p-1 text-red-500 hover:bg-red-50">
                <Trash2 size={14} />
              </button>
              <button type="button" disabled={i === images.length - 1} onClick={() => move(i, 1)} className="rounded p-1 text-slate-500 hover:bg-slate-100 disabled:opacity-30">
                <ArrowRight size={14} />
              </button>
            </div>
          </div>
        ))}
        <label className="flex h-[88px] cursor-pointer flex-col items-center justify-center gap-1 self-start rounded-lg border-2 border-dashed border-slate-300 text-xs text-slate-500 hover:border-blue-400 hover:text-blue-600">
          <ImagePlus size={18} />
          {busy ? "Uploading..." : "Add images"}
          <input type="file" accept="image/*" multiple hidden onChange={add} disabled={busy} />
        </label>
      </div>
      {error && <p className="mt-2 text-sm text-red-600">{error}</p>}
    </div>
  );
}

export default function ProjectForm({ initial, onSave, onCancel }) {
  const [form, setForm] = useState({
    title: initial?.title ?? "",
    categoryId: initial?.categoryId ?? "",
    subCategoryId: initial?.subCategoryId ?? "",
    description: initial?.description ?? "",
    imagePaths: initial?.imagePaths ?? [],
    ...(initial?.id ? { id: initial.id } : {}),
  });
  const [categories, setCategories] = useState([]);
  const [subCategories, setSubCategories] = useState([]);
  const [errors, setErrors] = useState({});
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    Promise.all([categoriesApi.options(), subCategoriesApi.list()])
      .then(([c, s]) => { setCategories(c); setSubCategories(s); })
      .catch((err) => setErrors({ api: err.message }));
  }, []);

  const visibleSubs = subCategories.filter((s) => s.categoryId === form.categoryId);

  const set = (k) => (e) => {
    const value = e.target.value;
    if (k === "categoryId") setForm({ ...form, categoryId: value, subCategoryId: "" });
    else setForm({ ...form, [k]: value });
  };

  const submit = async (e) => {
    e.preventDefault();
    const errs = {};
    if (!form.title.trim()) errs.title = "Title is required";
    if (!form.categoryId) errs.categoryId = "Category is required";
    if (!form.subCategoryId) errs.subCategoryId = "Sub category is required";
    if (!form.description.trim()) errs.description = "Description is required";
    setErrors(errs);
    if (Object.keys(errs).length) return;

    setSaving(true);
    try {
      await onSave({
        ...form,
        title: form.title.trim(),
        description: form.description.trim(),
      });
    } catch (err) {
      setErrors({ api: err.message });
    } finally {
      setSaving(false);
    }
  };

  return (
    <form onSubmit={submit} className="space-y-5">
      <Field label="Title" error={errors.title}>
        <input value={form.title} onChange={set("title")} className={inputCls} />
      </Field>

      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Category" error={errors.categoryId}>
          <select value={form.categoryId} onChange={set("categoryId")} className={inputCls}>
            <option value="">— Select category —</option>
            {categories.map((c) => (
              <option key={c.id} value={c.id}>{c.name}</option>
            ))}
          </select>
        </Field>

        <Field label="Sub Category" error={errors.subCategoryId}>
          <select
            value={form.subCategoryId}
            onChange={set("subCategoryId")}
            className={inputCls}
            disabled={!form.categoryId}
          >
            <option value="">
              {form.categoryId ? "— Select sub category —" : "Select a category first"}
            </option>
            {visibleSubs.map((s) => (
              <option key={s.id} value={s.id}>{s.name}</option>
            ))}
          </select>
        </Field>
      </div>

      <Field label="Description" error={errors.description}>
        <textarea rows={6} value={form.description} onChange={set("description")} className={inputCls} />
      </Field>

      <Field label="Images" hint="First image is the cover. Use arrows to reorder.">
        <ImageUploader
          images={form.imagePaths}
          onChange={(imagePaths) => setForm({ ...form, imagePaths })}
        />
      </Field>

      {errors.api && <p className="text-sm text-red-600">{errors.api}</p>}

      <div className="flex justify-end gap-3 border-t border-slate-100 pt-4">
        <Button type="button" variant="secondary" onClick={onCancel}>Cancel</Button>
        <Button type="submit" loading={saving}>Save project</Button>
      </div>
    </form>
  );
}