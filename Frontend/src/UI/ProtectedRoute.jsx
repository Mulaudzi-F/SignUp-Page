import { useNavigate } from "react-router";
import { useUser } from "../authentication/useUser";
import Spinner from "./spinner";
import { use, useEffect } from "react";
import styled from "styled-components";

const FullPage = styled.div`
  height: 100vh;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function ProtectedRoute({ children }) {
  const navigate = useNavigate();
  //1 get the authenticated user
  const { user, isLoading } = useUser();
  //2 if no authenticated user redirect to login page

  useEffect(() => {
    if (!user && !isLoading) {
      navigate("/");
    }
  }, [user, isLoading, navigate]);
  //3 show spinner while loading the user
  if (isLoading)
    return (
      <FullPage>
        <Spinner />;
      </FullPage>
    );
  //4 show the authenticated user

  if (user) return children;
}
