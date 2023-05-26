import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";

export default function Cards() {
  return (
    <div className="cards">
      <h2>Look at these cool things</h2>
      <div className="cards-container">
        <div className="cards-wrapper">
          <ul className="cards-items">
            <CardItem
              src="images/room.jpg"
              text="a bag of water poured down the "
              label="pooper"
              path="/services"
            />
            <CardItem
              src="images/room.jpg"
              text="a bag of water poured down the whole and i ae it"
              label="pooper"
              path="/services"
            />
          </ul>
          <ul className="cards-items">
            <CardItem
              src="images/room.jpg"
              text="a bag of water poured down the "
              label="pooper"
              path="/services"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}
