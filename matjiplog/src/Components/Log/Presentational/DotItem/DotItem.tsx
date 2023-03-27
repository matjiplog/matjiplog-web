import styled from "styled-components";


function DotItem({
  item
} : {
  item : string[],
}){
  return(
    <DotWrapDiv>
      {item.map((value: string, index : number) =>(
        <DotItemDiv key={index}>{value}</DotItemDiv>
      ))}
    </DotWrapDiv>
  );
}

export const DotItemDiv = styled.div`
  border: 1px solid rgb(197,197,197);
  width: 80px;
  height: 40px;
  display : flex;
  justify-content : center;
  align-items : center;
  margin-bottom: 2px;
  &:hover {
    background-color: #f3edf7;
  }
`;
export const DotWrapDiv = styled.div`
  position: absolute;
  background-color: white;
  font-size: 12px;
  font-weight: 700;
  left: -50px;
  top: 25px;
`;

export default DotItem;