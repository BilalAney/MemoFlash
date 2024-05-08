/** @format */
import styles from "../../styles/Sidebar.module.css";
import Avatar from "../MinorComponents/Avatar";
import AvatarIcon from "../../assets/interface_icons/Account_default_avater.svg";
import FolderIcon_close from "../../assets/interface_icons/folder_closed.svg";
import FolderIcon_open from "../../assets/interface_icons/folder_open.svg";
import Spinner from "../MinorComponents/Spinner";
import { useEffect, useRef, useState } from "react";
import BurgerMenu from "./BurgerMenu";
import { Link, Outlet } from "react-router-dom";
import { MenuList } from "../MinorComponents/MenuList";
// import { Children } from "react";
export function Sidebar({ children }) {
  return <section className={styles.Sidebar}>{children}</section>;
}

export function SidebarControlBar({ closeSidebar }) {
  return (
    <div className={styles.controlbar}>
      <button onClick={() => closeSidebar((pre) => !pre)}> SIDEBAR </button>
    </div>
  );
}

export function SidebarInfoBox({ totalCollections, totalCards }) {
  return (
    <div className={styles.infoBox}>
      <div className={styles.avatarContainer}>
        <Avatar image={AvatarIcon} height="50px" width="50px" />
      </div>
      <div className={styles.infoContainer}>
        <p>Name: SOMENAME GOES HERE</p>
        <p>Number of collections: {totalCollections}</p>
        <p>Number of cards: {totalCards}</p>
        <Link to="NewCollection">
          <button>ADD A NEW COLLECTION</button>
        </Link>
        <Outlet />
      </div>
    </div>
  );
}

export function SidebarCollectionMenu({
  collections,
  status,
  dispatch,
  selectedId,
}) {
  const [menuOpenIn, setMenuOpenIn] = useState("");
  useEffect(() => {
    const handler = () => setMenuOpenIn("");
    document.addEventListener("keydown", handler);
    document.addEventListener("click", handler);
    return () => {
      document.removeEventListener("keydown", handler);
      document.removeEventListener("click", handler);
    };
  }, []);

  const collectionItemElements = collections.map((ele) => (
    <SidebarCollectionItem
      label={ele.name}
      numberOfCards={ele.cards.length}
      handleSelect={() =>
        dispatch({ type: "collection_selected", payload: ele })
      }
      isSelected={selectedId === ele.id}
      key={ele.id}
      isMenuOpen={ele.id === menuOpenIn}
      handleRightClick={() =>
        setMenuOpenIn((pre) => (pre === ele.id ? "" : ele.id))
      }
    />
  ));

  return (
    <div className={styles.collectionsContainer}>
      {status === "loading" ? (
        <Spinner />
      ) : status.slice(" ").includes("ERROR") ? (
        <p>❌ Error, Try again</p>
      ) : (
        collectionItemElements
      )}
    </div>
  );
}

export function SidebarCollectionItem({
  label,
  numberOfCards,
  handleSelect,
  handleRightClick,
  handleChangeName,
  handleDelete,
  isSelected,
  isMenuOpen,
}) {
  const cursorPosition = useRef({ mouseX: 0, mouseY: 0 });

  const getPositionHandler = (e) => {
    cursorPosition.current.mouseX = e.clientX;
    cursorPosition.current.mouseY = e.clientY;
    console.log(cursorPosition.current.mouseX, cursorPosition.current.mouseY);
  };

  return (
    <>
      <button
        className={styles.collectionItemContainer}
        onClick={handleSelect}
        onContextMenu={(e) => {
          e.preventDefault();
          handleRightClick();
          document.removeEventListener("mousemove", getPositionHandler);
        }}
        onMouseEnter={() =>
          document.addEventListener("mousemove", getPositionHandler)
        }
        onMouseLeave={() =>
          document.removeEventListener("mousemove", getPositionHandler)
        }
      >
        <img src={isSelected ? FolderIcon_open : FolderIcon_close} />
        <div className={styles.collectionInfo}>
          <p className="lvlTwoText">{label}</p>
          <p className="lvlThreeText">Total cards: {numberOfCards}</p>
        </div>
      </button>
      {isMenuOpen && (
        <MenuList
          clientX={cursorPosition.current.mouseX}
          clientY={cursorPosition.current.mouseY}
        >
          <li>✏️ Rename</li>
          <li>📄 Dublicate</li>
          <li>🗑️ Delete</li>
        </MenuList>
      )}
    </>
  );
}
