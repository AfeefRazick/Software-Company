import React from "react";
import Services from "./components/pages/Services";
import Products from "./components/pages/Products";
import Careers from "./components/pages/Careers";
import AboutUs from "./components/pages/AboutUs";
import Resources from "./components/pages/Resources";
const mainLinks = [
  {
    id: 1,
    url: "/services",
    text: "Services",
    rfcname: Services,
    subLinks: [
      {
        id: 1.1,
        url: "/web-development",
        text: "Web Development",
        rfcname: "WebDevelopment",
      },
      {
        id: 1.2,
        url: "/mobile-applications",
        text: "Mobile Applications",
        rfcname: "MobileApplications",
      },
      {
        id: 1.3,
        url: "/cloud-enablement",
        text: "Cloud Enablement",
        rfcname: "CloudEnablement",
      },
      {
        id: 1.4,
        url: "/machine-learning",
        text: "Machine Learning",
        rfcname: "MachineLearning",
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
        url: "/healthcare",
        text: "Healthcare",
        rfcname: "Healthcare",
      },
      {
        id: 2.2,
        url: "/finance",
        text: "Finance",
        rfcname: "Finance",
      },
      {
        id: 2.3,
        url: "/retail",
        text: "Retail",
        rfcname: "Retail",
      },
      {
        id: 2.4,
        url: "/education",
        text: "Education",
        rfcname: "Education",
      },
      {
        id: 2.5,
        url: "/telco",
        text: "Telco",
        rfcname: "Telco",
      },
    ],
  },

  {
    id: 3,
    url: "/resources",
    text: "Resources",
    rfcname: Resources,
    subLinks: [
      {
        id: 3.1,
        url: "/blog",
        text: "Blog",
        rfcname: "Blog",
      },
      {
        id: 3.2,
        url: "/library",
        text: "Library",
        rfcname: "Library",
      },
      {
        id: 3.3,
        url: "/documentation",
        text: "Documentation",
        rfcname: "Documentation",
      },
    ],
  },
  {
    id: 4,
    url: "/about-us",
    text: "About Us",
    rfcname: AboutUs,
    subLinks: [
      {
        id: 4.1,
        url: "/community",
        text: "Community",
        rfcname: "Community",
      },
      {
        id: 4.2,
        url: "/careers",
        text: "Careers",
        rfcname: Careers,
      },
      {
        id: 4.3,
        url: "/our-team",
        text: "Our Team",
        rfcname: "OurTeam",
      },
      {
        id: 4.4,
        url: "/contact-us",
        text: "Contact Us",
        rfcname: "ContactUs",
      },
    ],
  },
];
export default mainLinks;
