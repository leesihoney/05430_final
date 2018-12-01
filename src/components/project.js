import { Link } from 'react-router-dom';
import React, { Component } from 'react';

class Project extends Component {

    constructor(props) {
        super(props)

        this.state = {
        }
        this.props = props
    }
 render() {
 return (
    <div className = "project-component">
        <img alt="leesihoney" src = {this.props.image} className = "project-pic"/>

        <div className = 'project-right'>
            <div className = 'project-inc-position'>
                {this.props.company} | {this.props.position}
            </div>

            <div className = 'project-title'>
                {this.props.title}
            </div>

            <div className = 'project-description'>
                {this.props.exp}
            </div>

            <Link to={this.props.url} className = 'project-button'> View Details </Link>

        </div>
    </div>
        )
 }
}

export default Project;