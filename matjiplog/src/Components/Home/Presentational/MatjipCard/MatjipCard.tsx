import { Name, Category, MatjipCardDiv, NameAndCategory, Address, NumberAndStar, ScopeNumber, Star, ImageDiv, Image, Button, Like, Wrtie } from './MatjipCardStyle';

import { MatjipCardProps } from '../../../../types/props/Home/MatjipCard';
import { useLogResult } from '../../../../types/hook/common/useLog';

import { useLog } from '../../../../Hooks/useLog';

function MatjipCard({ data }: MatjipCardProps): JSX.Element {
    const { writeLog }: useLogResult = useLog();

    const { name, ratingTaste, ratingPortion, ratingService, address, roadAddress, category } = data;
    const scopeNumber = (ratingPortion + ratingService + ratingTaste) / 3;
    let starArray: JSX.Element[]= [];

    for(let i=1 ; i<=5 ; i++) starArray.push(<Star active={i<=scopeNumber ? 1 : 0} key={i}/>);
    
    return (
        <MatjipCardDiv>
            <Button><Like /></Button>
            <Button onClick={(e) => {writeLog(e, data)}}><Wrtie/></Button>
            <NameAndCategory>
                <Name>{name}</Name>
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
                <Image src={"/assets/images/Matjip.png"} />
            </ImageDiv>
        </MatjipCardDiv>
    )
}

export default MatjipCard