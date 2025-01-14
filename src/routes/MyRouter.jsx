import React from "react";
import { Routes, Route } from "react-router-dom";
import Accueil from "../pages/Accueil/Accueil";
import Apropos from "../pages/Apropos/Apropos";
import Contact from "../pages/Contact/Contact";
import Projets from "../pages/Projets/Projets";

const MyRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Accueil />} />
      <Route path="/apropos" element={<Apropos />} />
      <Route path="/projets" element={<Projets />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
};

export default MyRouter;
