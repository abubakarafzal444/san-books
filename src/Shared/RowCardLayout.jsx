import styles from "./RowCardLayout.module.css";
import { itemLoadAction } from "../Store/Slices/itemLoader";
import { useDispatch } from "react-redux";
import { cartItemActions } from "../Store/Slices/CartItems";
import Badge from "@mui/material/Badge";
import { Link } from "react-router-dom";
import * as React from "react";
import { useState } from "react";
import Rating from "@mui/material/Rating";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { FaRegHeart, FaShoppingCart, FaHeart } from "react-icons/fa";
import { useSelector } from "react-redux";
//

const RowCardLayout = (props) => {
  const quant = useSelector((state) => state.cartItemsList.itemsInCart) || 0;
  const quanti = quant.find((item) => item.id === props.id) || 0;
  const itemQuantity = quanti.quantity || 0;
  const itemsLeft = quanti.itemsLeft;
  //
  //   const [stock, setStock] = useState(props.quantity);
  const [heart, setHeart] = useState(0);
  const cartPlusCountHandler = () => {
    if (itemQuantity < 9 && itemsLeft !== 0) {
      // setStock(stock - 1);
      dispatch(cartItemActions.addItemInCart({ id: props.id }));
    }
  };
  const cartMinusCountHandler = () => {
    dispatch(cartItemActions.removeItemFromCart({ id: props.id }));
  };
  const fvrtHandler = () => {
    heart === 0 ? setHeart(1) : setHeart(0);
  };
  const slicedName = props?.title?.slice(0, 75);
  const dispatch = useDispatch();
  const clickHandler = () => {
    dispatch(itemLoadAction.productDisplay({ id: props.id }));
  };
  return (
    <Link to="/product">
      <div className={styles.card} onClick={clickHandler}>
        <div className={styles.cardC}>
          <div className={`${styles.card__side} ${styles.card__side__front}`}>
            <div
              className={`${
                props.badgeContent ? styles.BadgeShow : styles.BadgeHide
              }`}
            >
              <p>{props.badgeContent}</p>
            </div>
            <div
              className={`${styles.card__picture} ${styles.card__picture__1}`}
            >
              <img
                className={styles.card__picture__img}
                src={props.img}
                alt=""
              />
            </div>
          </div>
          <div
            className={`${styles.card__side} ${styles.card__side__back} ${
              styles.card__side__back - 1
            }`}
          >
            <div className={styles.backfaceWrapper}>
              <div className={styles.card__name_box}>
                <p className={styles.card__name_only}>{slicedName}</p>
                <p className={styles.card__author_only}>
                  <span style={{ fontWeight: "bold" }}>
                    By: {props.author}{" "}
                  </span>
                  {props.content}
                </p>
              </div>
              <p className={itemsLeft > 10 ? styles.stock : styles.displayNone}>
                in stock
              </p>
              <p
                className={
                  itemsLeft <= 10 && itemsLeft !== 0
                    ? styles.stockLow
                    : styles.displayNone
                }
              >
                Low Stock, Buy Now
              </p>
              <p
                className={
                  itemsLeft === 0 ? styles.stockFinish : styles.displayNone
                }
              >
                out of stock
              </p>
              <div
                className={
                  itemQuantity > 0 ? styles.displayNone : styles.ratingReview
                }
              >
                <Rating
                  size="small"
                  name="read-only"
                  value={props.rating}
                  precision={0.5}
                  readOnly
                />
                <p className={styles.ratingNumber}>({props.reviews})</p>
              </div>

              <div className={styles.bottomWrap}>
                <div className={styles.price}>
                  <p>
                    <span className={styles.marketPrice}>
                      Rs.{props.marketprice}
                    </span>
                    <span className={styles.ourPrice}>Rs.{props.ourprice}</span>
                  </p>
                </div>

                <Link to={props.link}>
                  <div className={styles.buttonGroupPosition}>
                    <div
                      className={
                        itemQuantity === 0
                          ? styles.displayNone
                          : styles.buttonGroup
                      }
                    >
                      <div
                        className={styles.minusButton}
                        onClick={cartMinusCountHandler}
                      >
                        <p>-</p>
                      </div>
                      <div className={styles.Display}>
                        <h6> {itemQuantity}</h6>
                      </div>
                      <div
                        className={styles.plusButton}
                        onClick={cartPlusCountHandler}
                      >
                        <p>+</p>
                      </div>
                    </div>
                  </div>
                  <div className={styles.cart}>
                    <HiOutlineShoppingCart
                      onClick={cartPlusCountHandler}
                      className={
                        itemQuantity === 0
                          ? styles.cartIcons
                          : styles.displayNone
                      }
                    />

                    <Badge
                      className={itemQuantity === 0 ? styles.displayNone : ""}
                      badgeContent={itemQuantity}
                      color="primary"
                    >
                      <FaShoppingCart
                        onClick={cartPlusCountHandler}
                        className={
                          itemQuantity === 0
                            ? styles.displayNone
                            : styles.cartIcons
                        }
                      />
                    </Badge>
                    <FaRegHeart
                      onClick={fvrtHandler}
                      className={
                        heart === 0 ? styles.cartIcons : styles.displayNone
                      }
                    />
                    <FaHeart
                      onClick={fvrtHandler}
                      className={
                        heart === 0 ? styles.displayNone : styles.cartIcons
                      }
                    />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};
export default RowCardLayout;
