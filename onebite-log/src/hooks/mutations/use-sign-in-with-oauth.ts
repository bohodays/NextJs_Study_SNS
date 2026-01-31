import { signInWithOAuth } from "@/api/auth";
import { useMutation } from "@tanstack/react-query";

export const useSignInWithOAuth = () => {
  return useMutation({
    mutationFn: signInWithOAuth,
  });
};
