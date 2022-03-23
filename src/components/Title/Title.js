import React, { Children } from "react";
import './Title.css';
import PropTypes from 'prop-types';

export default function Title({title, children}) {
    return(
        <h1 className="title-color">{title}</h1>
    )
}

Title.defaultProps = {
    title: 'Blog'
}

Title.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node
}