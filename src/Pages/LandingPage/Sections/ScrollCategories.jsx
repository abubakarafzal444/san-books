import React from "react";
import FlippingFullComponent from "../../../Shared/FlippingFullComponent";
import { BiRightArrowCircle } from "react-icons/bi";
import styles from "./ScrollCategoriesAndFullFlipping.module.css";
import RowCardLayout from "../../../Shared/RowCardLayout.jsx";
import ColumnCardLayout from "../../../Shared/ColumnCardLayout";
import Banner from "../Sections/Banner";
import {
  NewArrivalData,
  ExclusiveSaleData,
} from "../../../Shared/FilterFunctions.jsx";
import ControlledCarousel from "./Carousel";
import spacer2 from "../../../Assets/Images/spacer2.webp";
import m1 from "../../../Assets/Images/books/m1.jpg";
import m2 from "../../../Assets/Images/books/m2.jpg";
import m3 from "../../../Assets/Images/books/m3.jpg";
import m4 from "../../../Assets/Images/books/m4.jpg";
import m5 from "../../../Assets/Images/books/m5.jpg";
import m6 from "../../../Assets/Images/books/m6.jpg";
import m7 from "../../../Assets/Images/books/m7.jpg";
import m8 from "../../../Assets/Images/books/m8.jpg";
import m9 from "../../../Assets/Images/books/m9.jpg";
import m10 from "../../../Assets/Images/books/m10.jpg";
import m11 from "../../../Assets/Images/books/m11.jpg";
import m12 from "../../../Assets/Images/books/m12.jpg";
import m13 from "../../../Assets/Images/books/m13.jpg";
import m14 from "../../../Assets/Images/books/m14.jpg";
import m15 from "../../../Assets/Images/books/m15.jpg";
import m16 from "../../../Assets/Images/books/m16.jpg";
import m17 from "../../../Assets/Images/books/m17.jpg";
import m18 from "../../../Assets/Images/books/m18.jpg";
import m19 from "../../../Assets/Images/books/m19.jpg";
import m20 from "../../../Assets/Images/books/m20.jpg";
import m21 from "../../../Assets/Images/books/m21.jpg";
import m22 from "../../../Assets/Images/books/m22.jpg";
import m23 from "../../../Assets/Images/books/m23.jpg";
import m24 from "../../../Assets/Images/books/m24.jpg";
import m25 from "../../../Assets/Images/books/m25.jpg";
import m26 from "../../../Assets/Images/books/m26.jpg";
import m27 from "../../../Assets/Images/books/m27.jpg";
import m28 from "../../../Assets/Images/books/m28.jpg";
import m29 from "../../../Assets/Images/books/m29.jpg";
import m30 from "../../../Assets/Images/books/m30.jpg";
const booksImgArray = [
  m1,
  m2,
  m3,
  m4,
  m5,
  m6,
  m7,
  m8,
  m9,
  m10,
  m11,
  m12,
  m13,
  m14,
  m15,
  m16,
  m17,
  m18,
  m19,
  m20,
  m21,
  m22,
  m23,
  m24,
  m25,
  m26,
  m27,
  m28,
  m29,
  m30,
];

const ScrollCategories = () => {
  return (
    <>
      <div className={styles.controlDiv}>
        <div
          className={`${styles.slideSectionWrap} ${styles.headingSpaceControl} `}
        >
          <h2 className={styles.sectionHeadings}>Welcome to Community</h2>
        </div>
        <ControlledCarousel />
        <FlippingFullComponent
          SectionHeading="New Arrivals"
          DataArray={NewArrivalData}
          BookImgArray={booksImgArray}
        />
        <FlippingFullComponent
          SectionHeading="Exclusive Discounts"
          DataArray={NewArrivalData}
          BookImgArray={booksImgArray}
          BadgeContent={""}
        />

        <div className={styles.spacerimg}>
          <img className={styles.spacerimg__img} src={spacer2} alt="" />
        </div>
        <FlippingFullComponent
          SectionHeading="October Special"
          DataArray={NewArrivalData}
          BookImgArray={booksImgArray}
          BadgeContent={"Special"}
        />
        <div className={styles.slideSectionWrap}>
          <h2 className={styles.sectionHeadings}>Event Special</h2>
        </div>
        <div className={styles.layoutWrap}>
          <ColumnCardLayout
            extended={false}
            Array={NewArrivalData}
            imgArray={booksImgArray}
          />
        </div>

        <FlippingFullComponent
          SectionHeading="Best Sellers"
          DataArray={NewArrivalData}
          BookImgArray={booksImgArray}
          BadgeContent={""}
        />
        <div className={styles.slideSectionWrap}>
          <h2 className={styles.sectionHeadings}>Only For You</h2>
        </div>
        <div className={styles.layoutWrap}>
          <ColumnCardLayout
            extended={false}
            Array={NewArrivalData}
            imgArray={booksImgArray}
          />
        </div>
      </div>
      <Banner />
    </>
  );
};

export default ScrollCategories;
