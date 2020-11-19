import React, { Component } from 'react';
import Navbar from './Navbar';
import logo from './../assets/baby.png';
class Header extends Component {
    render() {
        return(
            <header>
                <div className="logo">
                    <img src={logo} alt="logo image" className="logo-image"/>
                </div>
                <Navbar />
            </header>
        )
    }
}

export default Header;