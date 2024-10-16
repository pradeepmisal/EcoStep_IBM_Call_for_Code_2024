import React from "react";
import styles from "./ImpactMap.module.css";

function ImpactMap() {
  return (
    <section className={styles.impactMap}>
      <h2 className={styles.sectionTitle}>Your impact on the map</h2>
      <div className={styles.mapContainer}>
        {/* Map component would go here */}
      </div>
    </section>
  );
}

export default ImpactMap;
