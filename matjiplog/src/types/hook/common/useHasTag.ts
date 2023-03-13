import { MatjipDto } from '../../api/matjip';

export interface useHasTagResult {
    hasTags: string[],
    hastagList: MatjipDto[],
    addHasTag: (hasTag: string) => void,
    deleteHasTag: (hasTag: string) => void,
    filterHasTag: (matjipList: MatjipDto[]) => void;
}