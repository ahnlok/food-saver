import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Items from '../components/Items'

import CredentialsContext from '../util/Test';

export default function Welcome () {
    const {id, username, password, setCredential} = useContext(CredentialsContext);
    const logout = () => {
        setCredential(null);
    };

    return (
        <div>
            {id && <button onClick={logout}>Logout</button>}
            <h1>Welcome {id && username} to The Food Saver</h1>
            {!id && <Link to="/register">Register</Link>}
            <br />
            {!id && <Link to="/login">Login</Link>}
            {id && <Items />}
        </div>
    )
}