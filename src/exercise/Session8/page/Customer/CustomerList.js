import React, { useState, useEffect } from "react";
import axios from "axios";
import { RiDeleteBinLine, RiFileEditLine } from "react-icons/ri";

export default function CustomerList() {
  const [customerList, setcustomerList] = useState([]);

  // Gọi data về
  let url = "https://62d8d6ff9c8b5185c78d9a81.mockapi.io/customer";
  async function fetchData() {
    try {
      let response = await axios.get(url, {
        params: {
          page: 1,
          limit: 20,
        },
      });
      let tempUsers = await response.data;
      setcustomerList(tempUsers);
    } catch (err) {
      console.log("Error: ", err.message);
    }
  }

  useEffect(() => {
    fetchData(url);
  }, []);
  //End

  return (
    <div style={{ padding: 0 }} className="col-10">
      <table className="table table-striped table-dark">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">NAME</th>
            <th scope="col">POSTCODE</th>
            <th scope="col">ADDRESS</th>
            <th scope="col">DOB</th>
            <th scope="col">EMAIL</th>
            <th scope="col">GENDER</th>
            <th scope="col">PHONE</th>
            <th scope="col">FEATURE</th>
          </tr>
        </thead>
        <tbody>
          {customerList.map((customer, index) => {
            return (
              <tr key={`customer-${index}`}>
                <th scope="row">{customer.id}</th>
                <td>{customer.name}</td>
                <td>{customer.postCode}</td>
                <td>{customer.address}</td>
                <td>{customer.dob}</td>
                <td>{customer.email}</td>
                <td>{customer.gender}</td>
                <td>{customer.phone}</td>
                <td>
                  <RiFileEditLine style={{fontSize: 20, marginRight: 13}} />
                  <RiDeleteBinLine style={{fontSize: 20}} />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
