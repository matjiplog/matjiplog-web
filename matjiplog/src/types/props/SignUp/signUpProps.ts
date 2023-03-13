
import { signUpInputType } from "../../userDto";

export interface signUpProps {
  signUpForm : signUpInputType,
  onChangehandler : (e: React.ChangeEvent<HTMLInputElement>) => void;
  emailReadOnly: boolean,
  validText: warningTextType,
  isValid:isvalidType,
  displaySeconds:number,
  displayMinutes:number,
  timer: boolean,
  EventIdDoubleCheck: (e: React.MouseEvent<HTMLDivElement>) => void;
  EventPostSignUp: (e: React.MouseEvent<HTMLDivElement>) => void;
  EventEmailAuthCodeCheck: (e: React.MouseEvent<HTMLDivElement>) => void;
  EventEmailAuthCodeSend: (e: React.MouseEvent<HTMLDivElement>) => void;
}

export interface warningTextType {
  idText : string,
  passwordText : string,
  passwordCheckText : string,
}

export interface isvalidType {
  isId : boolean,
  isPassword : boolean,
  isPasswordConfirm : boolean,
}