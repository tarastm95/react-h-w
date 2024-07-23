import axios from "axios";

const BASE_URL =  'https://jsonplaceholder.typicode.com';

const axiosInstance = axios.create({
    baseURL:BASE_URL
})
export {
    axiosInstance
}
