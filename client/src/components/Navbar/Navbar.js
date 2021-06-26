import React from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

import '../Navbar/Navbar.css'

const Navbar = (props) => {
    
    return ( 
        <nav className='container'>
            <div>
                <Link to='/' className='nav-links nav-name'>Ashish Hameed</Link>
            </div>
            <div>
                <ul className='split'>
                    <li><Link to='/' className='nav-links nav-items'>Home</Link></li>
                    <li><HashLink to={props.resume} className='nav-links nav-items'>Resume</HashLink></li>
                    <li><HashLink to={props.contact} className='nav-links nav-items'>Contact</HashLink></li>
                </ul>
            </div>
        </nav>
     );
}
 
export default Navbar;