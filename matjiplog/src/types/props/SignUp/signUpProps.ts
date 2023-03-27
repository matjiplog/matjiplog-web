
import { signUpInputType } from "../../userDto";

export interface signUpProps {
  signUpForm : signUpInputType,
  onChangehandler : (e: React.ChangeEvent<HTMLInputElement>) => void;
  emailReadOnly: boolean,
  idReadOnly: boolean,
  validText: warningTextType,
  isValid:isvalidType,
  displaySeconds:number,
  displayMinutes:number,
  timer: boolean,
  EventEmailDoubleCheck: (e: React.MouseEvent<HTMLDivElement>) => void;
  EventIdDoubleCheck: (e: React.MouseEvent<HTMLDivElement>) => void;
  EventPostSignUp: (e: React.MouseEvent<HTMLDivElement>) => void;
  EventEmailAuthCodeCheck: (e: React.MouseEvent<HTMLDivElement>) => void;
  EventEmailAuthCodeSend: (e: React.MouseEvent<HTMLDivElement>) => void;
}

export interface warningTextType {
  emailText : string,
  passwordText : string,
  passwordCheckText : string,
}

export interface isvalidType {
  isEmail : boolean,
  isPassword : boolean,
  isPasswordConfirm : boolean,
}