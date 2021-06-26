import React from 'react';

import '../Footer/Footer.css';
import instagram from '../../Images/icon-instagram.svg';
import twitter from '../../Images/icon-twitter.svg';
import linkedin from '../../Images/icon-linkedin.svg';

const Footer = () => {
    return ( 
        <div className='footer'>
            <div className="footer-content">
                <div className="social-links">
                    <a href="https://www.instagram.com/ashish_____c/" rel="noreferrer" target='_blank'><img src={instagram} alt="ashish instagram link" /></a>
                    <a href="https://twitter.com/ashish_828" rel="noreferrer" target='_blank'><img src={twitter} alt="ashish twitter link" /></a>
                    <a href="https://www.linkedin.com/in/ashish-h-7783391a6/" rel="noreferrer" target='_blank'><img src={linkedin} alt="ashish linkedin link" /></a>
                </div>
                <div className='other-footer-content'>
                    <p><a class='footer-contact'href='/#contact-id'>Contact</a>
                    </p>
                </div>
                <div className='other-footer-content'>
                    <p>Terms Of Use.Privacy Policy</p>
                </div>
                <div className='other-footer-content'>
                    <p>&#169; 2021 Ashish Hameed</p>
                </div>
            </div>
        </div>
     );
}
 
export default Footer;