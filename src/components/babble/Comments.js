import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import dayjs from 'dayjs';

// MUI stuff
import Grid from '@material-ui/core/Grid';

class Comments extends Component {
    render(){
        const { comments } = this.props;
        return(
            <Grid container>
                {comments.map((comment, index) => {
                    const { body, createdAt, userImage, userHandle } = comment;
                    return(
                        <Fragment key={createdAt}>
                            <Grid item sm={12}>
                                <Grid container>
                                    <Grid item sm={2}>
                                        <img src={userImage} alt="comment" className="commentImage" />
                                    </Grid>
                                    <Grid item sm={9}>
                                        <div className="commentData">
                                            <p>{userHandle}</p>
                                            <p>{dayjs(createdAt).format('h:mm a, MMMM DD YYYY')}</p>
                                            <hr/>
                                            <p>{body}</p>
                                        </div>
                                    </Grid>
                                </Grid>
                            </Grid>
                            {index !== comments.length - 1 && (
                                <hr/>
                            )}
                        </Fragment>
                    )
                })}
            </Grid>
        )
    }
}

Comments.propTypes = {
    comments: PropTypes.array.isRequired
}

export default Comments;
