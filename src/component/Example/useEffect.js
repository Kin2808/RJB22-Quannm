import React, { useState, useEffect } from "react";
import axios from "axios";

function UseEffect() {
  const [users, setUsers] = useState([]);

  // Dàn bài để xây dựng database
  async function fetchData() {
    try {
      let response = await axios("/users");
      let tempUsers = await response.data;
      console.log(response);
      setUsers(tempUsers);
    } catch (err) {
      console.log("Error: ", err.message);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);
  //End

  
  return (
    <div className="d-flex flex-wrap justify-content-around">
      {users.map((user, index) => {
        return <p>{user.name}</p>;
      })}
    </div>
  );
}

export default UseEffect;
