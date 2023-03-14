import { IconAndFileBtn, SelectImageItem, NonSelectImage, ImageLabel, ImageFileBtn, ImagesSelectDiv } from './SelectImageStyle';

import { SelectImageProps } from '../../../../types/props/CreateMyLog/SelectImage';

function SelectImage({ images, selectImages, slideIndex }: SelectImageProps): JSX.Element {

    return (
        <IconAndFileBtn>
            {!images[0] ? 
                <>
                    <NonSelectImage/>
                    <ImageLabel htmlFor="profileImg" className="imgAddBtn">사진 추가하기</ImageLabel>
                    <ImageFileBtn type="file" accept="image/*" multiple={true} onChange={selectImages} id="profileImg"/>
                </>
                : 
                <>
                    <ImagesSelectDiv slideIndex={slideIndex} length={images.length}>
                    {images.map((value: string, index: number): JSX.Element => {
                        return <SelectImageItem key={index} src={value} length={images.length}/>
                    })}
                    </ImagesSelectDiv>
                </>
            }
        </IconAndFileBtn>
    );
}

export default SelectImage;