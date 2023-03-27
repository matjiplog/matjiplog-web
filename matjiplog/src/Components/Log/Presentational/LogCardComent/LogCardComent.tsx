import { ProfileImg } from "../LogCard/style";
import { LikeFullIcon } from "../../../../styles/icons";
import { commentDto } from "../../../../types/logDto";
import { ComentDiv, ComentTextDiv, TextP } from "./style";

function LogCardComent({
  commentInfo,
} : {
  commentInfo : commentDto,
}) {
  return(
    <>
      <ComentDiv>
        <ProfileImg url="/assets/images/loginPicture.png"  style={{marginTop:"5px"}}></ProfileImg>
        <ComentTextDiv>
          <p style={{fontSize:"12px", fontWeight:"bolder"}}>{commentInfo.user.nickname}</p>
          <TextP>{commentInfo.content}</TextP>
        </ComentTextDiv>
        <div><LikeFullIcon size={15} color="red" style={{marginTop:"5px"}}></LikeFullIcon></div>
      </ComentDiv>
    </>
  );
}

export default LogCardComent;