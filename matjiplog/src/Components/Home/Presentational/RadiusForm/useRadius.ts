import { useState } from 'react';

import { useRadiusResult } from '../../../../types/hook/useRadius';

export const useRadius = (): useRadiusResult => {
    const [radius, setRadius] = useState<number>(1);

    const inquireRadiusHandler = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const newRadius = e.currentTarget.radius.value;

        if(!newRadius || isNaN(newRadius)) alert("Only Number!");
        else setRadius(Number(newRadius));

        e.currentTarget.radius.value = "";
        e.currentTarget.focus();
    }

    return { radius, inquireRadiusHandler }
}