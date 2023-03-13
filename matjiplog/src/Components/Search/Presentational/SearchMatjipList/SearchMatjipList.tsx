import { Link } from 'react-router-dom';

import SearchMatjipItem from '../SearchMatjipItem/SearchMatjipItem';

import { SearchListGrid } from './SearchMatjipListStyle';

import { MatjipDto } from '../../../../types/api/matjip';
import { SearchMatjipListProps } from '../../../../types/props/SearchMatjip/SearchMatjipList';

function SearchMatjipList({ viewList, setLastCardRef }: SearchMatjipListProps): JSX.Element {
    
    return <SearchListGrid>
        {viewList.map((value: MatjipDto, index: number) => {
        const {matjipSequence, name, ratingTaste, ratingPortion, ratingService, address, roadAddress, category } = value;
        const scopeNumber = (ratingPortion + ratingService + ratingTaste) / 3;
        const isLastCard = index === viewList.length - 1;

        return (
          <Link to={`/search/${matjipSequence}`} key={matjipSequence}>
            <SearchMatjipItem 
              category={category}
              imgUrl="/assets/images/Matjip.png"
              title={name}
              scopeNumber={scopeNumber}
              address={roadAddress}
            />
            {isLastCard && <div ref={setLastCardRef} />}
          </Link>
        );
      })}
    </SearchListGrid>
}

export default SearchMatjipList;