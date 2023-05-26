import React from "react";
import { Link } from "react-router-dom";
import "./Cards.css";
export default function CardItem(props) {
  return (
    <>
      <li className="cards-item">
        <Link to={props.path} className="cards-item-link">
          <figure className="cards-item-pic-wrap" data-category={props.label}>
            <img src={props.src} alt="cat" className="cards-item-img"></img>
          </figure>
          <div className="cards-item-info">
            <h5 className="cards-item-text">{props.text}</h5>
          </div>
        </Link>
      </li>
    </>
  );
}
