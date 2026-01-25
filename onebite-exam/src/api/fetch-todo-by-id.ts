import { API_URL } from "@/lib/constants";
import type { Todo } from "@/types";

export const fetchTodoById = async (id: string) => {
  const resposne = await fetch(`${API_URL}/todos/${id}`);

  if (!resposne.ok) throw new Error("Fetch Failed");

  const data: Todo = await resposne.json();
  return data;
};
