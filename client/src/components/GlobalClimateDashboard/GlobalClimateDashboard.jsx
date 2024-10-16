import React from "react";
import styles from "./GlobalClimateDashboard.module.css";
import SearchBar from "./SearchBar";
import DataCard from "./DataCard";
import LocalResource from "./LocalResource";
import CommunityChallenge from "./CommunityChallenge";

function GlobalClimateDashboard() {
  const localResources = [
    {
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/0d04555d4ebc6dc812abef2408dec7a0b54554c6ede4bc052df16db4b4c71368?placeholderIfAbsent=true&apiKey=bef3b09fbe8c4f3dba8952f0f78e8aec",
      title: "Community garden",
    },
    {
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/6c04d404c4101414d84d57fd0e810feba6a92f9f908049075c9bcea036837ecc?placeholderIfAbsent=true&apiKey=bef3b09fbe8c4f3dba8952f0f78e8aec",
      title: "E-bike share",
    },
    {
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/ed1d48168db3f00a54f45ff1f6e78736955b94652b62c28f9da59e0f0411936f?placeholderIfAbsent=true&apiKey=bef3b09fbe8c4f3dba8952f0f78e8aec",
      title: "Public transit",
    },
    {
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/0f05df160feddae8eee9d4efb36296823c3bb7c68b60119bd825aa3b378f523d?placeholderIfAbsent=true&apiKey=bef3b09fbe8c4f3dba8952f0f78e8aec",
      title: "Farmers market",
    },
    {
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/799302be3b44e1dbb6d1c058dd88f338498f299afcb91f235f2ad7d4dc0e7319?placeholderIfAbsent=true&apiKey=bef3b09fbe8c4f3dba8952f0f78e8aec",
      title: "Energy co-op",
    },
    {
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/b45be9b47d7ca036be2c6329f5e40234419fa73f971485d260d731c07aea9b72?placeholderIfAbsent=true&apiKey=bef3b09fbe8c4f3dba8952f0f78e8aec",
      title: "Compost drop-off",
    },
  ];

  const communityChallengess = [
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/c9a6acc4356b6392c773cdccb3c04fa2efced066210e60eaea2b8fdc8a9cf0ab?placeholderIfAbsent=true&apiKey=bef3b09fbe8c4f3dba8952f0f78e8aec",
      title: "Lack of public transit options in downtown",
      date: "Feb 25, 2023",
      author: "Jane Doe",
      votes: 3,
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/0b5df4eb59d6335fc3a5044415810af1163e7052c4526417c6c9338e7462c7b7?placeholderIfAbsent=true&apiKey=bef3b09fbe8c4f3dba8952f0f78e8aec",
      title: "No recycling pickup for apartment buildings",
      date: "Feb 25, 2023",
      author: "John Smith",
      votes: 5,
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/185d03d22f9e57bca9826fb1c4b75d56826b648fc2c5a3524c0816396eb9f27d?placeholderIfAbsent=true&apiKey=bef3b09fbe8c4f3dba8952f0f78e8aec",
      title: "Limited access to affordable locally grown food",
      date: "Feb 25, 2023",
      author: "Maria Garcia",
      votes: 2,
    },
  ];

  return (
    <main className={styles.dashboard}>
      <header className={styles.header}>
        <h1 className={styles.title}>Global Climate Change Dashboard</h1>
      </header>
      <SearchBar />
      <section className={styles.dataSection}>
        <h2 className={styles.sectionTitle}>
          Real-time air quality and carbon emissions data
        </h2>
        <div className={styles.dataCards}>
          <DataCard
            title="Air quality index"
            icon="https://cdn.builder.io/api/v1/image/assets/TEMP/6ea979766d4b75b639cc106ee560c0eecbbd7e0083b5243ed2e5bfecb1c3126c?placeholderIfAbsent=true&apiKey=bef3b09fbe8c4f3dba8952f0f78e8aec"
          />
          <DataCard
            title="Carbon emissions"
            icon="https://cdn.builder.io/api/v1/image/assets/TEMP/b9482c027ef8b47823b8f7ffbb77f6acf378609d85b6ac40b7c803c088891726?placeholderIfAbsent=true&apiKey=bef3b09fbe8c4f3dba8952f0f78e8aec"
          />
          <DataCard
            title="Methane emissions"
            icon="https://cdn.builder.io/api/v1/image/assets/TEMP/cbd42d2890fcb0f4048b350b9e96a2d927ef327a334cbd62861ea7fa86765963?placeholderIfAbsent=true&apiKey=bef3b09fbe8c4f3dba8952f0f78e8aec"
          />
        </div>
        <div className={styles.chartContainer}>
          <h3 className={styles.chartTitle}>Air Quality Index (AQI)</h3>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/e1b159e39851a4ab887d429aa0a54f3ad967e96d0d42b594929834da07bd6f8b?placeholderIfAbsent=true&apiKey=bef3b09fbe8c4f3dba8952f0f78e8aec"
            alt="Air Quality Index chart"
            className={styles.chart}
          />
          <div className={styles.chartLabels}>
            <span>Jan 1</span>
            <span>Jan 8</span>
            <span>Jan 15</span>
            <span>Jan 22</span>
            <span>Jan 29</span>
            <span>Feb 5</span>
            <span>Feb 12</span>
          </div>
        </div>
      </section>
      <section className={styles.resourcesSection}>
        <h2 className={styles.sectionTitle}>Local resources</h2>
        <div className={styles.resourceGrid}>
          {localResources.map((resource, index) => (
            <LocalResource
              key={index}
              image={resource.image}
              title={resource.title}
            />
          ))}
        </div>
      </section>
      <section className={styles.challengeSection}>
        <h2 className={styles.sectionTitle}>Community challenges</h2>
        {communityChallengess.map((challenge, index) => (
          <CommunityChallenge
            key={index}
            icon={challenge.icon}
            title={challenge.title}
            date={challenge.date}
            author={challenge.author}
            votes={challenge.votes}
          />
        ))}
      </section>
    </main>
  );
}

export default GlobalClimateDashboard;
