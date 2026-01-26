import { fetchTodoById } from "@/api/fetch-todo-by-id";
import { QUERY_KEYS } from "@/lib/constants";
import { useQuery } from "@tanstack/react-query";

export function useTodoDataById(id: string, type: "LIST" | "DETAIL") {
  return useQuery({
    queryFn: () => fetchTodoById(id),
    queryKey: QUERY_KEYS.todo.detail(id),

    enabled: type === "DETAIL",

    // staleTime: 5000, // 데이터가 fresh 상태인 경우 유효함
    // gcTime: 5000, // 데이터가 inactive 상태인 경우 유효함

    // refetch 기능 제어
    // refetchOnMount: false,
    // refetchOnWindowFocus: false,
    // refetchOnReconnect: false,
    // refetchInterval: false,
  });
}
