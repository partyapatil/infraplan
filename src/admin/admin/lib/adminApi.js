// ============================================================
// ADMIN API
// - Auth: mock (swap later)
// - Projects / Publications: mock (swap later)
// - Categories / SubCategories: REAL .NET API
// - Uploads: mock (swap later)
// ============================================================

const K = {
  projects: "adm_projects",
  pubs: "adm_publications",
  token: "adm_token",
};

const BASE_URL = "https://staging.infraplan.co.in:7052/api";

// ------------------------------------------------------------
// localStorage helpers (mock stores)
// ------------------------------------------------------------
const read = (key) => {
  try {
    return JSON.parse(localStorage.getItem(key) || "[]");
  } catch {
    return [];
  }
};

const write = (key, value) => localStorage.setItem(key, JSON.stringify(value));

const wait = (value, ms = 300) =>
  new Promise((resolve) => setTimeout(() => resolve(value), ms));

const nextId = (list) =>
  list.reduce((max, item) => Math.max(max, Number(item.id) || 0), 0) + 1;

// ------------------------------------------------------------
// fetch wrapper for real APIs
// ------------------------------------------------------------
async function request(path, { headers, ...options } = {}) {
  const res = await fetch(`${BASE_URL}${path}`, {
    headers: { "Content-Type": "application/json", ...headers },
    ...options,
  });

  if (!res.ok) {
    const msg = await res.text().catch(() => "");
    throw new Error(msg || `Request failed (${res.status})`);
  }

  const text = await res.text();
  const json = text ? JSON.parse(text) : null;
  if (json && json.isSuccess === false) throw new Error(json.resMsg || "Request failed");
  return json;
}
// Accepts a plain array or a wrapped response like { data: [...] }
const toArray = (r) =>
  Array.isArray(r) ? r : r?.result ?? r?.data ?? r?.items ?? [];

// ============================================================
// GENERIC MOCK CRUD (used by projects + publications for now)
// ============================================================
function makeCrud(key, sortFn) {
  return {
    list: async () => wait([...read(key)].sort(sortFn)),

    save: async (item) => {
      const list = read(key);

      if (item.id) {
        const updated = list.map((x) =>
          Number(x.id) === Number(item.id)
            ? { ...x, ...item, updatedAt: new Date().toISOString() }
            : x
        );
        write(key, updated);
        return wait(updated.find((x) => Number(x.id) === Number(item.id)));
      }

      const created = {
        ...item,
        id: nextId(list),
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      };
      write(key, [...list, created]);
      return wait(created);
    },

    remove: async (id) => {
      write(key, read(key).filter((x) => Number(x.id) !== Number(id)));
      return wait(true);
    },
  };
}


// ============================================================
// REAL API: Publication
// ============================================================
export const publicationsApi = {
  list: async () => toArray(await request("/publication")),

  // Upload one PDF -> returns its path, e.g. "/uploads/publications/x.pdf"
uploadPdf: async (file) => {
  const fd = new FormData();
  fd.append("pdf", file);

  const res = await fetch(`${BASE_URL}/publication/UploadPdf`, {
    method: "POST",
    body: fd,
  });

  if (!res.ok) {
    throw new Error(
      (await res.text().catch(() => "")) ||
        `Upload failed (${res.status})`
    );
  }

  const path = await res.text();

  return path;
},

  save: ({ id, title, conferenceOrJournal, year, authors, pdfPath }) =>
    id
      ? request("/publication/Update", {
          method: "PUT",
          body: JSON.stringify({ id, title, conferenceOrJournal, year, authors, pdfPath }),
        })
      : request("/publication/Insert", {
          method: "POST",
          body: JSON.stringify({ title, conferenceOrJournal, year, authors, pdfPath }),
        }),

  remove: (id) => request(`/publication/Delete/${id}`, { method: "DELETE" }),
};

// ============================================================
// AUTH (mock)
// ============================================================
export const auth = {
  login: async (userName, password) => {
    const json = await request("/login", {
      method: "POST",
      body: JSON.stringify({ userName, password }),
    });
    // result is just an id, so keep it only as a "logged in" flag
    localStorage.setItem(K.token, json?.result || "logged-in");
    return true;
  },

  logout: async () => {
    try {
      await request("/logout", { method: "POST" });
    } catch {
      // ignore, always clear locally
    } finally {
      localStorage.removeItem(K.token);
    }
  },

  isLoggedIn: () => !!localStorage.getItem(K.token),
};

// ============================================================
// CATEGORIES + SUBCATEGORIES (REAL .NET API)
// ============================================================
export const categoriesApi = {
  list: async () => toArray(await request("/Category")),

  options: async () => {
    const r = toArray(await request("/Category/GetOptions"));
    return r.map((o) => ({
      id: o.id ?? o.value ?? o.key,
      name: o.name ?? o.label ?? o.text ?? o.title,
    }));
  },

  save: ({ id, name, description }) =>
    id
      ? request(`/Category/${id}`, {
          method: "PUT",
          body: JSON.stringify({ id, name, description }),
        })
      : request("/Category", {
          method: "POST",
          body: JSON.stringify({ name, description }),
        }),

  remove: (id) => request(`/Category/${id}`, { method: "DELETE" }),
};

export const subCategoriesApi = {
  list: async () => toArray(await request("/SubCategory")),

  save: ({ id, categoryId, name, description }) =>
    id
      ? request(`/SubCategory/${id}`, {
          method: "PUT",
          body: JSON.stringify({ id, categoryId, name, description }),
        })
      : request("/SubCategory", {
          method: "POST",
          body: JSON.stringify({ categoryId, name, description }),
        }),

  remove: (id) => request(`/SubCategory/${id}`, { method: "DELETE" }),
};



export const projectsApi = {
  list: async () => toArray(await request("/project")),

  uploadImages: async (files) => {
    const fd = new FormData();
    files.forEach((f) => fd.append("images", f)); // confirm field name in Swagger
    const res = await fetch(`${BASE_URL}/project/UploadImages`, { method: "POST", body: fd });
    if (!res.ok) throw new Error((await res.text().catch(() => "")) || `Upload failed (${res.status})`);
    const json = await res.json();
    return Array.isArray(json) ? json : json?.result ?? [];
  },

  save: ({ id, title, categoryId, subCategoryId, description, imagePaths }) =>
    id
      ? request("/project/Update", {             // TODO: confirm real update endpoint
          method: "PUT",
          body: JSON.stringify({ id, title, categoryId, subCategoryId, description, imagePaths }),
        })
      : request("/project/Insert", {
          method: "POST",
          body: JSON.stringify({ title, categoryId, subCategoryId, description, imagePaths }),
        }),

  remove: (id) => request(`/project/Delete/${id}`, { method: "DELETE" }), // TODO: confirm
};

// ============================================================
// REAL API: Project
// ============================================================
const FILE_BASE = "https://staging.infraplan.co.in:7052";

// "/uploads/projects/x.jpg" -> full URL. Leaves data:/http URLs untouched.
export const imageUrl = (p) =>
  
  !p ? "" : /^(https?:|data:)/.test(p) ? p : `${FILE_BASE}${p}`;

// ============================================================
export async function uploadPdf(file) {
  if (!file) throw new Error("No PDF selected");
  if (file.type !== "application/pdf") throw new Error("Only PDF files are allowed");
  if (file.size > 10 * 1024 * 1024) throw new Error("PDF size must be less than 10 MB");

  return wait({ url: "#", name: file.name, size: file.size, type: file.type }, 500);
}