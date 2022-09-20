import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import ReactStars from "react-rating-stars-component";
import Client1 from "../../assets/images/clients/client1.jpg";
import Client2 from "../../assets/images/clients/client2.jpg";
import Client3 from "../../assets/images/clients/client3.jpg";
import Client4 from "../../assets/images/clients/client4.jpg";
import Client5 from "../../assets/images/clients/client5.jpg";
import Client6 from "../../assets/images/clients/client6.jpg";

const Testimonials = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
  };

  return (
    <div className="bg-red-600 py-20 mt-20">
      <div className="w-10/12 m-auto text-gray-100">
        <div className="text-center space-y-5">
          <p className="text-xl tracking-wide">A GOOD WORD MEANS A LOT</p>
          <p className="text-5xl tracking-wide">
            Patient <strong className="text-gray-900">testimonials</strong>
          </p>
          <p>
            It’s always the word of mouth that’s the best advice. Here are some
            of our…
          </p>
        </div>
        <div className="mt-10">
          <Slider {...settings}>
            <div>
              <img src={Client1} alt="" className="w-48 m-auto rounded-full" />
              <div className="text-center mt-5 w-4/5 m-auto">
                <p className="text-xl mb-2">Emma Eva</p>
                <div className="flex justify-center mb-3">
                  <ReactStars
                    {...{
                      size: 20,
                      value: 5,
                      count: 5,
                      activeColor: "yellow",
                      a11y: true,
                      isHalf: true,
                      edit: false,
                    }}
                  />
                </div>
                <p className="text-sm font-thin">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Curabitur a porta urna. Nulla pharetra ante ac posuere tempor.
                  Morbi mattis iaculis nulla, ac condimentum libero euismod
                  molestie.Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit.
                </p>
              </div>
            </div>
            <div>
              <img src={Client2} alt="" className="w-48 m-auto rounded-full" />
              <div className="text-center mt-5 w-4/5 m-auto">
                <p className="text-xl mb-2">Emma Eva</p>
                <div className="flex justify-center mb-3">
                  <ReactStars
                    {...{
                      size: 20,
                      value: 5,
                      count: 5,
                      activeColor: "yellow",
                      a11y: true,
                      isHalf: true,
                      edit: false,
                    }}
                  />
                </div>
                <p className="text-sm font-thin">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Curabitur a porta urna. Nulla pharetra ante ac posuere tempor.
                  Morbi mattis iaculis nulla, ac condimentum libero euismod
                  molestie.Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit.
                </p>
              </div>
            </div>
            <div>
              <img src={Client3} alt="" className="w-48 m-auto rounded-full" />
              <div className="text-center mt-5 w-4/5 m-auto">
                <p className="text-xl mb-2">Emma Eva</p>
                <div className="flex justify-center mb-3">
                  <ReactStars
                    {...{
                      size: 20,
                      value: 5,
                      count: 5,
                      activeColor: "yellow",
                      a11y: true,
                      isHalf: true,
                      edit: false,
                    }}
                  />
                </div>
                <p className="text-sm font-thin">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Curabitur a porta urna. Nulla pharetra ante ac posuere tempor.
                  Morbi mattis iaculis nulla, ac condimentum libero euismod
                  molestie.Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit.
                </p>
              </div>
            </div>
            <div>
              <img src={Client4} alt="" className="w-48 m-auto rounded-full" />
              <div className="text-center mt-5 w-4/5 m-auto">
                <p className="text-xl mb-2">Emma Eva</p>
                <div className="flex justify-center mb-3">
                  <ReactStars
                    {...{
                      size: 20,
                      value: 5,
                      count: 5,
                      activeColor: "yellow",
                      a11y: true,
                      isHalf: true,
                      edit: false,
                    }}
                  />
                </div>
                <p className="text-sm font-thin">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Curabitur a porta urna. Nulla pharetra ante ac posuere tempor.
                  Morbi mattis iaculis nulla, ac condimentum libero euismod
                  molestie.Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit.
                </p>
              </div>
            </div>
            <div>
              <img src={Client5} alt="" className="w-48 m-auto rounded-full" />
              <div className="text-center mt-5 w-4/5 m-auto">
                <p className="text-xl mb-2">Emma Eva</p>
                <div className="flex justify-center mb-3">
                  <ReactStars
                    {...{
                      size: 20,
                      value: 5,
                      count: 5,
                      activeColor: "yellow",
                      a11y: true,
                      isHalf: true,
                      edit: false,
                    }}
                  />
                </div>
                <p className="text-sm font-thin">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Curabitur a porta urna. Nulla pharetra ante ac posuere tempor.
                  Morbi mattis iaculis nulla, ac condimentum libero euismod
                  molestie.Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit.
                </p>
              </div>
            </div>
            <div>
              <img src={Client6} alt="" className="w-48 m-auto rounded-full" />
              <div className="text-center mt-5 w-4/5 m-auto">
                <p className="text-xl mb-2">Emma Eva</p>
                <div className="flex justify-center mb-3">
                  <ReactStars
                    {...{
                      size: 20,
                      value: 5,
                      count: 5,
                      activeColor: "yellow",
                      a11y: true,
                      isHalf: true,
                      edit: false,
                    }}
                  />
                </div>
                <p className="text-sm font-thin">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Curabitur a porta urna. Nulla pharetra ante ac posuere tempor.
                  Morbi mattis iaculis nulla, ac condimentum libero euismod
                  molestie.Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit.
                </p>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
