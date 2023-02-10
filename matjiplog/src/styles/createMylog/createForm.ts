import styled from "styled-components";

export const CreateForm = styled.section`
  width: 70%;
  align-self: center;
  flex: 1;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 700px) {
    & {
      width: 60%;
    }
    .detailDiv {
      margin: 0 0 0 0;
    }
  }
`;
export const ImgaeAndInfo = styled.div`
  display: flex;
  flex: 1 1 75%;
  @media screen and (max-width: 700px) {
    & {
      flex-direction: column;
    }
    .scopeAndOptions {
      display: flex;
      .scopeDiv{
        flex: 1 1 50%;
        margin: 0 5em 0 0;
      }
      .optionsDiv{
        flex: 1 1 50%
      }
    }
  }
`;
