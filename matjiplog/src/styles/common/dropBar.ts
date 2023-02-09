import styled from "styled-components";

export const DropBarDiv = styled.div`
  position: relative;
  flex: 1 1 15%;
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
`;
export const DropItems = styled.ul`
  position: absolute;
  width: 100%;
  border: 1px solid #eaeaea;
  border-radius: 5px;
  z-index: 999;
`;
export const DropItem = styled.li`
  width: 100%;
  padding: 3em 2em 3em 2em;

  &:hover {
    color: #ff6701;
  }
`;
