import { useLog } from '../../../../Hooks/useLog';
import { useLogResult } from '../../../../types/hook/common/useLog';
import DropBarContinaer from '../../../Common/Container/DropBar/DropBarContainer';

import { OptionsDiv, OptionsTitle } from './InputOptionStyle';

function InputOtion(): JSX.Element {
    const dropList: string[] = ["선택 없음", "매장 방문", "포장", "배달"];
    const { log }: useLogResult = useLog();
    const { orderingMethod } = log;

    return (
        <OptionsDiv>
            <OptionsTitle>주문 방식</OptionsTitle>
            <DropBarContinaer title={orderingMethod ? orderingMethod : dropList[0]} dropList={dropList} category={"선택사항"} />
        </OptionsDiv>
    )
}

export default InputOtion;