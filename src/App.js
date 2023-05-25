import React from "react";
import { v4 as uuidv4 } from "uuid";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import mainLinks from "./LinkNames";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar />} />
          {mainLinks.map((mainlink) => {
            return (
              <Route key={mainlink.id} path="/" element={<mainlink.text />}>
                {mainlink.subLinks.map((sublink) => {
                  <Route
                    key={sublink.id}
                    path="/"
                    element={<sublink.text />}
                  />;
                })}
              </Route>
            );
          })}
        </Routes>
      </BrowserRouter>
    </>
  );
}
