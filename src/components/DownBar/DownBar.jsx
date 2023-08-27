import React from "react";
import { BsInstagram, BsLinkedin, BsFacebook, BsGithub } from 'react-icons/bs';
import styles from './DownBar.module.css'

export default function DownBar () {
    
    return (
        <div className={styles.divGeneral}>
            <div className={styles.generalContainer}>
                <a href="https://www.instagram.com/ferv.94/" target="_blank">
                    <div className={styles.buttonMedia}><BsInstagram size={40}/></div>        
                </a>
                <a href="https://www.linkedin.com/in/fabian-ramirez-6a395b156/" target='_blank'>         
                    <div className={styles.buttonMedia}><BsLinkedin size={40}/></div>
                </a>
                <a href="https://www.facebook.com/fabian.ramirez.583" target="_blank">     
                    <div className={styles.buttonMedia}><BsFacebook size={40}/></div>
                </a> 
                <a href="https://github.com/FabiRami94" target="_blank">
                    <div className={styles.buttonMedia}><BsGithub size={40}/></div>
                </a>           
            </div>
        </div>
    )
}