import axios from "axios";
const token = localStorage.getItem("token");

// axios.defaults.baseURL = "https://young-anchorage-15160.herokuapp.com";
axios.defaults.baseURL = "http://localhost:3000";
// axios.defaults.headers["Authorization"] = `${token}`;

// axios.interceptors.response.use(
//   response => (response),
//   error => {
//     const originalRequest = error.config;
//     if(error.response.status === 401){
//       return axios.post("/refreshToken").then(response=>{
//         const token = response.data.token;
//         localStorage.setItem("token",token);
//         axios.defaults.headers["Authorization"] = `Bearer ${token}`;
//         originalRequest.headers["Authorization"] = `Bearer ${token}`;

//          return axios(originalRequest);
//       })
//     }
//     return Promise.reject(error);
//   }
// )

export default axios;
