import React from "react";
import Navbar from "../../component/Navbar";
import CarousselHero from "./herosection/CarousselHero";
import Footer from "../../component/Foooter/Footer";
import About from "./About";
import Portfolio from "./Portfolio";
import Services from "./Services";
import Contact from "../../component/Contact/Contact";
import Separator from "../../component/Separator";
import { Routes, Route } from "react-router-dom";
import Information from "../Information";
import Widget from "../widght";

export default function HomePage() {
  return (
    <div>
      <CarousselHero />
      <Separator />
    </div>
  );
}
