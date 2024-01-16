import axios from "axios";

const axiosBase = () => {
  return axios.create({
    baseURL: "http://localhost:5500/api",
    // baseURL: "https://evangadi-forum-bta3.onrender.com/api",
  });
};
export default axiosBase;

// https://evangadi-forum-kidane.netlify.app
