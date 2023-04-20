import { AxiosError } from "axios";
import { matjipAPI } from "../Api/axios";
import { matjipDto, responseMatjip } from "../types/matjipDto";

export const axiosMatjipDetail = async (matjipSequence : string | undefined) : Promise<matjipDto | null> =>{
  try {
    const res = await matjipAPI.get(`matjip/${matjipSequence}`);
    if(!res.data?.success || res?.status !== 200) return null;
    
    return res.data.data;
  } catch (e) {
    const { message, response, code } = e as unknown as AxiosError;
    console.log(message);
    console.log(response);
    console.log(code);
    throw e;
  }
}