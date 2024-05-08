/** @format */

import FloatingWindow from "./FloatingWindow";
import styles from "../../styles/DialogBox.module.css";

export default function DialogBox({
  yesLabel = "Yes",
  noLabel = "No",
  yesColor = "var(--first-color)",
  noColor = "var(--third-color)",
  handleYes,
  handleNo,
  previousRoute,
  children,
}) {
  return (
    <FloatingWindow className={styles.window} previousRoute={previousRoute}>
      {children}
      <div className={styles.btnsCtn}>
        <button
          className={`${styles.yesBtn} btn`}
          style={{ backgroundColor: yesColor }}
          onClick={handleYes}
        >
          {yesLabel}
        </button>
        <button
          className={`${styles.noBtn} btn`}
          style={{ backgroundColor: noColor }}
          onClick={handleNo}
        >
          {noLabel}
        </button>
      </div>
    </FloatingWindow>
  );
}
