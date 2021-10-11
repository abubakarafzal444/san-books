import React from "react";
import { Rating } from "@mui/material";
import { useDispatch } from "react-redux";
import { cartItemActions } from "../../Store/Slices/CartItems";
import styles from "./CombinedProductPage.module.css";
import { Row, Col, Container } from "react-bootstrap";
import Shipping from "../../Shared/Shipping";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { Badge } from "@mui/material";
import StockController from "../../Shared/StockController";
import ColumnCardLayout from "../../Shared/ColumnCardLayout";
import Banner from "../LandingPage/Sections/Banner";
import { useSelector } from "react-redux";

const CombinedProductPage = () => {
  const productToShow = useSelector((state) => state.itemDisplay.product) || 0;
  const quant = useSelector((state) => state.cartItemsList.itemsInCart) || 0;
  const quanti = quant.find((item) => item.id === productToShow.id) || 0;
  const itemQuantity = quanti.quantity || 0;
  const itemsLeft = quanti.itemsLeft;
  const discountArray = useSelector((state) => state.data.saleData);
  const dispatch = useDispatch();
  const [heart, setHeart] = React.useState(0);

  const sliderArray = discountArray.slice(0, 6);

  const cartPlusCountHandler = () => {
    if (itemQuantity < 9 && itemsLeft !== 0) {
      dispatch(cartItemActions.addItemInCart({ id: productToShow.id }));
    }
  };
  const cartMinusCountHandler = () => {
    if (itemQuantity > 0) {
      dispatch(cartItemActions.removeItemFromCart({ id: productToShow.id }));
    }
  };
  const fvrtHandler = () => {
    heart === 0 ? setHeart(1) : setHeart(0);
  };
  const discount =
    100 - (productToShow.ourPrice / productToShow.MarketPrice) * 100;
  return (
    <>
      <div className={styles.controllingWrapper}>
        <div className={styles.contentWrapper}>
          <Shipping />
          <div className={styles.smallScreenHeading}>
            <h1 className={styles.h1Heading}>{productToShow.Name}</h1>
            <p className={styles.authorPara}>
              <span className={styles.authorName}>{productToShow.Author}</span>{" "}
              (Author)
            </p>
          </div>
          <Row className={styles.rowDiv}>
            <Col className={styles.imgContainer} lg={4} md={4} sm={12}>
              <img className={styles.bookImg} src={productToShow.Img} alt="" />
            </Col>
            <Col lg={8} md={8}>
              <div className={styles.largeScreenHeading}>
                <h1 className={styles.h1Heading}>{productToShow.Name}</h1>
                <p className={styles.authorPara}>
                  <span className={styles.authorName}>
                    {productToShow.Author}
                  </span>{" "}
                  (Author)
                </p>
              </div>
              <p className={styles.pricePara}>Price</p>
              <div className={styles.priceDiv}>
                <p
                  className={
                    productToShow.MarketPrice === productToShow.ourPrice
                      ? styles.displayNone
                      : styles.bold
                  }
                >
                  Discount
                  <span className={styles.discount}>
                    {" "}
                    {Math.trunc(discount)}%
                  </span>
                </p>
                <p>
                  <span className={styles.marketPrice}>
                    Rs.{productToShow.MarketPrice}{" "}
                  </span>
                  <span className={styles.ourPrice}>
                    Rs. {productToShow.ourPrice}
                  </span>
                </p>
              </div>
              <StockController
                pstock={itemsLeft}
                pcount={itemQuantity}
                funcPlus={cartPlusCountHandler}
                funcMinus={cartMinusCountHandler}
                className={""}
              />
              <div className={styles.buttonContainer}>
                <button
                  onClick={cartPlusCountHandler}
                  className={`${styles.button} ${styles.buy}`}
                >
                  <Badge badgeContent={itemQuantity} color="primary">
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
            <p className={styles.summaryPara}>{productToShow.Description}</p>
            <p className={styles.descriptionPara}>
              {productToShow.Description}
            </p>
          </div>
          <div className={styles.productDetailsWrapper}>
            <h1 className={styles.RHeadings}>Product Details</h1>
            <Container>
              <Row lg={2} md={2} sm={2}>
                <Col lg={2} md={2} sm={5} xs={6}>
                  <p className={styles.keys}>Price:</p>
                </Col>
                <Col lg={3} md={3} sm={7} xs={6}>
                  <p className={styles.desPara}>
                    <span className={styles.marketPrice}>
                      Rs.{productToShow.MarketPrice}{" "}
                    </span>
                    <span className={styles.ourPric}>
                      Rs. {productToShow.ourPrice}
                    </span>
                  </p>
                </Col>
              </Row>
              <Row lg={2} md={2} sm={2}>
                <Col lg={2} md={4} sm={6} xs={6}>
                  <p className={styles.keys}>Publisher:</p>
                </Col>
                <Col lg={3} md={4} sm={6} xs={6}>
                  <p className={styles.desPara}>{productToShow.Author}</p>
                </Col>
              </Row>

              <Row lg={2} md={2} sm={2}>
                <Col lg={2} md={4} sm={6} xs={6}>
                  <p className={styles.keys}>Rating:</p>
                </Col>
                <Col lg={3} md={4} sm={6} xs={6}>
                  <Rating
                    name="read-only"
                    precision={0.5}
                    size="small"
                    value={productToShow.AverageRating}
                    readOnly
                  />
                </Col>
              </Row>
              <Row lg={2} md={2} sm={2}>
                <Col lg={2} md={4} sm={6} xs={6}>
                  <p className={styles.keys}>Reviews:</p>
                </Col>
                <Col lg={3} md={4} sm={6} xs={6}>
                  <p className={styles.desPara}>{productToShow.Reviews}</p>
                </Col>
              </Row>
              <Row lg={2} md={2} sm={2}>
                <Col lg={2} md={4} sm={6} xs={6}>
                  <p className={styles.keys}>Genre:</p>
                </Col>
                <Col lg={3} md={4} sm={6} xs={6}>
                  <p className={styles.desPara}>{productToShow.Genre}</p>
                </Col>
              </Row>
              <Row lg={2} md={2} sm={2}>
                <Col lg={2} md={4} sm={6} xs={6}>
                  <p className={styles.keys}>Pages:</p>
                </Col>
                <Col lg={3} md={4} sm={6} xs={6}>
                  <p className={styles.desPara}>{productToShow.NumPages}</p>
                </Col>
              </Row>
              <Row lg={2} md={2} sm={2}>
                <Col lg={2} md={4} sm={6} xs={6}>
                  <p className={styles.keys}>ISBN:</p>
                </Col>
                <Col lg={3} md={4} sm={6} xs={6}>
                  <p className={styles.desPara}>{productToShow.ISBN}</p>
                </Col>
              </Row>
              <Row lg={2} md={2} sm={2}>
                <Col lg={2} md={4} sm={6} xs={6}>
                  <p className={styles.keys}>Language:</p>
                </Col>
                <Col lg={3} md={4} sm={6} xs={6}>
                  <p className={styles.desPara}>
                    {productToShow.Language || "English"}
                  </p>
                </Col>
              </Row>
            </Container>
          </div>
          <div className={styles.authorWrapper}>
            <h1 className={styles.RHeadings}>About the Author</h1>
            <p>{productToShow.Description}</p>
          </div>
        </div>
      </div>
      <div className={styles.relatedBooksSections}>
        {/* <h1 className={styles.RHeadings}>Related Books</h1> */}
        <ColumnCardLayout
          extended={false}
          Array={sliderArray}
          link={"/product"}
        />
      </div>
      <Banner />
    </>
  );
};

export default CombinedProductPage;
