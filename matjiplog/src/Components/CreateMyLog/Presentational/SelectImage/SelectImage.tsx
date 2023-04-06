import { IconAndFileBtn, SelectImageItem, NonSelectImage, ImageLabel, ImageFileBtn, ImagesSelectDiv } from './SelectImageStyle';

import { SelectImageProps } from '../../../../types/props/CreateMyLog/SelectImage';
import { useLogResult } from '../../../../types/hook/common/useLog';

import { useLog } from '../../../../Hooks/useLog';

function SelectImage({ images, selectImages, deleteImage }: SelectImageProps): JSX.Element {
    const { matjip, log, order }: useLogResult = useLog();
    const { matjipSequence, imageDetail } = matjip;
    const { isCustom } = log;

    return (
        <IconAndFileBtn>
            {!images[0] ? 
                <>
                    <NonSelectImage/>
                    <ImageLabel htmlFor="profileImg" active={isCustom ? 1 : 0} >사진 추가하기</ImageLabel>
                    <ImageFileBtn 
                        type="file" accept="image/*" 
                        multiple={true} 
                        onChange={selectImages} 
                        id="profileImg"
                    />
                </>
                : 
                <>
                    <ImagesSelectDiv>
                        {images.map((value: string, index: number): JSX.Element => {
                            return (
                                <SelectImageItem 
                                    key={index} 
                                    src={value} 
                                    onClick={deleteImage}
                                />
                            )
                        })}
                    </ImagesSelectDiv>
                </>
            }
        </IconAndFileBtn>
    );
}

export default SelectImage;