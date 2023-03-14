import styled from "styled-components";
import { DivGrayRadius6, InputGrayRadius6, InputMainRadius6 } from "../../../../styles/borderStyle";
import { BackgroundImgDiv } from "../../../../styles/divStyle";
import { FlexColumn, FlexRowBetweenCenter, FlexRowCenterCenter } from "../../../../styles/flexStyle";


export const SocialDiv = styled(FlexRowBetweenCenter)`
  margin-top: 50px;
  margin-bottom: 20px;
  width: 150px;
`;

export const SocialIcon = styled(BackgroundImgDiv)`
  width: 38px;
  height: 40px;
`;

export const LineDiv = styled(FlexRowBetweenCenter)`
  margin-top : 40px;
  width: 274px;
`;

export const InputLogin = styled(InputGrayRadius6)`
  width: 274px;
  height: 35px;
  padding-left : 10px;
  margin-top: 5px;
`;

export const LoginBtn = styled(InputMainRadius6)`
  margin-top : 20px;    
  width: 274px;
  height: 35px;
  background-color : #FF6701;
  color: white;
`;

export const SignUpBtn = styled(FlexRowCenterCenter)`
  margin-top : 15px;    
  width: 274px;
  height: 35px;
  font-size: 12px;
  cursor: pointer;
`;

export const IdDiv = styled(FlexColumn)`
  margin-top : 40px;
`;

export const PwDiv = styled(FlexColumn)`
  margin-top : 10px;
`;

export const InputForm = styled.form`
  border : solid #b4b4b4 1px;
  border-radius: 6px;
  width: 350px;
  margin-top : 2%;
  margin-left : 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 0px 10px 3px rgba(190, 190, 190, 0.6);
`;