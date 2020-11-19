import React, { Component } from 'react';
// implementing Treeshaking, importing just that component
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faBell, faUserAlt } from '@fortawesome/free-solid-svg-icons';

// MUI stuff
import Button from '@material-ui/core/Button'; 

class Navbar extends Component {
    render() {
        return(
            <nav>
                
                {/* <li><span><FontAwesomeIcon icon={faHome} /></span>Home</li> */}
                {/* <li><Button><span><FontAwesomeIcon icon={faHome} /></span>Home</Button></li> */}
                <li><button><span><FontAwesomeIcon icon={faHome} /></span> Home</button></li>
                <li><button><span><FontAwesomeIcon icon={faBell} /></span> Notifications</button></li>
                <li><button><span><FontAwesomeIcon icon={faUserAlt} /></span> Profile</button></li>
                <li><button> Babble</button></li>
                <Button component={Link} to="/">Home</Button>
                <Button component={Link} to="/signup">Signup</Button>
                <Button component={Link} to="login">Login</Button>
            </nav>
        )
    }
}

export default Navbar;