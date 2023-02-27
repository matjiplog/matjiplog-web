import { AxiosError } from "axios";
import { matjipAPI } from "../Api/axios";
import { Matjip, MatjipDto } from "../types/api/matjip";

export const axiosMatjipDetail = async (matjipSequence : string | undefined) : Promise<MatjipDto | null> =>{
  try {
    const res = await matjipAPI.get(`matjip/${matjipSequence}`);
    if(!res.data?.success || res?.status !== 200) return null;
    return res.data.matjipData;
  } catch (e) {
    const { message, response, code } = e as unknown as AxiosError;
    console.log(message);
    console.log(response);
    console.log(code);
    throw e;
  }
}