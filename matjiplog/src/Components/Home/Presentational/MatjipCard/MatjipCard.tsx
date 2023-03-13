import { Name, Category, MatjipCardDiv, NameAndCategory, Address, NumberAndStar, ScopeNumber, Star, ImageDiv, Image } from './MatjipCardStyle';

import { MatjipCardProps } from '../../../../types/props/SearchMatjip/MatjipCard';

function MatjipCard({ imgUrl, category, title, scopeNumber, address }: MatjipCardProps): JSX.Element {
    let starArray: JSX.Element[]= [];
    for(let i=1 ; i<=5 ; i++) starArray.push(<Star active={i<=scopeNumber ? "on" : "off"} key={i}/>);
    
    return (
        <MatjipCardDiv>
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
    )
}

export default MatjipCard