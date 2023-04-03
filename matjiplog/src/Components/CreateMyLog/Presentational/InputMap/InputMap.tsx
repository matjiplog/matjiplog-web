import { FindMap, Write, FindMapTitle, FindMapIcon, WriteAndMap } from './InputMapStyle';

import { WriteLogState } from '../../../../types/store/writeLog';
import { InputMapProps } from '../../../../types/props/CreateMyLog/InputMap';

import { writeLogStore } from '../../../../stores/writeLog';

function InputMap({ searchMatjipInfo }: InputMapProps): JSX.Element {
    const { matjip, initWriteLogStore }: WriteLogState = writeLogStore();

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
                    onClick={searchMatjipInfo}
                />
            </WriteAndMap>
        </FindMap>
    );
}

export default InputMap;