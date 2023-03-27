import styled from "styled-components";

export const DropBarDiv = styled.div<{ visibled?: string }>`
    position: relative;
    flex: 1 1 10%;
    visibility: ${(props) => props.visibled || "inherit"};

    @media screen and (max-width: 700px) {
        flex: 1 1 20%;
    }
`;

