import styled from "styled-components";

function Logo() {
  return(
    <LogoDiv></LogoDiv>
  )
}


const LogoDiv = styled.div`
  background-image: url("/assets/images/logo.png");
  width: 270px;
  height: 100px;
  background-repeat : no-repeat;
  background-size : cover;
  margin-top : 2%;
`;

export default Logo;