import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
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

  const deleteData = (id) => {
    axios
      .delete('https://62d8d6ff9c8b5185c78d9a81.mockapi.io/product/' + id)
      .then(function (res) {
        toast.success('Successfully Delete!')
        fetchData();
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div style={{ padding: 0, marginTop: '80px' }} className="col-10">
      <Toaster position="top-center" reverseOrder={false} />
      <table style={{height:'100%'}} className="table table-striped table-dark">
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
                <td style={{backgroundColor: `${product.color}`, borderRadius: '55px', textAlign:'center', lineHeight:'48px'}}>{product.color}</td>
                <td>{product.price}</td>
                <td>{product.description}</td>
                <td>
                  <Link to={`/product/edit/${product.id}`}>
                    <RiFileEditLine
                      style={{ fontSize: 20, marginRight: 13, color: "white" }}
                    />
                  </Link>
                  <RiDeleteBinLine onClick={(e) => deleteData(product.id, e)} style={{ fontSize: 20, cursor: 'pointer' }} />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
