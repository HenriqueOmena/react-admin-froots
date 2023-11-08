import { useGetList, Loading, Button } from 'react-admin';
import { useParams, useNavigate } from 'react-router-dom';

export const AlbumPhotos = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data, isLoading, error } = useGetList(
    'photos',
    { filter: { albumId: id } }
  );

  const returnBack = () => navigate(-1)

  if (isLoading) return <Loading />;
  if (error) return <div>Error: {error.message}</div>;
  if (!data) return null;

  return (
    <div>
      <Button label="Go Back" color="secondary" onClick={returnBack} />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))', gap: '1em' }}>
        {data.map((photo) => (
          <div key={photo.id} style={{ padding: '8px', boxSizing: 'border-box' }}>
            <img src={photo.thumbnailUrl} alt={photo.title} style={{ width: '100%', height: 'auto' }} />
          </div>
        ))}
      </div>
    </div>
  );
};
