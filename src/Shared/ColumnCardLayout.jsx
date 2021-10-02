import React from "react";
import styles from "./ColumnCardLayout.module.css";
import ColumnReuseableCard from "./SharedSubComponents/ColumnReuseableCard";
import RowCardLayout from "./RowCardLayout";

const ColumnCardLayout = (props) => {
  const requiredDataArray1 = [props.Array[0], props.Array[1], props.Array[2]];
  const requiredDataArray2 = [props.Array[3], props.Array[4], props.Array[5]];
  const requiredDataArray3 = [props.Array[6], props.Array[7], props.Array[8]];

  var smDataArray = requiredDataArray1.concat(requiredDataArray2);
  if (props.extended) {
    smDataArray = requiredDataArray1
      .concat(requiredDataArray2)
      .concat(requiredDataArray3);
  }
  const imgArray = props.imgArray;

  return (
    <div className={styles.sectionWrapper}>
      <div className={styles.largescreen}>
        <div className={styles.rowWrap}>
          <div className={styles.cardWrap}>
            {requiredDataArray1.map((card, index) => (
              <ColumnReuseableCard
                img={card.img || imgArray[index]}
                name={card.Name}
                author={card.Author}
                ourprice={card.ourPrice}
                marketprice={card.MarketPrice}
              />
            ))}
          </div>
        </div>
        <hr style={{ margin: "40px 0px 25px 0px" }} />
        <div className={styles.rowWrap}>
          <div className={styles.cardWrap}>
            {requiredDataArray2.map((card, index) => (
              <ColumnReuseableCard
                img={card.img || imgArray[index + 3]}
                name={card.Name}
                author={card.Author}
                ourprice={card.ourPrice}
                marketprice={card.MarketPrice}
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
                  img={card.img || imgArray[index]}
                  name={card.Name}
                  author={card.Author}
                  ourprice={card.ourPrice}
                  marketprice={card.MarketPrice}
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
            img={
              imgArray[index] || "https://source.unsplash.com/270x400/?books"
            }
            title={card.Name}
            content={card.Author}
            badgeContent={"Recommended"}
            rating={card.AverageRating}
            marketprice={card.MarketPrice}
            ourprice={card.ourPrice}
          />
        ))}
      </div>
    </div>
  );
};

export default ColumnCardLayout;
