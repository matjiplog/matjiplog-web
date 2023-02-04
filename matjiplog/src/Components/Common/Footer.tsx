import styled from "styled-components";

function Footer() {
  return <FooterDiv>@2023 맛집로그 All rights reserved.</FooterDiv>;
}

const FooterDiv = styled.div`
  width: 100%;
  height: 50px;
  border-top: 1px solid #c4c4c4;
  padding: 15px;
  color: #808080;
  position: relative;
  bottom: 0;
  transform: translateY(-100%);
`;

export default Footer;
