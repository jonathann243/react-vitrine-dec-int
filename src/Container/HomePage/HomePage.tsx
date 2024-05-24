import CarousselHero from "./herosection/CarousselHero";
import Separator from "../../component/Separator";
import HomeDesc from "./HomeDesc";

export default function HomePage() {
  return (
    <div>
      <CarousselHero />
      <HomeDesc />
      <Separator />
    </div>
  );
}
