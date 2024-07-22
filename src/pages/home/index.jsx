import React from 'react'
import Header from '@/component/header/header'
import Banner from '@/component/banner/banner'
import TrendingCourses from '@/component/trendingCourses/trendingCourses'
import Free_Test_Course from '@/component/freeTest&Course/freeTest&Course'
import OurProduct from '@/component/ourProducts/ourProduct'
import Blogs from '@/component/blogs/blogs'
import Testimonial from '@/component/testimonial/testimonial'
import GetInTouch from '@/component/getInTouch/getInTouch'
import Footer from '@/component/footer/footer'

const index = () => {
  return (
    <>
        <Header />
        <Banner />
        <TrendingCourses />
        <Free_Test_Course />
        <OurProduct value = "product" />
        <Blogs />
        <Testimonial />
        <GetInTouch />
        <Footer />
    </>
  )
}

export default index