import React, { Component } from 'react';
import HomeSignupLoginNavigation from './../components/HomeSignupLoginNavigation';
// implementing Treeshaking, importing just that component
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faBell, faUserAlt } from '@fortawesome/free-solid-svg-icons';


class Navbar extends Component {
    render() {
        return(
            <nav className="headerNav">
                <div className="primaryNav">
                    <li><button className="navBar-button"><span className="navBar-buttonIcon"><FontAwesomeIcon icon={faHome} /></span> Home</button></li>
                    <li><button className="navBar-button"><span className="navBar-buttonIcon"><FontAwesomeIcon icon={faBell} /></span> Notifications</button></li>
                    <li><button className="navBar-button"><span className="navBar-buttonIcon"><FontAwesomeIcon icon={faUserAlt} /></span> Profile</button></li>
                    <li><button className="babbleButton"> Babble</button></li>
                </div>
                <div className="secondaryNav">
                    <HomeSignupLoginNavigation />
                </div>
                
            </nav>
        )
    }
}

export default Navbar;