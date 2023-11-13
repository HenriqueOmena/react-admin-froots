import { Filter, TextInput } from "react-admin";

export const FilterField: React.FC = (props) => (
  <Filter {...props}>
    <TextInput label="Global Search" source="q" alwaysOn />
    <TextInput label="User ID" source="userId" alwaysOn />
  </Filter>
);
