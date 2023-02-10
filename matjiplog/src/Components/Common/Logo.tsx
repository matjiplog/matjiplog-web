import styled from "styled-components";
import { useNavigate } from "react-router-dom";

function Logo() {
  const navigate = useNavigate();
  return(
    <LogoDiv onClick={() => {
      return navigate("/", { replace: true});
    }}></LogoDiv>
  )
}


const LogoDiv = styled.div`
  background-image: url("/assets/images/logo.png");
  width: 270px;
  height: 100px;
  background-repeat : no-repeat;
  background-size : cover;
  margin-top : 2%;
  cursor: Pointer;
`;

export default Logo;