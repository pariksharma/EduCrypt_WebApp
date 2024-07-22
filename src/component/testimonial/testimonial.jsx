// pages/testimonial.js
import React, { useState, useEffect } from 'react';
import Slider from "react-slick";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { testimonial_Ary } from '../../../public/assets/sampleArry';
import SliderTestimonial from '../slider/sliderTestimonial/sliderTestimonial';
import { TestScreenWidth } from '../../utils/helpers';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Testimonial = () => {
    const [showSlide, setShowSlide] = useState(3);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const changeWidth = () => {
            setShowSlide(TestScreenWidth());
        };

        changeWidth();
        window.addEventListener("resize", changeWidth);

        setTimeout(() => {
            setIsLoading(true);
        }, 0);

        return () => {
            window.removeEventListener("resize", changeWidth);
        };
    }, []);

    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        dots: true,
        centerPadding: "0px",
        slidesToShow: showSlide,
        speed: 500,
        nextArrow: <IoIosArrowForward />,
        prevArrow: <IoIosArrowBack />,
    };

    return (
        <div className='container mb-3 test_container'>
            <div className='testimonial_heading'>
                <h1>Testimonials</h1>
                <div>Lorem Ipsum is simply dummy text of the printing</div>
            </div>
            <div className='container-fluid'>
                {isLoading ? (
                    <Slider {...settings}>
                        {testimonial_Ary && testimonial_Ary.map((item, index) => {
                            return <SliderTestimonial value={item} key={index} />
                        })}
                    </Slider>
                ) : (
                    <div>Loading...</div> // Static fallback content for SSR
                )}
            </div>
        </div>
    );
};

export default Testimonial;
