import React from "react";
import Services from "./components/pages/Services";
import Products from "./components/pages/Products";
import SignUp from "./components/pages/SignUp";
import AboutUs from "./components/pages/AboutUs";

const mainLinks = [
  {
    id: 1,
    url: "/services",
    text: "Services",
    rfcname: Services,
    subLinks: [
      {
        id: 1.1,
        url: "/eating",
        text: "Eating",
        rfcname: "Eating",
      },
      {
        id: 1.2,
        url: "/drinking",
        text: "Drinking",
        rfcname: "Drinking",
      },
      {
        id: 1.3,
        url: "/sleeping",
        text: "Sleeping",
        rfcname: "Sleeping",
      },
    ],
  },
  {
    id: 2,
    url: "/products",
    text: "Products",
    rfcname: Products,

    subLinks: [
      {
        id: 2.1,
        url: "/digging",
        text: "Digging",
        rfcname: "Digging",
      },
      {
        id: 2.2,
        url: "/networking",
        text: "Networking",
        rfcname: "Networking",
      },
      {
        id: 2.3,
        url: "design",
        text: "Design",
        rfcname: "Design",
      },
    ],
  },
  {
    id: 3,
    url: "/about-us",
    text: "About Us",
    rfcname: AboutUs,
    subLinks: [
      {
        id: 3.1,
        url: "/history",
        text: "History",
        rfcname: "History",
      },
      {
        id: 3.2,
        url: "/careers",
        text: "Careers",
        rfcname: "Careers",
      },
      {
        id: 3.3,
        url: "/our-team",
        text: "Our Team",
        rfcname: "OurTeam",
      },
    ],
  },
];
export default mainLinks;
