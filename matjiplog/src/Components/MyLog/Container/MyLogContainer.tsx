import SearchBarContainer from '../../Common/Container/SearchBar/SearchBarContainer';

import { MyLogSection } from './MyLogStyle';

function MyLogContainer(): JSX.Element {
    return (
        <MyLogSection>
            <SearchBarContainer />
        </MyLogSection>
    )
}

export default MyLogContainer;