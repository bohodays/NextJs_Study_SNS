import React from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

const TodoEditor = () => {
  return (
    <div className="flex gap-2">
      <Input placeholder="새로운 할 일을 입력하세요 ..." />
      <Button>추가</Button>
    </div>
  );
};

export default TodoEditor;
