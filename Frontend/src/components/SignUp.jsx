import { useState } from "react";

const SignUpPage = ({ onhandleSignUp }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const name = `${firstName} ${lastName}`;
  const apiUrl = import.meta.env.VITE_API_URL;

  const handleCreateUser = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${apiUrl}/app/v1/users/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, password, email, passwordConfirm }),
      });

      const data = await response.json();
      console.log(data);

      if (!response.ok) {
        console.log("Login in CatchUp Successfully", data);
      } else {
        console.error("You Failed to Login to CatchUp", data.message);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };
  return (
    <section className="flex  rounded-md flex-col gap-6 w-1/2">
      <h1 className="font-bold  text-2xl text-center">Welcome to CatchUp</h1>
      <form className="flex flex-col gap-4 bg-[#ede0d4] rounded-lg pt-8 w-full justify-center items-center">
        <input
          className="w-1/2 rounded-md p-2"
          placeholder="First Name"
          required
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <input
          className="w-1/2 rounded-md p-2"
          placeholder="Last Name"
          required
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        <input
          className=" w-1/2 rounded-md p-2"
          placeholder="Enter your Email Address"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className=" w-1/2 rounded-md p-2"
          placeholder="Enter Password"
          required
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          className=" w-1/2 rounded-md p-2"
          placeholder="Confirm your Password"
          required
          type="password"
          value={passwordConfirm}
          onChange={(e) => setPasswordConfirm(e.target.value)}
        />
        <button
          type="submit"
          className="bg-[#8ecae6] my-2 w-1/4 rounded-md p-2"
          onClick={/*onhandleSignUp*/ handleCreateUser}
        >
          SignUp
        </button>
        <p>
          Already Created Account ? <button className="">SignIn</button>
        </p>
      </form>
    </section>
  );
};

export default SignUpPage;
