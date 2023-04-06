import { useState } from 'react';

import { UserInfoDiv, ImgAndNickName, UserImg, UserNickName, Icons, UnLockBtn, LockBtn, ConfigBtn, ConfigDropDown, ConfigMenu } from './UserInfoStyle';

import { useLog } from '../../../../Hooks/useLog';

import { UserInfoProps } from '../../../../types/props/MyLogDetail/UserInfo';
import { MyLogDto } from '../../../../types/api/myLog';
import { UserDto } from '../../../../types/api/user';
import { useLogResult } from '../../../../types/hook/common/useLog';

function UserInfo({ imgUrl, data, deleteMyLog, submitPutIsPublic }: UserInfoProps): JSX.Element {
    const { configLog }: useLogResult = useLog();

    const { content, logSequence, matjip, matjipSequence, ratingPortion, ratingService, ratingTaste, likeCount, comments, user, isPublic, orderingMethod }: MyLogDto = data;
    const { nickname }: UserDto = user;

    const [active, setActive] = useState<boolean>(false);
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
                    <ConfigMenu 
                        onClick={(e) => { configLog(e, {...matjip, ratingPortion, ratingService, ratingTaste}, {logSequence, content, isCustom: false, orderingMethod, isPublic}) }}>
                        수정하기
                    </ConfigMenu>
                    <ConfigMenu onClick={deleteMyLog}>삭제하기</ConfigMenu>
                </ConfigDropDown>
            </Icons>
        </UserInfoDiv>
    )
}

export default UserInfo;