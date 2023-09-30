import React from "react"
import { NavLink } from "react-router-dom";
import styles from "./NavBar.module.css";
import { Link } from 'react-scroll';


const NavBar = () => {

    return(
        <main className={styles.mainStyle}>
            <div>
                <h1 style={{color: 'white'}}>FabiRami94.</h1>
            </div>
            <div className={styles.divLinks}>
                <Link 
                    className={styles.linksStyles} 
                    to='home'
                    smooth={true} 
                    offset={200} 
                    duration={500}>Home</Link>
                <Link 
                    className={styles.linksStyles} 
                    to='acerca'
                    smooth={true} 
                    offset={200} 
                    duration={500}>Acerca/Experiencia</Link>
                <Link 
                    className={styles.linksStyles} 
                    to='habilidades' 
                    smooth={true} 
                    offset={200} 
                    duration={500}>Habilidades</Link>
                <Link 
                    className={styles.linksStyles} 
                    to='portafolio' 
                    smooth={true} 
                    offset={200} 
                    duration={500}>Portafolio</Link>
                <Link 
                    className={styles.linksStyles} 
                    to='contacto'
                    smooth={true} 
                    offset={200} 
                    duration={500}>Contacto</Link>
                {/* <NavLink className={styles.linksStyles} to={'/'}>Home</NavLink>
                <NavLink className={styles.linksStyles} to={'/acerca/experiencia'}>Acerca/Experiencia</NavLink>
                <NavLink className={styles.linksStyles} to={'/habilidades'}>Habilidades</NavLink>
                <NavLink className={styles.linksStyles} to={'/portafolio'}>Portafolio</NavLink>
                <NavLink className={styles.linksStyles} to={'/contacto'}>Contacto</NavLink>        */}
            </div>
        </main>
    )
}

export default NavBar;