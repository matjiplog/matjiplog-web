import { handleError } from './../utils/handleError';
import axios, { AxiosError, AxiosResponse } from "axios";
import {userAPI} from "../Api/axios";
import { userDto } from "../types/userDto";
import qs from 'qs';

export const postLoginData = async (loginData: {id: string, password: string}): Promise<{ accessToken: string, userSequence: number } | null> => {
  try{
    const response = await userAPI.post("login", loginData);
    const accessToken = response.headers["token"];
    const userSequence = response.headers["userseq"];
    
    if(response?.status !== 200 || !accessToken || !userSequence) return null;

    return { accessToken, userSequence };
  }
  catch(error: unknown){
    handleError(error);
    throw(error);
  }
}

export const axiosIdCheck = async (userId : string) =>{
  try {
    const res = await userAPI.get("user/id", {
      params : {
        id: userId,
      }
    })
    return res.data.success;
  } catch (e) {
    const { message, response, code } = e as unknown as AxiosError;
    console.log(message);
    console.log(response);
    console.log(code);
    throw e;
  }
}

export const axiosEmailCheck = async (userEmail : string) =>{
  try {
    const res = await userAPI.get("user/email", {
      params : {
        email: userEmail,
      }
    })
    return res.data.success;
  } catch (e) {
    const { message, response, code } = e as unknown as AxiosError;
    console.log(message);
    console.log(response);
    console.log(code);
    throw e;
  }
}

export const axiosEmailPost = async (userId : string) =>{
  try {
    const res = await userAPI.get("user/authEmail", {
      params : {
        toEmail: userId,
      }
    })
    return res.data.success;
  } catch (e) {
    const { message, response, code } = e as unknown as AxiosError;
    console.log(message);
    console.log(response);
    console.log(code);
    throw e;
  }
}

export const axiosEmailauthCodeCheck = async (email : string, authCode : string|undefined) =>{
  try{
    const data = { 'email': email , 'authCode' : authCode};
    const options = {
      method: 'POST',
      headers: { 'content-type': 'application/x-www-form-urlencoded' },
      data: qs.stringify(data),
      url : "http://61.85.38.39:60548/user/authEmail"
    };
    const res = await axios(options);
    return res.data.success;
  }catch (e){
    const { message, response, code } = e as unknown as AxiosError;
    console.log(message);
    console.log(response);
    console.log(code);
    throw e;
  }
}

export const axiosSignUp = async (userData : userDto) => { 
  try {
    const { data, status } = await userAPI.post("user", userData);
    return { data, status, error: null};
  } catch (e) {
    const { message, response, code } = e as unknown as AxiosError;
    console.log(message);
    console.log(response);
    console.log(code);
    return { data: message, status: response?.status, error : code};
  }
}

export const axiosUserInfo = async (userSeq : number) : Promise<userDto> =>{
  try {
    const res = await userAPI.get("user", {
      params : {
        userSeq : userSeq,
      }
    })
    return res.data.data;
  } catch (e) {
    const { message, response, code } = e as unknown as AxiosError;
    console.log(message);
    console.log(response);
    console.log(code);
    throw e;
  }
}

export const axiosLogin = async (userId : string, password: string) =>{
  try{
    const data = { 'userId': userId , 'password' : password};
    const res = await userAPI.post("/login", data);
    const accessToken = res.headers["token"]
    const userSequence = res.headers["userseq"]
    return { res, accessToken, userSequence };
  } catch (e) {
    const { message, response, code } = e as unknown as AxiosError;
    console.log(message);
    console.log(response);
    console.log(code);
    throw e;
  }
}

