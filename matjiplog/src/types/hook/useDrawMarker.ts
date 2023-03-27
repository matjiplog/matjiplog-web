import { MyLogDto } from './../api/myLog';
import { MatjipDto } from '../api/matjip';
export interface useDrawMarkerResult {
    markers: any[],
    deleteMarkers: () => void,
    drawMatjipMakers: (map: any, matjipList: MatjipDto[]) => void;
    drawMyLogMakers: (map: any, matjipList: MyLogDto[]) => void;
}