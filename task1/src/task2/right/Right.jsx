import React from "react";
import { rightData } from "../Rightbar";
import "./Right.scss";
function Right() {
  return (
    <div className="rightBar">
      <div className="top">
        <button>Become a seller</button>
      </div>
      <div className="bottom">
        <div className="fields">
          <p>Artists</p>
          <p>Photographs</p>
        </div>
        {rightData.map((data) => (
          <div className="side-image">
            <img src={data.image} alt="" className="bg" />
            <div className="on-bg">
              <img src={data.pp} alt="" className="pp" />
              <div className="details">
              <h3>{data.name}</h3>
              <p>{data.username}</p>
              </div>
                
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Right;
