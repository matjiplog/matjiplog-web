import styled from "styled-components";
import { FlexRow, FlexRowAlignCenter, FlexRowCenterCenter } from "../../../../styles/flexStyle";


export const RadioText = styled.span`
  font-size : 12px;
  font-weight: 700;
  vertical-align: middle;
  margin-left: 3px;
  margin-right: 15px;
`;
export const InputRadio = styled.input`
  vertical-align: middle;
  appearance: none;
  border: 2px solid gray;
  border-radius: 50%;
  width: 15px;
  height: 15px;
  cursor: pointer;
  :checked {
    border: 5px solid tomato;
  }
`;

export const GenderInputDiv = styled(FlexRowAlignCenter)`
  position: relative;
  width: 290px;
  margin-right: 90px;
  height: 30px;
`;

export const ValidDiv = styled.div<{ valid: string }>`
  width: 290px;
  height: 30px;
  margin: -10px 90px 0px 110px;
  color : ${props => props.valid === "false" ? "red" : "rgb(174,174,174)"};
  
`;
// color: rgb(174,174,174);
export const EmailBtn = styled(FlexRowCenterCenter)`
  width: 70px;
  height: 35px;
  color: #FF6701;
  border: 1px solid #FF6701;
  border-radius: 3px;
  margin-left: 20px;
  font-weight: 700;
  cursor : pointer;
  &:hover{
    transform: scale(1.1);
  }
`;
export const ElementInput = styled.input<{ border : string}>`
  font-size: 10px;
  width: 290px;
  height: 35px;
  padding : 0px 10px 0px 10px;
  border: 1px solid;
  border-color: ${props => props.border};
  outline: none;
  overflow: hidden;
  margin-right: 90px;
`;

export const EmailInput = styled.input< {border : string, background : string} >`
  font-size: 10px;
  width: 290px;
  height: 35px;
  padding : 0px 10px 0px 10px;
  border: 1px solid;
  border-color: ${props => props.border};
  outline: none;
  overflow: hidden;
  background-color: ${props => props.background};
`;

export const EmailAuthCodeInput = styled(EmailInput)`
  width: 200px;
`;

export const ElementP = styled.p`
  margin-right: 30px;
  font-size : 12px;
  font-weight: 700;
  width: 80px;
  height: 35px;
  display: flex;
  align-items: center;
`;

export const ElementDiv = styled(FlexRow)`
  display: flex;
  margin-bottom: 20px;
`;

export const TextH = styled.h2`
  color: rgb(142, 142, 142);
  font-size: 17px;
  font-weight: 600;
  line-height: 25px;
  margin: 0px 40px 0px 40px;
  text-align: center;
`;

export const SignUpBtn = styled(FlexRowCenterCenter)`
  border: 1px solid rgb(219,219,219);
  border-radius: 3px;
  width: 350px;
  height: 35px;
  font-size: 12px;
  background-color: #FF6701;
  color: white;
  font-weight: 700;
  margin-top: 20px;
  margin-bottom: 10px;
`;