import * as React from "react";
import styles from "./SingleItem.module.css";

import { cartItemActions } from "../../../Store/Slices/CartItems";
import { useDispatch } from "react-redux";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import StockController from "../../../Shared/StockController";
import { useSelector } from "react-redux";

const SingleItem = (props) => {
  const [heart, setHeart] = React.useState(0);
  const cartName = props.Name.slice(0, 45);
  const quant = useSelector((state) => state.cartItemsList.itemsInCart);
  const quanti = quant?.find((item) => item.id === props.id);
  const itemQuantity = quanti?.quantity;
  const itemsLeft = quanti?.itemsLeft;
  const dispatch = useDispatch();

  const cartPlusCountHandler = () => {
    if (itemQuantity < 9 && itemsLeft !== 0) {
      dispatch(cartItemActions.addItemInCart({ id: props.id }));
    }
  };

  const cartMinusCountHandler = () => {
    if (itemQuantity > 0) {
      dispatch(cartItemActions.removeItemFromCart({ id: props.id }));
    }
  };
  const itemDelete = () => {
    dispatch(cartItemActions.singleItemRemove({ id: props.id }));
  };
  const fvrtHandler = () => {
    heart === 0 ? setHeart(1) : setHeart(0);
  };
  return (
    <>
      <div className={styles.productWrapper}>
        <div className={styles.mainDetailDiv}>
          <div className={styles.imgContainer}>
            <img className={styles.imgSize} src={props.bookimg} alt="" />
          </div>
          <div className={styles.nameAuthorDiv}>
            <p className={styles.bookName}>{cartName}</p>

            <p className={styles.bookAuthor}>{props.Author}</p>
            <p className={styles.priceSM}>Rs.{props.OurPrice}</p>
          </div>
        </div>

        <div className={styles.priceDiv}>
          <p className={styles.ourPrice}>Rs.{props.OurPrice}</p>
          <p className={styles.marketPrice}>Rs.{props.MarketPrice}</p>
          <p className={styles.sale}>- {20}%</p>
          <p className={styles.iconPara}>
            <FaRegHeart
              className={heart === 0 ? styles.icons : styles.displayNone}
            />

            <RiDeleteBin6Line className={styles.iconsD} onClick={itemDelete} />
          </p>
        </div>
        <div className={styles.controllerDiv}>
          <StockController
            pstock={itemsLeft}
            pcount={itemQuantity}
            funcPlus={cartPlusCountHandler}
            funcMinus={cartMinusCountHandler}
            className={""}
          />
        </div>
      </div>
    </>
  );
};

export default SingleItem;
