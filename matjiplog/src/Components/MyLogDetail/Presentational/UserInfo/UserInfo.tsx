import { UserInfoDiv, ImgAndNickName, UserImg, UserNickName, Icons, UnLockBtn, LockBtn, ConfigBtn, ConfigDropDown, ConfigMenu } from './UserInfoStyle';

import { UserInfoProps } from '../../../../types/props/MyLogDetail/UserInfo';

function UserInfo({ imgUrl, nickName }: UserInfoProps): JSX.Element {

    return (
        <UserInfoDiv>
            <ImgAndNickName>
                <UserImg src={imgUrl} />
                <UserNickName>{nickName}</UserNickName>
            </ImgAndNickName>
            <Icons>
                <UnLockBtn />
                <LockBtn />
                <ConfigBtn />
                <ConfigDropDown>
                    <ConfigMenu>수정</ConfigMenu>
                    <ConfigMenu>삭제</ConfigMenu>
                </ConfigDropDown>
            </Icons>
        </UserInfoDiv>
    )
}

export default UserInfo;