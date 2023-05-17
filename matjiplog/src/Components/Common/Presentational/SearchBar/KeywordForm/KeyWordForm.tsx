import { useContext } from 'react';

import { SearchForm, SearchInput, SubmitBtn, Search } from './KeyWordFormStyle';

import { handlerContext } from '../../../../../Contexts/handler';

function KeyWordForm(): JSX.Element {
    const { keywordSubmitHandler } = useContext(handlerContext);

    return (
        <SearchForm onSubmit={keywordSubmitHandler}>
            <SearchInput 
                placeholder="검색어 입력..." 
                name='keyword'
            />
            <SubmitBtn type="submit">
                <Search size={30}/>
            </SubmitBtn>
        </SearchForm>
    )
}

export default KeyWordForm;