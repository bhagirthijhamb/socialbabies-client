import React, {Component } from 'react';
import MyButton from '../../utils/MyButton';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
// Icons
import FavoriteIcon from'@material-ui/icons/Favorite';
import FavoriteBorder from'@material-ui/icons/FavoriteBorder';
// Fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faComments  } from '@fortawesome/free-solid-svg-icons';
// Redux
import { connect } from 'react-redux';
// 
import { likeBabble, unlikeBabble } from './../../redux/actions/dataActions'


class LikeButton extends Component{
    likedBabble = () => {
        if(this.props.user.likes && this.props.user.likes.find(like => like.babbleId === this.props.babbleId)){
            return true;
        } return false;
    }
    likeBabble = () => {
        this.props.likeBabble(this.props.babbleId);
    }
    unlikeBabble = () => {
        this.props.unlikeBabble(this.props.babbleId);
    }
    render(){
        const { authenticated } = this.props.user;
        const likeButton = !authenticated ? (
            <div className="heartButton">
                <Link to="/login">
                    <MyButton tip="Like" >
                        <FavoriteBorder className="heartBtn" color="secondary" />
                    </MyButton>
                </Link>
            </div>
            
        ) : this.likedBabble() ? (
                <div className="heartButton">
                    <MyButton tip="Undo Like" onClick={this.unlikeBabble}>
                        <FavoriteIcon className="heartBtn" color="secondary" />
                    </MyButton>
                </div>
            ) : (
                <div className="heartButton">
                    <MyButton tip="Like" onClick={this.likeBabble}>
                        <FavoriteBorder className="heartBtn" color="secondary" />
                    </MyButton>
                </div>
            );
        return likeButton;
    }
}


LikeButton.propTypes = {
    user: PropTypes.object.isRequired,
    babbleId: PropTypes.string.isRequired,
    likeBabble: PropTypes.func.isRequired,
    unlikeBabble: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    user: state.user
})

const mapActionsToProps = ({
    likeBabble, unlikeBabble
})

export default connect(mapStateToProps, mapActionsToProps)(LikeButton);