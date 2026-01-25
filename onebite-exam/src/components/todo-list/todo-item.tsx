import { useUpdateTodoMutation } from "@/hooks/mutations/use-update-todo-mutation";
import { Button } from "../ui/button";
import type { Todo } from "@/types";
import { Link } from "react-router";

const TodoItem = ({ id, content, isDone }: Todo) => {
  const { mutate } = useUpdateTodoMutation();

  const handleDeleteTodo = () => {};

  const handleCheckBoxClick = () => {
    mutate({
      id,
      isDone: !isDone,
    });
  };

  return (
    <div className="flex items-center justify-between border p-2">
      <div className="flex items-center gap-5">
        <input type="checkbox" checked={isDone} onClick={handleCheckBoxClick} />
        <Link to={`/todolist/${id}`}>{content}</Link>
      </div>
      <Button onClick={handleDeleteTodo} variant={"destructive"}>
        삭제
      </Button>
    </div>
  );
};

export default TodoItem;
