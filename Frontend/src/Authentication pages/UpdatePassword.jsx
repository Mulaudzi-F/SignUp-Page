import { useState } from "react";
import { Link } from "react-router-dom";

const UpdatePassword = () => {
  const [password, setPassword] = useState("");
  const [passwordConfirm, setpasswordConfirm] = useState("");
  const [message, setMessage] = useState("");
  const apiUrl = import.meta.env.VITE_API_URL;

  async function handleUpdatePassword(e) {
    if (password !== passwordConfirm) {
      return setMessage("Your Password are not Matched");
    }

    e.preventDefault();
    try {
      const response = await fetch(`${apiUrl}/app/v1/users/updateMyPassword`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ password, passwordConfirm }),
      });

      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error("Error:", error);
    }
  }
  return (
    <>
      <div className="flex flex-col gap-6">
        <div className="flex gap-4">
          <input
            className="text-[#ffffff] hover:bg-[#006d77]  p-2 rounded bg-[#6c757d]"
            required
            placeholder="new Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            className="text-[#ffffff] hover:bg-[#006d77]  p-2 rounded bg-[#6c757d]"
            required
            placeholder="Confirm New Password"
            value={passwordConfirm}
            onChange={(e) => setpasswordConfirm(e.target.value)}
          />
        </div>
        <button
          onClick={handleUpdatePassword}
          className="bg-[#abc4ff]  rounded-md px-4 py-2 hover:bg-[#eec170]"
        >
          <Link to={`${!message && "/Welcome"}`}>Update</Link>
        </button>
        {message && <p>{message}</p>}
      </div>
    </>
  );
};
export default UpdatePassword;
