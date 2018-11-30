import React, { Component } from 'react';

class PjSmallSection extends Component {
    render() {
        return (
            <div className = 'pj-heading'>
                <div className = 'small-title'>
                    {this.props.title}
                </div>

                <div className = 'pj-heading-paragraph'>
                {this.props.list.map(lst => (
                    <p> {lst.entry} </p>
                ))}
                </div>
            </div>
        )
    }
}

export default PjSmallSection;