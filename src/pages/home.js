import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import axios from 'axios';

import Header from './../components/Header';
import Babble from './../components/Babble';

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
            this.state.babbles.map(babble => <Babble babble={babble} />)
        ) : <p>Loading...</p>
        return (
            <div>
                {recentBabblesMarkup}
            </div>
        )
    }
}

export default home;