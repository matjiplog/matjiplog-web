import { Star, TitleAndScope, Title, NumberAndStar, ScopeNumber, Category, Address } from './MatjipInfoStlye';

import { MatjipInfoProps } from '../../../../types/props/SearchMatjip/MatjipInfo';

function MatjipInfo({ data }: MatjipInfoProps): JSX.Element {
    const { name, ratingTaste, ratingPortion, ratingService, address, category } = data;
    const scopeNumber = (ratingPortion + ratingService + ratingTaste) / 3;
    let starArray: JSX.Element[]= [];

    for(let i=1 ; i<=5 ; i++) starArray.push(<Star active={i<=scopeNumber ? 1 : 0} key={i}/>);

    return (
        <>
            <TitleAndScope>
                <Title>{name}</Title>
                <NumberAndStar>
                    <ScopeNumber>{scopeNumber}</ScopeNumber>
                    {starArray.map((value: JSX.Element): JSX.Element => {
                        return value;
                    })}
                </NumberAndStar>
            </TitleAndScope>
            <Category>{category}</Category>
            <Address>{address}</Address>
        </>    
    )
}

export default MatjipInfo;