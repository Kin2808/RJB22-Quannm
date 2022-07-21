import axios from "axios";
import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";

export default function ReactHookForm() {
  const [cities, setCities] = useState([]);

  const {
    register, // đăng ký tên dữ liệu
    handleSubmit, //quản lý sự kiện onsubmit
    watch,
    formState: { errors }, //quản lý lỗi
  } = useForm();

  let url = "https://provinces.open-api.vn/api/?depth=3";
  async function fetchData() {
    try {
      let response = await axios(url);
      let temp = await response.data;
      setCities(temp);
    } catch (err) {
      console.log("Error: ", err.message);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  const cityWatch = watch("city");
  const districtWatch = watch("district");

  const onSubmit = (data) => console.log(data);

  return (
    <form
      style={{ width: `1000px`, margin: `auto`, textAlign: `center` }}
      className="form-group row"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="col-md-6 mb-5">
        <label>Email:</label>
        <input
          className="form-control"
          placeholder="Email"
          {...register("email", {
            required: "true",
            pattern: /[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$/,
          })}
        />
        {errors.email && (
          <p style={{ color: "red"}}>
            Email is required
          </p>
        )}
        {/* <p>{errors.email  ? "sai cú pháp" : ""}</p> */}
      </div>

      <div className="col-md-6 mb-5">
        <label>Password:</label>
        <input
          className="form-control"
          type="password"
          {...register("password", { required: true })}
        />
        {errors.password && (
          <p style={{ color: "red"}}>Password is required</p>
        )}
      </div>

      <div className="col-12 mb-5">
        <label>Address:</label>
        <input className="form-control" placeholder="1234 Main St" {...register("address")} />
      </div>

      <div className="col-12 mb-5">
        <label>Address2:</label>
        <input className="form-control" placeholder="Apartment, studio, or floor" {...register("address2")} />
      </div>

      <div className="col-4">
        <label>City:</label>
        <select className="form-control" defaultValue="1" {...register("city", { required: true })}>
          <option value="1">Choose...</option>
          {cities.map((city) => {
            return <option key={city.code}>{city.name}</option>;
          })}
        </select>
      </div>

      <div className="col-4">
        <label>District:</label>
        <select className="form-control" defaultValue="1" {...register("district", { required: true })}>
          <option value="1">Choose...</option>
          {cities.map((city) => {
            return city.name === cityWatch
              ? city.districts.map((district) => {
                  return <option key={district.code}>{district.name}</option>;
                })
              : null;
          })}
        </select>
      </div>

      <div className="col-4">
        <label>Commune:</label>
        <select className="form-control" defaultValue="" {...register("ward", { required: true })}>
          <option value="">Choose...</option>
          {cities.map((city) => {
            return city.name === cityWatch
              ? city.districts.map((district) => {
                  return district.name === districtWatch
                    ? district.wards.map((ward) => {
                        return (
                          <option key={`ward-${ward.code}`}>{ward.name}</option>
                        );
                      })
                    : null;
                })
              : null;
          })}
        </select>
      </div>

      <div className="col-12 mb-3 mt-3">
        <div className="form-check text-left">
          <input
            type="checkbox"
            className="form-check-input"
          />
          <label className="form-check-label">
            Check me out
          </label>
        </div>
      </div>
      <div className="col-12">
        <button className="btn btn-primary" type="submit">Sign in</button>
      </div>
    </form>
  );
}
