import styled from "styled-components";

export const CreateForm = styled.section`
  width: 75%;
  flex: 1;
  align-self: center;
  align-content: center;
  display: flex;
  flex-direction: column;
`;
export const ImgaeAndInfo = styled.div`
  display: flex;
  flex: 1 1 80%;
  @media screen and (max-width: 830px) {
    & {
      flex-direction: column;
    }

    div {
      margin: 0em;
    }
    h3 {
      font-size: 1rem;
    }
    label {
      font-size: 1.2rem;
    }

    .map,
    .disclosure,
    .scopeAndOptions {
      margin-bottom: 2em;
    }
    .dropbar {
      margin-top: 3em;
    }
    .inofoDiv {
      padding: 2em 10em 2em 10em;
    }
    .imgAddBtn {
      padding: 1em;
    }
    .optionsDiv {
      display: flex;

      > h3 {
        margin-right: 20em;
      }
    }
  }
`;
