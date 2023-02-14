export interface userDto {
  id : string,  // 사용자 ID (이메일 형식)
  password : string, // 비밀번호
  gender : string, // 사용자 성별, 'M' : 남자, 'W' : 여자
  name : string, // 사용자 이름
  phoneNumber : string, // 폰 번호
  nickname : string, // 닉네임
  isActive : boolean, // 탈퇴 여부, 탈퇴 회원 0 <-> 회원 1
  isSnsAccount : string, // SNS 연동 계정 여부, M' : 서비스 계정, 'K' : kakao, 'N' : naver, 'G' : google
  isAdmin : boolean, // 관리자 계정 여부, 관리자 1 <-> 회원 0
  isActiveImg : boolean, // 사진 등록 여부, 사진 등록 1 <-> 미등록 0
  imgName : string, // 사진 이름
  imgPath : string, // 사진 경로
  imgType : string, // 사진 타입
}

