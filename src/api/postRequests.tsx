import {axiosInstance} from "./axiosInstance";
import {AxiosResponse} from "axios";
import postTypes from "../types/postTypes";

const PostRequests = (id:string| undefined) => {
    const response:Promise<AxiosResponse<postTypes[]>> = axiosInstance.get(`/posts?userId=${id}`)
    return response;
}

export default PostRequests;
