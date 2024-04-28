/** @format */
import styles from "../../styles/Sidebar.module.css";
import Avatar from "../MinorComponents/Avatar";
import AvatarIcon from "../../assets/interface_icons/Account_default_avater.svg";
import FolderIcon_close from "../../assets/interface_icons/folder_closed.svg";
import FolderIcon_open from "../../assets/interface_icons/folder_open.svg";
import Spinner from "../MinorComponents/Spinner";
import { useState } from "react";
import BurgerMenu from "./BurgerMenu";
import { Link, Outlet } from "react-router-dom";
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
  const collectionItemElements = collections.map((ele) => (
    <SidebarCollectionItem
      label={ele.name}
      numberOfCards={ele.cards.length}
      handleSelect={() =>
        dispatch({ type: "collection_selected", payload: ele })
      }
      isSelected={selectedId === ele.id}
      key={ele.id}
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
}) {
  const [isContextMenuOpen, setIsContextMenuOpen] = useState(false);
  function openOrCloseContextMenu(event) {
    event.preventDefault();
    setIsContextMenuOpen((pre) => !pre);
  }
  return (
    <button
      className={styles.collectionItemContainer}
      onClick={handleSelect}
      onContextMenu={openOrCloseContextMenu}
    >
      <img src={isSelected ? FolderIcon_open : FolderIcon_close} />
      <div className={styles.collectionInfo}>
        <p className="lvlTwoText">{label}</p>
        <p className="lvlThreeText">Total cards: {numberOfCards}</p>
      </div>
      {isContextMenuOpen}
    </button>
  );
}
