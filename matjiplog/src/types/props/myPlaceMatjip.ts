import { MatjipDto } from '../api/matjip';

export interface MyPlaceMatjipProps {
    isLoading: boolean,
    matjipList: MatjipDto[],
    setLastCard: (ref: HTMLDivElement) => void
}