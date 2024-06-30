/** @format */

import { useState } from "react";
import styles from "../../styles/CollectionPart.module.css";
import deleteIcon from "../../assets/interface_icons/delete.svg";
import editIcon from "../../assets/interface_icons/edit_pen.svg";
import { useNavigate } from "react-router";
export function CollectionPart({ children }) {
  return (
    <section className={styles.collectionPartContainer}>
      {children}
      {/* <Outlet /> */}
    </section>
  );
}

export function CollectionInfo({ name, totalCards }) {
  const navigate = useNavigate();
  return (
    <div className={styles.infoBar}>
      <p className={styles.collectionName}>{name}</p>
      <div className={styles.infoBarDataContainer}>
        <p>Date: CREATED_DATE</p>
        <p>Last Edited In: EDITING_DATE</p>
        <p>Number of cards: {totalCards}</p>
      </div>
      <button
        className={`${styles.plusButton} btn`}
        onClick={() => navigate(`NewCard/${name}`)}
      >
        ➕
      </button>
    </div>
  );
}

export function CollectionCardsContainer({ data }) {
  const cardElements = data.map((ele) => (
    <CollectionCard
      key={ele.cardId}
      front={ele.front}
      back={ele.back}
      isKeptRevealed={ele.keepRevealed || false}
      keepRevealed={() => {}}
    />
  ));

  return <div className={styles.cardsContainer}>{cardElements}</div>;
}

export function CollectionCard({
  isKeptRevealed,
  keepRevealed,
  front,
  back,
  frontColor = "var(--third-color)",
  backColor = "var(--second-color)",
}) {
  const [isRevealed, setIsRevealed] = useState(isKeptRevealed);
  const [isOptionsShown, setIsOptionsShown] = useState(false);
  const navigate = useNavigate();

  return (
    <div
      className={styles.card}
      onClick={() => setIsRevealed((pre) => !pre)}
      onMouseEnter={() => setIsOptionsShown(true)}
      onMouseLeave={() => setIsOptionsShown(false)}
    >
      {isOptionsShown && (
        <div className={styles.optionsPane}>
          <img
            src={editIcon}
            onClick={() => navigate(`EditCard?front=${front}&back=${back}`)}
          />
          <img src={deleteIcon} onClick={() => navigate(`DeleteDialog`)} />
        </div>
      )}
      {/**TODO:    Completet the card with the flipping effect */}
      <div className={styles.card_content}>
        <div className={styles.cardInner}>
          <div
            className={styles.cardFront}
            style={{ backgroundColor: frontColor }}
          >
            <span>{front}</span>
          </div>
          <div
            className={styles.cardBack}
            style={{ backgroundColor: backColor }}
          >
            <span>{back}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
