import { MatjipDto } from '../../api/matjip';

export interface useMatjipListResult {
    matjipList : MatjipDto[],
    pushMatjipList: (newMatjipList: MatjipDto[]) => void,
    newMatjipList: (newMatjipList: MatjipDto[]) => void,
}