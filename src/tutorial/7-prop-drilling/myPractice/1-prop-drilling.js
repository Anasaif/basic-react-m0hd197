import React, { useState } from "react";
import { data } from "./Data";

const PropDrillings = () => {
  const [people, setPeople] = useState(data);
  const removePerson = (id) => {
    setPeople((people) => {
      return people.filter((person) => person.id !== id);
    });
  };

  return (
    <section>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSa504NHhke2kClj4QhxcZTZOjNJOhdUOXW2w&usqp=CAU" />
      <h3> Prop Drilling</h3>
      <List people={people} removePerson={removePerson} />
    </section>
  );
};

const List = ({ people, removePerson }) => {
  return (
    <>
      {people.map((person) => {
        return (
          <SinglePerson
            key={person.id}
            {...person}
            removePerson={removePerson}
          />
        );
      })}
    </>
  );
};

const SinglePerson = ({ id, name, removePerson }) => {
  return (
    <div className="item" key={id}>
      <h4>{name}</h4>
      <button onClick={() => removePerson(id)}>Remove</button>
    </div>
  );
};
export default PropDrillings;
