import { MyLogDto } from './../../api/myLog';

export interface MyLogListProps {
    viewList: MyLogDto[],
    setLastCardRef: (ref: HTMLDivElement) => void,
    handleMyLogDetailPage: (logSequence: number) => void,
    deleteMyLog: (e: React.MouseEvent<HTMLDivElement>, log_sequence: number) => void
}