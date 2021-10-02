import React, { useState } from "react";
import styles from "./CombinedProductPage.module.css";
import { Row, Col, Container } from "react-bootstrap";
import { FaShippingFast, FaRegHeart, FaHeart } from "react-icons/fa";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { Badge } from "@mui/material";

import StockController from "../../Shared/StockController";
import ColumnCardLayout from "../../Shared/ColumnCardLayout";
import Banner from "../LandingPage/Sections/Banner";

// temp imports

import { NewArrivalData } from "../../Shared/FilterFunctions";
import m1 from "../../Assets/Images/books/m1.jpg";
import m2 from "../../Assets/Images/books/m2.jpg";
import m3 from "../../Assets/Images/books/m3.jpg";
import m4 from "../../Assets/Images/books/m4.jpg";
import m5 from "../../Assets/Images/books/m5.jpg";
import m6 from "../../Assets/Images/books/m6.jpg";
import m7 from "../../Assets/Images/books/m7.jpg";
const booksImgArray = [m1, m2, m3, m4, m5, m6, m7];

//
const CombinedProductPage = () => {
  const [heart, setHeart] = React.useState(0);
  const fvrtHandler = () => {
    heart === 0 ? setHeart(1) : setHeart(0);
  };

  // changings
  const dataArray = NewArrivalData;
  const sliderArray = [
    NewArrivalData[1],
    NewArrivalData[2],
    NewArrivalData[3],
    NewArrivalData[4],
    NewArrivalData[5],
    NewArrivalData[6],
  ];
  const [count, setCount] = useState(0);
  const [stock, setStock] = useState(dataArray[18].Stock);
  const cartPlusCountHandler = () => {
    if (count < 9 && stock !== 0) {
      setCount(count + 1);
      setStock(stock - 1);
    }
  };
  const cartMinusCountHandler = () => {
    setCount(count - 1);
    setStock(stock + 1);
  };
  return (
    <div className={styles.controllingWrapper}>
      <div className={styles.contentWrapper}>
        <div className={styles.freeShipping}>
          <hr />
          <p className={styles.paraShipping}>
            <span className={styles.shippingText}>
              {" "}
              <FaShippingFast className={styles.shippingIcon} />
              Free Shipping
            </span>{" "}
            over Rs.1000 shopping
          </p>
          <hr />
        </div>
        <Row>
          <Col lg={4}>
            <img className={styles.bookImg} src={m5} alt="" />
          </Col>
          <Col lg={8}>
            <h1 className={styles.h1Heading}>{dataArray[13].Name}</h1>
            <p className={styles.authorPara}>
              <span className={styles.authorName}>{dataArray[13].Author}</span>{" "}
              (Author)
            </p>
            <p className={styles.pricePara}>Price</p>
            <div className={styles.priceDiv}>
              <p
                className={
                  dataArray[13].MarketPrice === dataArray[13].ourPrice
                    ? styles.displayNone
                    : styles.bold
                }
              >
                Discount
                <span className={styles.discount}> 50%</span>
              </p>
              <p>
                <span className={styles.marketPrice}>
                  Rs.{dataArray[13].MarketPrice}{" "}
                </span>
                <span className={styles.ourPrice}>
                  Rs. {dataArray[13].ourPrice}
                </span>
              </p>
            </div>
            <StockController
              pstock={stock}
              pcount={count}
              funcPlus={cartPlusCountHandler}
              funcMinus={cartMinusCountHandler}
              className={""}
            />
            <div className={styles.buttonContainer}>
              <button
                onClick={cartPlusCountHandler}
                className={`${styles.button} ${styles.buy}`}
              >
                <Badge badgeContent={count} color="primary">
                  <HiOutlineShoppingBag className={styles.icons} />
                  Add to Cart
                </Badge>
              </button>
              <button
                className={`${styles.button} ${styles.wish}`}
                onClick={fvrtHandler}
              >
                <FaRegHeart
                  className={heart === 0 ? styles.icons : styles.displayNone}
                />
                <FaHeart
                  className={heart === 0 ? styles.displayNone : styles.icons}
                />
                Add to Wishlist
              </button>
            </div>
          </Col>
        </Row>
        <div className={styles.scrollSection}>
          <h1 className={styles.h1Heading}>Description</h1>
          <p className={styles.summaryPara}>{dataArray[13].Description}</p>
          <p className={styles.descriptionPara}>{dataArray[13].Description}</p>
        </div>
        <div className={styles.productDetailsWrapper}>
          <h1 className={styles.RHeadings}>Product Details</h1>
          <Container>
            <Row lg={2} md={2} sm={2}>
              <Col lg={2} md={4} sm={6}>
                <p className={styles.keys}>Price:</p>
              </Col>
              <Col lg={3} md={4} sm={6}>
                <p className={styles.desPara}>
                  <span className={styles.marketPrice}>
                    Rs.{dataArray[13].MarketPrice}{" "}
                  </span>
                  <span className={styles.ourPric}>
                    Rs. {dataArray[13].ourPrice}
                  </span>
                </p>
              </Col>
            </Row>
            <Row lg={2} md={2} sm={2}>
              <Col lg={2} md={4} sm={6}>
                <p className={styles.keys}>Publisher:</p>
              </Col>
              <Col lg={3} md={4} sm={6}>
                <p className={styles.desPara}>{dataArray[13].Author}</p>
              </Col>
            </Row>
            <Row lg={2} md={2} sm={2}>
              <Col lg={2} md={4} sm={6}>
                <p className={styles.keys}>Published Year:</p>
              </Col>
              <Col lg={3} md={4} sm={6}>
                <p className={styles.desPara}>{dataArray[13].PublishedYear}</p>
              </Col>
            </Row>
            <Row lg={2} md={2} sm={2}>
              <Col lg={2} md={4} sm={6}>
                <p className={styles.keys}>Pages:</p>
              </Col>
              <Col lg={3} md={4} sm={6}>
                <p className={styles.desPara}>{dataArray[13].NumPages}</p>
              </Col>
            </Row>
            <Row lg={2} md={2} sm={2}>
              <Col lg={2} md={4} sm={6}>
                <p className={styles.keys}>Language:</p>
              </Col>
              <Col lg={3} md={4} sm={6}>
                <p className={styles.desPara}>
                  {dataArray[13].Language || "English"}
                </p>
              </Col>
            </Row>
            <Row lg={2} md={2} sm={2}>
              <Col lg={2} md={4} sm={6}>
                <p className={styles.keys}>ISBN:</p>
              </Col>
              <Col lg={3} md={4} sm={6}>
                <p className={styles.desPara}>{dataArray[13].ISBN}</p>
              </Col>
            </Row>
          </Container>
        </div>
        <div className={styles.authorWrapper}>
          <h1 className={styles.RHeadings}>About the Author</h1>
          <p>{dataArray[13].Description}</p>
        </div>
        <div className={styles.relatedBooksSections}>
          <h1 className={styles.RHeadings}>Related Books</h1>
          <ColumnCardLayout
            extended={false}
            Array={sliderArray}
            imgArray={booksImgArray}
          />
        </div>
        <Banner />
      </div>
    </div>
  );
};

export default CombinedProductPage;
