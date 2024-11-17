import { useEffect, useState } from "react";
import React from "react";
import LoginPage from "./Authentication pages/loginPage";
import {
  BrowserRouter,
  createBrowserRouter,
  Route,
  Router,
  RouterProvider,
  Routes,
} from "react-router-dom";
import HomePage from "./Authentication pages/HomePage";
import SignUpPage from "./components/SignUp";
import PageNotFound from "./Authentication pages/NotFoundPages";
import Loader from "./components/Loader";
import WelcomePage from "./Authentication pages/Welcome";
import UpdatePassword from "./Authentication pages/UpdatePassword";
import AppLayOut from "./UI/AppLayOut";

const router = createBrowserRouter([
  {
    element: <AppLayOut />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "SignIn",
        element: <LoginPage />,
      },
      {
        path: "SignUp",
        element: <SignUpPage />,
      },
      {
        path: "Welcome",
        element: <WelcomePage />,
      },
      {
        path: "UpdatePassword",
        element: <UpdatePassword />,
      },
      {
        path: "*",
        element: <PageNotFound />,
      },
    ],
  },
]);
function App() {
  const apiUrl = import.meta.env.VITE_API_URL;
  useEffect(() => {
    let users;
    async function FetchUsers() {
      try {
        const response = await fetch(`${apiUrl}/app/v1/users/getusers`);
        users = await response.json();
        console.log(users);
        return users;
      } catch (error) {
        console.error("Error:", error);
      }
    }
    FetchUsers();
    console.log(users);
  }, [apiUrl]);
  return <RouterProvider router={router} />;
}

export default App;
