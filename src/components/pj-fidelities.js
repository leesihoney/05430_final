import React, { Component } from 'react';
class PjFidelities extends Component {
    render() {
        return (
            <div className = 'pj-fidelities'>

                <div className = 'pj-fidelities-group'>
                    <div className = 'pj-fidelity'>
                        <img alt="leesihoney" src={require('../images/andrew_hifidelity_1.png')} />
                    </div>                

                    <div className = 'pj-fidelity'>
                        <img alt="leesihoney" src={require('../images/andrew_hifidelity_2.jpeg')} />
                    </div>                

                    <div className = 'pj-fidelity'>
                        <img alt="leesihoney" src={require('../images/andrew_hifidelity_3.png')} />
                    </div>     
                </div>

                <br/>

                <div className = 'pj-image-caption'>
                    <b>Your communities</b> menu which, frankly speaking, could be one of the least used feature on the app.
                </div>

            </div>
        )
    }
}

export default PjFidelities;