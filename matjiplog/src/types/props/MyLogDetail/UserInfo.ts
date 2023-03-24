import { MyLogDto } from './../../api/myLog';
export interface UserInfoProps {
    imgUrl: string,
    data: MyLogDto
    deleteMyLog: (e: React.MouseEvent<HTMLLIElement>) => void,
    submitPutIsPublic: (isPublic: boolean) => void,
}