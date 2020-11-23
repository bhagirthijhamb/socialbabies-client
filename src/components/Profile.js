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



// Red

class Profile extends Component {
    render() {
        const { 
            user: { 
                credentials: { handle, createdAt, imageUrl, bio, website, location }, 
                loading,
                authenticated
            }
        } = this.props 

        let profileMarkup = !loading ? (authenticated ? (
            <div classname="profileCard">
                <div className="profileCard-image">
                    <img src={imageUrl} alt="profile image" />
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
                            <spam><FontAwesomeIcon icon={faLink} />
                                <a href={website} target="_blank" rel="noopener noreferrer">
                                    {' '}{website}
                                </a>
                                <hr/>
                            </spam>
                        </Fragment>
                    )}
                    <p><FontAwesomeIcon icon={faCalendarAlt} /> Joined {dayjs(createdAt).format('MM YYYY')}</p>
                </div>
            </div>
        ) : (
            <div>
                <p>no profile found, lease login again</p>
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


Profile.propTypes = {
    user: PropTypes.object.isRequired,
}
export default connect(mapStateToProps)(Profile);