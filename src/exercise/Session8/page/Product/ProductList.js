import React, { useState, useEffect } from "react";
import axios from "axios";
import { RiDeleteBinLine, RiFileEditLine } from "react-icons/ri";

export default function CustomerList() {
  const [productList, setproductList] = useState([]);

  // Gọi data về
  let url = "https://62d8d6ff9c8b5185c78d9a81.mockapi.io/product";
  async function fetchData() {
    try {
      let response = await axios.get(url, {
        params: {
          page: 1,
          limit: 20,
        },
      });
      let tempUsers = await response.data;
      setproductList(tempUsers);
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
            <th scope="col">COLOR</th>
            <th scope="col">PRICE</th>
            <th scope="col">DESCRIPTION</th>
            <th scope="col">FEATURE</th>
          </tr>
        </thead>
        <tbody>
          {productList.map((product, index) => {
            return (
              <tr key={`product-${index}`}>
                <th scope="row">{product.id}</th>
                <td>{product.name}</td>
                <td>{product.color}</td>
                <td>{product.price}</td>
                <td>{product.description}</td>
                <td>
                  <RiFileEditLine style={{ fontSize: 20, marginRight: 13 }} />
                  <RiDeleteBinLine style={{ fontSize: 20 }} />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
