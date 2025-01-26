import React from "react";
import { useState } from "react";
import SignUpPage from "../components/SignUp";
import { BrowserRouter, Link, Router } from "react-router-dom";

import { loginApi } from "../service/apiAuth";
import { useLogin } from "../authentication/useLogin";
import SpinnerMini from "../UI/spinnerMin";
import { FaGoogle } from "react-icons/fa";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, isPending } = useLogin();

  const handleLogInUser = async (e) => {
    e.preventDefault();
    if (!email || !password) return;

    login({ email, password });
  };
  return (
    <div className="flex justify-center flex-col px-2   z-100  w-full h-screen items-center">
      <div className="bg-[#bfd7ff] flex gap-6 justify-center h-3/4 sm:w-1/2 flex-col items-center ">
        <h2 className="font-bold text-lg">Welcome Back</h2>
        <form
          onSubmit={handleLogInUser}
          className="flex justify-center h-4/6  rounded-md  mx-10 align-middle sm:w-1/2 flex-col gap-y-4  items-center"
        >
          <input
            type="text"
            className="w-11/12 bg-white rounded h-12 py-2 "
            placeholder="Username / Email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="username"
            disabled={isPending}
          />
          <input
            type="password"
            className="w-11/12 bg-white rounded py-2 h-12"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            disabled={isPending}
            autoComplete="password"
          />

          <div className="flex justify-center  w-full flex-col gap-4 items-center">
            <button
              className="bg-[#abc4ff] w-11/12 mx-4 flex justify-center items-center  rounded-md  py-2 hover:bg-[#eec170]"
              type="submit"
              disabled={isPending}
            >
              {!isPending ? "Login" : <SpinnerMini />}
            </button>
            <div className=" flex  w-full gap-12 ml-8">
              <label className="flex">
                <input type="checkbox" /> Remmber me
              </label>
              <p className="self-end ml-8">Forget password</p>
            </div>
            <button className="bg-[white] w-full mx-4 flex justify-center items-center gap-4 rounded-md  py-2 hover:bg-[#eec170]">
              <FaGoogle /> <span>Sign in with Google</span>
            </button>
          </div>
          <br />
          <p>
            Don't have an account ? Sign up
            <Link to="/SignUp">
              <button
                disabled={isPending}
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
