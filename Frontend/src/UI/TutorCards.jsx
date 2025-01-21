import { useTutors } from "../../FetchingUsers/useTutors";
import UserCard from "../Features/UsersTutorCard";

const UserTutorCards = () => {
  const { tutors, isLoading } = useTutors();
  console.log(tutors);
  const allTutors = tutors.map((tutorData) => {
    return <UserCard onTutorData={tutorData} key={tutorData.id} />;
  });

  return <section>{allTutors}</section>;
};

export default UserTutorCards;
