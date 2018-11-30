import React from 'react';
import { Link } from 'react-router-dom';

const Project = props => (
    <div className = "project-component">
        <img alt="leesihoney" src = {props.image} className = "project-pic"/>

        <div className = 'project-right'>
            <div className = 'project-inc-position'>
                {props.company} | {props.position}
            </div>

            <div className = 'project-title'>
                {props.title}
            </div>

            <div className = 'project-description'>
                {props.exp}
            </div>

            <Link to={props.url} className = 'project-button'> View Details </Link>

        </div>
    </div>
        )

export default Project;