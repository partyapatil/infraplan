import { useState, useRef, useEffect } from "react";
import { X, FileUp, ChevronDown, Check } from "lucide-react";
import { Button, Field, inputCls } from "./AdminUI";
import { uploadPdfToCloudinary } from "./lib/cloudinary";

const fileName = (p) => {
  if (!p) return "";
  try {
    return decodeURIComponent(p.split("/").pop());
  } catch {
    return p.split("/").pop();
  }
};

/* ============================================================
   AUTHORS INPUT
   ============================================================ */

function AuthorsInput({ authors, onChange }) {
  const [text, setText] = useState("");

  const commit = () => {
    const name = text.trim();
    if (name && !authors.includes(name)) {
      onChange([...authors, name]);
    }
    setText("");
  };

  return (
    <div className="w-full">
      {authors.length > 0 && (
        <div className="mb-2 flex flex-wrap gap-2">
          {authors.map((author) => (
            <span
              key={author}
              className="inline-flex max-w-full items-center gap-1 rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700"
            >
              <span className="truncate">{author}</span>
              <button
                type="button"
                onClick={() => onChange(authors.filter((x) => x !== author))}
                className="shrink-0 rounded-full p-0.5 hover:bg-blue-100"
                aria-label={`Remove ${author}`}
              >
                <X size={12} />
              </button>
            </span>
          ))}
        </div>
      )}

      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            e.preventDefault();
            commit();
          }
          // Backspace on empty input removes last author
          if (e.key === "Backspace" && !text && authors.length > 0) {
            onChange(authors.slice(0, -1));
          }
        }}
        onBlur={commit}
        placeholder="Type a name and press Enter"
        className={inputCls}
      />
    </div>
  );
}

/* ============================================================
   CUSTOM DROPDOWN (fixed overflow, no clipping)
   ============================================================ */

