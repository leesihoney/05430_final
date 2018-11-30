import React, { Component } from 'react';

class PjThoughtsNoHook extends Component {
    render() {
        return (
            <div className = 'pj-heading'>
                <div className = 'pj-heading-title'>
                    {this.props.title}
                </div>

                <div className = 'pj-heading-paragraphs'>
                    <div className = 'pj-quote'>
                        " {this.props.quote} "
                    </div>

                    <br/>

                    <div className = 'pj-heading-paragraph'>
                        {this.props.paragraph}
                    </div>
                </div>

            </div>
        )
    }
}

export default PjThoughtsNoHook;