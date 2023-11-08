import { Admin, Resource, CustomRoutes } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import { AlbumList } from './components/AlbumList';
import { Route } from 'react-router-dom';
import { AlbumPhotos } from './components/AlbumPhotos';

const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');

const App = () => {
  return (
    <Admin dataProvider={dataProvider} >
      <Resource name="albums" list={AlbumList} />
      <CustomRoutes>
        <Route path="/albums/:id/photos" element={<AlbumPhotos />} />
      </CustomRoutes>
    </Admin>
  );
};

export default App;
