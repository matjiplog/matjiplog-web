import Select from '../../Presentational/DropBar/Select/Select';
import Category from '../../Presentational/DropBar/Category/Category';
import DropList from '../../Presentational/DropBar/DropList/DropList';

import { DropBarDiv } from './DropBarContainerStyle';

import { useDropBarResult } from '../../../../types/hook/useDropBar';
import { DropBarContainerProps } from '../../../../types/props/DropBar/DropBarContainer';

import { useDropBar } from '../../../../Hooks/useDropBar';

function DropBarContinaer({ title, dropList, category }: DropBarContainerProps): JSX.Element {
    const { dropBarShow, dropBarMenu, toggleDropBar, updateSelectItem }: useDropBarResult = useDropBar(title);

    return  (
        <DropBarDiv>
            <Category>{category}</Category>
            <Select toggleDropBar={toggleDropBar}>{dropBarMenu}</Select>
            <DropList 
                dropBarShow={dropBarShow} 
                itemList={dropList} 
                dropBarMenu={dropBarMenu} 
                updateSelectItem={updateSelectItem}
            />
        </DropBarDiv>
    )
}

export default DropBarContinaer;