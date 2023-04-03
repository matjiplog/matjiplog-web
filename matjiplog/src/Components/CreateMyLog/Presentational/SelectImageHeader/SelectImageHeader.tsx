import { ImageTitle, ImageTitleAndBtnDiv, SlideLeftBtn, DeleteBtn, SlideRightBtn } from './SelectImageHeaderStyle';

import { SelectImageHeaderProps } from '../../../../types/props/CreateMyLog/SelectImageHeader';

function SelectImageHeader({ images, leftClick, deleteImages, rightClick }: SelectImageHeaderProps): JSX.Element {

    return (
        <ImageTitleAndBtnDiv>
            {!images[0] ? 
            <ImageTitle>사진 추가</ImageTitle> : 
            <>
                {images.length > 1 ? 
                <>
                    <SlideLeftBtn size={20} onClick={leftClick} />
                    <DeleteBtn size={20} onClick={deleteImages} />
                    <SlideRightBtn size={20} onClick={rightClick} />
                </>
                : 
                <>
                    <DeleteBtn size={20} onClick={deleteImages} />
                </>
                }
            </>
            }
        </ImageTitleAndBtnDiv>
    );
}

export default SelectImageHeader;