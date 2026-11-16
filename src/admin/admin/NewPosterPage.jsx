import { useNavigate } from "react-router-dom";
import PosterBuilder from "../../components/posters/PosterBuilder";
import { posterApi } from "../../lib/poster-api";

export default function NewPosterPage() {
  const navigate = useNavigate();
  return (
    <PosterBuilder
      onUploadImage={posterApi.uploadImage}
      onSave={async (p) => {
        const saved = await posterApi.save(p);
        navigate(`/posters/${saved.id}/edit`, { replace: true });
      }}
    />
  );
}