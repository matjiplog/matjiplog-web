import styled from "styled-components";


export const SearchBarDiv = styled.article`
  display: flex;
`;

export const InputAndHastag = styled.div<{ visibled?: string }>`
    display: flex;
    flex-direction: column;
    flex: 1 1 85%;
    width: 85%;
    margin-left: 10px;
    visibility: ${(props) => props.visibled || "inherit"};
`;
