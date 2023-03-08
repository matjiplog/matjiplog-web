import { Result, ResultImg, Title, TitleAndScope, NumberAndStar, Star, ScopeNumber, Address, Like } from '../../styles/search/ResultCard';

import { CardProps } from '../../types/props/Card';

function ResultCard({imgUrl, category, title, scopeNumber, address}: CardProps): JSX.Element{
    let starArray: JSX.Element[]= [];

    for(let i=1 ; i<=5 ; i++) starArray.push(<Star className={i<=scopeNumber ? "on" : "off"} key={i}/>);

    return (
      <Result>
        <Like />
        <ResultImg src={imgUrl}>
        </ResultImg>
        <TitleAndScope>
          <Title>{title}</Title>
          <NumberAndStar>
            <ScopeNumber>{scopeNumber}</ScopeNumber>
            {starArray.map((value: JSX.Element): JSX.Element => {
              return value;
            })}
          </NumberAndStar>
        </TitleAndScope>
        <Address>{address}</Address>
      </Result>
    );
}

export default ResultCard;