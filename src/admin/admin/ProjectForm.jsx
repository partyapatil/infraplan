// import { useEffect, useState } from "react";
// import { ArrowLeft, ArrowRight, Trash2, ImagePlus } from "lucide-react";
// import { categoriesApi, subCategoriesApi, projectsApi, imageUrl } from "./lib/adminApi";
// import { Button, Field, inputCls } from "./AdminUI";

// function ImageUploader({ images, onChange }) {
//   const [busy, setBusy] = useState(false);
//   const [error, setError] = useState("");

//   const add = async (e) => {
//     const files = [...e.target.files];
//     e.target.value = "";
//     if (!files.length) return;
//     setBusy(true);
//     setError("");
//     try {
//       const paths = await projectsApi.uploadImages(files); // upload first -> get paths
//       onChange([...images, ...paths]);
//     } catch (err) {
//       setError(err.message);
//     } finally {
//       setBusy(false);
//     }
//   };

//   const move = (i, dir) => {
//     const next = [...images];
//     [next[i], next[i + dir]] = [next[i + dir], next[i]];
//     onChange(next);
//   };

//   return (
//     <div>
//       <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
//         {images.map((path, i) => (
//           <div key={path} className="relative overflow-hidden rounded-lg border border-slate-200">
//             <img src={imageUrl(path)} alt="" className="h-24 w-full object-cover" />
//             {i === 0 && (
//               <span className="absolute left-1 top-1 rounded bg-blue-600 px-1.5 py-0.5 text-[10px] font-semibold text-white">
//                 Cover
//               </span>
//             )}
//             <div className="flex justify-between bg-white px-1 py-1">
//               <button type="button" disabled={i === 0} onClick={() => move(i, -1)} className="rounded p-1 text-slate-500 hover:bg-slate-100 disabled:opacity-30">
//                 <ArrowLeft size={14} />
//               </button>
//               <button type="button" onClick={() => onChange(images.filter((_, j) => j !== i))} className="rounded p-1 text-red-500 hover:bg-red-50">
//                 <Trash2 size={14} />
//               </button>
//               <button type="button" disabled={i === images.length - 1} onClick={() => move(i, 1)} className="rounded p-1 text-slate-500 hover:bg-slate-100 disabled:opacity-30">
//                 <ArrowRight size={14} />
//               </button>
//             </div>
//           </div>
//         ))}
//         <label className="flex h-[88px] cursor-pointer flex-col items-center justify-center gap-1 self-start rounded-lg border-2 border-dashed border-slate-300 text-xs text-slate-500 hover:border-blue-400 hover:text-blue-600">
//           <ImagePlus size={18} />
//           {busy ? "Uploading..." : "Add images"}
//           <input type="file" accept="image/*" multiple hidden onChange={add} disabled={busy} />
//         </label>
//       </div>
//       {error && <p className="mt-2 text-sm text-red-600">{error}</p>}
//     </div>
//   );
// }

// export default function ProjectForm({ initial, onSave, onCancel }) {
//   const [form, setForm] = useState({
//     title: initial?.title ?? "",
//     categoryId: initial?.categoryId ?? "",
//     subCategoryId: initial?.subCategoryId ?? "",
//     description: initial?.description ?? "",
//     imagePaths: initial?.imagePaths ?? [],
//     ...(initial?.id ? { id: initial.id } : {}),
//   });
//   const [categories, setCategories] = useState([]);
//   const [subCategories, setSubCategories] = useState([]);
//   const [errors, setErrors] = useState({});
//   const [saving, setSaving] = useState(false);

//   useEffect(() => {
//     Promise.all([categoriesApi.options(), subCategoriesApi.list()])
//       .then(([c, s]) => { setCategories(c); setSubCategories(s); })
//       .catch((err) => setErrors({ api: err.message }));
//   }, []);

//   const visibleSubs = subCategories.filter((s) => s.categoryId === form.categoryId);

