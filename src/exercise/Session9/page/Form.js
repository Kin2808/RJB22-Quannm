import React, { useState, useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";
import { useForm } from "react-hook-form";

export default function Form() {
  const textAddress = ["43 Domenic Horse", "92 Run Bear", "75 Chauncey Lion"];
  const [branchSth, setBranchSth] = useState("");
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm();

  const onSubmit = (data, e) => {
    e.preventDefault();
    postData(data);
    console.log(data);
  };

  const postData = () => {
    axios
      .post("https://62d8d6ff9c8b5185c78d9a81.mockapi.io/users")
      .then(function (res) {
        console.log(res);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const GenAddress = () => {
    console.log(branchSth);
    if (branchSth === "001") {
      setValue("address", textAddress[0]);
    } else if (branchSth === "002") {
      setValue("address", textAddress[1]);
    } else {
      setValue("address", textAddress[2]);
    }
  };

  return (
    <div >
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <label>Name</label>
          <input
            className="form-control"
            placeholder="Name"
            {...register("name", { required: true })}
          />
          {errors.name && (
            <p style={{ color: "red" }}>Please fill your name!</p>
          )}
        </div>

        <div className="form-group">
          <label>Branch</label>
          <input
            type="text"
            defaultValue={branchSth}
            onChange={(e) => setBranchSth(e.target.value)}
            placeholder="Branch.No"
            className="form-control"
            {...register("branch", { required: true })}
          />
          <button onClick={GenAddress}>Gen Address</button>
        </div>
        <input
          {...register("address")}
          className="form-control"
          placeholder="Please.."
          readOnly
        />
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}
