import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class PjRightButton extends Component {
    render() {
        return (
            <div className = 'pj-buttons-right'>
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

export default PjRightButton;
