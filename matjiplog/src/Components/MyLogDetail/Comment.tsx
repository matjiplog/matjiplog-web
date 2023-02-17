import { CommentArticle } from '../../styles/mylogDetail/area';
import { CommentDiv, CommentImg, CommentInfo, CommentNickName, CommentNickNameAndTime, CommentTime, CommentContent } from '../../styles/mylogDetail/comment';

interface props {
    imgUrl : string
    nickName : string
    time : number
    content : string
}

function Comment({imgUrl, nickName, time, content}: props): JSX.Element {
    return <CommentArticle>
        <CommentDiv>
            <CommentImg src={imgUrl}></CommentImg>
            <CommentInfo>
                <CommentNickNameAndTime>
                    <CommentNickName>{nickName}</CommentNickName>
                    <CommentTime>{time}</CommentTime>
                </CommentNickNameAndTime>
                <CommentContent>{content}</CommentContent>
            </CommentInfo>
        </CommentDiv>
    </CommentArticle>
}

export default Comment;