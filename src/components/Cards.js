import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";

export default function Cards() {
  return (
    <div className="cards">
      <h2>Our Products</h2>
      <div className="cards-container">
        <div className="cards-wrapper">
          <ul className="cards-items">
            <CardItem
              src="images/healthcare.avif"
              text="a bag of water poured down the "
              label="Healthcare"
              path="/services"
            />
            <CardItem
              src="images/finance.png"
              text="a bag of water poured down the whole and i ae it"
              label="Finance"
              path="/services"
            />
          </ul>
          <ul className="cards-items large">
            <CardItem
              src="images/room.jpg"
              text="a bag of water poured down the "
              label="Retail"
              path="/services"
            />
            <CardItem
              src="images/room.jpg"
              text="a bag of water poured down the "
              label="Education"
              path="/services"
            />
            <CardItem
              src="images/room.jpg"
              text="a bag of water poured down the "
              label="Telco"
              path="/services"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}
