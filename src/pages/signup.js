import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import HomeSignupLoginNavigation from './../components/HomeSignupLoginNavigation';
import Logo from './../components/Logo'

class signup extends Component {
    render() {
        return (
            <div className="signupPage">
                <Grid container>
                    <Grid item sm={3} xs={12}>
                        <Logo />
                        <div className="secondaryNav">
                            <HomeSignupLoginNavigation />
                        </div>
                    </Grid>
                    <Grid item sm={6} xs={12}>
                        <h3>Signup...</h3>
                        {/* {recentBabblesMarkup} */}
                    </Grid>
                    <Grid item sm={3} xs={12}>
                        {/* <Aside /> */}
                    </Grid>
                </Grid>
            </div>
        )
    }
}

export default signup;