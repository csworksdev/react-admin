import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "http://localhost:3004/",
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});