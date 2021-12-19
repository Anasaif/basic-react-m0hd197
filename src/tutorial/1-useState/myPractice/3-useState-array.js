import React from "react";
import { Data } from "./data2";

const UseStateArray = () => {
  const [human, setHuman] = React.useState(Data);
  const clearItem = (id) => {
    let newHuman = human.filter((person) => person.id !== id);
    setHuman(newHuman);
  };
  return (
    <>
      {human.map((person) => {
        const { id, name } = person;
        return (
          <div key={id} className="item">
            <h3> {name}</h3>
            <button type="button" onClick={() => clearItem(id)}>
              Remove
            </button>
          </div>
        );
      })}
      <button type="button" className="btn" onClick={() => setHuman([])}>
        Clear items
      </button>
    </>
  );
};

export default UseStateArray;
