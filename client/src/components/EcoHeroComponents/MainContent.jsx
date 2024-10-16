import React from "react";
import WelcomeSection from "./WelcomeSection";
import ImpactMap from "./ImpactMap";
import Sidebar from "./Sidebar";
import Leaderboard from "./Leaderboard";
import PointsBadges from "./PointsBadges";
import RedeemPoints from "./RedeemPoints";
import styles from "./MainContent.module.css";

function MainContent() {
  return (
    <main className={styles.mainContent}>
      <Sidebar />
      <div>
        <WelcomeSection />
        {/* <ImpactMap /> */}
        <Leaderboard />
        <PointsBadges />
        <RedeemPoints />
      </div>
    </main>
  );
}

export default MainContent;
