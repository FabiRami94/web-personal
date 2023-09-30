import React from "react";
import styles from './Skill.module.css';


const Skill = ({nombre, color1, color2, color3, color4, color5, color6 }) => {
    return(
    <div>
        <div className={styles.divGeneral}>
            <div>
                <p className={styles.textStyle}>{nombre}</p>
            </div>
            <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
                <div className={styles.recuadrosPuntuacion} style={{borderRadius: '15px 0px 0px 15px', background: `${color1}`}}></div>
                <div className={styles.recuadrosPuntuacion} style={{background: `${color2}`}}></div>
                <div className={styles.recuadrosPuntuacion} style={{background: `${color3}`}}></div>
                <div className={styles.recuadrosPuntuacion} style={{background: `${color4}`}}></div>
                <div className={styles.recuadrosPuntuacion} style={{background: `${color5}`}}></div>
                <div className={styles.recuadrosPuntuacion} style={{borderRadius: '0px 15px 15px 0px', background: `${color6}`}}></div>
            </div>
        </div>
    </div>
    )
}

export default Skill