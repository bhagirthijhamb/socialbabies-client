import React, { Component } from 'react';
import { Link } from 'react-router-dom';


// MUI stuff
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';

class Babble extends Component {
    render() {
        const { babble: {body, createdAt, userImage, userHandle, babbleId, likeCount, commnentCount } } = this.props;
        console.log(userImage);
        return(
            <div className="card">
                <div className="card-image">
                    <img src={userImage} alt="User image" className="card-userImage"/>
                </div>
                <div className="card-content">
                    <h3><Link to={`/users/${userHandle}`}>{userHandle} </Link></h3>
                    <p>{body}</p>
                </div>
            </div>
        )
    }
}

export default Babble;