import React from "react";
import { v4 as uuidv4 } from "uuid";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import mainLinks from "./LinkNames";
import Home from "./components/pages/Home";
import Services from "./components/pages/Services";
import SignUp from "./components/pages/SignUp";

export default function App() {
  return (
    <>
      <BrowserRouter>
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
      </BrowserRouter>
    </>
  );
}
