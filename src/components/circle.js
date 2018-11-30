import React, { Component } from 'react';

class Circle extends Component {
    render() {
        return (
            <div className = 'circle'>
                <img alt="leesihoney" src = {this.props.pic}/>
                <h5 className = 'circle-title'>
                    {this.props.name}
                </h5>
                <p className = 'circle-exp'>
                    {this.props.explanation}
                </p>
            </div>
        )
    }
}

export default Circle;