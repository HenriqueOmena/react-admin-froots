import { useGetList, Loading } from "react-admin";
import { useParams } from "react-router-dom";
import { GoBackButton } from "../components/GoBackButton";

export const AlbumPhotos = () => {
  const { id } = useParams();
  const { data, isLoading, error } = useGetList("photos", {
    filter: { albumId: id },
  });

  if (isLoading) return <Loading />;
  if (error) return <div>Error: {error.message}</div>;
  if (!data) return null;

  return (
    <div>
      <GoBackButton />
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(150px, 1fr))",
          gap: "1em",
        }}
      >
        {data.map((photo) => (
          <div
            key={photo.id}
            style={{ padding: "8px", boxSizing: "border-box" }}
          >
            <img
              src={photo.thumbnailUrl}
              alt={photo.title}
              style={{ width: "100%", height: "auto" }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
