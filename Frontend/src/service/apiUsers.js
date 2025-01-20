export async function getAllTutorUsers() {
  try {
    const allUsers = await axios.get(`/app/v1/users/getusers`);
    const allUsersData = allUsers.data;
    let tutor;
    if (allUsersData.role === "tutor") tutor = allUsersData;

    return tutor;
  } catch (error) {
    throw new Error(error.message);
  }
}
