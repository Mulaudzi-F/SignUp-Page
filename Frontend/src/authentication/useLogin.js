import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";
import { loginApi } from "../service/apiAuth";

export function useLogin() {
  const navigate = useNavigate();
  const { mutate: login, isLoading } = useMutation({
    mutationFn: ({ email, password }) => loginApi({ email, password }),
    onSuccess: () => {
      navigate("/Welcome");
    },
    onError: (err) => {
      console.log("ERROR", err);
      toast.error("Provided Email or Password are Incorrect");
    },
  });

  return { login, isLoading };
}
