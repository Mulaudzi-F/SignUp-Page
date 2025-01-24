import { useTutors } from "../../FetchingUsers/useTutors";

const CardCourseButtons = ({ course }) => {
  return (
    <div className="flex justify-center gap-2">
      {course.map((course) => (
        <span key={course.id}>{course.title}</span>
      ))}
    </div>
  );
};

export default CardCourseButtons;
