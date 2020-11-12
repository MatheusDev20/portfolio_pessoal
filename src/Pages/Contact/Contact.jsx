import React from 'react';
import './Contact.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';



const Contact = () =>  {
  return (
  
         <>
            <div class="contact-container">
                <div className="contact-img">
                    <h1>Entre em contato comigo pelos canais:</h1>
                </div>
                <div className="info">
                        <div style={{display:'flex'}}>
                            <FontAwesomeIcon icon={faPhone} style={{fontSize:'40px', color:'#fff'}}/>
                            <h2>(32) 999543180.</h2>
                        </div>
                        <div style={{display:'flex'}}>
                            <FontAwesomeIcon icon={faEnvelope} style={{fontSize:'40px', color:'#fff'}}/>
                            <h2>matheusdev20@gmail.com</h2>
                        </div>
                </div>


            </div>



        </>
  )
}

export default Contact;