import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import CredentialsContext from '../util/Test';

export const handleErrors = async (response) => {
    if (!response.ok) {
        const { message } = await response.json();
        throw Error(message);
    }
    return response.json();
};

export default function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const {setCredential} = useContext(CredentialsContext)

    const login = (e) => {
        e.preventDefault();
        fetch(`/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username,
                password,
            })
        })
        .then(handleErrors)
        .then((res) => {
            console.log(res);
            setCredential(res.id, res.username, res.password
                // TODO: Set the user id from the response
            );
            sessionStorage.setItem("id", res.id);
            history.push('/');
        })
        .catch((error) => {
            setError(error.message);
        });
    }

    const history = useHistory();

    return (
        <div>
            <h1>Login</h1>
            {error && <span style={{ color: 'red' }}>{error}</span>}
            <form onSubmit={login}>
                <input
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="username"
                />
                <br />
                <input
                    type="password"
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="password"
                />
                <br />
                <button type="submit">Login</button>
            </form>
        </div>
    );
}