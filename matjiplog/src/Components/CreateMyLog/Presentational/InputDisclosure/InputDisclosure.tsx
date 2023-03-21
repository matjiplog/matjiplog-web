import { Disclosure, DisclosureTitle, DisclosureCheckDiv, DisclosureCheck } from './InputDisclosureStyle';

import { InputDisclosureProps } from '../../../../types/props/CreateMyLog/InputDisclosure';

function InputDisclosure({ disclosure, toggleDisclosure }: InputDisclosureProps): JSX.Element {

    return (
        <Disclosure>
                <DisclosureTitle>공개</DisclosureTitle>
                <DisclosureCheckDiv active={disclosure ? 1 : 0} onClick={toggleDisclosure}>
                    <DisclosureCheck  />
                </DisclosureCheckDiv>
        </Disclosure>
    )
}

export default InputDisclosure;