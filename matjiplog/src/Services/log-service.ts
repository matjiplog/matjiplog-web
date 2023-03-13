import { AxiosError } from "axios";
import { logAPI } from "../Api/axios";
import { logDto } from "../types/logDto";

export const axiosPublicLogList = async (page : number) : Promise<logDto[] | undefined> =>{
  try {
    const res = await logAPI.get("log/list/public" , {
      params : {
        page: page,
      }
    })
    console.log(res);
    return res.data;
  } catch (e) {
    const { message, response, code } = e as unknown as AxiosError;
    console.log(message);
    console.log(response);
    console.log(code);
    throw e;
  }
}