import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// MUI stuff
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';

// Fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faComments  } from '@fortawesome/free-solid-svg-icons';
//
import MyButton from './../utils/MyButton';
import DeleteBabble from './DeleteBabble';
import BabbleDialog from './BabbleDialog';
import LikeButton from './LikeButton';

class Babble extends Component {
    render() {
        dayjs.extend(relativeTime);
        const { 
            babble: {body, createdAt, userImage, userHandle, babbleId, likeCount, commentCount },
            user: { authenticated, credentials: { handle} }
         } = this.props;
        
        const deleteButton = authenticated && userHandle === handle ? (
            <DeleteBabble babbleId={babbleId} className="deleteBtn" />
        ) : null
        return(
            <div key={babbleId} className="babbleCard">
                <div className="babbleCard-image">
                    <img src={userImage} alt="User image" className="babbleCard-userImage"/>
                </div>
                <div className="babbleCard-content">
                    <div className="babbleCard-content-top">
                        <h3 className="babbleCard-userHandle"><Link to={`/users/${userHandle}`}>@{userHandle} </Link></h3>
                        {deleteButton}
                        <p className="babbleCard-timeFromNow">{dayjs(createdAt).fromNow()}</p>
                    </div>
                    <p className="babbleCard-body">{body}</p>
                    <div className="likes-comments">
                        <LikeButton babbleId={babbleId} /><span>{likeCount} Likes</span>
                        <MyButton tip="comments" ><FontAwesomeIcon icon={faComments} className="commentsIcon"/></MyButton><span>{commentCount} Comments</span>
                        <BabbleDialog babbleId={babbleId} userHandle={userHandle} />
                    </div>
                </div>
            </div>
        )
    }
}

Babble.propTypes = {
    user: PropTypes.object.isRequired,
    babble: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
    user: state.user
})

export default connect(mapStateToProps)(Babble);