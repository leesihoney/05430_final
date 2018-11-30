import React, { Component } from 'react';

class ColorCell extends Component {
    render() {
        return (
            <div className = 'color-cell'>
                <div className = 'color-grid-cell' style={{backgroundColor: this.props.colorvalue}}>
                </div>  

                <div className = 'color-grid-cell-name'>
                    {this.props.colorname}
                </div>

                <div className = 'color-grid-cell-value'>
                    {this.props.colorvalue}
                </div>
            </div>
        )
    }
}

export default ColorCell;