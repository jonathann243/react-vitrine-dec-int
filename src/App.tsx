import { Routes, Route } from "react-router-dom";
import HomePage from "./Container/HomePage/HomePage";
import Information from "./Container/Information";
import Footer from "./component/Foooter/Footer";
import Navbar from "./component/Navbar";
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
