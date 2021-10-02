import React from "react";
import Carousel from "react-bootstrap/Carousel";
import carousel1large from "../../../Assets/Images/carousel1large.jpg";
import carousel2large from "../../../Assets/Images/carousel2large.png";
import carousel3large from "../../../Assets/Images/carousel3large.jpg";
import styles from "./Carousel.module.css";

function ControlledCarousel() {
  const [index, setIndex] = React.useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div className={styles.spaceControl}>
      <Carousel interval="2000" activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={carousel1large}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={carousel2large}
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={carousel3large}
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default ControlledCarousel;
