import React from "react";
import styles from "./ColumnCardLayout.module.css";
import ColumnReuseableCard from "./SharedSubComponents/ColumnReuseableCard";
import RowCardLayout from "./RowCardLayout";

const ColumnCardLayout = (props) => {
  const requiredDataArray1 = props.Array.slice(0, 3);

  const requiredDataArray2 = props.Array.slice(3, 6);

  const requiredDataArray3 = props.Array.slice(6, 9);

  var smDataArray = requiredDataArray1.concat(requiredDataArray2);
  if (props.extended === true) {
    smDataArray = requiredDataArray1
      .concat(requiredDataArray2)
      .concat(requiredDataArray3);
  }

  return (
    <div className={styles.sectionWrapper}>
      <div className={styles.largescreen}>
        <div className={styles.rowWrap}>
          <div className={styles.cardWrap}>
            {requiredDataArray1.map((card, index) => (
              <ColumnReuseableCard
                key={card.id}
                id={card.id}
                img={card.Img}
                name={card.Name}
                author={card.Author}
                ourprice={card.ourPrice}
                marketprice={card.MarketPrice}
                link={props.link}
              />
            ))}
          </div>
        </div>
        <hr style={{ margin: "40px 0px 25px 0px" }} />
        <div className={styles.rowWrap}>
          <div className={styles.cardWrap}>
            {requiredDataArray2.map((card, index) => (
              <ColumnReuseableCard
                key={card.id}
                id={card.id}
                img={card.Img}
                name={card.Name}
                author={card.Author}
                ourprice={card.ourPrice}
                marketprice={card.MarketPrice}
                link={props.link}
              />
            ))}
          </div>
        </div>
        <hr style={{ margin: "25px 0px" }} />

        {props.extended ? (
          <div className={styles.rowWrap}>
            <div className={styles.cardWrap}>
              {requiredDataArray3.map((card, index) => (
                <ColumnReuseableCard
                  key={card.id}
                  id={card.id}
                  img={card.Img}
                  name={card.Name}
                  author={card.Author}
                  ourprice={card.ourPrice}
                  marketprice={card.MarketPrice}
                  link={props.link}
                />
              ))}
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
      <div className={styles.smallScreen}>
        {smDataArray.map((card, index) => (
          <RowCardLayout
            key={card.id}
            img={card.Img}
            id={card.id}
            title={card.Name}
            content={card.Author}
            badgeContent={"Recommended"}
            rating={card.AverageRating}
            marketprice={card.MarketPrice}
            ourprice={card.ourPrice}
            reviews={card.Reviews}
            author={card.Author}
            quantity={card.Stock}
            link={props.link}
          />
        ))}
      </div>
    </div>
  );
};

export default ColumnCardLayout;
