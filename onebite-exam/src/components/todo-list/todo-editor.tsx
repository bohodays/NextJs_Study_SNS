import React, { useState } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useCreateTodo } from "@/store/todos";

const TodoEditor = () => {
  const [content, setContent] = useState("");
  const createTodo = useCreateTodo();

  const handleAddClick = () => {
    if (content.trim() === "") return;
    createTodo(content);
    setContent("");
  };

  return (
    <div className="flex gap-2">
      <Input
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="새로운 할 일을 입력하세요 ..."
      />
      <Button onClick={handleAddClick}>추가</Button>
    </div>
  );
};

export default TodoEditor;
