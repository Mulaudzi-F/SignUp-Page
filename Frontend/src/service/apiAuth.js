import { data } from "autoprefixer";
import axios from "axios";

const apiUrl = import.meta.env.VITE_API_URL;
export async function loginApi({ email, password }) {
  const response = await fetch(`/app/v1/users/signin`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ password, email }),
  });

  const data = await response.json();
  const { user, error, token } = data;

  localStorage.setItem("token", token);
  if (error) throw new Error(error.message);
  return user;
}

export async function getCurrentUser() {
  try {
    const currentUser = await axios.get(`/app/v1/users/me`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });

    return currentUser.data;
  } catch (error) {
    if (error) throw new Error(error.message);
  }
}
