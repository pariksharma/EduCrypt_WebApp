import axios from "axios";

const axiosClient = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
  })

axiosClient.interceptors.request.use((req) => {
    const jwt = localStorage.getItem('jwt')
    const user_id = localStorage.getItem('user_id')


    // const headers = {
    //     'Content-Type':'application/json',
    //     'Devicetype':4,
    //     'Version':1,
    //     'lang':1,
    //     // 'Appid':{{APP_ID}}
    //     //Userid:{{USER_ID}}
    //     // Dump:'dump07072323'
    // }

    const headers = {
            'Jwt': jwt ? jwt : "jwt",
            'Userid': user_id ? user_id : 0,
            'Devicetype': 4,
            'Version': 1,
            'Lang': 1,
            // 'Centerid:'.$Centerid,
            'Content-Type': 'application/json',
            "Authorization": "Bearer 01*#NerglnwwebOI)30@I*Dm'@@",
            "Appid": 427
    }

    req.headers = headers

    return req
}, (error) => Promise.reject(error))

export default axiosClient