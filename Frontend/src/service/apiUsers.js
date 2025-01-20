export async function getAllTutorUsers() {
  try {
    const allUsers = await axios.get(`/app/v1/users/getusers`);
    const allUsersData = allUsers.data;
    let tutors;
    if (allUsersData.role === "tutor") tutors = allUsersData;

    return tutors;
  } catch (error) {
    throw new Error(error.message);
  }
}
