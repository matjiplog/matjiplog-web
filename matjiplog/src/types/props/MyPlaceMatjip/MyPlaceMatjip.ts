import { MatjipDto } from '../../api/matjip';

export interface MyPlaceMatjipProps {
    matjipList: MatjipDto[],
    setLastCard: (ref: HTMLDivElement) => void
}