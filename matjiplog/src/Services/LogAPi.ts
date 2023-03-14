import { logAPI } from '../Api/axios';
import { handleError } from '../utils/handleError';


export const getLogDetail = async () => {
    try{

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

