/** @format */
import { useEffect, useRef } from "react";
import styles from "../../styles/MenuList.module.css";
export function MenuList({ children, clientX, clientY }) {
  const localStyles = {
    position: "fixed",
    top: `${clientY}px`,
    left: `${clientX}px`,
  };
  return (
    <ul className={styles.menuContainer} style={localStyles}>
      {children}
    </ul>
  );
}
