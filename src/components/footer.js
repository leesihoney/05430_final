import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <Footer className = 'footer'>
                <div className = 'footer-groups'>
                    <div className = 'footer-icons'>
                        <img alt="leesihoney" src = {require('../images/facebook-logo-button.svg')}/>
                        <img alt="leesihoney" src = {require('../images/instagram-logo.svg')}/>
                        <img alt="leesihoney" src = {require('../images/twitter-logo-button.svg')}/>
                    </div>
                    <div className = 'footer-copyright'>
                        all rights reserved with &copy; Andrew Siheon Lee 
                    </div>
                </div>
            </Footer>
        )
    }
}

export default Footer;