import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types';
import MyButton from './../utils/MyButton';
import dayjs from 'dayjs';
import { Link } from 'react-router-dom';
// Redux stuff
import { connect } from 'react-redux';
import { getBabble } from './../redux/actions/dataActions';
// import { clearErrors } from './../redux/actions/dataActions';

// Fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faComments } from '@fortawesome/free-solid-svg-icons';
// MUI stuff
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import CircularProgress from '@material-ui/core/CircularProgress';
import Grid from '@material-ui/core/Grid';
// Icons
import CloseIcon from '@material-ui/icons/Close';
import UnfoldMore from '@material-ui/icons/UnfoldMore';
//
import LikeButton from './LikeButton';


class BabbleDialog extends Component{
    state = {
        open: false
    }
    handleOpen = () => {
        this.setState({ open: true });
        this.props.getBabble(this.props.babbleId);
    }
    handleClose = () => {
        this.setState({ open: false })
    }
    render(){
        const { 
            babble: { babbleId, body, createdAt, likeCount, commentCount, userImage, userHandle }, 
            ui: { loading }
        } = this.props 
        const dialogMarkup = loading ? (
            <div className="spinnerDiv">
                <CircularProgress size={200} thickness={2} color="secondary" />
            </div>
        ):(
            <Grid container spacing={16}>
                <Grid item sm={4}>
                    <img src={userImage} alt="Profile picture" className="profileImage" /> 
                </Grid>
                <Grid item sm={8} className="babbleDialogContent">
                    <h3><Link to={`/users/${userHandle}`}>@{userHandle} </Link></h3>
                    <hr className="invisibleSeparator" />
                    <p className="babbleDetailsCard-timeFromNow">{dayjs(createdAt).fromNow(`h:mm a, MMMM DD YYYY`)}</p>
                    <hr className="invisibleSeparator" />
                    <p className="babbleDetailsCard-body">{body}</p>
                    <div className="likes-comments">
                        <LikeButton babbleId={babbleId} /><span>{likeCount} Likes</span>
                        <MyButton tip="comments" ><FontAwesomeIcon icon={faComments} className="commentsIcon"/></MyButton><span>{commentCount} Comments</span>
                    </div>
                </Grid>
            </Grid>
        )
        return (
            <Fragment>
                <div className="expandButton">
                    <MyButton onClick={this.handleOpen} tip="Expand screen">
                        <UnfoldMore />
                    </MyButton>
                </div>
                <Dialog open={this.state.open} onClose={this.handleClose} fullWidth maxWidth='sm' className="postBabbleDialogBox" >
                    <div className="closePostBabbleBtn">
                        <MyButton tip="Close" onClick={this.handleClose} tipClassName="closeBabblePostButton" >
                            <CloseIcon />
                        </MyButton>
                    </div>
                    <DialogContent>
                        {dialogMarkup}
                    </DialogContent>
                </Dialog>
            </Fragment>
        )
    }
}

BabbleDialog.propTypes = {
    getBabbles: PropTypes.func.isRequired,
    babbleId: PropTypes.string.isRequired,
    userHandle: PropTypes.string.isRequired,
    babble: PropTypes.object.isRequired,
    ui: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    babble: state.data.babble,
    ui: state.ui
})

const mapActionToProps = {
    getBabble
}

export default connect(mapStateToProps, mapActionToProps)(BabbleDialog);