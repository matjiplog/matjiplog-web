import axios, { AxiosError, AxiosResponse } from "axios";
import {userAPI} from "../Api/axios";
import { userDto } from "../types/userDto";


export const axiosIdCheck = async (userId : string) =>{
  try {
    const {data, status} = await userAPI.get("user/id", {
      params : {
        id: userId,
      }
    });
    return {data, status, error : null};
  } catch (e) {
    console.log(e);
    const { message, response, code } = e as unknown as AxiosError;
    return { data: message, status: response?.status, error : code};
  }
}

export const axiosSignUp = async (userData : userDto) => { 
  try {
    console.log(userData);
    const { data, status } = await userAPI.post("user", userData);
    console.log("success");
    return { data, status, error: null};
  } catch (e) {
    console.log("failed");
    const { message, response, code } = e as unknown as AxiosError;
    return { data: message, status: response?.status, error : code};
  }
}


