import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
import Header from './../components/Header';
import Babble from './../components/babble/Babble';
import Profile from './../components/profile/Profile';
import { connect } from 'react-redux';
import { getBabbles } from './../redux/actions/dataActions';


class home extends Component {
    // state = {
    //         babbles: null
    //     }

    componentDidMount() {
        // axios.get('/babbles')
        //     .then(res => {
        //         console.log(res.data);
        //         this.setState({
        //             babbles: res.data
        //         })
        //     })
        //     .catch(err => console.log(err));
        this.props.getBabbles()
    }
    render() {
        const { babbles, loading } = this.props.data;
        // let recentBabblesMarkup = this.state.babbles ? (
        //     this.state.babbles.map(babble => <Babble key={babble.babbleId} babble={babble} />)
        // ) : <p>Loading...</p>
        let recentBabblesMarkup = !loading ? (
            babbles.map(babble => <Babble key={babble.babbleId} babble={babble} />)
        ) : (<p>Loading...</p>)
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
                        <Profile />
                    </Grid>
                </Grid>
            </div>
        )
    }
}

home.propTypes = {
    getBabbles: PropTypes.func.isRequired,
    data: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    data: state.data
})

export default connect(mapStateToProps, { getBabbles })(home);