import React, { Component } from 'react';
import ProjectJumbotron  from './project-jumbotron';
import PjHeading from './pj-heading';
import PjImage from './pj-image';
import PjThoughts from './pj-thoughts';
import PjQuestions from './pj-questions';
import PjInterviews from './pj-interviews';
import PjLists from './pj-lists';
import PjParagraphs from './pj-paragraphs';
import PjFidelities from './pj-fidelities';
import PjPrototype from './pj-prototype';
import { Link } from 'react-router-dom';


const goals = [{case: 'Break the stereotype that LinkedIn is only for “professional” connections.'}, {case: 'Encourage the discovery & recruiting for projects and groups.'}, {case: "If possible, encourage communication within projects / groups, expanding into Slack’s area as well."}];
const cases = [{case: 'Discover projects / groups within the university'}, {case: 'Identify members that are part of the projects / groups'}, { case: 'Express interest in these projects / groups' }, { case: 'Identify who holds leadership roles in projects / groups'}, {case: 'View events held by projects / groups'}, {case: 'Recruit members for projects (Leadership-side)'},{case: 'Communicate with teammates within the group (future-consideration)'}];
const entries = [{entry: "I noticed that other than the five menu buttons at the bottom, there is a hamburger menu that I haven’t interacted with at all."}, {entry: "It opens a “Your communities” menu, which includes hashtags that I follow, and groups that I’m part of. However, these barely feel like “communities” — especially when all the hash-tagged posts are broad generic blog posts on the topic, and some of the group pages are completely empty."}, {entry: "“Your communities” menu is definitely a feature that’s under-utilized, and it could tie in very well with the University Community feature that I’m trying to promote."}];
class ProjectTwo extends Component {
    render() {
        return (
            <div id = 'project-container'>
                <ProjectJumbotron image={require('../images/second_project_pic.png')} company='LinkedIn' introduction='LinkedIn is a place where people can connect to people they know, in order to share professional experience and opportunities. Professional networking can begin at any point, even in school. Increasingly, students are relying on their mobile address book, and not their email address book, to manage their contacts.'/>
                <section className = 'project-content'>
                    <div id='project-date'>
                        Fall 2018
                    </div>

                    <PjHeading title='task' paragraph='Design an experience that helps college students discover and connect to their classmates, without relying on email.'/>

                    <PjHeading title='scope' paragraph='Please think through the end to end experience, and share your thought process, approach, insights, and analysis with us. However, we want to limit the scope of the final deliverable to one high-fidelity design comp that demonstrates your interaction and visual design capabilities.'/>

                    <PjThoughts title='initial thoughts' hook='Reading the task immediately got me thinking:' quote="What an outdated design task, who uses email to reach out to classmates these days? Don’t everyone use Facebook?" paragraph = 'Turns out I was overlooking a crucial part of college life — projects and extracurriculars — but more on this later. It also brought up a few questions to mind:'/>

                    <PjQuestions title='Fundamental Questions' one='Why do they want to discover / connect to their classmates? What benefits are there? What opportunity spaces are present?' two="How do students currently discover and connect to their classmates?" three = 'Under what circumstances do students use LinkedIn vs. Facebook / Email to connect with classmates?'/>

                    <PjHeading title='In-depth Interviews' paragraph='I conducted interviews with four current university students to get a deeper understanding of how students create connections with others.'/>

                    <PjInterviews />
                    
                    <PjHeading title='interview synthesis' paragraph="Based on the affinity diagram, it turns out that while LinkedIn is indeed the preferred way to reach out to professionals outside of their community circle (i.e. college alumni and complete strangers), it fell short when it came to connecting people within the same community (i.e. college-peers)." />
                    <img alt="leesihoney" className = "pj-heading-image" src={require("../images/andrew_interview_synthesis.jpeg")} />

                    <PjImage image={require("../images/andrew_connection_scale.jpeg")} caption="The far left represents the closest relationships (close friends), and the far right represents the most distant relationships (strangers with no connections). LinkedIn’s utility excels in Distant to Moderately Distant (alumni) relationships but diminishes once it enters the realm of connecting within college campuses." />

                    <PjHeading title='opportunity space' paragraph='I decided to target the area of the “Connection Scale” where LinkedIn is missing, which is currently dominated by .edu emails — the experience of reaching out to new acquaintances within, mainly for the purpose of discovering and/or recruiting for projects / groups.'/>

                    <PjHeading title='sketch' paragraph=''/>
                    <div className = 'pj-sketches'>
                        <img alt="leesihoney" className = "pj-sketch-img" src={require("../images/andrew_ideation.jpeg")} />
                        <img alt="leesihoney" className = "pj-sketch-img" src={require("../images/andrew_ideation_two.jpeg")} />
                    </div>

                    <PjLists title='design goals' list= {goals}/>
                    <PjLists title='use cases' list = {cases}/>

                    <PjParagraphs title='Entry Point' list = {entries}/>

                    <PjFidelities />

                    <PjHeading title='user flow' paragraph='A user flow was carefully constructed before any wireframing in order to get a holistic view of what the feature would look like, and to gauge the screen design requirements.'/>
                    <img alt="leesihoney" className = "pj-heading-image" src={require("../images/andrew_user_flow.png")} />

                    <PjHeading title='wireframing and prototyping' paragraph='Wireframes were creating using Sketch and prototypes were created using Principle.'/>
                    </section>

                <img alt="leesihoney" className = "pj-heading-image no-margin" src={require("../images/andrew_design_spec_1.png")} />
                <img alt="leesihoney" className = "pj-heading-image" src={require("../images/andrew_design_spec_2.png")} />
                <section className = 'project-content'>
                    <PjParagraphs title='Interactive Prototype' list = {[{entry: "I made sure that my feature implementation was non-disruptive. Coming up with new features is always fun, but users hate sudden changes. Therefore, I tried to preserve the original LinkedIn UX as much as possible while offering the best experience for the new features."}, {entry: "I also focused on creating fluid animations. Subtle and well-designed motions provide useful context to the users."}]}/>

                    <div className = 'pj-prototypes'>
                        <PjPrototype title='1. Utilization Of An Under-Used Space.' gif={require('../images/andrew_prototype_1.gif')} caption="The initial hamburger menu of the LinkedIn native app included Hashtags you follow, and Groups you’re in, which was pretty empty for many light-users, and even for some heavy users. Contextually, it made sense to include one’s university community to this existing menu layer." />
                        <PjPrototype title='2. Filtered Groups And Organizations.' gif={require('../images/andrew_prototype_2.gif')} caption="Since there are countless organizations and teams, I integrated a categorized list to help users easily discover groups that they would want to join." />
                        <PjPrototype title='3. Insightful Groups Page.' gif={require('../images/andrew_prototype_3.gif')} caption="To encourage students to explore and join new groups and organizations, I’ve allowed lots of dynamic content inside the group's page, including media and insights of where the alumni of each group are currently working at." />
                        <PjPrototype title='4. Easily Join Groups And Organizations.' gif={require('../images/andrew_prototype_4.gif')} caption="Joining a group or an organization made effortless by automatically composing a direct message to the group leader. Contextual AI will pick up any mentions of dates and locations and suggest users add to the calendar so they do not forget." />
                    </div>

                    <PjParagraphs title='Further Considerations' list = {[{entry: "Had I had more time, I would totally spend time imagining how to enable the communication between team members within the LinkedIn app. LinkedIn can be the central hub for all aspects of team management — recruiting, event invites, sub-channel messages within the team, etc — essentially eating into what Slack is doing today."}, {entry: "I would also dive deeper into how events would be managed in this system. Students should be able to discover interesting events hosted by these groups. Event managers should be able to create event postings and advertise to university students."}]}/>
                    <div className = 'pj-buttons'>
                        <Link to='./project_one' className = 'pj-left-button'>
                            <div className = 'pj-left-button-groups'>
                                <div className = 'left-icon'>
                                    <img alt="leesihoney" src = {require('../images/left-button.svg')}/>
                                </div>
                                <div className = 'left-previous'>
                                    Previous Project
                                </div>
                            </div>
                        </Link>

                        <Link to='./project_three' className = 'pj-right-button'>
                            <div className = 'pj-right-button-groups'>
                                <div className = 'right-next'>
                                    Next Project
                                </div>
                                <div className = 'right-icon'>
                                    <img alt="leesihoney" src = {require('../images/right-button.svg')}/>
                                </div>
                            </div>
                        </Link>
                    </div>
                </section>
            </div>
        )
    }
}

export default ProjectTwo;