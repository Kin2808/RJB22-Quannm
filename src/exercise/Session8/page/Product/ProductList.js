import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";
import { GrLinkNext, GrLinkPrevious } from "react-icons/gr";
import { RiDeleteBinLine, RiFileEditLine } from "react-icons/ri";
import "./product.css";

export default function CustomerList() {
  const [productList, setproductList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [pageNumber, setpageNumber] = useState(1);

  // Gọi data về
  let url = "https://62d8d6ff9c8b5185c78d9a81.mockapi.io/product";
  async function fetchData() {
    try {
      let response = await axios.get(url, {
        params: {
          page: pageNumber,
          limit: 20,
        },
      });
      let tempUsers = await response.data;
      setproductList(tempUsers);
      setLoading(!loading);
    } catch (err) {
      console.log("Error: ", err.message);
    }
  }

  useEffect(() => {
    fetchData(url);
  }, [pageNumber]);
  //End

  const deleteData = (id) => {
    axios
      .delete("https://62d8d6ff9c8b5185c78d9a81.mockapi.io/product/" + id)
      .then(function (res) {
        toast.success("Successfully Delete!");
        fetchData();
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div style={{ padding: 0, marginTop: "80px" }} className="col-10">
      <Toaster position="top-center" reverseOrder={false} />
      <table
        style={{ height: "100%" }}
        className="product table table-striped table-dark"
      >
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
        {loading && <span>PLEASE WAIT...!</span>}
        <tbody>
          {productList.map((product, index) => {
            return (
              <tr key={`product-${index}`}>
                <th scope="row">{index + 1}</th>
                <td>{product.name}</td>
                <td
                  style={{
                    backgroundColor: `${product.color}`,
                    borderRadius: "50%",
                    textAlign: "center",
                    lineHeight: "48px",
                  }}
                >
                  {product.color}
                </td>
                <td>{product.price}</td>
                <td>{product.description}</td>
                <td>
                  <Link to={`/product/edit/${product.id}`}>
                    <RiFileEditLine
                      style={{ fontSize: 20, marginRight: 13, color: "white" }}
                    />
                  </Link>
                  <RiDeleteBinLine
                    onClick={(e) => deleteData(product.id, e)}
                    style={{ fontSize: 20, cursor: "pointer" }}
                  />
                </td>
              </tr>
            );
          })}
        </tbody>

        <button
          className="product-btn-a"
          onClick={() => {
            {
              pageNumber > 1 && setpageNumber(pageNumber - 1);
            }
          }}
        >
          <GrLinkPrevious />
        </button>

        <button
          className="product-btn-b"
          onClick={() => {
            productList.length == 20 && setpageNumber(pageNumber + 1);
          }}
        >
          <GrLinkNext />
        </button>
      </table>
    </div>
  );
}
