import { List, Datagrid, NumberField } from "react-admin";
import { FilterField } from "../components/FilterFields";
import { UrlField } from "../components/UrlField";

export const AlbumList = () => (
  <List filters={<FilterField />}>
    <Datagrid>
      <NumberField source="id" />
      <UrlField source="title" />
      <NumberField source="userId" />
    </Datagrid>
  </List>
);
