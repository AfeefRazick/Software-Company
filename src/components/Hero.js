import React from "react";
import "../App.css";
import Button from "./Button.js";
import "./Hero.css";
import { FaPlay } from "react-icons/fa";
import { BsSend } from "react-icons/bs";
function Hero() {
  return (
    <div className="hero-container">
      <h1>We create impactful digital products</h1>
      <p>Let our team of engineers bring your ideas to life</p>
      <div className="hero-btns">
        <Button
          className="btn"
          buttonStyle="btn-primary"
          buttonSize="btn-large"
        >
          Let's Talk
          <BsSend className="send-icon" />
        </Button>
        <Button
          className="btn"
          buttonStyle="btn-outline"
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
