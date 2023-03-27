import styled from "styled-components";


export const ItemDiv = styled.div`
  width: 118px;
  height: 40px;
  display : flex;
  justify-content : center;
  align-items : center;
  &:hover {
    background-color: #f3edf7;
  }
`;
export const Content = styled.div`
  font-size: 12px;
  position: absolute;
  top : 53px;
  background: white;
  box-shadow: 0 4px 5px 0 #00000026;
  border : solid #b4b4b4 1px;
  border-radius: 2px;
`;