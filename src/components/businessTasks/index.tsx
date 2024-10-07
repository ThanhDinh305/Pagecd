import React from "react";
import styles from "@/assets/styles/bussTask.module.scss";

const BssTasks = () => {
  return (
    <div className={styles.container}>
      <div className={styles.IMG}>
        <img src="/Image/img_serv.jpg" alt="" />
      </div>
      <div className={styles.content}>
        <div className={styles.CT1}>Business Task</div>
        <div className={styles.CT2}>I’ll Help Your Businesses Grow!</div>
        <div className={styles.CT3}>
          A personal assistant helps with time and daily management, scheduling
          of meetings, correspondence, and note taking. The role of a personal
          assistant can be varied, such as answering phone calls, scheduling
          meetings, emailing, texts etc.
        </div>
        <div>
            
        </div>
      </div>
    </div>
  );
};
export default BssTasks;
