import React from 'react';

import '../About-Me/Aboutme.css'
import pdf from '../../Images/Resume-of-Ashish_Hameed_C.pdf'
import PersonalDetails from './PersonalDetails/PersonalDetails';
import Skills from './Skills/Skills';

const AboutMe = () => {
    return ( 
        <React.Fragment>
            <div className="about-container">
                <p className='about-me-header'><span>A</span>bout <span>M</span>e</p>
                <div className="self-into">
                    <p>
                    Hello, I’m Ashish Hameed; a Full Stack Web developer in Chennai, Tamilnadu. I’ve spent my last one-year learning web Development from scratch through every course possible and applying by developing projects of my own to develop my skills EVERYDAY.
                    </p>
                </div>
                <PersonalDetails />
                <div className="button" id='resume-id'>
                    <p><a href={pdf} download>Download Resume</a></p>
                </div>
                <Skills />
                <div className="button">
                    <p><a href='/Certificates' >View Certificate</a></p>
                </div>
            </div>
        </React.Fragment>
     );
}
 
export default AboutMe;