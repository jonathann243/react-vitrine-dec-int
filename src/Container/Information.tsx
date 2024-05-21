import Contact from "../component/Contact/Contact";
import Footer from "../component/Foooter/Footer";
import Navbar from "../component/Navbar";
import Separator from "../component/Separator";
import Services from "./HomePage/Services";
import Portfolio from "./HomePage/Portfolio";

export default function Information() {
  return (
    <div>
      <Services />
      <Separator />
      <Portfolio />
    </div>
  );
}
