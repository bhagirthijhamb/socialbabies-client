import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types';
import MyButton from './../utils/MyButton';
import dayjs from 'dayjs';
import { link } from 'react-router-dom';
// Redux stuff
import { connect } from 'react-redux';
import { getBabble } from './../redux/actions/dataActions';
// import { clearErrors } from './../redux/actions/dataActions';

// Fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
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
            <CircularProgress size={200}/>
        ):(
            <Grid container spacing={16}>
                <Grid item sm={5}>
                    <img src={userImage} alt="Profile" className="profileImage" /> 
                </Grid>
                <Grid item sm={7}>
                    <h3>@{userHandle}</h3>
                    <hr/>
                </Grid>
            </Grid>
        )
        return (
            <Fragment>
                <MyButton onClick={this.handleOpen} tip="Expand screen">
                    <UnfoldMore />
                </MyButton>
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