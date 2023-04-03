import { kakaoApi } from '../Api/axios';
import { handleError } from '../utils/handleError';

export const getLatitudeLongitude = async (address: string): Promise<any | null> => {
    try{
        const res = await kakaoApi.get(`${address}`);
        if (!res?.data?.documents[0] || res?.status !== 200) return null;
        return res.data.documents[0];
    }
    catch (error: unknown) {
        handleError(error);
        throw error;
    }
}