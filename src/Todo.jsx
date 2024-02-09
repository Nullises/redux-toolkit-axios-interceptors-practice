import { useState } from "react";
import { useGetTodoByIdQuery, useGetTodosQuery } from "./store/apis/todosApi";

export default function Todo() {
  const [currentTaskId, setCurrentTaskId] = useState(1);
  // Call custom hook useGetTodosQuery from Todos API (RTK Query)
  const { data: todos = [], isLoading } = useGetTodosQuery();
  const { data: todo } = useGetTodoByIdQuery(currentTaskId);

  const previousTask = () => {
    if (currentTaskId > 0) {
      setCurrentTaskId((cur) => cur - 1);
    }
  };

  const nextTask = () => {
    setCurrentTaskId((cur) => cur + 1);
  };

  return (
    <>
      <h1>TODOS - RTK Query</h1>
      <hr />
      <h4>isLoading: {isLoading ? "true" : "false"}</h4>
      <h3>Current Task</h3>
      <pre>{todo && todo.title}</pre>
      <hr />
      <button onClick={previousTask} disabled={currentTaskId === 0}>
        Previous Task
      </button>
      <button onClick={nextTask}>Next Task</button>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <strong>{todo.completed ? "DONE" : "Pending"}</strong> {todo.title}
          </li>
        ))}
      </ul>
      <button>Next ToDo's</button>
    </>
  );
}
