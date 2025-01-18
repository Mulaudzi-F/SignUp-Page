import { useNavigate } from "react-router";
import { useUser } from "../authentication/useUser";
import Spinner from "./spinner";
import { use, useEffect } from "react";

export default function ProtectedRoute({ children }) {
  const navigate = useNavigate();
  //1 get the authenticated user
  const { user, isLoading } = useUser();
  //2 show spinner while loading the user
  if (isLoading) return <Spinner />;
  //3 if no authenticated user redirect to login page
  useEffect(() => {
    if (!user && !isLoading) {
      navigate("/login");
    }
  }, []);
  //4 show the authenticated user

  return { children };
}
