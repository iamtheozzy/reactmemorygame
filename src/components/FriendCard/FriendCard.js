import React from "react";
import "./FriendCard.css";

const FriendCard = props => (
  <div className="card">
    <div className="img-container">
      <img src={props.image} alt="Bob's Burger"/>
    </div>
  </div>
);

export default FriendCard;