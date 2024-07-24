import {axiosInstance} from "./axiosInstance";
import {AxiosResponse} from "axios";
import postTypes from "../types/postTypes";

 const PostRequests = async (id:string| undefined):Promise<AxiosResponse<postTypes[]>>  => {
    const response= await axiosInstance.get(`/posts?userId=${id}`)
    return response;
}

const PostsRequests = async ():Promise<AxiosResponse<postTypes[]>> => {
    const response= await axiosInstance.get(`/posts`)
    return response;
}
export default PostRequests;
export {
    PostsRequests
}
