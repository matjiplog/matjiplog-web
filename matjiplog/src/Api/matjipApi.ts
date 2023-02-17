import { matjipAPI } from './axios';

export const getMatjipData = async (pageId : number): Promise<any | null> => {
  const res = await matjipAPI.get(`matjip/matjips`, { params: { page: pageId } });

  if (res?.data) {
    return res.data;
  }
};