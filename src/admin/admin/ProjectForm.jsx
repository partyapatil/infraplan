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
   - Shows local preview immediately
   - Uploads directly to Cloudinary
   - Stores Cloudinary URL in parent form
   ============================================================ */

function ImageUploader({ images = [], onChange }) {
  const [items, setItems] = useState([]);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");

  /*
   * Load existing images when editing a project.
   */
  useEffect(() => {
    const existingItems = (images ?? []).map((url) => ({
      url,
      preview: imageUrl(url),
      uploading: false,
      existing: true,
    }));

    setItems(existingItems);
  }, []);

  /*
   * Upload selected images directly to Cloudinary.
   */
  const add = async (e) => {
    const files = [...e.target.files];

    // Allow selecting the same file again
    e.target.value = "";

    if (!files.length) return;

    setError("");
    setBusy(true);

    /*
     * Create local previews immediately.
     */
    const previewItems = files.map((file) => ({
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
          url: result.url,
          preview: result.url,
          uploading: false,
          name: item.name,
          publicId: result.publicId,
          existing: false,
        });
      }

      /*
       * Replace temporary preview items
       * with Cloudinary uploaded items.
       */
      setItems((prev) => {
        const existing = prev.filter(
          (item) => !previewItems.includes(item)
        );

        return [...existing, ...uploadedItems];
      });

      /*
       * Send Cloudinary URLs to parent form.
       */
      const newUrls = uploadedItems.map(
        (item) => item.url
      );

      onChange([
        ...(images ?? []),
        ...newUrls,
      ]);
    } catch (err) {
      /*
       * Remove failed upload previews.
       */
      setItems((prev) =>
        prev.filter(
          (item) => !previewItems.includes(item)
        )
      );

      setError(
        err?.message || "Failed to upload image."
      );
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

    if (
      newIndex < 0 ||
      newIndex >= items.length
    ) {
      return;
    }

    const next = [...items];

    [next[index], next[newIndex]] = [
      next[newIndex],
      next[index],
    ];

    setItems(next);

    /*
     * Update parent with new image order.
     */
    onChange(
      next
        .filter(
          (item) =>
            item.url && !item.uploading
        )
        .map((item) => item.url)
    );
  };

  /*
   * Remove image.
   */
  const remove = (index) => {
    const item = items[index];

    const next = items.filter(
      (_, i) => i !== index
    );

    setItems(next);

    /*
     * Update parent state.
     */
    onChange(
      next
        .filter(
          (item) =>
            item.url && !item.uploading
        )
        .map((item) => item.url)
    );

    /*
     * Cleanup local preview.
     */
    if (item?.preview?.startsWith("blob:")) {
      URL.revokeObjectURL(item.preview);
    }
  };

  return (
    <div>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
        {items.map((item, index) => (
          <div
            key={`${item.url || item.name}-${index}`}
            className="relative overflow-hidden rounded-lg border border-slate-200 bg-white"
          >
            {/* Image */}
            <div className="relative">
              <img
                src={item.preview}
                alt=""
                className="h-24 w-full object-cover"
              />

              {/* Uploading overlay */}
              {item.uploading && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/50">
                  <span className="text-xs font-medium text-white">
                    Uploading...
                  </span>
                </div>
              )}

              {/* Cover badge */}
              {index === 0 && !item.uploading && (
                <span className="absolute left-1 top-1 rounded bg-blue-600 px-1.5 py-0.5 text-[10px] font-semibold text-white">
                  Cover
                </span>
              )}
            </div>

            {/* Controls */}
            <div className="flex justify-between bg-white px-1 py-1">
              {/* Move left */}
              <button
                type="button"
                disabled={
                  index === 0 ||
                  item.uploading
                }
                onClick={() =>
                  move(index, -1)
                }
                className="rounded p-1 text-slate-500 hover:bg-slate-100 disabled:opacity-30"
              >
                <ArrowLeft size={14} />
              </button>

              {/* Delete */}
              <button
                type="button"
                disabled={item.uploading}
                onClick={() =>
                  remove(index)
                }
                className="rounded p-1 text-red-500 hover:bg-red-50 disabled:opacity-30"
              >
                <Trash2 size={14} />
              </button>

              {/* Move right */}
              <button
                type="button"
                disabled={
                  index === items.length - 1 ||
                  item.uploading
                }
                onClick={() =>
                  move(index, 1)
                }
                className="rounded p-1 text-slate-500 hover:bg-slate-100 disabled:opacity-30"
              >
                <ArrowRight size={14} />
              </button>
            </div>
          </div>
        ))}

        {/* Add images */}
        <label
          className={`flex h-[88px] cursor-pointer flex-col items-center justify-center gap-1 self-start rounded-lg border-2 border-dashed border-slate-300 text-xs text-slate-500 transition hover:border-blue-400 hover:text-blue-600 ${
            busy
              ? "pointer-events-none opacity-60"
              : ""
          }`}
        >
          <ImagePlus size={18} />

          {busy
            ? "Uploading..."
            : "Add images"}

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

      {/* Error */}
      {error && (
        <p className="mt-2 text-sm text-red-600">
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
    subCategoryId:
      initial?.subCategoryId ?? "",
    description: initial?.description ?? "",
    imagePaths: initial?.imagePaths ?? [],
    ...(initial?.id
      ? { id: initial.id }
      : {}),
  });

  const [categories, setCategories] =
    useState([]);

  const [subCategories, setSubCategories] =
    useState([]);

  const [errors, setErrors] =
    useState({});

  const [saving, setSaving] =
    useState(false);

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
          api: err.message,
        });
      });
  }, []);

  /*
   * Filter subcategories based on selected category.
   */
  const visibleSubs =
    subCategories.filter(
      (s) =>
        s.categoryId === form.categoryId
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
    } else {
      setForm((prev) => ({
        ...prev,
        [key]: value,
      }));
    }

    /*
     * Clear field error when user starts typing.
     */
    setErrors((prev) => ({
      ...prev,
      [key]: "",
    }));
  };

  /*
   * Submit project.
   *
   * IMPORTANT:
   * At this point imagePaths already contains
   * Cloudinary URLs.
   *
   * Example:
   *
   * imagePaths: [
   *   "https://res.cloudinary.com/...",
   *   "https://res.cloudinary.com/..."
   * ]
   */
  const submit = async (e) => {
    e.preventDefault();

    const errs = {};

    if (!form.title.trim()) {
      errs.title = "Title is required";
    }

    if (!form.categoryId) {
      errs.categoryId =
        "Category is required";
    }

    if (!form.subCategoryId) {
      errs.subCategoryId =
        "Sub category is required";
    }

    if (!form.description.trim()) {
      errs.description =
        "Description is required";
    }

    setErrors(errs);

    if (Object.keys(errs).length > 0) {
      return;
    }

    /*
     * Don't submit while an image is uploading.
     */
    const hasUploadingImage =
      form.imagePaths.some?.(
        (image) =>
          image?.uploading === true
      );

    if (hasUploadingImage) {
      setErrors({
        api: "Please wait until all images finish uploading.",
      });

      return;
    }

    setSaving(true);

    try {
      await onSave({
        ...form,

        title: form.title.trim(),

        description:
          form.description.trim(),

        /*
         * These are now Cloudinary URLs.
         */
        imagePaths: form.imagePaths,
      });
    } catch (err) {
      setErrors({
        api:
          err?.message ||
          "Failed to save project.",
      });
    } finally {
      setSaving(false);
    }
  };

  return (
    <form
      onSubmit={submit}
      className="space-y-5"
    >
      {/* TITLE */}
      <Field
        label="Title"
        error={errors.title}
      >
        <input
          value={form.title}
          onChange={set("title")}
          className={inputCls}
          placeholder="Enter project title"
        />
      </Field>

      {/* CATEGORY */}
      <div className="grid gap-4 sm:grid-cols-2">
        <Field
          label="Category"
          error={errors.categoryId}
        >
          <select
            value={form.categoryId}
            onChange={set("categoryId")}
            className={inputCls}
          >
            <option value="">
              — Select category —
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

        {/* SUB CATEGORY */}
        <Field
          label="Sub Category"
          error={errors.subCategoryId}
        >
          <select
            value={form.subCategoryId}
            onChange={set("subCategoryId")}
            className={inputCls}
            disabled={!form.categoryId}
          >
            <option value="">
              {form.categoryId
                ? "— Select sub category —"
                : "Select a category first"}
            </option>

            {visibleSubs.map(
              (subCategory) => (
                <option
                  key={subCategory.id}
                  value={subCategory.id}
                >
                  {subCategory.name}
                </option>
              )
            )}
          </select>
        </Field>
      </div>

      {/* DESCRIPTION */}
      <Field
        label="Description"
        error={errors.description}
      >
        <textarea
          rows={6}
          value={form.description}
          onChange={set("description")}
          className={inputCls}
          placeholder="Enter project description"
        />
      </Field>

      {/* IMAGES */}
      <Field
        label="Images"
        hint="First image is the cover. Use arrows to reorder."
      >
        <ImageUploader
          images={form.imagePaths}
          onChange={(imagePaths) => {
            setForm((prev) => ({
              ...prev,
              imagePaths,
            }));
          }}
        />
      </Field>

      {/* API ERROR */}
      {errors.api && (
        <p className="rounded-lg bg-red-50 p-3 text-sm text-red-600">
          {errors.api}
        </p>
      )}

      {/* BUTTONS */}
      <div className="flex justify-end gap-3 border-t border-slate-100 pt-4">
        <Button
          type="button"
          variant="secondary"
          onClick={onCancel}
          disabled={saving}
        >
          Cancel
        </Button>

        <Button
          type="submit"
          loading={saving}
        >
          Save project
        </Button>
      </div>
    </form>
  );
}