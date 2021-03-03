import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import CredentialsContext from '../../util/Test';
import { Link } from 'react-router-dom';
import './Login.css';

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
        <div className="card">
            <div className="row">
                <h1 className="login_header">Login</h1>
                <hr />
                <br />
                {error && <span style={{ color: 'red' }}>{error}</span>}
                <br />
                <form onSubmit={login} className="col s12">
                    {/* Username */}
                    <div className="row">
                        <div className="input-field col s12">
                            <input
                                onChange={(e) => setUsername(e.target.value)}
                                placeholder="username"
                            />
                        </div>
                    </div>
                    <br />
                    {/* Password */}
                    <div className="row">
                        <div className="input-field cold s12">
                            <input
                                type="password"
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="password"
                            />
                        </div>
                    </div>
                    <button className="button is-link is-large" type="submit">Login</button>
                    <br />
                    <br />
                    <h4><Link to="/login">Do Not Have A Account? </Link></h4>
                </form>
            </div>
        </div>
    );
}