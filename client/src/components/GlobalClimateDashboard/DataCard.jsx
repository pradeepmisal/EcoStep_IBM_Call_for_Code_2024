import React from "react";
import styles from "./GlobalClimateDashboard.module.css";

function DataCard({ title, icon }) {
  return (
    <div className={styles.dataCard}>
      <span className={styles.dataCardTitle}>{title}</span>
      <img src={icon} alt="" className={styles.dataCardIcon} />
    </div>
  );
}

export default DataCard;
