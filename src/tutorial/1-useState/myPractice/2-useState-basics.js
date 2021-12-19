import React, { useState } from "react";

const UseStateBasic = () => {
  const [text, setText] = React.useState("Old Title");
  const handlerClick = () => {
    if (text === "Old Title") {
      setText("New Title");
    } else {
      setText("Old Title");
    }
  };
  return (
    <React.Fragment>
      <h1>{text}</h1>
      <button type="button" className="btn" onClick={handlerClick}>
        Change Title
      </button>
    </React.Fragment>
  );
};

export default UseStateBasic;
