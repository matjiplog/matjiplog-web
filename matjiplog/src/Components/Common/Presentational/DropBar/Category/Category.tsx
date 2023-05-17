import { CategoryTitle } from './CategoryStyle';

import { CategoryProps } from '../../../../../types/props/DropBar/Category';

function Category({ children }: CategoryProps): JSX.Element {
    return (
        <CategoryTitle>{children}</CategoryTitle>
    )
}

export default Category;