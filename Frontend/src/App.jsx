import { useEffect, useState } from "react";
import React from "react";
import LoginPage from "./components/loginPage";
import { data } from "autoprefixer";

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
  }, []);
  return (
    <div className="flex justify-center items-center pt-10 h-full w-full">
      <LoginPage />
    </div>
  );
}

export default App;
