import { createTodo } from "@/api/create-todo";
import { useMutation } from "@tanstack/react-query";

export function useCreateTodoMutation() {
  return useMutation({
    mutationFn: createTodo,
    onMutate: () => {}, // 요청이 시작되었을 때, 이벤트 핸들러
    onSettled: () => {}, // 요청이 종료되었을 때, 이벤트 핸들러
    onSuccess: () => {
      window.location.reload();
    }, // 요청이 성공했을 때, 이벤트 핸들러
    onError: (error) => {
      window.alert(error.message);
    }, // 요청이 실패했을 때, 이벤트 핸들러
  });
}
