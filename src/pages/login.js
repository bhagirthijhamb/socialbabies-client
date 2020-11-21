import React, { Component } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import HomeSignupLoginNavigation from './../components/HomeSignupLoginNavigation';
import Logo from './../components/Logo'

import TextField from '@material-ui/core/TextField';
import CircularProgress from '@material-ui/core/CircularProgress';
import { Link } from 'react-router-dom';


class login extends Component {
    constructor(){
        super()
        this.state = {
            email: '',
            password: '',
            loading: false,
            errors: {}
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({
            loading: true
        })
        const userData = {
            email: this.state.email,
            password: this.state.password
        }
        axios.post('/users/login', userData)
            .then(res => {
                console.log(res.data);
                localStorage.setItem('FBIdToken', `Bearer ${res.data.token}`);
                this.setState({
                    loading: false
                });
                this.props.history.push('/');
            })
            .catch(err => {
                this.setState({
                    errors: err.response.data,
                    loading: false
                })
            })
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        const { errors, loading } = this.state
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
                            <TextField id="email" name="email" type="email" label="Email" className="textField" helperText={errors.email} error={errors.email ? true : false} value={this.state.email} onChange={this.handleChange} fullWidth />

                            <TextField id="password" name="password" type="password" label="Password" className="textField" helperText={errors.password} error={errors.password ? true : false} value={this.state.password} onChange={this.handleChange} fullWidth />

                            {errors.general && <p className="customError">{errors.general}</p>}

                            <button className="loginButton" type="submit" disabled={loading}> Log in 
                            {/* {loading && (
                                <CircularProgress className="progres" size={20} />
                            )} */}
                            </button><br/>

                            <small>Dont have an account? Sign up <span className="linkToSignup"><Link to="/signup">here</Link></span></small>
                        </form>

                    </Grid>
                </Grid>
            </div>
        )
    }
}

login.prototypea = {

}

export default login;