import { useState } from 'react'

import { useHasTagResult } from '../types/hook/common/useHasTag';
import { MatjipDto } from '../types/api/matjip';
import { MyLogDto } from '../types/api/myLog';

export const useHasTagList = (): useHasTagResult => {
    const [hasTags, setHasTags] = useState<string[]>([]);// 선택된 해시태그
    const [hastagMatjipList, setHastagMatjipList] = useState<MatjipDto[]>([]);// ui에 보여지는 리스트
    const [hastagMyLogList, setHastagMyLogList] = useState<MyLogDto[]>([]);// ui에 보여지는 리스트

    const addHasTag = (hasTag: string) => {
        setHasTags((pre) => [...pre, hasTag]);
    }
    const deleteHasTag = (hasTag: string) => {
        setHasTags((pre) => pre.filter(value => value !== hasTag));
    }
    const filterMatjipHasTag = (matjipList: MatjipDto[]) => {
      const newHastagList = hasTags.flatMap((value: string) => {
        return matjipList.filter((matjip) => {
            return matjip.category === value;
        });
      });
      setHastagMatjipList([...newHastagList]);
    }
    const filterMyLogHasTag = (matjipList: MyLogDto[]) => {
      const newHastagList = hasTags.flatMap((value: string) => {
        return matjipList.filter((matjip) => {
          return matjip.matjip.category === value;
        });
      });
      setHastagMyLogList([...newHastagList]);
    }


    return { hasTags, hastagMatjipList, hastagMyLogList, addHasTag, deleteHasTag, filterMatjipHasTag, filterMyLogHasTag};
}