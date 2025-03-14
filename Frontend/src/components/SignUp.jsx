import { useState } from "react";
import { Link } from "react-router-dom";

import { FaGoogle } from "react-icons/fa";

const SignUpPage = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [userCreated, setUsersCreated] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const name = `${firstName} ${lastName}`;
  const apiUrl = import.meta.env.VITE_API_URL;

  const handleCreateUser = async (e) => {
    setIsLoading(true);
    e.preventDefault();
    try {
      const response = await fetch(`${apiUrl}/app/v1/users/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, password, email, passwordConfirm }),
      });

      const newUser = await response.json();
      setIsLoading(false);
      if (response.ok) {
        setUsersCreated(true);
        console.log("SignUp to CatchUp Successfully", newUser);
      } else {
        console.error("You Failed to Signup to CatchUp", newUser.message);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };
  return (
    <section className="w-full flex justify-center items-center shadow-2xl h-screen bg-gray-100">
      <div className="flex rounded-md flex-col justify-center items-center h-full py-6 gap-6 w-11/12 md:w-3/4 lg:w-1/2">
        <h1 className="font-bold text-2xl text-center">Welcome to CatchUp</h1>
        <form className="flex flex-col gap-4 h-full w-full sm:w-9/12 bg-[#cfd2cd] rounded-lg pt-8 px-4 sm:px-8 justify-center items-center">
          <input
            className="w-full sm:w-1/2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 p-2"
            placeholder="First Name"
            required
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <input
            className="w-full sm:w-1/2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 p-2"
            placeholder="Last Name"
            required
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
          <input
            className="w-full sm:w-1/2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 p-2"
            placeholder="Enter your Email Address"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="w-full sm:w-1/2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 p-2"
            placeholder="Enter Password"
            required
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            className="w-full sm:w-1/2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 p-2"
            placeholder="Confirm your Password"
            required
            type="password"
            value={passwordConfirm}
            onChange={(e) => setPasswordConfirm(e.target.value)}
          />
          <button
            type="submit"
            className="bg-[#8ecae6] my-2 hover:bg-white w-full sm:w-1/2 rounded-md p-2"
            onClick={handleCreateUser}
          >
            <Link to={isLoading ? "" : userCreated ? "/SignIn" : ""}>
              <span className="hover:text-[#eec170]">SignUp</span>
            </Link>
          </button>
          <p className="text-sm text-center">
            Already Created Account?{" "}
            <Link to="/">
              <button className="hover:text-[#eec170] ml-2 text-[#134074]">
                SignIn
              </button>
            </Link>
          </p>
          <button className="bg-white w-full sm:w-1/2 mx-4 flex justify-center items-center gap-2 rounded-md py-2 hover:bg-[#eec170]">
            <FaGoogle /> <span>Sign in with Google</span>
          </button>
        </form>
      </div>
    </section>
  );
};

export default SignUpPage;
