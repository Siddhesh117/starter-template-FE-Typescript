/* This dashboard currently use in /Home route*/

import styles from "./index.module.css";

const ATRSDashboard = () => {
  return (
    <div className={styles["dashboard-container"]}>
      <div className={styles["title-container"]}>
        <div className={styles["dashboard-title"]}>Dashboard</div>
      </div>
    </div>
  );
};

export default ATRSDashboard;
