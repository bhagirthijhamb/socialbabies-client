import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';

// implementing Treeshaking, importing just that component
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faBell, faUserAlt } from '@fortawesome/free-solid-svg-icons';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Button from '@material-ui/core/Button';

// import MyButton from '../../util/MyButton';
import PostBabble from '../babble/PostBabble';
import Notifications from './Notifications';




class Navbar extends Component {
    render() {
        const { authenticated } = this.props;
        return(
            <nav className="headerNav">
                {authenticated ? (
                    <div className="primaryNav">
                    <li><Link to="/"><button className="navBar-button"><span className="navBar-buttonIcon"><FontAwesomeIcon icon={faHome} /></span> Home</button></Link></li>
                    {/* <li><button className="navBar-button"><span className="navBar-buttonIcon"><FontAwesomeIcon icon={faBell} /></span> Notifications</button></li> */}
                    <li><button className="navBar-button"><Notifications /></button></li>
                    
                    <li><button className="navBar-button"><span className="navBar-buttonIcon"><FontAwesomeIcon icon={faUserAlt} /></span> Profile</button></li>
                    <li><button className="babbleButton"><PostBabble/></button></li>
                </div>
                ) : (
                    <Fragment>
                        <Button component={Link} to="login">Log in</Button>
                        <Button component={Link} to="signup">Sign up</Button>
                    </Fragment>
                )}      
            </nav>
        )
    }
}

Navbar.propTypes = {
    authenticated: PropTypes.bool.isRequired
}

const mapStateToProps = (state) => ({
    authenticated: state.user.authenticated
})

export default connect(mapStateToProps)(Navbar);