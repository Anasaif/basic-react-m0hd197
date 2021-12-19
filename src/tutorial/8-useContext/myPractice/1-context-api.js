import React, { useState, useContext } from "react";
import { data } from "./Data";

const PersonContext = React.createContext();
//Two Components - Provider & Consumer

const ContextAPI = () => {
  const [people, setPeople] = useState(data);
  const removePerson = (id) => {
    setPeople((people) => {
      return people.filter((person) => person.id !== id);
    });
  };

  return (
    <PersonContext.Provider value={{ removePerson, people }}>
      <img
        className="img-day"
        src="https://discovery.sndimg.com/content/dam/images/discovery/editorial/Curiosity/2020/3/Daylight_Saving_Time_Shutterstock.jpg.rend.hgtvcom.616.347.suffix/1583368841680.jpeg"
        alt="Gone"
      />
      <h3> Context API</h3>
      <List />
    </PersonContext.Provider>
  );
};

const List = () => {
  const mainData = useContext(PersonContext);
  console.log(mainData);
  return (
    <>
      {mainData.people.map((person) => {
        return <SinglePerson key={person.id} {...person} />;
      })}
    </>
  );
};

const SinglePerson = ({ id, name }) => {
  const { removePerson } = useContext(PersonContext);

  return (
    <div className="item" key={id}>
      <h4>{name}</h4>
      <button onClick={() => removePerson(id)}>Remove</button>
    </div>
  );
};
export default ContextAPI;
