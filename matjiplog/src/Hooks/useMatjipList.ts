import { useState } from 'react';

import { MatjipDto } from '../types/api/matjip';

import { useMatjipListResult } from '../types/hook/common/useMatjipList';

export const useMatjipList = (): useMatjipListResult => {
    const [matjipList, setMatjipList] = useState<MatjipDto[]>([]);

    const pushMatjipList = (newMatjipList: MatjipDto[]) => {
      setMatjipList((prev) => [...prev, ...newMatjipList]);
    }
    const newMatjipList = (newMatjipList: MatjipDto[]) => {
      setMatjipList([...newMatjipList]);
    }

    return { matjipList, pushMatjipList, newMatjipList }
}