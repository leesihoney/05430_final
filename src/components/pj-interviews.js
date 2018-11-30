import React, { Component } from 'react';
import PjInterview from './pj-interview';
class PjInterviews extends Component {
    render() {
        return (
            <div className = 'pj-interviews'>
                <PjInterview questionnumber='1' question = 'Why do you want to discover / connect with your classmates?' seone_answer="Two types: classmates in same course to endure the pain with, and other classmates with similar interests to hangout with and dine with." chloe_answer="I don't really connect with others I'm an introvert, and I think it's awkward talking to strangers with no good reason." alessandra_answer="I mostly reach out to classmates and students within CMU when I'm recruiting for the CMU Hyperloop team." caption="Most students discover new classmates through courses they take together, or through cool projects and teams." />
                <PjInterview questionnumber='2'question = 'How do you currently discover and connect with your classmates?' seone_answer="I mostly discovered my classmates through physical social events, and connecting with Facebook. We also have a dedicated group Slack channel." chloe_answer="Most of the friends I know are from my course, or my course project groups. Then I talk to them through Facebook, and Slack for group projects" alessandra_answer="I connect with my classmates usually by joining new projects or teams that are interesting for me, and talk to them on Slack." caption="Most students like to discover others in events or through projects, and talk on Facebook and Slack." />
                <PjInterview questionnumber='3 'question = 'Under what circumstances do you use LinkedIn to connect with classmates vs. Facebook / Email?' seone_answer="Mostly Facebook, but I used a lot of LinkedIn before I got into CMU. I connected with a lot of alumni to get tips on career path and applications." chloe_answer="I use Facebook and Slack to keep in touch with people I talk to and people within my project group. LinkedIn is reserved for people outside of CMU." alessandra_answer="When I recruit for my projects, I use my .edu email because it gives them trustworthyness. LinkedIn message is just awkward when sent to CMU students" caption="Facebook is the popular choice for closer friends — Slack for larger groups, and Email for unfamiliar faces within the same college. LinkedIn is popular for people outside of Carnegie Mellon’s campus." />
            </div>
                    )
    }
}

export default PjInterviews;