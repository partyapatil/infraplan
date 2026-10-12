import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const API_BASE = "https://staging.infraplan.co.in:7052";

const fileUrl = (p) =>
  !p ? "" : /^(https?:|data:)/.test(p) ? p : `${API_BASE}${p}`;

export default function ProjectPostersPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const res = await fetch(`${API_BASE}/api/project`);
        if (!res.ok) throw new Error(`Request failed (${res.status})`);
        const json = await res.json();
        const list = Array.isArray(json) ? json : json?.result ?? json?.data ?? [];
        if (!cancelled) setProject(list.find((p) => String(p.id) === String(id)) ?? null);
      } catch (err) {
        if (!cancelled) setError(err.message);
      } finally {
        if (!cancelled) setLoading(false);
      }
    })();
    return () => { cancelled = true; };
  }, [id]);

  const posters = (project?.posterImagePaths ?? []).map(fileUrl);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      <div className="mx-auto max-w-4xl px-4 py-8 sm:px-8 sm:py-12">
        <button
          type="button"
          onClick={() => navigate(-1)}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-600 transition hover:border-blue-300 hover:text-blue-600"
        >
          <ArrowLeft size={16} /> Back
        </button>

        {loading ? (
          <p className="text-center text-sm text-slate-500">Loading posters...</p>
        ) : error ? (
          <p className="text-center text-sm text-red-600">Failed to load: {error}</p>
        ) : !project || posters.length === 0 ? (
          <p className="text-center text-sm text-slate-500">No posters found for this project.</p>
        ) : (
          <>
            <div className="mb-8">
              <div className="mb-2 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-blue-600">
                <span className="h-1.5 w-1.5 rounded-full bg-blue-600" />
                Project Posters
              </div>
              <h1 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
                {project.title}
              </h1>
              <p className="mt-2 text-sm text-slate-500">
                {posters.length} {posters.length === 1 ? "poster" : "posters"}
              </p>
            </div>

            <div className="flex flex-col gap-8">
              {posters.map((src, i) => (
                <figure
                  key={src}
                  className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
                >
                  <img
                    src={src}
                    alt={`${project.title} poster ${i + 1}`}
                    loading="lazy"
                    className="h-auto w-full"
                  />
                </figure>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}