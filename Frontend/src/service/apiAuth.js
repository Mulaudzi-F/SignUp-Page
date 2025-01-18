import { data } from "autoprefixer";
import axios from "axios";

const apiUrl = import.meta.env.VITE_API_URL;
export async function loginApi({ email, password }) {
  const response = await fetch(`${apiUrl}/app/v1/users/signin`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ password, email }),
  });

  const {
    data: { user, error },
  } = await response.json();
  localStorage.setItem("token", user.token);
  if (error) throw new Error(error.message);
  return user;
}

export async function getCurrentUser() {
  try {
    const currentUser = await axios.get(`${apiUrl}/app/v1/users/me`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });

    console.log(currentUser);
  } catch (error) {
    if (error) throw new Error(error.message);
  }
}
