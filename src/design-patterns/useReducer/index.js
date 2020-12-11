import React, { useState } from "react";
import Modal from "./Modal";
import { data } from "../../data";
import { prettyDOM } from "@testing-library/react";

const Index = () => {
  const [name, setName] = useState("");
  const [people, setPeople] = useState(data);
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name) {
      setShowModal(true);
      setPeople([...people, { id: new Date().getTime().toString(), name }]);
      setName("");
    } else {
      setShowModal(true);
    }
  };

  return (
    <>
      <h1>useState</h1>
      {showModal && <Modal />}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />{" "}
        &nbsp;
        <button type="submit">Add</button>
      </form>
      {people.map((person) => {
        return <h2 key={person.id}>{person.name}</h2>;
      })}
    </>
  );
};

export default Index;
