import { NavigateFunction, useParams } from "react-router-dom"
import { QueryClient, useMutation, useQuery, useQueryClient } from 'react-query';
import { useNavigate } from "react-router-dom";

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
import { PutIsPublicRequest, PostCommentRequest, CommentDto } from '../../../types/api/myLog';

import { useImageSlide } from '../../../Hooks/useImageSlide';
import { useInput } from '../../../Hooks/useInput';

import { deleteMyLogData, getMyLogDetailData, putLogIsPublic, postLogComment, getLogCommentData, deleteCommentData } from '../../../Services/LogAPi';

function MyLogDetailContainer(): JSX.Element {
    const { log_sequence }: any = useParams();
    const urlHandler: NavigateFunction = useNavigate();
    const queryClient: QueryClient = useQueryClient();
    const logSequence = Number(log_sequence);
    const userSequence = 22;

    const imageUrl = ["/assets/Home/introbg1.png", "/assets/Home/introbg1.png"];
    const { slideIndex, leftClick, rightClick }: useImageSlideResult = useImageSlide(imageUrl.length - 1);
    const { form, onChangeHandler }: useInputResult = useInput({ comment: "" });

    const myLogDetail = useQuery(["myLogDetail", logSequence], () => getMyLogDetailData(logSequence), { enabled: !!logSequence, });
    const logComment = useQuery(["logComment", logSequence], () => getLogCommentData(logSequence), { enabled: !!logSequence, });
    
    const commentPostMutaion = useMutation((commentData: PostCommentRequest) => postLogComment(commentData), {
        onSuccess() {
            queryClient.invalidateQueries(["logComment", logSequence]);
        }
    });
    const myLogDeleteMutation = useMutation((logSequence: number) => deleteMyLogData(userSequence, logSequence), {
        onSuccess() {
            urlHandler("/mylog");
        }
    });
    const commentDeleteMutation = useMutation((comment_sequence: number) => deleteCommentData(comment_sequence, userSequence), {
        onSuccess() {
            queryClient.invalidateQueries(["logComment", logSequence]);
        }
    });
    const isPublicPutMutation = useMutation((logPublicData: PutIsPublicRequest) => putLogIsPublic(logPublicData), {
        onSuccess() {
            queryClient.invalidateQueries(["myLogDetail", logSequence]);
        }
    });
    
    const submitPostComment = (e: React.MouseEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!logSequence || !userSequence || !form?.comment) return alert("실패");

        commentPostMutaion.mutate({ logSequence, userSequence, content: form.comment });
        e.currentTarget.comment.value = "";
    };

    const deleteMyLog = () => {
        if (!logSequence) return alert("실패");

        myLogDeleteMutation.mutate(logSequence);
    };

    const deleteCommnet = (comment_sequence: number) => {
        if(!comment_sequence) return alert("실패");

        commentDeleteMutation.mutate(comment_sequence);
    }

    const submitPutIsPublic = (isPublic: boolean) => {
        if (!logSequence || !userSequence) return alert("실패");

        isPublicPutMutation.mutate({ logSequence, userSequence, isPublic: !isPublic });
    };

    if (myLogDetail?.isLoading || !myLogDetail?.data?.data ) return <LodingSpinner />;

    return (
        <InfoSection>
            <ImgAndContent>
                <ImageInfo 
                    leftClick={leftClick}
                    rightClick={rightClick}
                    slideIndex={slideIndex}
                />
                <UserAndContent>
                    <UserInfo 
                        imgUrl='/assets/images/google.png'
                        data={myLogDetail.data.data}
                        deleteMyLog={deleteMyLog}
                        submitPutIsPublic={submitPutIsPublic}    
                    />
                    <ContentAndRating>
                        <ContentInfo data={myLogDetail.data.data} />
                        <Rating data={myLogDetail.data.data} />
                    </ContentAndRating>
                </UserAndContent>
            </ImgAndContent>
            <LikeCommentCount data={myLogDetail.data.data} />
            <CommentArticle>
                {logComment?.data?.data.map((comment: CommentDto) => {
                    const { commentSequence }: CommentDto = comment
                    return (
                        <CommentItem 
                            key={commentSequence}
                            imgUrl='/assets/images/google.png'
                            userSequence={userSequence}
                            data={comment}
                            deleteCommnet={deleteCommnet}
                        />
                    )
                })}
            </CommentArticle>
            <CommentForm
                onChangeHandler={onChangeHandler}
                submitPostComment={submitPostComment}
            />
        </InfoSection>
        
    )
}

export default MyLogDetailContainer;