import React from "react";
import Skill from "../Skill/Skill";
import styles from './Skills.module.css';
import { habilidadesEnBackEnd,habilidadesEnFrameworks, habilidadesEnIdiomas, habilidadesEnLenguaje, habilidadesEnOtros } from "../../utils/dataHabilidades";

const Skills = () => {

    return(
        <div>
            <div>
                <h1 style={{display: 'flex', justifyContent: 'center'}}>
                    <span style={{color: 'white'}}>Mis</span>&nbsp;
                    <span style={{color: '#49b4b2'}}>Habilidades</span></h1>
            </div>
            <div className={styles.divGeneral}>
                <div className={styles.divPorHabilidad}>
                    <h1 className={styles.textStyle}>Habilidades en lenguaje</h1>
                        {habilidadesEnLenguaje.map((habilidad, index) => 
                            <Skill  
                                key={index}
                                nombre={habilidad.nombre}
                                color1={habilidad.colors.color1}
                                color2={habilidad.colors.color2}
                                color3={habilidad.colors.color3}
                                color4={habilidad.colors.color4}
                                color5={habilidad.colors.color5}
                                color6={habilidad.colors.color6}
                                ></Skill>)}   
                </div>
                <div style={{display: 'flex', flexDirection: 'column'}}>
                    <div className={styles.divPorHabilidad}>
                        <h1 className={styles.textStyle}>Habilidades en Frameworks</h1> 
                        {habilidadesEnFrameworks.map((habilidad, index) => 
                                <Skill  
                                    key={index}
                                    nombre={habilidad.nombre}
                                    color1={habilidad.colors.color1}
                                    color2={habilidad.colors.color2}
                                    color3={habilidad.colors.color3}
                                    color4={habilidad.colors.color4}
                                    color5={habilidad.colors.color5}
                                    color6={habilidad.colors.color6}
                                    ></Skill>)} 
                    </div>
                    <div className={styles.divPorHabilidad}>
                        <h1 className={styles.textStyle}>Habilidades en BackEnd</h1> 
                        {habilidadesEnBackEnd.map((habilidad, index) => 
                                <Skill  
                                    key={index}
                                    nombre={habilidad.nombre}
                                    color1={habilidad.colors.color1}
                                    color2={habilidad.colors.color2}
                                    color3={habilidad.colors.color3}
                                    color4={habilidad.colors.color4}
                                    color5={habilidad.colors.color5}
                                    color6={habilidad.colors.color6}
                                    ></Skill>)}  
                    </div>
                </div>
                <div style={{display: 'flex', flexDirection: 'column'}}>
                    <div className={styles.divPorHabilidad}>
                        <h1 className={styles.textStyle}>Habilidades en Otros</h1> 
                        {habilidadesEnOtros.map((habilidad, index) => 
                                <Skill  
                                    key={index}
                                    nombre={habilidad.nombre}
                                    color1={habilidad.colors.color1}
                                    color2={habilidad.colors.color2}
                                    color3={habilidad.colors.color3}
                                    color4={habilidad.colors.color4}
                                    color5={habilidad.colors.color5}
                                    color6={habilidad.colors.color6}
                                    ></Skill>)} 
                    </div>
                    <div className={styles.divPorHabilidad}>
                        <h1 className={styles.textStyle}>Idiomas</h1>
                        {habilidadesEnIdiomas.map((habilidad, index) => 
                                <Skill  
                                    key={index}
                                    nombre={habilidad.nombre}
                                    color1={habilidad.colors.color1}
                                    color2={habilidad.colors.color2}
                                    color3={habilidad.colors.color3}
                                    color4={habilidad.colors.color4}
                                    color5={habilidad.colors.color5}
                                    color6={habilidad.colors.color6}
                                    ></Skill>)}              
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Skills