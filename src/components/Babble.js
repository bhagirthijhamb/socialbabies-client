import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

// MUI stuff
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';

class Babble extends Component {
    render() {
        dayjs.extend(relativeTime);
        const { babble: {body, createdAt, userImage, userHandle, babbleId, likeCount, commnentCount } } = this.props;

        return(
            <div key={babbleId} className="babbleCard">
                <div className="babbleCard-image">
                    <img src={userImage} alt="User image" className="babbleCard-userImage"/>
                </div>
                <div className="babbleCard-content">
                    <div className="babbleCard-content-top">
                        <h3 className="babbleCard-userHandle"><Link to={`/users/${userHandle}`}>{userHandle} </Link></h3>
                        <p className="babbleCard-timeFromNow">{dayjs(createdAt).fromNow()}</p>
                    </div>
                    <p>{body}</p>
                </div>
            </div>
        )
    }
}

export default Babble;