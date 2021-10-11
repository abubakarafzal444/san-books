import React from "react";
import styles from "./ColumnReuseableCard.module.css";
import { itemLoadAction } from "../../Store/Slices/itemLoader";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
const LayoutReuseableCard = (props) => {
  const nameUsed = props?.name.slice(0, 30);
  const dispatch = useDispatch();

  const clickHandler = () => {
    dispatch(itemLoadAction.productDisplay({ id: props.id }));
    console.log(props.id);
  };
  return (
    <Link to="/product">
      <div className={styles.wrapper} onClick={clickHandler}>
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
    </Link>
  );
};

export default LayoutReuseableCard;
