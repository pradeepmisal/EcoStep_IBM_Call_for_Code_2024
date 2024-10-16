import React from "react";
import styles from "./Sidebar.module.css";

const menuItems = [
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/c1a7961b7aa947caf0008e14ce7229330a15d03cd7239755432cdbd0fcfb0e0d?placeholderIfAbsent=true&apiKey=bef3b09fbe8c4f3dba8952f0f78e8aec",
    label: "Home",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/8674ed736de27a8905f4ac235880b6534e0d2fa41bd518b83b6465292c91baf4?placeholderIfAbsent=true&apiKey=bef3b09fbe8c4f3dba8952f0f78e8aec",
    label: "Leaderboard",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/d82897fb3573fa5e5f5d24190e3935b45235f4530476c5ebb07c220c799d9f30?placeholderIfAbsent=true&apiKey=bef3b09fbe8c4f3dba8952f0f78e8aec",
    label: "Shop",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/edf9febc03e711a0a09f7b195619d90bd57e7fe4385b88151beb88257a84cc59?placeholderIfAbsent=true&apiKey=bef3b09fbe8c4f3dba8952f0f78e8aec",
    label: "Community",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/0d924489c82f9a470cec5123a4880aab05b1a2010e1fe213442adf4a98c86d93?placeholderIfAbsent=true&apiKey=bef3b09fbe8c4f3dba8952f0f78e8aec",
    label: "Reports",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/487ce2051cca4c61337126f620c7fd886c512134fda9a5a89f4ba901541b3a20?placeholderIfAbsent=true&apiKey=bef3b09fbe8c4f3dba8952f0f78e8aec",
    label: "Settings",
  },
];

function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.userInfo}>
        <h2 className={styles.userName}>EcoHero</h2>
        <p className={styles.userLevel}>Level 2 · 1,320 pts</p>
      </div>
      <nav className={styles.sidebarNav}>
        {menuItems.map((item, index) => (
          <a key={index} href="#" className={styles.navItem}>
            <img src={item.icon} alt="" className={styles.navIcon} />
            <span>{item.label}</span>
          </a>
        ))}
      </nav>
    </aside>
  );
}

export default Sidebar;
