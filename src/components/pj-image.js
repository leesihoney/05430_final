import React, { Component } from 'react';

class PjImage extends Component {
    render() {
        return (
            <div className = 'pj-image'>
                <img alt="leesihoney" className = 'pj-image-img' src={this.props.image}/>
                <div className = 'pj-image-caption'>
                    {this.props.caption}
                </div>
            </div>
        )
    }
}

export default PjImage;