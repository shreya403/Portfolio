import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Shreya Singh</h1>
        <p className={styles.description}>
          I'm a front-end developer with 1 year of experience using React and
          NodeJS. Reach out if you'd like to learn more!
        </p>
        <a href="https://github.com/shreya403" className={styles.contactBtn}>
          Check out my github!
        </a>
      </div>
      <img
        src={getImageUrl("hero/pic.jpeg")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
