import { logAPI } from '../Api/axios';
import { handleError } from '../utils/handleError';
import { GetMyLogResponse, GetMyLogsResponse, PostCommentRequest, PostCommentResponse, PutIsPublicRequest, GetCommentResponse, PostLogRequest, PutLogInfoRequest, PostLogResponse, PutLogIsPublicResponse, PutLogInfoResponse } from './../types/api/myLog';

export const getMyLogData = async (user_sequence: number, page: number): Promise<GetMyLogsResponse | null> => {
    try{
        const res = await logAPI.get("/log/list", { params: { user_sequence: user_sequence, page: page }});

        if (!res?.data?.success || res?.status !== 200) return null;
        return res.data;
    }
    catch (error: unknown) {
        handleError(error);
        throw error;
    }
}

export const getMyLogDetailData = async (log_sequence: number): Promise<GetMyLogResponse | null> => {
    try{
        const res = await logAPI.get(`/log/${log_sequence}`);
        if(!res.data.success || res?.status !== 200) return null;
        return res.data;
    }
    catch(error: unknown){
        handleError(error);
        throw error;
    }
}

export const getLogCommentData = async (log_sequence: number): Promise<GetCommentResponse | null> => {
    try{
        const res = await logAPI.get(`/log/${log_sequence}/comment`);
        if(!res.data.success || res?.status !== 200) return null;
        return res.data;
    }
    catch(error: unknown){
        handleError(error);
        throw error;
    }
}

export const postLogComment = async (commentData: PostCommentRequest): Promise<PostCommentResponse | null> => {
    try{
        const res = await logAPI.post("/log/comment", commentData);
        if (!res?.data?.success || res?.status !== 200) return null;
        return res.data;
    }
    catch (error: unknown) {
        handleError(error);
        throw error;
    }
}

export const postLog = async (logData: PostLogRequest): Promise<PostLogResponse | null> => {
    try{
        const res = await logAPI.post("/log", logData);

        if(!res?.data?.success || res?.status !== 200) return null;
        return res.data;
    }
    catch(error: unknown){
        handleError(error);
        throw error;
    }
}

export const putLogIsPublic = async (logPublicData: PutIsPublicRequest): Promise<PutLogIsPublicResponse | null> => {
    try{
        const res = await logAPI.put("log/change/public" , logPublicData);
        
        if(!res?.data?.success || res?.status !== 200) return null;
        return res.data;
    }
    catch(error: unknown){
        handleError(error);
        throw error;
    }
}

export const putLogInfo = async (modifiedLogInfo: PutLogInfoRequest): Promise<PutLogInfoResponse | null> => {
    try{
        const res = await logAPI.put("log", modifiedLogInfo);
        
        if(!res?.data?.success || res?.status !== 200) return null;
        return res.data;
    }
    catch(error: unknown){
        handleError(error);
        throw error;
    }
}

export const deleteMyLogData = async (user_sequence: number, log_sequence: number): Promise<boolean | null> => {
    try{
        const res = await logAPI.delete("/log", { params: { user_sequence: user_sequence, log_sequence: log_sequence }});

        if (!res?.data?.success || res?.status !== 200) return null;
        return res.data.success;
    }
    catch (error: unknown) {
        handleError(error);
        throw error;
    }
}

export const deleteCommentData = async (comment_sequence: number, user_sequence: number): Promise<boolean | null> => {
    try{
        const res = await logAPI.delete("/log/comment", { params: { comment_sequence : comment_sequence , user_sequence : user_sequence  }});

        if (!res?.data?.success || res?.status !== 200) return null;
        return res.data.success;
    }
    catch (error: unknown) {
        handleError(error);
        throw error;
    }
}