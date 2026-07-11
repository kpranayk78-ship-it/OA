import axios from "axios";

const API = axios.create({
  baseURL: "https://oa-wutv.onrender.com/api",
});

export default API;