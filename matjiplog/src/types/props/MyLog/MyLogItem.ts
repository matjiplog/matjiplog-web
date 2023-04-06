import { MyLogDto } from './../../api/myLog';
export interface MyLogItemProps {
    myLog: MyLogDto
    deleteMyLog: (e: React.MouseEvent<HTMLDivElement>, log_sequence: number) => void
}