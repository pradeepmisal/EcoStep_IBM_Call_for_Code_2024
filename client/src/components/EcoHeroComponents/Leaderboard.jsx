import React from "react";
import styles from "./Leaderboard.module.css";

const leaderboardData = [
  {
    avatar:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/5be5b80924142ed71090054d1682c70a7a59ad1769cac77135fb05c7fa99a11b?placeholderIfAbsent=true&apiKey=bef3b09fbe8c4f3dba8952f0f78e8aec",
    name: "Chris",
    level: 3,
    points: 1450,
  },
  {
    avatar:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/4579d939b17125973798703bb0b6d56a1dce3bb728eb3ea1389bf9eea554bab1?placeholderIfAbsent=true&apiKey=bef3b09fbe8c4f3dba8952f0f78e8aec",
    name: "Chris",
    level: 3,
    points: 1450,
  },
  {
    avatar:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/261676bcf713466d1c091c9c61a025151f7009dce4d6f1373325fceab7be904b?placeholderIfAbsent=true&apiKey=bef3b09fbe8c4f3dba8952f0f78e8aec",
    name: "Chris",
    level: 3,
    points: 1450,
  },
  {
    avatar:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/235768bb8efe11964a2068c9a75dec3f4ea98a1f5edcd04190155af7cfb47e85?placeholderIfAbsent=true&apiKey=bef3b09fbe8c4f3dba8952f0f78e8aec",
    name: "Chris",
    level: 3,
    points: 1450,
  },
  {
    avatar:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/4db1a3fb650dc4770f2dff66aa45f7eecafe73b586916d0525ab18c181f523e8?placeholderIfAbsent=true&apiKey=bef3b09fbe8c4f3dba8952f0f78e8aec",
    name: "Chris",
    level: 3,
    points: 1450,
  },
];

function Leaderboard() {
  return (
    <section className={styles.leaderboard}>
      <h2 className={styles.sectionTitle}>Leaderboard</h2>
      <ul className={styles.leaderList}>
        {leaderboardData.map((user, index) => (
          <li key={index} className={styles.leaderItem}>
            <img
              src={user.avatar}
              alt={`${user.name}'s avatar`}
              className={styles.avatar}
            />
            <div className={styles.userInfo}>
              <p className={styles.userName}>{user.name}</p>
              <p className={styles.userStats}>
                Level {user.level} · {user.points} pts
              </p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Leaderboard;
