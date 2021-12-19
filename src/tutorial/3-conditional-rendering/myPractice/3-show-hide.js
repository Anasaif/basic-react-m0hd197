import React, { useEffect, useState } from "react";

const ShowHide = () => {
  const [show, setShow] = useState(false);

  return (
    <>
      <button className="btn" onClick={() => setShow(!show)}>
        Show & Hide
      </button>
      {show && <Item />}
    </>
  );
};

const Item = () => {
  const [size, setSize] = useState(window.innerWidth);

  const actualSize = () => {
    setSize(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", actualSize);

    return () => {
      window.removeEventListener("resize", actualSize);
    };
  }, []);
  return (
    <div style={{ marginTop: "2rem" }}>
      <h1>Window </h1>
      <h2>size : {size}</h2>
    </div>
  );
};

export default ShowHide;
