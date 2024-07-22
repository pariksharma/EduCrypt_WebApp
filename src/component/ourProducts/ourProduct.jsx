import React, { useState, useEffect } from "react";
import { prod_Ary } from "../../../public/assets/sampleArry";
import SliderProduct from "../slider/sliderProduct/sliderProduct";
import Slider from "react-slick";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { ProdscreenWidth } from "../../utils/helpers";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const OurProduct = ({ value, data }) => {
  const [showSlide, setShowSlide] = useState(5);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const changeWidth = () => {
      setShowSlide(ProdscreenWidth());
    };

    if (typeof window !== "undefined") {
      changeWidth();
      window.addEventListener("resize", changeWidth);

      setTimeout(() => {
        setIsLoading(true);
      }, 0);

      return () => {
        window.removeEventListener("resize", changeWidth);
      };
    }
  }, []);

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToScroll: 1,
    slidesToShow: showSlide,
    nextArrow: <IoIosArrowForward />,
    prevArrow: <IoIosArrowBack />,
  };

  if (value == "product") {
    return (
      <div className="container Product_container">
        <div className="heading_prod">
          <h1>Our Products</h1>
        </div>
        <div className="row align-items-center text-white prod_slider">
          {isLoading ? (
            <Slider {...settings}>
              {prod_Ary &&
                prod_Ary.map((item, index) => (
                  <SliderProduct value={item} key={index} />
                ))}
            </Slider>
          ) : (
            <div>Loading...</div> // Static fallback content for SSR
          )}
        </div>
      </div>
    );
  } else if (value == "faculties") {
    return <div className="row align-items-center text-white prod_slider">
      <Slider {...settings}>
        {data &&
          data.map((item, index) => (
            <div className="mb-3 ourfacultySection">
              <div className="card">
                <div>
                  {item.image && (
                    <img className="ourProImg" src={item.image} alt="" />
                  )}
                </div>
                <div className="text-center">
                  <p className="faculty_name">{item.name}</p>
                  <p className="faculty_role">{item.role}</p>
                </div>
              </div>
            </div>
          ))}
      </Slider>
    </div>;
  }
};

export default OurProduct;
