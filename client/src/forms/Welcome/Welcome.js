import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Items from '../../components/Items';
import DateTime from '../DateTime'
import './style.css'

import CredentialsContext from '../../util/Test';

export default function Welcome () {
    const {id, username, password, setCredential} = useContext(CredentialsContext);
    const logout = () => {
        setCredential(null);
    };

    return (
        <div className="background">
            {id && <button onClick={logout}>Logout</button>}
            <h1 className="header center">Welcome {id && username} to The Food Saver</h1>
            <DateTime className="date"></DateTime>
            {/* <hr /> */}
            <br />
            <div className="register center row">
                {/* Register Button */}
                <button className="button is-primary"
                id="register_button">
               {!id && 
               <Link 
               to="/register"
               className="register_link">
                Register</Link>}
                </button>
                {/* Log-In Button */}
                <button className="button is-link"
                id="login_button">
                {!id && <Link to="/login"
                className="login_link">Login</Link>}
                </button>
            </div>
            {id && <Items />}
        </div>
    )
}