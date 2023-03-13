import { Link } from 'react-router-dom';
import React from 'react';

import { MyPlaceMatjips } from './MyPlaceMatjipStyle';

import { MyPlaceMatjipProps } from '../../../../types/props/MyPlaceMatjip/MyPlaceMatjip';
import { MatjipDto } from '../../../../types/api/matjip';
import MatjipCard from '../MatjipCard/MatjipCard';

function MyPlaceMatjip({ matjipList, setLastCard }: MyPlaceMatjipProps): JSX.Element {

    return <>
        <MyPlaceMatjips>
            {matjipList?.map((value: MatjipDto, index: number): JSX.Element => {
                const {matjipSequence, name, ratingTaste, ratingPortion, ratingService, address, roadAddress, category } = value;
                const scopeNumber = (ratingPortion + ratingService + ratingTaste) / 3;
                const isLastCard = index === matjipList.length - 1;

                return (
                    <Link to={`/search/${matjipSequence}`} key={matjipSequence}>
                        {isLastCard && <div ref={setLastCard} />}
                        <MatjipCard 
                            imgUrl="/assets/images/Matjip.png"
                            category={category}
                            title={name}
                            scopeNumber={scopeNumber}
                            address={roadAddress}
                        />
                    </Link>
                );
            })}
        </MyPlaceMatjips>
    </>
}

export default React.memo(MyPlaceMatjip);