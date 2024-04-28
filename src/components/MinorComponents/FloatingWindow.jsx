/** @format */

import Overlay from "./Overlay";
import styles from "../../styles/FloatingWindow.module.css";

export default function FloatingWindow({ children, previousRoute }) {
  return (
    <>
      <Overlay previousRoute={previousRoute} />
      <div className={styles.window}>{children}</div>
    </>
  );
}