function Dropdown({ value, onChange, options, placeholder }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const handler = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div ref={ref} className="relative w-full">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className={`${inputCls} flex w-full items-center justify-between text-left`}
      >
        <span className={value ? "text-slate-800" : "text-slate-400"}>
          {value || placeholder}
        </span>
        <ChevronDown
          size={16}
          className={`shrink-0 text-slate-400 transition-transform ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      {open && (
        <div className="absolute z-50 mt-1 w-full overflow-hidden rounded-lg border border-slate-200 bg-white shadow-lg">
          <ul className="max-h-60 overflow-auto py-1">
            {options.map((opt) => (
              <li key={opt}>
                <button
                  type="button"
                  onClick={() => {
                    onChange(opt);
                    setOpen(false);
                  }}
                  className="flex w-full items-center justify-between px-3 py-2 text-left text-sm text-slate-700 hover:bg-blue-50 hover:text-blue-700"
                >
                  <span className="truncate">{opt}</span>
                  {value === opt && (
                    <Check size={14} className="shrink-0 text-blue-600" />
                  )}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

/* ============================================================
   PUBLICATION FORM
   ============================================================ */

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

  /* ==========================================================
     INPUT HANDLER
     ========================================================== */

  const set = (key) => (e) => {
    const value = e.target.value;
    setForm((prev) => ({ ...prev, [key]: value }));
    setErrors((prev) => ({ ...prev, [key]: "" }));
  };

  /* ==========================================================
     PDF UPLOAD
     ========================================================== */

  const pickPdf = async (e) => {
    const file = e.target.files[0];
    e.target.value = ""; // allow re-selecting same file
    if (!file) return;

    setErrors((prev) => ({ ...prev, pdf: "" }));

    // Basic client-side size check (20 MB)
    if (file.size > 20 * 1024 * 1024) {
      setErrors((prev) => ({
        ...prev,
        pdf: "PDF must be under 20 MB.",
      }));
      return;
    }

    setUploading(true);

    try {
      const result = await uploadPdfToCloudinary(file);
      setForm((prev) => ({
        ...prev,
        pdfPath: result.url,
        pdfName: file.name,
      }));
    } catch (err) {
      setErrors((prev) => ({
        ...prev,
        pdf: err?.message || "PDF upload failed.",
      }));
    } finally {
      setUploading(false);
    }
  };

  const clearPdf = () => {
    setForm((prev) => ({
      ...prev,
      pdfPath: "",
      pdfName: "",
    }));
  };

  /* ==========================================================
     SUBMIT
     ========================================================== */

  const submit = async (e) => {
    e.preventDefault();

    const errs = {};

    if (!form.title.trim()) errs.title = "Title is required";
    if (!form.conferenceOrJournal.trim())
      errs.conferenceOrJournal = "Conference / journal is required";
    if (!/^\d{4}$/.test(form.year)) errs.year = "Enter a 4-digit year";
    if (form.authors.length === 0) errs.authors = "Add at least one author";

    setErrors(errs);
    if (Object.keys(errs).length) return;

    if (uploading) {
      setErrors({ api: "Please wait until the PDF finishes uploading." });
      return;
    }

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
      setErrors({
        api: err?.message || "Failed to save publication.",
      });
    } finally {
      setSaving(false);
    }
  };

  /* ==========================================================
     UI
     ========================================================== */

  return (
    <form onSubmit={submit} className="space-y-5">
      {/* TITLE */}
      <Field label="Title" error={errors.title} required>
        <textarea
          rows={2}
          value={form.title}
          onChange={set("title")}
          className={`${inputCls} resize-none`}
          placeholder="Enter publication title"
        />
      </Field>

      {/* CONFERENCE + YEAR */}
      <div className="grid gap-5 sm:grid-cols-[1fr_120px]">
        <Field
          label="Conference / Journal"
          error={errors.conferenceOrJournal}
          required
        >
          <input
            value={form.conferenceOrJournal}
            onChange={set("conferenceOrJournal")}
            className={inputCls}
            placeholder="Conference or journal name"
          />
        </Field>

        <Field label="Year" error={errors.year} required>
          <input
            value={form.year}
            onChange={set("year")}
            maxLength={4}
            inputMode="numeric"
            className={inputCls}
            placeholder="YYYY"
          />
        </Field>
      </div>

      {/* OPTIONAL: Example dropdown usage (e.g., publication type) */}
      {/*
      <Field label="Type">
        <Dropdown
          value={form.type}
          onChange={(v) => setForm((p) => ({ ...p, type: v }))}
          options={["Conference", "Journal", "Workshop", "Book Chapter"]}
          placeholder="Select publication type"
        />
      </Field>
      */}

      {/* AUTHORS */}
      <Field label="Authors" error={errors.authors} required>
        <AuthorsInput
          authors={form.authors}
          onChange={(authors) => setForm((prev) => ({ ...prev, authors }))}
        />
      </Field>

      {/* PDF */}
      <Field
        label="PDF"
        error={errors.pdf}
        hint="Maximum PDF size: 20 MB"
      >
        {!form.pdfPath ? (
          <label
            className={`flex cursor-pointer items-center gap-3 rounded-lg border-2 border-dashed border-slate-300 px-4 py-3 text-sm text-slate-600 transition hover:border-blue-400 hover:text-blue-600 ${
              uploading ? "pointer-events-none opacity-60" : ""
            }`}
          >
            <FileUp size={18} className="shrink-0" />
            <span className="truncate">
              {uploading ? "Uploading to Cloudinary..." : "Choose PDF file"}
            </span>
            <input
              type="file"
              accept="application/pdf"
              hidden
              onChange={pickPdf}
              disabled={uploading}
            />
          </label>
        ) : (
          <div className="flex items-center justify-between gap-3 rounded-lg border border-emerald-200 bg-emerald-50 px-4 py-3">
            <div className="flex min-w-0 items-center gap-2">
              <Check size={16} className="shrink-0 text-emerald-600" />
              <span className="truncate text-sm text-emerald-700">
                {form.pdfName || "PDF uploaded"}
              </span>
            </div>
            <button
              type="button"
              onClick={clearPdf}
              className="shrink-0 rounded-full p-1 text-emerald-700 hover:bg-emerald-100"
              aria-label="Remove PDF"
            >
              <X size={14} />
            </button>
          </div>
        )}
      </Field>

      {/* API ERROR */}
      {errors.api && (
        <p className="rounded-lg bg-red-50 p-3 text-sm text-red-600">
          {errors.api}
        </p>
      )}

      {/* BUTTONS */}
      <div className="flex flex-col-reverse gap-3 border-t border-slate-100 pt-4 sm:flex-row sm:justify-end">
        <Button
          type="button"
          variant="secondary"
          onClick={onCancel}
          disabled={saving}
        >
          Cancel
        </Button>
        <Button type="submit" loading={saving} disabled={uploading}>
          Save publication
        </Button>
      </div>
    </form>
  );
}