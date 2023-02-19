import { matjipAPI } from '../Api/axios';
import { Matjips } from '../types/api/matjip';
import { handleError } from '../utils/handleError';

export const getMatjipData = async (pageId: number): Promise<Matjips | null> => {
  try {
    const res = await matjipAPI.get(`matjip/matjips`, { params: { page: pageId } });

    if (!res?.data?.success || res?.status !== 200) return null;
    return res.data;

  } catch (error: unknown) {
    handleError(error);
    throw error;
  }
};