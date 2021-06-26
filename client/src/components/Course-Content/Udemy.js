import React from 'react';

import './Course.css';
import certificateImage13 from '../Certificates/course-certificates/udemy/Udemy_JavaScript.jpg';
import certificateImage14 from '../Certificates/course-certificates/udemy/Udemy_Python.jpg';
import certificateImage15 from '../Certificates/course-certificates/udemy/Udemy_React-and-Redux_Course.jpg';

const Udemy = () => {
    return (
        <React.Fragment>
            <div className='certificate-split'>
                <div className='div-1'>
                    <img className='certificate-img' src={certificateImage13} alt="Udemy_JavaScript-certificate" />
                    <p><a className='credentials' href="http://ude.my/UC-d9e81bae-3670-4128-9dec-e66e86b2261b/" target='_Blank' rel='noreferrer'>To See Credentials</a></p>
                </div>
                <div>
                    <img className='certificate-img' src={certificateImage14} alt="Udemy_Python-certificate" />
                    <p><a className='credentials' href="https://www.udemy.com/certificate/UC-c3e6b530-c11c-404e-980d-455c6ef911f4/" target='_Blank' rel='noreferrer'>To See Credentials</a></p>
                </div>
            </div>
            <div className='certificate-split udemy'>
                <div className='div-1'>
                    <img className='certificate-img udemy-single-image' src={certificateImage15} alt="Udemy_React-and-Redux_Certificate" />
                    <p><a className='credentials' href="http://ude.my/UC-0ee31793-3d09-42ad-a8fa-ca6ee2552746" target='_Blank' rel='noreferrer'>To See Credentials</a></p>
                </div>
            </div>
        </React.Fragment>
        
    )
}

export default Udemy;