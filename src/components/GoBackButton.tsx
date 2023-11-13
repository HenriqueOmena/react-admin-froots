import { useNavigate } from "react-router-dom";
import { Button } from "react-admin";

export const GoBackButton = () => {
  const navigate = useNavigate();
  return (
    <Button label="Go Back" color="secondary" onClick={() => navigate(-1)} />
  );
};
