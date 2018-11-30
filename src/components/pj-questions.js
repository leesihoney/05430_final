import React, { Component } from 'react';

class PjQuestions extends Component {
    render() {
        return (
            <div className = 'pj-heading'>
                <div className = 'pj-heading-title'>
                    {this.props.title}
                </div>

                <div className = 'pj-heading-paragraph'>
                    1. &nbsp;{this.props.one}
                    <br/>
                    2. &nbsp;{this.props.two}
                    <br/>
                    3. &nbsp;{this.props.three}

                </div>
            </div>
        )
    }
}

export default PjQuestions;