import React, { Component } from 'react';

class PjInterviewCard extends Component {
    render() {
        return (
            <div className = 'pj-interview-card'>
                <div className = 'pj-interview-card-profile'>
                    <img alt="leesihoney" className = 'pj-interview-card-profile-pic' src={this.props.pic}/>
                    <div className = 'pj-interview-card-profile-name'>
                        {this.props.name}
                    </div>
                </div>

                <div className = 'pj-interview-card-answer'>
                    " {this.props.answer} "
                </div>
                
            </div>
                    )
    }
}

export default PjInterviewCard;