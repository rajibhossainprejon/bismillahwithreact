import React from 'react';
import logo from '../../images/logo.png';
import './Header.css';
const Header = () => {
    return (
        <div className="header">
            <div className="mainlogo">
            <img src={logo} alt=""/>
    
        </div>
        <nav >
            <a href="/Shop">Shop</a>
            <a href="/OrderOverview">Order Overview </a>
            <a href="/ManageInventoryHere">Manage Inventory Here</a>
        </nav>

        </div>
    );
};

export default Header;