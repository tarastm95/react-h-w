import {axiosInstance} from "./axiosInstance";
import {UserTypes} from "../types/userTypes";
import {AxiosResponse} from "axios";
export const getUsers = async ():Promise<AxiosResponse<UserTypes[]>> => {
    const userResponse = await axiosInstance.get('/users');
    return userResponse;
}
