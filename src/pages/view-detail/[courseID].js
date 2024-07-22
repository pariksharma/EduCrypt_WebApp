import React, { useState, useEffect, useRef } from "react";
import Header from "../../component/header/header";
import Footer from "../../component/footer/footer";
import { LiaYoutube } from "react-icons/lia";
import { IoDocumentTextOutline } from "react-icons/io5";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import { useRouter } from "next/router";


import { freeCourseAry } from "../../../public/assets/sampleArry";
import CourseDetail from "./courseDetail/courseDetail";
import CourseCurriculum from "./courseCurriculum/courseCurriculum";
import PDF_Detail from "./PDF_Detail/PDF_Detail";

const tiles = ["Course Detail", "Course Curriculum", "PDF's", "Group Chat"];

const ViewDetail = () => {
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
          <div className="col-6 container breadcrumb_container">
            <nav aria-label="breadcrumb ">
              <ol className="breadcrumb mb-2 cursor">
                <li className="breadcrumb-item" 
                onClick={() => Router.push("/")}
                >
                  Home
                </li>
                <li
                  className="breadcrumb-item active"
                  // onClick={() => navigate("/allcourses")}
                >
                  Details
                </li>
                {/* {courseDetails && <li className="breadcrumb-item highlight">{courseDetails.course_detail.title}</li>} */}
              </ol>
            </nav>
            <div className="courseTitle">
              <p>{freeCourseAry[0].title}</p>
            </div>
            <div className="courseDuration">
              <p>
                <span>
                  <LiaYoutube className="video_icon" />
                </span>{" "}
                120 Videos
              </p>
              <p>
                <span>
                  <IoDocumentTextOutline className="video_icon" />
                </span>{" "}
                120 Videos
              </p>
            </div>
          </div>
          <div className="col-6 course_imageContainer">
            <div className="imgContainer">
              <img src={freeCourseAry[0].image} alt="" />
            </div>
          </div>
        </div>
        <div className="course_mainContainer tabs_design__">
          <nav className="m-0 p-0">
            <Tabs
              id="controlled-tab-example2"
              activeKey={key}
              onSelect={(k) => handleTabChange(k)}
              className="mb-3 "
            >
              {console.log(tiles)}
              {tiles.map((item) => {
                return (
                  <Tab eventKey={item} title={item}>
                    {item == "Course Detail" && <CourseDetail value = {course_detail} title = {item} />}
                    {item == "Course Curriculum" && <CourseCurriculum resetRef = {resetCourseCurriculumLayerRef} tabName = {item} />}
                    {item == "PDF's" && <PDF_Detail resetRef = {resetPdfLayerRef} tabName = {item} />}
                  </Tab>
                );
              })}
            </Tabs>
          </nav>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ViewDetail;




const course_detail = "In this course, Talvir Singh will cover the syllabus of Communication . All the topics will be discussed in detail which will be helpful for all aspirants preparing for the NTA UGC-NET exam. Learners at any stage will be benefited from the course. The course will be conducted in Hindi and the notes will be provided in Hindi. In this course, Talvir Singh will cover the syllabus of Communication . All the topics will be discussed in detail which will be helpful for all aspirants preparing for the NTA UGC-NET exam. Learners at any stage will be benefited from the course. The course will be conducted in Hindi and the notes will be provided in Hindi.In this course, Talvir Singh will cover the syllabus of Communication . All the topics will be discussed in detail which will be helpful for all aspirants preparing for the NTA UGC-NET exam. Learners at any stage will be benefited from the course. The course will be conducted in Hindi and the notes will be provided in Hindi.."