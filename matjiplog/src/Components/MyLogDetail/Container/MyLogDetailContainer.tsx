import { useParams } from "react-router-dom"
import { QueryClient, useMutation, useQuery, useQueryClient } from 'react-query';
import { useEffect, useRef, useState } from 'react';

import ImageInfo from '../Presentational/ImageInfo/ImageInfo';
import UserInfo from '../Presentational/UserInfo/UserInfo';
import ContentInfo from '../Presentational/ContentInfo/ContentInfo';
import LikeCommentCount from '../Presentational/LikeCommentCount/LikeCommentCount';
import CommentItem from '../Presentational/CommentList/CommentList';
import CommentForm from '../Presentational/CommentForm/CommentForm';
import Rating from '../Presentational/Rating/Rating';
import LodingSpinner from '../../Common/Loding';

import { CommentItems, ContentAndRating, ImgAndContent, InfoSection, NonSearchDiv, UserAndContent } from './MyLogInfoContainerStyle';

import { useImageSlideResult } from '../../../types/hook/common/useImageSlide';
import { useInputResult } from '../../../types/hook/common/useInput';
import { PutIsPublicRequest, PostCommentRequest, CommentDto } from '../../../types/api/myLog';
import { useObserverPageResult } from '../../../types/hook/common/useObserverpage';
import { UserState } from '../../../types/store/user';

import { useImageSlide } from '../../../Hooks/useImageSlide';
import { useInput } from '../../../Hooks/useInput';
import { useObserverPage } from '../../../Hooks/useObserverPage';
import { useNavigateUrl } from '../../../Hooks/useNavigateUrl';

import { deleteMyLogData, getMyLogDetailData, putLogIsPublic, postLogComment, getLogCommentData, deleteCommentData } from '../../../Services/LogAPi';

import { userStore } from '../../../stores/user';

function MyLogDetailContainer(): JSX.Element {
    const queryClient: QueryClient = useQueryClient();

    const imageUrl = ["/assets/Home/introbg1.png", "/assets/Home/introbg1.png"];
    const commentRef = useRef<HTMLDivElement>(null);
    const { log_sequence }: any = useParams();
    const logSequence = Number(log_sequence);
    const [emojiActive, setEmogiActive] = useState<boolean>(false);

    const { isLogin, userSequence }: UserState = userStore();
    const { handleUrl } = useNavigateUrl();    
    const { page, initPage, setLastCardRef }: useObserverPageResult = useObserverPage();
    const { slideIndex, leftClick, rightClick }: useImageSlideResult = useImageSlide(imageUrl.length - 1);
    const { form, onChangeHandler, selectEmogi }: useInputResult = useInput({ comment: "" });

    const myLogDetail = useQuery(["myLogDetail", logSequence], () => getMyLogDetailData(logSequence), { enabled: !!logSequence });
    const logComment = useQuery(["logComment", logSequence], () => getLogCommentData(logSequence, page), { enabled: !!logSequence });
    
    const commentPostMutaion = useMutation((commentData: PostCommentRequest) => postLogComment(commentData), {
        onSuccess() {
            queryClient.invalidateQueries(["logComment", logSequence]);
            queryClient.invalidateQueries(["myLogDetail", logSequence]);
        }
    });
    const myLogDeleteMutation = useMutation((logSequence: number) => deleteMyLogData(userSequence, logSequence), {
        onSuccess() {
            handleUrl("/mylog");
        }
    });
    const commentDeleteMutation = useMutation((comment_sequence: number) => deleteCommentData(comment_sequence, userSequence), {
        onSuccess() {
            queryClient.invalidateQueries(["logComment", logSequence]);
            queryClient.invalidateQueries(["myLogDetail", logSequence]);
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

    useEffect(() => {
        if(!isLogin || !userSequence) return handleUrl("/login");
    }, [])

    useEffect(() => {
        if(commentRef?.current) commentRef.current.scrollTop = commentRef.current.scrollHeight;
    }, [logComment?.data?.data])

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
            <CommentItems ref={commentRef} emojiActive={emojiActive}>
                {logComment?.data?.data.map((comment: CommentDto, index: number) => {
                    const { commentSequence }: CommentDto = comment;
                    const isLastCard = logComment?.data?.data?.length === index + 1;

                    return (
                        <div key={commentSequence}>
                            <CommentItem 
                                imgUrl='/assets/images/google.png'
                                userSequence={userSequence}
                                data={comment}
                                deleteCommnet={deleteCommnet}
                            />
                            {isLastCard && <div ref={setLastCardRef} />}
                        </div>
                    )
                })}
                {!logComment?.data?.data.length && !logComment.isLoading && <NonSearchDiv>댓글이 없습니다.<br></br>댓을을 작성해보세요!</NonSearchDiv>}
            </CommentItems>
            <CommentForm
                emojiActive={emojiActive}
                handleEmogiSelect={handleEmogiSelect}
                toggleEmogiActive={toggleEmogiActive}
                comment={form}
                onChangeHandler={onChangeHandler}
                submitPostComment={submitPostComment}
            />
        </InfoSection>
    )

    function handleEmogiSelect(emoji: any) {
        selectEmogi(emoji);
        toggleEmogiActive();
    }

    function toggleEmogiActive() {
        setEmogiActive((prev) => !prev);
    }
}

export default MyLogDetailContainer;