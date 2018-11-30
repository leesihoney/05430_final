import React from 'react';
import { Switch, Route} from 'react-router-dom';
import LandingPage from './landingpage';
import AboutMe from './aboutme';
import ProjectOne from './project_one';
import ProjectTwo from './project_two';
import ProjectThree from './project_three';


const Main = () => (
    <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/aboutme" component = {AboutMe} />
        <Route path="/project_one" component = {ProjectOne} />
        <Route path="/project_two" component = {ProjectTwo} />
        <Route path="/project_three" component = {ProjectThree} />


    </Switch>
)

export default Main;