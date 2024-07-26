import axiosClient from "./axios";


// Master hit
const MasterUrl = 'master_hit/';


export const getAppDetial = async (params) => await axiosClient.post(MasterUrl + 'get_app_details', params);
export const getCourse_Catergory_Service = async (params) => await axiosClient.post(MasterUrl + 'content', params);



// Courses

const CourseUrl = 'course/';

export const getCourse_service = async (params) => await axiosClient.post(CourseUrl + 'get_courses', params)
export const getCourseDetail_Service = async (param) => await axiosClient.post(CourseUrl + 'get_course_detail' ,param)