import { useUpdateTodoMutation } from "@/hooks/mutations/use-update-todo-mutation";
import { Button } from "../ui/button";
import type { Todo } from "@/types";
import { Link } from "react-router";
import { useDeleteTodoMutaion } from "@/hooks/mutations/use-delete-todo-mutation";
import { useTodoDataById } from "@/hooks/queries/use-todo-data-by-id";

const TodoItem = ({ id }: Pick<Todo, "id">) => {
  const { data: todo } = useTodoDataById(id, "LIST");

  if (!todo) throw new Error("Todo Data Undefined");
  const { content, isDone } = todo;

  const { mutate: updateTodo, isPending: isDeleteTodoPending } =
    useUpdateTodoMutation();
  const { mutate: deleteTodo } = useDeleteTodoMutaion();

  const handleDeleteTodo = () => {
    deleteTodo(id);
  };

  const handleCheckBoxClick = () => {
    updateTodo({
      id,
      isDone: !isDone,
    });
  };

  return (
    <div className="flex items-center justify-between border p-2">
      <div className="flex items-center gap-5">
        <input
          type="checkbox"
          checked={isDone}
          onClick={handleCheckBoxClick}
          disabled={isDeleteTodoPending}
        />
        <Link to={`/todolist/${id}`}>{content}</Link>
      </div>
      <Button
        onClick={handleDeleteTodo}
        variant={"destructive"}
        disabled={isDeleteTodoPending}
      >
        삭제
      </Button>
    </div>
  );
};

export default TodoItem;
