import { useState } from 'react'

import { useHasTagResult } from '../types/hook/common/useHasTag';
import { MatjipDto } from '../types/api/matjip';

export const useHasTagList = (): useHasTagResult => {
    const [hasTags, setHasTags] = useState<string[]>([]);// 선택된 해시태그
    const [hastagList, setHastagList] = useState<MatjipDto[]>([]);// ui에 보여지는 리스트

    const addHasTag = (hasTag: string) => {
        setHasTags((pre) => [...pre, hasTag]);
    }
    const deleteHasTag = (hasTag: string) => {
        setHasTags((pre) => pre.filter(value => value !== hasTag));
    }
    const filterHasTag = (matjipList: MatjipDto[]) => {
      const newHastagList = hasTags.flatMap((value: string) => {
        return matjipList.filter((matjip) => {
          return matjip.category === value;
        });
      });
      setHastagList([...newHastagList]);
    }

    return { hasTags, hastagList, addHasTag, deleteHasTag, filterHasTag };
}