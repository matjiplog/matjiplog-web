export interface userDto {
  userSequence : number,
  id : string,
  email : string,
  password : string,
  gender : string, // 사용자 성별, 'M' : 남자, 'W' : 여자
  name : string,
  phoneNumber : string,
  nickname : string,
  isSnsAccount : string, // SNS 연동 계정 여부, M' : 서비스 계정, 'K' : kakao, 'N' : naver, 'G' : google
  imageSerial : string,
}

export interface signUpInputType {
  email : string,
  id : string,  // 사용자 ID (이메일 형식)
  password : string, // 비밀번호
  gender : string, // 사용자 성별, 'M' : 남자, 'W' : 여자
  name : string, // 사용자 이름
  phoneNumber : string, // 폰 번호
  nickname : string, // 닉네임
  isSnsAccount : string, // SNS 연동 계정 여부, M' : 서비스 계정, 'K' : kakao, 'N' : naver, 'G' : google
  authCode?: string,
  passwordConfirm? : string,
}

export interface ResponseLogUserDto {
  userSequence : number,
  id : string,
  name : string,
  nickname : string,
  imageSerial : string,
  imageDetail: imageDetailDto[],
}

export interface imageDetailDto {
  registerDate: string,
  imageSerial: string,
  name: string,
  path: string,
  type: string,
  registerId: number,
}