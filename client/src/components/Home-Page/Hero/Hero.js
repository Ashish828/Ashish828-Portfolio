import React from 'react';

import '../Hero/Hero.css'

const Hero = () => {
    return ( 
        <div className="hero">
                <div className="hero-split">
                    <div>
                        <p className='hero-1'>Hello World,</p>
                    </div>
                    <div>
                        <p className='hero-2'>I'm <span>Ashish Hameed</span></p>
                        <p className='hero-3'>A Web Developer.</p>
                    </div>
                    <div>
                        <p className='hero-4'>
                            “There are three responses to a piece of design 
                            <span>– yes, no, and WOW! </span><span> Wow is the one to aim for”</span>
                        </p>
                    </div>
                </div>
            </div>
     );
}
 
export default Hero;