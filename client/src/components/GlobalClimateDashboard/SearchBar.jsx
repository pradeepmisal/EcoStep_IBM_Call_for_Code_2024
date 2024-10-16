import React from "react";
import styles from "./GlobalClimateDashboard.module.css";

function SearchBar() {
  return (
    <div className={styles.searchContainer}>
      <form className={styles.searchForm} role="search">
        <label htmlFor="locationSearch" className="visually-hidden">
          Search for a location
        </label>
        <div className={styles.searchInputWrapper}>
          <div className={styles.searchIcon}>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/3f8581cca7be0bd5bfca0d5de2dd910572c48e885548fa1661fd485fd08979ce?placeholderIfAbsent=true&apiKey=bef3b09fbe8c4f3dba8952f0f78e8aec"
              alt=""
              className={styles.icon}
            />
          </div>
          <input
            type="search"
            id="locationSearch"
            className={styles.searchInput}
            placeholder="Search for a location"
          />
        </div>
      </form>
      <div className={styles.searchControls}>
        <button className={styles.controlButton} aria-label="Filter">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/a8d3bbd502e4ea874c67d849ca9b93d696b4e8c8e0f3987e681c7ba04acb42dc?placeholderIfAbsent=true&apiKey=bef3b09fbe8c4f3dba8952f0f78e8aec"
            alt=""
            className={styles.controlIcon}
          />
        </button>
        <button className={styles.controlButton} aria-label="Sort">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/7d01a5e140440b7223a9ed4197ffbc9f69f36e7c01e4ceead58a64a2daf8078a?placeholderIfAbsent=true&apiKey=bef3b09fbe8c4f3dba8952f0f78e8aec"
            alt=""
            className={styles.controlIcon}
          />
        </button>
        <button className={styles.controlButton} aria-label="Settings">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/8a6062a2d7d8b2252207ed748cbc377ec3275c80e5e9009e1db9dad5e24bbe30?placeholderIfAbsent=true&apiKey=bef3b09fbe8c4f3dba8952f0f78e8aec"
            alt=""
            className={styles.controlIcon}
          />
        </button>
      </div>
    </div>
  );
}

export default SearchBar;
