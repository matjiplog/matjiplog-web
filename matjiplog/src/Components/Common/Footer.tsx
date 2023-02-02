import styled from "styled-components";

function Footer() {
    return(
        <FooterDiv>
            <FooterP>@2023 맛집로그 All rights reserved.</FooterP>
        </FooterDiv>
    );
}

const FooterDiv = styled.div`
    width: 100%;
    height: 50px;
    bottom: 0px;
    position: absolute;
    border-top: 1px solid #c4c4c4;
    padding-top: 15px;
`

const FooterP = styled.p`
    margin-left : 50px;
    color: #808080;
`;


export default Footer;