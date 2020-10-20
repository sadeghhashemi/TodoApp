import React, { useState } from "react";
import SetNewTodo from "../components/SetNewTodo";
import Todos from "../components/Todos";
import TodoContext from "../context/TodoContext";

export default function TodoApp() {
  const [getTodos, setTodos] = useState([]);
  const [getTodo, setTodo] = useState("");

  const handleTodoInput = (event) => {
    setTodo(event.target.value);
  };

  const handleCreateNewTodo = () => {
    const todos = [...getTodos];
    const todo = {
      id: Math.floor(Math.random() * 1000),
      text: getTodo,
      completed: false,
    };
    if (getTodo !== "" && getTodo !== " ") {
      todos.push(todo);
      setTodos(todos);
      setTodo("");
    }
  };

  const handleCompletedTodo = (id) => {
    const todos = [...getTodos];
    const todoIndex = todos.findIndex((t) => t.id === id);
    const todo = todos[todoIndex];
    todo.completed = !todo.completed;
    todos[todoIndex] = todo;
    setTodos(todos);
  };

  const handleDeleteTodo = (id) => {
    const todos = [...getTodos];
    const filteredTodos = todos.filter((t) => t.id !== id);
    setTodos(filteredTodos);
  };

  return (
    <TodoContext.Provider
      value={{
        todos: getTodos,
        todo: getTodo,
        handleCreateNewTodo: handleCreateNewTodo,
        handleTodoInput: handleTodoInput,
        handleCompletedTodo: handleCompletedTodo,
        handleDeleteTodo: handleDeleteTodo,
      }}
    >
      <div className="container text-center">
        <div style={{ width: "500px" ,margin:"auto"}}>
          <Todos />
          <SetNewTodo />
        </div>
      </div>
    </TodoContext.Provider>
  );
}
