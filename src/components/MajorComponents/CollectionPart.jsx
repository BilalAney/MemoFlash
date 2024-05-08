/** @format */

import { useState } from "react";
import styles from "../../styles/CollectionPart.module.css";
import deleteIcon from "../../assets/interface_icons/delete.svg";
import editIcon from "../../assets/interface_icons/edit_pen.svg";
import { Outlet, useNavigate } from "react-router";
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

export function CollectionCard({ isKeptRevealed, keepRevealed, front, back }) {
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
      <div className={styles.card_content}>
        {isRevealed ? (
          <>
            <span>{front}</span>
            <p>{back}</p>
          </>
        ) : (
          <span>{front}</span>
        )}
      </div>
    </div>
  );
}
