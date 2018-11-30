import React, { Component } from 'react';

class PjParagraphs extends Component {
    render() {
        return (
            <div className = 'pj-heading'>
                <div className = 'pj-heading-title'>
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

export default PjParagraphs;