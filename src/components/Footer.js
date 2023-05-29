import React from "react";
import Button from "./Button";
import "./Footer.css";
import { v4 as uuidv4 } from "uuid";
import mainLinks from "../LinkNames";
import {
  FaFacebookSquare,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {
  let sublists = [mainLinks.slice(0, 2), mainLinks.slice(2)];
  return (
    <div className="footer-container">
      <section className="footer-subscription">
        <p className="footer-subscription-heading">
          Sign Up for our Newsletter
        </p>
        <p className="footer-subscription-text">To receive weekly updates</p>

        <form className="input-areas">
          <input
            type="email"
            name="email"
            placeholder="example@gmail.com"
            className="footer-input"
          ></input>
          <Button buttonSize="btn-footer" buttonStyle="btn-outline">
            Sign Up
          </Button>
        </form>
      </section>
      <footer className="footer-links">
        {sublists.map((sublist) => {
          return (
            <div key={uuidv4()} className="footer-link-wrapper">
              {sublist.map((mainlink) => {
                return (
                  <div key={uuidv4()} className="footer-link-items">
                    <h2>{mainlink.text}</h2>
                    {mainlink.subLinks.map((sublink) => {
                      return (
                        <Link
                          key={sublink.id}
                          to={`${mainlink.url}${sublink.url}`}
                        >
                          {sublink.text}
                        </Link>
                      );
                    })}
                  </div>
                );
              })}
            </div>
          );
        })}
      </footer>
      <div className="social-media">
        <small className="website-rights">Copyright © 2023 Bogus Corp</small>
        <div className="social-logo">
          <Link>
            <FaFacebookSquare to="/" className="social-media-link" />
          </Link>
          <Link>
            <FaInstagram to="/" className="social-media-link" />
          </Link>
          <Link>
            <FaTwitter to="/" className="social-media-link" />
          </Link>
          <Link>
            <FaLinkedin to="/" className="social-media-link" />
          </Link>
        </div>
      </div>
    </div>
  );
}
