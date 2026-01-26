import { updateTodo } from "@/api/update-todo";
import { QUERY_KEYS } from "@/lib/constants";
import type { Todo } from "@/types";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export function useUpdateTodoMutation() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updateTodo,
    onMutate: async (updatedTodo) => {
      // // 낙관적 업데이트 과정에서 시차에 의해 조회된 데이터 문제를 방지하기 위한 로직
      // await queryClient.cancelQueries({
      //   queryKey: QUERY_KEYS.todo.list,
      // });

      // // 낙관적 업데이트  (Optimistic Update)
      // const prevTodos = queryClient.getQueryData<Todo[]>(QUERY_KEYS.todo.list); // 낙관적 업데이트 실패 시 원복을 위한 원본 배열 저장
      // queryClient.setQueryData<Todo[]>(QUERY_KEYS.todo.list, (prevTodos) => {
      //   if (!prevTodos) return [];
      //   return prevTodos.map((prevTodo) =>
      //     prevTodo.id === updatedTodo.id
      //       ? { ...prevTodo, ...updatedTodo }
      //       : prevTodo,
      //   );
      // });

      // return {
      //   prevTodos, // onError의 context에 전달됨
      // };

      await queryClient.cancelQueries({
        queryKey: QUERY_KEYS.todo.detail(updatedTodo.id),
      });

      const prevTodo = queryClient.getQueryData<Todo>(
        QUERY_KEYS.todo.detail(updatedTodo.id),
      );

      queryClient.setQueryData<Todo>(
        QUERY_KEYS.todo.detail(updatedTodo.id),
        (prevTodo) => {
          if (!prevTodo) return;
          return {
            ...prevTodo,
            ...updatedTodo,
          };
        },
      );

      return {
        prevTodo,
      };
    },
    onError: (error, variable, context) => {
      if (context && context.prevTodo) {
        queryClient.setQueryData<Todo>(
          QUERY_KEYS.todo.detail(context.prevTodo.id),
          context.prevTodo,
        );
      }
    },
    // 요청이 종료되었을 때 호출됨
    onSettled: () => {
      // 서버 내부 문제를 고려하여 캐시 데이터를 무효화하여 무결성 검증
      // queryClient.invalidateQueries({
      //   queryKey: QUERY_KEYS.todo.list,
      // });
    },
  });
}
