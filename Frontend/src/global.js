import axios from "axios";

const globalConfig = axios.create({
  baseURL: "http://localhost:5172/",
  timeout: 2000,
  headers: {
    "Content-Type": "application/json",
  },
});

export default globalConfig;
