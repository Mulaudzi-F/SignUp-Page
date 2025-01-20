import { useQuery } from "@tanstack/react-query";

const useTutors = () => {
  const { isLoading, data: tutors } = useQuery({
    queryKey: ["tutors"],
    queryFn: useTutors,
  });

  return { isLoading, tutors };
};

export default useTutors;
