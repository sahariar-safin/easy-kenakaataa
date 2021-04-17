import React, { useContext } from 'react';
import './Header.css'
import { Link } from "react-router-dom";
import { UserContext } from '../../App';

const Header = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    return (
        <div className='container'>
            <div className="header">
                <nav className="navbar navbar-expand-lg navbar-light bg-transparent">
                    <div className="logo">
                        <Link to="/">Easy Kenakaataa</Link>
                    </div>
                    <div className="main-manu text-end">
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                                <li class="nav-item">
                                    <Link to="/home" className="nav-link">Home</Link>
                                </li>
                                <li class="nav-item">
                                    <Link to="/admin" className="nav-link">Admin</Link>
                                </li>
                                <li class="nav-item">
                                    <Link to="/order" className="nav-link">Order</Link>
                                </li>
                                <li>
                                    {
                                        loggedInUser.email ? <img className="user-img" src={loggedInUser.photoURL} title={loggedInUser.displayName} alt={loggedInUser.displayName} /> : <Link to="/login"><button className="btn btn-primary">Login</button></Link>
                                    }
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    );
};

export default Header;