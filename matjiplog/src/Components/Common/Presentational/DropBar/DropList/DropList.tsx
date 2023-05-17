import { DropItems, DropItem } from './DropListStyle';

import { DropListProps } from '../../../../../types/props/DropBar/DropList';

function DropList({ dropBarShow, itemList, dropBarMenu, updateSelectItem }: DropListProps): JSX.Element {

    return (
        <>
            {dropBarShow && 
                <DropItems>
                    {itemList.map((value: string, index: number): JSX.Element => {
                        return (
                            <DropItem 
                                key={index} 
                                onClick={updateSelectItem} 
                                active={dropBarMenu === value ? 1 : 0}
                            >
                                {value}
                            </DropItem>
                        )
                    })}
                </DropItems>
            }
        </>
    )
}

export default DropList;