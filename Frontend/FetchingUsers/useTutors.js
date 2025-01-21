import { useQuery } from "@tanstack/react-query";
import { getAllTutorUsers } from "../src/service/apiUsers";

export function useTutors() {
  const {
    isLoading,
    isError,
    error,
    data: tutors,
  } = useQuery({
    queryKey: ["tutors"],
    queryFn: getAllTutorUsers,
  });

  return { isLoading, tutors, isError, error };
}
