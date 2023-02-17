import { InfoArticle } from '../../styles/mylogDetail/area';
import { ConfigBtn, ConfigDropDown, ConfigMenu, Icons, ImgAndNickName, LockBtn, MatjipAddress, MatjipContent, MatjipInfo, MatjipTitle, UnLockBtn, UserImg, UserInfo, UserNickName } from '../../styles/mylogDetail/info';

interface props {
    imgUrl : string
    nickName : string
    disclosure : boolean
    matjipTitle : string
    matjipAddress : string
    matjipContent : string
}

function Info({ imgUrl, nickName, disclosure, matjipTitle, matjipAddress, matjipContent }: props): JSX.Element {
    return <InfoArticle>
        <UserInfo>
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
        </UserInfo>
        <MatjipInfo>
            <MatjipTitle>{matjipTitle}</MatjipTitle>
            <MatjipAddress>{matjipAddress}</MatjipAddress>
            <MatjipContent>{matjipContent}</MatjipContent>
        </MatjipInfo>
    </InfoArticle>
}

export default Info;