import React from "react";
import { useState } from "react";
import SignUpPage from "./SignUp";

function LoginPage() {
  const [signUp, setSignUp] = useState(false);

  function handleSignUp() {
    setSignUp(!signUp);
  }
  return (
    <>
      {signUp ? (
        <SignUpPage onhandleSignUp={handleSignUp} />
      ) : (
        <div className="flex justify-center bg-[#ede0d4] rounded-md p-10 w-1/2 flex-col gap-y-1.5  items-center">
          <input
            type="text"
            className="w-1/2 h-8 "
            placeholder="Username"
            required
          ></input>
          <input
            type="password"
            className="w-1/2 h-8"
            placeholder="password"
            required
          ></input>
          <div className="flex justify-center  flex-col items-center">
            <button
              className="bg-[#abc4ff]  rounded-md px-4 py-2 hover:bg-[#eec170]"
              type="submit"
            >
              Submit
            </button>{" "}
            <br />
            <p>
              new to CatchUp ?{" "}
              <button className="text-[#8ecae6]" onClick={handleSignUp}>
                Click Here
              </button>
            </p>
          </div>
        </div>
      )}
    </>
  );
}

export default LoginPage;
