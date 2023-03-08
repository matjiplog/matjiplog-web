import { useEffect, useState } from 'react';

import { MatjipDto, Matjips } from '../types/api/matjip';

export const useMatjipList = (data: Matjips | null | undefined, isLoading: boolean, page: number) => {
    const [matjipList, setMatjipList] = useState<MatjipDto[]>([]);

    useEffect(() => {
        if (!isLoading && data?.matjipListData) {
          if(page === 0){
            setMatjipList([...data.matjipListData]);
          }else{
            setMatjipList((prev) => [...prev, ...data.matjipListData]);
          }
        }
      }, [data, isLoading, page]);

      
      return { matjipList }
}