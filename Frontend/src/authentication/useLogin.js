import { useMutation } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router";
import { loginApi } from "../service/apiAuth";

export function useLogin() {
  const navigate = useNavigate();
  const { mutate: login, isPending } = useMutation({
    mutationFn: ({ email, password }) => loginApi({ email, password }),
    onSuccess: (user) => {
      navigate("/DashBoardLayout");
    },
    onError: (err) => {
      console.log("ERROR", err);
      toast.error(`${err}`, "Provided Email or Password are Incorrect");
    },
  });

  // console.log(useMutation({ ...isLoading }));

  return { login, isPending };
}
