import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import axios from 'axios';

import Header from './../components/Header';
import Babble from './../components/Babble';
import Aside from './../components/Aside';


class home extends Component {
    state = {
            babbles: null
        }

    componentDidMount() {
        axios.get('/babbles')
            .then(res => {
                console.log(res.data);
                this.setState({
                    babbles: res.data
                })
            })
            .catch(err => console.log(err));
    }
    render() {
        let recentBabblesMarkup = this.state.babbles ? (
            this.state.babbles.map(babble => <Babble key={babble.babbleId} babble={babble} />)
        ) : <p>Loading...</p>
        return (
            <div className="homePage">
                <Grid container>
                    <Grid item sm={3} xs={12}>
                        <Header />
                    </Grid>
                    <Grid item sm={6} xs={12}>
                        {recentBabblesMarkup}
                    </Grid>
                    <Grid item sm={3} xs={12}>
                        <Aside />
                    </Grid>
                </Grid>
            </div>
        )
    }
}

export default home;