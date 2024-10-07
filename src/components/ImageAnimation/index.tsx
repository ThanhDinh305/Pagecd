import React from "react";
import styles from "@/assets/styles/ImageAnimation.module.scss";
import Briefcase from "../icon/briefcase";
import VTdesign from "../icon/design";
const ImageAnimation = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content1}>
        <div className={styles.content11}>
          <div className={styles.text}>
            <div className={styles.test}>
              Website <span>Administration</span>
            </div>
            <p>Discover</p>
          </div>
          <div className={styles.IMG}>
            
            <img src="/image/service.jpg" alt="" />
          </div>
        </div>
        <div className={styles.content12}>
        <div className={styles.decoration}></div>
          <div className={styles.text}>
            <VTdesign/>
            <h2>
              Personal <span>Errand Service</span>
            </h2>
            <p>Discover</p>
          </div>
          <div className={styles.IMG1}>
            {" "}
            <img src="/image/ImageA.jpg" alt="" />
          </div>
        </div>
      </div>  
      <div className={styles.content2}>
        <div className={styles.content21}>
          <div className={styles.text}>
          <Briefcase/>
            <h2>
              Business <span>Assitance</span>
            </h2>
            <p>Discover</p>
          </div>
          <div className={styles.IMG1}>
            {" "}
            <img src="/image/ImageB.jpg" alt="" />
          </div>
        </div>
        <div className={styles.content22}>
          <div className={styles.text1}>
            <h2>
              Pay <span>Bill</span>
            </h2>
            <p>Discover</p>
          </div>
          <div className={styles.IMG}>
            {" "}
            <img src="/image/ImageC.jpg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default ImageAnimation;
