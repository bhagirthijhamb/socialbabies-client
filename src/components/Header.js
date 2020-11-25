import React, { Component } from 'react';
import Navbar from './../components/layout/Navbar';
import Logo from './../components/Logo'

class Header extends Component {
    render() {
        return(
            <div className="header">
                <Logo />
                <Navbar />
            </div>
        )
    }
}

export default Header;