import { Name, Category, MatjipCardDiv, NameAndCategory, Address, NumberAndStar, ScopeNumber, Star, ImageDiv, Image } from './style';

import { CardProps } from '../../../../types/props/Card';

function MatjipCard({ imgUrl, category, title, scopeNumber, address }: CardProps): JSX.Element {
    let starArray: JSX.Element[]= [];
    for(let i=1 ; i<=5 ; i++) starArray.push(<Star className={i<=scopeNumber ? "on" : "off"} key={i}/>);
    
    return <MatjipCardDiv>
        <NameAndCategory>
            <Name>{title}</Name>
            <Category>{category}</Category>
        </NameAndCategory>
        <Address>{address}</Address>
        <NumberAndStar>
            <ScopeNumber>{scopeNumber}</ScopeNumber>
            {starArray.map((value: JSX.Element): JSX.Element => {
              return value;
            })}
        </NumberAndStar>
        <ImageDiv>
            <Image src={imgUrl} />
        </ImageDiv>
    </MatjipCardDiv>
}

export default MatjipCard