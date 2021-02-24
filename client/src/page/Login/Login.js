import React from "react";
import { Link } from "react-router-dom";
import API from "../../utils/API";
import "./Login.css";

class Login extends React.Component {
    // Log-In format
    state = {
        email: "",
        password: "",
    }

    handleInputChange = event => {
        let { name, value } = event.target;
        this.setState({
            [name]: value
        })
    }

    handleLogin = (e) => {
        e.preventDefault();
        let { email, password } = this.state
        if (email && password) {
            // console.log("Logging in")
            let cred = {
                email,
                password
            }
            API.login(cred)
                .then(res => {
                    this.setState({
                        email: "",
                        password: ""
                    })
                    // Once the user logs in the page will redirect to the my inventory page
                    window.location.href = '/inventory'
                })
        }
    }

    render () {
        return (
            <div>
                <div className="container col-m-6" style={{ marginTop: '3rem' }}>
                    <h1 className="display-4 center">The Food Saver</h1>
                    <div className="container col-6 mx-auto mt-5">
                        <h2>Log-In</h2>
                        <form>
                            {/* Email */}
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
                                    placeholder="Type your email"
                                />
                            </div>
                            {/* Password */}
                            <div className="form-group col-12">
                                <label htmlFor="password">Password</label>
                                <input
                                    value={this.state.password}
                                    name="password"
                                    onChange={this.handleInputChange}
                                    type="password" 
                                    className="form-control"
                                    id="password"
                                    placeholder="Type your password"
                                />
                            </div>
                            {/* Log-In Button */}
                            <div className='col-6'>
                                <button onClick={this.handleLogin} type="submit" className="btn">Log-In</button> 
                                <span><Link className="btn" to="/register">Don't Have an Account Yet? Click Here to Register</Link></span>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login;