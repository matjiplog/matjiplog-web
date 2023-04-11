import { useQuery } from "react-query";
import { Params } from "react-router-dom";
import { axiosMatjipDetail } from "../../../Services/matjip-service";


export const useMatjipDetail = (parm : Readonly<Params<string>>) => {
  return useQuery(["detailmatjip",parm.matjipSequence], () => axiosMatjipDetail(parm.matjipSequence), {
    });
}

