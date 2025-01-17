import { useNavigate } from "react-router";
import { useUser } from "../authentication/useUser";
import Spinner from "./spinner";

export default function ProtectedRoute({ children }) {
  const navigate = useNavigate();
  //1 get the authenticated user
  const { user, isLoading } = useUser();
  //2 show spinner while loading the user
  if (isLoading) return <Spinner />;
  //3 if no authenticated user redirect to login page

  //4 show the authenticated user

  return { children };
}
