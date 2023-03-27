import { AxiosError } from "axios";
import { logAPI } from "../Api/axios";
import { requestCommentDto, logDto } from "../types/logDto";


/* 공개된 로그 조회 */
export const axiosPublicLogList = async (page : number) : Promise<logDto[]> =>{
  try {
    const res = await logAPI.get("log/list/public" , {
      params : {
        page: page,
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

/* 로그 댓글 생성 */
export const axiosLogCommentCreate = async (logCommentData : requestCommentDto) => { 
  try {
    const { data, status } = await logAPI.post("log/comment", logCommentData);
    console.log("success");
    console.log(data);
    return { data, status, error: null};
  } catch (e) {
    console.log("failed");
    const { message, response, code } = e as unknown as AxiosError;
    return { data: message, status: response?.status, error : code};
  }
}

// export const axiosLogLikeChange = async (logLikeData : logLikeDto) =>{
//   try {
//     const { data, status } = await logAPI.post("log/like", logLikeData);
//     console.log("success");
//     return { data, status , error: null};
//   } catch (e) {
//     console.log("failed");
//     const { message, response, code } = e as unknown as AxiosError;
//     return { data: message, status: response?.status, error : code};
//   }
// }