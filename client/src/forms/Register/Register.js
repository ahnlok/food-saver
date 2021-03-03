import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import CredentialsContext from '../../util/Test';
import { handleErrors } from '../Login/Login';
import { Link } from 'react-router-dom';
import './style.css';

export default function Register() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const {setCredential} = useContext(CredentialsContext)

    const register = (e) => {
        e.preventDefault();
        fetch(`http://localhost:3001/register`, {
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
            <div className="row">
                <h1 className="register_header center">Register</h1>
                <hr />

        <div className="af-view">
            <h1>Register</h1>
            {error && <span style={{ color: 'red' }}>{error}</span>}
            <form onSubmit={register} className="af-view" >

        <div className="field">
            <h1 className="register_header center">Register</h1>
            {error && <span style={{ color: 'red' }}>{error}</span>}
            <form onSubmit={register} className="center">
                <input
                className="af-view"
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder='username'
                ></input>
                <br />
                {error && <span style={{ color: 'red' }}>{error}</span>}
                <form onSubmit={register} className="col s12">
                    <div className="row">
                        <div className="input-field col s12 center">
                            <input
                                onChange={(e) => setUsername(e.target.value)}
                                placeholder='username'
                            />
                        </div>
                    </div>
                 <br />
                    {/* Add hash for password */}
                    <div className="row">
                        <div className="input-field col s12 center">
                            <input
                                type='password'
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder='password'
                            />
                        </div>
                    </div>
                    <button className="button is-primary is-large" type="submit">Register</button>
                    <br />
                    <br />
                    <h4><Link to="/login">Already Have A Account? </Link></h4>
                </form>
            </div>
        </div>
    )
}