import { SearchMatjipItemProps } from '../../../../types/props/SearchMatjip/SearchMatjipItem';

import { MatjipItem, MatjipItemImg, Like, Category, TitleAndScope, Title, NumberAndStar, ScopeNumber, Address, Star, MatjipItemImgDiv} from './SearchMatjipItemStyle';

function SearchMatjipItem({imgUrl, category, title, scopeNumber, address}: SearchMatjipItemProps): JSX.Element{
    let starArray: JSX.Element[]= [];
    for(let i=1 ; i<=5 ; i++) starArray.push(<Star active={i<=scopeNumber ? 1 : 0} key={i}/>);

    return (
      <MatjipItem>
        <Like />
        <MatjipItemImgDiv>
          <MatjipItemImg src={imgUrl} />
        </MatjipItemImgDiv>
        <TitleAndScope>
          <Title>{title}</Title>
          <NumberAndStar>
            <ScopeNumber>{scopeNumber}</ScopeNumber>
            {starArray.map((value: JSX.Element): JSX.Element => {
              return value;
            })}
          </NumberAndStar>
        </TitleAndScope>
        <Category>{category}</Category>
        <Address>{address}</Address>
      </MatjipItem>
    );
}

export default SearchMatjipItem;