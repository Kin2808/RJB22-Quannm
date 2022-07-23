import React, { useState, useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";

export default function CustomerForm() {
  let { id } = useParams();
  const [customerList, setcustomerList] = useState([]);
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm();

  //Lay data ve khi update
  let url = "https://62d8d6ff9c8b5185c78d9a81.mockapi.io/customer/" + id;
  async function fetchList() {
    try {
      let res = await axios.get(url);
      let temp = await res.data;
      setcustomerList(temp);
      if (id) {
        setValue("name", temp.name);
        setValue("postcode", temp.postcode);
        setValue("address", temp.address);
        setValue("dob", temp.dob);
        setValue("email", temp.email);
        setValue("gender", temp.gender);
        setValue("phone", temp.phone);
      }
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    if (id) {
      let tempCustomer = fetchList(url)
      tempCustomer.then((res) => res)
    }
  }, []);
  //End

  const onSubmit = (data, e) => {
    e.preventDefault();
    if (id) {
      toast.success("Successfully Update!");
      putData(data);
      console.log("cap nhat" + data);
    } else {
      toast.success("Successfully Post!");
      postData(data);
      console.log("tao" + data);
    }
  };

  //Tao data moi
  const postData = () => {
    axios
      .post("https://62d8d6ff9c8b5185c78d9a81.mockapi.io/customer/")
      .then(function (res) {
        console.log(res);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  //End

  //Update Data
  const putData = (data) => {
    let Data = {
      name: data.name,
      phone: data.phone,
      gender: data.gender,
      email: data.email,
      DOB: data.dob,
      address: data.address,
      postcode: data.postcode,
    };
    axios
      .put("https://62d8d6ff9c8b5185c78d9a81.mockapi.io/customer/" + id, Data)
      .then(function (res) {
        console.log(res);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  //End

  return (
    <>
      <div
        style={{ padding: 0, marginTop: "80px", backgroundColor: "#282828" }}
        className="col-10"
      >
        <h1
          style={{
            textAlign: "center",
            color: "white",
            fontFamily: "auto",
            fontSize: "30px",
            marginTop: "30px",
          }}
        >
          CUSTOMER FORM
        </h1>
        <form
          style={{
            padding: "50px",
          }}
          onSubmit={handleSubmit(onSubmit)}
        >
          <Toaster position="top-center" reverseOrder={false} />
          <div className="row mb-5">
            <div className="form-group col-6">
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

            <div className="form-group col-4">
              <label style={{ color: "white" }}>Phone</label>
              <input
                type="number"
                {...register("phone", { required: true })}
                className="form-control"
                placeholder="Phone number..."
              />
              {errors.phone && (
                <p style={{ color: "red" }}>Please fill your phone number!</p>
              )}
            </div>
            <div className="form-group col-2">
              <label style={{ color: "white" }}>gender</label>
              <select
                defaultValue={""}
                {...register("gender", { required: true })}
                className="form-control"
              >
                <option value={""}>Choose...</option>
                <option value={"Man"}>Man</option>
                <option value={"Woman"}>Woman</option>
                <option value={"Another"}>Another</option>
              </select>
              {errors.gender && (
                <p style={{ color: "red" }}>Please choose your gender!</p>
              )}
            </div>
          </div>

          <div className="row mb-5">
            <div className="form-group col-6">
              <label style={{ color: "white" }}>Email</label>
              <input
                {...register("email", {
                  required: true,
                  pattern: /[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$/,
                })}
                className="form-control"
                placeholder="Your email is..."
              />
              {errors.email && (
                <p style={{ color: "red" }}>Something wrong here!</p>
              )}
            </div>

            <div className="form-group col-6">
              <label style={{ color: "white" }}>DOB</label>
              <input
                type="date"
                {...register("dob", { required: true })}
                className="form-control"
              />
              {errors.DOB && (
                <p style={{ color: "red" }}>Please fill your DOB!</p>
              )}
            </div>
          </div>

          <div className="row mb-5">
            <div className="form-group col-6">
              <label style={{ color: "white" }}>Address</label>
              <input
                {...register("address", { required: true })}
                className="form-control"
                placeholder="Address..."
              />
              {errors.address && (
                <p style={{ color: "red" }}>Please fill your address!</p>
              )}
            </div>

            <div className="form-group col-6">
              <label style={{ color: "white" }}>POSTCODE</label>
              <input
                type="number"
                {...register("postcode", { required: true })}
                className="form-control"
                placeholder="ZIP..."
              />
              {errors.postcode && (
                <p style={{ color: "red" }}>Please fill your postcode!</p>
              )}
            </div>
          </div>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </>
  );
}
