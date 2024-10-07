import React from "react";
import Header from "./Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Projet from "../pages/Projet";
import Footer from "./Footer";
import Error404 from "../pages/Error404";
import Contact from "../pages/Contact";

const App = () => {
  const basename = import.meta.env.MODE === 'production' ? '/bmwebdev' : '';
  return (
    <BrowserRouter basename= {basename}>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projet/:id" element={<Projet />} />
        <Route path="*" element={<Error404 />} />
        <Route path="/Error404" element={<Error404 />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
};

export default App;