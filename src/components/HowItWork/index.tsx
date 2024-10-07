import React from "react";
import styles from "@/assets/styles/HowItWork.module.scss";
import IconClock from "../icon/Clock";

const HowItWork = () => {
  return (
    <div className={styles.container}>
      <h1>How It Works</h1>

      <div className={styles.content}>
        <div className={styles.content1}>
          <div className={styles.dark}>
          </div>
            <h3>01</h3>
            <div className={styles.content2}>
              <h2>Handing The Task</h2>
              <div className={styles.icon}>
                <IconClock />
              </div>
              <div className={styles.text}>
                lorem ipsum dolor sit amet,consectetur adipiasicing elit,sed do
                eiusmodtempor incidiunt ut labore et dolore magna
              </div>
              <div className={styles.decoration}></div>{" "}
           
          </div>
        </div>
        <div className={styles.content1}>
          <h3>02</h3>
          <div className={styles.content2}>
            <h2>Handing The Task</h2>
            <div className={styles.icon}>
              <IconClock />
            </div>
            <div className={styles.text}>
              lorem ipsum dolor sit amet,consectetur adipiasicing elit,sed do
              eiusmodtempor incidiunt ut labore et dolore magna
            </div>
            <div className={styles.decoration}> </div>{" "}
          </div>
        </div>
        <div className={styles.content1}>
          <h3>03</h3>
          <div className={styles.content2}>
            <h2>Handing The Task</h2>

            <div className={styles.icon}>
              <IconClock />
            </div>
            <div className={styles.text}>
              lorem ipsum dolor sit amet,consectetur adipiasicing elit,sed do
              eiusmodtempor incidiunt ut labore et dolore magna
            </div>

            <div className={styles.decoration}> </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HowItWork;
