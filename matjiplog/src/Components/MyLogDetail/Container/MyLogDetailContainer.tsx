import { useParams } from "react-router-dom"
import { useMutation, useQuery } from 'react-query';

import ImageInfo from '../Presentational/ImageInfo/ImageInfo';
import UserInfo from '../Presentational/UserInfo/UserInfo';
import ContentInfo from '../Presentational/ContentInfo/ContentInfo';
import LikeCommentCount from '../Presentational/LikeCommentCount/LikeCommentCount';
import CommentItem from '../Presentational/CommentList/CommentList';
import CommentForm from '../Presentational/CommentForm/CommentForm';
import Rating from '../Presentational/Rating/Rating';
import LodingSpinner from '../../Common/Loding';

import { CommentArticle, ContentAndRating, ImgAndContent, InfoSection, UserAndContent } from './MyLogInfoContainerStyle';

import { useImageSlideResult } from '../../../types/hook/common/useImageSlide';
import { useInputResult } from '../../../types/hook/useInput';
import { CommentData } from '../../../types/api/myLog';

import { useImageSlide } from '../../../Hooks/useImageSlide';
import { useInput } from '../../../Hooks/useInput';

import { getMyLogDetailData } from '../../../Services/LogAPi';
import { postLogCommnet } from '../../../Services/LogAPi';

function MyLogDetailContainer(): JSX.Element {
    const { log_sequence } = useParams();
    const imageUrl = ["/assets/Home/introbg1.png","/assets/Home/introbg1.png"];
    
    const { slideIndex, leftClick, rightClick }: useImageSlideResult = useImageSlide(imageUrl.length-1);
    const { form, onChangeHandler }: useInputResult = useInput({comment : ""});
    
    const { mutate, isSuccess } = useMutation((commentData: CommentData) => postLogCommnet(commentData));
    const { data, isLoading } = useQuery(["myLogDetail", log_sequence], () => getMyLogDetailData(Number(log_sequence)), { enabled: !!log_sequence, });
    if (isLoading || !data) return <LodingSpinner />;

    const { content, imageSerial, logSequence, matjip, matjipSequence, ratingPortion, ratingService, ratingTaste, userSequence } = data.data;
    const { name, address, category } = matjip;

    const submitComment = () => {
        if(!logSequence || !userSequence || !form?.comment) return;

        const commentData = {
            logSequence: logSequence,
            userSequence: userSequence,
            content: form.comment,
        }

        mutate(commentData);
    }

    return (
        <InfoSection>
            <ImgAndContent>
                <ImageInfo leftClick={leftClick} rightClick={rightClick} slideIndex={slideIndex} />
                <UserAndContent>
                    <UserInfo imgUrl='/assets/images/google.png' nickName='지우초이화이팅' />
                    <ContentAndRating>
                        <ContentInfo title={name} address={address} content={content}/>
                        <Rating ratingPortion={ratingPortion} ratingService={ratingService} ratingTaste={ratingTaste}/>
                    </ContentAndRating>
                </UserAndContent>
            </ImgAndContent>
            <LikeCommentCount likeCount={18} commnetCount={18} />
            <CommentArticle>
                <CommentItem imgUrl='/assets/images/google.png' nickName='이보연개짜증' time={1} content="진짜 이보연 자기마음대로 막 바꾸지말라구요요" />
            </CommentArticle>
            <CommentForm onChangeHandler={onChangeHandler} submitComment={submitComment}/>
        </InfoSection>
        
    )
}

export default MyLogDetailContainer;