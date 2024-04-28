/** @format */
import styles from "../../styles/HeaderStyles.module.css";
import PropTypes from "prop-types";
export default function Header({ children }) {
  return <nav className={styles.Header}>{children}</nav>;
}

Header.propTypes = {
  children: PropTypes.any.isRequired,
};
