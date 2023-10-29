import React from "react";
import star from "../../assets/star.png";
import p1 from "../../assets/p1.png";
import p2 from "../../assets/p2.png";
import p3 from "../../assets/p4.png";

import "./Painting.scss"
function Painting() {
  return (
    <div className="painting">
      <div className="contianer">
        <img src={p1} alt="" classname="painting"/>
        <div className="details">
          <h3>Modern Wall Decor Painting</h3>
          <div className="price_rating">
            <p>$100</p>
            <div className="star">
              <img src={star} alt="" />
              <img src={star} alt="" />
              <img src={star} alt="" />
              <img src={star} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="contianer">
        <img src={p2} alt=""classname="painting" />
        <div className="details">
          <h3>Modern Wall Decor Painting</h3>
          <div className="price_rating">
            <p>$100</p>
            <div className="star">
              <img src={star} alt="" />
              <img src={star} alt="" />
              <img src={star} alt="" />
              <img src={star} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="contianer">
        <img src={p1} alt="" classname="painting"/>
        <div className="details">
          <h3>Modern Wall Decor Painting</h3>
          <div className="price_rating">
            <p>$100</p>
            <div className="star">
              <img src={star} alt="" />
              <img src={star} alt="" />
              <img src={star} alt="" />
              <img src={star} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Painting;
