import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
// Redux
import { connect } from 'react-redux';
// MUI stuff
import Grid from '@material-ui/core/Grid';
// 
import { getUserData } from './../redux/actions/dataActions'
import Babble from './../components/babble/Babble';
import StaticProfile from './../components/profile/StaticProfile';

class user extends Component{
    state = {
        profile: {}
    }
    componentDidMount(){
        const handle = this.props.match.params.handle;
        this.props.getUserData(handle);
        axios.get(`/users/user/${handle}`)
            .then(res => {
                this.setState({
                    profile: res.data.user
                })
            })
            .catch(err => console.log(err));
    }
    render(){
        const { babbles, loading } = this.props.data;
        const babblesMarkup = loading ? (
            <p>Loading data...</p>
        ) : babbles === null ? (
            <p>No babbles from this user</p>
        ) : (
            babbles.map(babble => <Babble key={babble.babbleId} babble={babble} /> )
        )
        return(
            <div className="userPage">
                <Grid container>
                    <Grid item sm={3} xs={12}>

                    </Grid>
                    <Grid item sm={6} xs={12}>
                        {babblesMarkup}
                    </Grid>
                    <Grid item sm={3} xs={12}>
                        {this.state.profile === null ? (
                            <p>Loding profile...</p>
                        ) : (
                            <StaticProfile profile={this.state.profile} />
                        )}
                    </Grid>
                </Grid>
            </div>
        )
    }
}

user.propTypes = {
    getUserData: PropTypes.func.isRequired,
    data: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    data: state.data
})

export default connect(mapStateToProps, { getUserData })(user);