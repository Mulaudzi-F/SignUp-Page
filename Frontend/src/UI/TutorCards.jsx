import { useTutors } from "../../FetchingUsers/useTutors";
import UserCard from "../Features/UsersTutorCard";

const UserTutorCards = () => {
  const { tutors, isLoading } = useTutors();
  console.log(tutors);
  let allTutors;
  if (!isLoading) {
    allTutors = tutors.map((tutorData) => {
      return <UserCard onTutorData={tutorData} key={tutorData.id} />;
    });
  }

  return (
    <section className="pt-16 pb-16 flex-1 overflow-y-auto">
      {allTutors}
    </section>
  );
};

export default UserTutorCards;
