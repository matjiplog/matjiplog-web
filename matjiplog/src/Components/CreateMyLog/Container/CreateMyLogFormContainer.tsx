import SelectImage from '../Presentational/SelectImage/SelectImage';
import SelectImageHeader from '../Presentational/SelectImageHeader/SelectImageHeader';
import InputMap from '../Presentational/InputMap/InputMap';
import InputDetail from '../Presentational/InputDetail/InputDetail';
import InputDisclosure from '../Presentational/InputDisclosure/InputDisclosure';
import InputScope from '../Presentational/InputScope/InputScope';
import InputOtion from '../Presentational/InputOption/InputOption';

import { CreateMyLogForm, ImageDiv, ImgaeAndInfo, InfoDiv, ScopeAndOptions } from './CreateMyLogFormContainerStyle';

import { useImageSelectResult } from '../../../types/hook/common/useImageSelect';
import { useImageSlideResult } from '../../../types/hook/common/useImageSlide';
import { useDisclosureResult } from '../../../types/hook/common/useDisclosure';
import { useScopeResult } from '../../../types/hook/useScope';

import { useImageSelect } from '../../../Hooks/useImageSelect';
import { useImageSlide } from '../../../Hooks/useImageSlide';
import { useDisclosure } from '../../../Hooks/useDisclosure';
import { useScope } from '../../../Hooks/useScope';

function CreateMyLogFormContainer(): JSX.Element {
    const { images, selectImages, deleteImages }: useImageSelectResult = useImageSelect();
    const { slideIndex, leftClick, rightClick }: useImageSlideResult = useImageSlide(images.length-1);
    const { disclosure, toggleDisclosure }: useDisclosureResult = useDisclosure(false);
    const { tasteScope, manyScope, serviceScope, updateScope }: useScopeResult = useScope();
    const scopeItems = [
        { title: "맛", order: "taste", state: tasteScope },
        { title: "양", order: "many", state: manyScope },
        { title: "서비스", order: "service", state: serviceScope } 
    ];

    
    return (
        <CreateMyLogForm>
            <ImgaeAndInfo>
                <ImageDiv>
                    <SelectImageHeader images={images} leftClick={leftClick} deleteImages={deleteImages} rightClick={rightClick}/>
                    <SelectImage images={images} selectImages={selectImages} slideIndex={slideIndex} />
                </ImageDiv>
                <InfoDiv>
                    <InputMap />
                    <InputDisclosure disclosure={disclosure} toggleDisclosure={toggleDisclosure}/>
                    <ScopeAndOptions>
                        <InputScope scopeItems={scopeItems} updateScope={updateScope} />
                        <InputOtion />
                    </ScopeAndOptions>
                </InfoDiv>
            </ImgaeAndInfo>
            <InputDetail />
        </CreateMyLogForm>
    )
}

export default CreateMyLogFormContainer;