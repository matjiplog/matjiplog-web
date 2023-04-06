import { PostMatjipCustomRequest } from './../types/api/matjip';
import { matjipAPI } from '../Api/axios';
import { Matjips } from '../types/api/matjip';
import { handleError } from '../utils/handleError';

export const getMatjipData = async (page: number): Promise<Matjips | null> => {
  try {
    const res = await matjipAPI.get(`matjip/matjips`, { params: { page: page } });

    if (!res?.data?.success || res?.status !== 200) return null;
    return res.data;
  } 
  catch (error: unknown) {
    handleError(error);
    throw error;
  }
};

export const getMatjipSearch = async (keyword: string, page: number): Promise<Matjips | null> => {
  try {
    const res = await matjipAPI.get(`matjip/search`, { params: { page: page, keyword: keyword } });

    if (!res?.data?.success || res?.status !== 200) return null;
    return res.data;
  } 
  catch (error: unknown) {
    handleError(error);
    throw error;
  }
};

export const getMatjipSearchName = async (keyword: string, page: number): Promise<Matjips | null> => {
  try {
    const res = await matjipAPI.get(`matjip/search/name`, { params: { page: page, keyword: keyword } });

    if (!res?.data?.success || res?.status !== 200) return null;
    return res.data;
  } 
  catch (error: unknown) {
    handleError(error);
    throw error;
  }
};

export const getMatjipSearchAddress = async (keyword: string, page: number): Promise<Matjips | null> => {
  try {
    const res = await matjipAPI.get(`matjip/search/address`, { params: { page: page, keyword: keyword } });

    if (!res?.data?.success || res?.status !== 200) return null;
    return res.data;
  } 
  catch (error: unknown) {
    handleError(error);
    throw error;
  }
};

export const getMatjipMyPlace = async (lat: number, lng: number, radius: number, page: number) => {
  try{
    const res = await matjipAPI.get(`matjip/myplace`, {params: { lat: lat, lng: lng, radius: radius, page: page}})
    
    if (!res?.data?.success || res?.status !== 200) return null;
    return res.data;
  }
  catch(error: unknown){
    handleError(error);
    throw error;
  }
}

export const postMatjipCustom = async (data: PostMatjipCustomRequest) => {
  try{
    const res = await matjipAPI.post("matjip/custom/add", data);
    
    if(!res?.data?.success || res?.status !== 200) return null;
    return res.data;
  }
  catch(error: unknown){
    handleError(error);
    throw error;
  }
}