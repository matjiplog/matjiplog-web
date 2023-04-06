import React from 'react';

import { MyPlaceMatjips } from './MyPlaceMatjipStyle';
import MatjipCard from '../MatjipCard/MatjipCard';

import { MyPlaceMatjipProps } from '../../../../types/props/MyPlaceMatjip/MyPlaceMatjip';
import { MatjipDto } from '../../../../types/api/matjip';

import { useNavigateUrl } from '../../../../Hooks/useNavigateUrl';

function MyPlaceMatjip({ matjipList, setLastCard }: MyPlaceMatjipProps): JSX.Element {
    const { handleUrl } = useNavigateUrl();

    return <>
        <MyPlaceMatjips>
            {matjipList?.map((matjip: MatjipDto, index: number): JSX.Element => {
                const { matjipSequence } = matjip;
                const isLastCard = index === matjipList.length - 1;

                return (
                    <div key={matjipSequence} onClick={() => {handleUrl(`/search/${matjipSequence}`)}}>
                        {isLastCard && <div ref={setLastCard} />}
                        <MatjipCard data={matjip}/>
                    </div>
                );
            })}
        </MyPlaceMatjips>
    </>
}

export default React.memo(MyPlaceMatjip);