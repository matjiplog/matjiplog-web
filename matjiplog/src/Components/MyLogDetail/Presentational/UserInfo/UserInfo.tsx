import { useState } from 'react';

import { UserInfoDiv, ImgAndNickName, UserImg, UserNickName, Icons, UnLockBtn, LockBtn, ConfigBtn, ConfigDropDown, ConfigMenu } from './UserInfoStyle';

import { UserInfoProps } from '../../../../types/props/MyLogDetail/UserInfo';
import { MyLogDto } from '../../../../types/api/myLog';
import { UserDto } from '../../../../types/api/user';

function UserInfo({ imgUrl, data, deleteMyLog, submitPutIsPublic }: UserInfoProps): JSX.Element {
    const [active, setActive] = useState<boolean>(false);
    const { isPublic, user }: MyLogDto = data;
    const { nickname }: UserDto = user;
    const toggleActive = () => {
        setActive(prev => !prev);
    }

    return (
        <UserInfoDiv>
            <ImgAndNickName>
                <UserImg src={imgUrl} />
                <UserNickName>{nickname}</UserNickName>
            </ImgAndNickName>
            <Icons>
                {isPublic ? <UnLockBtn onClick={() => { submitPutIsPublic(isPublic) }}/> : <LockBtn onClick={() => { submitPutIsPublic(isPublic) }} />}
                <ConfigBtn onClick={toggleActive}/>
                <ConfigDropDown active={active ? 1 : 0}>
                    <ConfigMenu>수정하기</ConfigMenu>
                    <ConfigMenu onClick={deleteMyLog}>삭제하기</ConfigMenu>
                </ConfigDropDown>
            </Icons>
        </UserInfoDiv>
    )
}

export default UserInfo;