import { MyLogDto } from './../../api/myLog';
export interface MyLogItemProps {
    myLog: MyLogDto
    handleMyLogDetailPage: (logSequence: number) => void,
    deleteMyLog: (e: React.MouseEvent<HTMLDivElement>, log_sequence: number) => void
}