import React, { Component } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import HomeSignupLoginNavigation from './../components/HomeSignupLoginNavigation';
import Logo from './../components/Logo'

import TextField from '@material-ui/core/TextField';


class login extends Component {
    constructor(){
        super()
        this.state = {
            email: '',
            password: '',
            loading: false,
            errors: []
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        return (
            <div className="loginPage">
                <Grid container>
                    <Grid item sm={6} xs={12}>
                        <Logo />
                        <p className="login-paragraph">See what's happening in the world right now.</p>
                        <p className="login-paragraph">Join Babbler today</p>

                        <div className="secondaryNav">
                            <HomeSignupLoginNavigation />
                        </div>
                    </Grid>
                    <Grid item sm={6} xs={12}>
                        <h2 className="login-heading">Login</h2>
                        
                        <form className="loginForm" noValidate onSubmit={this.handleSubmit}>
                            <TextField id="email" name="email" type="email" label="Email" className="textField" value={this.state.email} onChange={this.handleChange} fullWidth />
                            <TextField id="password" name="password" type="password" label="Password" className="textField" value={this.state.password} onChange={this.handleChange} fullWidth />
                        </form>

                        <button className="loginButton" type="submit"> Log in</button>
                    </Grid>
                </Grid>
            </div>
        )
    }
}

login.prototypea = {

}

export default login;