import React from "react"
import { NavLink } from "react-router-dom";
import styles from "./NavBar.module.css";


const NavBar = () => {

    return(
        <main className={styles.mainStyle}>
            <div>
                <h1 style={{color: 'white'}}>FabiRami94.</h1>
            </div>
            <div className={styles.divLinks}>
                <NavLink className={styles.linksStyles} to={'/'}>Home</NavLink>
                <NavLink className={styles.linksStyles} to={'/acerca/experiencia'}>Acerca/Experiencia</NavLink>
                <NavLink className={styles.linksStyles} to={'/habilidades'}>Habilidades</NavLink>
                <NavLink className={styles.linksStyles} to={'/portafolio'}>Portafolio</NavLink>
                <NavLink className={styles.linksStyles} to={'/contacto'}>Contacto</NavLink>       
            </div>
        </main>
    )
}

export default NavBar;