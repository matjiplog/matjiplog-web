import { MyLogDto } from './../../api/myLog';
import { MatjipDto } from '../../api/matjip';

export interface useMatjipListResult {
    matjipList: MatjipDto[];
    myLogList: MyLogDto[];
    pushMatjipList: (newMatjipList: MatjipDto[]) => void,
    newMatjipList: (newMatjipList: MatjipDto[]) => void,
    initMatjipList: () => void,
    newMyLogList: (newMyLogList: MyLogDto[]) => void,
    pushMyLogList: (newMyLogList: MyLogDto[]) => void,
    filterMyLogList: (logSequence: number) => void,
}