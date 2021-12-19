import React, { useState } from "react";

const ControlledInputs = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [data, setData] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username && email) {
      const completeFormData = {
        id: new Date().getTime().toString(),
        username,
        email,
      };

      setData((data) => {
        return [...data, completeFormData];
      });
      setUsername("");
      setEmail("");
    } else {
      console.log("Form is empthy");
      alert("Fill all informations");
    }
  };

  return (
    <>
      <article>
        <form className="form" onSubmit={handleSubmit}>
          <div className="form-control">
            <label htmlFor="firstName">Username :</label>
            <input
              type="text"
              name="username"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="form-control">
            <label htmlFor="email">Email : </label>
            <input
              type="text"
              name="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <button>Add User</button>
        </form>
        {data.map((completeFormData, index) => {
          const { id, username, email } = completeFormData;
          return (
            <div key={id} className="item">
              <h4>{username}</h4>
              <p>{email}</p>
            </div>
          );
        })}
      </article>
    </>
  );
};

export default ControlledInputs;
