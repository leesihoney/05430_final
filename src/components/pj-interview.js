import React, { Component } from 'react';
import PjInterviewCard from './pj-interview-card';

class PjInterview extends Component {
    render() {
        return (
            <div className = 'pj-interview'>
                <div className = 'pj-interview-question'>
                    {this.props.questionnumber}.{'\u00A0'}{'\u00A0'}{'\u00A0'}{this.props.question}
                </div>

                <div className = 'pj-interview-cards'>
                    <PjInterviewCard pic = {require('../images/seone_pic.png')} name='Se One' answer={this.props.seone_answer} />
                    <PjInterviewCard pic = {require('../images/chloe-pic.png')} name='Chloe' answer={this.props.chloe_answer} />
                    <PjInterviewCard pic = {require('../images/alessandra_pic.png')} name='Alessandra' answer={this.props.alessandra_answer} />
                </div>

                <div className = 'pj-interview-caption'>
                    {this.props.caption}
                </div>
                
            </div>
                    )
    }
}

export default PjInterview;