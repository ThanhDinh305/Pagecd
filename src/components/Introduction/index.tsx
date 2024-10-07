import React from "react";
import styles from "@/assets/styles/Introduction.module.scss";
const Introduction = () => {
  return (
    <div className={styles.Image1}>
      <img src="/image/xsothvtp.dk5.jpg" alt="" width="500" height="300" />
      <div className={styles.LOGO}>
        <img src="/image/logo.jpg" alt="" />
      </div>
      <div className={styles.Name}>
        <div>
          {" "}
          <div className={styles.Text1}>Anh Quang</div>
          <div className={styles.Text2}>
            <div className={styles.Text21}>Dep zai</div>
            <div className={styles.Text22}>
              <h5>Your NY City</h5>
              <h5>Personal Assistant</h5>
            </div>
            <div className={styles.Text23}>
              <h5>gmail.com</h5>
              <h5>00999999999</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Introduction;
