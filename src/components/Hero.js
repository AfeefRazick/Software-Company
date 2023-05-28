import React from "react";
import "../App.css";
import Button from "./Button.js";
import "./Hero.css";
import { FaPlay } from "react-icons/fa";

function Hero() {
  return (
    <div className="hero-container">
      <h1>Welcome to Bogus Corporation</h1>
      <p>We help create impactful digital products</p>
      <p></p>
      <div className="hero-btns">
        <Button
          className="btn"
          buttonStyle="btn-outline"
          buttonSize="btn-large"
        >
          Let's Talk
          <FaPlay />
        </Button>
        <Button
          className="btn"
          buttonStyle="btn-primary"
          buttonSize="btn-large"
        >
          See our work
          <FaPlay className="play-icon" />
        </Button>
      </div>
    </div>
  );
}

export default Hero;
