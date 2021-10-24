import React, {useContext} from 'react';
import {useHistory} from 'react-router-dom';
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
                <a href={'https://api.nasa.gov/'} className="brand-logo"><img alt="logo" src="https://mcdn.wallpapersafari.com/medium/72/34/ECT6hw.png"/></a>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><a href="#collections">Collections</a></li>
                    <li><a href="#my-collections">My coll</a></li>
                    <li><a href="/">Home</a></li>
                    <li><a href="/" onClick={logoutHandler}>Logout</a></li>
                </ul>
            </div>
        </nav>
    )
}
