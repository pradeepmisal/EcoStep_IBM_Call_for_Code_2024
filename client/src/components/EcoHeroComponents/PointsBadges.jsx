import React from "react";
import styles from "./PointsBadges.module.css";

const badges = [
  "https://cdn.builder.io/api/v1/image/assets/TEMP/46c77ed3edcdae85b7ead8b64275d94c1a0b6b2b44f3e26fe177cc6b52deee8f?placeholderIfAbsent=true&apiKey=bef3b09fbe8c4f3dba8952f0f78e8aec",
  "https://cdn.builder.io/api/v1/image/assets/TEMP/dca6e13b9b6a3146dac8986cd5e71233231e90b1e3aaf70d8bc5055afdcdab31?placeholderIfAbsent=true&apiKey=bef3b09fbe8c4f3dba8952f0f78e8aec",
  "https://cdn.builder.io/api/v1/image/assets/TEMP/14820bf0f450d78369ebdc420694865e07cb288dfbf423627f296ce9fad3fd85?placeholderIfAbsent=true&apiKey=bef3b09fbe8c4f3dba8952f0f78e8aec",
  "https://cdn.builder.io/api/v1/image/assets/TEMP/01818ffa754895701cbf1179bc3b28351239e224e52eefdf4bbef2dffabc36d2?placeholderIfAbsent=true&apiKey=bef3b09fbe8c4f3dba8952f0f78e8aec",
];

function PointsBadges() {
  return (
    <section className={styles.pointsBadges}>
      <h2 className={styles.sectionTitle}>Points and badges</h2>
      <div className={styles.badgeContainer}>
        {badges.map((badge, index) => (
          <img
            key={index}
            src={badge}
            alt={`Achievement badge ${index + 1}`}
            className={styles.badge}
          />
        ))}
      </div>
    </section>
  );
}

export default PointsBadges;
