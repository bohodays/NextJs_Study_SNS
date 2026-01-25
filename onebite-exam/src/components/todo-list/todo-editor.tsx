import React, { useState } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useCreateTodoMutation } from "@/hooks/mutations/use-create-todo-mutation";

const TodoEditor = () => {
  const { mutate, isPending } = useCreateTodoMutation();
  const [content, setContent] = useState("");

  const handleAddClick = () => {
    if (content.trim() === "") return;

    mutate(content);

    setContent("");
  };

  return (
    <div className="flex gap-2">
      <Input
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="새로운 할 일을 입력하세요 ..."
      />
      <Button onClick={handleAddClick} disabled={isPending}>
        추가
      </Button>
    </div>
  );
};

export default TodoEditor;
