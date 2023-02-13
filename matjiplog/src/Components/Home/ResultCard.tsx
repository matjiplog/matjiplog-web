import { Result, ResultImg, Like, Title, TitleAndScope, NumberAndStar, Star, ScopeNumber, Address } from '../../styles/home/ResultCard';

interface ResultCardProps {
  imgUrl : string
  title : string
  scopeNumber : number
  address : string
}

function ResultCard({imgUrl, title, scopeNumber, address}: ResultCardProps): JSX.Element{
    let starArray: JSX.Element[]= [];

    for(let i=1 ; i<=5 ; i++) starArray.push(<Star className={i<=scopeNumber ? "on" : "off"} key={i}/>);

    return (
      <Result>
        <ResultImg imgUrl={imgUrl}>
          <Like />
        </ResultImg>
        <TitleAndScope>
          <Title>{title}</Title>
          <NumberAndStar>
            <ScopeNumber>{scopeNumber}</ScopeNumber>
            {starArray.map((value: JSX.Element): JSX.Element => {
              return value
            })}
          </NumberAndStar>
        </TitleAndScope>
        <Address>{address}</Address>
      </Result>
    );
}

export default ResultCard;