import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import CredentialsContext from '../util/Test';
import { Link } from 'react-router-dom';
import './StyleFolder/Login.css';

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
        <div className='card'>
            <h1 className="header">Login</h1>
            <hr />
            {error && <span style={{ color: 'red' }}>{error}</span>}
            <form onSubmit={login}>
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
                                type="password"
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </strong>
                    </div>
                </div>
                <strong><Link 
               to="/register"
               className="register_link">
               Don't Have An Account? Click Here</Link></strong>
                <br />
                <button className="button is-info" id="login_button" type="submit">Login</button>
            </form>
        </div>
    );
}