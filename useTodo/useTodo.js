import { useEffect, useReducer } from "react";
import { todoReducer } from "../todoReducer";

const init = () => {
  return JSON.parse(localStorage.getItem("todo")) || [];
};
export const useTodo = () => {
  const [todo, dispatch] = useReducer(todoReducer, [], init);

  const handleAddTodo = (todo) => {
    const action = { type: "addTodo", payload: todo };
    dispatch(action);
  };
  const handleDeleteTodo = (id) => {
    const action = { type: "deleteTodo", payload: id };
    dispatch(action);
  };

  const handleToggleTodo = (id) => {
    const action = { type: "toggleTodo", payload: id };
    dispatch(action);
  };

  useEffect(() => {
    localStorage.setItem("todo", JSON.stringify(todo));
  }, [todo]);

  return {
    todo,
    handleAddTodo,
    handleDeleteTodo,
    handleToggleTodo,
  };
};
