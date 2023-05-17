import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useEffect } from "react";

function Protected(props) {
  const user = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate('/');
    }
  }, [user, navigate]);

  if (!user) {
    return null;
  }

  return (
    <>
      {props.children}
    </>
  )
};

export default Protected;
