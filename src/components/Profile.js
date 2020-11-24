import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
// Redux
import { connect } from 'react-redux';
// Fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faEdit, faTrashAlt, faLink, faCalendarAlt  } from '@fortawesome/free-solid-svg-icons';
// dayjs
import dayjs from 'dayjs'
// MUI stuff
import Button from '@material-ui/core/Button'; 

import MyButton from './../utils/MyButton';
import { uploadImage, logoutUser } from './../redux/actions/userActions';

class Profile extends Component {

    handleImageChange = (e) => {
        const image = e.target.files[0];
        // send to server
        const formData = new FormData();
        formData.append('image', image, image.name);
        this.props.uploadImage(formData);
    }

    handleEditPicture = () => {
        const fileInput = document.getElementById('imageInput');
        fileInput.click();
    }

    render() {
        const { 
            user: { 
                credentials: { handle, createdAt, imageUrl, bio, website, location }, 
                loading,
                authenticated
            }
        } = this.props 

        let profileMarkup = !loading ? (authenticated ? (
            <div className="profileCard">
                <div className="profileCard-image">
                    <img src={imageUrl} alt="profile image" />
                    <input type="file" id="imageInput" hidden='hidden' onChange={this.handleImageChange} />
                    <MyButton className="profileCard-image-editButton" tip='Edit profile picture' onClick={this.handleEditPicture} btnClassName='button'>
                        <FontAwesomeIcon icon={faEdit} />
                    </MyButton>
                </div>
                <hr/>
                <div className="profileCard-details">
                    <h3 className="profileCard-userHandle"><Link to={`/users/${handle}`}>@{handle} </Link></h3>
                    <hr/>
                    {bio && <p>{bio}</p>}
                    <hr/>
                    {location && (
                        <Fragment>
                            <span><FontAwesomeIcon icon={faMapMarkerAlt} /> {location}</span>
                            <hr/>
                        </Fragment>
                    )}
                    {website && (
                        <Fragment>
                            <span><FontAwesomeIcon icon={faLink} />
                                <a href={website} target="_blank" rel="noopener noreferrer">
                                    {' '}{website}
                                </a>
                                <hr/>
                            </span>
                        </Fragment>
                    )}
                    <p><FontAwesomeIcon icon={faCalendarAlt} /> Joined {dayjs(createdAt).format('MM YYYY')}</p>
                </div>
            </div>
        ) : (
            <div>
                <p>No profile found, please login again</p>
                <div className="profileCard-buttons">
                    <Button component={Link} to="login">Log in</Button>
                    <Button component={Link} to="signup">Sign up</Button>
                </div>
            </div>
        )) : (<p>loading...</p>)

        return(
            <div className="sidebar">
                <h2>{profileMarkup}</h2>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    user: state.user
})

const mapActionsToProps = { uploadImage, logoutUser };


Profile.propTypes = {
    user: PropTypes.object.isRequired,
    logoutUser: PropTypes.func.isRequired,
    uploadImage: PropTypes.func.isRequired
}
export default connect(mapStateToProps, mapActionsToProps)(Profile);