import styled from "styled-components";


interface DropDownType {
  items : string[],
}

function DropDown({ items } : DropDownType) : JSX.Element {
  return(
    <Content>
      {items.map((value : string, index: number) : JSX.Element => {
        return <ItemDiv key={index}>{value}</ItemDiv>
      })}
    </Content>
    
  );
}

const ItemDiv = styled.div`
  width: 80px;
  height: 30px;
  display : flex;
  justify-content : center;
  align-items : center;
  &:hover {
    background-color: #f3edf7;
  }
`;
const Content = styled.div`
  justify-content: center;
  position: absolute;
  margin-left : -65px;
  margin-top : -5px;
  background: white;
  box-shadow: 0 4px 5px 0 #00000026;
  border : solid #b4b4b4 1px;
  border-radius: 2px;
`;
export default DropDown;