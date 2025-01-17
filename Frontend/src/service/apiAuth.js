import { data } from "autoprefixer";

const apiUrl = import.meta.env.VITE_API_URL;
export async function loginApi({ email, password }) {
  const response = await fetch(`${apiUrl}/app/v1/users/signIn`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ password, email }),
  });

  const {
    data: { user, error },
  } = await response.json();

  if (error) throw new Error(error.message);
  return user;
}

export async function getCurrentUser() {
  const currentUser = await fetch(`${apiUrl}/app/v1/users/me`);
  const { data, error } = await currentUser.json();

  console.log(currentUser);
  if (error) throw new Error(error.message);
  return data;
}
