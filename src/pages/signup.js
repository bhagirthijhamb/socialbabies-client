import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Logo from './../components/Logo'
import axios from 'axios';

import TextField from '@material-ui/core/TextField';
import CircularProgress from '@material-ui/core/CircularProgress';
import { Link } from 'react-router-dom';

// Redux stuff
import { connect } from 'react-redux';
import { signupUser } from './../redux/actions/userActions';

class signup extends Component {
    constructor(){
        super();
        this.state = {
            email: '',
            password: '',
            confirmPassword: '',
            handle: '',
            // loading: false,
            errors: {}
        }
    }

    componentDidUpdate(prevProps){
        if(prevProps.ui.errors !== this.props.ui.errors){
            this.setState({ errors: this.props.ui.errors });
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({
            loading: true
        })

        const newUserData = {
            email: this.state.email,
            password: this.state.password,
            confirmPassword: this.state.confirmPassword,
            handle: this.state.handle
        }

        // axios.post('/users/signup', newUserData)
        //     .then(res => {
        //         console.log(res.data);
        //         localStorage.setItem('FBIdToken', `Bearer ${res.data.token}`);
        //         this.setState({
        //             loading: false
        //         })
        //         this.props.history.push('/')
        //     })
        //     .catch(err => {
        //         this.setState({
        //             errors: err.response.data,
        //             loading: false
        //         })
        //     })

        this.props.signupUser(newUserData, this.props.history);
    }


    render() {
        // const { errors, loading } = this.state;
        const { errors } = this.state;
        const { ui: { loading }} = this.props
        return (
            <div className="signupPage">
                <Grid container>
                    <Grid item sm={6} xs={12}>
                        <Logo />
                    </Grid>
                    <Grid item sm={6} xs={12}>
                        <h2 className="login-heading">Sign up</h2>
                        
                        <form className="loginForm" noValidate onSubmit={this.handleSubmit}>
                            <TextField id="email" name="email" type="email" label="Email" className="textField" helperText={errors.email} error={errors.email ? true : false} value={this.state.email} onChange={this.handleChange} fullWidth />

                            <TextField id="password" name="password" type="password" label="Password" className="textField" helperText={errors.password} error={errors.password ? true : false} value={this.state.password} onChange={this.handleChange} fullWidth />

                            <TextField id="confirmPassword" name="confirmPassword" type="password" label="Confirm password" className="textField" helperText={errors.confirmPassword} error={errors.confirmPassword ? true : false} value={this.state.confirmPassword} onChange={this.handleChange} fullWidth />

                            <TextField id="handle" name="handle" type="handle" label="User Handle" className="textField" helperText={errors.handle} error={errors.handle ? true : false} value={this.state.handle} onChange={this.handleChange} fullWidth />

                            {errors.general && <p className="customError">{errors.general}</p>}

                            <button className="loginButton" type="submit" disabled={loading}>Sign up 
                            {/* {loading && (
                                <CircularProgress className="progres" size={20} />
                            )} */}
                            </button><br/>

                            <small>Already have an account? Log in <span className="linkToSignup"><Link to="/login">here</Link></span></small>
                        </form>

                    </Grid>
                </Grid>
            </div>
        )
    }
}

signup.propTypes = {
    user: PropTypes.object.isRequired,
    ui: PropTypes.object.isRequired,
    signupUser: PropTypes.func.isRequired
}


const mapStateToProps = state => ({
    user: state.user,
    ui: state.ui
})

export default connect(mapStateToProps, { signupUser })(signup);