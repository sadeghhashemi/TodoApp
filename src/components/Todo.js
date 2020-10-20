import React, { Fragment } from "react";

export default function Todo({text, isCompleted, deleted, completed }) {
  return (
    <Fragment>
      <li className="list-group list-group-item " style={{fontSize:"16px",borderRadius:"3px"}}>

        <div style={{ width: "80%", float: "right" }}>
          <span style={{ float: "right" }}>
            {isCompleted ? <del>{text}</del> : text}
          </span>
        </div>

        <div style={{ width: "20%", float: "left" }}>

          <button
            className="border-1 btn-transition btn btn-outline-success"
            onClick={completed}
          >
            {" "}
            <i className="fa fa-check"></i>
          </button>

          <button
            className="border-1 btn-transition btn btn-outline-danger"
            onClick={deleted}
          >
            {" "}
            <i className="fa fa-trash"></i>
          </button>

        </div>

      </li>
    </Fragment>
  );
}
