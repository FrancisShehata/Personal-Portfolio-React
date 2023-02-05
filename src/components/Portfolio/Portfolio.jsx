import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import { themeContext } from "../../Context";
import Concordia from "../../img/Concordia.png";
const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <span style={{color: darkMode?'white': ''}}>Projects Done!</span>
      <span></span>

      {/* slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
          <img src={Concordia} alt=" Concordia Project" />
        </SwiperSlide>

        <SwiperSlide>
         <img src={Concordia} alt=" Concordia Project" />
        </SwiperSlide>
        <SwiperSlide>
        <img src={Concordia} alt=" Concordia Project" />
        </SwiperSlide>
        <SwiperSlide>
        <img src={Concordia} alt=" Concordia Project" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;
