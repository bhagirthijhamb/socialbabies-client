import React, { Component } from 'react';
import logo from './../assets/baby.png';

class Logo extends Component {
    render() {
        return(
                <div className="logo">
                    <img src={logo} alt="logo image" className="logo-image"/>
                </div>
        )
    }
}

export default Logo;