import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import Elbe from "../../assets/images/references/elbe.webp";
import Hus from "../../assets/images/references/hus.webp";
import Luksh from "../../assets/images/references/luksh.webp";
import Nci from "../../assets/images/references/nci.webp";
import Oks from "../../assets/images/references/oks.webp";
import Strahlentherapie from "../../assets/images/references/strahlentherapie.webp";

const References = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 4,
    arrows: false,
    autoplay: true,

    responsive: [
      {
        breakpoint: 640,
        settings: {
          dots: false,
          infinite: true,
          speed: 1000,
          slidesToShow: 2,
          slidesToScroll: 2,
          arrows: false,
          autoplay: true,
        },
      },
    ],
  };

  return (
    <div className="w-10/12 m-auto mt-20">
      <div className="w-full sm:w-3/5 m-auto space-y-5 mb-14">
        <p className="tracking-widest text-gray-600 text-center">REFERENCES</p>
        <p className="text-center text-3xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur a
          porta urna.
        </p>
      </div>
      <Slider {...settings}>
        <div>
          <img src={Elbe} alt="" />
        </div>
        <div>
          <img src={Hus} alt="" />
        </div>
        <div>
          <img src={Luksh} alt="" />
        </div>
        <div>
          <img src={Nci} alt="" />
        </div>
        <div>
          <img src={Oks} alt="" />
        </div>
        <div>
          <img src={Strahlentherapie} alt="" />
        </div>
      </Slider>
    </div>
  );
};

export default References;
