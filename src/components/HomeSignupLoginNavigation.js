import React, { Component } from 'react';
import { Link } from 'react-router-dom';


// MUI stuff
import Button from '@material-ui/core/Button'; 


class HomeSignupLoginNavigation extends Component{
    render() {
        return (
            <div className="homeSignupLoginNavigation">
                <Button component={Link} to="/">Home</Button>
                <Button component={Link} to="/signup">Signup</Button>
                <Button component={Link} to="login">Login</Button>
            </div>
        )
    }
}

export default HomeSignupLoginNavigation;