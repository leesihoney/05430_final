import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class PjButtons extends Component {
    render() {
        return (
            <div className = 'pj-buttons'>
                <Link to={'/${this.props.leftUrl}'} className = 'pj-left-button'>
                    <div className = 'pj-left-button-groups'>
                        <div className = 'left-icon'>
                            <img src = {require('../images/left-button.svg')}/>
                        </div>
                        <div className = 'left-previous'>
                            Previous Project
                        </div>
                    </div>
                </Link>

                <Link to={'/${this.props.rightUrl}'} className = 'pj-right-button'>
                    <div className = 'pj-right-button-groups'>
                        <div className = 'right-next'>
                            Next Project
                        </div>
                        <div className = 'right-icon'>
                            <img src = {require('../images/right-button.svg')}/>
                        </div>
                    </div>
                </Link>
            </div> 
        )
    }
}

export default PjButtons;