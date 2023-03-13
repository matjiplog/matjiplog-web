import HasTag from '../HasTag/HasTag';

import { HasTagUl } from './HasTagListStyle';

import { HasTagListProps } from '../../../../../types/props/Searchbar/HasTagList';

function HasTagList({ hasTagList }: HasTagListProps): JSX.Element {

    return  (
        <HasTagUl>
            {hasTagList.map((value: string, index: number): JSX.Element => {
                return <HasTag key={index} hasTagTitle={value} />;
            })}
        </HasTagUl>
    )
    
}

export default HasTagList;