import { MatjipDto } from '../../api/matjip'

export interface SearchMatjipListProps {
    viewList: MatjipDto[],
    setLastCardRef: (ref: HTMLDivElement) => void
}