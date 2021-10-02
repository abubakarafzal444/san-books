import React from "react";
import styles from "./Banner.module.css";
const Banner = () => {
  return (
    <div className={styles.banner}>
      <div className={styles.bannerLayout1}>
        <h1 className={styles.bannerHeading}>Signup for our Newsletter</h1>
        <p>Tell us what books you love.</p>
      </div>
      <div className={styles.bannerLayout2}>
        <button className={styles.signupButton}>Sign Up</button>
      </div>
    </div>
  );
};

export default Banner;
