import React from "react";
import logo from "../Assets/Images/logo.png";
import { Row, Col } from "react-bootstrap";
import { MdPermContactCalendar, MdEmail } from "react-icons/md";
import { IoLogoFacebook } from "react-icons/io";

import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.wave}>
      <Row className={styles.rowContainer}>
        <Col lg={3} md={6} sm={12} className={styles.logoContainer}>
          <div>
            <img className={styles.logo} src={logo} alt="" />
          </div>
          <div className={styles.para}>
            <p>Book selling is not a business,it's passion</p>
          </div>
        </Col>
        <Col lg={3} md={6} sm={6} className={styles.linksContainer}>
          <p className={styles.colHeading}>My Account</p>
          {/* <p>My Account</p>
          <p>Register</p>
          <p>Search</p>
          <p>Wishlist</p>
          <p>Pending Orders</p> */}
          <ul className={styles.listColumn}>
            <li className={styles.listElement}>My Account</li>
            <li className={styles.listElement}>Register</li>
            <li className={styles.listElement}>Search</li>
            <li className={styles.listElement}>Wishlist</li>
            <li className={styles.listElement}>Pending Orders</li>
          </ul>
        </Col>
        <Col lg={3} md={6} sm={6} className={styles.linksContainer}>
          <h6 className={styles.colHeading}>Customer Service</h6>
          <ul className={styles.listColumn}>
            <li className={styles.listElement}>About Us</li>
            <li className={styles.listElement}>Contact Us</li>
            <li className={styles.listElement}>Help & Contact</li>
          </ul>
        </Col>
        <Col lg={3} md={6} sm={6} className={styles.linksContainer}>
          <h6 className={styles.colHeading}>Contact Details</h6>
          <div className={styles.iconTextList}>
            <ul className={`${styles.iconUl} ${styles.listColumn}`}>
              <li className={styles.listElement}>
                <div className={styles.iconText}>
                  <MdPermContactCalendar className={styles.icons} />
                  <p>03096750959</p>
                </div>
              </li>
              <li className={styles.listElement}>
                <div className={styles.iconText}>
                  <MdEmail className={styles.icons} /> <p>sanbooks@gmail.com</p>
                </div>
              </li>
              <li className={styles.listElement}>
                <div className={styles.iconText}>
                  <IoLogoFacebook className={styles.icons} />
                  <p> Sanbooks</p>
                </div>
              </li>
            </ul>
          </div>
        </Col>
      </Row>
      <div className={styles.footerRow}>
        <p>© 2021 All Rights Reserved</p>
        <p>Terms of Use</p>
        <p>Privacy Policy</p>
      </div>
    </div>
  );
};

export default Footer;
