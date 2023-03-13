import { MatjipDto } from '../api/matjip';

export interface useDrawMarkerResult {
    markers: any[],
    deleteMarkers: () => void,
    drawMakers: (map: any, matjipList: MatjipDto[]) => void;
}