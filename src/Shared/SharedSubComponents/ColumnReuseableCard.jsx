import React from "react";
import styles from "./ColumnReuseableCard.module.css";

const LayoutReuseableCard = (props) => {
  const nameUsed = props.name.slice(0, 40);
  return (
    <div className={styles.wrapper}>
      <div className={styles.imgWrapper}>
        <img className={styles.cardImg} src={props.img} alt="" />
      </div>
      <div className={styles.textWrapper}>
        <p className={styles.name}> {nameUsed}</p>
        <p className={styles.author}> {props.author}</p>
        <div className={styles.price}>
          <p>
            <span className={styles.marketPrice}>Rs.{props.marketprice}</span>
            <span className={styles.ourPrice}>Rs.{props.ourprice}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LayoutReuseableCard;
