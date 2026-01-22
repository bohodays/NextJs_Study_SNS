import React from "react";
import { Button } from "../ui/button";
import type { Todo } from "@/types";
import { useDeleteTodo } from "@/store/todos";

const TodoItem = ({ id, content }: Todo) => {
  const deleteTodo = useDeleteTodo();

  const handleDeleteTodo = () => {
    deleteTodo(id);
  };

  return (
    <div className="flex items-center justify-between border p-2">
      {content}
      <Button onClick={handleDeleteTodo} variant={"destructive"}>
        삭제
      </Button>
    </div>
  );
};

export default TodoItem;
