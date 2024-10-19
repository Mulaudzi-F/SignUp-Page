import React from "react";
import { useState } from "react";
import { useEffect } from "react";

function LoginPage() {
  const [data, setData] = useState("");

  return (
    <div className="flex justify-center flex-col gap-y-1.5  items-center">
      <input
        type="text"
        className="w-1/4 h-8"
        placeholder="Username"
        required
      ></input>
      <input
        type="password"
        className="w-1/4 h-8"
        placeholder="password"
        required
      ></input>
      <button type="submit">Submit</button>
    </div>
  );
}

export default LoginPage;
