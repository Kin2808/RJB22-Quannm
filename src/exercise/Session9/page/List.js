import React, { useState, useEffect } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";


export default function List() {
  const [List, setList] = useState([]);

  async function fetchData() {
    try {
      let res = await axios.get(
        "https://62d8d6ff9c8b5185c78d9a81.mockapi.io/users",
        {
          params: {
            page: 1,
            limit: 5,
          },
        }
      );
      let temp = await res.data;
      setList(temp);
    } catch (err) {
      console.log(err.message);
    }
  }
  useEffect(() => {
    fetchData("https://62d8d6ff9c8b5185c78d9a81.mockapi.io/users");
  }, []);

  const deleteData = (id) => {
    axios
      .delete("https://62d8d6ff9c8b5185c78d9a81.mockapi.io/users/" + id)
      .then(function (res) {
        toast.success("Successfully Delete!");
        fetchData();
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div>
      <Toaster position="top-center" reverseOrder={false} />
      <table className="table">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">Branch</th>
            <th scope="col">Address</th>
            <th scope="col">Feature</th>
          </tr>
        </thead>
        <tbody>
          {List.map((data, index) => {
            return (
              <tr key={index}>
                <th scope="row">{index+1}</th>
                <td>{data.name}</td>
                <td>{data.branch}</td>
                <td>{data.address}</td>
                <td>
                  <button
                    onClick={(e) => {
                      deleteData(data.id, e);
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
