import styled from "styled-components";
import { useTutors } from "../../FetchingUsers/useTutors";
import UserCard from "../Features/UsersTutorCard";
import Spinner from "./spinner";
import { Button } from "../components/ui/button";

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
    <section className="py-16 mt-8 flex-1 overflow-y-auto flex flex-col px-6 gap-4 md:grid md:grid-cols-2 lg:grid lg:grid-cols-3">
      {allTutors}
    </section>
  );
};

export default UserTutorCards;
