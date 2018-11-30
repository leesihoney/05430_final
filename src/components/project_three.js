import React, { Component } from 'react';
import ProjectJumbotron  from './project-jumbotron';
import PjHeading from './pj-heading';
import PjImage from './pj-image';
import PjThoughts from './pj-thoughts';
import PjThoughtsNoHook from './pj-thoughts-no-hook';
import PjQuestions from './pj-questions';
import PjLists from './pj-lists';
import PjParagraphs from './pj-paragraphs';
import PjSmallSection from './pj-small-section';
import { Link } from 'react-router-dom';



const user_background = [{case: 'Age: 20–25'}, {case: 'Device: 90% iPhone 10% Macbook'}, {case: "Songs of collection: >2,000 songs"}, {case: 'Frequency of use: >5 hours everyday (premium user)'}, {case: 'Needs: Access to all the music I like, discover new music and share music with friends.'}];
const user_goals = [{case: 'Listen to and save music'}, {case: 'Discover new music'}, {case: "Socialize with friends"}];

const entries = [{entry: "I love music and use Spotify everyday, when I’m struggling to get up in the morning, when I’m focusing at work and when I’m taking a shower in the evening. It has been a pleasant experience with Spotify but I’m quite the picky designer and I believe it could be better."}, {entry: "I was provided a great opportunity to do a reverse engineering practice of Spotify. I spent two weekends to take things apart, understand how it works and try to improve the user experience. This practice is purely based on my own research and my personal usage."}];
class ProjectThree extends Component {
    render() {
        return (
            <div id = 'project-container'>
                <ProjectJumbotron image={require('../images/third_project_pic.png')} company='Spotify' introduction='I was provided a great opportunity to do a reverse engineering practice of Spotify. I spent two weekends to take things apart, understand how it works and try to improve the user experience. This practice is purely based on my own research and my personal usage.'/>
                <section className = 'project-content'>
                    <div id='project-date'>
                        Mar 2017
                    </div>

                    <PjParagraphs title='the challenge' list = {entries}/>

                    <PjHeading title='business goals' paragraph='Spotify is a music, podcast, and video streaming service, officially launched on 7 October 2008. Spotify is a freemium service, meaning that basic features are free with advertisements, while additional features, including improved streaming quality and offline music downloads, are offered via paid subscriptions.'/>
                    <PjImage image={require("../images/spotify-business.png")} caption="Spotify free version and premium version" />

                    <PjLists title='user background' list= {user_background}/>
                    <PjLists title='user goals' list= {user_goals}/>

                    <PjThoughtsNoHook title='problem statement'  quote="So, how do we maximize the sweet spot where user goals and business goals intersect?" paragraph = 'The simple answer is providing a kick-ass user experience to make your user love using the app. Let’s start from the backbone of a digital product — Information Architecture(IA).'/>
                    <PjThoughtsNoHook title='information architecture' quote="One of the challenges people have with IA is that they can’t easily see it. Have you ever heard someone say, “Man, that website’s information architecture sucks!” I bet no. More likely you would hear, “I can’t find anything. Why is it all over the place?”" paragraph = 'Some of my friends have the same frustrations as me since we get confused by Spotify’s navigation. So I visualized the current IA and marked the duplicated sections in green.'/>

                    <PjImage image={require("../images/spotify-information-architecture.png")} caption="Spotify Information Architecture" />

                    <PjQuestions title='Fundamental Questions' one='Why do they want to discover / connect to their classmates? What benefits are there? What opportunity spaces are present?' two="How do students currently discover and connect to their classmates?" three = 'Under what circumstances do students use LinkedIn vs. Facebook / Email to connect with classmates?'/>

                    <PjHeading title='In-depth Interviews' paragraph='I conducted interviews with four current university students to get a deeper understanding of how students create connections with others.'/>

                    <PjLists title='main issues' list = {[{case: 'Content overload'}, {case: 'Lack of priority'}, {case: 'Confusing names'}]}/>
                    
                    <PjHeading title='user journey map' paragraph="A user journey map allows you to identify and strategize for key moments. I mapped out the top three user flows with user goals and pain points at each step in order to define key opportunities to improve the overall user experience." />
                    <img className = "pj-heading-image" src={require("../images/spotify-user-journey-map-1.png")} alt="leesihoney"/>
                    <img className = "pj-heading-image" src={require("../images/spotify-user-journey-map-2.png")} alt="leesihoney"/>
                    <img className = "pj-heading-image" src={require("../images/spotify-user-journey-map-3.png")} alt="leesihoney"/>

                    <PjHeading title='unsolicited redesign' paragraph='In this part, I’m going to minimize the features based on my personal usage, redesign the IA(Information Architecture) and some UI (User Interface). Finally, I will propose a couple of suggestions to resolve the pain points found in the three user journeys.'/>
                    <PjParagraphs title='revised information architecture' list = {[{entry: 'Almost every popular product starts from MVP (Minimum Viable Product) with the key information and becomes more and more cluttered adding new features as it grows. Sometimes we need to take a step back to focus on what actually matters to the user and how to present that to the user.'}, {entry: 'In order to create a minimalist design, I reorganized the information, combined the duplicated content and removed some of the sections that I don’t use frequently, such as ‘Concerts’ and ‘Podcasts’.'}]}/>

                    <div className = 'pj-sketches'>
                        <img className = "pj-sketch-img-spotify" src={require("../images/spotify-old-ia.png")} alt="leesihoney"/>
                        <img className = "pj-sketch-img-spotify" src={require("../images/spotify-new-ia.png")} alt="leesihoney"/>
                    </div>

                    <PjParagraphs title='wireframes' list = {[{entry: 'There are four sections in the revised IA which are ‘My Library’, ‘Discover’, ‘Radio’ and ‘Search’. I combined ‘Home’ and ‘Browse’ into ‘Discover’ as they have lots of duplicated content and serve the same purpose which is to discover new music.'}, {entry: 'Since my simplified version of Spotify has less features and pages, I changed the navigation tabs back to a hamburger menu to create a clean interface.'}, {entry: 'Also, I tried to prioritize the most frequently used sections with visual hierarchy.'}]}/>

                    <PjImage image={require("../images/spotify-wireframe.png")} caption="Redesigned Wireframes" />

                    <PjHeading title='UX Suggestions and Redesign' paragraph='After analyzing user pain points from the three user journeys, I summarized a list of UX suggestions by section.'/>
                    
                    <PjSmallSection title='Library' list={[{entry: "Label Name — I suggest to change the name from ‘Your library’ to ‘My library’ or even ‘Library’ because an app should communicate with the user from their perspective."}, {entry: "Visual Hierarchy — I prioritized four main sections in ‘My Library’ which are ‘My songs’, ‘My playlists’, ‘My stations’ and ‘My artists’. I suggest to move ‘Daily Mix’ from ‘Library’ to ‘Discover’ and change ‘Albums’ to a filter inside of ‘My songs’."}]}/>

                    <img alt="leesihoney" className = "pj-sketch-img-spotify" src={require("../images/spotify-redesigned-library.png")} />
                    <PjSmallSection title='songs' list={[{entry: "Currently, the search bar and filter are invisible unless the user scrolls to find them and even then there are only limited filters included. I suggest to make search bars and filters easy to access and add more useful filters including but not limited to ‘Most played’, ‘Artists’, ‘Albums’ and ‘Moods’."}]}/>

                    <img alt="leesihoney" className = "pj-sketch-img-spotify" src={require("../images/spotify-designed-songs.png")} />

                    <PjSmallSection title='playlists' list={[{entry: "Currently, the user-created playlists are buried by tons of other saved playlists. These two types of playlists have different priorities so I suggest to add a ‘Made by You’ filter so that the user is able to access their own playlists easily."}]}/>

                    <img alt="leesihoney" className = "pj-sketch-img-spotify" src={require("../images/spotify-redesigned-playlists.png")} />

                    <PjHeading title='other ideas' paragraph='Xiami is a Chinese music app by Alibaba that I have been using for more than six years. There are some small features that really bring me joy. I’d like to share with you here:'/>
                    <PjSmallSection title='Music comment section' list={[{entry: "I like sharing my stories of music with people who have the same taste. I write down my thoughts and feelings in the comment section where people can like each others comments and make friends."}]}/>
                    <PjSmallSection title='sleep timer' list={[{entry: "Lots of people listen to music before they go to bed. A sleep mode allows users to set up a certain period of time before it automatically shuts down. Falling asleep with music on sounds like a good experience right?"}]}/>
                    <PjSmallSection title='lyric poster' list={[{entry: "Xiami provides poster templates when users share songs. A user is able to choose the lyric and background image to create their own poster and post on social media."}]}/>
                    <img alt="leesihoney" className = "pj-sketch-img-spotify" src={require("../images/xiami.png")} />

                    <PjSmallSection title='tape player' list={[{entry: "I still remember the surprising moment when I accidentally turned my phone to landscape mode and found the music player becoming a tape player. It suddenly brought me back to 12 years ago when I held a giant box and listened to a tape over and over again. Sometimes we need to take more than one step back to find the little joy and add it to our product."}]}/>
                    <img alt="leesihoney" className = "pj-sketch-img-spotify" src={require("../images/tape-player.png")} />

                    <PjThoughts title='reflection' hook='To me, UX design is all about happiness. As a user, it is the exciting and memorable moment of using a product. As a designer, it is the sense of fulfilment when people like my ideas. I love the design thinking process of understanding why things work and why not.' quote="“It is not enough that we build products that function, that are understandable and usable, we also need to build products that bring joy and excitement, pleasure and fun, and, yes, beauty to people’s lives.” –Don Norman" paragraph = ''/>

                <div className = 'pj-buttons-left'>
                    <Link to='./project_two' className = 'pj-left-button'>
                        <div className = 'pj-left-button-groups'>
                            <div className = 'left-icon'>
                                <img alt="leesihoney" src = {require('../images/left-button.svg')}/>
                            </div>
                            <div className = 'left-previous'>
                                Previous Project
                            </div>
                        </div>
                        <div className = 'pj-right-button-groups'/>
                        
                    </Link>
                </div> 
                </section>
            </div>
        )
    }
}

export default ProjectThree;