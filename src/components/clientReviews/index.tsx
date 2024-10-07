import React from "react";
import styles from "@/assets/styles/clientReview.module.scss";
const CLientReviews = () => {
  return (
    <div className={styles.container}>
      <h1> Client Reviews</h1>
      <div className={styles.content}>
        <div className={styles.text}>
          <span className={styles.dco}>&#8220;</span>
          <div className={styles.check}>
            <p>
              {" "}
               Working with Christine is fun, easy and safe. I could rely on her
              completely, and she would prove her professionalism over and over
              again. Highly recommend the services to all.
            </p>
            <div className={styles.text1}>
              <h2>Mark Wilson</h2>
              <div className={styles.decoration}>
                {" "}
                <span> &#8211;</span>
                <h3>Administrator</h3>{" "}
              </div>
            </div>
          </div>
        </div>
        <div className={styles.text}>
          <span className={styles.dco}>&#8220;</span>
         <div className={styles.check}>
         <p>
            {" "}
            I am so grateful for your amazing job! Really, if it wasn’t for
            Christine, I would have been in a constant struggle with all the
            daily tasks. Thank you, you are the best!
          </p>
          <div className={styles.text1}>
            <h2> Amy Watkins</h2>
            <div className={styles.decoration}>
              {" "}
              <span> &#8211;</span> <h3>Accountant</h3>
            </div>
          </div>
         </div>
        </div>
      </div>
    </div>
  );
};
export default CLientReviews;
