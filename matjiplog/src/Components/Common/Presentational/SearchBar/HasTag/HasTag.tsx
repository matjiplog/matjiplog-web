import { useContext } from 'react';

import { HasTagItem } from './HasTagStyle';

import { HasTagProps } from '../../../../../types/props/Searchbar/HasTag';
import { useActiveHastagResult } from '../../../../../types/hook/useActiveHasTag';

import { handlerContext } from '../../../../../Contexts/handler';

import { useActiveHasTag } from '../useActiveHasTag';

function HasTag({ hasTagTitle }: HasTagProps): JSX.Element {
    const { addHasTag, deleteHasTag } = useContext(handlerContext);
    const { active, toggleActive }: useActiveHastagResult = useActiveHasTag(addHasTag, deleteHasTag);

    return <HasTagItem active={active} onClick={toggleActive}>{hasTagTitle}</HasTagItem>
}

export default HasTag;