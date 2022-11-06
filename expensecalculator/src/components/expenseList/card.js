import React from "react";
import "./card.css";
const Card = ({ item }) => {
  console.log("card da item", item);
  return (
    <div className="card">
      <div className="leftSideContainer">
        <img src={item.category.icon} className="cardImage" alt="icn" />
        <div className="leftdets">
          <div className="title">{item.title}</div>
          <div>{item.createdAt}</div>
        </div>
      </div>
    </div>
  );
};

export default Card;
