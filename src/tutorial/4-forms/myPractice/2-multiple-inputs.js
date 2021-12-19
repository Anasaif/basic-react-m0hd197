import React, { useState } from "react";

const ControlledInputs = () => {
  const [info, setInfo] = useState({
    username: "",
    email: "",
    age: "",
  });
  const [data, setData] = useState([]);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setInfo({ ...info, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (info.username && info.email && info.age) {
      const newData = {
        ...info,
        id: new Date().getTime().toString(),
      };
      setData([...data, newData]);
      setInfo({ username: "", email: "", age: "" });
    }
  };
  return (
    <>
      <article>
        <form className="form">
          <div className="form-control">
            <label htmlFor="firstName">Username :</label>
            <input
              type="text"
              name="username"
              id="username"
              value={info.username}
              onChange={handleChange}
            />
          </div>
          <div className="form-control">
            <label htmlFor="email">Email : </label>
            <input
              type="email"
              name="email"
              id="email"
              value={info.email}
              onChange={handleChange}
            />
          </div>
          <div className="form-control">
            <label htmlFor="age">Age : </label>
            <input
              type="number"
              name="age"
              id="age"
              value={info.age}
              onChange={handleChange}
            />
          </div>
          <button onClick={handleSubmit}> Add User</button>
        </form>
        {data.map((info) => {
          const { id, username, email, age } = info;
          return (
            <div key={id} className="item">
              <h4>{username}</h4>
              <p>{age}</p>
              <p>{email}</p>
            </div>
          );
        })}
      </article>
    </>
  );
};

export default ControlledInputs;
