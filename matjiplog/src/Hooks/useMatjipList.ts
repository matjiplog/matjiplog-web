import { useState } from 'react';

import { MatjipDto } from '../types/api/matjip';
import { MyLogDto } from '../types/api/myLog';

import { useMatjipListResult } from '../types/hook/common/useMatjipList';

export const useMatjipList = (): useMatjipListResult => {
    const [matjipList, setMatjipList] = useState<MatjipDto[]>([]);
    const [myLogList, setMyLogList] = useState<MyLogDto[]>([]);

    const pushMatjipList = (newMatjipList: MatjipDto[]) => {
      setMatjipList((prev) => [...prev, ...newMatjipList]);
    };
    const newMatjipList = (newMatjipList: MatjipDto[]) => {
      setMatjipList([...newMatjipList]);
    };
    const initMatjipList = () => {
      setMatjipList([]);
    };

    const newMyLogList = (newMyLogList: MyLogDto[]) => {
      setMyLogList([...newMyLogList]);
    };
    const pushMyLogList = (newMyLogList: MyLogDto[]) => {
      setMyLogList((prev) => [...prev, ...newMyLogList]);
    };
    const filterMyLogList = (logSequence: number) => {
      setMyLogList((prev) => [...prev.filter(v => v.logSequence !== logSequence)]);
    };
    
    return { matjipList, myLogList, pushMatjipList, newMatjipList, initMatjipList, newMyLogList, pushMyLogList, filterMyLogList }
}