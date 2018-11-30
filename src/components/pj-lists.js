import React, { Component } from 'react';

class PjLists extends Component {
    render() {
        
        return (
            <div className = 'pj-heading'>
                <div className = 'pj-heading-title'>
                    {this.props.title}
                </div>

                <div className = 'pj-heading-list'>
                    <ul>
                        {this.props.list.map(lst => (
                            <li> {lst.case} </li>
                        ))}
                    </ul>
                </div>  
            </div>
        )
    }
}

export default PjLists;