import axios from "axios";

export async function getAllTutorUsers() {
  try {
    // Make the API request
    const response = await axios.get(`/app/v1/users/getUsers`);

    // Destructure the response data
    const { data, error } = response.data;

    // Check for errors in the response
    if (error) {
      throw new Error(
        error.message || "An error occurred while fetching users."
      );
    }

    // Filter users with the role "Tutor"
    const tutors = data.users.filter((user) => user.role === "Tutor");

    // Return the filtered tutors
    return tutors;
  } catch (error) {
    // Log the error and rethrow it
    console.error("Error fetching tutors:", error);
    throw new Error(error.message || "Failed to fetch tutors.");
  }
}
