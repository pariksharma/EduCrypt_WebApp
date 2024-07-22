import React, { useState, useCallback, lazy, Suspense } from 'react';
import Carousel from "react-bootstrap/Carousel"
import { bannerAry } from '../../../public/assets/sampleArry';
import CarouselItem from './carouselItem';
// import  './carouselItem.module.css'
// import "@/styles/globals.css";


const Banner = () => {
    const [index, setIndex] = useState(0);
    console.log(bannerAry)

    const handleSelect = useCallback((selectedIndex) => {
        setIndex(selectedIndex);
    }, []);

    return (
        <div className='container'>
            <div className="row align-items-center ">
                <div className={`owl-carousel owl-theme owl_custom owl-loaded owl-drag `}>
                    <Carousel
                        controls={false}
                        activeIndex={index}
                        onSelect={handleSelect}
                        className="owl-theme owl_custom owl-loaded owl-drag result p-0"
                        data-bs-touch="false"
                    >
                        {bannerAry &&
                            bannerAry.map((item, index) => (
                                <Carousel.Item key={index}>
                                    <CarouselItem value = {item} />
                                </Carousel.Item>
                            ))}
                    </Carousel>
                </div>
            </div>
        </div>
    );
}

export default Banner;
