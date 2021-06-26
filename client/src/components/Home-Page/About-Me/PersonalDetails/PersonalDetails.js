import React from 'react';

import '../PersonalDetails/PersonalDetails.css'

const PersonalDetails = () => {
    return (
        <div className='Personal-details-conatiner'>
            <p className='personal-details-header'>Personal Details</p>
            <div className='details-split'>
                <div className='details-1'>
                    <p>Birthdate</p>
                    <p>Phone</p>
                    <p>Email</p>
                    <p>Website</p>
                    <p>Address</p>
                    <p>Job Status</p>
                </div>
                <div className='details-2'>
                    <p>22-10-2001</p>
                    <p>+91 7358291696</p>
                    <p>ashishhameed007<span>@gmail.com</span></p>
                    <p>https://ashish828.herokuapp.com/</p>
                    <p>Chennai,TamilNadu.</p>
                    <p className='highlight'>Freelance</p>
                </div>
            </div>
        </div>
    )
}
 
export default PersonalDetails;