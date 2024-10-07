"use client"
import React, { useEffect } from "react";
import styles from "@/assets/styles/LandingPage.module.scss";
import Introduction from "@/components/Introduction";
import Welcome from "@/components/Welcome";

import 'aos/dist/aos.css';
import ImageAnimation from "@/components/ImageAnimation";
import HowItWork from "@/components/HowItWork";
import Achievements from "@/components/Achievements";
import CLientReviews from "@/components/clientReviews";
import Purpose from "@/components/Purpose";
import BssTasks from "@/components/businessTasks";
import FromTBlog from "@/components/FromTBlog";
import TFooter from "@/components/Footer";

const LandingPage = () => {
 

  return (
    <div className={styles.HomePage}>
      <div >
        <Introduction />
      </div>
      <div >
        <Welcome />
      </div>
      <div>
        <ImageAnimation/>
      </div>
      <div>
        <HowItWork/>
      </div>
      <div>
        <Achievements/>
      </div>
      <div>
        <CLientReviews/>
      </div>
      <div>
        <Purpose/>
      </div>
      <div>
        <BssTasks/>
      </div>
      <div>
        <FromTBlog/>
      </div>
      <TFooter/>
    </div>
  );
};

export default LandingPage;
