import React, { Component } from 'react';
import ProjectJumbotron  from './project-jumbotron';
import PjHeading from './pj-heading';
import ColorCell from './color-grid';
import Video from './video';
import { Link } from 'react-router-dom';

class ProjectOne extends Component {
    render() {
        return (
            <div id = 'project-container'>
                <ProjectJumbotron image={require('../images/first_project_pic.png')} company='fo:rest' introduction='Fo:rest is a concept based out of the “Discover the Forest” website, which suggests people to visit forests. While the website mainly aims at reconnecting children with nature, Forest suggests people of all ages to get familiar with nature. The Forest for iPhone is an application with the proposal to search and plan a journey to a forest nearby the user.'/>

                <div className = 'project-content'>
                    <div id='project-date'>
                        Fall 2015
                    </div>


                    <PjHeading title='identity design' paragraph=''/>

                        <img className = "pj-heading-image" src={require("../images/forest_logo.png")} alt="leesihoney"/>

                    <PjHeading title='typography' paragraph=''/>
                        
                    <img className = "pj-heading-image" src={require("../images/typography1720.png")} alt="leesihoney"/>

                    <PjHeading title='color' paragraph=''/>

                    <div className = 'pj-color-grid'>
                        <div className = 'pj-color-groups'>
                            <ColorCell colorname='Dark Green' colorvalue='#617560'/>
                            <ColorCell colorname='Forest Green' colorvalue='#5F8D55'/>
                            <ColorCell colorname='Light Green' colorvalue='#8BA986'/>
                            <ColorCell colorname='Light Gray' colorvalue='#E0E0E0'/>
                            <ColorCell colorname='Gray' colorvalue='#838383' />
                        </div>
                    </div>
                        
                    <PjHeading title='user interface' paragraph='User interface designed for iOS 8 and iPhone 6. The prototype is designed with Quartz Composer and Origami framework.'/>

                    <div className = 'pj-mobile-wireframe-grid'>
                            <p className = 'small-title'> wireframe </p>
                            <div className = 'pj-mobile-wireframe-groups'>
                                <img className = "pj-mobile-wireframe-img" src = {require("../images/wireframe_1.png")} alt="leesihoney"/>
                                <img className = "pj-mobile-wireframe-img" src = {require("../images/wireframe_2.png")} alt="leesihoney"/>
                                <img className = "pj-mobile-wireframe-img" src = {require("../images/wireframe_3.png")} alt="leesihoney"/>
                            </div>
                    </div>


                    <p className = 'small-title'> prototype </p>

                    <div className = 'pj-mobile-wireframe-video-grid'>
                        <div className = 'pj-mobile-wireframe-video-groups'>
                            <Video caption="Login & Menu" mp4={require('../images/00.mp4')} webm={require('../images/00.webm')} ogg={require('../images/00.ogg')} gif={require('../images/00.gif')} />
                            <Video caption="Home & Search by Keywords" mp4={require('../images/01.mp4')} webm={require('../images/01.webm')} ogg={require('../images/01.ogg')} gif={require('../images/01.gif')} />
                            <Video caption="Contents & Review" mp4={require('../images/02.mp4')} webm={require('../images/02.webm')} ogg={require('../images/02.ogg')} gif={require('../images/02.gif')} />
                        </div>
                    </div>
                                                
                    <PjHeading title='full user flow' paragraph=''/>   
                    
                    <div className = 'vimeo-video'>
                        <iframe title="video "className = 'pj-vimeo-video' src="https://player.vimeo.com/video/124079256" width="320" height="404" frameBorder="0" allowFullScreen></iframe>
                    </div>

                        
                    <div className = 'pj-buttons-right'>
                        <Link to='/project_two' className = 'pj-right-button'>
                            <div className = 'pj-right-button-groups'>
                                <div className = 'right-next'>
                                    Next Project
                                </div>
                                <div className = 'right-icon'>
                                    <img src = {require('../images/right-button.svg')} alt="leesihoney"/>
                                </div>
                            </div>
                        </Link>
                    </div> 
                </div>
            </div>
        )
    }
}

export default ProjectOne;