import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import mainLinks from "./LinkNames";
import Home from "./components/pages/Home";
import SignUp from "./components/pages/SignUp";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Router>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />}></Route>
          {mainLinks.map((mainlink) => {
            return (
              <Route
                key={mainlink.id}
                path={mainlink.url}
                element={<mainlink.rfcname />}
              >
                {mainlink.subLinks.map((sublink) => {
                  return (
                    <Route
                      key={sublink.id}
                      path={`${mainlink.url}${sublink.url}`}
                      element={<sublink.rfcname />}
                    />
                  );
                })}
              </Route>
            );
          })}
          <Route path="/sign-up" element={<SignUp />}></Route>
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

// component that generates pages
