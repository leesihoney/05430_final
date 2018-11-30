import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
    constructor(props) {
        super(props)

        this.state = {
            hasScrolled: false
        }
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll)
    }

    handleScroll = (event) => {
        const scrollTop = window.pageYOffset

        if(scrollTop > 50) {
            this.setState({ hasScrolled: true })
        } else {
            this.setState({ hasScrolled: false })
        }
    }

    render() {
        return (
            <nav className={this.state.hasScrolled ? 'Header HeaderScrolled' : 'Header'}>
              <div className = "nav-groups">
                <Link to="/" className = "nav-logo">
                    <img alt="leesihoney" src={require('../images/logo.svg')} id = "nav-logo-image"/>
                    <div id = "nav-leesihoney"> leesihoney </div>
                </Link>

                <div className = "nav-buttons">
                    <Link to="/aboutme">About</Link>
                    <Link to="/resume">Resume</Link>
                </div>
              </div>
            </nav>
        )
    }
}

export default Header;