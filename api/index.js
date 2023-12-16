import axios from "axios";

export const axiosInstance = axios.create({baseURL: 'http://192.168.183.1:8000'})