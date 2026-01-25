import { createTodo } from "@/api/create-todo";
import { QUERY_KEYS } from "@/lib/constants";
import type { Todo } from "@/types";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export function useCreateTodoMutation() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createTodo,
    onMutate: () => {}, // 요청이 시작되었을 때, 이벤트 핸들러
    onSettled: () => {}, // 요청이 종료되었을 때, 이벤트 핸들러
    onSuccess: (newTodo) => {
      // 서버 데이터가 많거나 부하가 많은 작업인 경우, 문제가 생길 수 있음
      //   queryClient.invalidateQueries({
      //     queryKey: QUERY_KEYS.todo.list, // 기존의 쿼리키를 가지고 있는 데이터를 무효화시켜서 다시 fetch하도록 동작함
      //   });

      queryClient.setQueryData<Todo[]>(QUERY_KEYS.todo.list, (prevTodos) => {
        if (!prevTodos) return [newTodo];
        return [...prevTodos, newTodo];
      });
    }, // 요청이 성공했을 때, 이벤트 핸들러
    onError: (error) => {
      window.alert(error.message);
    }, // 요청이 실패했을 때, 이벤트 핸들러
  });
}
