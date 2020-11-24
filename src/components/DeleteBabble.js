import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import MyButton from './../utils/MyButton';

// MUI stuff
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogActions from '@material-ui/core/DialogActions';
import DeleteOutline from '@material-ui/icons/DeleteOutlined';

import {connect} from 'react-redux';
import { deleteBabble } from './../redux/actions/dataActions';    


class DeleteBabble extends Component {
    state = {
        open: false
    }
    handleOpen = () => {
        this.setState({ open: true })
    }
    handleClose = () => {
        this.setState({ open: false })
    }
    deleteBabble = () => {
        this.props.deleteBabble(this.props.babbleId);
        this.setState({ open: false })
    }
    render() {
        return (
            <div className="deleteBabble">
                <Fragment>
                    <MyButton tip="Delete babble" onClick={this.handleOpen} >
                        <DeleteOutline color="secondary" />
                    </MyButton> 
                    <Dialog open={this.state.open} onClose={this.handleClose} fullWidth maxWidth='sm'>
                        <DialogTitle>
                            Are you sure you want to selete this babble ?
                        </DialogTitle>
                        <DialogActions>
                            <Button onClick={this.handleClose} color="primary">
                                Cancel
                            </Button>
                            <Button onClick={this.deleteBabble} color="secondary">
                                Delete
                            </Button>
                        </DialogActions>
                    </Dialog>
                </Fragment>
            </div>
        )
    }
}

DeleteBabble.propTypes = {
    deleteBabble: PropTypes.func.isRequired,
    babbleId: PropTypes.string.isRequired
}

const mapStateToProps = stae => ({

})

const mapActionsToProps = ({
    deleteBabble
})

export default connect(mapStateToProps, mapActionsToProps)(DeleteBabble);