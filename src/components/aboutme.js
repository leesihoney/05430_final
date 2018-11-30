import React, { Component } from 'react';
import Circle from './circle'
class AboutMe extends Component {
    render() {
        return (
            <div className = 'aboutme'>
                <div className = 'about-exp'>
                    <div className = 'about-pic'>
                        <img alt="leesihoney" src={require('../images/siheon_lee_pic.png')}/>
                    </div>

                    <div className = 'about-leesihoney'>
                        <h3 className = 'about-hello'>
                            Hello everyone, this is
                        </h3>

                        <h2 className = 'about-andrew'>
                            Andrew Siheon Lee
                        </h2>
                        <p className = 'about-introduction'>
                            I am a junior student majoring in <b>Information Systems</b> and <b>Human-Computer Interaction</b> in <b>Carnegie Mellon University</b>. I have lived in <b>Seoul, Korea</b> for twenty years and enjoying my campus life in <b>Pittsburgh, USA</b>. Throughout my experiences, I have earned a strong faith that I will dedicate my whole life bringing people and technology closer, and be ready to respond design issues that the rapid innovation of our world would bring to us.
                        </p>
                        <br/>
                        <p className = 'about-introduction'>
                            Besides my work, I am a <b>Christian</b>. I am a huge <b>basketball</b> fan and an amateur <b>jazz pianist</b>. I would always be happy to talk to you with the things that I love.
                        </p>
                    </div>

                </div>
                <div className = 'about-circles'>
                    <Circle pic = {require("../images/christian.png")} name='Christian' explanation = 'For God so loved the world that he gave his one and only Son, that whoever believes in him shall not perish but have eternal life. - John 3:16 NIV' />
                    <Circle pic = {require("../images/nba.png")} name='NBA' explanation = 'I am a huge fan of basketball, and I love watching NBA games on TV and in courts' />
                    <Circle pic = {require("../images/jazz_piano.png")} name='Jazz Music' explanation = 'I surely love Jazz and I am a Jazz pianist. My favorite jazz artists are Chet Baker, Bill Evans, and Keith Jarrett' />
                </div>
            </div>
        )
    }
}

export default AboutMe;