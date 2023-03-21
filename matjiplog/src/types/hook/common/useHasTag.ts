import { MatjipDto } from '../../api/matjip';
import { MyLogDto } from '../../api/myLog';

export interface useHasTagResult {
    hasTags: string[],
    hastagMatjipList: MatjipDto[],
    hastagMyLogList: MyLogDto[],
    addHasTag: (hasTag: string) => void,
    deleteHasTag: (hasTag: string) => void,
    filterMatjipHasTag: (matjipList: MatjipDto[]) => void,
    filterMyLogHasTag: (matjipList: MyLogDto[]) => void,
}