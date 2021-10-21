import React, {useContext} from 'react';
import {NavLink, useHistory} from 'react-router-dom';
import {AuthContext} from "../../context/AuthContext";
import './NavBar.css';


export const Navbar = () => {
    const history = useHistory();
    const auth = useContext(AuthContext);

    const logoutHandler = event => {
        event.preventDefault();
        auth.logout();
        history.push('/');
    }

    return (
        <nav>
            <div className="nav-wrapper navbar" style={{ padding: '0 2rem' }}>
                <span className="brand-logo"><img alt="logo" src="https://lh3.googleusercontent.com/proxy/4ctXE9F6h3QbMj2-LnvYTLWEKT0cBU5UfiNR-OM6eXWYDhyqSOhcsNb4G5xREvFPclfyuX919QSFeyw9Mm30v1BQhOPYxeQ"/></span>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><NavLink to="/collections">My collections</NavLink></li>
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><a href="/" onClick={logoutHandler}>Logout</a></li>
                </ul>
            </div>
        </nav>
    )
}
