async function FetchUsers() {
  try {
    const response = await fetch(
      "http://100.27.227.77:3000/app/v1/users/getusers"
    );

    users = await response.json();
    console.log(users);
    return users;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}
FetchUsers();
