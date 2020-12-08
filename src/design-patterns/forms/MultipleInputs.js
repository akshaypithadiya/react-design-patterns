import React, { useState } from "react";

// value, onChange
// dynamic object properties

const MultipleInputs = () => {
  const [person, setPerson] = useState({
    firstName: "",
    email: "",
    age: "",
  });
  const [people, setPeople] = useState([]);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setPerson({ ...person, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (person.firstName && person.email && person.age) {
      const newPerson = { ...person, id: new Date().getTime().toString() };
      setPeople([...people, newPerson]);
      setPerson({ firstName: "", email: "", age: "" });
    }
  };

  return (
    <div>
      <h1>Multiple Inputs</h1>
      <form>
        <label htmlFor="firstName">Name : </label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          value={person.firstName}
          onChange={handleChange}
        />
        &nbsp;
        <label htmlFor="firstName">Email : </label>
        <input
          type="text"
          id="email"
          name="email"
          value={person.email}
          onChange={handleChange}
        />
        &nbsp;
        <label htmlFor="firstName">Age : </label>
        <input
          type="text"
          id="age"
          name="age"
          value={person.age}
          onChange={handleChange}
        />
        &nbsp;
        <button type="submit" onClick={handleSubmit}>
          add person
        </button>
      </form>
      <div>
        <h2>List of values</h2>
        {people.map((person) => {
          const { id, firstName, email, age } = person;
          return (
            <div key={id}>
              {firstName}, <a href="#">{email}</a>, {age}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MultipleInputs;
