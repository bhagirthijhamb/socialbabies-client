import React, {Component } from 'react';
import MyButton from '../../utils/MyButton';
import PropTypes from 'prop-types';
// MUI stuff
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';

// Redux stuff
import { connect } from 'react-redux';
import { submitComment } from './../../redux/actions/dataActions'

class CommentForm extends Component{
    state = {
        body: '',
        errors: {}
    }
    componentDidUpdate(prevProps){
        if(prevProps.ui.errors !== this.props.ui.errors){
            this.setState({
                errors: this.props.ui.errors
            })
        }
        // if(prevProps.ui.errors !== this.props.ui.errors){
        //     this.setState({ errors: this.props.ui.errors });
        // }
        if(prevProps !== this.props){            
            if(!this.props.ui.errors && !this.props.ui.loading){
                this.setState({ body: '', errors: {} });
            }
        }
    }
    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value})
    }
    handleSubmit = e => {
        e.preventDefault();
        this.props.submitComment(this.props.babbleId, { body: this.state.body })
    }
    render(){
        const { authenticated } = this.props;
        const errors = this.state.errors;

        const commentFormMarkup = authenticated ? (
            <Grid item sm={12} style={{textAlign: "center"}}>
                <form onSubmit={this.handleSubmit}>
                    <TextField name="body" type="text" label="Comment on scream" error={errors.comment ? true : false} helperText={errors.comment} value={this.state.body} onChange={this.handleChange} fullWidth className="textField" />
                    <Button type="submit" variant="contained" color="secondary" className="button">Submit</Button>
                </form>
                <hr/>
            </Grid>
        ) : null
        return(
            commentFormMarkup
        )
    }
}

CommentForm.propType = {
    submitComment: PropTypes.func.isRequired,
    ui: PropTypes.object.isRequired,
    babbleId: PropTypes.string.isRequired,
    authenticated: PropTypes.bool.isRequired
}

const mapStateToProps = state => ({
    ui: state.ui,
    authenticated: state.user.authenticated
})

export default connect(mapStateToProps, { submitComment })(CommentForm);