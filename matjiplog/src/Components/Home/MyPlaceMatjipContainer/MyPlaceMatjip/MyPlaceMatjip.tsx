import { Link } from 'react-router-dom';

import LodingSpinner from '../../../Common/Loding';

import { MyPlaceMatjips } from './style';

import { MyPlaceMatjipProps } from '../../../../types/props/myPlaceMatjip';
import { MatjipDto } from '../../../../types/api/matjip';
import MatjipCard from '../MatjipCard/MatjipCard';

function MyPlaceMatjip({ isLoading, matjipList, setLastCard }: MyPlaceMatjipProps): JSX.Element {

    return <>
     <MyPlaceMatjips>
        {matjipList.map((value: MatjipDto, index: number): JSX.Element => {
            const {matjipSequence, name, ratingTaste, ratingPortion, ratingService, address, roadAddress, category } = value;
            const scopeNumber = (ratingPortion + ratingService + ratingTaste) / 3;
            const isLastCard = index === matjipList.length - 1;
            
            return <Link to={`/search/${matjipSequence}`} key={matjipSequence}>
                <MatjipCard 
                    imgUrl="/assets/images/Matjip.png"
                    category={category}
                    title={name}
                    scopeNumber={scopeNumber}
                    address={roadAddress}
                />
                {isLastCard && <div ref={setLastCard} />}
            </Link>
        })}
        {isLoading && <LodingSpinner />}
    </MyPlaceMatjips>
    </>
}

export default MyPlaceMatjip;