import { useParams } from "react-router-dom"

import HeaderContainer from '../Components/Common/Container/Header/HeaderContainer';
import FooterContainer from '../Components/Common/Container/Footer2/FooterContainer';
import AddComment from '../Components/MyLogDetail/AddComment';
import Comment from '../Components/MyLogDetail/Comment';
import Count from '../Components/MyLogDetail/Count';
import Img from '../Components/MyLogDetail/Img';
import Info from '../Components/MyLogDetail/Info';

import { MylogDetailWrap } from '../styles/common/wrap';
import { ImgAndInfo, InfoSection } from '../styles/mylogDetail/area';

function MyLogDetailPage(): JSX.Element {
    const { mylogId } = useParams();

    return <MylogDetailWrap>
        <HeaderContainer /> 
        <InfoSection>
            <ImgAndInfo>
                <Img imgsUrl={["/assets/Home/introbg1.png","/assets/Home/introbg1.png"]}/>
                <Info imgUrl='/assets/images/google.png' nickName='지우초이화이팅' disclosure={true} matjipTitle="백종원의 삼겹살" matjipAddress='대구 달서구 월서로 31' matjipContent='그냥 설명하는 부분 그냥 그냥..'/>
            </ImgAndInfo>
            <Count likeCount={17} commnetCount={30}></Count>
            <Comment imgUrl='/assets/images/google.png' nickName='이보연개짜증' time={1} content="진짜 이보연 자기마음대로 막 바꾸지말라구요요"/>
            <AddComment />
        </InfoSection>
        <FooterContainer />
    </MylogDetailWrap>
}

export default MyLogDetailPage