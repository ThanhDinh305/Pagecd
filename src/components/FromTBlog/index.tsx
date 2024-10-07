import React from "react";
import styles from "@/assets/styles/FromTBlog.module.scss";

const FromTBlog = () => {
  return (
    <div className={styles.container}>
      <div className={styles.Tiltle}>From The Blog</div>
      <div className={styles.Fcontent}>

      <div className={styles.content}>
        <div className={styles.TName}>
          <span>01</span>
          <h2>How to Declutter and Simplify</h2>
        </div>
        <div className={styles.Text}>
          Quuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque
          porro quisquam est, qui dolorem ipsum
        </div>
        <div className={styles.Day}>March 14,2017</div>
        <div className={styles.decoration}></div>
      </div>


      <div className={styles.content}>
        <div className={styles.TName}>
          <span>02</span>
          <h2>How to Declutter and Simplify</h2>
        </div>
        <div className={styles.Text}>
          Quuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque
          porro quisquam est, qui dolorem ipsum
        </div>
        <div className={styles.Day}>March 14,2017</div>
        <div className={styles.decoration}></div>
      </div>



      <div className={styles.content}>
        <div className={styles.TName}>
          <span>03</span>
          <h2>How to Declutter and Simplify</h2>
        </div>
        <div className={styles.Text}>
          Quuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque
          porro quisquam est, qui dolorem ipsum
        </div>
        <div className={styles.Day}>March 14,2017</div>
        <div className={styles.decoration}> </div>
      </div>


      </div>


    </div>
  );
};
export default FromTBlog;
