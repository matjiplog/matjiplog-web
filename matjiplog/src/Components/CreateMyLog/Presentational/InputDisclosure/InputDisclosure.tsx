import { Disclosure, DisclosureTitle, DisclosureCheckDiv, DisclosureCheck } from './InputDisclosureStyle';

import { useLogResult } from '../../../../types/hook/common/useLog';

import { useLog } from '../../../../Hooks/useLog';

function InputDisclosure(): JSX.Element {
    const { log, setLog }: useLogResult = useLog();
    const { isPublic } = log;

    return (
        <Disclosure>
                <DisclosureTitle>공개</DisclosureTitle>
                <DisclosureCheckDiv active={isPublic ? 1 : 0} onClick={() => {setLog({...log, isPublic: !isPublic})}}>
                    <DisclosureCheck  />
                </DisclosureCheckDiv>
        </Disclosure>
    )
}

export default InputDisclosure;