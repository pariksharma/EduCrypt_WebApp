import React, { useState, useEffect, useRef } from "react";
import Header from "../../component/header/header";
import Footer from "../../component/footer/footer";
import { useRouter } from "next/router";

import { freeCourseAry } from "../../../public/assets/sampleArry";
import Card1 from "@/component/cards/card1";

const OC_image = '/assets/images/OC_title1.png';


const tiles = ["Course Detail", "Course Curriculum", "PDF's", "Group Chat"];

const OnlineCourse = () => {
  const [key, setKey] = useState("Course Detail");

  const resetPdfLayerRef = useRef();
  const resetCourseCurriculumLayerRef = useRef();
  const Router = useRouter()

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])


  const handleTabChange = (k) => {
    setKey(k);
    if (resetPdfLayerRef.current) {
      resetPdfLayerRef.current.click();
    }
    if (resetCourseCurriculumLayerRef.current) {
      resetCourseCurriculumLayerRef.current.click();
    }
  }

  
  return (
    <>
      <Header />
      <div className="container-fluid p-0" style={{overflow: 'hidden'}}>
        <div className="course_titleContainer row">
          <div className="col-7 container breadcrumb_container1">
            <nav aria-label="breadcrumb ">
              <ol className="breadcrumb mb-2 cursor">
                <li className="breadcrumb-item" onClick={() => Router.push("/")}>
                  Home
                </li>
                <li
                  className="breadcrumb-item active"
                  onClick={() => navigate("/online-courses")}
                >
                  All Courses
                </li>
                {/* {courseDetails && <li className="breadcrumb-item highlight">{courseDetails.course_detail.title}</li>} */}
              </ol>
            </nav>
            <div className="onlineCourseTitle">
              <p className="title">Online Courses</p>
              <p className="onlineCourseDetail">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, neque nihil! Animi nam cum natus neque cumque consequatur iusto quidem dolorem ex facere debitis odio repudiandae asperiores reprehenderit quia qui, officiis expedita repellat est.</p>
            </div>
          </div>
          <div className="col-5 course_imageContainer">
            <div className="imgContainer">
              <img src={OC_image} alt="" />
            </div>
          </div>
        </div>
        <div className="course_mainContainer tabs_design__">
          <nav className="m-0 p-0">
            <div className="container onlineCourse">
              <Card1 />
              <Card1 />
              <Card1 />
              <Card1 />
              <Card1 />
              <Card1 />
            </div>
          </nav>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default OnlineCourse;




const course_detail = "In this course, Talvir Singh will cover the syllabus of Communication . All the topics will be discussed in detail which will be helpful for all aspirants preparing for the NTA UGC-NET exam. Learners at any stage will be benefited from the course. The course will be conducted in Hindi and the notes will be provided in Hindi. In this course, Talvir Singh will cover the syllabus of Communication . All the topics will be discussed in detail which will be helpful for all aspirants preparing for the NTA UGC-NET exam. Learners at any stage will be benefited from the course. The course will be conducted in Hindi and the notes will be provided in Hindi.In this course, Talvir Singh will cover the syllabus of Communication . All the topics will be discussed in detail which will be helpful for all aspirants preparing for the NTA UGC-NET exam. Learners at any stage will be benefited from the course. The course will be conducted in Hindi and the notes will be provided in Hindi.."