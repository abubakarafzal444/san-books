import React from "react";
import styles from "../Pages/LandingPage/Sections/ScrollCategoriesAndFullFlipping.module.css";
import { BiRightArrowCircle } from "react-icons/bi";
import RowCardLayout from "./RowCardLayout";
const FlippingFullComponent = (props) => {
  return (
    <>
      <div className={styles.slideSectionWrap}>
        <h2
          className={`${styles.sectionHeadings} ${
            props.DataArray.length < 7 ? styles.displayNoneControl : ""
          }`}
        >
          {props.SectionHeading}
        </h2>
        <div
          className={
            props.DataArray.length > 6
              ? styles.slideSectionButton
              : styles.displayNone
          }
        >
          <button className={styles.viewAllButton}>
            <span className={styles.buttonSpan}> Explore All </span>
            <BiRightArrowCircle className={styles.arrowIcon} />
          </button>
        </div>
      </div>
      <div className={styles.cardscontainer}>
        {props.DataArray.map((card, index) => (
          <RowCardLayout
            badgeContent={props.BadgeContent}
            img={
              props.BookImgArray[index] ||
              "https:                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    source.unsplash.com/270x400/?books"
            }
            title={card.Name}
            content={card.description}
            rating={card.AverageRating}
            reviews={card.Reviews}
            marketprice={card.MarketPrice}
            ourprice={card.ourPrice}
            author={card.Author}
            quantity={card.Stock}
          />
        ))}
      </div>
    </>
  );
};

export default FlippingFullComponent;
