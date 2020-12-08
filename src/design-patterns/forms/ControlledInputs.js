import React, { useState } from "react";

const ControlledInputs = () => {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [people, setPeople] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (firstName && email) {
      const person = {
        id: new Date().getTime().toString(),
        firstName: firstName,
        email: email,
      };
      setPeople((people) => {
        return [...people, person];
      });
      setFirstName("");
      setEmail("");
    } else {
      console.log("empty form submitted with empty values");
    }
  };
  return (
    <div>
      <h1>Controlled Inputs</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="firstName">Name : </label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        &nbsp;
        <label htmlFor="firstName">Email : </label>
        <input
          type="text"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        &nbsp;
        <button type="submit">add person</button>
      </form>
      <div>
        {people.map((person) => {
          const { id, firstName, email } = person;
          return (
            <div key={id}>
              <h2>List of values</h2>
              {firstName}, <a href="#">{email}</a>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ControlledInputs;
