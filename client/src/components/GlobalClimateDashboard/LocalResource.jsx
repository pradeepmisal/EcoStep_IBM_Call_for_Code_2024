import React from "react";
import styles from "./GlobalClimateDashboard.module.css";

function LocalResource({ image, title }) {
  return (
    <div className={styles.resourceCard}>
      <img src={image} alt={title} className={styles.resourceImage} />
      <h3 className={styles.resourceTitle}>{title}</h3>
    </div>
  );
}

export default LocalResource;
