import React, { useContext } from "react";
import TodoContext from "../context/TodoContext";
import Todo from "./Todo";

export default function Todos() {
  const context = useContext(TodoContext);
  const { todos, handleDeleteTodo, handleCompletedTodo } = context;

  return (
    <div className="row">
      <div className="text-center  pt-3">
        <div
          className=""
          style={{ width: "500px", margin: "50px auto auto auto" }}
        >
          <ul class="list-group list-group-flush mb-3 ">
            {todos.length !== 0 ? (
              todos.map((todo) => {
                return (
                  <Todo
                    text={todo.text}
                    isCompleted={todo.completed}
                    deleted={() => handleDeleteTodo(todo.id)}
                    completed={() => handleCompletedTodo(todo.id)}
                  />
                );
              })
            ) : (
              <div className="alert alert-light mt-3 w-75 mx-auto">
                <p className="text-center">
                  امروز کار خاصی نداریم
                </p>
              </div>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}
