import React from "react";
import styles from "@/assets/styles/Footer.module.scss";
import TwitterIcon from "../icon/twiter";
import FBIcon from "../icon/FacebookICon";
import LKIcon from "../icon/linkedin";

const TFooter = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content1}>
        <div className={styles.Contact}>
          <h2>CONTACTS</h2>
          <div className={styles.number}>800 123 4567</div>
          <div className={styles.email}>...@gmail.com</div>
        </div>
        <div className={styles.socialNetwork}>
          <TwitterIcon />
          <FBIcon />
          <LKIcon />
        </div>
        <div className={styles.address}>
          <h2>ADDRESS</h2>
          <p>8500, Lorem Street, Chicago, IL, 55030</p>
        </div>
        <div className={styles.IMG}>
          <img src="/Image/post-5.jpg" alt="" />
        </div>
      </div>

      <div className={styles.content2}>
        <div className={styles.Sub}>
          <input type="text" placeholder="Subcribe to my email list" />
        </div>
        
        <div className={styles.goal}>
          <div className={styles.PP1}>
            <h3>Home</h3>
            <h3>Pricing</h3>
            <h3>About</h3>
          </div>
          <div className={styles.PP2}>
            <h3>Service</h3>
            <h3>My Blog</h3>
            <h3>Contacts</h3>
          </div>
          <div className={styles.text}>All right reserved</div>
        </div>
      </div>
    </div>
  );
};
export default TFooter;
