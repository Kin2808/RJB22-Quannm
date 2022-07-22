import React, { useState, useEffect } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";

export default function ProductForm() {
  let { id } = useParams();
  const [productList, setproductList] = useState([]);
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm();

  let url = "https://62d8d6ff9c8b5185c78d9a81.mockapi.io/product/" + id;
  async function fetchList(id) {
    try {
      let res = await axios.get(url);
      let temp = await res.data;
      setproductList(temp);
      if (id) {
        setValue("name", temp.name);
        setValue("color", temp.color);
        setValue("price", temp.price);
      }
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    fetchList(url);
  }, []);

  const onSubmit = (data, e) => {
    e.preventDefault();
    if (id) {
      putData(data);
      console.log("cap nhat" + data);
    } else {
      postData(data);
      console.log("tao" + data);
    }
  };

  //Tao 1 data moi
  const postData = (data) => {
    let Data = {
      name: data.name,
      color: data.color,
      price: data.price,
    };
    axios
      .post("https://62d8d6ff9c8b5185c78d9a81.mockapi.io/product", Data)
      .then(function (res) {
        console.log(res);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  //End

  //Update data
  const putData = (data) => {
    let Data = {
      name: data.name,
      color: data.color,
      price: data.price,
    };
    axios
      .put("https://62d8d6ff9c8b5185c78d9a81.mockapi.io/product" + id, Data)
      .then(function (res) {
        console.log(res);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  //End

  return (
    <form
      style={{ backgroundColor: "#282828", padding: "50px" }}
      className="col-10"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="row">
        <div className="form-group col-12">
          <label style={{ color: "white" }}>Name</label>
          <input
            {...register("name", { required: true })}
            className="form-control"
            placeholder="Your name is..."
          />
          {errors.name && (
            <p style={{ color: "red" }}>Please fill your name!</p>
          )}
        </div>

        <div className="form-group col-6">
          <label style={{ color: "white" }}>Color</label>
          <input
            {...register("color", { required: true })}
            className="form-control"
            placeholder="Color is..."
          />
          {errors.color && (
            <p style={{ color: "red" }}>Please fill product's color!</p>
          )}
        </div>
        <div className="form-group col-6">
          <label style={{ color: "white" }}>Price</label>
          <input
            type="number"
            {...register("price", { required: true })}
            className="form-control"
            placeholder="price is..."
          />
          {errors.price && (
            <p style={{ color: "red" }}>Please fill product's price!</p>
          )}
        </div>

        <div className="form-group col-12">
          <label style={{ color: "white" }}>Description</label>
          <input
            {...register("desciption")}
            className="form-control"
            placeholder="Desciption..."
          />
        </div>
      </div>

      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
}
