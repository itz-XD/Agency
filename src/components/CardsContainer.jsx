
import styles from "./CardsContainer.module.css";



const CardsContainer = ({
  className = "",
  cardImages,
  trendsShapingTheFutureOfC,
  creativeAgenciesHaveAnInd,
}) => {
  return (
    <div className={[styles.cardsContainer, className].join(" ")}>
      <img
        className={styles.cardImagesIcon}
        loading="lazy"
        alt=""
        src={cardImages}
      />
      <div className={styles.cardContents}>
        <h2 className={styles.trendsShapingThe}>{trendsShapingTheFutureOfC}</h2>
        <div className={styles.creativeAgenciesHave}>
          {creativeAgenciesHaveAnInd}
        </div>
      </div>
    </div>
  );
};

export default CardsContainer;
