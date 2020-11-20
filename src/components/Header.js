import React, { Component } from 'react';
import Navbar from './Navbar';
import Logo from './../components/Logo'

class Header extends Component {
    render() {
        return(
            <header>
                <Logo />
                <Navbar />
            </header>
        )
    }
}

export default Header;