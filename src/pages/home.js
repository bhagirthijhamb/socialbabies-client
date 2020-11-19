import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';

import Header from './../components/Header';

class home extends Component {
    render() {
        return (
            <Grid container>
                <Grid item sm={3} xs={12}>
                    <h2>Header</h2>
                    <Header />
                </Grid>
                <Grid item sm={6} xs={12}>Content...</Grid>
                <Grid item sm={3} xs={12}>Aside...</Grid>
            </Grid>
            
        )
    }
}

export default home;