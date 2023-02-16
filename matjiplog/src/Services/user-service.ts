import axios, { AxiosError, AxiosResponse } from "axios";
import API from "../Api/axios";
import { userDto } from "../types/userDto";


export const axiosIdCheck = async (userId : string) =>{
  try {
    const {data, status} = await API.get("user/id", {
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
    const { data, status } = await API.post("user",{
      userData,
    });
    return { data, status, error: null};
  } catch (e) {
    console.log(e);
    const { message, response, code } = e as unknown as AxiosError;
    return { data: message, status: response?.status, error : code};
  }
}


