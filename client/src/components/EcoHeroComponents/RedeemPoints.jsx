import React from "react";
import styles from "./RedeemPoints.module.css";

const redeemOptions = [
  { brand: "Patagonia", discount: "$5 off", points: 150 },
  { brand: "Allbirds", discount: "$10 off", points: 300 },
  { brand: "Reformation", discount: "$20 off", points: 600 },
  { brand: "Thrive Market", discount: "$15 off", points: 450 },
  { brand: "Public Goods", discount: "$10 off", points: 300 },
  { brand: "Package Free", discount: "$5 off", points: 150 },
];

function RedeemPoints() {
  return (
    <section className={styles.redeemPoints}>
      <h2 className={styles.sectionTitle}>
        Redeem points for sustainable brands
      </h2>
      <div className={styles.redeemGrid}>
        {redeemOptions.map((option, index) => (
          <div key={index} className={styles.redeemCard}>
            <h3 className={styles.brandName}>
              {option.discount} at {option.brand}
            </h3>
            <p className={styles.pointsRequired}>{option.points} pts</p>
            <button className={styles.redeemButton}>Redeem</button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default RedeemPoints;
