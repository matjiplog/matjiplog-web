import { Link } from 'react-router-dom';
import React from 'react';

import { MyPlaceMatjips } from './MyPlaceMatjipStyle';

import { MyPlaceMatjipProps } from '../../../../types/props/MyPlaceMatjip/MyPlaceMatjip';
import { MatjipDto } from '../../../../types/api/matjip';
import MatjipCard from '../MatjipCard/MatjipCard';

function MyPlaceMatjip({ matjipList, setLastCard }: MyPlaceMatjipProps): JSX.Element {

    return <>
        <MyPlaceMatjips>
            {matjipList?.map((matjip: MatjipDto, index: number): JSX.Element => {
                const { matjipSequence } = matjip;
                const isLastCard = index === matjipList.length - 1;

                return (
                    <Link to={`/search/${matjipSequence}`} key={matjipSequence}>
                        {isLastCard && <div ref={setLastCard} />}
                        <MatjipCard 
                            data={matjip}
                        />
                    </Link>
                );
            })}
        </MyPlaceMatjips>
    </>
}

export default React.memo(MyPlaceMatjip);