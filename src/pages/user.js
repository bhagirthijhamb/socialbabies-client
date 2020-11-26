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
import BabbleSkeleton from './../utils/BabbleSkeleton';
import ProfileSkeleton from './../utils/ProfileSkeleton';


class user extends Component{
    state = {
        profile: null,
        babbleIdParam: null
    }
    componentDidMount(){
        const handle = this.props.match.params.handle;
        const babbleId = this.props.match.params.babbleId;

        if(babbleId) this.setState({ babbleIdParam: babbleId });

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
        const { babbleIdParam } = this.state

        const babblesMarkup = loading ? (
            <BabbleSkeleton />
        ) : babbles === null ? (
            <p>No babbles from this user</p>
        ) : !babbleIdParam ? (
            babbles.map(babble => <Babble key={babble.babbleId} babble={babble} /> )
        ) : (
            babbles.map(babble => {
                if(babble.babbleId !== babbleIdParam)
                    return <Babble key={babble.babbleId} babble={babble} />
                else return <Babble key={babble.babbleId} babble={babble} openDialog />
            })
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
                            <ProfileSkeleton />
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