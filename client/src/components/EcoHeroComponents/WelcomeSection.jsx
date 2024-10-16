import React from "react";
import styles from "./WelcomeSection.module.css";

function WelcomeSection() {
  return (
    <section className={styles.welcomeSection}>
      <h1 className={styles.welcomeHeading}>Welcome, Sarah!</h1>
      <div className={styles.impactInfo}>
        <p className={styles.impactText}>You've saved 4.5 tons of CO2</p>
        <p className={styles.pointsText}>1,320 pts</p>
      </div>
      <div className={styles.progressBar}>
        <div className={styles.progressFill} style={{ width: "75%" }} />
      </div>
      <p className={styles.levelUpText}>1.5 tons more to level up</p>
    </section>
  );
}

export default WelcomeSection;
