import { SelectItem } from './SelectStyle';

import { SelectProps } from '../../../../../types/props/DropBar/Select';

function Select({ children, toggleDropBar }: SelectProps): JSX.Element {
    return <SelectItem onClick={toggleDropBar}>{children}</SelectItem>
}

export default Select;