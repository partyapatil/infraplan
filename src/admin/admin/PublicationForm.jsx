import { useState } from "react";
import { X, FileUp } from "lucide-react";
import { publicationsApi } from "./lib/adminApi";
import { Button, Field, inputCls } from "./AdminUI";

const fileName = (p) => (p ? decodeURIComponent(p.split("/").pop()) : "");

function AuthorsInput({ authors, onChange }) {
  const [text, setText] = useState("");

  const commit = () => {
    const name = text.trim();
    if (name && !authors.includes(name)) onChange([...authors, name]);
    setText("");
  };

  return (
    <div>
      <div className="mb-2 flex flex-wrap gap-2">
        {authors.map((a) => (
          <span key={a} className="inline-flex items-center gap-1 rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700">
            {a}
            <button type="button" onClick={() => onChange(authors.filter((x) => x !== a))}><X size={12} /></button>
          </span>
        ))}
      </div>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={(e) => { if (e.key === "Enter") { e.preventDefault(); commit(); } }}
        onBlur={commit}
        placeholder="Type a name and press Enter"
        className={inputCls}
      />
    </div>
  );
}

export default function PublicationForm({ initial, onSave, onCancel }) {
  const [form, setForm] = useState({
    title: initial?.title ?? "",
    conferenceOrJournal: initial?.conferenceOrJournal ?? "",
    year: String(initial?.year ?? new Date().getFullYear()),
    authors: initial?.authors ?? [],
    pdfPath: initial?.pdfPath ?? "",
    pdfName: fileName(initial?.pdfPath),
    ...(initial?.id ? { id: initial.id } : {}),
  });
  const [errors, setErrors] = useState({});
  const [saving, setSaving] = useState(false);
  const [uploading, setUploading] = useState(false);

  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  const pickPdf = async (e) => {
    const file = e.target.files[0];
    e.target.value = "";
    if (!file) return;
    if (file.type !== "application/pdf") {
      return setErrors((p) => ({ ...p, pdf: "Only PDF files are allowed" }));
    }
    setUploading(true);
    setErrors((p) => ({ ...p, pdf: undefined }));
    try {
      const path = await publicationsApi.uploadPdf(file); // upload first -> get path
      setForm((f) => ({ ...f, pdfPath: path, pdfName: file.name }));
    } catch (err) {
      setErrors((p) => ({ ...p, pdf: err.message }));
    } finally {
      setUploading(false);
    }
  };

  const submit = async (e) => {
    e.preventDefault();
    const errs = {};
    if (!form.title.trim()) errs.title = "Title is required";
    if (!form.conferenceOrJournal.trim()) errs.conferenceOrJournal = "Conference / journal is required";
    if (!/^\d{4}$/.test(form.year)) errs.year = "Enter a 4-digit year";
    if (form.authors.length === 0) errs.authors = "Add at least one author";
    setErrors(errs);
    if (Object.keys(errs).length) return;

    setSaving(true);
    try {
      await onSave({
        id: form.id,
        title: form.title.trim(),
        conferenceOrJournal: form.conferenceOrJournal.trim(),
        year: Number(form.year),
        authors: form.authors,
        pdfPath: form.pdfPath,
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
        <textarea rows={2} value={form.title} onChange={set("title")} className={inputCls} />
      </Field>
      <div className="grid gap-5 sm:grid-cols-[1fr_120px]">
        <Field label="Conference / Journal" error={errors.conferenceOrJournal}>
          <input value={form.conferenceOrJournal} onChange={set("conferenceOrJournal")} className={inputCls} />
        </Field>
        <Field label="Year" error={errors.year}>
          <input value={form.year} onChange={set("year")} maxLength={4} className={inputCls} />
        </Field>
      </div>
      <Field label="Authors" error={errors.authors}>
        <AuthorsInput authors={form.authors} onChange={(authors) => setForm({ ...form, authors })} />
      </Field>
      <Field label="PDF" error={errors.pdf}>
        <label className="flex cursor-pointer items-center gap-2 rounded-lg border-2 border-dashed border-slate-300 px-4 py-3 text-sm text-slate-600 hover:border-blue-400">
          <FileUp size={16} />
          {uploading ? "Uploading..." : form.pdfName || "Choose PDF file"}
          <input type="file" accept="application/pdf" hidden onChange={pickPdf} disabled={uploading} />
        </label>
      </Field>

      {errors.api && <p className="text-sm text-red-600">{errors.api}</p>}

      <div className="flex justify-end gap-3 border-t border-slate-100 pt-4">
        <Button type="button" variant="secondary" onClick={onCancel}>Cancel</Button>
        <Button type="submit" loading={saving} disabled={uploading}>Save publication</Button>
      </div>
    </form>
  );
}