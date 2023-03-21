import { useState } from 'react';

import { Content, Dot, IconBtn, LikeAndComment, MyLogItemDiv, NickName, Title, UserImage, UserInfo, Like, Comment, UserImageAndNickName, LogImage, LogImageDiv, Address, Category, IconAndCount, Count, ConfigDiv, ConfigItem } from './MyLogItemStyle';

import { MyLogItemProps } from '../../../../types/props/MyLog/MyLogItem';

function MyLogItem({ logSequence, logImageUrl, title, category, address, content, handleMyLogDetailPage, deleteMyLog }: MyLogItemProps): JSX.Element {
    const [configShow, setconfigShow] = useState<boolean>(false);

    const toggleConfigShow = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation();
        setconfigShow((prev) => !prev);
    }

    return (
        <MyLogItemDiv onClick={()=>{ handleMyLogDetailPage(logSequence) }}>
            <UserInfo>
                <UserImageAndNickName>
                    <UserImage src="/assets/images/loginPicture.png" />
                    <NickName>대포동</NickName>
                </UserImageAndNickName>
                <IconBtn onClick={toggleConfigShow}><Dot /></IconBtn>
            </UserInfo>
            <LogImageDiv>
                <LogImage src={logImageUrl} />
            </LogImageDiv>
            <Title>{title}</Title>
            <Category>{category}</Category>
            <Address>{address}</Address>
            <Content>{content}</Content>
            <LikeAndComment>
                <IconAndCount>
                    <Like />
                    <Count>12</Count>
                </IconAndCount>
                <IconAndCount>
                    <Comment />
                    <Count>12</Count>
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