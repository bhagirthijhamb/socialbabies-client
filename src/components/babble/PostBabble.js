import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types';
import MyButton from '../../utils/MyButton';
// Redux stuff
import { connect } from 'react-redux';
import { postBabble, clearErrors } from './../../redux/actions/dataActions';

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
//
import AddIcon from '@material-ui/icons/Add';
import CloseIcon from '@material-ui/icons/Close';


class PostBabble extends Component {
    state = {
        open: false,
        body: '',
        errors: {}
    }
    componentDidUpdate(prevProps){
        if(prevProps.ui.errors !== this.props.ui.errors){
            this.setState({ errors: this.props.ui.errors });
        }
        if(prevProps !== this.props){            
            if(!this.props.ui.errors && !this.props.ui.loading){
                this.setState({ body: '', open: false, errors: {} });
                // this.handleClose(); // because it sets infinite loop
            }
        }
    }

// const handleSubmit = async event => {
//     event.preventDefault();

//     const newPost = {
//       body
//     };
//     try {
//       await dispatch(createPostAction(newPost));
//       handleClose();
//     } catch (err) {
//       dispatch(setErrorsAction(err.response.data));
//     }
//   };

// const createPostAction = newPost => async dispatch => {
//   dispatch({ type: LOADING_UI });
//   const res = await axios.post('/post', newPost);
//   dispatch({
//     type: CREATE_POST,
//     payload: res.data
//   });
//   dispatch({
//     type: CLEAR_ERRORS,
//     payload: []
//   });
// };

    handleOpen = () => {
        this.setState({ open: true })
    }
    handleClose = () => {
        this.props.clearErrors();
        this.setState({ open: false, errors: {} })
    }
    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value})
    }
    handleSubmit = e => {
        e.preventDefault();
        this.props.postBabble({ body: this.state.body })
    }
    render(){
        const { errors } = this.state;
        const { ui: { loading }} = this.props

        return(
            <Fragment>
                <MyButton onClick={this.handleOpen} tip="Post a babble!">
                    <AddIcon  /> Babble
                </MyButton>
                <Dialog open={this.state.open} onClose={this.handleClose} fullWidth maxWidth='sm' className="postBabbleDialogBox" >
                    <div className="closePostBabbleBtn">
                        <MyButton tip="Close" onClick={this.handleClose} tipClassName="closeBabblePostButton" >
                            <CloseIcon />
                        </MyButton>
                    </div>
                    <DialogTitle>Post a new babble</DialogTitle>
                    <DialogContent>
                        <form onSubmit={this.handleSubmit}>
                            <TextField name="body" type="text" label="Babble..." multiline rows="3" placeholder="Babble with your friends..." error={errors.body ? true : false} helperText={errors.body} error={errors.body ? true : false} value={this.state.body} className="textField" onChange={this.handleChange} fullWidth />
                            <Button type="submit" variant="contained" color="primary" className="babbleSubmitButton" disabled={loading}>Submit
                                {loading && (
                                    <CircularProgress size={30} className="progressSpinner" />
                                )}
                            </Button>
                        </form>
                    </DialogContent>
                </Dialog>
            </Fragment>
        )
    }
}

PostBabble.propTypes = {
    postBabble: PropTypes.func.isRequired,
    clearErrors: PropTypes.func.isRequired,
    ui: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    ui: state.ui
})

const mapActionsToProps = ({
    postBabble, clearErrors
})

export default connect(mapStateToProps, mapActionsToProps)(PostBabble)