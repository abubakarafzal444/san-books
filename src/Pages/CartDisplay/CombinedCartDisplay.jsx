import styles from "./CombinedCartDisplay.module.css";
import ColumnCardLayout from "../../Shared/ColumnCardLayout";
import Shipping from "../../Shared/Shipping";
import * as React from "react";
import Checkbox from "@mui/material/Checkbox";
import { RiDeleteBin6Line } from "react-icons/ri";

import SingleItem from "./Sections/SingleItem";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { cartItemActions } from "../../Store/Slices/CartItems";

//

import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import axios from "axios";

const CombinedCartDisplay = () => {
  const dispatch = useDispatch();
  const [mainBox, setMainBox] = React.useState(false);
  const itemToAdd = useSelector((state) => state.cartItemsList.itemsInCart);

  const onlyForYou = useSelector((state) => state.data.saleData);

  const summaryTotalQuantity = useSelector(
    (state) => state.cartItemsList.totalQuantity
  );

  const mainBoxHandler = () => {
    setMainBox(!mainBox);
  };
  const deleteAllHandler = () => {
    if (mainBox === true) {
      dispatch(cartItemActions.deleteAllHandle());
    }
  };
  const checkoutPriceprogress = useSelector(
    (state) => state.cartItemsList.totalCheckoutPrice
  );

  const checkoutPrice = Math.round(checkoutPriceprogress);
  const delivery = checkoutPrice > 999 || itemToAdd.length === 0 ? 0 : 200;
  //
  //
  const [order, setOrder] = React.useState({
    Name: "",
    Phone: "",
    Address1: "",
    Address2: "",
    Email: "",
    Payment: checkoutPrice + delivery,
    OrderArray: itemToAdd,
    Date: new Date(),
  });
  let name, value;
  const dataHandler = (event) => {
    let updated = { ...order };
    updated[event.target.name] = event.target.value;
    setOrder(updated);
    console.log(order);
  };
  const [open, setOpen] = React.useState(false);

  const handleOrder = () => {
    itemToAdd.length > 0 ? setOpen(true) : setOpen(false);
  };

  const handleCancel = () => {
    setOpen(false);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (
      order.Name.length &&
      order.Phone.length &&
      order.Address1.length &&
      order.Email.length !== 0
    ) {
      let updated = order;
      axios
        .post(
          "https://sanbooks-444-default-rtdb.firebaseio.com/Orders.json",
          updated
        )
        .then((res) => {
          console.log("Order Placed");
          alert("Order has been placed successfuly");
          console.log(itemToAdd);
          setOpen(false);
          dispatch(cartItemActions.deleteAllHandle());
        })
        .catch((err) => alert("There was an error while uploading a new book"));
    } else alert("Please Enter Valid Data");
  };

  return (
    <div className={styles.controller}>
      <Shipping />
      <div className={styles.pageWrapperWrap}>
        <h1 className={styles.carth1}>Shopping Cart</h1>

        <div className={styles.lrgWrapper}>
          <button
            onClick={handleOrder}
            type="submit"
            className={`${styles.checkoutLarge}
              ${itemToAdd.length === 0 ? styles.blur : ""}`}
          >
            Checkout (Total: Rs. {checkoutPrice + delivery})
          </button>
        </div>
        <div className={styles.pageWrapper}>
          <div className={styles.productsSection}>
            <div className={styles.productNav}>
              <p className={styles.checkPara}>
                <Checkbox checked={mainBox} onClick={mainBoxHandler} />
                {itemToAdd.length} item(s)
              </p>
              <p className={styles.deletePara} onClick={deleteAllHandler}>
                <RiDeleteBin6Line className={styles.deleteIcon} />
                Delete
              </p>
            </div>
            {itemToAdd.length === 0 && <h4>No item in cart</h4>}
            {itemToAdd.map((item) => (
              <SingleItem
                key={item.id}
                bookimg={item.Img}
                id={item.id}
                stock={item.Stock}
                Name={item.Name}
                Author={item.Author}
                OurPrice={item.ourPrice}
                MarketPrice={item.MarketPrice}
              />
            ))}
          </div>

          <div className={styles.summarySection}>
            <h6 className={styles.summaryHeading}>Order Summary</h6>
            <div className={styles.subShip}>
              <p className={styles.summaryPara}>
                Subtotal ({summaryTotalQuantity} items)
              </p>
              <p className={styles.stAmount}>Rs. {checkoutPrice}</p>
            </div>
            <div className={styles.subShip}>
              <p className={styles.summaryPara}>Shipping Fee</p>
              <p className={styles.sfAmount}>{delivery}</p>
            </div>
            <div className={styles.inputButton}>
              <input
                className={styles.summaryInput}
                type="text"
                placeholder="Voucher"
              />
              <button className={styles.summaryButton}>
                <p> Apply</p>
              </button>
            </div>
            <div className={styles.subShip}>
              <p>Total</p>
              <p>{checkoutPrice + delivery}</p>
            </div>
            <div className={styles.checkoutButtonContainer}>
              <button
                onClick={handleOrder}
                className={`${styles.checkoutButton}
              ${itemToAdd.length === 0 ? styles.blur : ""}`}
              >
                Proceed to checkout
              </button>

              <Dialog open={open} onClose={handleCancel}>
                <DialogTitle>Details</DialogTitle>
                <DialogContent>
                  <form onSubmit={submitHandler}>
                    <TextField
                      autoFocus
                      margin="dense"
                      id="name"
                      label="Name"
                      type="text"
                      fullWidth
                      variant="outlined"
                      Required
                      onChange={dataHandler}
                      value={open.Name}
                      name="Name"
                    />
                    <TextField
                      margin="dense"
                      id="name"
                      label="Phone no."
                      type="number"
                      fullWidth
                      variant="outlined"
                      Required
                      onChange={dataHandler}
                      value={open.Phone}
                      name="Phone"
                    />
                    <TextField
                      margin="dense"
                      id="name"
                      label="Address Line 1"
                      type="text"
                      fullWidth
                      variant="outlined"
                      Required
                      onChange={dataHandler}
                      value={open.Address1}
                      name="Address1"
                    />
                    <TextField
                      margin="dense"
                      id="name"
                      label="Address Line 2"
                      type="text"
                      fullWidth
                      variant="outlined"
                      onChange={dataHandler}
                      value={open.Address2}
                      name="Address2"
                    />
                    <TextField
                      margin="dense"
                      id="name"
                      label="Email Address"
                      type="email"
                      fullWidth
                      variant="outlined"
                      onChange={dataHandler}
                      value={open.Email}
                      name="Email"
                    />
                    <Button onClick={handleCancel}>Cancel</Button>
                    <Button type="submit">Place Order</Button>
                  </form>
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.forYou}>
        <div className={styles.slideSectionWrap}>
          <h2 className={styles.sectionHeadings}>Only For You</h2>
        </div>
        <ColumnCardLayout
          extended={false}
          Array={onlyForYou}
          link={"/CartDisplay"}
        />
      </div>
    </div>
  );
};

export default CombinedCartDisplay;
