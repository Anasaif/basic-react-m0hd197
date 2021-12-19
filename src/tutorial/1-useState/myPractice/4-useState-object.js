import React, { useState } from "react";

const UseStateObject = () => {
  const [human, setHuman] = useState({
    name: "Mohd",
    age: 18,
    hobby: "Gaming",
  });

  const changeHobby = () => {
    if (hobby === "Gaming") {
      // setHuman({ ...human, hobby: "coding" });
      setHobby("coding");
    } else {
      setHobby("Gaming");
    }
  };

  const [name, setName] = useState("Mohd");
  const [age, setAge] = useState("18");
  const [hobby, setHobby] = useState("Gaming");
  return (
    <>
      <h1>{name}</h1>
      <h2>{age}</h2>
      <h3>{hobby}</h3>
      <button className="btn" onClick={changeHobby}>
        Change Hobby
      </button>
    </>
  );
};

export default UseStateObject;
