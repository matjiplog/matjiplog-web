import { useParams } from "react-router-dom"

import ImageInfo from '../Presentational/ImageInfo/ImageInfo';
import UserInfo from '../Presentational/UserInfo/UserInfo';
import ContentInfo from '../Presentational/ContentInfo/ContentInfo';
import LikeCommentCount from '../Presentational/LikeCommentCount/LikeCommentCount';
import CommentItem from '../Presentational/CommentList/CommentList';

import { CommentArticle, ImgAndContent, InfoSection, UserAndContent } from './MyLogInfoContainerStyle';

import { useImageSlideResult } from '../../../types/hook/common/useImageSlide';

import { useImageSlide } from '../../../Hooks/useImageSlide';


function MyLogDetailContainer(): JSX.Element {
    const { mylogId } = useParams();
    const imageUrl = ["/assets/Home/introbg1.png","/assets/Home/introbg1.png"];
    const { slideIndex, leftClick, rightClick }: useImageSlideResult = useImageSlide(imageUrl.length-1);


    return (
        <InfoSection>
            <ImgAndContent>
                <ImageInfo leftClick={leftClick} rightClick={rightClick} slideIndex={slideIndex} />
                <UserAndContent>
                    <UserInfo imgUrl='/assets/images/google.png' nickName='지우초이화이팅' />
                    <ContentInfo title="백종원의 삼겹살" address='대구 달서구 월서로 31' content='그냥 설명하는 부분 그냥 그냥..'/>
                </UserAndContent>
            </ImgAndContent>
            <LikeCommentCount likeCount={18} commnetCount={18} />
            <CommentArticle>
                <CommentItem imgUrl='/assets/images/google.png' nickName='이보연개짜증' time={1} content="진짜 이보연 자기마음대로 막 바꾸지말라구요요" />
            </CommentArticle>
        </InfoSection>
        
    )
}

export default MyLogDetailContainer;