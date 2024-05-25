import { Routes, Route } from "react-router-dom";
import HomePage from "./Container/HomePage/HomePage";
import Information from "./Container/Information";
import Footer from "./component/Foooter/Footer";
import Navbar from "./component/Navbar";
import Contact from "./component/Contact/Contact";
import ContactExplain from "./Contact-Explain";
import PrivacyPolicy from "./confidentiality";

export default function App() {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/information" element={<Information />} />
        <Route path="/contact" element={<ContactExplain />} />
        <Route path="/company" element={<PrivacyPolicy />} />
      </Routes>
      <div id="contact">
        <Contact />
      </div>
      <Footer />
    </div>
  );
}
