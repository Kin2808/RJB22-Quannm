import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";

export default function CustomerForm() {
  const [customerList, setcustomerList] = useState([]);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  

  return (
    <form style={{backgroundColor: '#282828'}} className="col-10" onSubmit={handleSubmit(onSubmit)}>
      <div className="form-group">
        <label style={{color: 'white'}}>Name</label>
        <input
          {...register('name', {required: true})}
          className="form-control"
          placeholder="Your name is..."
        />
        {errors.name && (<p style={{color: 'red'}}>Please fill your name!</p>)}
      </div>

      <div className="form-group">
        <label style={{color: 'white'}}>Phone</label>
        <input
        type='number'
          {...register('phone', {required: true})}
          className="form-control"
          placeholder="Phone number..."
        />
        {errors.phone && (<p style={{color: 'red'}}>Please fill your phone number!</p>)}
      </div>

      <div className="form-group">
        <label style={{color: 'white'}}>Email</label>
        <input
          {...register('email', {required: true,
            pattern: /[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$/,})}
          className="form-control"
          placeholder="Your email is..."
        />
        {errors.email && (<p style={{color: 'red'}}>Something wrong here!</p>)}
      </div>

      <div className="form-group">
        <label style={{color: 'white'}}>Address</label>
        <input
          {...register('address', {required: true})}
          className="form-control"
          placeholder="Address..."
        />
        {errors.address && (<p style={{color: 'red'}}>Please fill your address!</p>)}
      </div>

      <div className="form-group">
        <label style={{color: 'white'}}>POSTCODE</label>
        <input
        type='number'
          {...register('postcode', {required: true})}
          className="form-control"
          placeholder="ZIP..."
        />
        {errors.postcode && (<p style={{color: 'red'}}>Please fill your postcode!</p>)}
      </div>

      <div className="form-group">
        <label style={{color: 'white'}}>gender</label>
        <input
        type='number'
          {...register('gender', {required: true})}
          className="form-control"
          placeholder="ZIP..."
        />
        {errors.gender && (<p style={{color: 'red'}}>Please fill your gender!</p>)}
      </div>

      <div className="form-group">
        <label style={{color: 'white'}}>DOB</label>
        <input
        type='number'
          {...register('DOB', {required: true})}
          className="form-control"
          placeholder="ZIP..."
        />
        {errors.DOB && (<p style={{color: 'red'}}>Please fill your DOB!</p>)}
      </div>

      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
}
