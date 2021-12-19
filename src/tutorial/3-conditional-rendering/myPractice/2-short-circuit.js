import React, { useState } from "react";

const ShortCircuit = () => {
  const [text] = useState("");
  const [isError, setIsError] = useState(false);
  return (
    <>
      <h1>{text || "program execution"}</h1>
      <button className="btn" onClick={() => setIsError(!isError)}>
        Toggle Error
      </button>
      {isError && <h5>Error...</h5>}
      {isError ? <p>There is an error.</p> : <p>No Error Found.</p>}
    </>
  );
};

export default ShortCircuit;
