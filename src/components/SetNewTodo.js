import React, { useContext } from "react";
import TodoContext from "../context/TodoContext";

export default function SetNewTodo() {
  const context = useContext(TodoContext);
  return (
    <div className="row ">
      <div style={{ width: "100%" }}>
        <div>
          <form onSubmit={(e) => e.preventDefault()}>
            <input
            className="form-control rounded"
              type="text"
              style={{
                height: "38px",
                width: "450px",
                display: "inline",
                margin: "auto",
              }}
              placeholder=".... ی کاری بگو ...."
              value={context.todo}
              onChange={context.handleTodoInput}
            />
            <button
              type="submit"
              className="btn btn-success fa fa-plus-square text-light"
              onClick={context.handleCreateNewTodo}
              style={{
                height: "38px",
                width: "50px",
                display: "inline",
                margin: "auto",
              }}
            />
          </form>
        </div>
      </div>
    </div>
  );
}