//   const set = (k) => (e) => {
//     const value = e.target.value;
//     if (k === "categoryId") setForm({ ...form, categoryId: value, subCategoryId: "" });
//     else setForm({ ...form, [k]: value });
//   };

//   const submit = async (e) => {
//     e.preventDefault();
//     const errs = {};
//     if (!form.title.trim()) errs.title = "Title is required";
//     if (!form.categoryId) errs.categoryId = "Category is required";
//     if (!form.subCategoryId) errs.subCategoryId = "Sub category is required";
//     if (!form.description.trim()) errs.description = "Description is required";
//     setErrors(errs);
//     if (Object.keys(errs).length) return;

//     setSaving(true);
//     try {
//       await onSave({
//         ...form,
//         title: form.title.trim(),
//         description: form.description.trim(),
//       });
//     } catch (err) {
//       setErrors({ api: err.message });
//     } finally {
//       setSaving(false);
//     }
//   };

//   return (
//     <form onSubmit={submit} className="space-y-5">
//       <Field label="Title" error={errors.title}>
//         <input value={form.title} onChange={set("title")} className={inputCls} />
//       </Field>

//       <div className="grid gap-4 sm:grid-cols-2">
//         <Field label="Category" error={errors.categoryId}>
//           <select value={form.categoryId} onChange={set("categoryId")} className={inputCls}>
//             <option value="">— Select category —</option>
//             {categories.map((c) => (
//               <option key={c.id} value={c.id}>{c.name}</option>
//             ))}
//           </select>
//         </Field>

//         <Field label="Sub Category" error={errors.subCategoryId}>
//           <select
//             value={form.subCategoryId}
//             onChange={set("subCategoryId")}
//             className={inputCls}
//             disabled={!form.categoryId}
//           >
//             <option value="">
//               {form.categoryId ? "— Select sub category —" : "Select a category first"}
//             </option>
//             {visibleSubs.map((s) => (
//               <option key={s.id} value={s.id}>{s.name}</option>
//             ))}
//           </select>
//         </Field>
//       </div>

//       <Field label="Description" error={errors.description}>
//         <textarea rows={6} value={form.description} onChange={set("description")} className={inputCls} />
//       </Field>

//       <Field label="Images" hint="First image is the cover. Use arrows to reorder.">
//         <ImageUploader
//           images={form.imagePaths}
//           onChange={(imagePaths) => setForm({ ...form, imagePaths })}
//         />
//       </Field>

//       {errors.api && <p className="text-sm text-red-600">{errors.api}</p>}

//       <div className="flex justify-end gap-3 border-t border-slate-100 pt-4">
//         <Button type="button" variant="secondary" onClick={onCancel}>Cancel</Button>
//         <Button type="submit" loading={saving}>Save project</Button>
//       </div>
//     </form>
//   );
// }
import { useEffect, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  Trash2,
  ImagePlus,
} from "lucide-react";

import {
  categoriesApi,
  subCategoriesApi,
  imageUrl,
} from "./lib/adminApi";

import { Button, Field, inputCls } from "./AdminUI";
import { uploadToCloudinary } from "./lib/cloudinary";

/* ============================================================
   IMAGE UPLOADER
   ============================================================ */

