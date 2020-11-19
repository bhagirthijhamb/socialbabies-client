import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';

// MUI stuff
import Button from '@material-ui/core/Button'; 

class Navbar extends Component {
    render() {
        return(
            <nav>
                {/* <li><span><FontAwesomeIcon icon={faHome} /></span>Home</li> */}
                <li><Button><span><FontAwesomeIcon icon={faHome} /></span>Home</Button></li>
            </nav>
        )
    }
}

export default Navbar;