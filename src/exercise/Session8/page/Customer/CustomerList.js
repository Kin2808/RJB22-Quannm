import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";
import { RiDeleteBinLine, RiFileEditLine } from "react-icons/ri";

export default function CustomerList() {
  const [customerList, setcustomerList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [pageNumber, setpageNumber] = useState (0)

  // Gọi data về
  let url = "https://62d8d6ff9c8b5185c78d9a81.mockapi.io/customer";
  async function fetchData() {
    try {
      let response = await axios.get(url, {
        params: {
          page: pageNumber+1,
          limit: 20,
        },
      });
      let tempUsers = await response.data;
      setcustomerList(tempUsers);
      setLoading(false);
    } catch (err) {
      console.log("Error: ", err.message);
    }
  }

  useEffect(() => {
    fetchData(url);
  }, [pageNumber]);
  //End

  // Xóa data
  const deleteData = (id) => {
    axios
      .delete("https://62d8d6ff9c8b5185c78d9a81.mockapi.io/customer/" + id)
      .then(function (res) {
        toast.success("Successfully Delete!");
        fetchData();
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  //End

  return (
    <div style={{ padding: 0, marginTop: '80px' }} className="col-10">
      <Toaster position="top-center" reverseOrder={false} />
      <table style={{height:'100%'}} className="table table-striped table-dark">
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
        {loading && <span>PLEASE WAIT...!</span>}
        <tbody>
          {customerList.map((customer, index) => {
            return (
              <tr key={`customer-${index}`}>
                <th scope="row">{index+1}</th>
                <td>{customer.name}</td>
                <td>{customer.postCode}</td>
                <td>{customer.address}</td>
                <td>{customer.dob}</td>
                <td>{customer.email}</td>
                <td>{customer.gender}</td>
                <td>{customer.phone}</td>
                <td>
                  <Link to={`/customer/edit/${customer.id}`}>
                    <RiFileEditLine
                      style={{ fontSize: 20, marginRight: 13, color: "white" }}
                    />
                  </Link>
                  <RiDeleteBinLine
                    onClick={(e) => deleteData(customer.id, e)}
                    style={{ fontSize: 20, cursor: "pointer" }}
                  />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
