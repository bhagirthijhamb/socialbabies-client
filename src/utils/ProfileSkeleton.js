import React, { Component, Fragment } from 'react'
import NoImg from './../images/no-img.png';
import PropTypes from 'prop-types';
// MUI
import Paper from'@material-ui/core/Paper';
// Icons
import LocationOn from'@material-ui/icons/LocationOn';
import LinkIcon from'@material-ui/icons/Link';
import CalendarToday from '@material-ui/icons/CalendarToday';

const BabbleSkeleton = props => {
    return(
        <Paper className="paper">
            <div className="profile">
                <div className="image-wrapper">
                    <img src={NoImg} alt="profile picture dummy" className="profile-image" />
                    <hr/>
                    <div className="profile-details">
                        <div className="handle" />
                        <hr/>
                        <div className="fullLine" />
                        <div className="fullLine" />
                        <hr/>
                        <div className="locationDiv">
                            <LocationOn color="secondary" /> <span>Location</span>
                        </div>
                        <hr/>
                        <div className="linkDiv">
                            <LinkIcon color="secondary" /> https://website.com 
                        </div>
                        <hr/>
                        <div className="joinDateDiv">
                            <CalendarToday color="secondary" /> Joined date
                        </div>
                    </div>
                </div>
            </div>
        </Paper>
    )
}

BabbleSkeleton.propTypes = {

}

export default BabbleSkeleton;