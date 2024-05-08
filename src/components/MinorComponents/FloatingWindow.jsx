/** @format */

import Overlay from "./Overlay";
import styles from "../../styles/FloatingWindow.module.css";

export default function FloatingWindow({ children, previousRoute, className }) {
  return (
    <>
      <Overlay previousRoute={previousRoute} />
      <div className={`${styles.window} ${className}`}>{children}</div>
    </>
  );
}
