import React, { useState } from "react";
import "./Slider.css";
import Boy1 from "../../images/boy1.png";
import Boy2 from "../../images/boy2.png";
import Boy3 from "../../images/book1.png";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";

function Slider() {
  const [slideIndex, setSlideIndex] = useState(0);

  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
  };

  return (
    <div className="slider-container">
      <BiChevronLeft
        onClick={() => handleClick("left")}
        className="arrow-left"
      />

      <div
        style={{ transform: `translateX(${slideIndex * -100}vw)` }}
        className="slider-wrapper"
      >
        <div className="slide first-slide">
          <div className="slide-img-wrapper">
            <img src={Boy1} alt="" />
          </div>
          <div className="slide-info-wrapper">
            <h1 className="slide-info-title">Book Store</h1>
            <p className="slide-info-desc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex,
              repellat.
            </p>
          </div>
        </div>

        <div className="slide second-slide">
          <div className="slide-img-wrapper">
            <img src={Boy2} alt="" />
          </div>
          <div className="slide-info-wrapper">
            <h1 className="slide-info-title">The Books For Everyone.</h1>
            <p className="slide-info-desc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex,
              repellat.
            </p>
          </div>
        </div>

        <div className="slide third-slide">
          <div className="slide-img-wrapper">
            <img src={Boy3} alt="" />
          </div>
          <div className="slide-info-wrapper">
            <h1 className="slide-info-title">It's A Library For Humans.</h1>
            <p className="slide-info-desc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex,
              repellat.
            </p>
          </div>
        </div>
      </div>

      <BiChevronRight
        onClick={() => handleClick("right")}
        className="arrow-right"
      />
    </div>
  );
}

export default Slider;
