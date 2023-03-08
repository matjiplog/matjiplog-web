import styled from "styled-components";

export const SkipTextDiv = styled.div`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

export const BackgroundImgDiv = styled.div<{ url : string }>`
  background-image: url(${(props) => props.url || "none"});
  background-repeat: no-repeat;
  background-size: cover;
`;

export const ProfileImgDiv = styled.div<{ url : string }>`
  background-image: url(${(props) => props.url || "none"});
  background-repeat : no-repeat;
  background-size : cover;
  border-radius : 50%;
`;

