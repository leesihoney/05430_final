import React, { Component } from 'react';

class PjHeading extends Component {
    render() {
        return (
            <div className = 'pj-heading'>
                <div className = 'pj-heading-title'>
                    {this.props.title}
                </div>

                <div className = 'pj-heading-paragraph'>
                    {this.props.paragraph}
                </div>
            </div>

        )
    }
}

export default PjHeading;