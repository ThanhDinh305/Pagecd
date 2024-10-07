import React from "react";
import styles from "@/assets/styles/Welcome.module.scss"
const Welcome =()=>{
    return(
        <div className={styles.Welcome}>
            <img src="/image/picturewelcome.jpg" alt="" />
            <div className={styles.text}>
                <div className={styles.textWC}>Welcome</div>
                <div className={styles.content}>Do You Need a Personal Assistant?</div>
                <div className={styles.content1}><p>This website template is your number one helper for creating that perfect site for your personal or corporate needs! Let your projects obtain the most attractive appearance, and provide the best user experience! Welcome to se the services.</p></div>
                <div className={styles.Name}>Christine Miller</div>

            </div>
            <div className={styles.under}><img src="/image/jsign.png" alt="" /></div>
            
        </div>

    );
};
export default Welcome;