import { Routes, Route } from "react-router-dom";
import About from "./Container/HomePage/About";
import HomePage from "./Container/HomePage/HomePage";
import CarousselHero from "./Container/HomePage/herosection/CarousselHero";
import Information from "./Container/Information";
import Footer from "./component/Foooter/Footer";
import Navbar from "./component/Navbar";
import Separator from "./component/Separator";
import Contact from "./component/Contact/Contact";

export default function App() {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/information" element={<Information />} />
      </Routes>

      <Contact />
      <Footer />
    </div>
  );
}
