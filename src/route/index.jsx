import React, { useEffect, useState } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Home from '../pages/home'
// import { profileMap } from '../assets/sampleArry'
// import NoPageFound from '../components/noPageFound/noPageFound'
// import ViewDetail from '../pages/viewDetail/viewDetail';
// import OnlineCourse from '../pages/onlineCourses/onlineCourses'

const RoutePage = ({tenantName}) => {

  const [profile, setProfile] = useState({})

//   useEffect(() => {
//     setProfile(profileMap[tenantName]);
//   }, [tenantName])


//   if(profile){

  return (
    <>
        {/* <Routes> */}
            {/* <Route exact path='/' element={<Home />} /> */}
            {/* <Route exact path='/ViewDetail/:id' element={<ViewDetail />} />
            <Route exact path='/online-Courses' element = {<OnlineCourse />} /> */}
        {/* </Routes> */}
        <Home />
    </>
  )
// }
}

export default RoutePage