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
import UpdatePassword from "./Authentication pages/UpdatePassword";
import AppLayOut from "./UI/AppLayOut";
import {
  QueryClient,
  QueryClientContext,
  QueryClientProvider,
} from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Toaster } from "react-hot-toast";
import DashboardLayout from "./Dashboard/DashBoardLayout";
import ProtectedRoute from "./UI/ProtectedRoute";
import UserTutorCards from "./UI/TutorCards";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000, //amount of time data will stay fresh
    },
  },
});

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />

        <BrowserRouter>
          <Routes>
            {/* <Route path="" element={<AppLayOut />} /> */}

            <Route path={"/"} element={<LoginPage />} />
            <Route path={"SignUp"} element={<SignUpPage />} /> 
            <Route path={"tutors"} element={<UserTutorCards />}
            <Route
              path={"DashBoardLayout"}
              element={
                <ProtectedRoute>
                  <DashboardLayout />
                </ProtectedRoute>
              }
            />
            <Route path={"UpdatePassword"} element={<UpdatePassword />} />
            <Route path={"*"} element={<PageNotFound />} />
          </Routes>
        </BrowserRouter>

        <Toaster
          position="top-center"
          gutter={12}
          containerStyle={{ margin: "8px" }}
          toastOptions={{
            success: {
              duration: 3000,
            },
            error: {
              duration: 5000,
            },
            style: {
              fontSize: "16px",
              maxWidth: "500px",
              padding: "16px 24px",
              backgroundColor: "var(--color-grey-0)",
              color: "var(--color-grey-700)",
              zIndex: "4",
            },
          }}
        />
      </QueryClientProvider>
    </>
  );
}
export default App;
