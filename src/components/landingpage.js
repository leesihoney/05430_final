import React, { Component } from 'react';
import Project from './project';
class LandingPage extends Component {
    render() {
        return (
            <section>
                <div className = 'jumbotron'>
                    <div className = 'jumbotron-groups'>
                        <h3 className = 'side'> Andrew Siheon Lee </h3>
                        <div className = 'main'>
                            I think, sketch, and develop <br/> what matters to people.
                        </div>
                        <h3 className = 'side'> UX Designer | UX Engineer </h3>
                    </div>
                </div>
                <div className = 'projects'>
                    <Project url='./project_one/#' company='fo:rest' position='UX Design' title='Reconnect With Nature' image = {require("../images/first_project_pic.png")} exp = "Fo:rest is a concept based out of the “Discover the Forest” website, which suggests people to visit forests. The Forest for iPhone is an application with the proposal to search and plan a journey to a forest nearby the user." />
                    <Project url='./project_two/#' company='LinkedIn Inc.' position='UX Design' title='LinkedIn Design Challenge' image = {require("../images/second_project_pic.png")} exp = "Design an experience that helps college students discover and connect to their classmates, without relying on email." />
                    <Project url='./project_three/#' company='Spotify Inc.' position='UX Design' title='Spotify UX Analysis and Redesign' image = {require("../images/third_project_pic.png")} exp = "I spent two weekends to take things apart, understand how Spotify works and try to improve the user experience. This practice is purely based on my own research and my personal usage." />
                </div>
            </section>
        )
    }
}

export default LandingPage;