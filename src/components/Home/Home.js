import React, { useState } from "react";

import "./Home.css";
import Header from "../Header/Header";
import Items from "../Product/ProductMain/Items";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Banner1 from "../../images/Banner1.jpeg";
import Banner2 from "../../images/Banner2.jpg";
import Banner3 from "../../images/Banner3.jpg";
import Banner4 from "../../images/Banner4.jpg";
import items from "../../utils/listOfItems";

function Home() {
  const [search, setSearch] = useState("");
  const settings = {
    infinite: true,
    speed: 500,
    lazyLoad: "progressive",
    slidesToShow: 1,
    adaptiveHeight: true,
    slidesToScroll: 1,
    autoplay: true,
  };
  const curr = items.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <div>
      <Header search={search} setSearch={setSearch} />
      <div className="home">
        <Slider {...settings}>
          <div>
            <img
              src={Banner1}
              alt="Amazon Products"
              className="carousel__image"
            />
          </div>
          <div>
            <img
              src={Banner2}
              alt="Amazon Products"
              className="carousel__image"
            />
          </div>
          <div>
            <img
              src={Banner3}
              alt="Amazon Products"
              className="carousel__image blue_image"
            />
          </div>
          <div>
            <img
              src={Banner4}
              alt="Amazon Products"
              className="carousel__image blue_image"
            />
          </div>
        </Slider>
        <div className="home__row">
          <Items items={curr} />
        </div>
      </div>
    </div>
  );
}

export default Home;
