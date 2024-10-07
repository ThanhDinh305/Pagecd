import React from "react";
import styles from "@/assets/styles/Achievements.module.scss"
import ProfessionalAchievements from "../contentAchi";
const Achievements =()=>{
    return(
   <div className={styles.container}>
    <div className={styles.Image}>
        <img src="/Image/img_educ.jpg" alt="" />
    </div>
    <div className={styles.content}>
        <h2>Professinal Achievements </h2>
        <ProfessionalAchievements/>
    </div>
   </div>
    );

};
export default Achievements;