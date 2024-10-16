import React from "react";
import Sidebar from "./Sidebar";
import MainContent from "./MainContent";
import styles from "./EcoHeroLayout.module.css";

function EcoHeroLayout() {
  return (
    <div className={styles.ecoHeroLayout}>
      <Sidebar />
      <MainContent />
    </div>
  );
}

export default EcoHeroLayout;
