const CardCourseButtons = ({ course }) => {
  console.log(course);
  return (
    <button className="flex bg-[#415a77] rounded-full hover:scale-75 p-1 justify-center gap-2">
      {course.map((course) => (
        <span key={course.id}>{course.courseName}</span>
      ))}
    </button>
  );
};

export default CardCourseButtons;
