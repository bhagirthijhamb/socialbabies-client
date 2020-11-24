import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import MyButton from './../utils/MyButton';
// import PostScream from '../scream/PostScream';
// import Notifications from './Notifications';

// MUI stuff
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';

// Icons
import AddIcon from '@material-ui/icons/Add';
import HomeIcon from '@material-ui/icons/Home';
//
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faKeyboard , faBell, faUserAlt } from '@fortawesome/free-solid-svg-icons';
// import Notifications from '@material-ui/icons/Notifications';

class TopNavbar extends Component {
    render() {
        const { authenticated } = this.props
        return (
            <div className="appBar">
                {/* // <AppBar postion="fixed" className="appBar" color="transparent" >
            //     <Toolbar className='nav-container'> */}
                    {authenticated ? (
                        <Fragment>
                            <MyButton tip='Post a Scream!'>
                                <AddIcon /> Babble
                            </MyButton>
                            {/* <PostScream/> */}
                            <Link to='/'>
                                <MyButton tip='Home'>
                                    <FontAwesomeIcon icon={faHome} /> Home
                                </MyButton>
                            </Link>
                            {/* <Notifications /> */}
                        </Fragment>
                    ) : (
                        <Fragment>
                            <Button color='inherit' component={Link} to='/login'>Login</Button>
                            <Button color='inherit' component={Link} to='/'>Home</Button>
                            <Button color='inherit' component={Link} to='/signup'>Signup</Button>
                        </Fragment>
                    )}
                {/* </Toolbar>
            </AppBar> */}
            </div>
            
        )
    }
}

TopNavbar.propTypes = {
    authenticated: PropTypes.bool.isRequired
}
const mapStateToProps = (state) => ({
    authenticated: state.user.authenticated
})

export default connect(mapStateToProps)(TopNavbar);