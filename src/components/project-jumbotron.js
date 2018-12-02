import React, { Component } from 'react';

class ProjectJumbotron extends Component {
    render() {
        return (
            <div className = 'pjone-jumbotron'>
                <div className = 'pjone-jumbotron-img'>
                    <img alt="leesihoney" src = {this.props.image}/>
                </div>
                <div className = 'pjone-jumbotron-exp'>
                    <div className = 'pjone-jumbotron-exp-title'>
                        {this.props.company}
                    </div>

                    <div className ='pjone-jumbotron-exp-paragraph'>
                        {this.props.introduction}
                    </div>
                </div>
            </div> 
        )
    }
}

export default ProjectJumbotron;