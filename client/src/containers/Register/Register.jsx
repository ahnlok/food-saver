import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import jwt from "jsonwebtoken";

const Register = () => {
    const handleSubmit=(e)=>{
        
    }



  return (
    <div className="container">
      <div className="row">
        <div className="col s12">
          <h1 className="center-align">Register</h1>
          <h3 className="center-align">Please Complete Each Field</h3>
        </div>

      </div>
      <div className="row">
        <form className="col s12">
          <div className="row">
            <div className="col s3"></div>
            <div className="input-field col s6">
              <input
                id="email"
                type="email"
                name="email"
                placeholder="Email"
                
                
              />
              {/* <label htmlFor="title">Email</label> */}
            </div>
          </div>
          <div className="row">
            <div className="col s3"></div>
            <div className="input-field col s6">
              <input
                id="password"
                type="password"
                name="password"
                placeholder="Password"
              />
              {/* <label htmlFor="title">Password</label> */}
            </div>
          </div>
          <div className="row center-align">
            <button className="waves-effect waves-light btn">
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
