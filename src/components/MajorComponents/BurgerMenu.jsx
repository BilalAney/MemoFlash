/** @format */
import { useEffect, useState } from "react";
// import lightModeMenuIcon from "../../assets/interface_icons/burger_menu_black.svg";
import darkModeMenuIcon from "../../assets/interface_icons/burger_menu_white.svg";
import darkModeAccountIcon from "../../assets/interface_icons/account_white.svg";
// import lightModeAcountIcon from "../../assets/interface_icons/account_black.svg";
import PropTypes from "prop-types";
import styles from "../../styles/BurgerMenu.module.css";

const optionsArray = [
  {
    id: 0,
    label: "Account",
    icon: darkModeAccountIcon,
  },
  {
    id: 1,
    label: "Dark Mode",
    icon: darkModeAccountIcon,
  },
  {
    id: 2,
    label: "Sign out",
    icon: darkModeAccountIcon,
  },
  {
    id: 3,
    label: "About Us",
    icon: darkModeAccountIcon,
  },
];

export default function BurgerMenu({ darkMode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div
      className={styles.burgerMenuContainer + " ctn"}
      onClick={() => setIsMenuOpen((pre) => !pre)}
    >
      {darkMode ? (
        <img src={darkModeMenuIcon} />
      ) : (
        <img src={darkModeMenuIcon} />
      )}
      {isMenuOpen && (
        <Menu options={optionsArray} closeSelf={() => setIsMenuOpen(false)} />
      )}
    </div>
  );
}

function Menu({ options, closeSelf }) {
  useEffect(() => {
    function callback(event) {
      if (event?.code === "Escape") closeSelf();
      if (
        event.type === "click" &&
        event.target.className !== "ctn" &&
        event.target.tagName !== "IMG"
      )
        closeSelf();
    }
    document.addEventListener("keydown", callback);
    document.addEventListener("click", callback);
    return () => {
      document.removeEventListener("keydown", callback);
      document.removeEventListener("click", callback);
    };
  }, [closeSelf]);

  const optionItems = options.map((ele) => (
    <MenuItem
      icon={ele.icon}
      label={ele.label}
      subtitle={ele.subtitle}
      key={ele.id}
    />
  ));
  return <ul className={styles.BurgerMenuList}>{optionItems}</ul>;
}

function MenuItem({ icon, label, subtitle }) {
  return (
    <li>
      <img src={icon} />
      <div>
        <span>{label}</span>
        <span>{subtitle}</span>
      </div>
    </li>
  );
}

BurgerMenu.propTypes = {
  darkMode: PropTypes.bool.isRequired,
};

Menu.propTypes = {
  options: PropTypes.array.isRequired,
  closeSelf: PropTypes.func.isRequired,
};

MenuItem.propTypes = {
  icon: PropTypes.any.isRequired,
  label: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
};
