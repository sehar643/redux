import React, { useState } from "react";
import { Link } from "react-router-dom";

const DetailForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    address: "",
    phoneNumber: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div>
      <div>
        <div>
          <h3>Confirm your order</h3>
        </div>
        <form className="login-form">
          Name: 
          <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="username" /> <br/><br/>
          Email: 
          <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="email" /> <br/><br/>
          Password: 
          <input type="password" name="password" value={formData.password} onChange={handleChange} placeholder="password" /> <br/><br/>
          Address: 
          <input type="text" name="address" value={formData.address} onChange={handleChange} placeholder="address" /><br/><br/>
          Phone #: 
          <input type="number" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} placeholder="phone no." /><br/><br/>
            <button className="btn btn-success my-2">Submit</button>

            <h1>Name: {formData.name}</h1>
        <h1>Email: {formData.email}</h1>
        <h1>Password: {formData.password}</h1>
        <h1>Adress: {formData.address}</h1>
        <h1>Phone #: {formData.phoneNumber}</h1>



        </form>
      </div>
    </div>
  );
};

export default DetailForm;
