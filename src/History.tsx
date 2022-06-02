import styles from "./history.module.css";
import { HistoryTable } from "./HistoryTable";

export const History = () => {
  return (
    <div className={styles.historyAreaContainer}>
      <p className={styles.historyTitle}>Games History</p>
      <HistoryTable />
    </div>
  );
};
