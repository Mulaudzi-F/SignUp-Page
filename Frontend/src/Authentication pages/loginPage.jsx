import React from "react";
import { useState } from "react";
import SignUpPage from "../components/SignUp";
import { BrowserRouter, Link, Router } from "react-router-dom";
import WelcomePage from "./Welcome";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [Loading, setIsLoading] = useState("");
  const [authenticated, setAuthenticated] = useState(false);
  const apiUrl = import.meta.env.VITE_API_URL;

  const handleLogInUser = async (e) => {
    setIsLoading(true);
    e.preventDefault();
    try {
      const response = await fetch(`${apiUrl}/app/v1/users/signIn`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ password, email }),
      });

      const newUser = await response.json();
      setIsLoading(false);
      if (response.ok) {
        setAuthenticated(true);
        console.log("SignIn to CatchUp Successfully", newUser);
      } else {
        console.error("You Failed to SignIn to CatchUp", newUser.message);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <>
      {authenticated ? (
        <WelcomePage />
      ) : (
        <div className="flex justify-center bg-[#ede0d4] rounded-md p-10 mx-10 align-middle w-1/2 flex-col gap-y-1.5  items-center">
          <input
            type="text"
            className="w-1/2 rounded h-8 "
            placeholder="Username / Email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></input>
          <input
            type="password"
            className="w-1/2 rounded h-8"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          ></input>
          <div className="flex justify-center  flex-col items-center">
            <button
              className="bg-[#abc4ff]  rounded-md px-4 py-2 hover:bg-[#eec170]"
              type="submit"
              onClick={handleLogInUser}
            >
              Submit
            </button>{" "}
            <br />
            <p>
              new to CatchUp ?{" "}
              <Link to="/SignUp">
                <button className="hover:text-[#eec170] text-[#8ecae6]">
                  Click Here
                </button>
              </Link>
            </p>
          </div>
        </div>
      )}
    </>
  );
}

export default LoginPage;
