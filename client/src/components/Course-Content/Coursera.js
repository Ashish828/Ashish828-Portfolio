import React from 'react';

import './Course.css'
import certificateImage1 from "../Certificates/course-certificates/coursera/Coursera_HTML_CSS_JS.jpg" ;
import certificateImage2 from "../Certificates/course-certificates/coursera/Coursera_Python_1.jpg" ;
import certificateImage3 from "../Certificates/course-certificates/coursera/coursera_python_4.jpg";
import certificateImage4 from "../Certificates/course-certificates/coursera/Coursera_PYTHON_CAPSTONE.jpg";
import certificateImage5 from "../Certificates/course-certificates/coursera/Coursera_python_data_stuctures_2.jpg";
import certificateImage6 from "../Certificates/course-certificates/coursera/Coursera_python_specialization.jpg";
import certificateImage7 from "../Certificates/course-certificates/coursera/Coursera_python_web_data_3.jpg";
import certificateImage8 from "../Certificates/course-certificates/coursera/Coursera_web_AdvanceResponsive.jpg";
import certificateImage9 from "../Certificates/course-certificates/coursera/Coursera_web_capstone.jpg";    
import certificateImage10 from "../Certificates/course-certificates/coursera/Coursera_web_css.jpg";    
import certificateImage11 from "../Certificates/course-certificates/coursera/Coursera_web_html.jpg";
import certificateImage12 from "../Certificates/course-certificates/coursera/Coursera_web_javaScript.jpg";

const RenderCoursera = ()=>{
    const toRenderDetails = [ 
        {
            imageUrl : certificateImage1 ,
            alt : "Coursera-HTML-CSS-JS-Certificate" ,
            link : "https://www.coursera.org/account/accomplishments/certificate/FAWR5NMQX4LK",

            imageUrl2 : certificateImage2 ,
            alt2 : "Coursera-Python-1-Certificate" ,
            link2 : "https://www.coursera.org/account/accomplishments/certificate/ZVFCJLFWXLKZ"
        },
        {
            imageUrl : certificateImage3 ,
            alt : "Coursera-Python-4-Certificate" ,
            link : "https://www.coursera.org/account/accomplishments/certificate/MF8GQRMGAXZ7",
        
            imageUrl2 : certificateImage4 ,
            alt2 : "Coursera-Python-Capstone-Certificate" ,
            link2 : "https://www.coursera.org/account/accomplishments/certificate/KZEMRC6NXC4J"
        },
        {
            imageUrl : certificateImage5 ,
            alt : "Coursera-Python-DataStructure-Certificate" ,
            link : "https://www.coursera.org/account/accomplishments/certificate/EQLV7LW3EK9T",
        
            imageUrl2 : certificateImage6 ,
            alt2 : "Coursera-Python-specialization-Certificate" ,
            link2 : "https://www.coursera.org/account/accomplishments/specialization/certificate/UX8ACQWKMQJ6"
        },
        {
            imageUrl : certificateImage7 ,
            alt : "Coursera-python-webData-3-Certificate" ,
            link : "https://www.coursera.org/account/accomplishments/certificate/ZJHQUQRHNUJS",
        
            imageUrl2 : certificateImage8 ,
            alt2 : "Coursera-web_AdvanceResponsive-Certificate" ,
            link2 : "https://www.coursera.org/account/accomplishments/certificate/PJK5YV92F2AP"
        },
        {
            imageUrl : certificateImage9 ,
            alt : "Coursera-web_capstone-Certificate" ,
            link : "https://www.coursera.org/account/accomplishments/certificate/AKCSVA34CEKW",
        
            imageUrl2 : certificateImage10 ,
            alt2 : "Coursera-web_css-Certificate" ,
            link2 : "https://www.coursera.org/account/accomplishments/certificate/S5KRA7PVFPGR"
        },
        {
            imageUrl : certificateImage11 ,
            alt : "Coursera-web_html-Certificate" ,
            link : "https://www.coursera.org/account/accomplishments/certificate/6EKKY496L9JF",
        
            imageUrl2 : certificateImage12 ,
            alt2 : "Coursera-web_javaScript-Certificate" ,
            link2 : "https://www.coursera.org/account/accomplishments/certificate/UPNU5MS4GHMJ"
        }
     ]
     return (
        toRenderDetails.map((details)=>(
            
            <div className='certificate-split' key={details.alt}>
                <div className='div-1'>
                    <img className='certificate-img' src={details.imageUrl} alt={details.alt} />
                    <p><a className='credentials' href={details.link} target='_Blank' rel='noreferrer'>To See Credentials</a></p>
                </div>
                <div>
                    <img className='certificate-img' src={details.imageUrl2} alt={details.alt2} />
                    <p><a className='credentials' href={details.link2} target='_Blank' rel='noreferrer'>To See Credentials</a></p>
                </div>
            </div>
            
        ))
     )
     
}

export default RenderCoursera;