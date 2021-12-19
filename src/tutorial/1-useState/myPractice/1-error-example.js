import React from "react";

const ErrorExample = () => {
  let title = "Suitable Title";
  const handlerClick = () => {
    console.log(title);
    title = "Unsuitable Title";
  };
  return (
    <React.Fragment>
      <h2>{title}</h2>
      <button type="button" className="btn" onClick={handlerClick}>
        Change Title
      </button>
    </React.Fragment>
  );
};

export default ErrorExample;
