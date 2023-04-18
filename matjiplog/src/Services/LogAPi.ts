import { logAPI } from '../Api/axios';
import { handleError } from '../utils/handleError';
import { GetMyLogResponse, GetMyLogsResponse, PostCommentRequest, PostCommentResponse, PutIsPublicRequest, GetCommentResponse, PostLogRequest, PutLogInfoRequest, PostLogResponse, PutLogIsPublicResponse, PutLogInfoResponse, GetMyLogSearchRequest } from './../types/api/myLog';

export const getMyLogData = async (user_sequence: number, page: number): Promise<GetMyLogsResponse | null> => {
    try{
        const res = await logAPI.get("/log/list", { params: { user_sequence, page }});

        if (!res?.data?.success || res?.status !== 200) return null;
        return res.data;
    }
    catch (error: unknown) {
        handleError(error);
        throw error;
    }
}

export const getMyLogSearchAll = async (request: GetMyLogSearchRequest): Promise<GetMyLogsResponse | null> => {
    try{
        const response = await logAPI.get("/log/user/search", { params: { ...request }});

        if(!response?.data?.success || response?.status !== 200) return null;
        return response.data;
    }
    catch(error: unknown){
        handleError(error);
        throw error;
    }
}

export const getMyLogSearchName = async (request: GetMyLogSearchRequest): Promise<GetMyLogsResponse | null> => {
    const { user_sequence, keyword, page }: GetMyLogSearchRequest = request;

    try{
        const response = await logAPI.get(`/log/${user_sequence}/search/matjipname`, { params: { keyword, page }});

        if(!response?.data?.success || response?.status !== 200) return null;
        return response.data;
    }
    catch(error: unknown){
        handleError(error);
        throw error;
    }
}

export const getMyLogSearchAddress = async (request: GetMyLogSearchRequest): Promise<GetMyLogsResponse | null> => {
    const { user_sequence, keyword, page }: GetMyLogSearchRequest = request;

    try{
        const response = await logAPI.get(`/log/${user_sequence}/search/matjipaddress`, { params: { keyword, page }});

        if(!response?.data?.success || response?.status !== 200) return null;
        return response.data;
    }
    catch(error: unknown){
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

export const getLogCommentData = async (log_sequence: number, page: number): Promise<GetCommentResponse | null> => {
    try{
        const res = await logAPI.get(`/log/${log_sequence}/comment`, { params: { page }});
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
        const res = await logAPI.delete("/log", { params: { user_sequence, log_sequence }});

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
        const res = await logAPI.delete("/log/comment", { params: { comment_sequence , user_sequence }});

        if (!res?.data?.success || res?.status !== 200) return null;
        return res.data.success;
    }
    catch (error: unknown) {
        handleError(error);
        throw error;
    }
}