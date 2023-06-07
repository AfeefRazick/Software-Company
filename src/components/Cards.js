import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";

export default function Cards() {
  return (
    <div className="cards">
      <h2>Our Products</h2>
      <h3>By Industry</h3>
      <div className="cards-container">
        <div className="cards-wrapper">
          <ul className="cards-items">
            <CardItem
              src={process.env.PUBLIC_URL + "/images/healthcare.avif"}
              text="Transforming Healthcare Through Technology "
              label="Healthcare"
              path="/products"
            />
            <CardItem
              src={process.env.PUBLIC_URL + "/images/finance.png"}
              text="Leading the FinTech Revolution"
              label="Finance"
              path="/products"
            />
          </ul>
          <ul className="cards-items large">
            <CardItem
              src={process.env.PUBLIC_URL + "/images/education.jpg"}
              text="Smart Solutions for Modern Education "
              label="Education"
              path="/products"
            />
            <CardItem
              src={process.env.PUBLIC_URL + "/images/retail.png"}
              text="Manage Rapid Growth with custom Software Solutions"
              label="Retail"
              path="/products"
            />
            <CardItem
              src={process.env.PUBLIC_URL + "/images/telco.webp"}
              text="Driving Connectivity and Efficiency with Innovative Telco Solutions"
              label="Telco"
              path="/products"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}
