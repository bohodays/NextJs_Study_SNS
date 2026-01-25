import { createTodo } from "@/api/create-todo";
import { QUERY_KEYS } from "@/lib/constants";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export function useCreateTodoMutation() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createTodo,
    onMutate: () => {}, // 요청이 시작되었을 때, 이벤트 핸들러
    onSettled: () => {}, // 요청이 종료되었을 때, 이벤트 핸들러
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: QUERY_KEYS.todo.list, // 기존의 쿼리키를 가지고 있는 데이터를 무효화시켜서 다시 fetch하도록 동작함
      });
    }, // 요청이 성공했을 때, 이벤트 핸들러
    onError: (error) => {
      window.alert(error.message);
    }, // 요청이 실패했을 때, 이벤트 핸들러
  });
}
