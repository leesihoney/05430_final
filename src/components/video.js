import React, { Component } from 'react';

class Video extends Component {
    render() {
        return (
            <div className='wireframe-video'>
                <video autoPlay="autoplay" loop="loop" alt="ui wireframe">
                    <source src={this.props.mp4} type="video/mp4"/>
                    <source src={this.props.webm} type="video/mp4"/>
                    <source src={this.props.ogg} type="video/mp4"/>
                    <img src={this.props.gif} alt="leesihoney"/>
                </video>

                <p className='video-caption'> {this.props.caption} </p>
            </div>
        )
    }
}

export default Video;