function ImageUploader({ images = [], onChange }) {
  const [items, setItems] = useState([]);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");

  /*
   * Load existing images when editing.
   */
  useEffect(() => {
    const existingItems = (images ?? []).map((url) => ({
      url,
      preview: imageUrl(url),
      uploading: false,
      existing: true,
    }));

    setItems(existingItems);
  }, [images]);

  /*
   * Upload selected images directly to Cloudinary.
   */
  const add = async (e) => {
    const files = Array.from(e.target.files || []);

    // Allow selecting the same file again
    e.target.value = "";

    if (!files.length) return;

    setError("");
    setBusy(true);

    /*
     * Create local previews immediately.
     */
    const previewItems = files.map((file) => ({
      id: `${file.name}-${file.size}-${Date.now()}-${Math.random()}`,
      file,
      url: null,
      preview: URL.createObjectURL(file),
      uploading: true,
      name: file.name,
      existing: false,
    }));

    setItems((prev) => [...prev, ...previewItems]);

    try {
      const uploadedItems = [];

      /*
       * Upload one by one.
       */
      for (const item of previewItems) {
        const result = await uploadToCloudinary(item.file);

        uploadedItems.push({
          id: item.id,
          url: result.url,
          preview: result.url,
          uploading: false,
          name: item.name,
          publicId: result.publicId,
          existing: false,
        });
      }

      /*
       * Replace temporary items with uploaded items.
       */
      setItems((prev) => {
        return prev.map((item) => {
          const uploaded = uploadedItems.find(
            (uploadedItem) => uploadedItem.id === item.id
          );

          return uploaded || item;
        });
      });

      /*
       * Send all current image URLs to parent.
       */
      setItems((currentItems) => {
        const urls = currentItems
          .map((item) => item.url)
          .filter(Boolean);

        onChange(urls);

        return currentItems;
      });
    } catch (err) {
      /*
       * Remove failed upload previews.
       */
      setItems((prev) =>
        prev.filter(
          (item) => !previewItems.some((p) => p.id === item.id)
        )
      );

      setError(err?.message || "Failed to upload image.");
    } finally {
      setBusy(false);

      /*
       * Cleanup local blob URLs.
       */
      previewItems.forEach((item) => {
        if (item.preview?.startsWith("blob:")) {
          URL.revokeObjectURL(item.preview);
        }
      });
    }
  };

  /*
   * Move image left/right.
   */
  const move = (index, direction) => {
    const newIndex = index + direction;

    if (newIndex < 0 || newIndex >= items.length) {
      return;
    }

    const next = [...items];

    [next[index], next[newIndex]] = [
      next[newIndex],
      next[index],
    ];

    setItems(next);

    onChange(
      next
        .filter((item) => item.url && !item.uploading)
        .map((item) => item.url)
    );
  };

  /*
   * Remove image.
   */
  const remove = (index) => {
    const item = items[index];

    const next = items.filter((_, i) => i !== index);

    setItems(next);

    onChange(
      next
        .filter((item) => item.url && !item.uploading)
        .map((item) => item.url)
    );

    if (item?.preview?.startsWith("blob:")) {
      URL.revokeObjectURL(item.preview);
    }
  };

  return (
    <div className="w-full min-w-0">
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
        {items.map((item, index) => (
          <div
            key={item.id || `${item.url}-${index}`}
            className="min-w-0 overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm"
          >
            {/* Image */}
            <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-100">
              <img
                src={item.preview}
                alt={item.name || `Project image ${index + 1}`}
                className="h-full w-full object-cover"
              />

              {/* Uploading */}
              {item.uploading && (
                <div className="absolute inset-0 flex items-center justify-center bg-slate-900/55">
                  <span className="rounded-md bg-black/30 px-2 py-1 text-xs font-medium text-white">
                    Uploading...
                  </span>
                </div>
              )}

              {/* Cover */}
              {index === 0 && !item.uploading && (
                <span className="absolute left-2 top-2 rounded-md bg-blue-600 px-2 py-1 text-[10px] font-semibold uppercase tracking-wide text-white shadow-sm">
                  Cover
                </span>
              )}
            </div>

            {/* Controls */}
            <div className="flex items-center justify-between border-t border-slate-100 bg-white px-2 py-1.5">
              <button
                type="button"
                disabled={index === 0 || item.uploading}
                onClick={() => move(index, -1)}
                className="rounded-md p-1.5 text-slate-500 transition hover:bg-slate-100 hover:text-slate-800 disabled:cursor-not-allowed disabled:opacity-30"
                aria-label="Move image left"
              >
                <ArrowLeft size={14} />
              </button>

              <button
                type="button"
                disabled={item.uploading}
                onClick={() => remove(index)}
                className="rounded-md p-1.5 text-red-500 transition hover:bg-red-50 hover:text-red-600 disabled:cursor-not-allowed disabled:opacity-30"
                aria-label="Delete image"
              >
                <Trash2 size={14} />
              </button>

              <button
                type="button"
                disabled={
                  index === items.length - 1 || item.uploading
                }
                onClick={() => move(index, 1)}
                className="rounded-md p-1.5 text-slate-500 transition hover:bg-slate-100 hover:text-slate-800 disabled:cursor-not-allowed disabled:opacity-30"
                aria-label="Move image right"
              >
                <ArrowRight size={14} />
              </button>
            </div>
          </div>
        ))}

        {/* Add images */}
        <label
          className={`flex aspect-[4/3] min-w-0 cursor-pointer flex-col items-center justify-center gap-2 rounded-xl border-2 border-dashed border-slate-300 bg-slate-50 text-xs font-medium text-slate-500 transition hover:border-blue-400 hover:bg-blue-50/40 hover:text-blue-600 ${
            busy ? "pointer-events-none opacity-60" : ""
          }`}
        >
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white shadow-sm">
            <ImagePlus size={18} />
          </div>

          <span>{busy ? "Uploading..." : "Add images"}</span>

          <input
            type="file"
            accept="image/jpeg,image/png,image/webp"
            multiple
            hidden
            onChange={add}
            disabled={busy}
          />
        </label>
      </div>

      {error && (
        <p className="mt-2 rounded-lg bg-red-50 px-3 py-2 text-sm text-red-600">
          {error}
        </p>
      )}
    </div>
  );
}

