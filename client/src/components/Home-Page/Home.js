import React from 'react';


import Navbar from '../Navbar/Navbar';
import Hero from './Hero/Hero';
import AboutMe from './About-Me/Aboutme';
import Contact from './Contact/Contact';

const renderList = ()=>{
    return (
        <React.Fragment>
            <Navbar resume='#resume-id' contact='#contact-id'/>
            <Hero />
            <AboutMe />
            <Contact />
        </React.Fragment>
    )
}




const Home = () => {
    return renderList()
}
 
export default Home;