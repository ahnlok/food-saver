import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import CredentialsContext from '../../util/Test';

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
        <div className="field">
            <h1 className="register_header center">Register</h1>
            {error && <span style={{ color: 'red' }}>{error}</span>}
            <form onSubmit={register} className="center">
                <input
                className="af-view"
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder='username'
                />
                <br />
                {/* Add hash for password */}
                <input
                    type='password'
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder='password'
                />
                <br />
                <button type="submit">Register</button>
            </form>
        </div>
    )
}