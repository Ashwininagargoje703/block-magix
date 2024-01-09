// App.js
import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "./components/About";
import Services from "./components/Services";
import Pricing from "./components/Pricing";
import Contact from "./components/Contact";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<About />} />
      <Route path="/services" element={<Services />} />
      <Route path="/pricing" element={<Pricing />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
};

export default App;
