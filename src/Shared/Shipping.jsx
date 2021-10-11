import React from "react";
import styles from "./Shipping.module.css";
import { FaShippingFast } from "react-icons/fa";
const Shipping = () => {
  return (
    <div className={styles.freeShipping}>
      <hr className={styles.hr} />
      <p className={styles.paraShipping}>
        <span className={styles.shippingText}>
          {" "}
          <FaShippingFast className={styles.shippingIcon} />
          Free Shipping
        </span>{" "}
        over Rs.1000 shopping
      </p>
      <hr className={styles.hr} />
    </div>
  );
};

export default Shipping;
