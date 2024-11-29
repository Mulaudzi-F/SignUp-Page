import React from "react";
import { useState } from "react";
import SignUpPage from "../components/SignUp";
import { BrowserRouter, Link, Router } from "react-router-dom";
import WelcomePage from "./Welcome";
import { loginApi } from "../service/apiAuth";
import { useLogin } from "../authentication/useLogin";
import SpinnerMini from "../UI/spinnerMin";
import { FaGoogle } from "react-icons/fa";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, isLoading } = useLogin();

  const handleLogInUser = async (e) => {
    e.preventDefault();

    login({ email, password });
  };

  return (
    <div className="flex justify-center flex-col  z-100  w-full h-screen items-center">
      <div className="bg-[white] flex gap-6 justify-center h-3/4 w-1/2 flex-col items-center ">
        <h2 className="font-bold text-lg">Welcome Back</h2>
        <form
          onSubmit={handleLogInUser}
          className="flex justify-center h-4/6  rounded-md  mx-10 align-middle w-1/2 flex-col gap-y-4  items-center"
        >
          <input
            type="text"
            className="w-11/12 bg-white rounded h-12 py-2 "
            placeholder="Username / Email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="username"
          />
          <input
            type="password"
            className="w-11/12 bg-white rounded py-2 h-12"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            disabled={isLoading}
            autoComplete="password"
          />
          <div className=" flex  w-full gap-12 ml-8">
            <label className="flex">
              <input type="checkbox" /> Remmber me
            </label>
            <p className="self-end ml-8">Forget password</p>
          </div>
          <div className="flex justify-center  w-full flex-col gap-4 items-center">
            <button
              className="bg-[#abc4ff] w-11/12 mx-4  rounded-md  py-2 hover:bg-[#eec170]"
              type="submit"
            >
              Login
            </button>
            <button className="bg-[white] w-1/2 mx-4 flex justify-center items-center gap-4 rounded-md  py-2 hover:bg-[#eec170]">
              <FaGoogle /> <span>Sign in with Google</span>
            </button>
          </div>
          <br />
          <p>
            Don't have an account ? Sign up
            <Link to="/SignUp">
              <button
                disabled={isLoading}
                className="hover:text-[#eec170] text-[#8ecae6]"
              ></button>
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
