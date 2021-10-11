import React from "react";
import { Link } from "react-router-dom";
import PasswordOverlay from "./PasswordOverlay";
import styles from "./CombinedAdminPanel.module.css";
import logo from "../Assets/Images/logo.png";
import { useSelector } from "react-redux";
import { FaShippingFast } from "react-icons/fa";
import ReceivedOrders from "./ReceivedOrders";
const CombinedAdminPanel = () => {
  const show = useSelector((state) => state.password.show);

  return (
    <Link to="/AdminPanel">
      {show && <PasswordOverlay />}

      {!show && (
        <>
          <h1 className={styles.headings}>Admin Panel</h1>
          <div className={styles.wrap}>
            <Link to="/UploadBook">
              <div className={styles.child1}>
                <h2>Add a New Book</h2>
                <img src={logo} alt="" className={styles.icon1} />
              </div>
            </Link>
            <Link to="/ReceivedOrders">
              <div className={styles.child2}>
                <h2>Orders Received</h2>
                <h6>This section is In Progress</h6>
              </div>
            </Link>
          </div>
        </>
      )}
    </Link>
  );
};

export default CombinedAdminPanel;
