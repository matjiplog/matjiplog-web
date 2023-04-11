import { TabDiv, TabLi } from "./style";

function MatjipTab({
  tabList, 
  tabindex,
  TabClick
} : {
  tabList : string[],
  tabindex : number,
  TabClick : (index: number) => void
}) {

  return (
    <>
      <TabDiv>
        {tabList.map((value : string, index: number) : JSX.Element =>{
          return <TabLi key={index} focus={tabindex === index ? "isactive" : ""}  onClick={() => TabClick(index)}>{value}</TabLi>
        })}
      </TabDiv>
    </>
  );
}

export default MatjipTab;