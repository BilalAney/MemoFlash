/** @format */

import { useState } from "react";
import styles from "../../styles/CollectionPart.module.css";
export function CollectionPart({ children }) {
  return (
    <section className={styles.collectionPartContainer}>{children}</section>
  );
}

export function CollectionInfo({ name, totalCards }) {
  return (
    <div className={styles.infoBar}>
      <p className={styles.collectionName}>{name}</p>
      <div className={styles.infoBarDataContainer}>
        <p>Date: CREATED_DATE</p>
        <p>Last Edited In: EDITING_DATE</p>
        <p>Number of cards: {totalCards}</p>
      </div>
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

  return (
    <div className={styles.card} onClick={() => setIsRevealed((pre) => !pre)}>
      {isRevealed ? (
        <>
          <span>{front}</span>
          <p>{back}</p>
        </>
      ) : (
        <span>{front}</span>
      )}
    </div>
  );
}
