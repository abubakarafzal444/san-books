import React from "react";
import { useSelector } from "react-redux";
import FlippingFullComponent from "../../../Shared/FlippingFullComponent";

import styles from "./ScrollCategoriesAndFullFlipping.module.css";
import ColumnCardLayout from "../../../Shared/ColumnCardLayout";
import Banner from "../Sections/Banner";

import ControlledCarousel from "./Carousel";
import spacer2 from "../../../Assets/Images/spacer2.webp";

const ScrollCategories = () => {
  const NewArrivalData = useSelector((state) => state.data?.newArrivalData);
  const SaleData = useSelector((state) => state.data.saleData);
  const MonthSpecialData = useSelector((state) => state.data.monthSpecialData);
  const EventSpecialData = useSelector((state) => state.data.eventSpecialData);
  const BestSeller = useSelector((state) => state.data.bestSellerData);

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
          BadgeContent={""}
          link={"/"}
        />
        <FlippingFullComponent
          SectionHeading="Exclusive Discounts"
          DataArray={SaleData}
          BadgeContent={""}
          link={"/"}
        />

        <div className={styles.spacerimg}>
          <img className={styles.spacerimg__img} src={spacer2} alt="" />
        </div>
        <FlippingFullComponent
          SectionHeading={`${new Date().toLocaleString("default", {
            month: "long",
          })} Special`}
          DataArray={MonthSpecialData}
          BadgeContent={"Special"}
          link={"/"}
        />
        <div className={styles.slideSectionWrap}>
          <h2 className={styles.sectionHeadings}>Event Special</h2>
        </div>
        <div className={styles.layoutWrap}>
          <ColumnCardLayout
            extended={false}
            Array={EventSpecialData}
            link={"/"}
          />
        </div>

        <FlippingFullComponent
          SectionHeading="Best Sellers"
          DataArray={BestSeller}
          BadgeContent={""}
          link={"/"}
        />
        <div className={styles.slideSectionWrap}>
          <h2 className={styles.sectionHeadings}>Only For You</h2>
        </div>
        <div className={styles.layoutWrap}>
          <ColumnCardLayout extended={false} Array={SaleData} link={"/"} />
        </div>
      </div>
      <Banner />
    </>
  );
};

export default ScrollCategories;
