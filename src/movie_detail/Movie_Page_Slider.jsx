import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import { Autoplay, EffectCoverflow, Pagination, Navigation } from "swiper";
import Movie_Page_Poster from "./Movie_Page_Poster";

const Movie_Page_Slider = () => {

  return (
    <Swiper
    effect={"coverflow"}
    grabCursor={true}
    navigation={true}
    pagination={{
      type: "fraction",
    }}
    autoplay={{
      delay: 5000
    }}
    coverflowEffect={{
      rotate: 100,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    }}
    modules={[Autoplay, EffectCoverflow, Pagination, Navigation]}
    className="mySwiper"
    >
      <Movie_Page_Poster />
    </Swiper>
  )
}

export default Movie_Page_Slider