import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import "../../../App.css";
import { Autoplay, Pagination, Navigation, EffectFade } from "swiper/modules";
import HeroReact1 from "./hero";
import backgroundImage3 from "../../../assets/professional-hero-.png";
import backgroundImage2 from "../../../assets/versatile-interior-designer.png";

export default function App() {
  const progressCircle = useRef<HTMLDivElement>(null);
  const progressContent = useRef<HTMLDivElement>(null);
  const onAutoplayTimeLeft = (_s: unknown, time: number, progress: number) => {
    if (progressCircle.current && progressContent.current) {
      progressCircle.current.style.setProperty("--progress", `${1 - progress}`);
      progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    }
  };
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        effect={"fade"}
        pagination={{
          clickable: true,
        }}
        speed={4500}
        modules={[Autoplay, Pagination, Navigation, EffectFade]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >
        <SwiperSlide>
          <HeroReact1 backgroundImage={backgroundImage2} />
        </SwiperSlide>
        <SwiperSlide>
          <HeroReact1 backgroundImage={backgroundImage3} />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
