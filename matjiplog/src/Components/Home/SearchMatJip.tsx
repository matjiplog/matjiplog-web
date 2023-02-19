import SearchBar from '../Common/SearchBar';
import LodingSpinner from '../Common/Loding';
import ResultCard from './ResultCard';

import { SearchSection, SearchResult } from '../../styles/home/searchMatiJip';

import { getMatjipData } from '../../Services/matjipApi';

import { MatjipDto } from '../../types/api/matjip';

import { useScrollData } from '../../Hooks/useScrollData';

function SearchMatJip(): JSX.Element {
  const { cardList, isLoading, isError, error, setLastCardRef } = useScrollData(getMatjipData, 'matjip');

  return (
    <SearchSection>
      <SearchBar />
      <SearchResult>
      {cardList.map((value: MatjipDto, index: number) => {
        const {matjipSequence, name, ratingTaste, ratingPortion, ratingService, address, roadAddress, category } = value;
        const scopeNumber = ratingPortion + ratingService + ratingTaste;
        const isLastCard = index === cardList.length - 1;

        return (
          <div key={matjipSequence}>
            <ResultCard
              imgUrl="/assets/images/Matjip.png"
              title={name}
              scopeNumber={scopeNumber}
              address={roadAddress}
            />
            {isLastCard && <div ref={setLastCardRef} />}
          </div>
        );
      })}
      </SearchResult>
      {isLoading && <LodingSpinner />}
    </SearchSection>
  );
}

export default SearchMatJip;
