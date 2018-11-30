import React, { Component } from 'react';

class PjPrototype extends Component {
    render() {
        return (
            <div className = 'pj-prototype'>
                <div className = 'pj-prototype-title'>
                    {this.props.title}
                </div>
                <div className = 'pj-prototype-img-container'>
                    <div className = 'pj-prototype-img'>
                        <img alt="leesihoney" src={this.props.gif}/>
                    </div>
                </div>
                <div className = 'pj-prototype-caption'>
                    {this.props.caption}
                </div>
            </div>
        )
    }
}

export default PjPrototype;