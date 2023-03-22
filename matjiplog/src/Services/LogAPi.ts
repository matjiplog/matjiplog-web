import { logAPI } from '../Api/axios';
import { handleError } from '../utils/handleError';
import { MyLog, MyLogs, CommentData, PostCommentResponse } from './../types/api/myLog';

export const getMyLogData = async (user_sequence: number, page: number): Promise<MyLogs | null> => {
    try{
        const res = await logAPI.get("/log/list", { params: { user_sequence: user_sequence, page: page }})

        if (!res?.data?.success || res?.status !== 200) return null;
        return res.data;
    }
    catch (error: unknown) {
        handleError(error);
        throw error;
    }
}

export const getMyLogDetailData = async (log_sequence: number): Promise<MyLog | null> => {
    try{
        const res = await logAPI.get(`/log/${log_sequence}`)
        if(!res.data.success || res?.status !== 200) return null;
        return res.data;
    }
    catch(error: unknown){
        handleError(error);
        throw error;
    }
}

export const postLogCommnet = async (commentData: CommentData): Promise<PostCommentResponse | null> => {
    try{
        const res = await logAPI.post("/log/comment", commentData)

        if (!res?.data?.success || res?.status !== 200) return null;
        return res.data;
    }
    catch (error: unknown) {
        handleError(error);
        throw error;
    }
}

export const deleteMyLogData = async (user_sequence: number, log_sequence: number): Promise<boolean | null> => {
    try{
        const res = await logAPI.delete("/log", { params: { user_sequence: user_sequence, log_sequence: log_sequence }})

        if (!res?.data?.success || res?.status !== 200) return null;
        return res.data.success;
    }
    catch (error: unknown) {
        handleError(error);
        throw error;
    }
}









// {
//     "userSequence": 0,
//     "isCustom": true,// 사용자가 새로 등록하는지
//     "matjipSequence": 0,
//     "content": "string",
//     "ratingTaste": 0,
//     "ratingPortion": 0,
//     "ratingService": 0,
//     "orderingMethod": "string",
//     "isPublic": true,
// }    post log

