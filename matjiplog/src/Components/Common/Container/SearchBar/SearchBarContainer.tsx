import { useMemo } from 'react';
import { getDropBarMenu } from '../../../../utils/getDropBarMenu';
import { getHasTagMenu } from '../../../../utils/getHasTagMenu';

import HasTagList from '../../Presentational/SearchBar/HasTagList/HasTagList';
import KeyWordForm from '../../Presentational/SearchBar/KeywordForm/KeyWordForm';
import SelectLogView from '../../Presentational/SearchBar/SelectLogView/SelectLogView';
import DropBarContinaer from '../DropBar/DropBarContainer';

import { SearchBarDiv, InputAndHastag } from './SearchBarContainerStyle';

function SearchBarContainer(): JSX.Element {
    const dropList: string[] = useMemo(() => {
        return getDropBarMenu();
    }, [])
    const hasTagList: string[] = useMemo(() => {
        return getHasTagMenu();
    }, [])

    return (
        <SearchBarDiv>
            <DropBarContinaer title={dropList[0]} dropList={dropList} category={"filter"}/>
            <InputAndHastag>
                <KeyWordForm />
                <HasTagList hasTagList={hasTagList}/>
            </InputAndHastag>
            <SelectLogView />
        </SearchBarDiv>
    );
}

export default SearchBarContainer;