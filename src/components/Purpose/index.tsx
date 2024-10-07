import React from "react";
import styles from "@/assets/styles/Purpose.module.scss";
import SVMobile from "../icon/mobileSV";
import SVGcheck from "../check";
const Purpose = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content1}>
        <div className={styles.IMG}>
          <img src="/Image/post-9.jpg" alt="" />
        </div>
        <div className={styles.text}>
          <h1>The Main Features</h1>
          <div className={styles.techeck}>
            <div className={styles.test}>
             <div className={styles.SVG}> <SVMobile /></div>
              <div className={styles.txcontnt}>
                <h2>Secure Support</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do
                </p>
              </div>
            </div>
            <div className={styles.test}>
             <div className={styles.SVG}> <SVMobile /></div>
              <div className={styles.txcontnt}>
                <h2>Secure Support</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.content2}>
      <div className={styles.text}>
            <h1>Get Your Time Back</h1>
            <div className={styles.ctext}>
              <p>  <span><SVGcheck/></span> There is no limit on how much you dedicate.</p>
              <p>  <span><SVGcheck/></span> There is no limit on how much you dedicate.</p>
              <p>  <span><SVGcheck/></span> There is no limit on how much you dedicate.</p>
            </div>
        </div>
        <div className={styles.IMG}>
          <img src="/Image/img_column2.jpg" alt="" />
        </div>
       
      </div>
    </div>
  );
};
export default Purpose;
