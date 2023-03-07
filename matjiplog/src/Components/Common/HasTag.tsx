import { useState } from 'react';
import { HasTagItem } from '../../styles/common/searchBar'

import { HasTagProps } from '../../types/props/hasTag'
import { hastagState } from '../../types/store/hastag';

import { hastagStore } from '../../stores/hastag';

function HasTag({value}: HasTagProps): JSX.Element {
    const { hastags, addHastag, deleteHastag }: hastagState = hastagStore();
    const [active, setActive] = useState<boolean>(false);
    const toggleActive = (e: React.MouseEvent<HTMLLIElement>) => {
        const hastag = e.currentTarget.textContent;

        if(!hastag) return;

        (!active) ? addHastag(hastag) : deleteHastag(hastag);
        setActive((pre) => !pre);
    }

    return <HasTagItem className={active ? "active" : ""} onClick={toggleActive}>{value}</HasTagItem>
}

export default HasTag;