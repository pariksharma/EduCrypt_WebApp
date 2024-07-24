import React, { useEffect, useState } from 'react'
import Header from '@/component/header/header'
import Banner from '@/component/banner/banner'
import TrendingCourses from '@/component/trendingCourses/trendingCourses'
import Free_Test_Course from '@/component/freeTest&Course/freeTest&Course'
import OurProduct from '@/component/ourProducts/ourProduct'
import Blogs from '@/component/blogs/blogs'
import Testimonial from '@/component/testimonial/testimonial'
import GetInTouch from '@/component/getInTouch/getInTouch'
import Footer from '@/component/footer/footer'
import { getCourse_Catergory_Service } from '@/services'

const index = () => {

  const [bannerList, setBannerList] = useState(null)

  useEffect(() => {
    fetchContentData();
  }, [])


  const fetchContentData = async () => {
    const formData = new FormData();
    const response_content_service = await getCourse_Catergory_Service(formData)
    // console.log('response', response_content_service.data)
    if(response_content_service.data.status){
      const bannerData = response_content_service.data.data.banner_list
      setBannerList(bannerData)
    }
  }
  return (
    <>
        <Header />
        <Banner value = {bannerList} />
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