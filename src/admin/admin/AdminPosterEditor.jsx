import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import PosterBuilder from "./PosterBuilder";
import { posterApi } from "./lib/posterApi";

export default function AdminPosterEditor() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [poster, setPoster] = useState(null);
  const [state, setState] = useState(id ? "loading" : "ready");

  useEffect(() => {
    if (!id) return;
    posterApi.get(id).then((p) => {
      setPoster(p);
      setState(p ? "ready" : "missing");
    });
  }, [id]);

  if (state === "loading") return <p className="p-6 text-sm text-slate-500">Loading...</p>;
  if (state === "missing") return <p className="p-6 text-sm">Poster not found.</p>;

  const onSave = async (p) => {
    const saved = await posterApi.save({ ...p, id });
    if (!id) navigate(`/admin/posters/${saved.id}/edit`, { replace: true });
  };

  return (
    <PosterBuilder
      key={id ?? "new"}
      initialData={poster?.data}
      onUploadImage={posterApi.uploadImage}
      onSave={onSave}
      onBack={() => navigate("/admin/posters")}
    />
  );
}