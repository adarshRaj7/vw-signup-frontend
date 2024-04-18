import axios from "axios";
import { api } from "../urlConfig";

const axiosInstance = axios.create(
  {
    baseURL: "http://localhost:5432/api",
    // baseURL: "https://vw-signup-backend.onrender.com/api",
  },
  {
    headers: {
      "Content-Type": "application/json, image/jpg, image/png",
      Accept: "application/vnd.vimeo.*+json;version=3.4",
    },
  }
);
export default axiosInstance;
