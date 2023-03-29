import React from "react";
import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";

function Rating({ rating }) {
  return (
    <div className="rating">
      {rating >= 1 ? (
        <BsStarFill />
      ) : rating >= 0.5 ? (
        <BsStarHalf />
      ) : (
        <BsStar />
      )}
      {rating >= 2 ? (
        <BsStarFill />
      ) : rating >= 1.5 ? (
        <BsStarHalf />
      ) : (
        <BsStar />
      )}
      {rating >= 3 ? (
        <BsStarFill />
      ) : rating >= 2.5 ? (
        <BsStarHalf />
      ) : (
        <BsStar />
      )}
      {rating >= 4 ? (
        <BsStarFill />
      ) : rating >= 3.5 ? (
        <BsStarHalf />
      ) : (
        <BsStar />
      )}
      {rating >= 5 ? (
        <BsStarFill />
      ) : rating >= 4.5 ? (
        <BsStarHalf />
      ) : (
        <BsStar />
      )}
    </div>
  );
}

export default Rating;
