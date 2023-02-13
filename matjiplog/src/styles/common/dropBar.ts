import styled from "styled-components";

export const DropBarDiv = styled.div<{ visibled?: string }>`
  position: relative;
  flex-basis: 10%;
  @media screen and (max-width: 700px) {
    flex-basis: 20%;
  }
  visibility: ${(props) => props.visibled || "inherit"};
`;
export const Category = styled.span`
  position: absolute;
  background-color: white;
  color: #ff6701;
  top: -8px;
  left: 6px;
  font-size: 0.5rem;
  z-index: 999;
`;

export const DropBarTitle = styled.div`
  padding: 3em 2em 3em 2em;
  border: 1px solid #6750a4;
  border-radius: 5px;
  height: 40px;
  display: flex;
  align-items: center;
`;
export const DropItems = styled.ul`
  position: absolute;
  width: 100%;
  border: 1px solid #eaeaea;
  border-radius: 5px;
  z-index: 999;

  .select {
    color: #ff6701;
  }
`;
export const DropItem = styled.li`
  width: 100%;
  padding: 3em 2em 3em 2em;
  height: 40px;
  display: flex;
  align-items: center;
  background-color: white;
  &:hover {
    color: #ff6701;
  }
`;
