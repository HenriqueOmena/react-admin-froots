import { useRecordContext, TextFieldProps } from "react-admin";
import { useNavigate } from "react-router-dom";

interface MyUrlFieldProps extends TextFieldProps {
  source: string;
}

export const UrlField: React.FC<MyUrlFieldProps> = (props) => {
  const record = useRecordContext(props);
  const navigate = useNavigate();

  return (
    <a onClick={() => navigate(`/albums/${record.id}/photos`)}>
      {record[props.source]}
    </a>
  );
};
