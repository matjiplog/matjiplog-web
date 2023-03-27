import { useState } from 'react';

import { Content, Dot, IconBtn, LikeAndComment, MyLogItemDiv, NickName, Title, UserImage, UserInfo, Like, Comment, UserImageAndNickName, LogImage, LogImageDiv, Address, Category, IconAndCount, Count, ConfigDiv, ConfigItem } from './MyLogItemStyle';

import { MyLogItemProps } from '../../../../types/props/MyLog/MyLogItem';
import { MyLogDto } from '../../../../types/api/myLog';
import { MatjipDto } from '../../../../types/api/matjip';
import { UserDto } from '../../../../types/api/user';

function MyLogItem({ myLog, handleMyLogDetailPage, deleteMyLog }: MyLogItemProps): JSX.Element {
    const [configShow, setconfigShow] = useState<boolean>(false);

    const { content, logSequence, matjip, matjipSequence, ratingPortion, ratingService, ratingTaste, likeCount, comments, user }: MyLogDto = myLog;
    const { name: matjipName, address, roadAddress, category }: MatjipDto = matjip;
    const { userSequence, id, name: userName, nickname, imageSerial, imageDetail }: UserDto = user;

    const toggleConfigShow = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation();
        setconfigShow((prev) => !prev);
    }

    return (
        <MyLogItemDiv onClick={()=>{ handleMyLogDetailPage(logSequence) }}>
            <UserInfo>
                <UserImageAndNickName>
                    <UserImage src="/assets/images/loginPicture.png" />
                    <NickName>{nickname}</NickName>
                </UserImageAndNickName>
                <IconBtn onClick={toggleConfigShow}><Dot /></IconBtn>
            </UserInfo>
            <LogImageDiv>
                <LogImage src={"/assets/images/Matjip.png"} />
            </LogImageDiv>
            <Title>{matjipName}</Title>
            <Category>{category}</Category>
            <Address>{address}</Address>
            <Content>{content}</Content>
            <LikeAndComment>
                <IconAndCount>
                    <Like />
                    <Count>{likeCount}</Count>
                </IconAndCount>
                <IconAndCount>
                    <Comment />
                    <Count>{comments.length}</Count>
                </IconAndCount>
            </LikeAndComment>

            {configShow && 
            <ConfigDiv>
                <ConfigItem>수정하기</ConfigItem>
                <ConfigItem onClick={(e) => { deleteMyLog(e, logSequence) }}>삭제하기</ConfigItem>
            </ConfigDiv>} 
            
        </MyLogItemDiv>
    )
}

export default MyLogItem;