/* ============================================================
   PROJECT FORM
   ============================================================ */

export default function ProjectForm({
  initial,
  onSave,
  onCancel,
}) {
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

  /*
   * Load categories and subcategories.
   */
  useEffect(() => {
    Promise.all([
      categoriesApi.options(),
      subCategoriesApi.list(),
    ])
      .then(([categoriesData, subCategoriesData]) => {
        setCategories(categoriesData);
        setSubCategories(subCategoriesData);
      })
      .catch((err) => {
        setErrors({
          api: err?.message || "Failed to load categories.",
        });
      });
  }, []);

  /*
   * Filter subcategories.
   */
  const visibleSubs = subCategories.filter(
    (subCategory) =>
      String(subCategory.categoryId) ===
      String(form.categoryId)
  );

  /*
   * Generic input handler.
   */
  const set = (key) => (e) => {
    const value = e.target.value;

    if (key === "categoryId") {
      setForm((prev) => ({
        ...prev,
        categoryId: value,
        subCategoryId: "",
      }));

      setErrors((prev) => ({
        ...prev,
        categoryId: "",
        subCategoryId: "",
      }));

      return;
    }

    setForm((prev) => ({
      ...prev,
      [key]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [key]: "",
    }));
  };

  /*
   * Submit.
   */
  const submit = async (e) => {
    e.preventDefault();

    const errs = {};

    if (!form.title.trim()) {
      errs.title = "Title is required";
    }

    if (!form.categoryId) {
      errs.categoryId = "Category is required";
    }

    // if (!form.subCategoryId) {
    //   errs.subCategoryId = "Sub category is required";
    // }

    if (!form.description.trim()) {
      errs.description = "Description is required";
    }

    // if (!form.imagePaths.length) {
    //   errs.images = "At least one image is required";
    // }

    setErrors(errs);

    if (Object.keys(errs).length > 0) {
      return;
    }

    setSaving(true);

    try {
      await onSave({
        ...form,
          subCategoryId: form.subCategoryId || null, 
        title: form.title.trim(),
        description: form.description.trim(),
        imagePaths: form.imagePaths,
      });
    } catch (err) {
      setErrors({
        api: err?.message || "Failed to save project.",
      });
    } finally {
      setSaving(false);
    }
  };

  return (
    <form
      onSubmit={submit}
      className="w-full min-w-0 space-y-6"
    >
      {/* ======================================================
          BASIC INFORMATION
          ====================================================== */}

      <div className="rounded-xl border border-slate-200 bg-white p-5 sm:p-6">
        <div className="mb-5">
          <h3 className="text-sm font-semibold text-slate-900">
            Project Information
          </h3>

          <p className="mt-1 text-xs text-slate-500">
            Enter the basic information for this project.
          </p>
        </div>

        <div className="space-y-5">
          {/* Title */}
          <Field
            label="Project Title"
            error={errors.title}
          >
            <input
              value={form.title}
              onChange={set("title")}
              className={inputCls}
              placeholder="Enter project title"
            />
          </Field>

          {/* Category / Subcategory */}
          <div className="grid min-w-0 grid-cols-1 gap-5 md:grid-cols-2">
            <div className="min-w-0">
              <Field
                label="Category"
                error={errors.categoryId}
              >
                <select
                  value={form.categoryId}
                  onChange={set("categoryId")}
                  className={`${inputCls} min-w-0 cursor-pointer`}
                >
                  <option value="">
                    Select category
                  </option>

                  {categories.map((category) => (
                    <option
                      key={category.id}
                      value={category.id}
                    >
                      {category.name}
                    </option>
                  ))}
                </select>
              </Field>
            </div>

            <div className="min-w-0">
              <Field
                label="Sub Category"
                error={errors.subCategoryId}
              >
                <select
                  value={form.subCategoryId}
                  onChange={set("subCategoryId")}
                  className={`${inputCls} min-w-0 cursor-pointer disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400`}
                  disabled={!form.categoryId}
                >
                  <option value="">
                    {form.categoryId
                      ? "Select sub category"
                      : "Select category first"}
                  </option>

                  {visibleSubs.map((subCategory) => (
                    <option
                      key={subCategory.id}
                      value={subCategory.id}
                    >
                      {subCategory.name}
                    </option>
                  ))}
                </select>
              </Field>
            </div>
          </div>

          {/* Description */}
          <Field
            label="Description"
            error={errors.description}
            hint="Provide a short description of the project."
          >
            <textarea
              rows={6}
              value={form.description}
              onChange={set("description")}
              className={`${inputCls} min-h-[140px] resize-y`}
              placeholder="Enter project description"
            />
          </Field>
        </div>
      </div>

      {/* ======================================================
          IMAGES
          ====================================================== */}

      <div className="rounded-xl border border-slate-200 bg-white p-5 sm:p-6">
        <div className="mb-5">
          <div className="flex items-center justify-between gap-3">
            <div>
              <h3 className="text-sm font-semibold text-slate-900">
                Project Images
              </h3>

              <p className="mt-1 text-xs text-slate-500">
                The first image will be used as the project cover.
              </p>
            </div>

            {form.imagePaths.length > 0 && (
              <span className="shrink-0 rounded-full bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-600">
                {form.imagePaths.length}{" "}
                {form.imagePaths.length === 1
                  ? "image"
                  : "images"}
              </span>
            )}
          </div>
        </div>

        <Field
          label=""
          error={errors.images}
          hint="JPG, PNG or WebP. Use the arrows to change image order."
        >
          <ImageUploader
            images={form.imagePaths}
            onChange={(imagePaths) => {
              setForm((prev) => ({
                ...prev,
                imagePaths,
              }));

              setErrors((prev) => ({
                ...prev,
                images: "",
              }));
            }}
          />
        </Field>
      </div>

      {/* API ERROR */}
      {errors.api && (
        <div className="rounded-xl border border-red-100 bg-red-50 px-4 py-3 text-sm text-red-600">
          {errors.api}
        </div>
      )}

      {/* ======================================================
          ACTIONS
          ====================================================== */}

      <div className="flex flex-col-reverse gap-3 border-t border-slate-200 pt-5 sm:flex-row sm:justify-end">
        <Button
          type="button"
          variant="secondary"
          onClick={onCancel}
          disabled={saving}
          className="w-full sm:w-auto"
        >
          Cancel
        </Button>

        <Button
          type="submit"
          loading={saving}
          className="w-full sm:w-auto"
        >
          Save Project
        </Button>
      </div>
    </form>
  );
}