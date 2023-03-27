import { useState } from 'react';

import { useActiveHastagResult } from '../../../../types/hook/useActiveHasTag';

export const useActiveHasTag = (addHasTag: (hastag: string) => void, deleteHasTag: (hastag: string) => void): useActiveHastagResult => {
    const [active, setActive] = useState<boolean>(false);
    const toggleActive = (e: React.MouseEvent<HTMLLIElement>) => {
        const hastag = e.currentTarget.textContent;

        if(hastag){
            (!active) ? addHasTag(hastag) : deleteHasTag(hastag);
            setActive((pre) => !pre);
        }
    }
    return { active, toggleActive }
}