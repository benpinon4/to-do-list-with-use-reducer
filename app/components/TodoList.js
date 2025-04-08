"use client";

import { useReducer, useState } from "react";
import todoReducer from "./todo-reducer";

const TodoList = () => {
  const [todos, dispatch] = useReducer(todoReducer, []);
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim === "") return;
    dispatch({ type: "ADD_TODO", payload: input });
    setInput("");
  };

  return (
    <>
      <h2>TodoList</h2>
      <form onSubmit={handleSubmit}>
        <input
            className="border-white"
          value={input}
          onChange={(event) => setInput(event.target.value)}
        ></input>
        <button type="submit">Add A Todo</button>
      </form>
      <ul>
      {todos.map((todo) => (
          <li key={todo.id} className="flex justify-between items-center mb-2">
            <span
              onClick={() => dispatch({ type: "TOGGLE_TODO", payload: todo.id })}
              className={`cursor-pointer ${todo.completed ? "line-through text-gray-500" : ""}`}
            >
              {todo.text}
            </span>
            <button
              onClick={() => dispatch({ type: "DELETE_TODO", payload: todo.id })}
              className="text-red-500 hover:text-red-700"
            >
              ❌
            </button>
          </li>
        ))}
        </ul>
    </>
  );
};

export default TodoList;
