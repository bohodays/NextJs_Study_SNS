import React from "react";
import { Button } from "../ui/button";

const TodoItem = ({ id, contents }: { id: number; contents: string }) => {
  return (
    <div className="flex items-center justify-between border p-2">
      {contents}
      <Button variant={"destructive"}>삭제</Button>
    </div>
  );
};

export default TodoItem;
