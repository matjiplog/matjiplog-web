export interface userDto {
  id : string,  // 사용자 ID (이메일 형식)
  password : string, // 비밀번호
  gender : string, // 사용자 성별, 'M' : 남자, 'W' : 여자
  name : string, // 사용자 이름
  phoneNumber : string, // 폰 번호
  nickname : string, // 닉네임
  isSnsAccount : string, // SNS 연동 계정 여부, M' : 서비스 계정, 'K' : kakao, 'N' : naver, 'G' : google
}

//   "id": "matjiplog@gmail.com",
//   "password": "string",
//   "gender": "M",
//   "name": "홍길동",
//   "phoneNumber": "01012345678",
//   "nickname": "string",
//   "isActive": false,
//   "isSnsAccount": "M",
//   "isAdmin": false
