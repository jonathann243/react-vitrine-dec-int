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
