import { uploadToCloudinary } from "./cloudinary";

const KEY = "adm_posters";

const read = () => {
  try {
    return JSON.parse(localStorage.getItem(KEY) || "[]");
  } catch {
    return [];
  }
};
const write = (list) => localStorage.setItem(KEY, JSON.stringify(list));

export const posterApi = {
  async list() {
    return read().sort((a, b) => b.updatedAt.localeCompare(a.updatedAt));
  },

  async get(id) {
    return read().find((p) => p.id === id) ?? null;
  },

  async save(input) {
    const list = read();
    const now = new Date().toISOString();
    const existing = input.id ? list.find((p) => p.id === input.id) : undefined;

    const record = {
      ...input,
      id: existing?.id ?? crypto.randomUUID(),
      createdAt: existing?.createdAt ?? now,
      updatedAt: now,
    };
    write(existing ? list.map((p) => (p.id === record.id ? record : p)) : [record, ...list]);
    return record;
  },

  async remove(id) {
    write(read().filter((p) => p.id !== id));
  },

  // Real upload already. Returns just the URL string the builder expects.
  async uploadImage(file) {
    const { url } = await uploadToCloudinary(file);
    return url;
  },
};