import React, { useEffect, useState } from "react";

const url = "https://api.github.com/users";

const UseEffectFetchData = () => {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    const response = await fetch(url);
    const users = await response.json();
    setUsers(users);
    console.log(users);
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div>
      <h1>useEffect Fetch Data</h1>
      {users.map((user) => {
        const { id, login, avatar_url, html_url } = user;
        return (
          <div key={id}>
            <img src={avatar_url} alt={login} width="200px" height="200px" />
            <p>
              {login}
              <br />
              <a href={html_url}>Github</a>
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default UseEffectFetchData;
