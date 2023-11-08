import React from 'react';
import { List, Datagrid, NumberField, Filter, TextInput, useRecordContext, TextFieldProps } from 'react-admin';
import { useNavigate } from 'react-router-dom';

const AlbumFilter: React.FC  = (props) => (
  <Filter {...props}>
    <TextInput label="User ID" source="userId" alwaysOn />
  </Filter>
);

interface MyUrlFieldProps extends TextFieldProps {
  source: string;
}

const MyUrlField: React.FC<MyUrlFieldProps>  = (props) => {
  const record = useRecordContext(props);
  const navigate = useNavigate();
  return <a onClick={() => navigate(`/albums/${record.id}/photos`)}>{record[props.source]}</a>;
};

export const AlbumList = () => {
  return (
    <List filters={<AlbumFilter />}>
      <Datagrid>
        <NumberField source="id" />
        <MyUrlField source="title" />
        <NumberField source="userId" />
      </Datagrid>
    </List>
  );
};
