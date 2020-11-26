import React, { Component, Fragment } from 'react'
import NoImg from './../images/no-img.png';
import PropTypes from 'prop-types';
// MUI
import Card from'@material-ui/core/Card';
import CardMedia from'@material-ui/core/CardMedia';
import CardContent from'@material-ui/core/CardContent';

const BabbleSkeleton = props => {
    const content = Array.from({ length: 5 }).map(( item, index) => (
        <Card className="card" key={index}>
            <CardMedia className="cover" image={NoImg}/>
            <CardContent className="cardContent">
                <div className="handle"/>
                <div className="date"/>
                <div className="fullLine"/>
                <div className="fullLine"/>
                <div className="halfLine"/>
            </CardContent>
        </Card>
    ))
    return(
        <Fragment>{content}</Fragment>
    )
}

BabbleSkeleton.propTypes = {

}

export default BabbleSkeleton;