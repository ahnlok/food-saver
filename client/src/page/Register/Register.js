import React from "react";
import { Link } from "react-router-dom";
import API from "../../utils/API";
import "./Register.css";

class Register extends React.Component {
    // Register format
    state = {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        passwordConfirm: "",
    }

    handleInputChange = e => {
        let { name, value } = e.target
        this.setState({
            [name]: value
        })
    }

    handleRegister = (e) => {
        e.preventDefault();

        let { firstName, lastName, email, password, passwordConfirm } = this.state
        if (email && password === passwordConfirm) {
            let cred = {
                firstName,
                lastName,
                email,
                password,
            }
            API.register(cred)
                .then(res => {
                    this.setState({
                        email: "",
                        password: "",
                        passwordConfirm: "",
                    })
                    window.location.href = "/login"
                })
                .catch(err => console.log(err))
        }
    }

    render() {
        return (
            // Registration form starts
            <div className="container mt-4 mb-5">
                <h1 className="center">The Food Saver</h1>
                <div className="container col-6 mx-auto">
                    <h2 className="col-6">Register</h2>
                    <form>
                        <div className="row">
                            {/* First Name */}
                            <div className="form-group col-6">
                                <label htmlFor="firstName">First Name</label>
                                <input
                                    value={this.state.firstName}
                                    name="firstName"
                                    onChange={this.handleInputChange}
                                    type="text"
                                    className="form-control"
                                    id="firstName"
                                    placeholder="First Name"
                                />
                            </div>
                            {/* Last Name */}
                            <div className="form-group col-6">
                                <label htmlFor="lastName">Last Name</label>
                                <input
                                    value={this.state.lastName}
                                    name="lastName"
                                    onChange={this.handleInputChange}
                                    type="text"
                                    className="form-control"
                                    id="lastName"
                                    placeholder="Last Name"
                                />
                            </div>
                        </div>
                        {/* Email */}
                        <div className="row">
                            <div className="form-group col-12">
                                <label htmlFor="email">Email</label>
                                <input 
                                    value={this.state.email}
                                    name="email"
                                    onChange={this.handleInputChange}
                                    type="email"
                                    className="form-control"
                                    id="email"
                                    aria-describedby="emailHelp"
                                    placeholder="Email"
                                />
                            </div>
                        </div>
                        {/* Password */}
                        <div className="row">
                            <div className="form-group col-6">
                                <label htmlFor="password">Password</label>
                                <input 
                                    value={this.state.password}
                                    name="password"
                                    onChange={this.handleInputChange}
                                    type="password"
                                    className="form-control"
                                    id="password"
                                    placeholder="Password"
                                />
                            </div>
                            {/* Confirm Password */}
                            <div className="form-group col-6">
                                <label htmlFor="password">Confirm Password</label>
                                <input 
                                    value={this.state.passwordConfirm}
                                    name="passwordConfirm"
                                    onChange={this.handleInputChange}
                                    type="password"
                                    className="form-control"
                                    id="passwordConfirm"
                                    placeholder="Password Confirm"
                                />
                            </div>
                        </div>
                        {/* Submit Button */}
                        <div className="row col-6">
                            <button onClick={this.handleRegister} type="submit" className="btn col-6">Register</button>
                        </div>
                    </form>
                    {/* Log-In Link */}
                    <Link className="col-6" to="/login">Already Have an Account? Click Here to Log-In</Link>
                </div>
            </div>
        )
    }
}

export default Register;