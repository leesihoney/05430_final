import React, { Component } from 'react';

class PjCard extends Component {
    render() {
        return (
            <div className = 'pj-card'>
                <div className = 'pj-card-groups'>
                    <div className = 'pj-card-name'>
                        {this.props.name}
                    </div>

                    <div className = 'pj-card-info'>
                        {this.props.info}
                    </div>

                    <div className = 'pj-card-paragraph-one'>
                        {this.props.description_one}
                    </div>
                    <br />
                    <div className = 'pj-card-paragraph-two'>
                        {this.props.description_two}
                    </div>
                </div>
            </div>
        )
    }
}

export default PjCard;