import React from "react";
import styles from "./GlobalClimateDashboard.module.css";

function CommunityChallenge({ icon, title, date, author, votes }) {
  return (
    <div className={styles.challengeCard}>
      <div className={styles.challengeIcon}>
        <img src={icon} alt="" className={styles.icon} />
      </div>
      <div className={styles.challengeInfo}>
        <h3 className={styles.challengeTitle}>{title}</h3>
        <p className={styles.challengeMeta}>Submitted on {date}</p>
        <p className={styles.challengeMeta}>Submitted by {author}</p>
      </div>
      <div className={styles.challengeVotes}>{votes} votes</div>
    </div>
  );
}

export default CommunityChallenge;
