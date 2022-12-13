import axios from "axios";


const axiosCommon = () => {
    axios.defaults.baseURL = 'http://34.126.141.218/api/v1/';
    axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('token');
    
//     axios interceptors
//     // Add a request interceptor
// axios.interceptors.request.use(function (config) {
//     // Do something before request is sent
//     config.headers['Authorization'] = 'Bearer ' + localStorage.getItem('token');
//     return config;
//   }, function (error) {
//     // Do something with request error
//     return Promise.reject(error);
//   });

};

export default axiosCommon;