import TodoEditor from "@/components/todo-list/todo-editor";
import TodoItem from "@/components/todo-list/todo-item";
import React from "react";

const dummyTodos = [
  {
    id: 1,
    contents: "TODO 1",
  },
  {
    id: 2,
    contents: "TODO 2",
  },
  {
    id: 3,
    contents: "TODO 3",
  },
];

const TodoListPage = () => {
  return (
    <div className="flex flex-col gap-5 p-5">
      <h1 className="text-2xl font-bold">TodoList</h1>
      <TodoEditor />
      {dummyTodos.map((todo) => (
        <TodoItem key={todo.id} {...todo} />
      ))}
    </div>
  );
};

export default TodoListPage;
