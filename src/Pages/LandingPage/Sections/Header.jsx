import React from "react";
import styles from "./Header.module.css";
import SearchIcon from "@mui/icons-material/Search";
const HeaderComponent = () => {
  return (
    <>
      <div className={styles.headerContainer}>
        <div className={styles.headingSearchWrapper}>
          <div className={styles.headingContainer}>
            <h1>Buy Your Favourite Books. </h1>
            <h2>Grab Your First Copy Today</h2>
          </div>
          <div className={styles.searchdiv}>
            <div className={styles.paddingControl}>
              <form
                className={styles.searchForm}
                role="search"
                spellcheck="false"
              >
                <label className={styles.searchLabel} for="search"></label>
                <input
                  className={styles.searchInput}
                  id="search"
                  type="search"
                  placeholder="Search..."
                  autofocus
                  required
                />
                <button className={styles.searchButton} type="submit">
                  <SearchIcon className={styles.icon} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeaderComponent;
