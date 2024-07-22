import React, { useState, useEffect } from 'react';
import Slider from "react-slick";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { trendCourseAry } from '../../../public/assets/sampleArry';
import { ScreenWidth } from '../../utils/helpers';
import SliderTrend from '../slider/sliderTrend/sliderTrend';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const trendImg = '/assets/images/trending.svg';

const TrendingCourses = () => {
    const [showSlide, setShowSlide] = useState(4);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const changeWidth = () => {
            setShowSlide(ScreenWidth());
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
        dots: false,
        infinite: false,
        speed: 500,
        slidesToScroll: 1,
        slidesToShow: showSlide,
        nextArrow: <IoIosArrowForward />,
        prevArrow: <IoIosArrowBack />,
    };

    return (
        <div className='container trendContainer'>
            <div className='trending_heading'>
                {trendImg && <img src={trendImg} alt='img' />}
                <h1>Trending Courses</h1>
            </div>
            <div className="row align-items-center justify-content-center sldr_container">
                {isLoading && trendCourseAry ? (
                    <Slider {...settings}>
                        {trendCourseAry.map((item, index) => {
                            return <SliderTrend value={item} key={index} />
                        })}
                    </Slider>
                ) : (
                    <div className="spinner-border" role="status" /> // Static fallback content for SSR
                )}
            </div>
        </div>
    );
};

export default TrendingCourses;
