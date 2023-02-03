import styled from "styled-components";

function SideImage() {
  return(
    <ImgDiv></ImgDiv>
  );
}

const ImgDiv = styled.div`
  @media screen and (min-width: 830px){
    border : solid #b4b4b4 1px;
    border-radius: 6px;
    width: 350px;
    height: 500px;
    background-image: url("/assets/images/loginPicture.png");
    margin-top : 2%;
    margin-right : 10px;
    box-shadow: 0px 0px 10px 3px rgba(190, 190, 190, 0.6);
  }
`;

export default SideImage;