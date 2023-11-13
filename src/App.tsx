import { Admin, Resource, CustomRoutes } from "react-admin";
import jsonServerProvider from "ra-data-json-server";
import { AlbumList } from "./pages/AlbumList";
import { Route } from "react-router-dom";
import { AlbumPhotos } from "./pages/AlbumPhotos";
import { Dashboard } from "./pages/Dashboard";

const dataProvider = jsonServerProvider("https://jsonplaceholder.typicode.com");

const App = () => {
  return (
    <Admin dashboard={Dashboard} dataProvider={dataProvider}>
      <Resource name="albums" list={AlbumList} />
      <CustomRoutes>
        <Route path="/albums/:id/photos" element={<AlbumPhotos />} />
      </CustomRoutes>
    </Admin>
  );
};

export default App;
