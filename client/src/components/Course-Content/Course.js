import React from 'react';

import '../Course-Content/Course.css';
import Udemy from './Udemy';
import RenderCoursera from './Coursera'
import Navbar from '../Navbar/Navbar'


const Course = () => {
    return (
        <>
        <Navbar resume='/#resume-id' contact='/#contact-id' />
        <div id='certificate-id' className='certificate-section'>
            <h2>Certificates From Coursera</h2>
            <RenderCoursera />
            <h2>Certificates From Udemy</h2>
            <Udemy />
        </div>
        </>
        )
}
 
export default Course;