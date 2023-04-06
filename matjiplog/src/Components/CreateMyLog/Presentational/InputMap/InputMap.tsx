import { FindMap, Write, FindMapTitle, FindMapIcon, WriteAndMap } from './InputMapStyle';

import { useLogResult } from '../../../../types/hook/common/useLog';

import { useLog } from '../../../../Hooks/useLog';

function InputMap(): JSX.Element {
    const { matjip, initWriteLogStore, searchMatjip }: useLogResult = useLog();

    return (
        <FindMap>
            <FindMapTitle>음식점 찾기</FindMapTitle>
            <WriteAndMap>
                <Write 
                    active={matjip.matjipSequence ? 0 : 1}
                    onClick={initWriteLogStore}
                />
                <FindMapIcon 
                    active={matjip.matjipSequence ? 1 : 0}
                    onClick={searchMatjip}
                />
            </WriteAndMap>
        </FindMap>
    );
}

export default InputMap;