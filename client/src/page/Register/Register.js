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
                                <label html
                            </div>
                        </div>

                    </form>
                </div>
            </div>
        )
    }
}