import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import CredentialsContext from '../util/Test';
import { handleErrors } from './Login';
import { Link } from 'react-router-dom';
import './StyleFolder/Register.css';

export default function Register() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const {setCredential} = useContext(CredentialsContext)

    const register = (e) => {
        e.preventDefault();
        fetch(`register`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                username,
                password,
            }),
        })
        .then(handleErrors)
        .then((res) => {
            setCredential(
                res.id,
                res.username,
                res.password,
            );
            sessionStorage.setItem("id", res.id);
            history.push('/');
        })
        .catch((error) => {
            setError(error.message);
        });
    };

    const history = useHistory();

    return (
        <div className="card">
            <h1 className="register_header center">Register</h1>
            <hr />
            {error && <span style={{ color: 'red' }}>{error}</span>}
            <form onSubmit={register} className="center">
                <div className="row">
                    <div className="input-field col s12">
                        <strong className="name">Name: 
                            <input
                                onChange={(e) => setUsername(e.target.value)}
                            />
                        </strong>
                    </div>
                </div>
                <br />
                <div className="row">
                    <div className="input-field col s12">
                        <strong className="password">Password:
                            <input
                                type='password'
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </strong>
                    </div>
                </div>
                <strong>
                <Link to="/login"
                className="login_link">Already Have An Account? Click Here</Link>
                </strong>
                <br />
                <button className="button is-danger" 
                id="register_button"
                type="submit">Register</button>
            </form>
        </div>
    )
}