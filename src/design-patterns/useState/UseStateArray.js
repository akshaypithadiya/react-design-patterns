import React from "react";
import { data } from "../../data";

const UseStateArray = () => {
  const [people, setPeople] = React.useState(data);

  const deleteList = () => {
    setPeople([]);
  };

  const removeItem = (id) => {
    let newPeopleList = people.filter((person) => person.id !== id);
    setPeople(newPeopleList);
  };

  return (
    <React.Fragment>
      <h1>useState Array</h1>
      {people.map((person) => {
        const { id, name } = person;
        return (
          <div className="list" key={id}>
            {name}{" "}
            <button type="button" onClick={() => removeItem(id)}>
              remove item
            </button>
          </div>
        );
      })}
      <button type="button" onClick={() => deleteList()}>
        delete list
      </button>
    </React.Fragment>
  );
};
export default UseStateArray;
