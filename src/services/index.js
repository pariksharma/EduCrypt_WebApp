import axiosClient from "./axios";



// Master hit
const MasterUrl = 'master_hit/';


export const getAppDetial = async (params) => await axiosClient.post(MasterUrl + 'get_app_details', params);
export const getCourse_Catergory_Service = async (params) => axiosClient.post(MasterUrl + 'content', params);



// Courses

const CourseUrl = 'course/get_courses';

export const getCourse_service = async (params) => await axiosClient.post(CourseUrl, params)