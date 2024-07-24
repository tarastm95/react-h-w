import {axiosInstance} from "./axiosInstance";
import {AxiosResponse} from "axios";
import commentTypes from "../types/commentTypes";


const commentRequests = async (id:string | undefined):Promise<AxiosResponse<commentTypes[]>> => {
  const response = await axiosInstance.get(`posts/${id}/comments`);
  return response;
}
const AllCommentRequests = async ():Promise<AxiosResponse<commentTypes[]>> => {
  const response = await axiosInstance.get(`/comments`);
  return response;
}

export default commentRequests;
export {
  AllCommentRequests
}

// https://jsonplaceholder.typicode.com/posts/2/comments

